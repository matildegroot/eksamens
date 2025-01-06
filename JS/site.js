document.addEventListener("DOMContentLoaded", () => { // Sørger for at koden kører efter siden er loadet
    const text = "Om mig"; // Teksten der skal skrives
    let index = 0;
  
    function typeWriter() {
      const element = document.getElementById('typewriter');
      if (index < text.length) {
        element.textContent += text.charAt(index); // Tilføj næste bogstav
        index++;
        setTimeout(typeWriter, 150); // Hastighed på 150ms per bogstav
      }
    }
  
    // Tøm teksten og start effekten
    document.getElementById('typewriter').textContent = "";
    typeWriter();
  });