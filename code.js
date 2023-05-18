const canvas = document.querySelector('#POPs');
const ctx = canvas.getContext('2d');

const popWidth = 722;
const lineHeight = 75;

const background = new Image();
background.src = './pops-base.jpg'

ctx.textAlign = 'center';

let sku = 'SKU: ' + '100100762';
let productName = 'Laptop Asus VivoBook 15 X515EA-BQ2595W';

background.onload = function () {
    ctx.drawImage(background, 0, 0);
    writeSKU();
    writeProductName();
}

function writeSKU () {
    ctx.font = '75px Helvetica';
    ctx.fillText(sku, 476, 250);
}
function writeProductName () {
    ctx.font = '75px Helvetica';
    textJustification(productName, 476, 340, popWidth, lineHeight);
    // ctx.fillText(productName, 476, 340);
}

function textJustification (text, x, y, maxWidth, lineSeparation) {
    let wordsArray = text.split(' ');
    let textLine = '';
    for(let i = 0; i < wordsArray.length; i++) {
        let textTest = textLine + wordsArray + ' ';
        let textWidth = ctx.measureText(textTest).width;
        console.log(textWidth);
        if (textWidth > maxWidth && i > 0) {
            ctx.fillText(textLine, x, y);
            textLine = wordsArray[i] + ' ';
            y += lineSeparation;
        } else {
            textLine = textTest;
        }
    }
    ctx.fillText(textLine, x, y);
}