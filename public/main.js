let navMenuToggler=document.querySelector(".menu-icon");navMenuToggler.addEventListener("click",()=>{let e=document.querySelector("#topbar .navigation");e.classList.toggle("navigation--active");let n=e.children;for(let t=0;t<n.length;t++)n[t].addEventListener("click",()=>{e.classList.remove("navigation--active")})});let msgMeBtn=document.querySelector(".navigation .message");msgMeBtn.addEventListener("click",e=>{e.preventDefault();let n=document.querySelector(".modal"),t=document.querySelector("body"),i=document.querySelector(".modal .cross");n.style.display="block",t.style.overflow="hidden",i.addEventListener("click",()=>{t.style.overflow="unset",n.style.display="none"})});let fixedOnScreenBtn=document.querySelector(".fixed-on-screen .icon");fixedOnScreenBtn.addEventListener("click",()=>{document.querySelector(" .fixed-on-screen .body").classList.toggle("body--active")});let jsonUrl="./works.json";async function getWorkData(e){let n=await fetch(e);return await n.json()}function addWorkToHtml(e){let n=document.querySelector(".works-container");for(let t=0;t<6;t++)n.innerHTML+=`\n        <div class="card" data-filter="${e.works[t].dataFilter}">\n                            <div class="body">\n                                <div class="topbar">\n                                    <div class="dots">\n                                        <div></div>\n                                        <div></div>\n                                        <div></div>\n                                    </div>\n                                    \x3c!-- Project name --\x3e\n                                    <div class="project-name">\n                                        <h5>${e.works[t].title}</h5>\n                                    </div>\n                                </div>\n                                \x3c!-- Project image --\x3e\n                                <img src="${e.works[t].image}" alt="" loading="lazy">\n                                <div class="footer">\n                                    <a href="${e.works[t].liveLink}" class="see-live" target="_blank">\n                                        <div class="red-dot"></div>\n                                        <p>See Live</p>\n                                    </a>\n                                    <a href="${e.works[t].codeLink}" class="code" target="_blank">&lt;/&gt; ${e.works[t].btn[0]}</a>\n                                </div>\n                            </div>\n                            \x3c!-- Project Tags --\x3e\n                        </div>\n        `}!async function(){addWorkToHtml(await getWorkData(jsonUrl))}();let filterSelect=document.querySelector("#works-filter");filterSelect.addEventListener("change",()=>{let e=filterSelect.value.toLowerCase().replace(/\s/g,"");document.querySelector(".works-container").innerHTML="",async function(){let n=await getWorkData(jsonUrl);for(let t=0;t<n.works.length;t++){let i=document.querySelector(".works-container");n.works[t].dataFilter==e&&(i.innerHTML+=`\n                    <div class="card" data-filter="${n.works[t].dataFilter}">\n                                        <div class="body">\n                                            <div class="topbar">\n                                                <div class="dots">\n                                                    <div></div>\n                                                    <div></div>\n                                                    <div></div>\n                                                </div>\n                                                \x3c!-- Project name --\x3e\n                                                <div class="project-name">\n                                                    <h5>${n.works[t].title}</h5>\n                                                </div>\n                                            </div>\n                                            \x3c!-- Project image --\x3e\n                                            <img src="${n.works[t].image}" alt="" loading="lazy">\n                                            <div class="footer">\n                                                <a href="${n.works[t].liveLink}" class="see-live" target="_blank">\n                                                    <div class="red-dot"></div>\n                                                    <p>See Live</p>\n                                                </a>\n                                                <a href="${n.works[t].codeLink}" class="code" target="_blank">&lt;/&gt; Code</a>\n                                            </div>\n                                        </div>\n                                        \x3c!-- Project Tags --\x3e\n                                    </div>\n                    `)}}()});let signatureBody=document.querySelector(".signature-body"),signatureUnderline=document.querySelector(".signature-underline"),signatureDot=document.querySelector(".signature-dot");function bodyAnimation(){return new Promise(e=>{setTimeout(()=>{signatureBody.style.transition="1s",signatureBody.style.strokeDashoffset=0},500)})}function underlineAnimation(){return new Promise(e=>{signatureUnderline.style.strokeDashoffset=0})}bodyAnimation().then(setTimeout(()=>{underlineAnimation()},500));