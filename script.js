function refreshPage() {
  //document.getElementById("main").style.visibility = "hidden";
  window.location.reload();
}

function showEdu() {
  //empty the hello message
  document.getElementById("main").innerHTML = "";

  //create box for education element
  let uniAdelaide = document.createElement("div");
  uniAdelaide.className = "edu";
  document.getElementById("main").appendChild(uniAdelaide);
  // insert uni logo
  let uniLogo = document.createElement("img");
  uniLogo.src = "./media/uniAdelaideLogo.gif";
  uniLogo.id = "uniLogo";
  uniAdelaide.appendChild(uniLogo);

  //insert text
  let uniAdText = document.createElement("div");
  uniAdText.innerHTML =
    "<p>University of Adelaide</p> <p>Master of Software Engineering - ongoing</p> <p>2020 - 2021</p>";
  uniAdelaide.appendChild(uniAdText);
}

function skill() {
  //empty the main to place new elements
  document.getElementById("main").innerHTML = "";
  //create a new div for skill lists
  let skillDiv = document.createElement("div");
  skillDiv.id = "skillDiv";
  document.getElementById("main").appendChild(skillDiv);
  //create a list of object oriented programming skills
  let objOreinted = document.createElement("div");
  objOreinted.innerHTML =
    "<h6>Object Oreinted Languages</h6> <ul><li>Java<li>Python<li>C++<li>C#</ul>";
  skillDiv.appendChild(objOreinted);

  //create a list of web development skills
  let webSkills = document.createElement("div");
  webSkills.innerHTML =
    "<h6>Web Development</h6><ul><li>HTML<li>CSS<li>SCSS<li>JavaScript<li>Node JS<li>Ruby on Rails<li>React<li>ReactiveX<li>Angular<li>Socket.IO</ul>";
  skillDiv.appendChild(webSkills);

  //create a list for cloud skills
  let cloudSkills = document.createElement("div");
  cloudSkills.innerHTML =
    "<h6>Cloud Computing and Big data</h6><ul><li>AWS<li>Google cloud<li>Microsoft Azure<li>OpenStack<li>Hadoop</ul>";
  skillDiv.appendChild(cloudSkills);

  //create a list of other skills
  let otherSkills = document.createElement("div");
  otherSkills.innerHTML =
    "<h6>Other Skills</h6><ul><li>Cordova<li>SQL Databases<li>Software Architecture<ul>";
  skillDiv.appendChild(otherSkills);
}

function contact() {
  //empty the main to place new elements
  document.getElementById("main").innerHTML = "";
  //create a paragraph
  let contactTxt = document.createElement("div");
  contactTxt.innerHTML =
    '<p><a href="mailto: afraa.obaid1@gmail.com">Email Me</a></p>';
  document.getElementById("main").appendChild(contactTxt);

  //create social media div
  let socialLinks = document.createElement("div");
  socialLinks.id = "social";
  document.getElementById("main").appendChild(socialLinks);

  let linkedIn = document.createElement("img");
  linkedIn.className = "socialIcon";
  linkedIn.src = "./media/linkedIn.png";
  socialLinks.appendChild(linkedIn);

  let gitHub = document.createElement("img");
  gitHub.className = "socialIcon";
  gitHub.src = "./media/github.png";
  socialLinks.appendChild(gitHub);
}

function blog(){
    window.location = "https://afraa-obaid1.medium.com/why-i-decided-to-study-software-engineering-3fe236d8f303";
}
