document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("login-form").addEventListener("submit", function (e) {
        e.preventDefault(); // Prevent the default form submit action
        console.log("hi"); // Log "hi" to the console

        const email = document.getElementById("emailid").value;
        const password = document.getElementById("password").value;

        // Create a JSON object with email and password
        const userData = {
            emailid: email,
            password: password,
        };
        console.log(userData)
        fetch("http://192.168.9.140:5000/api/doesuser", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(userData),
        })
            .then(response => response.json())
            .then(data => {
                if (data === true) {
                    // If the response is true, add "emailid" to local storage
                    localStorage.setItem("emailid", email);
                    // Redirect to the after login page
                    window.location.href = "page1.html";
                } else {
                    // If the response is false, display an error message
                    document.getElementById("error-message").textContent = "Login failed. Please check your credentials.";
                    document.getElementById("error-message").style.display = "block";
                }
            })
            .catch(error => {
                console.error("Error:", error);
            });
    });


    
});

document.addEventListener("DOMContentLoaded", function() { 
    document.getElementById("reg-form").addEventListener("submit", function (e) {
        e.preventDefault(); // Prevent the default form submit action
        console.log("hi"); // Log "hi" to the console

        const email = document.getElementById("emailid").value;
        const password = document.getElementById("password").value;

        // Create a JSON object with email and password
        const userData = {
            emailid: email,
            password: password,
        };
        console.log(userData)
        fetch("http://192.168.9.140:5000/api/new", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(userData),
        })
            .then(response => response.json())
            .then(data => {
                if (data === true) {
                    // If the response is true, add "emailid" to local storage
                    localStorage.setItem("emailid", email);
                    // Redirect to the after login page
                    window.location.href = "page1.html";
                } else {
                    // If the response is false, display an error message
                    document.getElementById("error-message").textContent = "Existing user? Please login.";
                    document.getElementById("error-message").style.display = "block";
                }
            })
            .catch(error => {
                console.error("Error:", error);
            });
    });});
    document.addEventListener("DOMContentLoaded", function() {
        document.getElementById("data-entry").addEventListener("submit", function (e) {
            e.preventDefault(); // Prevent the default form submit action
            console.log("hi"); // Log "hi" to the console
    
            const link = document.getElementById("link").value;
            const git = document.getElementById("git").value;
            const emailid = localStorage.getItem("emailid");
            // Create a JSON object with email and password
            const userData = {
                emailid: emailid,
                linkedin:link,github:git
            };
            console.log(userData)
            fetch("http://192.168.9.140:5000/api/newuser"
            , {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(userData),
            })
                .then(response => response.json())
                .then(data => {
                    if (data === true) {
                        // If the response is true, add "emailid" to local storage
                        // Redirect to the after login page
                        window.location.href = "fourth.html";
                    } else {
                        // If the response is false, display an error message
                        console.log("error");
                    }
                })
                .catch(error => {
                    console.error("Error:", error);
                });
        });});