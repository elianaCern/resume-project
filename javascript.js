

function toggleAccordion(item) {
  var arrow = document.getElementById("arrow" + item);
  if (arrow.classList.contains("bi-chevron-down")) {
    arrow.classList.replace("bi-chevron-down", "bi-chevron-up");
  } 
  else {
    arrow.classList.replace("bi-chevron-up", "bi-chevron-down");
  }
}
