function getBig()
{
//remove of text
  document.getElementById("mainButtonText").remove();
  document.getElementById("mainButtonTitle").remove();
  document.getElementById("navUl").remove();
//variables
  var menu = document.getElementById("mainButton");
  menu.setAttribute("id", "mainButtonClick"); //menu
  let x = 5; //change to y / x
  let y = 5;
//create parents
  for(let i=0; i<x; i++)
  {
    let box = document.createElement("element");
    for(let g = 0; g<y; g++)
    {
      var button = document.createElement("button");
      box.appendChild(button);
      button.setAttribute("class", "buttonButton");
      button.setAttribute("onclick","menuButtonSelect()"); //get consistent names (all menu beging with menu)
      if(i==0)
      {
        let buttonText = document.createTextNode("Food");
        button.appendChild(buttonText);
      }
    }
    menu.appendChild(box);
    box.setAttribute("class", "menuItem");
    if (i==(x-1))
    {
      box.setAttribute("class", "menuItemFinal");
    }
  }
}
// make function that itterates over all available menu buttons and returns [x,y]



function menuButtonSelect()
{
  let button = document.getElementsByClassName("buttonButton");
  button.setAttribute("class", "buttonButtonClick");
}
