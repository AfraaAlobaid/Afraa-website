function refreshPage(){
    //document.getElementById("main").style.visibility = "hidden";
    window.location.reload();
}

function showEdu(){
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
    uniAdText.innerHTML = "<p>University of Adelaide</p> <p>Master of Software Engineering - ongoing</p> <p>2020 - 2021</p>";
    uniAdelaide.appendChild(uniAdText);
}

function skill(){
    //empty the main to place new elements
    document.getElementById("main").innerHTML = "";
    //create a new div for skill lists 
    let skillDiv = document.createElement("div");
    skillDiv.id = "skillDiv";
    document.getElementById("main").appendChild(skillDiv);
    //create a list of object oriented programming skills
    let objOreinted = document.createElement("div");
    objOreinted.innerHTML = "<h6>Object Oreinted Languages</h6> <ul><li>Java<li>Python<li>C++<li>C#<li></ul>"
    skillDiv.appendChild(objOreinted);

    //create a list of web development skills
    let webSkills = document.createElement("ul");



    
}