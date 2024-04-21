// Select the form and the icon
var icon = document.getElementById("icon");
// Function to toggle dark mode
icon.onclick = function(){
    document.body.classList.toggle("dark-mode");
    if(document.body.classList.contains("dark-mode")){
        icon.src ="pics/lightMode.png";
        logo.src ="inverted_image.jpg";
    }else{
        icon.src = "pics/nightMode.webp";
        logo.src ="pics/UHHlogo.png";
    }
}
var form = document.getElementById("contact-form");
// Function to validate form inputs
form.addEventListener('submit', function(event) {
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;

    if (!email || !message) {
        alert("Please fill out both the email and message fields.");
        event.preventDefault(); // Prevent form submission
    }
});

// Function to change the title
function changeTitle(newTitle) {
    // Select the element by its ID
    var titleElement = document.getElementById("UHH");
    
    // Change the content of the element
    titleElement.textContent = newTitle;
}

