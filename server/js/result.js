


Meteor.methods({

    xml1: function () {
      var xml = XMLBuilder.create('root')
        .ele('xmlbuilder')
          .ele('repo', {'type': 'git'}, 'git://github.com/oozcitak/xmlbuilder-js.git')
        .end({ pretty: true});

      console.log(xml);   }



   }



);
