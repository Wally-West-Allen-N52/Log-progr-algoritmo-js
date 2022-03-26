function convertDuration() {
    const inTitle = document.getElementById("inTitle");
    const inDuration = document.getElementById("inDuration");
    const outTitle = document.getElementById("outTitle");
    const outAnswer = document.getElementById("outAnswer");
    
    var title = inTitle.value;
    var duration = Number(inDuration.value);

    var hours = Math.floor(duration / 60);
    var minutes = duration % 60;
    
    outTitle.textContent = title;
    outAnswer.textContent = hours + " hour(s) and " + minutes + " minute(s)";
    
    var btConvert = document.getElementById("btConvert");
}
btConvert.addEventListener("click", convertDuration);