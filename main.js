function getMode() {
    const bg = document.getElementById('bg');
    const theme = localStorage.getItem('theme');
    bg.className = theme;
}

function lightMode() {
    localStorage.setItem("theme", "light");
    getMode();
}

function darkMode() {
    localStorage.setItem("theme", "dark");
    getMode();
}

function setCookie() {
    document.cookie = 'user=John; expires=Sat, 11 Jun 2022 06:30:00 GMT';
    alert(document.cookie);
}