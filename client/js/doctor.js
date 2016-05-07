Template.doctor.events({
  'click [check]': function (e) {
    e.preventDefault();

    var username = document.getElementById('Username').value;
    var paswword = document.getElementById('password').value;

    if(username=="doctor" && paswword=="doctor"){
    window.location.href = '/result';
        }
        else {
          Materialize.toast('Wrong my dear friend', 4000) // 4000 is the duration of the toast

        }

      }
});
