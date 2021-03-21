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
    let uniAdText = document.createElement("p");
    uniAdText.innerHTML = "University of Adelaide";
    


}