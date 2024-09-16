// This file is specific for index.html only and must not be included in any other file

console.log("Welcome to the imgPILLER - Your High quality Image Editing Software");

document.getElementById('create-project').addEventListener('click', function(){
    window.open('project-manager.html', '_parent')
});