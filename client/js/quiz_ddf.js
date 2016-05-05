Template.quiz_ddf.events({
  'click [quiz]': function (e) {
    e.preventDefault();
  var ddf1= getRadioValue('group1');
  var ddf2= getRadioValue('group2');
  var ddf3= getRadioValue('group3');
  var ddf4= getRadioValue('group4');
  var ddf5= getRadioValue('group5');




  window.location.href = '/quiz_eot';





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
