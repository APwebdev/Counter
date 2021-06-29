var minusFive = document.querySelector("#btn-5");
var minusOne = document.querySelector("#btn-1");
var reset = document.querySelector("#btn-reset");
var plusOne = document.querySelector("#btn-plus-1");
var plusFive = document.querySelector("#btn-plus-5");
var h4Element = document.querySelector("h4");
var body = document.querySelector("body");
var counter = 0;

function updateCounter() {
    h4Element.textContent = counter;

    if (counter > 10) {
        body.style.backgroundColor = "blue"
        h4Element.style.color = "rgb(32, 84, 153)"
    }

    if (counter < 10 && counter > -10) {
        body.style.backgroundColor = "black"
        h4Element.style.color = "#FFF"
        console.log('less than 10')
    }

    if (counter < -10) {
        body.style.backgroundColor = "red";
        h4Element.style.color = "rgb(177, 35, 35)"
        console.log('less than -10');
    }
}

minusFive.addEventListener("click", function() {
    counter -= 5;
    updateCounter()
});

minusOne.addEventListener("click", function() {
    counter -= 1;
    updateCounter()
});

reset.addEventListener("click", function() {
    counter = 0;
    updateCounter()
})

plusOne.addEventListener("click", function() {
    counter += 1;
    updateCounter()
})

plusFive.addEventListener("click", function() {
    counter += 5;
    updateCounter()
})