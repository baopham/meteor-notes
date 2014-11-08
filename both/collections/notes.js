Notes = new Mongo.Collection('notes');
Notes.initEasySearch(['content', 'title'], {
  limit: 20
});
/*
 * Add query methods like this:
 *  Notes.findPublic = function () {
 *    return Notes.find({is_public: true});
 *  }
 */