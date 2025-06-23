const greeting = (name: string): string => {
  return `Hello, ${name}!`;
}

const wb: HTMLCanvasElement = document.getElementById("whiteboard-canvas") as HTMLCanvasElement;
if(wb){
  wb.style.backgroundColor = "lightblue";
}
