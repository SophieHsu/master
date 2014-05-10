if (Meteor.isClient) {
  Template.hello.greeting = function () {
    return "Welcome to practice.";
  };

  Template.hello.events({
    'click input': function () {
      // template data, if any, is available in 'this'
        console.log("You pressed the button");
    }
  });

  Template.hello.username = function() {
    return Session.get("username");
  }
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
    Session.set("username", "Sophie Hsu");
  });
}
