// HTML file: dom_forms.html

// April 5, 2022 (Tuesday) - Morning Class (cont.)

// Goal: Read the typed text in the textbox thru alert
function readText(form){
    let formText = form.inputBox;
    alert(formText.value);
};

// Goal: "Have a nice day" appears in textbox when write button is clicked
function writeText (form){
    form.inputBox.value = "Have a nice day";
};

// Goal: Output value ng radio button na naka-select
// Solution No. 1
let selectBtn = document.querySelector('[name = "radbutton"]');

selectBtn.addEventListener("click", () =>{

    let inputList = document.querySelector("#buttons > input:checked").value;
    // let mapInput = [...inputList].map(input => input.value);

    alert(inputList);

});

// Solution No. 2
// Topic: .target
// Syntax: .event.target.form.name.value
selectBtn.addEventListener("click", (event) =>{

    let radValue = event.target.form.radbtn.value;

    alert(radValue);
    
});

// Additional Notes:
// *Yung .getElementsByName is supported in most browsers than .getElementById

// Lunch Break //

// Sample: Check Terms and Conditions
// Topic: .checked property (it's true/false)
// It is used in radio buttons & checkboxes
let acceptbtn = document.getElementById("acceptbtn");

acceptbtn.addEventListener("click", () =>{
    let accept = document.getElementById("accept").checked; //true if nakacheck
    if(accept){
        alert("accepted")
    } else {
        alert("Tick the checkbox")
    };
});

// Try: If chineck si Select All, machecheck Check1 to Check4
// Pwede inline or addeventlistener

// let selectAll = document.querySelector("[name='selectcheck']");
let selectAll = document.getElementById("selectall");

selectAll.addEventListener("click", () =>{
    // let input = document.querySelector("[name='selectcheck']").checked;
    let input = document.getElementById("selectall").checked;
    let checkboxes = document.getElementsByName("checked");
    for(let checkbox of checkboxes){
        checkbox.checked = input
    }

});

// Other Solution:
// let selectAll = document.querySelector("[name='selectcheck']");
// selectAll.addEventListener("click", (event) =>{
//     let checked = event.target.checked
//     let checkboxes = document.getElementsByName("checked");
//     checkboxes.forEach((checkbox) =>{
//         checkbox.checked = checked;
//     })

// });

// Sample: Get Selected Colors
// Dynamic
let getCheckBoxValues = (kulay) =>{
    let arr = [];
    let checkboxes = document.querySelectorAll(`input[name="${kulay}"]:checked`);
    checkboxes.forEach((checkbox)=>{
        arr.push(checkbox.value);
    })
    return arr;
};

let btnColor = document.getElementById("btn-color");
btnColor.addEventListener("click", ()=>{
    alert(getCheckBoxValues("colors"));
});

// Challenge: Check/Uncheck all

// Solution No. 1
let btnToggle = document.getElementById("btn-toggle");

btnToggle.addEventListener("click",(e) =>{
    e.preventDefault();
    let uncheck = false;
    let checkboxes = document.querySelectorAll("input[name='colors']");
    checkboxes.forEach((checkbox)=>{
        if(!checkbox.checked){
            uncheck = true;
        }
        }
    )
    if(uncheck){
        for(checkbox of checkboxes){
            checkbox.checked = true;
        }
    }else{
        for(checkbox of checkboxes){
            checkbox.checked = false;
        }
    }
})

//Solution No. 2
var boxes = document.getElementsByName("colors")
btnToggle.addEventListener("click",(e) =>{
    e.preventDefault();
    var allcheck = true
    boxes.forEach((box)=>{
        if(!box.checked){
            allcheck=false
        }
    })
    if(allcheck){
        boxes.forEach(box=>box.checked=false)
    }
    else{
        boxes.forEach(box=>box.checked=true)
    }
})

// Tip from sir: Convert it to algorithm, to understand better
// Step by step process to get final output or solve the problem
// Total : 6 steps

// Trial: (from James)

let getColor = (kulay) =>{
    alert(`${kulay}`)
}

getColor("123")

// End of Lecture for the day

//