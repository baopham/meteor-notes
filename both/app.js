/*****************************************************************************/
/* App: The Global Application Namespace */
/*****************************************************************************/
App = {};

App.routeSessionKey = function (type) {
    return Router.current().route.getName() + '.' + type;
};