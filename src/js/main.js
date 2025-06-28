var isWelcome = sessionStorage.getItem('isWelcome');

welcomeClose = function() {
    document.querySelector("#welcome").classList.add("closed");
    sessionStorage.setItem('isWelcome', 'true');
}

addEventListener("load", (event) => {
    if (isWelcome) {
        document.querySelector("#welcome").classList.add("closed");
    }
})