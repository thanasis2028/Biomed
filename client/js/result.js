Template.result.helpers({
  result() {
    // Show newest tasks at the top
    return Users.find({}, { sort: { createdAt: -1 } });
  },
});
