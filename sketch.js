let mice = [];
let snakes = [];
let eagles = [];
let paddy = [];
let canvasWidth = 800;
let canvasHeight = 400;

let mouseImg, snakeImg, eagleImg, paddyImg;

//Font
let RobotoMonoSemiBold;
let RobotoMonoMedium;
let RobotoMonoExtraLight;
let RobotoMonoBold;

//gambar
let logoitera;
let logomtkitera;
let latar;
let prey;
let rantai;
let kodingan1;
let kodingan2;
let kodingan3;
let kodingan4;
let kodingan5;
let kodingan6;
let Grafik1;
let Grafik2;
let Grafik3;
let stiker1;


function preload(){
  
  RobotoMonoSemiBold    = loadFont('RobotoMono-SemiBold.ttf')
  RobotoMonoMedium      = loadFont('RobotoMono-Medium.ttf')
  RobotoMonoExtraLight  = loadFont('RobotoMono-ExtraLight.ttf')
  RobotoMonoBold        = loadFont('RobotoMono-Bold.ttf')
  latar = loadImage('latar.png')
  logoitera = loadImage('logoitera.png')
  logomtkitera = loadImage('logomtkitera.png')
  prey = loadImage('prey-predator.png')
  rantai=loadImage('rantaimakanan.jpeg')
  kodingan1=loadImage('Kodingan1.jpg')
  kodingan2=loadImage('kodingan2.jpg')
  kodingan3=loadImage('kodingan3.jpg')
  kodingan4=loadImage('kodingan4.jpg')
  kodingan5=loadImage('kodingan5.jpg')
  kodingan6=loadImage('kodingan6.jpg')
  Grafik1=loadImage('Grafik1.jpg')
  Grafik2=loadImage('Grafik2.jpg')
  Grafik3=loadImage('Grafik3.jpg')
  mouseImg = loadImage('tikus.png');
  snakeImg = loadImage('ularr.png');
  eagleImg = loadImage('elang.png');
  
  backgroundImg = loadImage('Sawah.jpg');
}

function setup() {
  
  createCanvas(1200,7000);
  rect(150,1590,7000,400);
  rect(1000,1700,7800,400,7800);

  // inisialisasi populasi tikus, ular, elang, dan padi
  for (let i = 0; i < 1; i++) {
    mice.push(new Organism(450,1970, 100, mouseImg, true));
  }
  for (let i = 0; i < 5; i++) {
    snakes.push(new Organism(150, 1900, 130, snakeImg, true));
  }
  eagles.push(new Organism(150,1590, 150, eagleImg, true));
}

function draw() {
  background("skyblue");
  image(backgroundImg,150,1590,800,450)
  
  //Judul
  image(latar,50,0,1200,300);
  fill(51,66,87,200)
  rect(0,0,1200,300)
  
  //kotak di pinggir
  fill("navy")
  rect(0,0,50,7000)
  rect(50,310,1200,30)
  
  fill("white");
  textFont(RobotoMonoBold);
  textSize(35);
  text("Aplikasi Model Prey-Predator",320,80)
  text("Rantai Makanan Dalam Ekosistem Sawah",220,140)
  
  //Nama kelompok
  fill("white");
  textFont(RobotoMonoBold);
  textSize(20);
  text("Disusun oleh Kelompok 5",470, 195)
  text("Visualisasi dalam Sains",470,280)
  
  //logo ITERA
  image(logoitera, 1105,15,100,100);
  
  //logo MTK ITERA
  image(logomtkitera, 1000, 15, 100, 100);
  
  
  fill("black");
  textFont(RobotoMonoMedium);
  textSize(25);
  text("Apa Itu Model Prey-Predator?",100,400)
  
  fill("#3E7A42")
  rect(380,450,500,300)
  image(prey,380,450,500,300)
  
  fill("#3E7A42");
  textFont(RobotoMonoMedium);
  textSize(18);
  text("  Salah satu model interaksi makhluk hidup dalam satu ekosistem adalah model prey-predator. Model ",100,800)
  text("prey-predator adalah model interaksi antara mangsa dan pemangsa yang dapat menggangu keseimbangan",100,830)
  text("ekosistem jika terjadi ketidakseimbangan jumlah populasi. Prey merupakan organisme yang dimakan dan",100,860)
  text("biasa disebut mangsa. Sedangkan predator adalah organisme yang memakan dan biasa disebut pemangsa.",100,890)
  text("Model predator-prey pertama kali diperkenalkan oleh Lotka pada tahun 1925 dan Volterra pada tahun",100,920)
  text("1926,sehingga model ini disebut juga model Lotka-Volterra.",100,950)


  
  
  //Hubungan dengan rantai makanan
  fill("black");
  textFont(RobotoMonoMedium);
  textSize(25);
  text("Bagaimana Hubungan Antara Prey-Predator dengan Rantai Makanan?",100,1000)
  
  fill("#3E7A42");
  textFont(RobotoMonoMedium);
  textSize(18);
  text("  Rantai makanan atau jaringan makanan adalah suatu ekosistem makhluk",100,1030)
  text("hidup di mana suatu organisme memakan satu sama lain untuk mendapatkan",100,1060)
  text("energi dan nutrisi dari organisme yang dimakan.Dalam rantai makanan",100,1090)
  text("terdapat produsen, konsumen, dan dekomposer atau pengurai yang saling",100,1120)
  text("berinteraksi satu sama lain. Interaksi tersebut adalah memakan dan",100,1150)
  text("dimakan. oleh sebab itu rantai makanan merupakan salah satu contoh",100,1180)
  text("dari model prey-predator. Rantai makanan yang kompleks terdiri dari",100,1210)
  text("produsen, konsumen tingkat 1, konsumen tingkat 2 dan konsumen tingkat",100,1240)
  text("akhir. Rantai makanan kompleks terdapat pada ekosistem sawah.",100,1270)
  text("Ekosistem sawah merupakan ekosistem lahan basah buatan yang sangat",100,1300)
  text("berguna bagi kehidupan manusia sebagai penghasil bahan pangan.",100,1330)
  text("Ekosistem sawah terdiri dari air, siput, padi, tikus, ular, belalang",100,1360)
  text("dan masih banyak lagi.",100,1390)
  
  fill("#3E7A42");
  rect(870,1020,300,300)
  image(rantai,870,1030,300,300)
  
  
  
//   //simulasi
  fill("black");
  textFont(RobotoMonoMedium);
  textSize(25);
  text("Simulasi :",100,1440)
  
  
// kodingan simulasi 
  // membuat tikus, ular, elang, dan padi
  
  //function snake (mendefinisikan snake)
  function Snake() {
  this.x = 0;
  this.y = 0;
  this.size = 0;
    
    Snake.count++; // Increase the count of snakes

  this.draw = function() {
    // Draw the snake on the canvas
    fill(255, 255, 0);
    noStroke();
    image(snakeImg, 250, 300, 100, 100);
  }

  this.move = function(mice) {
    // Move the snake on the canvas
  };

  this.intersects = function(mouse) {
    // Check if the snake intersects with the given mouse
    // Return true if there is an intersection, false otherwise
    let distance = dist(this.x, this.y, mice.x, mice.y);
    if (distance < 50) {
      return true;
    } else {
      return false;
    }
  };

  this.eat = function() {
    // Increase the size of the snake or do any other relevant action
    this.size++;
    this.speed += 1;
  };
}
  
  Snake.count = 0; // Initialize the count of snakes to 0
  
  for (let i = 0; i < mice.length; i++) {
  mice[i].draw();
}
  
  // jika ular bertabrakan dengan tikus, tikus dihapus
for (let i = 0; i < snakes.length; i++) {
  snakes[i].draw();
  snakes[i].move(mice);
  
  // Add a new snake to the snakes array when a snake intersects with a mouse
for (let j = 0; j < mice.length; j++) {
  if (snakes[i].intersects(mice[j])) {
    mice.splice(j, 1);
    // snakes.push(new Snake());
    console.log(`Total snakes: ${Snake.count}`);
    snakes[i].eat();
  }
}    
}

  // Define the Eagle constructor function
function Eagle() {
  // Define properties for the Eagle object
  this.x = random(width);
  this.y = random(height);
  this.speed = 5;

  // Define a method for the Eagle object to draw itself
  this.draw = function() {
    fill(255, 255, 0);
    noStroke();
    image(eagleImg, this.x, this.y, 50, 50);
  };

  // Define a method for the Eagle object to move itself
  this.move = function(snakes) {
    // Move the eagle object
    this.x += random(-this.speed, this.speed);
    this.y += random(-this.speed, this.speed);

    // Make sure the eagle object stays within the canvas
    this.x = constrain(this.x, 0, width);
    this.y = constrain(this.y, 1590, height);
  };

  // Define a method for the Eagle object to check for intersections with a snake object
  this.intersects = function(snake) {
    let distance = dist(this.x, this.y, snake.x, snake.y);
    if (distance < 50) {
      return true;
    } else {
      return false;
    }
  };

  // Define a method for the Eagle object to "eat" a snake object
  this.eat = function() {
    // Increase the speed of the eagle object
    this.speed += 1;
  }
}

  for (let i = 0; i < eagles.length; i++) {
  eagles[i].draw();
  eagles[i].move(snakes);

  for (let j = 0; j < snakes.length; j++) {
    if (eagles[i].intersects(snakes[j])) {
      snakes.splice(j, 1);
      eagles[i].eat();
      // eagles.push(new Eagle());
    }
  }
}
 
}

class Organism {
  constructor(x, y, size, img, isPredator = false) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.img = img;
    this.isPredator = isPredator;
    this.speed = 2;
    this.hunger = 0;
  }

  draw() {
    image(this.img, this.x, this.y, this.size, this.size);
      fill("#3E7A42");
  textFont(RobotoMonoMedium);
  textSize(18);
  text("Pada ekosistem sawah terdapat makhluk hidup yang saling berinteraksi satu sama lain yang menyebabkan ",120,1470)
  text("Pristiwa Rantai makanan. salah satu contoh populasi makhluk hidup yang terdapat pada Ekosistem sawah ",100,1500)
  text("antara lain adalah Padi, Tikus, Ular dan juga elang. interaksi antar populasi tersebut disimulasikan",100,1530)
  text("sebagai berikut:",100,1560)
  
  // fill("#3E7A42")
  
  
  
  //persamaan beda
  fill("black");
  textFont(RobotoMonoMedium);
  textSize(25);
  text("Persamaan Beda",100,2080)
  
  
  fill("#3E7A42");
  rect(200,2100,510,50)
  rect(200,2200,510,50)
  rect(200,2300,510,50)
  rect(200,2400,510,50)
  
  fill("white");
  textSize(18);
  text("Padi(O)= O+((Or*O*(1-O)/K)-rO*O*R)*dt",250,2130)
  text("Tikus(R)= R+(R*r-sr*S*R-er*R*E)*dt",270,2230)
  text("Ular(S)= S+(rs*S*R-es*E*S-s*S)*dt",270,2330)
  text("Elang(E)= E+(se*S*E+re*R*E-e*E)*dt",270,2440)
  
  //Contoh
  fill("black");
  textFont(RobotoMonoMedium);
  textSize(25);
  text("Contoh :",100,2500)
  
  fill("#3E7A42");
  textFont(RobotoMonoMedium);
  textSize(18);
  text("Didalam ekosistem sawah Terdapat populasi awal padi, tikus, ular, dan elang berturut turut adalah ", 130, 2530)
  text("200,250,67,dan 43. Sawah hanya bisa menampung padi sebanyak 1000 padi. Dalam populasi Padi terdapat", 100, 2560)
  text("Nilai Or =3.4 dan rO=0.04. Sedangkan dalam populasi Tikus terdapat r=2.5 dan sr=0.03. Dalam populasi ", 100, 2590)
  text("Ular terdapat s=1.7 rs=0.02 dan es=0.02. populasi Elang terdapat e=1.05 se=0.0126 re=0.011.",100,2620)
  
  
  
  
  //kodingan 
  fill("black");
  textFont(RobotoMonoMedium);
  textSize(25);
  text("Kodingan :",100,2660)
  
  fill("#3E7A42");
  textFont(RobotoMonoMedium);
  textSize(18);
  text("Dari contoh diatas kita bisa mendapatkan grafik dengan memasukan nilai yang terdapat didalam",130,2690)
  text("contoh tersebut kedalam persamaan beda. selanjutnya bisa kita input dengan menggunakan google collab",100,2720)
  text("seperti dibawah ini:",100,2750)
  
  fill("black");
  textFont(RobotoMonoMedium);
  textSize(18);
  text("a. Dipengaruhi oleh Carryng Capacity",120,2780)
  rect(150,2800,400,500)
  image(kodingan1, 150,2800,400,500)
  rect(700,2800,400,500)
  image(kodingan2, 700,2800,400,500)
  rect(400,3320,450,400)
  image(Grafik1, 400,3320,450,400)
  
  text("b. Tidak Dipengaruhi oleh Carryng Capacity",120,3760)
  rect(150,3780,400,500)
  image(kodingan3,150,3780,400,500)
  rect(700,3780,400,500)
  image(kodingan4,700,3780,400,500)
  rect(400,4300,450,400)
  image(Grafik2,400,4300,450,400)
  
  text("c. Terdapat Salah Satu Populasi Nol atau Punah",150,4750)
  rect(150,4780,400,500)
  image(kodingan5,150,4780,400,500)
  rect(700,4780,400,500)
  image(kodingan6,700,4780,400,500)
  rect(400,5300,450,400)
  image(Grafik3,400,5300,450,400)
  
  
  //kesimpulan
  fill("black");
  textFont(RobotoMonoMedium);
  textSize(25);
  text("Kesimpulan :",100,5750)
  
  fill("#3E7A42");
  textFont(RobotoMonoMedium);
  textSize(18);
  text("Jika dilihat dari grafik diatas, terlihat bahwa laju pertumbuhan ular selalu mengikuti laju",130,5780)
  text("pertumbuhan tikus, laju pertumbuhan elang selalu mengikuti laju pertumbuhan ular. Hal ini disebabkan",100,5810)
  text("karena antar populasi memiliki keterkaitan bahkan ketergantungan. Jika dilihat dari grafik pertama, ",100,5840)
  text("sistem prey-predator dipengaruhi oleh carryng capacity yang disebebkan laju pertumbuhan pada padi",100,5870)
  text("terbatas. Pada Grafik ke 2 terlibat bahwa prey-predator tidak dipengaruhi oleh carryng capacity atau",100,5900)
  text("dalam hal ini padi dianggap tumbuh konstan. Sedangkan pada grafik ketiga terlihat bahwa salah satu ",100,5930)
  text("populasi makhluk hidup yaitu ular dianggap nol atau punah. Hal ini mengakibatkan garis grafik", 100, 5960)
  text("ular berada lurus di angka nol, laju kematian tikus tetap karena pengaruh oleh elang dan laju",100,5990)
  text("pertumbuhan elang pun mengikuti laju pertumbuhan tikus.",100,6020)
  
  //dapus
  fill("black");
  textFont(RobotoMonoMedium);
  textSize(25);
  text("Daftar Pustaka :",100,6100)
  fill("#3E7A42");
  textSize(18);
  text("Modeling and simulation for the sciences (Angela B.Shiflet and George W.Shiflet)", 120, 6130)
  text("Aplikasi Model Matematika Predator dan prey terinfeksi kontrol pestisida pada penyebaran hama", 120,6180)
  text("wereng batang cokelat di kabupaten Bantullrham.Taufiq,Denik Agustitos.", 120, 6210)
    
  fill("black");
  textFont(RobotoMonoMedium);
  textSize(25);
  text("Nama Kelompok 5: :",100,6260)
  
  fill("#3E7A42");
  textSize(18);
  text("Desi Era P. Siregar", 120, 6290)
  text("Lala Nathasya", 120, 6320)
  text("Ike Mastika", 120, 6350)
  text("Meliana Debora", 120, 6380)
  text("Derri Setiawan", 120, 6410)
  }


move(preys) {
let closestPrey;
let closestDistance = Infinity;
// mencari mangsa terdekat
for (let i = 0; i < preys.length; i++) {
let distance = dist(this.x, this.y, preys[i].x, preys[i].y);
if (distance < closestDistance) {
closestDistance = distance;
closestPrey = preys[i];
}
}
// bergerak menuju mangsa terdekat
if (closestPrey) {
let dx = closestPrey.x - this.x;
let dy = closestPrey.y - this.y;
let angle = atan2(dy, dx);
this.x += this.speed * cos(angle);
this.y += this.speed * sin(angle);
}
// predator lapar
if (this.isPredator) {
this.hunger++;
if (this.hunger > 200) {
noLoop();
}
}
}

intersects(other) {
let distance = dist(this.x, this.y, other.x, other.y);
return distance < (this.size + other.size) / 2;
}

eat() {
this.hunger -= 50;
if (this.hunger < 0) {
this.hunger = 0;
}
}
}