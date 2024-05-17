const cssResources = [
    {
        title: 'Shaddows Brumm',
        link: 'https://shadows.brumm.af/',
        text: 'Make and preview beautifully smooth shadows',
        img: '25-shadows-brum.gif'
    },
    {
        title: 'Fancy Border Radius',
        link: 'https://9elements.github.io/fancy-border-radius/',
        text: 'Generate cool Blobs',
        img: '35-fancy-border-radius.gif'
    },
    {
        title: 'Glow Generator',
        link: 'https://cssbud.com/css-generator/css-glow-generator/',
        text: 'Generate pure CSS, cross-browser glow effects',
        img: '54-glow-generator.gif'
    },
    {
        title: ' Clothoid Corners',
        link: 'https://onotakehiko.dev/clothoid/',
        text: 'Generates clothoid rounded corners',
        img: '33-clothoid.gif'
    },
    {
        title: 'Clipy',
        link: 'https://bennettfeely.com/clippy/',
        text: 'Generate complex shaped objects using clip-path',
        img: '34-clippy.gif'
    },
    {
        title: 'Transition.Style',
        link: 'https://www.transition.style',
        text: 'Copy-paste transition animations',
        img: '5-transition.gif'
    },
    {
        title: 'Hero Patterns',
        link: 'https://heropatterns.com/',
        text: 'Generate simple pure-CSS patterned backgrounds',
        img: '56-hero-backgrounds.gif'
    },
    {
        title: 'Animated BG',
        link: 'https://wweb.dev/resources/animated-css-background-generator/',
        text: 'Generate blurred animated pure CSS backgrounds',
        img: '19-animated-bg.gif'
    },
    {
        title: 'Trianglify',
        link: 'https://trianglify.io/',
        text: 'Geometric background designer',
        img: '20-trianglify.gif'
    },
    {
        title: 'Magic CSS Backgrounds',
        link: 'https://www.magicpattern.design/tools/css-backgrounds',
        text: 'Collection of reusable SVG-based / pure CSS background pattern',
        img: '56-hero-backgrounds (1).gif'
    },
    {
        title: ' Parametric Mixe',
        link: 'https://colormixer.web.app/',
        text: 'Equaliser-based CSS color composer',
        img: '60-parametric-mixer.gif'
    },
    {
        title: 'ColorPalettes.Earth',
        link: 'https://colorpalettes.earth/',
        text: 'Natural color palettes from nature',
        img: '13-eart-palettes.jfif'
    },
    {
        title: 'Flexplorer',
        link: 'https://bennettfeely.com/flexplorer/',
        text: 'Visual flexbox demo',
        img: '42-flexsplorer.png'
    }];
    // https://dev.to/lissy93/super-useful-css-resources-1ba3
setDataCardNoX = (no,cardsList,dataArr) => {
    /* helper functions */
    setSingleDataText = (no, htmlName, dataName) => cardsList[no].getElementsByClassName(htmlName)[0].innerHTML = dataArr[no][dataName];
    setSingleDataSrc = (no, htmlName, dataName) => cardsList[no].getElementsByClassName(htmlName)[0].setAttribute("src",dataArr[no][dataName]) ;
    setSingleDataLink = (no, htmlName, dataName) => cardsList[no].getElementsByClassName(htmlName)[0].setAttribute("href",dataArr[no][dataName]) ;
    /* Main part of function */
    setSingleDataText(no, "card-title", "title");
    setSingleDataLink(no, "card-link", "link");
    setSingleDataText(no, "card-text", "text");
    setSingleDataSrc(no, "card-img", "img");
}

createCards=(allCardsName, cardName,dataArr)=>{
// Add cards to the wrapper card
const firstCard = document.getElementsByClassName(cardName)[0];
const wrapperCard=document.getElementsByClassName(allCardsName)[0];
for (let i = 1; i <= dataArr.length - 1; i++) 
    //document.body.appendChild(firstCard.cloneNode(true));
    wrapperCard.appendChild(firstCard.cloneNode(true));
// Fill all cards with the data

const cardsList = document.getElementsByClassName("card");
for (let i = 0; i < cardsList.length; i++)
    setDataCardNoX(i,cardsList,dataArr);

}
// Action
createCards("cards","card",cssResources);