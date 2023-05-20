const canvas = document.querySelector('#POPs');
const ctx = canvas.getContext('2d');

const popWidth = 722;
const lineHeight = 75;

const background = new Image();
background.src = './pops-base.jpg'

ctx.textAlign = 'center';

let sku = 'SKU: ' + '100084694';
let productName = 'Marc Permanentes Sharpie';
let productDescription = 'Colección Místicos / Punta fina / Colores surtidos';
let regularPrice = 253;
let promotionalPrice = 151.80;

background.onload = function () {
    ctx.drawImage(background, 0, 0);
    writeStaticPhrases();
    writeSKU();
    writeProductName();
    writeRegularPrice();
    writePromotionalPrice();
}

function writeStaticPhrases () {
    ctx.font = '70px Helvetica';
    ctx.fillText('Precio especial', 476, 200);
    ctx.fillText('De', 476, 515);
    ctx.fillText('A', 476, 700);
}
function writeSKU () {
    ctx.font = '55px Helvetica';
    ctx.fillText(sku, 476, 270);
}
function writeProductName () {
    ctx.font = '75px Helvetica';
    justifyText(productName, lineHeight, 476, 350);
}
function writeRegularPrice () {
    ctx.font = '90px Helvetica';
    ctx.fillText(regularPrice.toFixed(2).toString(), 476, 615);
    ctx.lineWidth = 15;
    ctx.moveTo(250,620);
    ctx.lineTo(685,540);
    // ctx.strokeStyle = 'red';
    ctx.stroke();
}
function writePromotionalPrice () {
    ctx.font = 'bold 175px Helvetica';
    ctx.fillStyle = 'red';
    ctx.fillText(promotionalPrice.toFixed(2).toString(), 476, 875);
    ctx.lineWidth = 15;
    ctx.moveTo(160,890);
    ctx.lineTo(800,890);
    ctx.strokeStyle = 'red';
    ctx.stroke();
}

function justifyText (text, lineJumpSize, x, y) {
    let words = text.split(' ');
    let segmentedText = [];
    let textLine = '';
    let position = 0;
    let actualY = y;

    for (let i = 0; i < words.length; i++) {
        textLine += words[i] + ' ';
        let textWidth = ctx.measureText(textLine).width;
        if (textWidth > popWidth) {
            position ++;
            textLine = words[i] + '';
        }
        if(!Array.isArray(segmentedText[position])) {
            segmentedText[position] = new Array;
            segmentedText[position].push(words[i]);
        } else {
            segmentedText[position].push(words[i]);
        }
    }
    let writableLine = '';

    for(let row = 0; row < segmentedText.length; row++) {
        writableLine = '';
        for(let col = 0; col < segmentedText[row].length; col++) {
            writableLine +=  segmentedText[row][col] + ' ';
        }
        ctx.fillText(writableLine, x, actualY);
        actualY += lineJumpSize;
    }
}
