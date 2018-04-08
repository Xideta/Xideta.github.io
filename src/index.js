    import booleans from "./data.js";
    import {disableButton, enableButton} from "./dom.js";
    //I had some issues with having the links to elements out in this scope, so now it's all local

    
    //If there's any string in the name field, set a boolean to true
    function toggleBoolName() {
        const nameInput = document.getElementById('nameInput');
        booleanName = nameInput.value.length > 0;
        checkButton();
    }
    //If there's any email that matches a specific regex, set a boolean to true
    function toggleBoolEmail() {
        const emailInput = document.getElementById('emailInput');
        const regex = /(\w*\+*\.*@\w*\.[\w\.]*)/g;
        if(emailInput.value.match(regex)!=null){
			booleanEmail = true;
		} else {
			booleanEmail = false;
		}
        checkButton();
    }
    //If there's any string in message, set a boolean to true
    function toggleBoolMessage() {
        const messageInput = document.getElementById('messageInput');
        booleanMessage = messageInput.value.length > 0;
        checkButton();
    }
    //If all booleans are true, enable submit button
    function checkButton() {
        if(booleanName && booleanEmail && booleanMessage){
            enableButton()
        } else {
            disableButton()
        }

    }
    //JavaScript alert to emulate a header request.
    //Prints an alert, and clears everything
    function email(){
        const nameInput = document.getElementById("nameInput");
        const messageInput = document.getElementById('messageInput');
        const emailInput = document.getElementById('emailInput');
        const name = nameInput.value;
        const message = messageInput.value;
        const email = emailInput.value;
        disableButton();
        alert("Greetings "+ name +", thank you for your message, wherein you wrote:\n "+ message +"\n" +
            "We'll respond to your question by mailing "+ email +" ASAP.");
        nameInput.value='';
        emailInput.value='';
        messageInput.value='';


    }
	
	function setup(){
		disableButton();
		document.getElementById("nameInput").addEventListener("input", toggleBoolName);
		document.getElementById("emailInput").addEventListener("input", toggleBoolEmail);
		document.getElementById("messageInput").addEventListener("input", toggleBoolMessage);
		document.getElementById("send").addEventListener("mousedown",email);
		
	}
	setup();
	