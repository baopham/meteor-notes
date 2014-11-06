/*****************************************************************************/
/* NotesEdit: Event Handlers and Helpersss .js*/
/*****************************************************************************/
Template.NotesEdit.events({
  /*
   * Example:
   *  'click .selector': function (e, tmpl) {
   *
   *  }
   */
  'submit .note-form': function (e, tmpl) {
    var target = e.target;

    Meteor.call('notes.update', tmpl.data.note._id, {
      title: target.title.value,
      content: target.content.value,
      public: target.public.checked
    });
    return false;
  }
});

Template.NotesEdit.helpers({
  /*
   * Example:
   *  items: function () {
   *    return Items.find();
   *  }
   */
});

/*****************************************************************************/
/* NotesEdit: Lifecycle Hooks */
/*****************************************************************************/
Template.NotesEdit.created = function () {
};

Template.NotesEdit.rendered = function () {
};

Template.NotesEdit.destroyed = function () {
};