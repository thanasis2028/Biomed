Users = new Mongo.Collection("users");
Template.signup.events({
  'click [quiz]': function (e) {
    e.preventDefault();
    var name = document.getElementById('first_name').value;
    var lastname = document.getElementById('last_name').value;
      var phone = document.getElementById('phone').value;
      var age = document.getElementById('age').value;

      Meteor.call("SignupUser",name,lastname,phone,age);
alert(3);
        window.location.href = '/quiz';




      }



});
