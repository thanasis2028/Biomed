Template.result.helpers({
  result() {
    // Show newest tasks at the top
    return Users.find({}, { sort: { createdAt: -1 } });
  },
});
Template.result.events({
  'click [export]': function (e) {
    e.preventDefault();
    Meteor.call("xml1");


  }
})
