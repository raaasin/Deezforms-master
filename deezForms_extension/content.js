let formData = {};
let formArray = {};
let resposeData = {};

function triggerFocus(element, text) {
    console.log(element, text);
    let eventType = "onfocusin" in element ? "focusin" : "focus";
    let bubbles = "onfocusin" in element;
    let event;

    if ("Event" in window) {
        event = new Event(eventType, { bubbles: bubbles, cancelable: true });
    }

    setTimeout(() => {
        element.focus();
        element.dispatchEvent(event);
        function simulateHumanTyping(inputElement, text) {
            var inputEvent = new Event('input', { bubbles: true });
            var index = 0;

            function typeCharacter() {
                if (index < text.length) {
                    inputElement.value += text[index];
                    inputElement.dispatchEvent(inputEvent);
                    index++;
                    setTimeout(typeCharacter, 200);
                }
            }

            typeCharacter();
        }

        simulateHumanTyping(element, text);
    }, 500);
}

function logForm() {
    
    let labels = document.querySelectorAll('.M7eMe');

    labels.forEach((e, i) => {
        const label = e.innerText;
        const index = i + 1;

        let input = document.querySelector(`#mG61Hd > div.RH5hzf.RLS9Fe > div > div.o3Dpx > div:nth-child(${index}) > div > div > div.AgroKb > div > div.aCsJod.oJeWuf > div > div.Xb9hP > input`);

        let textArea =
            document.querySelector(`#mG61Hd > div.RH5hzf.RLS9Fe > div > div.o3Dpx > div:nth-child(${index}) > div > div > div.AgroKb > div > div.RpC4Ne.oJeWuf > div.Pc9Gce.Wic03c > textarea`);

        let placeHolder;

        //console.log("...");
        //console.log(label);
        buttonElement.innerHTML = "Read your form...";

        if (input) {
            console.log("this is an input tag");
            placeHolder = document.querySelector(`#mG61Hd > div.RH5hzf.RLS9Fe > div > div.o3Dpx > div:nth-child(${index}) > div > div > div.AgroKb > div > div.aCsJod.oJeWuf > div > div.Xb9hP > div`);
            if (placeHolder) {
                placeHolder.remove();
            }

            // start filling

            // triggerFocus(input, "i will fill input");

            // end filling
            buttonElement.innerHTML = "filling your form";
            formArray[index] = input;
            formData[index] = label.trim();

            console.log(input.value);

        } else if (textArea) {
            console.log("this is a textarea");
            placeHolder = document.querySelector(`#mG61Hd > div.RH5hzf.RLS9Fe > div > div.o3Dpx > div:nth-child(${index}) > div > div > div.AgroKb > div > div.RpC4Ne.oJeWuf > div`);
            if (placeHolder) {
                placeHolder.remove();
            }

            // start filling
            buttonElement.innerHTML = "filling your form";
            // triggerFocus(textArea, "i will fill text area");

            // end filling

            formArray[index] = textArea;
            formData[index] = label.trim();

        } else {
            console.log("nada");
        }
    });
}

function apiCall() {
    // Define the JSON data
    buttonElement.innerHTML = "Calling the API";
    buttonElement.innerHTML = "API is processing your request";
    formData.emailid = "nisarvskp@gmail.com";
    fetch('https://1a7d-49-249-72-18.ngrok-free.app/api/fillme', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json' // Set the content type to JSON
        },
        body: JSON.stringify(formData) // Convert JSON object to string
    })
        
        .then(response => response.json())
        
        .then(data => {
            buttonElement.innerHTML = "API processed";
            JSON.stringify(data);
            resposeData = data;
            fillForm();
        })
        .catch(error => {
            console.log("error");
        });
};

function fillForm() {
    if (!resposeData || Object.keys(resposeData).length !== Object.keys(formArray).length) {
        console.log("Invalid response data or data mismatch");
        return;
    }

    for (let index = 1; index <= Object.keys(formArray).length; index++) {
        const inputElement = formArray[index];
        const responseText = resposeData[index];

        if (inputElement && responseText) {
            triggerFocus(inputElement, responseText);
        } else {
            console.log("Invalid input element or missing response text for index " + index);
        }
    }
}


console.log("\"brrr deezForms 😶‍🌫️\"");

function performMagic() {
    // Your code here
    console.log("Magic button clicked!");
    // You can replace the console.log with any other actions you want to perform.
}

// Find the button by its ID and add a click event listener
const magicButton = document.getElementById("magic");

if (magicButton) {
    magicButton.addEventListener("click", performMagic);
}

function dothething() {
logForm();
console.log(formData);
console.log(formArray);
apiCall();
buttonElement.innerHTML = "Magic done!";
}

// Select the div element
const divElement = document.querySelector("#mG61Hd > div.RH5hzf.RLS9Fe > div > div.ThHDze > div.DE3NNc.CekdCb > div.lRwqcd");

if (divElement) {
  // Create a button element
  const buttonElement = document.createElement("button");
  buttonElement.textContent = "Lets start the magic";
  buttonElement.id="doit"; // Set the button text

  // Add an event listener to the button
  buttonElement.addEventListener("click", function () {
    // Call your custom function when the button is clicked
    dothething();
    buttonElement.disabled = true;
    buttonElement.innerHTML = "Reading your form...";
  });

  // Append the button to the div
  divElement.appendChild(buttonElement);
}
var buttonElement = document.getElementById("doit");