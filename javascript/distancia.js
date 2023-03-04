// generacion del numero al azar
let getRandomNumber = size => {
  return Math.floor(Math.random() * size);
}

// codigo para obtener la distancia basado en teorema de pitagoras (investigado para que funcione en google)
let getDistance = (e, target) => {
  let diffX = e.offsetX - target.x;
  let diffY = e.offsetY - target.y;
  return Math.sqrt((diffX * diffX) + (diffY * diffY));
}

// nombres dependiendo de la distancia donde se encuentre el click
let getDistanceHint = distance => {
  if (distance < 30) {
    return "Casi a punto de neutralizar la amenaza";
  } else if (distance < 40) {
    return "Te estás acercando mucho al área afectada";
  } else if (distance < 60) {
    return "El archivo malicioso tiene que estar muy cerca";
  } else if (distance < 100) {
    return "Se ha identificado la presencia cercana de un virus";
  } else if (distance < 180) {
    return "Al parecer no se reportan alertas de seguridad por acá";
  } else if (distance < 360) {
    return "No se han identificado amenazas cerca";
  } else {
    return "La zona indexada no registra ningún virus";
  }
}
