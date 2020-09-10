class Ring{
    image;

    constructor(){
        this.image = document.getElementById('ring-img');
    }
    getImage(){return this.image;}
}

class Boxer {
    images; //map с картинками
    image; // итоговая картинка 
    command; // команда персонажу
    x; // координата картинки 
    life ; // количество жизней
    block ; // коэффициент блока 
    hitDamage ; // количество наносимого повреждения 
     hitLengthr; // длина руки
     fistX; // координата кулака
     faceX; // координата лица
     backX; // координата спины
     actionFactor; // зависит от того, левый игрок или правый

    constructor() {
        this.images = new Map();
        this.command = 'START';
        this.life = 150;
        this.block = 1;
        this.hitDamage = 10;
        this.hitLength = 160;
    }
    
    getX(){return this.x;}
    getLife(){return this.life;}
    getHitDamage(){return this.hitDamage;}
    getImage(){return this.image;}
    getFistX(){return this.fistX;}
    getFaceX(){return this.faceX;}


    action(command, checkHitEvent){
        this.command = command;
        this.image = this.images.get(this.command);
        switch(this.command){
            case 'STAND':
                this.block = 0;
                this.fistX = this.faceX;
                break;
            case 'FRONTHIT':
                this.fistX = this.faceX + this.hitLength * this.actionFactor;
                window.dispatchEvent(checkHitEvent);
                break;
            case 'UPPERHIT':
                this.fistX = this.faceX + this.hitLength * this.actionFactor;
                window.dispatchEvent(checkHitEvent);
                break;
            case 'LOWERHIT':
                this.fistX = this.faceX + this.hitLength * this.actionFactor;
                window.dispatchEvent(checkHitEvent);
                break;
            case 'BLOCK':
                this.fistX = 0;
                this.block = 0;
            break;
        }
    }
    takeHit(damage){
        this.life -= (damage * this.block);
        this.image = this.images.get('DAMAGE');
        this.sleep(10).then(() => {this.image = this.images.get('STAND');}); // мигает при ударе
    }

    sleep(time){
        return new Promise((resolve) => setTimeout(resolve, time));
    }
}

class BlueBoxer extends Boxer{
    constructor(){
        super();
        this.images.set('START', document.getElementById("boxer-blue-img-start"));
        this.images.set('STAND', document.getElementById("boxer-blue-img-stand"));
        this.images.set('FRONTHIT', document.getElementById("boxer-blue-img-fronthit"));
        this.images.set('UPPERHIT', document.getElementById("boxer-blue-img-upperhit"));
        this.images.set('LOWERHIT', document.getElementById("boxer-blue-img-lowerhit"));
        this.images.set('BLOCK', document.getElementById("boxer-blue-img-block"));
        this.images.set('DAMAGE', document.getElementById("boxer-blue-img-damage"));
        this.images.set('WIN', document.getElementById("boxer-blue-img-win"));
        this.images.set('LOSE', document.getElementById("boxer-blue-img-lose"));
        this.image = this.images.get('START');
        this.x = 0;
        this.faceX = 150;
        this.backX = 0;
        this.actionFactor = 1;
    }
    
    move(speed, red_boxer){
        this.x += speed;
        this.faceX += speed;
        this.backX +=speed;
        if ((this.backX < 0) || (this.faceX > red_boxer.getFaceX())){ //не дает выйти за граница ринга и другого боксера
            this.x -= speed;
            this.faceX -= speed;
            this.backX -=speed;
        }
    }
}

class RedBoxer extends Boxer{
    constructor(){
        super();
        this.images.set('START', document.getElementById("boxer-red-img-start"));
        this.images.set('STAND', document.getElementById("boxer-red-img-stand"));
        this.images.set('FRONTHIT', document.getElementById("boxer-red-img-fronthit"));
        this.images.set('UPPERHIT', document.getElementById("boxer-red-img-upperhit"));
        this.images.set('LOWERHIT', document.getElementById("boxer-red-img-lowerhit"));
        this.images.set('BLOCK', document.getElementById("boxer-red-img-block"));
        this.images.set('DAMAGE', document.getElementById("boxer-red-img-damage"));
        this.images.set('WIN', document.getElementById("boxer-red-img-win"));
        this.images.set('LOSE', document.getElementById("boxer-red-img-lose"));
        this.image = this.images.get('START');
        this.x = 326;
        this.faceX = 490;
        this.backX = 640;
        this.actionFactor = -1;
    }
    move(speed, blue_boxer){
        this.x += speed;
        this.faceX += speed;
        this.backX +=speed;
        if ((this.backX > 640) || (this.faceX < blue_boxer.getFaceX())){
            this.x -= speed;
            this.faceX -= speed;
            this.backX -=speed;
        }
    }
}

class Scale{ // шкала здоровья сверху
    images;
    constructor(){
        this.images = new Map();
    }

    getScale(health){
        return this.images.get(health);
    }
}

class BlueScale extends Scale{
    constructor(){
        super();
        this.images.set(150,document.getElementById("scale-blue-img-150"));
        this.images.set(140,document.getElementById("scale-blue-img-140"));
        this.images.set(130,document.getElementById("scale-blue-img-130"));
        this.images.set(120,document.getElementById("scale-blue-img-120"));
        this.images.set(110,document.getElementById("scale-blue-img-110"));
        this.images.set(100,document.getElementById("scale-blue-img-100"));
        this.images.set(90,document.getElementById("scale-blue-img-90"));
        this.images.set(80,document.getElementById("scale-blue-img-80"));
        this.images.set(70,document.getElementById("scale-blue-img-70"));
        this.images.set(60,document.getElementById("scale-blue-img-60"));
        this.images.set(50,document.getElementById("scale-blue-img-50"));
        this.images.set(40,document.getElementById("scale-blue-img-40"));
        this.images.set(30,document.getElementById("scale-blue-img-30"));
        this.images.set(20,document.getElementById("scale-blue-img-20"));
        this.images.set(10,document.getElementById("scale-blue-img-10"));
        this.images.set(0,document.getElementById("scale-blue-img-10"));
    }
}

class RedScale extends Scale{
   
    constructor(){
        super();
        this.images.set(150,document.getElementById("scale-red-img-150"));
        this.images.set(140,document.getElementById("scale-red-img-140"));
        this.images.set(130,document.getElementById("scale-red-img-130"));
        this.images.set(120,document.getElementById("scale-red-img-120"));
        this.images.set(110,document.getElementById("scale-red-img-110"));
        this.images.set(100,document.getElementById("scale-red-img-100"));
        this.images.set(90,document.getElementById("scale-red-img-90"));
        this.images.set(80,document.getElementById("scale-red-img-80"));
        this.images.set(70,document.getElementById("scale-red-img-70"));
        this.images.set(60,document.getElementById("scale-red-img-60"));
        this.images.set(50,document.getElementById("scale-red-img-50"));
        this.images.set(40,document.getElementById("scale-red-img-40"));
        this.images.set(30,document.getElementById("scale-red-img-30"));
        this.images.set(20,document.getElementById("scale-red-img-20"));
        this.images.set(10,document.getElementById("scale-red-img-10"));
        this.images.set(0,document.getElementById("scale-red-img-10"));
    }
}

class Game {
    canvas;
    context;
    ring;
    blue_boxer;
    red_boxer;
    blue_scale;
    red_scale;
    hit_event;
  
    constructor(
      ring,
      blue_boxer,
      red_boxer,
      blue_scale,
      red_scale
      ){
      this.canvas = document.getElementById("canvas");
      this.context = this.canvas.getContext('2d');
      this.ring = ring;
      this.blue_boxer = blue_boxer;
      this.red_boxer = red_boxer;
      this.blue_scale = blue_scale;
      this.red_scale = red_scale;
      this.hit_event = new CustomEvent('hit', {bubbles: true});
    }
  
    Resize(){ // изменяет размер иображения с изменением размера окна
      this.canvas.width = window.innerWidth;
      this.canvas.height = window.innerHeight;
    }
  
    DrawStart(){ // рисует первоначальную картинку
      this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
      this.context.drawImage(this.ring.getImage(), 0, 0);
      this.context.drawImage(this.blue_boxer.getImage(), this.blue_boxer.getX(), 0);
      this.context.drawImage(this.red_boxer.getImage(), this.red_boxer.getX(), 0 );
      this.context.drawImage(this.blue_scale.getScale(this.blue_boxer.getLife()), 10, 0);
      this.context.drawImage(this.red_scale.getScale(this.red_boxer.getLife()), 420, 0);
      this.context.drawImage(document.getElementById("game-choice-blue"), 200, 300);
      this.context.drawImage(document.getElementById("game-choice-red"), 380, 300);
    }
  
    Draw(){ // рисует текущую картинку
      this.context.clearRect(0, 0, this.canvas.width, this.canvas.height); 
      this.context.drawImage(this.ring.getImage(), 0, 0);
      this.context.drawImage(this.blue_boxer.getImage(), this.blue_boxer.getX(), 0);
      this.context.drawImage(this.red_boxer.getImage(), this.red_boxer.getX(), 0 );
      this.context.drawImage(this.blue_scale.getScale(this.blue_boxer.getLife()), 10, 0);
      this.context.drawImage(this.red_scale.getScale(this.red_boxer.getLife()), 420, 0);
    }
  
    check(){ // проверяет, поопал удар по боксеру или нет
      if (this.blue_boxer.getFistX() > this.red_boxer.getFaceX()){
          this.red_boxer.takeHit(this.blue_boxer.getHitDamage());
      }
      if (this.red_boxer.getFistX() < this.blue_boxer.getFaceX()){
          this.blue_boxer.takeHit(this.red_boxer.getHitDamage());
      }
    };
  
    KeyDownBlue(e){ // синий нажал на кнопку клавиатуры
      switch(e.keyCode)
      {
        case 87: //кнопка 'w' - прямой удар
          this.blue_boxer.action('FRONTHIT', this.hit_event);
          break;
        case 83: //кнопка 's' - блок
          this.blue_boxer.action('BLOCK', this.hit_event);
          break;
        case 81: //кнопка 'q' - верхний удар
          this.blue_boxer.action('UPPERHIT', this.hit_event);
          break;
        case 65: //кнопка 'a' - нижний удар
          this.blue_boxer.action('LOWERHIT', this.hit_event);
          break;
        case 39: //шаг вправо
          this.blue_boxer.move(30, this.red_boxer);
          break;
        case 37: //шаг влево
          this.blue_boxer.move(-30, this.red_boxer);
          break;
      }
      this.Draw()
    }
    
    KeyUpBlue(){ // синий отпустил кнопку клавиатуры
      if (this.red_boxer.getLife() <= 0){ // если у противника не осталось жизней - победа
        this.red_boxer.action('LOSE', this.hit_event);
        this.blue_boxer.action('WIN', this.hit_event);
      }
      else{
        this.blue_boxer.action('STAND', this.hit_event);
      }
      this.Draw();
    }
    
    KeyDownRed(e){
      switch(e.keyCode)
      {
        case 87: //кнопка 'w' - прямой удар
          this.red_boxer.action('FRONTHIT', this.hit_event);
          break;
        case 83: //кнопка 's' - блок
          this.red_boxer.action('BLOCK', this.hit_event);
          break;
        case 81: //кнопка 'q' - верхний удар
          this.red_boxer.action('UPPERHIT', this.hit_event);
          break;
        case 65: //кнопка 'a' - нижний удар
          this.red_boxer.action('LOWERHIT', this.hit_event);
          break;
        case 39: //шаг вправо
          this.red_boxer.move(30, this.blue_boxer);
              break;
        case 37: //шаг влево
          this.red_boxer.move(-30, this.blue_boxer);
          break;
      }
      this.Draw()
    }
    
    KeyUpRed(){
      if (this.blue_boxer.getLife() <= 0){
        this.blue_boxer.action('LOSE', this.hit_event);
        this.red_boxer.action('WIN', this.hit_event);
      }
      else{
        this.red_boxer.action('STAND', this.hit_event);
      }
      this.Draw();
    }
      
    KeyDownStart(e){ // выбор персонажа на сатртовом экране
      this.Draw();
      switch(e.keyCode){
          case 66:
              window.addEventListener("keydown", (e) => { this.KeyDownBlue(e); });
              window.addEventListener("keyup", () => { this.KeyUpBlue(); });
              break;
          case 82:
              window.addEventListener("keydown", (e) => { this.KeyDownRed(e); });
              window.addEventListener("keyup", () => { this.KeyUpRed(); });
              break;
      }
    }
  }


const game = new Game(
    new Ring(),
    new BlueBoxer(),
    new RedBoxer(),
    new BlueScale(),
    new RedScale()
);
game.DrawStart();
window.addEventListener("resize", () => {game.Resize()}); 
window.addEventListener('checkHit', () => {game.check()});
window.addEventListener("keydown", (e) => {game.KeyDownStart(e)});