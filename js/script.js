
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

let div;

const buildPage1 = ()=>{
    let page = document.getElementsByTagName("body")[0];
    page.classList.add("column");
    page.classList.add("align_center");
    page.innerHTML=`
                    <div class="row mg-lft-25 mg-rgt-25 align_center container mg-top-5">
                        <div class="menu" onclick="menuClick();"></div>
                        <div class="login"></div> 
                    </div>
    `
}
const menuClick = ()=>{
    let btn = document.getElementsByClassName("menu")[0];
    btn.classList.toggle("menuClick");
}