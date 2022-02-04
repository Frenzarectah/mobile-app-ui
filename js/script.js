let widthN;
const checkDevice = (widthN)=>{
    if(widthN>450){
            let emptyPage = document.querySelector(".column");
            console.log(emptyPage);
            emptyPage.classList.remove("column");
            emptyPage.classList.add("circular");
            emptyPage.classList.add("row");
            emptyPage.classList.add("justify_center");
            emptyPage.innerHTML="PAGINA NON DISPONIBILE PER DESKTOP/TABLET, RIPROVA DAL TUO DISPOSITIVO MOBILE";
            //alert("Quest'app supporta solo i dispositivi mobile, riprova dal cellulare!");
}
else{
    addEventListener("load",()=>{ 
        let body = document.getElementById("body");
        setTimeout(body.classList.add("fadeIn"),1000);
    });
}
}
const buildPage1 = ()=>{
    let page = document.getElementById("body");
    page.innerHTML="";
}
const menuClick = ()=>{
    let btn = document.getElementsByClassName("menu")[0];
    btn.classList.toggle("menuClick");
}
const fadeIn = () =>{
    let page = document.getElementsByClassName("body1")[0];
    page.classList.add("fadeIn");
}