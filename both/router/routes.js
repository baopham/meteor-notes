/*****************************************************************************/
/* Client and Server Routes */
/*****************************************************************************/
Router.configure({
  layoutTemplate: 'MasterLayout',
  loadingTemplate: 'Loading',
  notFoundTemplate: 'NotFound',
  onAfterAction: function () {
    $('#content').hide().fadeIn(350);
  }
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

Router.route('/notes/own', {
  name: 'notes.own',

  waitOn: function () {
    return Meteor.subscribe('notes_own');
  },

  data: function () {
    return { notes: Notes.find({ owner: Meteor.userId() }, { sort: { createdAt: -1 } }) };
  },

  onBeforeAction: function () {
    if (!Meteor.userId()) {
      // render the login template but keep the url in the browser the same
      // TODO: login template
      this.render('login');
    } else {
      this.next();
    }
  },

  action: function () {
    delete Session.keys['selected-note']
    this.render('NotesIndex');
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
