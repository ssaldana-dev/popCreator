let skuObj = document.querySelector('#sku');
let productNameObj = document.querySelector('#product_name');
let regularPriceObj = document.querySelector('#regular_price');
let promotionalPriceObj = document.querySelector('#promotional_price');
let startDateObj = document.querySelector('#starting_date');
let endDateObj = document.querySelector('#ending_date');

let addPopButton = document.querySelector('#add_button');
let createPopsButton = document.querySelector('#create_button');

addPopButton.addEventListener('click', addPop);
createPopsButton.addEventListener('click', writePops);

function writePops () {
    let i = 0;
    let actualX = 331;
    let actualY = 0;
    for (actualPop of pops) {
        writeStaticPhrases(actualX, actualY);
        writeSKU(actualX, actualPop.sku);
        writeProductName(actualPop.name, actualX, actualY);
        writeRegularPrice(actualPop.regularPrice, actualX, actualY);
        writePromotionalPrice(actualPop.promotionalPrice, actualX, actualY);
        writeValidity(actualPop.startDate, actualPop.endDate, actualX, actualY);
        actualX += 712;
        i++
        if (i == 15) {
            i = 0;
            actualX = 331;
            actualY = 0;
            return 'Ended space';
        }else if (i == 10) {
            actualX = 331;
            actualY = 1687;
        }
        else if (i == 5) {
            actualX = 331;
            actualY = 844;
        }
    }
    
}

let pops = [];

// pops[0] = {
//     sku:1000065973,
//     name: 'MARC PERMANENTES SHARPIE',
//     regularPrice: 253,
//     promotionalPrice: 152.80,
//     startDate: '2023-10-15',
//     endDate: '2023-10-18'
// }
// pops[1] = {
//     sku:1000065973,
//     name: 'MARC PERMANENTES SHARPIE',
//     regularPrice: 253,
//     promotionalPrice: 152.80,
//     startDate: '2023-05-15',
//     endDate: '2023-05-18'
// }
// pops[2] = {
//     sku:1000065973,
//     name: 'MARC PERMANENTES SHARPIE',
//     regularPrice: 253,
//     promotionalPrice: 152.80,
//     startDate: '2023-05-15',
//     endDate: '2023-05-18'
// }
// pops[3] = {
//     sku:1000065973,
//     name: 'MARC PERMANENTES SHARPIE',
//     regularPrice: 253,
//     promotionalPrice: 152.80,
//     startDate: '2023-05-15',
//     endDate: '2023-05-18'
// }
// pops[4] = {
//     sku:1000065973,
//     name: 'MARC PERMANENTES SHARPIE',
//     regularPrice: 253,
//     promotionalPrice: 152.80,
//     startDate: '2023-05-15',
//     endDate: '2023-05-18'
// }
// pops[5] = {
//     sku:1000065973,
//     name: 'MARC PERMANENTES SHARPIE',
//     regularPrice: 253,
//     promotionalPrice: 152.80,
//     startDate: '2023-05-15',
//     endDate: '2023-05-18'
// }
// pops[6] = {
//     sku:1000065973,
//     name: 'MARC PERMANENTES SHARPIE',
//     regularPrice: 253,
//     promotionalPrice: 152.80,
//     startDate: '2023-05-15',
//     endDate: '2023-05-18'
// }
// pops[7] = {
//     sku:1000065973,
//     name: 'MARC PERMANENTES SHARPIE',
//     regularPrice: 253,
//     promotionalPrice: 152.80,
//     startDate: '2023-05-15',
//     endDate: '2023-05-18'
// }
// pops[8] = {
//     sku:1000065973,
//     name: 'MARC PERMANENTES SHARPIE',
//     regularPrice: 253,
//     promotionalPrice: 152.80,
//     startDate: '2023-05-15',
//     endDate: '2023-05-18'
// }
// pops[9] = {
//     sku:1000065973,
//     name: 'MARC PERMANENTES SHARPIE',
//     regularPrice: 253,
//     promotionalPrice: 152.80,
//     startDate: '2023-05-15',
//     endDate: '2023-05-18'
// }
// pops[10] = {
//     sku:1000065973,
//     name: 'MARC PERMANENTES SHARPIE',
//     regularPrice: 253,
//     promotionalPrice: 152.80,
//     startDate: '2023-05-15',
//     endDate: '2023-05-18'
// }
// pops[11] = {
//     sku:1000065973,
//     name: 'MARC PERMANENTES SHARPIE',
//     regularPrice: 253,
//     promotionalPrice: 152.80,
//     startDate: '2023-05-15',
//     endDate: '2023-05-18'
// }
// pops[12] = {
//     sku:1000065973,
//     name: 'MARC PERMANENTES SHARPIE',
//     regularPrice: 253,
//     promotionalPrice: 152.80,
//     startDate: '2023-05-15',
//     endDate: '2023-05-18'
// }
// pops[13] = {
//     sku:1000065973,
//     name: 'MARC PERMANENTES SHARPIE',
//     regularPrice: 253,
//     promotionalPrice: 152.80,
//     startDate: '2023-05-15',
//     endDate: '2023-05-18'
// }
// pops[14] = {
//     sku:1000065973,
//     name: 'MARC PERMANENTES SHARPIE',
//     regularPrice: 253,
//     promotionalPrice: 152.80,
//     startDate: '2023-05-15',
//     endDate: '2023-05-18'
// }

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
    console.log(pops);
}