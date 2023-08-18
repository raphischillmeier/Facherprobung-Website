function showImpressum(){
    document.getElementById("impressum").style.display = "block"
    document.getElementById("hauptseite").style.display = "none"
    document.getElementById("kontakt").style.display = "none"
    document.getElementById("hobbys").style.display = "none"
}
function showKontakt(){
    document.getElementById("kontakt").style.display = "block"
    document.getElementById("hauptseite").style.display = "none"
    document.getElementById("impressum").style.display = "none"
    document.getElementById("hobbys").style.display = "none"
}
function showHobbys(){
    document.getElementById("hobbys").style.display = "block"
    document.getElementById("hauptseite").style.display = "none"
    document.getElementById("kontakt").style.display = "none"
    document.getElementById("impressum").style.display = "none"
}
function showStart(){
    document.getElementById("hauptseite").style.display = "block"
    document.getElementById("impressum").style.display = "none"
    document.getElementById("kontakt").style.display = "none"
    document.getElementById("hobbys").style.display = "none"
}
