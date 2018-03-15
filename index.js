var katzDeli = [];

function takeANumber(katzDeliLine, name) {
  katsDeliLine.push(name);
  return `Welcome, ${name}. You are number ${katsDeliLine.indexOf(name) + 1} in line.`;
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length != 0) {
    
  }
  else {
    return `Currently serving ${katzDeliLine.shift()}.`;
  }
}