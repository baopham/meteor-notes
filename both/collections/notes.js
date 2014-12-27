Notes = new Mongo.Collection('notes');

Notes.initEasySearch(['content', 'title'], {
  limit: 20,
  use: 'mongo-db',
  query: function (searchString) {
    var selector = EasySearch.getSearcher(this.use).defaultQuery(this, searchString);

    selector['$and'] = [];

    selector['$and'].push({
      '$or': [
        { public: true },
        { owner: this.publishScope.userId }
      ]
    });

    selector['$and'].push({
      '$or': selector['$or']
    });

    delete selector['$or'];

    return selector;
  }
});

/*
 * Add query methods like this:
 *  Notes.findPublic = function () {
 *    return Notes.find({is_public: true});
 *  }
 */