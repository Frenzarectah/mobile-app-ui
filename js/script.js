
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
            emptyPage.classList.add("align_center");
            emptyPage.innerHTML=`<div class=" circular desktop">
                                    Sorry but this app is avaialable only<br/> for mobile devices.<br/>
                                    TRY AGAIN ON YOUR PHONE! :)
                                </div>
            `;
}
else{
        setTimeout(pageAppear(),1000);
}
}

let div;

const buildPage1 = ()=>{
    let page = document.getElementsByTagName("body")[0];
    page.classList.add("column");
    //page.classList.add("align_center");
    page.innerHTML=`
                    <div class="row mg-lft-25px mg-rgt-25px container mg-top-5">
                        <div class="menu" onclick="menuClick();"></div>
                        <div class="login"></div> 
                    </div>
                    <h1 class="circular mg-lft-25px mg-top-15 blue">Find your Desired Doctor</h1>
                    <div class="row searchBar mg-lft-25px mg-top-5 align_center">
                        <input class="search circular greylight" type="search" placeholder="Search for doctors">
                        <div class="searchBtn orange_bkg"></div></input>
                    </div>
                    <div class=" mg-top-5 mg-lft-25px categ column">
                        <div class="circular blue --16px">Categories</div>
                        <div class="scroll_menu row">
                            <div class="cat_card">
                                <div class="teeth"></div>
                                <div class="cat_card_content">uno</div>
                            </div>
                            <div class="cat_card">
                                <div class="cat_card_content">due</div>
                            </div>
                            <div class="cat_card">
                                <div class="cat_card_content">tre</div>
                            </div>
                        </div>
                    </div>
    `
}
const menuClick = ()=>{
    let btn = document.getElementsByClassName("menu")[0];
    btn.classList.toggle("menuClick");
}