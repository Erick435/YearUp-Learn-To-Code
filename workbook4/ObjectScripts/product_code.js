"use strict";

function getSupplierCode(partCode){
    const separateByColon = partCode.indexOf(":");
    return partCode.substring(0, separateByColon);
}

function getProductNumber(partCode){

    const separateByColon = partCode.indexOf(":");
    const separateByDash = partCode.indexOf("-");
    return partCode.substring(separateByColon + 1, separateByDash)
}

function getSize(partCode){
    const separateByDash = partCode.indexOf("-");
    return partCode.substring(separateByDash + 1);

}

function parsePartCode(value){

    let supplierCode = getSupplierCode(value);
    let productCode = getProductNumber(value);
    let sizeOfProduct = getSize(value);

    let product = {
        supplierCode: supplierCode,
        productNumber: productCode,
        size: sizeOfProduct
    }

    return product;

}

let partCode1 = "E5505:05-10";
let part1 = parsePartCode(partCode1);

console.log("Supplier: " + part1.supplierCode + "\nProduct Number: " + part1.productNumber + "\nSize: " + part1.size);
