/***************************************************
 * 1) Datos de los meses (solo abreviatura en flowchart)
 ***************************************************/
const monthsData = [
    {
      abbr: "10/23",
      month: "Octubre 2023",
      intro: "Aquest mes ens vam conèixer millor...",
      enigma: "Endevina: Quina va ser la primera pel·lícula que vam veure junts?",
      answer: "avatar",
      clue: "La pista del regal està al calaix de sota del televisor."
    },
    {
      abbr: "11/23",
      month: "Novembre 2023",
      intro: "Començava a fer fred...",
      enigma: "Endevina: Què em vas regalar pel meu aniversari?",
      answer: "samarreta",
      clue: "Pots trobar el regal nou a l'armari de la roba."
    },
    {
      abbr: "12/23",
      month: "Desembre 2023",
      intro: "El nostre primer Nadal junts...",
      enigma: "Endevina: Què sopem la nit de Nadal?",
      answer: "pollastre",
      clue: "El regal està amagat a la cuina, prop del forn."
    },
    {
      abbr: "01/24",
      month: "Gener 2024",
      intro: "Començant l'any nou junts...",
      enigma: "Endevina: Quina ciutat volem visitar aquest any?",
      answer: "paris",
      clue: "Mira a la maleta de viatge del passadís."
    },
    {
      abbr: "02/24",
      month: "Febrer 2024",
      intro: "Mes de l'amor i de Sant Valentí...",
      enigma: "Endevina: Quin és el meu color preferit?",
      answer: "vermell",
      clue: "El regal l'he amagat sota el llit."
    },
    {
      abbr: "12/24",
      month: "Desembre 2024",
      intro: "El nostre segon Nadal junts...",
      enigma: "Endevina: Quin és el nostre lloc favorit per passar Nadal?",
      answer: "casa teva",
      clue: "El regal final està al balcó, sota una manta."
    }
  ];
  
  let currentMonthIndex = 0;
  
  /***************************************************
   * 2) Referencias DOM
   ***************************************************/
  const pantalla1     = document.getElementById("pantalla1");
  const pantalla2     = document.getElementById("pantalla2");
  const pantallaFinal = document.getElementById("pantallaFinal");
  
  const btnEmpezar    = document.getElementById("btnEmpezar");
  
  const flowchartContainer = document.getElementById("flowchartContainer");
  const puzzleText         = document.getElementById("puzzle-text");
  const answerInput        = document.getElementById("answerInput");
  const clue               = document.getElementById("clue");
  const btnSiguiente       = document.getElementById("btnSiguiente");
  
  /***************************************************
   * 3) Al cargar: mostrar sólo la pantalla1
   ***************************************************/
  window.onload = () => {
    pantalla1.classList.add("active");
  };
  
  /***************************************************
   * 4) Botón de inicio -> pasar a pantalla2
   ***************************************************/
  btnEmpezar.addEventListener("click", () => {
    pantalla1.classList.remove("active");
    pantalla2.classList.add("active");
  
    initFlowchart();
    showCurrentMonth();
  });
  
  /***************************************************
   * 5) Crear nodos del flowchart horizontal
   ***************************************************/
  function initFlowchart() {
    flowchartContainer.innerHTML = "";
  
    monthsData.forEach((item, index) => {
      const node = document.createElement("div");
      node.classList.add("flow-item");
      
      // Solo la abreviatura en h3
      node.innerHTML = `<h3>${item.abbr}</h3>`;
  
      // Si es el último, no mostramos flecha
      if (index === monthsData.length - 1) {
        node.classList.add("last");
      }
  
      // Click en un nodo -> ir a ese mes (opcional)
      node.addEventListener("click", () => {
        currentMonthIndex = index;
        showCurrentMonth();
      });
  
      flowchartContainer.appendChild(node);
    });
  }
  
  /***************************************************
   * 6) Mostrar mes actual (resaltar nodo + puzzle)
   ***************************************************/
  function showCurrentMonth() {
    // Resaltar el nodo activo
    const flowItems = flowchartContainer.querySelectorAll(".flow-item");
    flowItems.forEach((item, idx) => {
      item.classList.remove("active");
      if (idx === currentMonthIndex) {
        item.classList.add("active");
      }
    });
  
    // Mostrar puzzle con intro + enigma
    puzzleText.innerHTML = `
      <p><strong>${monthsData[currentMonthIndex].month}</strong></p>
      <p><em>${monthsData[currentMonthIndex].intro}</em></p>
      <p>${monthsData[currentMonthIndex].enigma}</p>
    `;
  
    clue.textContent = "";
    answerInput.value = "";
    btnSiguiente.disabled = true;
  }
  
  /***************************************************
   * 7) Validar respuesta en tiempo real
   ***************************************************/
  answerInput.addEventListener("input", () => {
    const userInput = answerInput.value.toLowerCase().trim();
    const correct   = monthsData[currentMonthIndex].answer.toLowerCase().trim();
  
    if (userInput === correct) {
      clue.textContent = monthsData[currentMonthIndex].clue;
      btnSiguiente.disabled = false;
    } else {
      clue.textContent = "";
      btnSiguiente.disabled = true;
    }
  });
  
  /***************************************************
   * 8) Botón "Més" -> siguiente mes o pantalla final
   ***************************************************/
  btnSiguiente.addEventListener("click", () => {
    currentMonthIndex++;
    if (currentMonthIndex < monthsData.length) {
      showCurrentMonth();
    } else {
      // Pasamos a pantalla final
      pantalla2.classList.remove("active");
      pantallaFinal.classList.add("active");
    }
  });
  