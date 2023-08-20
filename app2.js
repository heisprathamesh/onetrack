
const navlist = document.getElementById("navlist");
const ham = document.getElementById("hamd");

let nav_anable =()=>{

    if(navlist.style.display ==="none"){
        navlist.style.display = "flex";
    }
    else{
        navlist.style.display="none";
    }
}
let to_give_none=()=>{
    if(navlist.style.display==="none"){
       navlist.setAttribute("style" ,"display='none'")

    }
    else{
        navlist.setAttribute("style","display='flex'")
    }
}
to_give_none();
ham.addEventListener("click", nav_anable);


const sent = document.getElementById("sent");
document.getElementById("ha").addEventListener("click", ()=>{
    sent.innerHTML=(`Thanks!!`);
    if(dial1.style.display==="none"){
        dial1.style.display="flex";
    }
    else{
        dial1.style.display="none";
    }
})    

document.getElementById("nahi").addEventListener("click", ()=>{
    sent.innerHTML=(`okay now go and like it!!`);
    if(dial1.style.display==="none"){
        dial1.style.display="flex";
    }
    else{
        dial1.style.display="none";
    }
})     
var dial1 = document.getElementById("dial1");
document.getElementById("okay").onclick= ()=>{
   dial1.style.display="none";
};


/*cutout imag */
//for the cutout


var sec6 = document.getElementById("sec6");
let bgchange=()=>{
 if(sec6.style.backgroundColor ==="rgb(255, 72, 0)"){
     sec6.style.backgroundColor="rgb(255, 0, 0)";
 }
 else if(sec6.style.backgroundColor==="rgb(255, 0, 0)"){
     sec6.style.backgroundColor="rgb(0, 36, 194)";
 }
 else if(sec6.style.backgroundColor==="rgb(0, 36, 194)"){
     sec6.style.backgroundColor="rgba(0, 0, 0, 0)"
 }
 else{
     sec6.style.backgroundColor="rgb(255, 72, 0)";
 }

 window.setTimeout(bgchange,5000);
}
bgchange();
console.log(sec6.style.backgroundColor)