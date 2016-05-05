Template.signup.events({
  'click [quiz]': function (e) {
    e.preventDefault();
    var name = document.getElementById('first_name').value;
    var lastname = document.getElementById('last_name').value;
      var phone = document.getElementById('phone').value;
      var email = document.getElementById('email').value;
      //Meteor.call("SignupUser",name,lastname,phone,email);
    window.location.href = '/quiz_dif';


      }
});
