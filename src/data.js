import {disableButton, enableButton} from "./dom.js";
    //Variables.
    //Basically 3 locks on the submit button.
    const booleanList = [false, false, false];

    //If there's any string in the name field, set a boolean to true
    export function toggleBoolName() {
        const nameInput = document.getElementById('nameInput');
        booleanList[0] = nameInput.value.length > 0;
        checkButton();
    }
    //If there's any email that matches a specific regex, set a boolean to true
    export function toggleBoolEmail() {
        const emailInput = document.getElementById('emailInput');
        const regex = /(\w*\+*\.*@\w*\.[\w\.]*)/g;
        if(emailInput.value.match(regex)!=null){
			booleanList[1] = true;
		} else {
			booleanList[1] = false;
		}
        checkButton();
    }
    //If there's any string in message, set a boolean to true
    export function toggleBoolMessage() {
        const messageInput = document.getElementById('messageInput');
        booleanList[2] = messageInput.value.length > 0;
        checkButton();
    }
    //If all booleans are true, enable submit button
    function checkButton() {
        if(booleanList[0] && booleanList[1] && booleanList[2]){
            enableButton()
        } else {
            disableButton()
        }

    }
    //JavaScript alert to emulate a header request.
    //Prints an alert, and clears everything
    export function email(){
        const nameInput = document.getElementById("nameInput");
        const messageInput = document.getElementById('messageInput');
        const emailInput = document.getElementById('emailInput');
        const name = nameInput.value;
        const message = messageInput.value;
        const email = emailInput.value;
        booleanList[0]=false;
        booleanList[1]=false;
        booleanList[2]=false;
        disableButton();
        alert("Greetings "+ name +", thank you for your message, wherein you wrote:\n "+ message +"\n" +
            "We'll respond to your question by mailing "+ email +" ASAP.");
        nameInput.value='';
        emailInput.value='';
        messageInput.value='';


    }

