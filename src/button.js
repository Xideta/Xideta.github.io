    //Variables.
    //Basically 3 locks on the submit button.
    let booleanName = false;
    let booleanEmail = false;
    let booleanMessage = false;

    //I had some issues with having the links to elements out in this scope, so now it's all local

    //Disables the submit button
    export function disableButton(){
        const butt = document.getElementById("send");
        butt.disabled=true;
    }
    //Enables the submit button
    export function enableButton(){
        const butt = document.getElementById("send");
        butt.disabled=false;
    }
    //If there's any string in the name field, set a boolean to true
    export function toggleBoolName() {
        const nameInput = document.getElementById('nameInput');
        booleanName = nameInput.value.length > 0;
        checkButton();
    }
    //If there's any email that matches a specific regex, set a boolean to true
    export function toggleBoolEmail() {
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
    export function toggleBoolMessage() {
        const messageInput = document.getElementById('messageInput');
        booleanMessage = messageInput.value.length > 0;
        checkButton();
    }
    //If all booleans are true, enable submit button
    export function checkButton() {
        if(booleanName && booleanEmail && booleanMessage){
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
        disableButton();
        alert("Greetings "+ name +", thank you for your message, wherein you wrote:\n "+ message +"\n" +
            "We'll respond to your question by mailing "+ email +" ASAP.");
        nameInput.value='';
        emailInput.value='';
        messageInput.value='';


    }
	