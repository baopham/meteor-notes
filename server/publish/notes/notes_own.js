/*****************************************************************************/
/* NotesOwn Publish Functions
/*****************************************************************************/

Meteor.publish('notes.own', function (limit) {
  if (this.userId) {
    return Notes.find({ owner: this.userId }, { limit: limit, sort: { createdAt: -1 } });
  }
  return [];
});
