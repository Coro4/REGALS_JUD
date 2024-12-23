// Datos de los meses (abreviaturas + enigmas)
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
  
  // Referencias a elementos del DOM
  const pantalla1 = document.getElementById("pantalla1");
  const pantalla2 = document.getElementById("pantalla2");
  const pantallaFinal = document.getElementById("pantallaFinal");
  
  const btnEmpezar = document.getElementById("btnEmpezar");
  
  const timelineLeft  = document.getElementById("timelineLeft");
  const puzzleText    = document.getElementById("puzzle-text");
  const answerInput   = document.getElementById("answerInput");
  const clue          = document.getElementById("clue");
  const btnSiguiente  = document.getElementById("btnSiguiente");
  
  // Al cargar, mostrar solo la pantalla1
  window.onload = () => {
    pantalla1.classList.add("active");
  };
  
  // Botón de inicio
  btnEmpezar.addEventListener("click", () => {
    pantalla1.classList.remove("active");
    pantalla2.classList.add("active");
  
    initTimeline();
    showCurrentMonth();
  });
  
  // Crear la timeline vertical con abreviaturas
  function initTimeline() {
    timelineLeft.innerHTML = "";
    
    monthsData.forEach((item, index) => {
      const div = document.createElement("div");
      div.classList.add("timeline-month");
      div.innerHTML = `<span>${item.abbr}</span>`;
      
      // Al hacer clic en un mes, podríamos ir directamente a ese mes
      div.addEventListener("click", () => {
        currentMonthIndex = index;
        showCurrentMonth();
      });
  
      timelineLeft.appendChild(div);
    });
  }
  
  // Mostrar el mes actual (resaltar timeline y poner puzzle)
  function showCurrentMonth() {
    // 1) Resaltar el mes actual en la timeline
    const monthEls = document.querySelectorAll(".timeline-month");
    monthEls.forEach((el, idx) => {
      el.classList.remove("active");
      if (idx === currentMonthIndex) {
        el.classList.add("active");
      }
    });
  
    // 2) Mostrar intro y enigma
    puzzleText.innerHTML = `
      <p><strong>${monthsData[currentMonthIndex].month}:</strong></p>
      <p><strong>${monthsData[currentMonthIndex].intro}</strong></p>
      <p>${monthsData[currentMonthIndex].enigma}</p>
    `;
    clue.textContent = "";
    answerInput.value = "";
    btnSiguiente.disabled = true;
  }
  
  // Validar respuesta
  answerInput.addEventListener("input", () => {
    const userInput = answerInput.value.toLowerCase().trim();
    const correct = monthsData[currentMonthIndex].answer.toLowerCase().trim();
  
    if (userInput === correct) {
      clue.textContent = monthsData[currentMonthIndex].clue;
      btnSiguiente.disabled = false;
    } else {
      clue.textContent = "";
      btnSiguiente.disabled = true;
    }
  });
  
  // Botón "Més": siguiente mes
  btnSiguiente.addEventListener("click", () => {
    currentMonthIndex++;
    if (currentMonthIndex < monthsData.length) {
      showCurrentMonth();
    } else {
      // Pasamos a la pantalla final
      pantalla2.classList.remove("active");
      pantallaFinal.classList.add("active");
    }
  });
  