const btn = document.getElementById("btn");

btn.addEventListener("click", function () {
  let currentValue = this.innerHTML;
  this.innerHTML = parseInt(currentValue) + 1;
});
