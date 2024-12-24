/***************************************************
 * 1) Datos de los meses (TODOS)
 ***************************************************/
const monthsData = [
    {
      abbr: "07/23",
      month: "Juliol-Agost-Setembre '23'",
      intro: "Vet aquí una vegada, Menorca, dos joves i algo pendent...",
      enigma: "Discoteca que vam veure més per fora que per dins:",
      answer: "Iguana",
      clue: "Volies un regal per aquests mesos d'horribles gestions? Nah... Next."
    },
    {
      abbr: "10/23",
      month: "Octubre '23'",
      intro: "Després de quasi perdre el contacte, aquí ja va començar a arrancar la cosa, tot i que tampoc estava clar cap a on.",
      enigma: "Mirador on et vaig portar la primera cita:",
      answer: "Puiggraciós",
      clue: "Aquí tampoc tens regal, que em vas deixar tirat amb un risotto i vi preparat. Ja, Ja. Jódete."
    },
    {
      abbr: "11/23",
      month: "Novembre-Desembre '23'",
      intro: "Aquí va començar el festival de la improvització, un literal 'vamo viendo'...",
      enigma: "Local on ens vam marcar uns bailoteos propis de La La Land (mínim):",
      answer: "Parquet",
      clue: "PISTA: Calaix (Nº0)"
    },
    {
      abbr: "01/24",
      month: "Gener '24'",
      intro: "Mica en mica ens anàvem obrint més l'un amb l'altre, i per aquestes dates vaig acabar de comprovar lo golafre que erets amb qualsevol tipus de dolços... Nyam.",
      enigma: "Nom del nostre dolç preferit que ja no hi és a Granollers i vam comprovar que el de Barcelona was not the same:",
      answer: "Xemeneia",
      clue: "PISTA: On sempre (Nº1)"
    },
    {
      abbr: "02/24",
      month: "Febrer '24'",
      intro: "També vaig veure que el mote de 'petita jud' te pegaba molt més del que em pensava, i que tot lo petit i mono ho trobaves adorable.",
      enigma: "Lloc on vam anar a veure les estrelles (i tant que les vam veure...) pel meu cumple:",
      answer: "Bombolla",
      clue: "PISTA: Lavabo (Nº2)"
    },
    {
      abbr: "03/24",
      month: "Març '24",
      intro: "Fins aquest punt va estar molt bé, però si per mi hi va haver un abans i després, en el que em vaig obrir més que mai amb ningú i vam començar 'oficialment', va ser el 7 de març, després d'una molt bona nit...",
      enigma: "Lloc on vam anar pel teu cumple i que ara que les nostres carteres ja no ploren tant haurem de repetir algun dia:",
      answer: "Cabanya",
      clue: "PISTA: Maniquí (Nº3)"
    },
    {
      abbr: "04/24",
      month: "Abril '24",
      intro: "Primer viatjet junts a Madrizzz amb la meva lady. Època marcada per la tortura dels piercings i el TFG, res que encendre una 'espelma' no solucionés jeje",
      enigma: "Obra de teatre que vam veure a Madrid:",
      answer: "Pretty Woman",
      clue: "PISTA: Dutxa (Nº4)"
    },
    {
      abbr: "05/24",
      month: "Maig '24",
      intro: "Més TFG, primer dinar amb la meva family, i jo per fi vaig començar a treballar! Amb alguna que altra avantatge :)",
      enigma: "Vehicle que vas voler acariciar en un aparcament i va resultar ser poc carinyós:",
      answer: "Camió",
      clue: "PISTA: Groot (Nº5)"
    },
    {
      abbr: "06/24",
      month: "Juny '24",
      intro: "La petita jud va acabar el seu super TFG, petant-ho com havien previst els maies.",
      enigma: "El vestit amb aquesta forma ens va quedar de locos:",
      answer: "Flor",
      clue: "PISTA: Sofà (Nº6)"
    },
    {
      abbr: "07/24",
      month: "Juliol '24",
      intro: "Aquest mes ens vam veure massa poc, i jo a distància no parava d'imaginar-te amb poca roba...",
      enigma: "Primer dia d'escalada junts, part on em vaig fer pupa:",
      answer: "Dits",
      clue: "PISTA: Armari (Nº7)"
    },
    {
      abbr: "08/24",
      month: "Agost '24",
      intro: "Festa Major... Aquesta si que et menjava la boca jeje",
      enigma: "País on vam començar a planificar un viatge, amb molts aromes i espècies, que encara tenim pendent:",
      answer: "Marroc",
      clue: "PISTA: Electrodomèstics (Nº8)"
    },
    {
      abbr: "09/24",
      month: "Setembre '24",
      intro: "S'acabava l'estiu i la platjeta, i la futura millor dissenyadora d'Stradi (o d'on vulgui) va començar a treballar també!",
      enigma: "No se si t'agrada més collir-los o menjar-los, pero ens encanten:",
      answer: "Bolets",
      clue: "PISTA: Cuidado no es cremi (Nº9)"
    },
    {
      abbr: "10/24",
      month: "Octubre '24",
      intro: "Començava el fred i ja vam començar a tornar cap als plans cozies.",
      enigma: "Marca de la que em vas regalar un super outfit:",
      answer: "Scuffers",
      clue: "PISTA: Calçat (Nº10)"
    },
    {
      abbr: "11/24",
      month: "Novembre '24",
      intro: "Mes marcat per una petita obsessió amb Lapònia (massa pendent). Suposo que d'aquí va venir també la busca de jaquetes noves i abrics...",
      enigma: "Nom, sense cap mena de dubte, del polito:",
      answer: "Heineken",
      clue: "PISTA: Exterior (Nº11)"
    },
    {
      abbr: "12/24",
      month: "Desembre '24",
      intro: "Preparacions de nadal, el nostre segon viatget, i un objectiu comú a partir d'ara: Estar encara més bons que el pa (yatusae)",
      enigma: "El teu llac preferit:",
      answer: "Bethmale",
      clue: "PISTA: Entrada (Nº12)"
    }
  ];
  
  /***************************************************
   * 2) Variables y referencias DOM
   ***************************************************/
  let currentMonthIndex = 0;
  
  const pantalla1          = document.getElementById("pantalla1");
  const pantalla2          = document.getElementById("pantalla2");
  const pantallaFinal      = document.getElementById("pantallaFinal");
  
  const btnEmpezar         = document.getElementById("btnEmpezar");
  
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
   * 5) Crear nodos del flowchart (scroll horizontal),
   *    a partir del index 3 (04/24) => nodo más oscuro
   ***************************************************/
  function initFlowchart() {
    flowchartContainer.innerHTML = "";
  
    monthsData.forEach((item, index) => {
      const node = document.createElement("div");
      node.classList.add("flow-item");
  
      // Si es el último, no se muestra flecha
      if (index === monthsData.length - 1) {
        node.classList.add("last");
      }
      // Si index >= 3 => nodo oscuro
      if (index >= 5) {
        node.classList.add("dark-node");
      }
  
      node.innerHTML = `<h3>${item.abbr}</h3>`;
  
      // Al hacer clic en un nodo -> mostrar ese mes
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
    // Quitar la clase .active de todos
    const flowItems = document.querySelectorAll(".flow-item");
    flowItems.forEach((item, idx) => {
      item.classList.remove("active");
    });
  
    // Poner .active al nodo actual
    flowItems[currentMonthIndex].classList.add("active");
  
    // Hacer scroll para que el nodo actual se vea a la izquierda
    flowItems[currentMonthIndex].scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "start"
    });
  
    // Mostrar puzzle con month, intro, enigma
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
      pantalla2.classList.remove("active");
      pantallaFinal.classList.add("active");
    }
  });
  
