    // Importing stuff.
    import {disableButton, enableButton} from './dom.js';
    import {toggleBoolEmail, toggleBoolName, toggleBoolMessage, email} from "./data";

	function setup(){
		disableButton();
		document.getElementById("nameInput").addEventListener("input", toggleBoolName);
		document.getElementById("emailInput").addEventListener("input", toggleBoolEmail);
		document.getElementById("messageInput").addEventListener("input", toggleBoolMessage);
		document.getElementById("send").addEventListener("mousedown",email);
		
	}
	setup();
	