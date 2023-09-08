function pedirNombreJugador(numeroJugador) {
    console.log(prompt(`Ingrese el nombre del jugador ${numeroJugador}:`));
}
pedirNombreJugador("jugador")

function pedirNombreEquipo(numeroEquipo) {
console.log(prompt(`Ingrese el nombre del equipo ${numeroEquipo}:`));
}
pedirNombreEquipo("");

// Función para simular un gol      
function simularGol(goles) {

let gol = "goles"
console.log("goles")


console.log(Math.random("Goles en el partido")) < 0.5; // 50% de probabilidad de marcar un gol

}
simularGol("");

// Función para simular un partido
function simularPartido(PARTIDO) {
const equipo1 = pedirNombreEquipo(1);
const equipo2 = pedirNombreEquipo(2);

let golesEquipo1 = 0;
let golesEquipo2 = 0;
let jugadorNumero = 1;

console.log(golesEquipo1 + golesEquipo2 + jugadorNumero);

while (jugadorNumero <= 11) {
    const jugador1 = pedirNombreJugador(jugadorNumero);
    const jugador2 = pedirNombreJugador(jugadorNumero);

    if (simularGol()) {
        let golesEquipo1 = equipo1;
        console.log(`${jugador1} (${equipo1}) marca un gol.`);
    } else {
        console.log(`${jugador1} (${equipo1}) falla un tiro.`);
    }

    if (simularGol()) {
        golesEquipo2++;
        console.log(`${jugador2} (${equipo2}) marca un gol.`);
    } else {
        console.log(`${jugador2} (${equipo2}) falla un tiro.`);
    }

    jugadorNumero++;
}

console.log("Resultado final:");
console.log(`${equipo1} ${golesEquipo1} - ${golesEquipo2} ${equipo2}`);
}
simularPartido("SIMULANDO");


// Llamar a la función para simular el parti
function simularPartido(PARTIDO){
console.log("PARTIDO FINALIZADO")
}
simularPartido("SIMULANDO");


















// Datos de los equipos y partidos
const equipos = "Jugador1, Jugador2, Jugador3";
    
  
  const partidos = [
    { equipoLocal: "EquipoA", equipoVisitante: "EquipoB", golesLocal: 2, golesVisitante: 1 },
    { equipoLocal: "EquipoB", equipoVisitante: "EquipoA", golesLocal: 3, golesVisitante: 2 },
    { equipoLocal: "EquipoA", equipoVisitante: "EquipoB", golesLocal: 1, golesVisitante: 1 },
    { equipoLocal: "EquipoB", equipoVisitante: "EquipoA", golesLocal: 0, golesVisitante: 2 }
  ];
  
  // Función para buscar partidos de un jugador
  function buscarPartidosDelJugador(equipo, jugador) {
    const partidosDelJugador = [];
    for (const partido of partidos) {
      if (partido.equipoLocal === equipo && equipos[equipo].includes(jugador)) {
        partidosDelJugador.push(partido);
      } else if (partido.equipoVisitante === equipo && equipos[equipo].includes(jugador)) {
        partidosDelJugador.push(partido);
      }
    }
    return partidosDelJugador;
  }
  buscarPartidosDelJugador()
  
  // Función para calcular los goles de un jugador en los partidos
  function calcularGolesDelJugador(partidosDelJugador, jugador) {
    let goles = 0;
    for (const partido of partidosDelJugador) {
      if (partido.equipoLocal === equipo && partido.golesLocal > 0) {
        goles += partido.golesLocal;
      } else if (partido.equipoVisitante === equipo && partido.golesVisitante > 0) {
        goles += partido.golesVisitante;
      }
    }
    return goles;
  }
  
  // Pedir al usuario los datos del equipo y el jugador
  let equipo = prompt("Ingresa el nombre del equipo:");
  let jugador = prompt("Ingresa el nombre del jugador:");
  
  // Buscar partidos del jugador
  const partidosDelJugador = buscarPartidosDelJugador(equipo, jugador);
  
  // Calcular goles del jugador en los partidos
  const golesDelJugador = calcularGolesDelJugador(partidosDelJugador, jugador);
  
  // Mostrar resultados
  if (partidosDelJugador.length > 0) {
    console.log(`Partidos de ${jugador} en el equipo ${equipo}:`);
    for (const partido of partidosDelJugador) {
      console.log(`${partido.equipoLocal} ${partido.golesLocal} - ${partido.golesVisitante} ${partido.equipoVisitante}`);
    }
    console.log(Math.random("Goles en el partido")) < 0.5;;
  } else {
    console.log(`${jugador} jugo en  ${equipo}.`);
  } 
  
