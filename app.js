// let btn=document.querySelector("button");
// btn.addEventListener("click",function(){

//     let h3=document.querySelector("h3");
//     let randomColor=getRandomcolor();
//     h3.innerText=randomColor;
//     console.log("THis is your new color");
//     let div=document.querySelector("div");
//     div.style.backgroundColor=randomColor;

// });

// Function to generate a random RGB color
    // function getRandomcolor(){
    //     let red=Math.floor(Math.random()*255);
    //     let green=Math.floor(Math.random()*255);
    //     let blue=Math.floor(Math.random()*255);
    //     let color=`rgb(${red},${green},${blue})`;
    //     return color;
    // }; 

//function to use this in event listener

// let h3=document.querySelector("h3");
// let div=document.querySelector("div");
// function changecolor(){
//     console.log(this.color);
//     this.style.backgroundColor="blue";
// }
// h3.addEventListener('click',changecolor);
// btn.addEventListener('click',changecolor);
// let form=document.querySelector("form");
// form.addEventListener("Register",function(){
//     // let button=document.querySelector("button");
//     // button.addEventListener("click",function(){
//         alert("Form submitted");
//     // })
// })
// let button=document.querySelector("button");
// button.addEventListener("click",function(){
//     let input=document.querySelector("input");
//     let name=input.value;
//     if(name){
//         alert(`Welcome ${name}`);
//     }else{
//         alert("Please enter your name");
//     }
// });

//END


//Infinite loop using setTimeout for Blinking Text

// let b = function () {
//     setTimeout(function(){
//         let h3 = document.querySelector("h3");
//         h3.style.color = "red";
//         c(); // call c after red
//     }, 500);
// };

// let c = function () {
//     setTimeout(function(){
//         let h3 = document.querySelector("h3");
//         h3.style.color = "orange";
//         b(); // call b after yellow
//     }, 500);
// };

// // Start the loop
// b();

//END
try{
    let result=5/0;
    // console.log(result);
    let num=undefinedVariable; // This will throw an error
}
catch(error){
    console.error("An error occurred:", error.message);
}
finally{
    console.log("This will always execute, regardless of an error.");
}
 let num=undefinedVariable;
