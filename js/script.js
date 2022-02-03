let widthN;
const checkDevice = ()=>{
    if(screen.width>450){
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
        let body = document.getElementsbyTagName(body)[0];
        body.classList.add("fadeIn");
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