const tshirt = document.getElementById('Tshirt');
const inputcolor = document.getElementById('inputColor');

tshirt.addEventListener('mousemove', () => {
    tshirt.style.backgroundColor = inputcolor.value;
    tshirt.style.boxShadow = '0px 0px 25px navy';
    tshirt.style.transition = '.5s ease-in-out';
});