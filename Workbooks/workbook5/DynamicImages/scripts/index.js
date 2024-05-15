// Exercise 1 create a dropdown with a list of images and have a button to display that image and another button to clear all
"use strict";

let imageFiles = [
    {
        id: "1",
        path: "Images/dog1.jpeg",
        description: "placeholder 1",
    },
    {
        id: "2",
        path: "Images/dog2.jpeg",
        description: "placeholder 2",
    },
    {
        id: "3",
        path: "Images/dog3.jpeg",
        description: "placeholder 3",
    },
    {
        id: "4",
        path: "Images/dog4.jpeg",
        description: "placeholder 4",
    },
    {
        id: "5",
        path: "Images/dog5.jpeg",
        description: "placeholder 5",
    },
    {
        id: "6",
        path: "Images/cat1.jpeg",
        description: "placeholder 6",
    },
    {
        id: "7",
        path: "Images/cat2.jpeg",
        description: "placeholder 7",
    },
    {
        id: "8",
        path: "Images/cat3.jpeg",
        description: "placeholder 8",
    },
    {
        id: "9",
        path: "Images/cat4.jpeg",
        description: "placeholder 9",
    },
    {
        id: "10",
        path: "Images/cat5.jpeg",
        description: "placeholder 10",
    },
];


// declare variable from HTML (dropdown/add Image button/Clear all Button)
const imageContainer = document.querySelector("#imageContainer");
const imagesHolder = document.querySelector("#images");
const imageDropdown = document.querySelector("#imageDropdown");
const addImageButton = document.querySelector("#addImageButton");
const clearAllButton = document.querySelector("#clearAllButton");

window.onload = function () {

    // display items from dropdown
    displayItems();

    // display selected items image
    addImageButton.onclick = addImage;

    // delete all images (clear button)
    clearAllButton.onclick = clearAllFunction;

}

function displayItems(){
console.log("DisplayItems() has been called");

    // create element for the dropdown
    let option = document.createElement("option");

    // add the description from the array to the dropdown option element
    let images = imageFiles;
    for (let image of images){
        option = new Option(image.description, image.id);
        imageDropdown.appendChild(option);
    }
    
}

function addImage(){

    console.log("addImage() has been called");

    // create an img element for the dropdown after clicking on the add button
    let img = document.createElement("img");

    // find the selected image using selectedIndex property
    if(imageDropdown.selectedIndex >= 0){
        let text = imageDropdown.options[imageDropdown.selectedIndex].text;
        let imageId = 0;

        // loop through the array of images and add their values  (src/path)
        let images = imageFiles;
        for (let image of images){
            if (image.description == text){
                imageId = image.id;
                img.src = image.path;
                img.id = imageId;
                img.style.margin = "10px";
                console.log(image);
            }
        }
        // display the selected image
        // console.log(image.id);
        imagesHolder.appendChild(img);
        
    }

}

function clearAllFunction(){
    console.log("clear all function called");
    imagesHolder.innerHTML = " ";
}