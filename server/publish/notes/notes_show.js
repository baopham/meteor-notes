/*****************************************************************************/
/* NotesShow Publish Functions
/*****************************************************************************/

Meteor.publish('notes.show', function (id) {
  if (this.userId) {
    return Notes.find({
      _id: id,
      $or: [
        { public: true },
        { owner: this.userId }
      ]
    });
  } else {
    return Notes.find({ _id: id, public: true });
  }
});