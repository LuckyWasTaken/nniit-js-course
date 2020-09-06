function colorChanger(btn)
{ 
    bgColorBtn=getComputedStyle(btn, null).getPropertyValue("background-color")
    text=document.getElementById("text");
    text.style.color =bgColorBtn;
}