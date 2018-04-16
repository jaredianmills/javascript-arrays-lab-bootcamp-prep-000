var kittens = ['Milo', 'Otis', 'Garfield'];

function destructivelyAppendKitten(name) {
  kittens.push(name);
  return kittens;
}

function destructivelyPrependKitten(name) {
  kittens.unshift(name);
  return kittens
}

function destructivelyRemoveLastKitten() {
  kittens.pop();
  return kittens;
}

function destructivelyRemoveFirstKitten() {
  kittens.shift();
  return kittens;
}

function appendKitten(name) {
  var kittenAppend = [...kittens, name];
  return kittenAppend;
}

function prependKitten(name) {
  var kittenPrepend = [name, ...kittens];
  return kittenPrepend;
}

function removeLastKitten() {
  var lastRemoved = kittens.slice(0, kittens.length - 1);
  return lastRemoved;
}

function removeFirstKitten() {
  
}
