$(document).ready(function() {
    console.log("Script loaded and ready.");

    const imageFolder = 'assets/images/';
    let index = 1;

    function loadImages() {
        const imagePath = `${imageFolder}photo${index}.jpg`;

        $.get(imagePath)
            .done(function() {
                $('.gallery').append(`<div><img src="${imagePath}" alt="Photo"></div>`);
                index++;
                loadImages(); // Load the next image
            })
            .fail(function() {
                console.log("No more images found.");
            });
    }

    loadImages();
});
