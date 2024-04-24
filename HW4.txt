window.addEventListener("load", fLoad);

function fLoad() {
    let login = document.getElementById("login");
    let reset = document.getElementById("reset");
    login.addEventListener("click", fValidate);
    reset.addEventListener("click", fReset);

}

function fValidate() {
    let run = document.querySelectorAll("input[type=text]");
    // let text = elt.text; //loop over all input text elements?
    for(let i = 0; i < run.length; i++) {
        if (run[i].value.length == 0) {
            //set background to red
            run[i].style.backgroundColor = "red";
        }
        else if (run[i].value.length > 0) {
            run[i].style.backgroundColor = "green";
        }
    }
}

function fReset() {
    let run = document.querySelectorAll("input[type=text]");
    //remove red backgrounds and any entries (text entries?)
    for(let i = 0; i < run.length; i++) {
        run[i].style.backgroundColor = null;
        run[i].value = null;
    }
}