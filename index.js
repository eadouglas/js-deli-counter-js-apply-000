var katzDeliLine = [];
function takeANumber(line, newName) {
   katzDeliLine.push(newName);
   return `Welcome, ${newName}. You are number ${katzDeliLine.length} in line.`;
}

function nowServing(line){
  if (line.length === 0){ 
    return "There is nobody waiting to be served!"
  }
  return "Currently serving "+ line.shift()+"."; 
}
 
function currentLine(line){
  if (line.length === 0){
  return "The line is currently empty."
  }
  
  return `The line is currently: 1. ${line[0]}, 2. ${line[1]}, 3. ${line[2]}`;
  
  
}
