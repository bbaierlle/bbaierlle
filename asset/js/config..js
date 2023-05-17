setTimeout(function() {
    const logonav = document.querySelector('#logoNav');
    logonav.style.transform ='translateY(0)';
}, 3300);
/* ---------------- Timer logo ---------------- */
setTimeout(function() {
    const logo = document.querySelector('#logo');
    logo.style.transform = 'translateY(-1750px)';
    logo.style.opacity = '0';
}, 3000);

setTimeout(function() {
    const backLogo = document.querySelector('#auxLogo');
    backLogo.style.opacity = '0%';
}, 3200);
setTimeout(function() {
    const backLogo = document.querySelector('#auxLogo');
    backLogo.style.display = 'none';

}, 3450);
/* ---------------- Timer NavBar ---------------- */
setTimeout(function(){
    const barraTotal = document.querySelector('#containerMenu');
    barraTotal.style.opacity = '100%';

}, 3200)
/* ---------------- Timer Home Page ---------------- */
setTimeout(function(){
    const folhaE = document.querySelector('#folhaE');
    const folhaD = document.querySelector('#folhaD');
    
    const plateia = document.querySelector('#plateia');
    folhaE.style.opacity = '100%'; 
    folhaD.style.opacity = '100%'; 
    
    plateia.style.opacity = '100%';
},3200 );

setTimeout(function() {
    const boxHome = document.querySelector('#corpoHomeBox');
    boxHome.style.opacity = '100%';
}, 3500);



/* ---------------- Config animation js ---------------- */
var animation = bodymovin.loadAnimation({
    container: document.getElementById('logo'),
    path: 'asset/img/LOGO_SALMAOJSON.json',
    renderer: 'svg',
    loop: false,
    autoplay: true,
    })
