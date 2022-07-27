const topButton = document.getElementById("top")

topButton.addEventListener("click", toTop)

function toTop() {
    document.body.scrollTop = 0; 
    document.documentElement.scrollTop = 0; 
  }