/*****************************************************************************/
/* NotesIndex Publish Functions
/*****************************************************************************/

Meteor.publish('notes.index', function (limit) {
  if (this.userId) {
    return Notes.find({
      $or: [
        { public: true },
        { owner: this.userId }
      ]
    }, { limit: limit, sort: { createdAt: -1 } });
  }
  else {
    return Notes.find({ public: true }, { limit: limit, sort: { createdAt: -1 } });
  }
});