let taps = document.querySelectorAll(".list li");
let imgs = document.querySelectorAll(".parent .shuffle img");
taps.forEach((tap) => {
  tap.addEventListener("click", (e) => {
    taps.forEach((tap) => {
      tap.classList.remove("active");
    });
    e.target.classList.add("active");
    imgs.forEach((img) => {
      img.style.display = "none";
    });
    console.log(e.target.dataset.tap);
    document.querySelectorAll(`${e.target.dataset.tap} img`).forEach((el) => {
      el.style.display = "block";
    });
    console.log(document.querySelectorAll(`${e.target.dataset.tap}`));
  });
});
