let color1 = document.getElementById("color1");
let color2 = document.getElementById("color2");
let color3 = document.getElementById("color3");
let body = document.querySelector("html"); 
let p = document.querySelector("p");
let deg = document.getElementById("slider");
let pallete = document.getElementById("dropdown");

function getColors(){
  body.style.backgroundImage = "linear-gradient("+ deg.value  + "deg,"  + color1.value + "," + color2.value + "," + color3.value +") ";
  p.textContent = body.style.backgroundImage;
}

function choosePallete(){
  switch(pallete.value){
    case "Jshine":{
            color1.value = "#12c2e9";
            color2.value = "#c471ed";
            color3.value = "#f64f59";
            break;
         }
     case "Megatron":{
            color1.value = "#C6FFDD";
            color2.value = "#FBD786";
            color3.value = "#f64f59";
            break;
        }
     case "Memariani":{
            color1.value = "#aa4b6b";
            color2.value = "#6b6b83";
            color3.value = "#3b8d99";
            break;
        }
     case "Ohhappiness":{
           color1.value = "#00b09b";
           color2.value = "#00b09b";
           color3.value = "#96c93d";
           break;
        }
     case "King Yna":{
           color1.value = "#1a2a6c";
           color2.value = "#b21f1f";
           color3.value = "#fdbb2d";
           break;
        }
    }
  getColors();
}

getColors();
color1.addEventListener("input",getColors);
color2.addEventListener("input",getColors);
color3.addEventListener("input",getColors);
deg.addEventListener("input",getColors);
pallete.addEventListener("input",choosePallete);