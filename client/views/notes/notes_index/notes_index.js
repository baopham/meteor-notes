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
    var key = App.routeSessionKey('selectedNote');
    Session.set(key, this._id);
  }

});

Template.NotesIndex.helpers({
  /*
   * Example:
   *  items: function () {
   *    return Items.find();
   *  }
   */
  ready: function () {
    return dataReady();
  },

  loadMoreUrl: function () {
    var limit = Session.get(App.routeSessionKey('limit')) + App.NOTES_INCREMENT;
    return Router.current().route.path() + '?limit=' + limit;
  },

  note: function () {
    var key = App.routeSessionKey('selectedNote');
    if (Session.get(key)) {
      return Notes.findOne(Session.get(key));
    } else if (dataReady()) {
      var note = Notes.findOne({}, { sort: { createdAt: -1 } });
      Session.set(key, note._id);
      return note;
    }
  },

  activeNoteClass: function () {
    var key = App.routeSessionKey('selectedNote');
    return Session.get(key) == this._id && 'active';
  },

  pageTitle: function () {
    return isOwnPage() ? 'Your notes' : 'Discover notes';
  },

  moreResults: function () {
    var key = sessionLimitKey();
    return !(Notes.find().fetch().length < Session.get(key));
  }
});

function dataReady() {
  var key = App.routeSessionKey('ready');
  return !!Session.get(key);
}

function isOwnPage() {
  return Router.current().route.getName() == 'notes.own';
}

function sessionLimitKey() {
  return App.routeSessionKey('limit');
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