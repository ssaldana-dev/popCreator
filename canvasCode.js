const canvas = document.querySelector('#POPs');
const ctx = canvas.getContext('2d');

const popWidth = 591.6;
const lineHeight = 40;

const background = new Image();
background.src = './base.png';

const rosePop = new Image();
rosePop.src = './rose-pop.png';

const bluePop = new Image();
bluePop.src = './blue-pop.png';

const greenPop = new Image();
greenPop.src = './green-pop.png';

ctx.fillStyle = '#FFFFFF';
ctx.fillRect(0,0,3508,2480);

// background.onload = function () {
//     ctx.drawImage(background, 0, 0);
// }


function addPopImg (color, x, y) {
    if (color == 'rose') {
        ctx.drawImage(rosePop, x, y);
    } else if (color == 'blue') {
        ctx.drawImage(bluePop, x, y);
    } else if (color == 'green') {
        ctx.drawImage(greenPop ,x ,y);
    }
}
function writeStaticPhrases (x, y) {
    ctx.textAlign = 'center';
    ctx.fillStyle = '#000000';
    ctx.font = 'bold 32px Arial';
    ctx.fillText('Precio especial', x, y + 195);
    ctx.fillText('de', x, y + 365.5);
    ctx.fillText('a', x, y + 474);
}
function writeSKU (x, sku) {
    ctx.textAlign = 'center';
    ctx.fillStyle = '#000000';
    ctx.font = 'bold 32px Arial';
    ctx.fillText('SKU: ' + sku, x, 230);
}
function writeProductName (name, x, y) {
    ctx.textAlign = 'center';
    ctx.fillStyle = '#000000';
    ctx.font = 'bold 45px Arial';
    justifyText(name, lineHeight, x, y + 283);
}
function writeRegularPrice (regPrice, x, y) {
    let regPriceWidth = ctx.measureText(regPrice).width;

    ctx.textAlign = 'center';
    ctx.fillStyle = '#000000';
    ctx.font = 'bold 55px Arial';
    ctx.fillText(regPrice.toFixed(2).toString(), x, y + 432);
    ctx.lineWidth = 5;
    ctx.moveTo((x - ((regPriceWidth) + 20)),y + 415);
    ctx.lineTo((x + ((regPriceWidth) + 20)),y + 415);
    ctx.stroke();
}
function writePromotionalPrice (promPrice, x, y) {
    ctx.textAlign = 'center';
    ctx.font = 'bold 125px Arial';
    ctx.fillStyle = '#f3102b';
    ctx.fillText(promPrice.toFixed(2).toString(), x, y + 588);
}

const months = [
    'enero',
    'febrero',
    'marzo',
    'abril',
    'mayo',
    'junio',
    'julio',
    'agosto',
    'septiembre',
    'octubre',
    'noviembre',
    'diciembre'
]

function writeValidity (start, end, x, y) {
    let validityText = '';
    let startOnArray = start.split('-');
    let endOnArray = end.split('-');

    if (startOnArray[1] == endOnArray[1]) {
        ctx.font = 'bold 25px Arial';
        validityText = 'Vigencia del ' + startOnArray[2] + ' al ' + endOnArray[2] + ' de ' + months[Number(endOnArray[1]) - 1] + '.';
    } else {
        ctx.font = 'bold 20px Arial';
        validityText = 'Vigencia del ' + startOnArray[2] + ' de ' + months[Number(startOnArray[1]) - 1] + ' al ' + endOnArray[2] + ' de ' + months[Number(endOnArray[1]) -1] + '.';
    }

    ctx.textAlign = 'left';
    ctx.fillStyle = '#092488';
    ctx.fillText(validityText, x - 287, y + 670);
}
/*
Función que creé justifica texto que se le indique utilizando un array
bidimencional. Primero segmenta las palabras y en cada iteración mide la 
longitud de la frase, va creando las frases en filas en la primer dimensión
del array.
*/
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
