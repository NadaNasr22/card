const accordion = document.getElementById("accordion");

/*accordion.forEach((btn) => {
    btn.addEventListener("click", function() {
        btn.textContent = btn.accordion === "-" ? "+" : "-";
    })
});*/
const currentText = accordion.textContent.trim();
accordion.addEventListener('click', function() {
    if (currentText.startsWith("-")) {
        accordion.textContent = ("+").currentText.slice(1).trim();
    } else {
        accordion.textContent = ("-").currentText.slice(1).trim();
    }
})