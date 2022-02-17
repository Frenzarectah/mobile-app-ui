//SETTING THE OBJECT DOCTORS
const doctors = [
    //first doc obj
    {name:"Dr.Stella Kane",
    id:"0",
    cat:"heart",
    hospital:"Flower Hospitals",
    dept:"Heart Surgeon",
    bio:"Dr.Stella is the top most heart surgeon in Flower Hospital. She attended a specialistic course with the famous Dr.House and his colleague Dr.Wilson",
    icon:"./imgs/female_icon.png",
    agenda:[{
        type:"Consultant",
        day:"12",
        month:"Jan",
        time:"Monday. 09am - 11am"
    },
    {
        type:"Visit in Studio",
        day:"24",
        month:"Jun",
        time:"Wednesday. 09am - 11am"
    }
    ]
},
    //second doc obj
    {name:"Dr.Joseph Cart",
    id:"1",
    cat:"teeth",
    hospital:"Flower Hospitals",
    dept:"Dental Surgeon",
    bio:"Our staff' best Dentist, he is able to take all your teeth out of your mounth and you still want to smile at him",
    icon:"./imgs/male_icon.png",
    agenda:{
        type:"consultant",
        day:"12",
        month:"Jan",
        time:"9am - 11am"},
},
    //third doc obj
    {name:"Dr.Stefani Albert",
    id:"2",
    cat:"heart",
    hospital:"Flower Hospitals",
    dept:"Heart Surgeon",
    bio:"The second best heart specialist in our Staff, but only because she is younger than Dr.Stella",
    icon:"./imgs/female_icon1.png"},
    //fourth doc obj
    {name:"Joshua Jackson",
    id:"3",
    cat:"eye",
    hospital:"Mercy General",
    dept:"Ocular Surgeon",
    bio:"You can't wait to see him",
    icon:"./imgs/male_icon1.png",}
];

//FUNCTION THAT CREATE THE EASE-IN EFFECT ON LOAD
const pageAppear = ()=>{
    let body = document.getElementsByTagName("body")[0];
    body.classList.contains("fadeIn")?body.classList.replace("fadeIn","fadeOut"):body.classList.add("fadeIn");
}
//FUNCTION THAT PROVIDE THE CHECKING OF THE DEVICE IN  USE
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
        pageAppear();
}
}

let div;
//FUNCTION THAT RENDERS THE FIRST PAGE OF THE APPLICATION IN JS
const buildPage1 = ()=>{
    let page = document.getElementsByTagName("body")[0];
    page.onload(checkDevice());
    page.classList.add("column");
    page.innerHTML=`
                    <div class="row mg-lft-25px mg-rgt-25px container mg-top-5">
                        <div class="menu" onclick="menuClick();"></div>
                        <div class="login"></div> 
                    </div>
                    <h1 class="circular mg-lft-25px mg-top-15 blue">Find your Desired Doctor</h1>
                    <div class="row searchBar mg-lft-25px mg-top-5 align_center">
                        <input id="search"class="search circular greylight" type="search" placeholder="Search for doctors">
                        <div class="searchBtn orange_bkg" onclick="searchDoc(document.querySelector('#search').value)"></div></input>
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
//CHANGING THE ICON OF THE MENU WHILE CLICKED
const menuClick = ()=>{
    let btn = document.getElementsByClassName("menu")[0];
    btn.classList.toggle("menuClick");
}
//ADDING THE EVENT ONCLICK TO THE THREE CATEGORY BUTTON AND POPULATE
//OR NOT THE CATEGORIES' ARRAY.
//INJECTS THE CATEGORIES' ARRAY IN THE FILTER FUNCTION (SHOWN BELOW)
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
//THIS IS THE FILTER FUNCT THAT DECIDES WHICH CATEGORIES WILL BE RENDERED
const displayCats = (specializations) =>{ 
    let doctor_contain = document.querySelector(".doct_container");
    doctor_contain.innerHTML="";
    for (item of specializations){ 
        doc = doctors.filter(doc => doc.cat == item); 
        renderDoctor(doc);
    }
}
//ADD ALL THE SELECTED CATEGORIES DOCTORS INTO THE DOM
const renderDoctor = (docList)=>{
    let doctor_contain = document.querySelector(".doct_container");
    for (i=0;i<=docList.length-1;i++){
        let doctor = document.createElement("div");
        doctor.classList.add(docList[i].cat);
        doctor.classList.add("list");
        doctor.innerHTML=`<a onclick="renderPage(${docList[i].id})"><div class='${docList[i].cat} row mg-lft-25px'>
                            <img src="${docList[i].icon}" class="mg-rgt-25px">
                            <div class="column circular justify_center">
                                <div class="--16px blue">${docList[i].name}</div>
                                <div class="--14px blue --norm">${docList[i].dept} - ${docList[i].hospital}</div>
                            </div>
                          </div></a>`;
        doctor_contain.append(doctor);
    }
}
//FUNCTION WHICH LEAD THE EVENT OF THE SEARCHBAR
const searchDoc=(string)=>{
    let doctor_contain = document.querySelector(".doct_container");
    string.toLowerCase();
    doctor_contain.innerHTML="";
    let doc = doctors.filter(item=> (((item.name).toLowerCase()).includes(string))==true);
    console.log(doc);
    let div = document.createElement("div");
    div.classList.add("list");
    div.classList.add("row");
    div.classList.add("align_center");
    div.classList.add("justify_center");
    div.innerHTML=`<span class="circular blue --18px">No results!</span>
                    <img class="mg-lft-15px" src="./imgs/retry.png" onclick="buildPage1()">`
    doc.length!=0?renderDoctor(doc):doctor_contain.append(div);
}
//THIS IS THE RENDERING FUNCT OF THE LAST PAGE LINED-UP TO THE DOCTOR SELECTED (identified by Id).
const renderPage=(Id)=>{
    let page = document.getElementsByTagName("body")[0];
    pageAppear();
    page.innerHTML=`
    <body onload="checkDevice()">
    <div class="pag">
        <div class="background_1">
            <div class="row mg-top-5 mg-lft-25px mg-rgt-25px justify_between">
                <img src="./imgs/arrow.png" onclick="buildPage1()"><img src="./imgs/threepoint.png">
            </div>
    </div>
    <div class="page2">
        <div class="container_2 mg-top-5 mg-rgt-25px mg-lft-25px">
            <div class="row align_center circular">
                <img style="width:88px; height:auto" src="${doctors[Id].icon}">
                <div class="mg-lft-25px column justify_round">
                    <div class="--18px blue">${doctors[Id].name}</div>
                    <div class="--norm mg-top-10px">${doctors[Id].dept} - ${doctors[Id].hospital}</div>
                    <div style="width:130px"class="mg-top-10px row justify_between">
                        <a href="tel:12345567"><img src="./imgs/phone.png"></a>
                        <a href="mailto:stellakane@findoctor.com"><img src="./imgs/chat.png"></a>
                        <a href="skype:stellakane@skype.com"><img src="./imgs/video.png"></a>
                    </div>
                </div>
            </div>    
        </div>
        <div class="mg-top-20px mg-lft-25px mg-rgt-25px circular">
            <div class="--18px blue">About Doctor</div>
            <div style="line-height: 22px" class= "--norm">
                ${doctors[Id].bio}
            </div>
            <div class="--18px blue mg-top-20px">Upcoming Schedules</div>
            <div class="appoint_container">
            </div>
        </div>
    </div>
    `
    renderAppoint(Id);
}
//THIS IS THE FUNCT WHICH CARES ABOUT THE RENDERING OF ALL THE APPOINTMENT OF THE SELECTED DOCTOR
const renderAppoint = (Id)=>{
    let container = document.getElementsByClassName("appoint_container")[0];
    let counter = Object.keys(doctors[Id].agenda).length-1;
    for(i=0;i<=counter;i++){
        container.innerHTML+=`
            <div class="list row">
                <div class="appoint_box mg-lft-15px column justify_center align_center bluelight">
                <div class="--24px">${doctors[Id].agenda[i].day}</div>
                <div class="--norm">${doctors[Id].agenda[i].month}</div>
            </div>
            <div class="column mg-lft-15px justify_center">
                <div class="--16px">${doctors[Id].agenda[i].type}</div>
                <div class="--norm">${doctors[Id].agenda[i].time}</div>
            </div>
        </div>
        `
    }
}


