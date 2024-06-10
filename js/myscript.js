const img = [
    'img/01.webp',
    'img/02.webp',
    'img/03.webp',
    'img/04.webp',
    'img/05.webp',
];

let leftarrow = document.getElementById("leftarrow");
let rightarrow = document.getElementById("rightarrow");

const contenitore = document.querySelector(".prisultato");

for (let i = 0; i < img.length; i++) {
    let immagini = img[i];
    
    let contimmagini = `
            <div class="container">
                <img class="risultato" src="${immagini}">
            </div>
            `;
    contenitore.innerHTML += contimmagini;
}

const container = document.getElementsByClassName("risultato");
console.log(container);

let activecontainer = 0;
container[activecontainer].classList.add("visible");


rightarrow.addEventListener('click',
    function() {
        container[activecontainer].classList.remove("visible");
        activecontainer++;
        container[activecontainer].classList.add("visible");
    }
);

leftarrow.addEventListener('click',
    function() {
        container[activecontainer].classList.remove("visible");
        activecontainer--;
        container[activecontainer].classList.add("visible");
    }
);

