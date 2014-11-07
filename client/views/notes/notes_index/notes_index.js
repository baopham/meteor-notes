/*****************************************************************************/
/* NotesIndex: Event Handlers and Helpersss .js*/
/*****************************************************************************/
Template.NotesIndex.events({
  /*
   * Example:
   *  'click .selector': function (e, tmpl) {
   *
   *  }
   */
  'click .note-item': function (e, tmpl) {
    Session.set('selected-note', this._id);
  }
});

Template.NotesIndex.helpers({
  /*
   * Example:
   *  items: function () {
   *    return Items.find();
   *  }
   */
  note: function () {
    if (Session.get('selected-note')) {
      return Notes.findOne(Session.get('selected-note'));
    } else {
      var note = Notes.findOne({}, { createdAt: -1 });
      Session.set('selected-note', note._id);
      return note;
    }
  },

  activeNoteClass: function () {
    return Session.get('selected-note') == this._id && 'active';
  }
});

/*****************************************************************************/
/* NotesIndex: Lifecycle Hooks */
/*****************************************************************************/
Template.NotesIndex.created = function () {
};

Template.NotesIndex.rendered = function () {
};

Template.NotesIndex.destroyed = function () {
};