
function addToOutput(text, colour, newBtnID, functionID, opt1, opt2)
{
    var output = document.getElementById("output");
    var newP = document.createElement("p");
    newP.innerText = text;
    newP.style.color = colour;

    if (opt1 != null && opt2 != null)
    {
    // first add a line break
    var newBR = document.createElement("br");
    newP.appendChild(newBR);
    var newBR = document.createElement("br");
    newP.appendChild(newBR);

    // Add radio buttons to newP
    var newRadio1 = document.createElement("input");
    newRadio1.type = "radio";
    newRadio1.name = "radio";
    newRadio1.id = "radio1";
    newRadio1.value = opt1;

    // Select newRadio1 by default
    newRadio1.checked = true;

    // Add label to newP
    var newLabel1 = document.createElement("label");
    newLabel1.htmlFor = "radio1";
    newLabel1.innerText = opt1;
    
    var newRadio2 = document.createElement("input");
    newRadio2.type = "radio";
    newRadio2.name = "radio";
    newRadio2.id = "radio2";
    newRadio2.value = opt2;

    // Add label to newP
    var newLabel2 = document.createElement("label");
    newLabel2.htmlFor = "radio2";
    newLabel2.innerText = opt2;

    newP.appendChild(newRadio1);
    newP.appendChild(newLabel1);

    // first add a line break
    var newBR = document.createElement("br");
    newP.appendChild(newBR);
    var newBR = document.createElement("br");
    newP.appendChild(newBR);

    newP.appendChild(newRadio2);
    newP.appendChild(newLabel2);
    }

    // Add a button to newP
    if (newBtnID != null)
    {
        // first add a line break
        var newBR = document.createElement("br");
        newP.appendChild(newBR);
        var newBR = document.createElement("br");
        newP.appendChild(newBR);
        
        var newBtn = document.createElement("button");

        newBtn.innerText = "Continue";
        newBtn.id = newBtnID;
        newBtn.onclick = function() { showNextPage(functionID); };
        newP.appendChild(newBtn);
    }
    
    clearOutput();
    output.appendChild(newP);
}

function showNextPage(functionID)
{
    switch (functionID)
    {
        case "showPage1":
            showPage1();
            break;
        case "showPage2":
            showPage2();
            break;
        case "showPage3":
            showPage3();
            break;
        case "showPage4":
            showPage4();
            break;
        case "showPage5":
            showPage5();
            break;
        case "showPage6":
            showPage6();
            break;
        case "showPage7":
            showPage7();
            break;
        case "showPage8":
            showPage8();
            break;
        case "showPage9":
            showPage9();
            break;
    }
}

function showPage1()
{
    addToOutput("After years of work, hundreds of committee sessions and thousands of extensively researched policy documents you manage to patch together majority support for your proposal to be accepted by the General Assembly. Congratulations, this is a proud moment for Veoza and the whole world!\n\n It is immediately vetoed by the Security Council.", 
    "red", 
    "page2Btn",
    "showPage2");
}

function showPage2()
{
    addToOutput("You decide to attempt to persuade the Security Council to reconsider your proposal. They grant you an audience. Do you:", 
    "black", 
    "page3Btn",
    "showPage3",
    "Carefully and calmly explain the benefits of your proposal",
    "Present independent research, showing the practical benefits of your proposal for all nations");
}

function showPage3()
{
    addToOutput("After listening to you speak, the Security Council immediately denounces you as a war criminal and has you removed from the building.", 
    "red", 
    "page4Btn",
    "showPage4");
}

function showPage4()
{
    addToOutput("You are summarily drafted onto a new human rights body set up by the Security Council. They present you a document explaining your work. They ask that you pay particular attention to Article 7. \n\n\There is no Article 7.\n\n Do you:", 
    "black", 
    "page5Btn",
    "showPage5",
    "Ask politely for the missing Article 7",
    "Attempt to proceed, as best as possible and in good faith, without the missing Article 7");
}

function showPage5()
{
    addToOutput("Before you can proceed you are presented with a surprise test on the contents of Article 7. \n\n\You fail. \n\n\The Security Council denounces you as a war criminal.",
    "red", 
    "page6Btn",
    "showPage6");
}

function showPage6()
{
    addToOutput("Due to the stress of your work at the IDO, you decide to see a therapist. Do you:",
    "black", 
    "page7Btn",
    "showPage7",
    "Explain to the therapist that you feel powerless and restricted in your options",
    "Explain to the therapist that you feel as if your decisions have no effect on anything");
}

function showPage7()
{
    addToOutput("The therapist explains to you that all choice is illusory and that you should immediately submit yourself to a higher power.\n\n\ You schedule a follow-up appointment but before you can go back Veozan Intelligence tips you off that the Therapist is an agent of the Security Council.",
    "red", 
    "page8Btn",
    "showPage8");
}

function showPage8()
{
    addToOutput("While on legitimate diplomatic business at a remote truck stop you are approached by a mysterious, hooded figure that introduces themselves as 'The Nightingale'. They inform you that they represent a shadowy faction within the IDO known as the Charter Committee. They explain to you that the only way that small nations can survive in the IDO is by pushing literalist interpretations of the Charter and seeking its further reform. \n\n\The Nightingale shares with you a power known as the 'Meta-veto', a special veto to veto the security council's own veto. Do you:",
    "black", 
    "page9Btn",
    "showPage9",
    "Use the meta-veto immediately",
    "Present your demands and then use the meta-veto");
}

function showPage9()
{
    addToOutput("You successfully use the meta-veto but the Security Council retaliates by vetoing it. The IDO collapses under the weight of its own contradictions. \n\n\Game Over.",
    "red");
}

function clearOutput()
{
    var output = document.getElementById("output");
    output.innerHTML = "";
}

function Start()
{
  addToOutput("You arrive at your first day in the job as IDO representative for the Hidden Kingdom of Veoza. You are excited at the amazing possibilities that International Diplomacy can bring, even to a small nation such as your own. You decide to introduce a proposal to the IDO General Assembly, which of these two options do you present?", 
  "black", 
  "page1Btn",
  "showPage1",
  "Propose World Peace",
  "Propose World Harmony");
}

$(document).ready(function(){

    $('#start').click(function(e){
        Start();
    });
});
