/*****************************************************************************/
/* Client App Namespace  */
/*****************************************************************************/
_.extend(App, {
});

App.helpers = {
  formatDate: function (date) {
    var day = date.getDate();
    var month = date.getMonth() + 1;
    var year = date.getFullYear();
    return day + '/' + month + '/' + year;
  },

  activePage: function () {
    var routeNames = arguments;

    return _.include(routeNames, Router.current().route.getName()) && 'active';
  }
};

_.each(App.helpers, function (helper, key) {
  Handlebars.registerHelper(key, helper);
});

Accounts.ui.config({
  passwordSignupFields: 'USERNAME_AND_OPTIONAL_EMAIL'
});