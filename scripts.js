window.onload = function() {
    var subForm = document.querySelector("button");
    var msg = document.getElementsByClassName("message");
    let email = document.getElementById("#email");
    console.log(msg);

    subForm.onclick = function() {
        //do stuff
        var message = () => `Thank you! Your email address ${email} has been added to our mailing list! `;
        msg.innerHTML = message();

        //window.alert("This color is blue!");
        console.log(msg);
    }

    //myElem.onclick=colorFunction;
};