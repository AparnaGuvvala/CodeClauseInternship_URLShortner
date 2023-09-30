let newURL = document.getElementById("shorturl");
let cpyButton = document.getElementById("copy");

cpyButton.onclick = ()=>{
    newURL.select();
    window.navigator.clipboard.writeText(newURL.value);
}