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

  activeIfTemplateIs: function (template) {
    var currentRoute = Router.current();
    return currentRoute &&
      template === currentRoute.lookupTemplate() ? 'active' : '';
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