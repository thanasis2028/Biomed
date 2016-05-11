


Meteor.methods({

    SignupUser: function (name,lastname,phone,age) {
     Users.insert({name:name,lastname:lastname,phone:phone,age:age });
   }



   }



);
