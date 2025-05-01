// Definir los roles disponibles
const roles = [
  'Civil', 'Mafioso', 'Mafioso Silenciador', 'Mafioso Adivino', 
  'Artista Vudú', 'Medico', 'Psiquico', 'Clonador', 'Cupido', 'Amantes', 
  'Ángel Vengativo', 'Bufón', 'Colector de Almas', 'Paparazzi', 'Exhumador',
  'Ángel Guardian', 'Influencer', 'Stan', 'Alcalde', 'Militar', 'Cirujano', 
  'Sheriff', 'Soplón', 'Sanguijuela'
];

// Función para asignar un rol aleatorio
function asignarRoles(jugadores) {
  const rolesAsignados = [];
  const rolesDisponibles = [...roles];
  
  jugadores.forEach(jugador => {
    const rol = rolesDisponibles.splice(Math.floor(Math.random() * rolesDisponibles.length), 1)[0];
    rolesAsignados.push({ jugador, rol });
  });
  
  return rolesAsignados;
}

// Función para asignar objetivos a roles específicos
function asignarObjetivos(rolesAsignados) {
  rolesAsignados.forEach(asignacion => {
    const { rol } = asignacion;
    asignacion.objetivo = obtenerObjetivo(rol);
  });
}

// Función que devuelve un objetivo según el rol
function obtenerObjetivo(rol) {
  switch (rol) {
    case 'Mafioso':
    case 'Mafioso Silenciador':
    case 'Mafioso Adivino':
    case 'Artista Vudú':
      return 'Eliminar a todos los civiles.';
    case 'Medico':
      return 'Salvar a los civiles que puedas.';
    case 'Psiquico':
      return 'Descubrir la mafia.';
    case 'Clonador':
      return 'Cambiar el voto de un jugador.');
    case 'Cupido':
      return 'Unir a dos jugadores, protegerlos.';
    case 'Amantes':
      return 'Permanecer juntos hasta el final.';
    case 'Ángel Vengativo':
      return 'Vengar tu muerte si eres eliminado.';
    case 'Bufón':
      return 'Ser votado fuera de la partida.';
    case 'Colector de Almas':
      return 'Elegir 5 jugadores, y matar a 3 de ellos.';
    case 'Paparazzi':
      return 'Hacer que tu objetivo sea votado.';
    case 'Exhumador':
      return 'Tomar el rol de un jugador asesinado.';
    case 'Ángel Guardian':
      return 'Proteger a alguien tras tu muerte.';
    case 'Influencer':
      return 'Transferir votos en la ronda final.';
    case 'Stan':
      return 'Proteger al objetivo y asegurarte que gane.';
    case 'Alcalde':
      return 'Ayudar a los civiles y ganar.';
    case 'Militar':
      return 'Sobrevivir utilizando tus protecciones.';
    case 'Cirujano':
      return 'Revive a un jugador durante 3 rondas.';
    case 'Sheriff':
      return 'Identificar a los mafiosos.';
    case 'Soplón':
      return 'Revelar a un mafioso en la votación final.';
    case 'Sanguijuela':
      return 'Deshabilitar las habilidades de otros jugadores.';
    default:
      return 'No definido.';
  }
}

// Función para iniciar la partida
function iniciarPartida() {
  const jugadores = [
    { nombre: 'Jugador 1' }, { nombre: 'Jugador 2' }, { nombre: 'Jugador 3' }, { nombre: 'Jugador 4' }
  ];

  // Asignar roles a los jugadores
  const rolesAsignados = asignarRoles(jugadores);
  
  // Asignar objetivos a los jugadores
  asignarObjetivos(rolesAsignados);
  
  // Mostrar los roles y objetivos
  mostrarRolesYObjetivos(rolesAsignados);
}

// Función para mostrar roles y objetivos en la interfaz
function mostrarRolesYObjetivos(rolesAsignados) {
  const rolesDiv = document.getElementById('rolesAsignados');
  const objetivosDiv = document.getElementById('objetivos');
  
  rolesDiv.innerHTML = '<h2>Roles Asignados:</h2>';
  objetivosDiv.innerHTML = '<h2>Objetivos Asignados:</h2>';
  
  rolesAsignados.forEach(asignacion => {
    rolesDiv.innerHTML += `<p>${asignacion.jugador.nombre}: ${asignacion.rol}</p>`;
    objetivosDiv.innerHTML += `<p>${asignacion.jugador.nombre}: ${asignacion.objetivo}</p>`;
  });
}