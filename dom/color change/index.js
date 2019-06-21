function giveAlert()
{

alert('Клик!');

}

function modulator() 
{
var currentMode = 0;

  return function() {
    currentMode++;
    if(currentMode > 3) currentMode = 1;
    return currentMode;
  };
}

function setModulator() 
{
    let elem = document.getElementById("t");
    elem.mode = {mode: modulator()};
    elem.mode2 = {mode2: 'JS хуйня'};

    document.body.myData = {
        name: 'Петр',
        familyName: 'Петрович'
      };
}


function changeColor()
{
    //alert( document.body.myData.name );
    //let elem = document.getElementById("t");

    //elem.mode2 = {mode2: 'JS хуйня'};

    //alert(elem.getAttribute('mode')());
    //alert(elem.mode2);
   alert('Клик!');

    //switch (mode) 
    //{
      //  case 1:
      //      elem.style.color = 'red';
      //      break;
      //  case 2:
      //      elem.style.color = 'green';
       //     break;
       // case 3:
       //     elem.style.color = 'blue';
       //     break;
      //  default:
     //       break;
    //}
}