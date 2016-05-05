Template.quiz_eot.events({
  'click [quiz]': function (e) {
    e.preventDefault();
  var eot1= getRadioValue('group1');
  var eot2= getRadioValue('group2');
  var eot3= getRadioValue('group3');
  var eot4= getRadioValue('group4');
  var eot5= getRadioValue('group5');
  var eot6= getRadioValue('group6');
  var eot7= getRadioValue('group7');
  var eot8= getRadioValue('group8');



  window.location.href = '/';





      }
});




//fun for get radio button value
function getRadioValue(theRadioGroup)
{
    var elements = document.getElementsByName(theRadioGroup);
    for (var i = 0, l = elements.length; i < l; i++)
    {
        if (elements[i].checked)
        {
            return elements[i].value;
        }
    }
}
