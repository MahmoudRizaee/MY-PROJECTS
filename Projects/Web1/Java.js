document.addEventListener("keydown",
    function (e) {
        if(e.ctrlKey && e.key.toLocaleLowerCase() === "d") {
            e.preventDefault();
            document.body.classList.toggle("dark");
        }
    }
);

const image = document.getElementById("user_img");
image.addEventListener("error", () => {
    image.src = "./Images/restaurant.jpg";
});
