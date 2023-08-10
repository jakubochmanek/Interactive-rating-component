const btn = document.querySelectorAll(".btn");

const mainContainer = document.querySelector(".container");

const thanksContainer = document.getElementById("thanks-container");

const submitBtn = document.querySelector(".submit");

const rate = document.getElementById("rate");



btn.forEach((x => {
    x.addEventListener('click', () => {
            rate.innerHTML = x.innerHTML;
            x = 1;
            console.log(x)
    })
}))

submitBtn.addEventListener('click',show);

function show() {
        mainContainer.style.display = "none";
        thanksContainer.style.display = "flex";
}
    







