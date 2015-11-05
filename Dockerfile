# docker build -t telminov/park-keeper .
# docker run --rm -ti --name parkkeeper --link mongo3:mongo3 -p 8080-8081:8080-8081 -p 5548-5552:5548-5552 --volume=/var/docker/park-keeper/conf/:/conf/ --volume=/var/docker/park-keeper/data/:/data/ telminov/park-keeper

FROM telminov/ubuntu-14.04-python-3.5
MAINTAINER telminov <telminov@soft-way.biz>

# web server web socket server
EXPOSE 8080-8081
# zmq ports
EXPOSE 5548-5552

# directory for sqlite3 database
VOLUME /data/
# django settings and frontend config
VOLUME /conf/

RUN apt-get update && \
    apt-get install -y \
                    vim \
                    curl \
                    build-essential \
                    git \
                    supervisor

# install nodejs
RUN curl -sL https://deb.nodesource.com/setup | bash -
RUN apt-get install -y nodejs

RUN mkdir /var/log/park-keeper

# copy source
COPY . /opt/park-keeper
WORKDIR /opt/park-keeper

# install frontend
WORKDIR /opt/park-keeper/frontend
RUN npm install
RUN node_modules/.bin/bower install --allow-root --config.interactive=false
RUN node_modules/.bin/gulp build

# install backend
WORKDIR /opt/park-keeper/backend
RUN pip3 install -r requirements.txt

COPY supervisor.conf /etc/supervisor/conf.d/park-keeper.conf


CMD cd /opt/park-keeper/frontend; \
    test "$(ls /conf/config.coffee)" || cp src/app/config.coffee /conf/config.coffee; \
    rm src/app/config.coffee; \
    ln -s /conf/config.coffee src/app/config.coffee; \
    node_modules/.bin/gulp build; \
    cd /opt/park-keeper/backend; \
    test "$(ls /conf/settings.py)" || cp project/settings.sample.py /conf/settings.py; \
    rm project/settings.py; \
    ln -s /conf/settings.py project/settings.py; \
    python3 ./manage.py migrate; \
    /usr/bin/supervisord

