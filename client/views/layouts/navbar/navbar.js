/*****************************************************************************/
/* Navbar: Event Handlers and Helpersss .js*/
/*****************************************************************************/
Template.Navbar.events({
  /*
   * Example:
   *  'click .selector': function (e, tmpl) {
   *
   *  }
   */
});

Template.Navbar.helpers({
  /*
   * Example:
   *  items: function () {
   *    return Items.find();
   *  }
   */
  pathForList: function (routeName) {
    var limit = parseInt(Session.get(routeName + '.limit'));
    if (!!limit && limit != App.NOTES_INCREMENT) {
      return Router.routes[routeName].path({}, { query: 'limit=' + limit });
    }

    return Router.routes[routeName].path();
  }
});

/*****************************************************************************/
/* Navbar: Lifecycle Hooks */
/*****************************************************************************/
Template.Navbar.created = function () {
};

Template.Navbar.rendered = function () {
};

Template.Navbar.destroyed = function () {
};