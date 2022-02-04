const pageAppear = ()=>{
    let body = document.getElementsByTagName("body")[0];
    body.classList.add("fadeIn");
}

const checkDevice = ()=>{
    if(screen.width>450){
            let emptyPage = document.querySelector(".column");
            console.log(emptyPage);
            emptyPage.classList.remove("column");
            emptyPage.classList.add("row");
            emptyPage.classList.add("justify_center");
            emptyPage.innerHTML="PAGINA NON DISPONIBILE PER DESKTOP/TABLET, RIPROVA DAL TUO DISPOSITIVO MOBILE";
}
else{
        setTimeout(pageAppear(),1000);
}
}

const buildPage1 = ()=>{
    let page = document.getElementById("body");
    let div = document.createElement(div);
    div.innerHTML="QUESTA E' LA PAGINA UNO!";
    page.appendChild(div);
}
const menuClick = ()=>{
    let btn = document.getElementsByClassName("menu")[0];
    btn.classList.toggle("menuClick");
}