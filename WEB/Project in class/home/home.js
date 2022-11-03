document.querySelector(".banner__close").addEventListener("click", function() {
    this.closest(".banner").style.display = "none";
});

var button = document.getElementById("open-button");
var closebutton = document.getElementById("close");
var overlay = document.getElementById("overlay");

function hide() {
    overlay.style.display = "none";
    button.style.display = "block"
}

button.onclick = function() {
    overlay.style.display = " block";
    button.style.display = "none";
}

closebutton.onclick = function () {
    hide();
}

window.onclick = function(event) {
    if(event.target == overlay){
        hide();
    }
}

const msgForm = get(".popUp-footer");
const msgInput = get("input");
const chatArea = get(".popUp-main");

const CP_MSG = [
    "What's wrong with the tour?",
    "Do you request any support or refund?",
    "Please send the ticket details.",
    "Thanks! You'll get a reply soon."
]

var i = 0;
const CP_IMG = "https://image.flaticon.com/icons/svg/2928/2928988.svg";
const CILENT_IMG = "https://image.flaticon.com/icons/svg/929/929422.svg";
const CP_NAME = "Customer-service";
const CILENT_Name = "Cilent";

appendMesssage(CP_NAME, CP_IMG, "comp", "Hi, how can I help you?");
msgForm.addEventListener("submit", event =>  {
    event.preventDefault();

    const chatText= msgInput.value;
    if (!chatText) return;
    
    appendMessage(CILENT_Name, CILENT_IMG, "cilent", chatText);
    msgInput.value = "";
    cpResponse();
});

function appendMessage(name, img, side, text) {
    const msgHTML = '<div class="msg $(side)-msg> <div class="chat-img" style="background-image:url($(img))"></div> <div class = "chat-bubble"> <div class="chat-name">${name}</div> <div class="chat-text">${text}</div></div></div>';
    
    chatArea.insertAdjacentHTML("beforeend", msgHTML);
    chatArea.scrollTop += 500;
}

function cpResponse(){
    const chatText = CP_MSG [i++];
    if (i >= CP_MSG.length){
        i = 0;
    }

    const delay = chatText.split(" ").length * 100;

    setTimeout(() => {
        appendMessage(CP_NAME, CP_IMG, "comp", chatText);
    }, delay);
}

function get(selector, root = document) {
    return root.querySelector(selector);
}

document.querySelector(".title2").addEventListener("click", function() {
    this.closest(".commerce").style.display = "none";
});

const btn = document.querySelector("#btn");
const btnText = document.querySelector("#btnText");

btn.onclick = () => {
    btnText.innerHTML = "Thanks";
    btn.classList.add("active");
}