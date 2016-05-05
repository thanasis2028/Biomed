Template.quiz_dif.events({
  'click [quiz]': function (e) {
    e.preventDefault();
  var dif1= getRadioValue('group1');
  var dif2= getRadioValue('group2');
  var dif3= getRadioValue('group3');
  var dif4= getRadioValue('group4');
  var dif5= getRadioValue('group5');
  var dif6= getRadioValue('group6');
  var dif7= getRadioValue('group7');



  window.location.href = '/quiz_ddf';





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
