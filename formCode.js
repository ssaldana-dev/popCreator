let skuObj = document.querySelector('#sku');
let productNameObj = document.querySelector('#product_name');
let regularPriceObj = document.querySelector('#regular_price');
let promotionalPriceObj = document.querySelector('#promotional_price');
let startDateObj = document.querySelector('#starting_date');
let endDateObj = document.querySelector('#ending_date');

let addPopButton = document.querySelector('#add_button');
let createPopsButton = document.querySelector('#create_button');

const popInfoContainer = document.querySelector('#pops_information_container')

addPopButton.addEventListener('click', addPop);
createPopsButton.addEventListener('click', writePops);

function writePops () {
    let i = 0;
    let actualX = 331;
    let actualY = 0;
    let popX = 0;
    let popY = 0;
    let popColor = 'rose';

    for (actualPop of pops) {
        addPopImg(popColor, popX, popY);
        writeStaticPhrases(actualX, actualY);
        writeSKU(actualX, actualPop.sku);
        writeProductName(actualPop.name, actualX, actualY);
        writeRegularPrice(actualPop.regularPrice, actualX, actualY);
        writePromotionalPrice(actualPop.promotionalPrice, actualX, actualY);
        writeValidity(actualPop.startDate, actualPop.endDate, actualX, actualY);
        actualX += 712;
        popX += 712;
        i++

        if (popColor == 'rose') {
            popColor = 'blue';
        } else if (popColor == 'blue') {
            popColor = 'green';
        } else {
            popColor = 'rose';
        }

        if (i == 16) {
            actualX = 331;
            actualY = 0;
            popX = 0;
            popY = 0;
            downloadCanvas ();
            ctx.fillStyle = '#FFFFFF';
            ctx.clearRect(0,0,3508,2480);
            ctx.fillRect(0,0,3508,2480);
            i = 0;
        }else if (i == 10) {
            actualX = 331;
            actualY = 1687;
            popX = 0;
            popY = 1687;
        }
        else if (i == 5) {
            actualX = 331;
            actualY = 844;
            popX = 0;
            popY = 844;
        }
    }
    downloadCanvas();
}

function downloadCanvas () {
    let canvasDownload = document.createElement('a');
    canvasDownload.download = 'pops-mini.jpeg';
    canvasDownload.href = canvas.toDataURL('image/jpeg', 1);
    canvasDownload.click();
}

let pops = [];

function pop (sku, name, regPrice, promPrice, startDate, endDate) {
    this.sku = sku;
    this.name = name;
    this.regularPrice = regPrice;
    this.promotionalPrice = promPrice;
    this.startDate = startDate;
    this.endDate = endDate;
}

function addPop () {
    pops.push(
        new pop(
            skuObj.value, 
            productNameObj.value, 
            Number(regularPriceObj.value),
            Number(promotionalPriceObj.value),
            startDateObj.value,
            endDateObj.value
            )
        );
    addPopInformation();
    console.log(pops);
}

let popCounter = 0;

function addPopInformation () {
    createPopInformation(
            pops[popCounter].sku,
            pops[popCounter].name,
            '$' + Number(pops[popCounter].regularPrice).toFixed(2),
            '$' + Number(pops[popCounter].promotionalPrice).toFixed(2),
            pops[popCounter].startDate,
            pops[popCounter].endDate,
        );
        popCounter++;
}

function createPopInformation (sku, name, price, promo, start, end) {
    const popInformation = document.createElement('div');
    popInformation.classList.add('pops_information');
    const skuInfo = document.createElement('span');
    skuInfo.innerText = sku;
    const nameInfo = document.createElement('span');
    nameInfo.classList.add('pops_information_name');
    nameInfo.innerText = name;
    const priceInfo = document.createElement('span');
    priceInfo.innerText = price;
    const promoInfo = document.createElement('span');
    promoInfo.innerText = promo;
    const startInfo = document.createElement('span');
    startInfo.innerText = start;
    const endInfo = document.createElement('span');
    endInfo.innerText = end;

    popInformation.appendChild(skuInfo);
    popInformation.appendChild(nameInfo);
    popInformation.appendChild(priceInfo);
    popInformation.appendChild(promoInfo);
    popInformation.appendChild(startInfo);
    popInformation.appendChild(endInfo);

    popInfoContainer.appendChild(popInformation);
}