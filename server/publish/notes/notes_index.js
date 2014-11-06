/*****************************************************************************/
/* NotesIndex Publish Functions
/*****************************************************************************/

Meteor.publish('notes_index', function () {
  if (this.userId) {
    return Notes.find({
      $or: [
        { public: true },
        { owner: this.userId }
      ]
    });
  }
  else {
    return Notes.find({ public: true });
  }
});