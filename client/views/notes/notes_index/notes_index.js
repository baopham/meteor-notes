/*****************************************************************************/
/* NotesIndex: Event Handlers and Helpersss .js*/
/*****************************************************************************/
var NOTES_INCREMENT = 3;
Session.setDefault('notes.index.limit', NOTES_INCREMENT);
Session.setDefault('notes.own.limit', NOTES_INCREMENT);

Template.NotesIndex.events({
  /*
   * Example:
   *  'click .selector': function (e, tmpl) {
   *
   *  }
   */
  'click .note-item': function (e, tmpl) {
    Session.set('selected-note', this._id);
  },

  'click .load-more': function (e, tmpl) {
    incLimit();
    return false;
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
      var note = Notes.findOne({}, { sort: { createdAt: -1 } });
      Session.set('selected-note', note._id);
      return note;
    }
  },

  activeNoteClass: function () {
    return Session.get('selected-note') == this._id && 'active';
  },

  pageTitle: function () {
    return isOwnPage() ? 'Your notes' : 'Discover notes';
  },

  moreResults: function () {
    var key = sessionLimitKey();
    return !(Notes.find().fetch().length < Session.get(key));
  }
});

function isOwnPage() {
  return Router.current().route.getName() == 'notes.own';
}

function incLimit() {
  var key = sessionLimitKey();
  Session.set(key, Session.get(key) + NOTES_INCREMENT);
}

function sessionLimitKey() {
  return isOwnPage() ? 'notes.own.limit' : 'notes.index.limit';
}

/*****************************************************************************/
/* NotesIndex: Lifecycle Hooks */
/*****************************************************************************/
Template.NotesIndex.created = function () {
};

Template.NotesIndex.rendered = function () {
};

Template.NotesIndex.destroyed = function () {
};