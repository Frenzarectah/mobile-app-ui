let widthN;
const checkDevice = (widthN)=>{
    if(widthN>450){
            let emptyPage = document.querySelector(".column");
            console.log(emptyPage);
            emptyPage.classList.remove("column");
            emptyPage.classList.add("row");
            emptyPage.classList.add("justify_center");
            emptyPage.innerHTML="PAGINA NON DISPONIBILE PER DESKTOP/TABLET";
            alert("Quest'app supporta solo i dispositivi mobile, riprova dal cellulare!");
}
}
const changePage = ()=>{
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