/*****************************************************************************/
/* Client App Namespace  */
/*****************************************************************************/

_.extend(App, {
});

App.NOTES_INCREMENT = Meteor.settings.public.notesInc;
Session.setDefault('notes.index.limit', App.NOTES_INCREMENT);
Session.setDefault('notes.own.limit', App.NOTES_INCREMENT);

App.helpers = {
  formatDate: function (date) {
    var day = date.getDate();
    var month = date.getMonth() + 1;
    var year = date.getFullYear();
    return day + '/' + month + '/' + year;
  },

  activePage: function () {
    var routeNames = arguments;
    var currentRouteName = Router.current().route && Router.current().route.getName();

    return _.include(routeNames, currentRouteName) && 'active';
  },

  truncate: function (str, length) {
    length = length || 10;
    var ellipsis = (str.length > length) ? '...' : '';
    return str.substr(0, length) + ellipsis;
  }
};

_.each(App.helpers, function (helper, key) {
  Handlebars.registerHelper(key, helper);
});

Accounts.ui.config({
  passwordSignupFields: 'USERNAME_AND_OPTIONAL_EMAIL'
});