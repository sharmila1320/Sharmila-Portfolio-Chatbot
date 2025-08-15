var audio = new Audio('sounds/assets_sentmessage.mp3');
var contactString = "<div class='social'> <a target='_blank' href='tel:+91-8341251461'> <div class='socialItem' id='call'><img class='socialItemI' src='icons/phone.png'/><label class='number'>+91 83412 51461</label></div> </a> <a href='mailto:sharmilarapeti1451@gmail.com'> <div class='socialItem'><img class='socialItemI' src='icons/gmail_icon.png' alt=''></div> </a> <a target='_blank' href='https://wa.me/918341251461'> <div class='socialItem'><img class='socialItemI' src='icons/whatsapp_icon.png' alt=''></div> </a> </div>";

var resumeString = "<img src='icons/resume.png' class='resumeThumbnail'><div class='downloadSpace'><div class='pdfname'><img src='icons/pdf_icon.png'><label>Sharmila Rapeti - Combined Resume (SWE + SDE)</label></div><a href='resume/sharmila_rapeti_combined.pdf' download='Sharmila_Rapeti_Combined.pdf'><img class='download' src='icons/download_icon.png'></a></div>";

var addressString = "<div class='mapview'><iframe src='https://www.google.com/maps/dir//Moodbidri+private+Bus+Stand,+Bus+Stand+Rd,+Mudbidri,+Karnataka+574227/@13.0639,74.9991985,15z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3ba4ab3d49331379:0x17be05cb5b69caa2!2m2!1d74.9957298!2d13.0680955?hl=en' class='map'></iframe></div><label class='add'><address>B2 'Asara'<br>Kodoli<br>Kolhapur, Maharashtra, INDIA 416114</address>";

window.onload = startFunction;

function startFunction() {
    setLastSeen();
    waitAndResponce("intro");
}

function setLastSeen() {
    var date = new Date();
    var lastSeen = document.getElementById("lastseen");
    lastSeen.innerText = "last seen today at " + date.getHours() + ":" + date.getMinutes()
}

function closeFullDP() {
    var x = document.getElementById("fullScreenDP");
    if (x.style.display === 'flex') {
        x.style.display = 'none';
    } else {
        x.style.display = 'flex';
    }
}

function openFullScreenDP() {
    var x = document.getElementById("fullScreenDP");
    if (x.style.display === 'flex') {
        x.style.display = 'none';
    } else {
        x.style.display = 'flex';
    }
}

function isEnter(event) {
    if (event.keyCode == 13) {
        sendMsg();
    }
}

function sendMsg() {
    var input = document.getElementById("inputMSG");
    var ti = input.value;
    if (input.value == "") {
        return;
    }
    var date = new Date();
    var myLI = document.createElement("li");
    var myDiv = document.createElement("div");
    var greendiv = document.createElement("div");
    var dateLabel = document.createElement("label");
    dateLabel.innerText = date.getHours() + ":" + date.getMinutes();
    myDiv.setAttribute("class", "sent");
    greendiv.setAttribute("class", "green");
    dateLabel.setAttribute("class", "dateLabel");
    greendiv.innerText = input.value;
    myDiv.appendChild(greendiv);
    myLI.appendChild(myDiv);
    greendiv.appendChild(dateLabel);
    document.getElementById("listUL").appendChild(myLI);
    var s = document.getElementById("chatting");
    s.scrollTop = s.scrollHeight;
    setTimeout(function () { waitAndResponce(ti) }, 1500);
    input.value = "";
    playSound();
}

function waitAndResponce(inputText) {
    var lastSeen = document.getElementById("lastseen");
    lastSeen.innerText = "typing...";
    var name = "";
    if (inputText.toLowerCase().includes("my name is")) {
        name = inputText.substring(inputText.indexOf("is") + 2);
        inputText = "input";
    }
    switch (inputText.toLowerCase().trim()) {
        case "intro":
            setTimeout(() => {
                sendTextMessage("Hello there 👋🏻,<br><br>My name is <span class='bold'><a class='alink'>Sharmila Rapeti</a>.</span><br><br>I am an Electronics & Communication Engineering student at <span class='bold'>NIT Silchar👨🏻‍💻.</span><br><br>I am eager to hear about potential career opportunities, so I would be pleased to chat about job openings in the engineering sphere.<br><br>Send <span class='bold'>'help'</span> to know more about me.<br>");
            }, 2000);
            break;

        case "help":
            sendTextMessage("<span class='sk'>Send Keyword to get what you want to know about me...<br>e.g<br><span class='bold'>'skills'</span> - to know my skills<br><span class='bold'>'resume'</span> - to get my resume<br><span class='bold'>'education'</span> - to get my education details<br><span class='bold'>'contact'</span> - to get ways to connect with me<br><span class='bold'>'projects'</span> - to get details of my projects<br><span class='bold'>'interests'</span> - to know about my interests<br><span class='bold'>'key strengths'</span> - to know my strengths<br><span class='bold'>'clear'</span> - to clear conversation<br><span class='bold'>'time'</span> - to get current time<br><span class='bold'>'date'</span> - to get current date<br><span class='bold'>'greetings'</span> - for different greetings<br>");
            break;

        case "key strengths":
            sendTextMessage("<span class='sk'>Some of my key strengths include:<br><br><span class='bold'>- Time Management<br>- Teamwork<br>- Problem-solving<br>- Adaptability<br>- Strong communication skills<br>- Analytical thinking</span>");
            break;

        case "greetings":
            sendTextMessage("Here are some greetings you can use:<br><br>'Hi', 'Hello', 'Good morning', 'Good afternoon', 'Good evening', 'Good night'");
            break;

        case "hi":
        case "hello":
        case "hlo":
        case "good morning":
        case "good afternoon":
        case "good evening":
        case "good night":
            sendTextMessage("Hello there 👋🏻! How can I help you today?");
            break;

        case "github":
            sendTextMessage("You can check my GitHub here: <a target='_blank' href='https://github.com/sharmila1320'>Sharmila Rapeti GitHub</a>");
            break;

        case "more skills":
            sendTextMessage("<span class='sk'>My core skills and concepts include:<br><br><span class='bold'>Data Structures & Algorithms (DSA)<br>Object-Oriented Programming (OOPS)<br>Database Management (DBMS)<br>Operating Systems (OS)<br>C++<br>Python<br>HTML<br>CSS<br>Tailwind CSS<br>JavaScript<br>React.js<br><br>MERN Stack (Beginner proficiency)<br>MySQL<br>PostgreSQL<br>Version Control (Git, GitHub)<br>Deployment (Vercel)</span>");
            break;

        case "resume":
            sendTextMessage(resumeString);
            break;

        case "skills":
            sendTextMessage("<span class='sk'>I am currently pursuing B.Tech degree in Electronics & Communication Engineering.<br><br>I can comfortably write code in following languages :<br><span class='bold'>C++<br>Python<br>HTML<br>CSS<br>JavaScript</span><br><br>I am well versed with following frameworks :<span class='bold'><br>ReactJs</span><br>");
            break;

        case "education":
            sendTextMessage("I am currently pursuing B.Tech degree in Electronics & Communication Engineering from NIT Silchar<br>Passing Year : 2026<br>CGPA:7.39<br><br>I have completed my plus two from Sasi Educational Institutions <br>Passing Year:2022<br>Result:94.3%<br><br>I have completed my school from Vivekananda High School<br>Passing Year:2020<br>Result:100%<br><br>And I am a learner at heart.");
            break;

        case "interests":
            sendTextMessage("I have a strong passion for technology and innovation. My key interests include:<br><br>-<b>Frontend Development</b>: Designing and developing user-friendly websites and web applications.<br>-<b>AI</b>: Exploring AI-driven solutions to solve real-world problems.<br>");
            break;

        case "clear":
            clearChat();
            break;

        case "contact":
            sendTextMessage(contactString);
            break;

        case "projects":
            sendTextMessage("You want to check my projects? Then just jump into my Github Account.<br><br><div class='social'><a target='_blank' href='https://github.com/sharmila1320'> <div class='socialItem'><img class='socialItemI' src='icons/git_logo.png' alt=''></div> </a></div>");
            break;

        case "time":
            var date = new Date();
            sendTextMessage("Current time is " + date.getHours() + ":" + date.getMinutes());
            break;

        case "date":
            var date = new Date();
            sendTextMessage("Current date is " + date.getDate() + "/" + date.getMonth() + "/" + date.getFullYear());
            break;

        case "input":
            setTimeout(() => {
                sendTextMessage("Hello " + name + "! How are you?");
            }, 2000);
            break;

        default:
            setTimeout(() => {
                sendTextMessage("Hey I couldn't catch you...😢<br>Send 'help' to know more about usage.");
            }, 2000);
            break;
    }
}

function clearChat() {
    document.getElementById("listUL").innerHTML = "";
    waitAndResponce('intro');
}

function sendTextMessage(textToSend) {
    setTimeout(setLastSeen, 1000);
    var date = new Date();
    var myLI = document.createElement("li");
    var myDiv = document.createElement("div");
    var greendiv = document.createElement("div");
    var dateLabel = document.createElement("label");
    dateLabel.setAttribute("id", "sentlabel");
    dateLabel.id = "sentlabel";
    dateLabel.innerText = date.getHours() + ":" + date.getMinutes();
    myDiv.setAttribute("class", "received");
    greendiv.setAttribute("class", "grey");
    greendiv.innerHTML = textToSend;
    myDiv.appendChild(greendiv);
    myLI.appendChild(myDiv);
    greendiv.appendChild(dateLabel);
    document.getElementById("listUL").appendChild(myLI);
    var s = document.getElementById("chatting");
    s.scrollTop = s.scrollHeight;
    playSound();
}

function playSound() {
    audio.play();
}
