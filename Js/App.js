
// tar id burger från html koden, skapar en konstant variabel vid namn burger
const burger = document.getElementById('burger')

//gör en ny konstant variabel vid namn nav, tar nav_links id
const nav = document.getElementById('nav_links')


//skapat en funktion som går in i våra konstanter ovan, och byter ut deras id om exempelvis burger_toggle finns med eller låter den vara ifall den inte gör det
function toggleMenu() {
    burger.classList.toggle('burger_toggle')
    nav.classList.toggle('nav_active')
}

//Hemsidan "Lyssnar" på vad som görs på hemsidan, vid detta fall när man trycker på våran hamburgar meny
burger.addEventListener('click', toggleMenu)