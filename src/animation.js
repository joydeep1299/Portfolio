let codeStr = `
<span>&lt;</span>,
<span style="  color: red;">!</span>,
<span style="  color: red;">D</span>,
<span style="  color: red;">O</span>,
<span style="  color: red;">C</span>,
<span style="  color: red;">T</span>,
<span style="  color: red;">Y</span>,
<span style="  color: red;">P</span>,
<span style="  color: red;">E</span>,
<span>&nbsp;</span>,
<span style="  color: red;">h</span>,
<span style="  color: red;">t</span>,
<span style="  color: red;">m</span>,
<span style="  color: red;">l</span>,
<span>&gt;</span>,
<br>,
<div class="break"></div>,
<span>&lt;</span>,
<span style="color:#844cbb;">h</span>,
<span style="color:#844cbb;">t</span>,
<span style="color:#844cbb;">m</span>,
<span style="color:#844cbb;">l</span>,
<span>&gt;</span>,
<br>,
<div class="break"></div>,
<span>&nbsp;</span>,
<span style="color:#844cbb;">&lt;</span>,
<span style="color:#844cbb;">h</span>,
<span style="color:#844cbb;">e</span>,
<span style="color:#844cbb;">a</span>,
<span style="color:#844cbb;">d</span>,
<span>&gt;</span>,
<br>,
<div class="break"></div>,
<span>&nbsp;</span>,
<span>&nbsp;</span>,
<span>&lt;</span>,
<span style="color:#844cbb;">t</span>,
<span style="color:#844cbb;">i</span>,
<span style="color:#844cbb;">t</span>,
<span style="color:#844cbb;">l</span>,
<span style="color:#844cbb;">e</span>,
<span>&gt;</span>,
<span>W</span>,
<span>e</span>,
<span>l</span>,
<span>c</span>,
<span>o</span>,
<span>m</span>,
<span>e</span>,
<span>&lt;</span>,
<span>/</span>,
<span style="color:#844cbb;">t</span>,
<span style="color:#844cbb;">i</span>,
<span style="color:#844cbb;">t</span>,
<span style="color:#844cbb;">l</span>,
<span style="color:#844cbb;">e</span>,
<span>&gt;</span>,
<br>,
<div class="break"></div>,
<span>&nbsp;</span>,
<span>&lt;</span>,
<span>/</span>,
<span style="color:#844cbb;">h</span>,
<span style="color:#844cbb;">e</span>,
<span style="color:#844cbb;">a</span>,
<span style="color:#844cbb;">d</span>,
<span>&gt;</span>,
<br>,
<div class="break"></div>,
<span>&nbsp;</span>,
<span>&lt;</span>,
<span style="color:#844cbb;">b</span>,
<span style="color:#844cbb;">o</span>,
<span style="color:#844cbb;">d</span>,
<span style="color:#844cbb;">y</span>,
<span>&gt;</span>,
<br>,
<div class="break"></div>,
<span>&nbsp;</span>,
<span>&nbsp;</span>,
<span>&lt;</span>,
<span style="color:#844cbb;">p</span>,
<span>&gt;</span>,
<span>W</span>,
<span>e</span>,
<span>l</span>,
<span>c</span>,
<span>o</span>,
<span>m</span>,
<span>e</span>,
<span>&nbsp;</span>,
<span>T</span>,
<span>o</span>,
<span>&nbsp;</span>,
<span>M</span>,
<span>y</span>,
<span>&nbsp;</span>,
<span>W</span>,
<span>e</span>,
<span>b</span>,
<span>s</span>,
<span>i</span>,
<span>t</span>,
<span>e</span>,
<span>&lt;</span>,
<span>/</span>,
<span style="color:#844cbb;">p</span>,
<span>&gt;</span>,
<br>,
<div class="break"></div>,
<span>&nbsp;</span>,
<span>&lt;</span>,
<span>/</span>,
<span style="color:#844cbb;">b</span>,
<span style="color:#844cbb;">o</span>,
<span style="color:#844cbb;">d</span>,
<span style="color:#844cbb;">y</span>,
<span>&gt;</span>,
<br>,
<div class="break"></div>,
<span>&lt;</span>,
<span>/</span>,
<span style="color:#844cbb;">h</span>,
<span style="color:#844cbb;">t</span>,
<span style="color:#844cbb;">m</span>,
<span style="color:#844cbb;">l</span>,
<span>&gt;</span>,
`;

let codeArr = codeStr.split(",");
let codeEditor = document.querySelector(".text-area");
let counter = 0;


// Function for runing the text editor
function code() {
        if (counter < codeArr.length) {
            codeEditor.innerHTML += codeArr[counter];
            return counter++;
        }
        else {
            codeEditor.innerHTML = ""
            return counter = 0;
        }
}
 setInterval(code,70)
