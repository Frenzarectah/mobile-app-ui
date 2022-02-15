const spec = ["heart","eye","teeth"];
const doctors = [
    //first doc obj
    {name:"Dr.Stella Kane",
    id:"1",
    cat:"heart",
    hospital:"Flower Hospitals",
    dept:"Heart Surgeon",
    bio:"Dr.Stella is the top most heart surgeon in Flower Hospital.",
    icon:"./imgs/female_icon.png"},
    //second doc obj
    {name:"Joseph Cart",
    id:"2",
    cat:"teeth",
    hospital:"Flower Hospitals",
    dept:"Dental Surgeon",
    bio:"The top of alla dentists in Florida",
    icon:"./imgs/male_icon.png"},
    //third doc obj
    {name:"Stefani Albert",
    id:"3",
    cat:"heart",
    hospital:"Flower Hospitals",
    dept:"Heart Surgeon",
    bio:"The second best doctor in the country",
    icon:"./imgs/female_icon1.png"},
    //fourth doc obj
    {name:"Joshua Jackson",
    id:"4",
    cat:"eye",
    hospital:"Mercy General",
    dept:"Ocular Surgeon",
    bio:"You can't wait to see him",
    icon:"./imgs/male_icon1.png",}
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
                        <div class="circular blue --16px">Top Doctors</div>
                        <div class="mg-top-5 doct_container mg-rgt-25px">
                        
                        </div>
                    </div>
                    `
    renderDoctor(doctors);
    addingEvent();
}
const menuClick = ()=>{
    let btn = document.getElementsByClassName("menu")[0];
    btn.classList.toggle("menuClick");
}
const addingEvent=()=>{
    let cat_btns = document.getElementsByClassName("cat_btn");
    let dept = [];
    let delCat;
    let i = 0;
    for (let item of cat_btns){
        item.addEventListener("click",()=>{
                if (item.classList.contains("deactive")){
                    idx = dept.indexOf(item.id);
                    delCat = dept.splice(idx,1);
                    dept = dept.filter(item=>item !=delCat);
                    item.classList.toggle("deactive");
                    displayCats(dept);
                }else{
                    dept.push(item.id);
                    item.classList.toggle("deactive");
                    displayCats(dept);
        }if(dept.length==0){ renderDoctor(doctors);
        }
        });
}
}
const displayCats = (specializations) =>{ //spec è un array contenente tutte le specializzazioni attive
    let doctor_contain = document.querySelector(".doct_container");
    doctor_contain.innerHTML="";
    for (item of specializations){ 
        doc = doctors.filter(doc => doc.cat == item); 
        renderDoctor(doc);
    }
}
const renderDoctor = (docList)=>{
    let doctor_contain = document.querySelector(".doct_container");
    for (i=0;i<=docList.length-1;i++){
        let doctor = document.createElement("div");
        doctor.classList.add(docList[i].cat);
        doctor.classList.add("list");
        doctor.innerHTML=`<a href="renderPage(${docList[i].id})"><div class='${docList[i].cat} row mg-lft-25px'>
                            <img src="${docList[i].icon}" class="mg-rgt-25px">
                            <div class="column circular justify_center">
                                <div class="--16px blue">${docList[i].name}</div>
                                <div class="--14px blue --norm">${docList[i].dept} - ${docList[i].hospital}</div>
                            </div>
                          </div></a>`;
        doctor_contain.append(doctor);
    }
}
const renderPage=(Id)=>{
        
}


