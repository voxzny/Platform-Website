function myFunction() {
	var x = document.getElementById("myNavbar");
	if (x.className === "navbar") {
	  x.className += " responsive";
	} else {
	  x.className = "navbar";
	}
  }

document.getElementById("card").onmousemove = e => {
  for(const card of document.getElementsByClassName("card")) {
    const rect = card.getBoundingClientRect(),
          x = e.clientX - rect.left,
          y = e.clientY - rect.top;

    card.style.setProperty("--mouse-x", `${x}px`);
    card.style.setProperty("--mouse-y", `${y}px`);
  };
}