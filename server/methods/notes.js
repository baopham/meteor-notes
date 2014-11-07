/*****************************************************************************/
/* Notes Methods */
/*****************************************************************************/

Meteor.methods({
 /*
  * Example:
  *  '/app/notes/update/email': function (email) {
  *    Users.update({_id: this.userId}, {$set: {'profile.email': email}});
  *  }
  *
  */
  'notes.create': function (note) {
    note.title = note.title.trim();
    note.content = note.content.trim();

    if (!Meteor.call('notes.validate', note)) {
      throw new Meteor.Error("Note title and content can't be blank");;
    }

    Notes.insert({
      title: note.title,
      content: note.content,
      createdAt: new Date(),
      updatedAt: new Date(),
      public: note.public,
      owner: Meteor.userId(),
      username: Meteor.user().username
    });
  },

  'notes.update': function (id, note) {
    if (!Meteor.call('notes.validate', note)) {
      throw new Meteor.Error("Note title and content can't be blank");;
    }

    Notes.update(id, { $set: {
      title: note.title,
      content: note.content,
      public: note.public,
      updatedAt: new Date()
    }});
  },

  'notes.destroy': function (id) {
    Notes.remove(id);
  },

  'notes.validate': function (note) {
    return !_.isEmpty(note.title.trim()) && !_.isEmpty(note.content.trim());
  }
});