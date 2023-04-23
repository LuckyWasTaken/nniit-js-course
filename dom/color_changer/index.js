const text = document.getElementById('text');

const colors = ['RED', 'BLUE', 'GREEN', 'BLACK'];

document.body.addEventListener("click", function(event) {
  if (event.target.nodeName == "BUTTON"){
    textContent = event.target.textContent.trim();
    if (colors.includes(textContent)){
      text.style.color = textContent;
    }
    else if (textContent == 'ITALIC'){
      if (['normal', ''].includes(text.style.fontStyle)){
        text.style.fontStyle = 'italic'; 
      }
      else {
        text.style.fontStyle = 'normal';
      }
    }
    else if (textContent == 'BOLD'){
      if (['normal', ''].includes(text.style.fontWeight)){
        text.style.fontWeight = 'bold';
      }
      else {
        text.style.fontWeight = 'normal';
      }
    }     
  }    
});