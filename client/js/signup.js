Users = new Mongo.Collection("users");
Template.signup.events({
  'click [quiz]': function (e) {
    e.preventDefault();
    var name = document.getElementById('first_name').value;
    var lastname = document.getElementById('last_name').value;
      var phone = document.getElementById('phone').value;
      var email = document.getElementById('email').value;

      Meteor.call("SignupUser",name,lastname,phone,email);

        window.location.href = '/quiz_dif';




      },
      'click [trigger1]': function (e) {
        e.preventDefault();
        var name = document.getElementById('first_name').value;
        var lastname = document.getElementById('last_name').value;
          var phone = document.getElementById('phone').value;
          var email = document.getElementById('email').value;


        if (name=="") {
          Materialize.toast('username required', 4000) // 4000 is the duration of the toast

        };
         if (lastname==""){
          Materialize.toast('password required', 4000) // 4000 is the duration of the toast

        }
        else {
          $("button").addClass( "modal-trigger" );

          $('.modal-trigger').leanModal();

        }
            }


});
