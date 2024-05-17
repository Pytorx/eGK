const Data=[{
        title: 'CPU',
        img: 'assets/img/cpu.jpg'
    },
    {
        title: 'GPU',
        img: 'assets/img/gpu.jpg'
    },
    {
        title: 'RAM',
        img: 'assets/img/ram.jpg'
    },
    {
        title: 'SSD',
        img: 'assets/img/nvme.jpg'
    },
    {
        title: 'Mainboard',
        img: 'assets/img/mb.jpg'
    },
    {
        title: 'PSU',
        img: 'assets/img/psu.jpg'
    }
];

const cardList = document.getElementsByClassName("card");
const firstCart = cardList[0];
const cards = document.getElementsByClassName("cards")[0];

for (let i = 1; i < Data.length; i++) {
    const cloneCard = firstCart.cloneNode(true);
    cards.appendChild(cloneCard);
}

let actElement;
for (let i = 0; i < cardList.length; i++) {
    let actCard = cardList[i];
    actElement = actCard.getElementsByClassName("card-title")[0];
    actElement.innerHTML = Data[i].title;
    actElement = actCard.getElementsByClassName("card-img")[0];
    actElement.setAttribute("src", Data[i].img);
}