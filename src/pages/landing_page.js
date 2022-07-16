
/* 
adding work elements dynamically 
*/

// loading works data from api
let jsonUrl = "../works.json";

//  fetch function
async function getWorkData(url) {
    let response = await fetch(url);
    let data = await response.json();
    return data;
};


//  fuction for displaying work data to screen
function addWorkToHtml(data) {
    let html = document.querySelector(".works-container");
    for (let i = 0; i < data.works.length; i++) {
        //  template for the card items
        html.innerHTML += `
        <div class="card" data-filter="${data.works[i].dataFilter}">
                            <div class="body">
                                <div class="topbar">
                                    <div class="dots">
                                        <div></div>
                                        <div></div>
                                        <div></div>
                                    </div>
                                    <!-- Project name -->
                                    <div class="project-name">
                                        <h5>${data.works[i].title}</h5>
                                    </div>
                                </div>
                                <!-- Project image -->
                                <img src=".${data.works[i].image}" alt="" loading="lazy">
                                <div class="footer">
                                    <a href="${data.works[i].liveLink}" class="see-live" target="_blank">
                                        <div class="red-dot"></div>
                                        <p>See Live</p>
                                    </a>
                                    <a href=".${data.works[i].codeLink}" class="code" target="_blank">&lt;/&gt; ${data.works[i].btn[0]}</a>
                                </div>
                            </div>
                            <!-- Project Tags -->
                        </div>
        `
    };
};


//  filtering works elements based on url 
let url = window.location.search;
let urlData = url.replace(/[?=%]/g, "");


async function loadDataToScreen() {
    let workData = await getWorkData(jsonUrl);

    // checking if the link data is available in json file
    let found = "";
    for (let i = 0; i < workData.works.length; i++) {
        if (workData.works[i].dataFilter == urlData) {
            found = true;
            break;
        } else {
            found = false;
        }
    }

    // logic for data found or not  found 
    if (found) {
        for (let i = 0; i < workData.works.length; i++) { 
            let html = document.querySelector(".works-container");
            let pageTitle =  document.querySelector(".tagline");         
            let activeCatagory =  document.querySelector(".active-page-title span");         
            if(workData.works[i].dataFilter == urlData){
                // Page title add
                pageTitle.innerHTML= workData.works[i].pageTitle;
                activeCatagory.innerHTML= workData.works[i].pageTitle;
                 //  template for the card items
                 html.innerHTML += `
                 <div class="card" data-filter="${workData.works[i].dataFilter}">
                                     <div class="body">
                                         <div class="topbar">
                                             <div class="dots">
                                                 <div></div>
                                                 <div></div>
                                                 <div></div>
                                             </div>
                                             <!-- Project name -->
                                             <div class="project-name">
                                                 <h5>${workData.works[i].title}</h5>
                                             </div>
                                         </div>
                                         <!-- Project image -->
                                         <img src=".${workData.works[i].image}" alt="" loading="lazy">
                                         <div class="footer">
                                             <a href="${workData.works[i].liveLink}" class="see-live" target="_blank">
                                                 <div class="red-dot"></div>
                                                 <p>See Live</p>
                                             </a>
                                             <a href="${workData.works[i].codeLink}" class="code" target="_blank">&lt;/&gt; ${workData.works[i].btn[0]}</a>
                                     </div>
                                     <!-- Project Tags -->
                                 </div>
                 `
            }
        }

    }
    else {
        window.location.href = "https://joydeep1299.github.io/Portfolio/public/index.html";
    }
}

loadDataToScreen();


//  opening the messaging modal
function openModal(){
    let modal = document.querySelector(".modal");
    let htmlBody = document.querySelector("body");
    let crossBtn = document.querySelector(".modal .cross");
    modal.style.display = "block";
    // hiding body overflow to prevent page from scrolling while modal is open
    htmlBody.style.overflow = "hidden";
    crossBtn.addEventListener("click", () => {
        htmlBody.style.overflow = "unset";
        modal.style.display = "none";
    })
}

//  on message me button click
let msgMeBtn = document.querySelector("#topbar .message");
msgMeBtn.addEventListener("click", (e) => {
    e.preventDefault();
    openModal();
});

//  on let's talk button click
let letsTalkBtn = document.querySelector(".lets-talk ");
letsTalkBtn.addEventListener("click", (e) => {
    e.preventDefault();
    openModal();
});