/*****************************************************************************/
/* NotesCreate: Event Handlers and Helpersss .js*/
/*****************************************************************************/
Template.NotesCreate.events({
  /*
   * Example:
   *  'click .selector': function (e, tmpl) {
   *
   *  }
   */
  'submit .note-form': function (e) {
    var target = e.target;

    Meteor.call('notes.create', {
      title: target.title.value,
      content: target.content.value,
      public: target.public.checked
    });

    e.target.title.value = '';
    e.target.content.value = '';
    e.target.public.checked = false;

    return false;
  }
});

Template.NotesCreate.helpers({
  /*
   * Example:
   *  items: function () {
   *    return Items.find();
   *  }
   */
});

/*****************************************************************************/
/* NotesCreate: Lifecycle Hooks */
/*****************************************************************************/
Template.NotesCreate.created = function () {
};

Template.NotesCreate.rendered = function () {
};

Template.NotesCreate.destroyed = function () {
};