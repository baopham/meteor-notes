/*****************************************************************************/
/* NotesForm: Event Handlers and Helpersss .js*/
/*****************************************************************************/
Template.NotesForm.events({
  /*
   * Example:
   *  'click .selector': function (e, tmpl) {
   *
   *  }
   */
  'click .preview-tab': function (e) {
    Session.set('preview-content', $('#' + this.type + '-note-content').val());
  }
});

Template.NotesForm.helpers({
  /*
   * Example:
   *  items: function () {
   *    return Items.find();
   *  }
   */
  previewContent: function () {
    return Session.get('preview-content');
  }
});

/*****************************************************************************/
/* NotesForm: Lifecycle Hooks */
/*****************************************************************************/
Template.NotesForm.created = function () {
};

Template.NotesForm.rendered = function () {
};

Template.NotesForm.destroyed = function () {
};