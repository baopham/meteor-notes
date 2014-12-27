Notes = new Mongo.Collection('notes');

Notes.initEasySearch(['content', 'title'], {
  limit: 20,
  use: 'mongo-db',
  query: function () {
    var selector = {};
    selector['$or'] = [];
    selector['$or'].push({ public: true });
    selector['$or'].push({ owner: this.publishScope.userId });
    return selector;
  }
});

/*
 * Add query methods like this:
 *  Notes.findPublic = function () {
 *    return Notes.find({is_public: true});
 *  }
 */