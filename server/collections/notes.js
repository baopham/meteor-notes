/*
 * Add query methods like this:
 *  Notes.findPublic = function () {
 *    return Notes.find({is_public: true});
 *  }
 */
Notes.allow({
  insert: function (userId, note) {
    return note.owner === userId && Meteor.call('notes.validate', note);
  },

  update: function (userId, note, fieldNames, modifier) {
    return note.owner == userId && Meteor.call('notes.validate', note);
  },

  remove: function (userId, note) {
    return note.owner === userId;
  }
});

Notes.deny({
  insert: function (userId, doc) {
    return false;
  },

  update: function (userId, doc, fieldNames, modifier) {
    return false;
  },

  remove: function (userId, doc) {
    return false;
  }
});