console.log("Online Book Store Loaded");

let buttons = document.querySelectorAll("button");

buttons.forEach(button => {
    button.addEventListener("click", () => {
        alert("Book added to cart!");
    });
});