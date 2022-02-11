const spec = ["heart","eye","teeth"];
const doctors = [
    {name:"Dr.Stella Kane",cat:"heart",hospital:"Flower Hospitals"},
    {name:"Joseph Cart",cat:"teeth",hospital:"Flower Hospitals"},
    {name:"Stefani Albert",cat:"heart",hospital:"Flower Hospitals"},
    {name:"Joshua Jackson",cat:"eye",hospital:"Mercy General"}
];


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
                        <div class="scroll_menu row mg-top-5">
                            <div class="cat_card">
                                <div id="teeth" class="cat_btn teeth_"></div>
                                <div class="cat_card_content circular --16px violet">
                                    <span class="cat_desc">Dental Surgeon</span>
                                </div>
                            </div>
                            <div class="cat_card">
                                <div id="heart" class="cat_btn heart_"></div>
                                <div class="cat_card_content circular --16px violet">
                                    <span class="cat_desc">Heart Surgeon</span>
                                </div>
                            </div>
                            <div class="cat_card">
                            <div id="eye" class="cat_btn eye_"></div>
                                <div class="cat_card_content circular --16px violet">
                                    <span class="cat_desc">Eye Specialist</span>
                                </div>
                            </div>
                        </div>
                        <div class="doct_container">
                        </div>
                    </div>
                    `
    addingEvent();
}
const menuClick = ()=>{
    let btn = document.getElementsByClassName("menu")[0];
    btn.classList.toggle("menuClick");
}
const addingEvent=()=>{
    let cat_btns = document.getElementsByClassName("cat_btn");
    for (let item of cat_btns){
        item.addEventListener("click",()=>{
                if (item.classList.contains("deactive")){ //qua ci vanno le istruzioni di eliminazione categoria
                    delCats(item.id);
                    item.classList.toggle("deactive");
                }else{
                    displayCats(item.id);
                    console.log(item.id);
                    item.classList.toggle("deactive");
                }
            });
    }
}
/*const displayAll = ()=>{ 
    doc = doctors.filter(doc => doc.cat == "heart");
    renderDoctor(doc);
}*/
const displayCats = (specialization) =>{ //spec è un array contenente tutte le specializzazioni attive
    doc = doctors.filter(doc => doc.cat == specialization);
    console.log(doc);
    renderDoctor(doc);
}
const delCats = (specialization) =>{
    let delDocs = document.getElementsByClassName(specialization);
    for (i=0;i<=delDocs.length-1;i++){
        delDocs[i].remove();
    }
}
const renderDoctor = (docList)=>{
    let doctor_contain = document.querySelector(".doct_container");
    for (i=0;i<=docList.length-1;i++){
        let doctor = document.createElement("div");
        doctor.classList.add(docList[i].cat);
        doctor.innerHTML=`<div class='${docList[i].cat}'>
                            <div>${docList[i].name}</div>
                            <div>${docList[i].hospital}</div>
                          </div>`;
        doctor_contain.append(doctor);
    }
}


