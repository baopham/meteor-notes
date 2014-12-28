/*****************************************************************************/
/* Client and Server Routes */
/*****************************************************************************/
Router.configure({
  layoutTemplate: 'MasterLayout',
  loadingTemplate: 'spinner',
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

var noteListSubscribe = function (subscription) {
  var limitKey = App.routeSessionKey('limit');
  var readyKey = App.routeSessionKey('ready');
  Meteor.subscribe(subscription, Session.get(limitKey), function () {
    Session.set(readyKey, true);
  });
}

Router.route('/notes', {
  name: 'notes.index',

  onBeforeAction: function () {
    noteListSubscribe('notes.index');
    this.next();
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

  data: function () {
    return { notes: Notes.find({ owner: Meteor.userId() }, { sort: { createdAt: -1 } }) };
  },

  onBeforeAction: function () {
    if (!Meteor.userId()) {
      // render the login template but keep the url in the browser the same
      this.render('Login');
    } else {
      noteListSubscribe('notes.own');
      this.next();
    }
  },

  action: function () {
    this.render('NotesIndex');
  }
});

Router.route('/notes/:_id', {
  name: 'notes.show',

  waitOn: function () {
    return Meteor.subscribe('notes.show', this.params._id);
  },

  data: function () {
    var note = Notes.findOne(this.params._id);

    if (!note) {
      this.render('NotFound');
    } else {
      return note;
    }
  },

  action: function () {
    this.render();
  }
});
