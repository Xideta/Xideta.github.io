//Disables the submit button
function disableButton(){
    const butt = document.getElementById("send");
    butt.disabled=true;
}
//Enables the submit button
function enableButton(){
    const butt = document.getElementById("send");
    butt.disabled=false;
}

export {disableButton, enableButton};