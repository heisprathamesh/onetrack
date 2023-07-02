

 /* scripting for hiding and curtains*/
 let sky=()=> {
    var x = document.getElementById("noner");
     var n= document.getElementById("curt");

     // if(x.style.display == "block"){
     //     x.style.display ="none";
     // }
     // else{
     //     x.style.display = "block"
     // }

     if(n.style.display == "none"){
         n.style.display ="block";
     }
     else{
         n.style.display = "none";
     }  
 }
 document.querySelector(".hamd").addEventListener("click",sky);
 document.getElementById("home1").addEventListener("click", sky);
 // for bgcolor change
   




    let ha =  document.getElementById("ha");
    let nahi = document.getElementById("nahi");

    let skyha=()=>{
        alert("okk thx 🖤")

    }
    let skynahi=()=>{  
        for(let i =0; i<100; i++){
       var conf =  confirm("go and like the playlist rn! 🖕");
       if(conf===true){
        alert("ok go and like it thx! 🤝")
        break;
       }
    }

      navigator.clipboard.writeText("prathamesh chi playlist ka like nahi keli??");
    }

    document.querySelector("#ha").addEventListener("click", skyha);
    document.querySelector("#nahi").addEventListener("click", skynahi);


    const icons = document.querySelectorAll('.icon');
    icons.forEach (icon => { 
        icon.addEventListener('click', (event) => {
            icon.classList.toggle("open");
            document.getElementById("article").style.display="grid";
        });
    });


    var now = new Date();
    var wro = document.getElementById("adjust");

    if( (now.getHours()>="00")&& (now.getHours()<="5")){
        wro.innerHTML="wese ab tum ja skte ho! wese bhi tumhare kuch jaruri kam honge itni adhiraat ko! hai na?";
    }
    else if((now.getHours()>"5")&& (now.getHours()<="10")){
        wro.innerHTML="ab tum ja skte ho! wese aaj mrnig kafi cool hai! good morning bolna tha pr time nhi hai!  ";
    }
    else if((now.getHours()>"10")&& (now.getHours()<="12")){
        wro.innerHTML="wese ab tum ja skte ho! wese is time se mera kafi cool relation hai!! aur jankar ajeeb lege pr dhoop mera energy source hai! kya matlab sabka hai? ";
    }

    else if((now.getHours() > "12")&& (now.getHours()<="16")){
        wro.innerHTML=(`wese ab tum ja skti ho! aur thanks, itni dopeher mei meri fan meri site dekh rhi hai!, jake meri taraf se 1 sprite pilo! dukandar paise mange toh use kehna "deadpool mera boyfriend hai"!! deadpool == Prathamesh!!`);

    }
    else if((now.getHours()>"16")&& (now.getHours()<="19")){
        wro.innerHTML="wese ab tum ja skti ho! agar apni khidki se bahr dekh skogi to tumhe pata chalega pune ki evenings kitni awesome hai! me meri gf ke sath aisi evenings mei shawarma khana chahta hu! pr meri koi gf nhi hai!, aur mere dost sale vadhiv hai, woh janvar shawarma ko chole bhature ki tarah khayenge!! aur bill bhrte samey bolenge: b*encho thikse barbie-kyu nhi kiya isne!";
    }
    else if((now.getHours()>"19")&& (now.getHours()<="22")){
        wro.innerHTML= "wese ab tum ja skti ho! good night bolna tha pr tum itni jaldi sone nahi wali!! kuch der baad ake dekhna good night bol dunga! ";
    }
    else if((now.getHours()>"22")&& (now.getHours()<="24") &&(now.getHours()>"24")){
        wro.innerHTML= "wese ab tumhe jana chahiye! 10-12 baje ka time mera sabse bakwas time rehta hai! pr kyu?? ye nhi bataunga! ";
    
    }


