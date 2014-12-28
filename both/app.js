/*****************************************************************************/
/* App: The Global Application Namespace */
/*****************************************************************************/
App = {};

App.NOTES_INCREMENT = Meteor.settings.public.notesInc;

App.routeSessionKey = function (type) {
    return Router.current().route.getName() + '.' + type;
};