/*****************************************************************************/
/* NotesShow Publish Functions
/*****************************************************************************/

Meteor.publish('notes_show', function (id) {
  if (this.userId) {
    return Notes.findOne({
      _id: id,
      $or: [
        { public: true },
        { owner: this.userId }
      ]
    });
  } else {
    return Notes.findOne({ _id: id, public: true });
  }
});