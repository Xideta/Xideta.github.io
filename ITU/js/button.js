    let booleanName = false;
    let booleanEmail = false;
    let booleanMessage = false;


    function disableButton(){
        const butt = document.getElementById("send");
        butt.disabled=true;
    }
    function enableButton(){
        const butt = document.getElementById("send");
        butt.disabled=false;
    }

    function toggleBoolName() {
        const nameInput = document.getElementById('nameInput');
        booleanName = nameInput.value.length > 0;
        checkButton();
    }
    function toggleBoolEmail() {
        const emailInput = document.getElementById('emailInput');
        const regex = /([\w]*\+*\.*)*@([\w]*\+*).([a-zA-Z]*)/;
        booleanEmail = emailInput.value.match(regex).length > 0;
        checkButton();
    }
    function toggleBoolMessage() {
        const messageInput = document.getElementById('messageInput');
        booleanMessage = messageInput.value.length > 0;
        checkButton();
    }

    function checkButton() {
        if(booleanName && booleanEmail && booleanMessage){
            enableButton()
        } else {
            disableButton()
        }

    }

    function email(){
        const nameInput = document.getElementById("nameInput");
        const messageInput = document.getElementById('messageInput');
        const emailInput = document.getElementById('emailInput');
        const name = nameInput.value;
        const message = messageInput.value;
        const email = emailInput.value;
        alert("Greetings "+ name +", thank you for your message, wherein you wrote:\n "+ message +"\n" +
            "We'll respond to your question by mailing "+ email +" ASAP.")
    }




