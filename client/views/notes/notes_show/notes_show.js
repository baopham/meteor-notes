/*****************************************************************************/
/* NotesShow: Event Handlers and Helpersss .js*/
/*****************************************************************************/
Template.NotesShow.events({
  /*
   * Example:
   *  'click .selector': function (e, tmpl) {
   *
   *  }
   */
  'click .edit-note': function (e, tmpl) {
    Session.set('notes.editing-' + tmpl.data._id, true);
  },

  'click .delete-note': function (e, tmpl) {
    Session.set('notes.editing-' + tmpl.data._id, false);
    Meteor.call('notes.destroy', tmpl.data._id);
    Router.go('notes.index');
  }
});

Template.NotesShow.helpers({
  /*
   * Example:
   *  items: function () {
   *    return Items.find();
   *  }
   */
  editing: function () {
    return Session.get('notes.editing-' + this._id);
  },

  isOwner: function () {
    return Meteor.userId() && Meteor.userId() === this.owner;
  }
});

/*****************************************************************************/
/* NotesShow: Lifecycle Hooks */
/*****************************************************************************/
Template.NotesShow.created = function () {
};

Template.NotesShow.rendered = function () {
};

Template.NotesShow.destroyed = function () {
};