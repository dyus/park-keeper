angular.module('parkKeeper').run(['$templateCache', function($templateCache) {
    $templateCache.put('controllers/main.html',
        "<div class=\"row\">\n    <div class=\"col-xs-6\">\n        <table class=\"table table-hover table-condensed\">\n            <!--<thead>\n                <tr>\n                    <th>Monitoring</th>\n                    <th>Status</th>\n                    <th>Last check</th>\n                </tr>\n            </thead>-->\n            <tbody>\n                <tr>\n                    <td>\n                        ping all hosts\n                        <span class=\"note\">5 hosts</span>\n                    </td>\n                    <td>\n                        <span class=\"label label-success\">ok</span>\n                    </td>\n                    <td tooltip=\"2015-10-23 10:00:05\">\n                        30 sec\n                    </td>\n                </tr>\n                <tr>\n                    <td>\n                        ping all hosts\n                        <span class=\"note\">5 hosts</span>\n                    </td>\n                    <td>\n                        <span class=\"label label-success\">ok</span>\n                    </td>\n                    <td tooltip=\"2015-10-23 10:00:05\">\n                        30 sec\n                    </td>\n                </tr>\n            </tbody>\n        </table>\n    </div>\n\n    <div class=\"col-xs-3 col-xs-offset-1\">\n        <div class=\"row\">\n            <ul class=\"list-group\">\n                <li class=\"list-group-item\">\n                    <h4>Task queue</h4>\n                </li>\n\n                <li class=\"list-group-item\">\n                    <span class=\"badge\">15</span>\n                    ping all hosts\n                </li>\n                <li class=\"list-group-item\">\n                    <span class=\"badge\">9</span>\n                    check mysql\n                </li>\n            </ul>\n        </div>\n\n        <div class=\"row\">\n            <table class=\"table table-hover table-condensed\">\n                <tbody>\n                    <tr class=\"info\">\n                        <td>\n                            <span class=\"label label-default\">MacBook</span>\n                            worker 1\n                        </td>\n                        <td>ping all hosts</td>\n                        <td><span class=\"note\">localhost</span></td>\n                    </tr>\n                    <tr class=\"info\">\n                        <td>\n                            <span class=\"label label-default\">MacBook</span>\n                            worker 2\n                        </td>\n                        <td>ping all hosts</td>\n                        <td><span class=\"note\">portal</span></td>\n                    </tr>\n                    <tr class=\"active\">\n                        <td>\n                            <span class=\"label label-default\">MacBook</span>\n                            worker 3\n                        </td>\n                        <td>waiting</td>\n                        <td></td>\n                    </tr>\n            </table>\n        </div>\n    </div>\n</div>");
}]);