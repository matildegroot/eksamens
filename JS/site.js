

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
        setTimeout(typeWriter, 150); 
      }
    }
  
    document.getElementById('typewriter4').textContent = "";
    typeWriter();
  });

  //   TEMA 2 TYPEWRITER EFFEKT
document.addEventListener("DOMContentLoaded", () => { 
    const text = "Grundlæggende web - Tema 2"; 
    let index = 0;
  
    function typeWriter() {
      const element = document.getElementById('typewriter5');
      if (index < text.length) {
        element.textContent += text.charAt(index); 
        index++;
        setTimeout(typeWriter, 150); 
      }
    }
  
    document.getElementById('typewriter5').textContent = "";
    typeWriter();
  });

  //   TEMA 3 TYPEWRITER EFFEKT
document.addEventListener("DOMContentLoaded", () => { 
    const text = "Grundlæggende UX/UI - Tema 3"; 
    let index = 0;
  
    function typeWriter() {
      const element = document.getElementById('typewriter6');
      if (index < text.length) {
        element.textContent += text.charAt(index); 
        index++;
        setTimeout(typeWriter, 150); 
      }
    }
  
    document.getElementById('typewriter6').textContent = "";
    typeWriter();
  });

    //   TEMA 4 TYPEWRITER EFFEKT
    document.addEventListener("DOMContentLoaded", () => { 
    const text = "Grundlæggende animation - Tema 4"; 
    let index = 0;
  
    function typeWriter() {
      const element = document.getElementById('typewriter7');
      if (index < text.length) {
        element.textContent += text.charAt(index); 
        index++;
        setTimeout(typeWriter, 150); 
      }
    }
  
    document.getElementById('typewriter7').textContent = "";
    typeWriter();
  });

      //   TEMA 5 TYPEWRITER EFFEKT
    document.addEventListener("DOMContentLoaded", () => { 
    const text = "Grundlæggende indhold - Tema 5"; 
    let index = 0;
  
    function typeWriter() {
      const element = document.getElementById('typewriter8');
      if (index < text.length) {
        element.textContent += text.charAt(index); 
        index++;
        setTimeout(typeWriter, 150); 
      }
    }
  
    document.getElementById('typewriter8').textContent = "";
    typeWriter();
  });
