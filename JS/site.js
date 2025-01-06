// OM MIG TYPEWRITER EFFEKT

document.addEventListener("DOMContentLoaded", () => { 
    const text = "Om mig"; 
    let index = 0;
  
    function typeWriter() {
      const element = document.getElementById('typewriter1');
      if (index < text.length) {
        element.textContent += text.charAt(index); 
        index++;
        setTimeout(typeWriter, 200); 
      }
    }
  
    document.getElementById('typewriter1').textContent = "";
    typeWriter();
  });

  // CV TYPEWRITER EFFEKT
  document.addEventListener("DOMContentLoaded", () => { 
    const text = "CV"; 
    let index = 0;
  
    function typeWriter() {
      const element = document.getElementById('typewriter2');
      if (index < text.length) {
        element.textContent += text.charAt(index); 
        index++;
        setTimeout(typeWriter, 200); 
      }
    }
  
    document.getElementById('typewriter2').textContent = "";
    typeWriter();
  });

  // FORSIDE TYPEWRITER EFFEKT
  document.addEventListener("DOMContentLoaded", () => { 
    const text = "Portfolio"; 
    let index = 0;
  
    function typeWriter() {
      const element = document.getElementById('typewriter3');
      if (index < text.length) {
        element.textContent += text.charAt(index); 
        index++;
        setTimeout(typeWriter, 200); 
      }
    }
  
    document.getElementById('typewriter3').textContent = "";
    typeWriter();
  });

//   TEMA 1 TYPEWRITER EFFEKT
document.addEventListener("DOMContentLoaded", () => { 
    const text = "Introuge - Tema 1"; 
    let index = 0;
  
    function typeWriter() {
      const element = document.getElementById('typewriter4');
      if (index < text.length) {
        element.textContent += text.charAt(index); 
        index++;
        setTimeout(typeWriter, 200); 
      }
    }
  
    document.getElementById('typewriter4').textContent = "";
    typeWriter();
  });