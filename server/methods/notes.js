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
    console.log(note);
    Notes.update(id, { $set: {
      title: note.title,
      content: note.content,
      public: note.public,
      updatedAt: new Date()
    }});
  },

  'notes.destroy': function (id) {
    Notes.remove(id);
  }
});