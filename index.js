var katzDeli = [];

function takeANumber(katsDeliLine, name){
  katsDeliLine.push(name);
  return `Welcome, ${name}. You are number ${katsDeliLine.indexOf(name) + 1} in line.`;
}