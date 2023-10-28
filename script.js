



const display = document.querySelector(".display");
const output = document.querySelector(".output");
const buttons = document.querySelectorAll("button");
const colorpicker = document.querySelector("#colorpicker");
const maincontainer = document.querySelector(".maincontainer");

const mainheading= document.querySelector(".mainheadingspan");
const specialChars =["%","*","/","-","+","="];
let outputsetvalue="";
display.focus();

buttons.forEach((button)=>{
button.addEventListener("click",(e)=>calculate(e.target.dataset.value));

//PRESS ENTER FROM KEYBOARD
display.addEventListener("keypress",function(event){
    if(event.key ==="Enter"){
        event.preventDefault();
        calculate("=");
    }
})

});
const calculate=(btnValue)=>{
       if(btnValue=="undefined" || btnValue==undefined)
    {
        return;
    }
    display.focus();
   if(btnValue === "=" && display.value!="")
   {
        outputsetvalue = eval(display.value.replace("%","/100"));
        output.innerText = "="+outputsetvalue;
        outputsetvalue="";

   }
   else if(btnValue === "CE"){
    display.value="";
    output.innerText="= 0";
    outputsetvalue="";
   }
   else if(btnValue==="DEL" && display.value!=""){
        display.value = display.value.toString().slice(0,-1);
        outputsetvalue= display.value;
   }
   else
   {
    //If output is empty and button is special character then return
    if(display.value ==="" && specialChars.includes(btnValue) || btnValue==="DEL") {return;}
    else{
    outputsetvalue+=btnValue;
    display.value=outputsetvalue;
    }
   }

}


colorpicker.addEventListener("change",(e)=>changecolor(e.target.value));


const changecolor=(changecolor)=>{
// alert(changecolor);
maincontainer.style.backgroundColor= changecolor;
mainheading.style.backgroundColor= changecolor;
}

