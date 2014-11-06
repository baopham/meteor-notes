/*****************************************************************************/
/* Client and Server Routes */
/*****************************************************************************/
Router.configure({
  layoutTemplate: 'MasterLayout',
  loadingTemplate: 'Loading',
  notFoundTemplate: 'NotFound'
});

/*
 *  Example:
 *  Router.route('/', {name: 'home'});
*/

Router.route('home', {
  path: '/',
  action: function() {
    Router.go('notes.index');
  }
});

// TODO: make controller work.
// Router.route('/notes', {
//   name: 'notes.index',
//   controller: NotesIndexController
// });
//
// Router.route('/notes/:_id', {
//   name: 'notes.show',
//   controller: 'NotesShowController'
// });

Router.route('/notes', {
  name: 'notes.index',

  waitOn: function () {
    return Meteor.subscribe('notes_index');
  },

  data: function () {
    return { notes: Notes.find({}, { sort: { createdAt: -1 } }) };
  },

  action: function () {
    this.render();
  }

});

Router.route('/notes/:_id', {
  name: 'notes.show',

  waitOn: function () {
    return Meteor.subscribe('notes_index');
  },

  data: function () {
    return Notes.findOne(this.params._id);
  },

  action: function () {
    this.render();
  }
});
