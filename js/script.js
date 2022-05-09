document.getElementById("news_Corp_Australia").innerHTML = `<ul class="firstBox"></ul><ul class="secondBox"></ul>`;

var datum = [];

var UsersData = [
	{
		title: "Live: Greg Inglis to announce nrl retirement",
        titleLinke: "#",
		Imageurl: "images/user_profile01.jpg",
        IntroTitle: "Rabbitohs Star",
		Intro: "Greg Inglis has arrived at South Sydeny headquaters and will front a media conference later this morning to announce his retirement from rugby league.",
        TimerImageurl: "images/timer.png",
        timer: "2m",
        chatMSGurl:"images/chat_msg.png",
        countmsg: "",
	},
	{
		title: "Opal Tower units still closed as work only approved now",
        titleLinke: "#",
		Imageurl: "images/user_profile02.jpg",
        IntroTitle: "EXCLUSIVE",
		Intro: "  People are still unable to move back into almost half the apartments in Opal Tower more than three months after cracks appeared in the trouble-plagued building and final rectification works have only just been given the green light.",
        TimerImageurl: "images/timer.png",
        timer: "1h",
        chatMSGurl:"images/chat_msg.png",
        countmsg: "1",
    },	
];

async function renderUsers() {
	let html = "";
	UsersData.forEach((user) => {
		let htmlSegment = `<li><a href="#"><span class="responsive-img"><img class="responsive-img_img" src="${user.Imageurl}"/></span></a>
        <h2 class="title"><a href="${user.titleLinke}">${user.title}</a></h2>                
        <p class="intro"><span>${user.IntroTitle}</span> ${user.Intro}</p>
        <div class="linkBox">
            <a href="#"><img src="${user.TimerImageurl}" alt=""><span>${user.timer}</span></a>
            <a href="#"><img src="${user.chatMSGurl}" alt=""><span>${user.countmsg}</span></a>
        </div>
    </li>`;
		html += htmlSegment;
	});

	let firstBox = document.querySelector(".firstBox");
	firstBox.innerHTML = html;
}

renderUsers();

var NewsData = [
	{
		title: "One Nation Support has crashed: Newspoll",
        titleLinke: "#",
		Imageurl: "images/user_profile03.jpg",
        TimerImageurl: "images/timer.png",
        timer: "1h",
	},
	{
		title: "Two fake cops robbed Sydney currency exch..",
        titleLinke: "#",
		Imageurl: "images/user_profile04.jpg",
        TimerImageurl: "images/timer.png",
        timer: "3h",
	},	
];

async function renderNews() {
	let html = "";
	NewsData.forEach((user) => {
		let htmlSegment = `<li>
        <a href="#" class="imgBox"><span class="responsive-img"><img class="responsive-img_img" src="${user.Imageurl}"/></span></a>
        <h2 class="title"><a href="${user.titleLinke}">${user.title}</a></h2>                
        <div class="linkBox">
            <a href="#"><img src="${user.TimerImageurl}" alt=""><span>${user.timer}</span></a>
        </div>
    </li>`;
		html += htmlSegment;
	});

	let secondBox = document.querySelector(".secondBox");
	secondBox.innerHTML = html;
}

renderNews();
