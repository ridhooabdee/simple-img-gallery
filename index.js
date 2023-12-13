const container = document.querySelector(".container");
const jumbo = document.querySelector(".jumbo");
let eOl = null;
container.addEventListener("click", function (e) {
  if (e.target.className == "thumbs") {
    jumbo.src = e.target.src;
    jumbo.classList.add("fade");
    setTimeout(function () {
      jumbo.classList.remove("fade");
    }, 500);
    if (eOl != null) {
      eOl.classList.remove("active");
    }
    e.target.classList.add("active");
    eOl = e.target;
  }
});
