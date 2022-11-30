let screenW = window.innerWidth
let screenH = window.innerHeight

let w 
let h
let mapIMG
const d = new Date();
let day = d.getDay();
let hr = d.getHours()
let mn = d.getMinutes()
let fullDate = d.toDateString()
console.log('Displaying information for', hr.toString()+':'+mn.toString(), fullDate)

if (hr < 7) {
  day -= 1
}

let saintPaulSnowEmergencySite = 'https://www.stpaul.gov/departments/public-works/street-maintenance/snow-emergency'
let hamlineParkingSite = 'https://www.hamline.edu/about/offices-services/public-safety/emergency'


let lotList = ['A', 'A2', 'B', 'C', 'D', 'E', 'F', 'G', 'I', 'J']
let lotStatus = {}


for (let i=0;i<7;i++) {
  temp = {}
  for (let l of lotList) {
    temp[l] = 1
  }
  if ([0,3,5].includes(i)) {
    temp['B'] = 0
  } if ([1,4,6].includes(i)) {
    temp['E'] = 0
    temp['F'] = 0
  } if ([0, 3].includes(i)) {
    temp['C'] = 0
  } if ([2, 5].includes(i)) {
    temp['A2'] = 0
    temp['G'] = 0
  } if ([2, 6].includes(i)) {
    temp['A'] = 0
  }
  lotStatus[i] = temp
}






function preload() {
  mapIMG = loadImage('HamlineMap2.png')
}

function updateColor(lot) {
  avail = lotStatus[day][lot]
  //console.log(lot, avail)

  if (avail) {
    fill(0, 255, 0, 80)
  }
  else {
    fill(255, 0, 0, 80)
  }
}

function setup() {
  let lim = min(screenW, screenH)
  w = lim*0.85
  h = w

  createCanvas(w, h);
}

function draw() {
  background(220);
  push();
  translate(w/2, h/2)
  image(mapIMG, -w/2+w*0.04, -h/2, w*0.92, h)
  pop();

  push();
  strokeWeight(10)
  //Vertical Streets
    //Snelling
    stroke(255, 0, 0, 80)
    line(w*0.225, 0, w*0.225, h)
    //Pascal
    line(w*0.92, h*0.21, w*0.92, h)
    //Simpson
    stroke(200, 150)
    line(w*0.7, h*0.21, w*0.7, h*0.39)



  //Horizontal Streets
    //Taylor
    line(w*0.225, h*0.21, w*0.92, h*0.21)
    stroke(0, 0, 255, 80)
    line(0, h*0.21, w*0.225, h*0.21)
    line(w*0.92, h*0.21, w, h*0.21)

    //Hewitt
    stroke(0, 0, 255, 80)
    line(0, h*0.39, w*0.225, h*0.39)
    stroke(255, 0, 0, 80)
    line(w*0.225, h*0.39, w, h*0.39)
    stroke(200, 150)

    //EngleWood
    stroke(0, 0, 255, 80)
    line(0, h*0.78, w, h*0.78)

    //Minnehaha
    stroke(255, 0, 0, 80)
    line(0, h*0.978, w, h*0.978)

  //Lots
    noStroke()
    //fill(255, 0, 0, 80)

    //A
    updateColor('A')
    rect(w*0.25, h*0.204, w*0.135, h*0.015)
    //A2
    updateColor('A2')
    beginShape()
    vertex(w*0.665, h*0.145)
    vertex(w*0.735, h*0.145)
    vertex(w*0.735, h*0.149)
    vertex(w*0.793, h*0.149)
    vertex(w*0.793, h*0.177)
    vertex(w*0.715, h*0.177)
    vertex(w*0.71, h*0.182)
    vertex(w*0.695, h*0.17)
    vertex(w*0.7, h*0.16)
    vertex(w*0.68, h*0.16)
    endShape(CLOSE)

    //B
    updateColor('B')
    rect(w*0.72, h*0.225, w*0.1, h*0.105)
    rect(w*0.82, h*0.265, w*0.06, h*0.065)

    //C
    updateColor('C')
    rect(w*0.805, h*0.41, w*0.087, h*0.05)

    //D
    updateColor('D')
    beginShape();
    vertex(w*0.74, h*0.536)
    vertex(w*0.77, h*0.545)
    vertex(w*0.8, h*0.548)
    vertex(w*0.8, h*0.548)
    vertex(w*0.8, h*0.575)
    vertex(w*0.78, h*0.577)
    vertex(w*0.76, h*0.575)
    vertex(w*0.728, h*0.565)
    endShape(CLOSE);

    //E
    updateColor('E')
    rect(w*0.695, h*0.585, w*0.185, h*0.065)
    rect(w*0.755, h*0.65, w*0.125, h*0.026)
    
    //F
    updateColor('F')
    beginShape()
    vertex(w*0.588, h*0.575)
    vertex(w*0.63, h*0.583)
    vertex(w*0.695, h*0.585)
    vertex(w*0.695, h*0.59)
    vertex(w*0.588, h*0.593)
    endShape(CLOSE)

    //G
    updateColor('G')
    rect(w*0.792, h*0.843, w*0.085, h*0.042)

    //I
    updateColor('I')
    rect(w*0.315, h*0.795, w*0.025, h*0.045)

    //J
    updateColor('J')
    rect(w*0.12, h*0.41, w*0.042, h*0.04)

  pop();

  push(); //borders
  noStroke()
  fill(255)
  rect(0,0, w*0.04, h)
  rect(w*0.96, 0, w, h)
  pop();

  push()

  pop()
} 