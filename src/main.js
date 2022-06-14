/* 
Mobile Navigation menu toggle
*/

//  Nav menu togller selector
let navMenuToggler = document.querySelector(".menu-icon");

// nav menu toggler event listener function
navMenuToggler.addEventListener("click", () => {
    let navMenu = document.querySelector("#topbar .navigation");
    navMenu.classList.toggle("navigation--active");
    // nav menu links
    let navMenuLinks = navMenu.children;
    for (let i = 0; i < navMenuLinks.length; i++) {
        navMenuLinks[i].addEventListener("click", () => {
            navMenu.classList.remove("navigation--active");
        });
    };
});

//  message me button
let msgMeBtn = document.querySelector(".navigation .message");
msgMeBtn.addEventListener("click", (e) => {
    e.preventDefault();
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
});


/* 
Fixed on screen button
*/

let fixedOnScreenBtn = document.querySelector(".fixed-on-screen .icon");

fixedOnScreenBtn.addEventListener("click", () => {
    document.querySelector(" .fixed-on-screen .body").classList.toggle("body--active");
});



/* 
adding work elements dynamically 
*/

// loading works data from api
let jsonUrl = "./works.json";

//  fetch function
async function getWorkData(url) {
    let response = await fetch(url);
    let data = await response.json();
    return data;
};


//  fuction for displaying work data to screen
function addWorkToHtml(data) {
    let html = document.querySelector(".works-container");
    for (let i = 0; i < 6; i++) {
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
                                <img src="${data.works[i].image}" alt="" loading="lazy">
                                <div class="footer">
                                    <a href="${data.works[i].liveLink}" class="see-live" target="_blank">
                                        <div class="red-dot"></div>
                                        <p>See Live</p>
                                    </a>
                                    <a href="${data.works[i].codeLink}" class="code" target="_blank">&lt;/&gt; ${data.works[i].btn[0]}</a>
                                </div>
                            </div>
                            <!-- Project Tags -->
                        </div>
        `
    };
};
//  self calling function
(async function addWorkDataToScreen() {
    let workData = await getWorkData(jsonUrl);
    addWorkToHtml(workData);
})();


//  filtering works elements 
let filterSelect = document.querySelector("#works-filter");

filterSelect.addEventListener("change", () => {
    let filterValue = filterSelect.value.toLowerCase().replace(/\s/g, "");
    let workItem = document.querySelector(".works-container");
    //  removing  all elements
    workItem.innerHTML = ""

    // adding item based on filter value
    async function filterData() {
        let workData = await getWorkData(jsonUrl);
        for (let i = 0; i < workData.works.length; i++) {
            let html = document.querySelector(".works-container");

            if (filterValue == "all") {
               window.location.href= "./pages/works.html"
            }
            else {
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
                                            <img src="${workData.works[i].image}" alt="Work" loading="lazy">
                                            <div class="footer">
                                                <a href="${workData.works[i].liveLink}" class="see-live" target="_blank">
                                                    <div class="red-dot"></div>
                                                    <p>See Live</p>
                                                </a>
                                                <a href="${workData.works[i].codeLink}" class="code" target="_blank">&lt;/&gt; ${workData.works[i].btn[0]}</a>
                                            </div>
                                        </div>
                                        <!-- Project Tags -->
                                    </div>
                    `
            };
        };
    };
    filterData();
});


/* 
Signature Animation
*/
let signatureBody = document.querySelector(".signature-body")
let signatureUnderline = document.querySelector(".signature-underline")
let signatureDot = document.querySelector(".signature-dot")

function bodyAnimation() {
    return new Promise(res => {
        setTimeout(() => {
            signatureBody.style.transition = `1s`
            signatureBody.style.strokeDashoffset = 0;
        }, 500);
    }
    )
}
function underlineAnimation() {
    setTimeout(() => {
        return new Promise(res => {
            signatureUnderline.style.strokeDashoffset = 0;
        }
        )
    }, 1000);

}

bodyAnimation()
    .then(underlineAnimation)



//539.4288330078125