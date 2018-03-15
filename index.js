var katzDeli = [];

function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  return `Welcome, ${name}. You are number ${katzDeliLine.indexOf(name) + 1} in line.`;
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return `There is nobody waiting to be served!`;
  }  else {
    return `Currently serving ${katzDeliLine.shift()}.`;
  }
}

function currentLine (katzDeliLine) {
  var n = 0;
  if (katzDeliLine.length === 0) {
    return `The line is currently empty`;
  }
  else {
    while (n < katzDeliLine.length) {
      n++;
    }
    return `The line is currently: ${n + 1}. ${katzDeliLine[n]}`;
  }
}