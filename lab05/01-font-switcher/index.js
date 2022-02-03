let current = 100;

const makeBigger = () => {
   //alert('make bigger!');
   current += 10;
   setFont();
};

const makeSmaller = () => {
   //alert('make smaller!');
   current -= 10;
   setFont();
};

function setFont() {
   document.querySelector('h1').style.fontSize = `${current}% `;
   document.querySelector('p').style.fontSize = `${current}% `;
}

document.querySelector('#a1').addEventListener('click', makeBigger);
document.querySelector('#a2').addEventListener('click', makeSmaller);

