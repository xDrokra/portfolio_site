function handleClick(event) {
  if (event.target.classList.contains("active")) {
    return;
  } else {
    const activeButton = document.querySelector(".active");
    activeButton.classList.remove("active");
    event.target.classList.add("active");
  }
}

document
  .querySelectorAll(".btn")
  .forEach((button) => button.addEventListener("click", handleClick));
