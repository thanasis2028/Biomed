


Meteor.methods({

    SignupUser: function (name,lastname,phone,email) {
     Users.insert({name:name,lastname:lastname,phone:phone,email:email });
   }



   }



);
