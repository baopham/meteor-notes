/*****************************************************************************/
/* NotesOwn Publish Functions
/*****************************************************************************/

Meteor.publish('notes_own', function () {
  if (this.userId) {
    return Notes.find({ owner: this.userId });
  }
  return [];
});
