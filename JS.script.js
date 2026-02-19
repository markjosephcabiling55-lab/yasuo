$("#body").click(function(){
    if($("#email").val()==='' && $("#password").val()===''){
        alert('Email and Password is Required');
    } else{
        alert('Email and Password is Accepted');
    }
});
   
///CONTACT PAGE
document.getElementById("contactForm").addEventListener("submit", function(event) {
        event.preventDefault(); 

        let isValid = true;

       
        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();

        
        const nameError = document.getElementById("nameError");
        const emailError = document.getElementById("emailError");
        const messageError = document.getElementById("messageError");

       
        nameError.textContent = "";
        emailError.textContent = "";
        messageError.textContent = "";

        
        if (name === "") {
            nameError.textContent = "Name is required.";
            isValid = false;
        }

       
        const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
        if (email === "") {
            emailError.textContent = "Email is required.";
            isValid = false;
        } else if (!emailPattern.test(email)) {
            emailError.textContent = "Enter a valid email address.";
            isValid = false;
        }

        
        if (message === "") {
            messageError.textContent = "Message cannot be empty.";
            isValid = false;
        }

        
        if (isValid) {
            document.getElementById("successMessage").style.display = "block";
        
            document.getElementById("contactForm").reset();
        }

        ///ABOUT PAGE
    });
    const toggleBtn = document.getElementById('themeToggle');
        toggleBtn.addEventListener('click', () => {
            document.body.classList.toggle('dark');
        });
