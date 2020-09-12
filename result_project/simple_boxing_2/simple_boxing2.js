const hitEvent = new CustomEvent('hit', {bubbles: true});
const sleep = (time) => {return new Promise((resolve) => setTimeout(resolve, time));}
const getRandomInt = (max) => {return Math.floor(Math.random() * Math.floor(max));}

class Ring{
    _image;
    constructor(){
        this._image = document.getElementById('ring-img');
    }
    getImage(){return this._image;}
}

class Boxer {
    _name; 
    _images;
    _image;
    _command;
    _x; 
    _life;
    _block; 
    _hitDamage; 
    _hitLength;
    _fistX; 
    _faceX; 
    _backX;
    _actionFactor;

    constructor() {
        this._images = new Map();
        this._command = 'START';
        this._life = 150;
        this._block = 1;
        this._hitDamage = 10;
        this._hitLength = 160;
    }

    getX(){return this._x;}
    setX(x){this._x = x;}
    getLife(){return this._life;}
    getImage(){return this._image;}
    getFistX(){return this._fistX;}
    getFaceX(){return this._faceX;}
    getHitDamage(){return this._hitDamage;}

    action(command){
        this._command = command;
        this._image = this._images.get(this._command);
        switch(this._command){
            case 'STAND':
                this._block = 1;
                this._fistX = this._faceX;
                break;
            case 'FRONTHIT':
                this._fistX = this._faceX + this._hitLength * this._actionFactor;
                window.dispatchEvent(hitEvent);
                break;
            case 'UPPERHIT':
                this._fistX = this._faceX + this._hitLength * this._actionFactor;
                window.dispatchEvent(hitEvent);
                break;
            case 'LOWERHIT':
                this._fistX = this._faceX + this._hitLength * this._actionFactor;
                window.dispatchEvent(hitEvent);
                break;
            case 'BLOCK':
                this._fistX = 0;
                this._block = 0;
            break;
        }
    }
    takeHit(damage){
        this._life -= (damage * this._block);
        this._image = this._images.get('DAMAGE');
        sleep(20).then(() => {this._image = this._images.get('STAND');});
    }
}

class BlueBoxer extends Boxer{
    constructor(name){
        super(name);
        this._images.set('START', document.getElementById("boxer-blue-img-start"));
        this._images.set('STAND', document.getElementById("boxer-blue-img-stand"));
        this._images.set('FRONTHIT', document.getElementById("boxer-blue-img-fronthit"));
        this._images.set('UPPERHIT', document.getElementById("boxer-blue-img-upperhit"));
        this._images.set('LOWERHIT', document.getElementById("boxer-blue-img-lowerhit"));
        this._images.set('BLOCK', document.getElementById("boxer-blue-img-block"));
        this._images.set('DAMAGE', document.getElementById("boxer-blue-img-damage"));
        this._images.set('WIN', document.getElementById("boxer-blue-img-win"));
        this._images.set('LOSE', document.getElementById("boxer-blue-img-lose"));
        this._image = this._images.get('START');
        this._x = 0;
        this._faceX = 150;
        this._backX = 0;
        this._actionFactor = 1;   
    }
    
    move(speed, redBoxer){
        console.log("move")
        this._x += speed;
        this._faceX += speed;
        this._backX +=speed;
        if ((this._backX < 0) || (this._faceX > redBoxer.getFaceX())){
            this._x -= speed;
            this._faceX -= speed;
            this._backX -=speed;
        }
    }
}

class RedBoxer extends Boxer{
    constructor(name){
        super(name);
        this._images.set('START', document.getElementById("boxer-red-img-start"));
        this._images.set('STAND', document.getElementById("boxer-red-img-stand"));
        this._images.set('FRONTHIT', document.getElementById("boxer-red-img-fronthit"));
        this._images.set('UPPERHIT', document.getElementById("boxer-red-img-upperhit"));
        this._images.set('LOWERHIT', document.getElementById("boxer-red-img-lowerhit"));
        this._images.set('BLOCK', document.getElementById("boxer-red-img-block"));
        this._images.set('DAMAGE', document.getElementById("boxer-red-img-damage"));
        this._images.set('WIN', document.getElementById("boxer-red-img-win"));
        this._images.set('LOSE', document.getElementById("boxer-red-img-lose"));
        this._image = this._images.get('START');
        this._x = 326;
        this._faceX = 490;
        this._backX = 640;
        this._actionFactor = -1;
    }
    move(speed, blueBoxer){
        this._x += speed;
        this._faceX += speed;
        this._backX +=speed;
        if ((this._backX > 640) || (this._faceX < blueBoxer.getFaceX())){
            this._x -= speed;
            this._faceX -= speed;
            this._backX -=speed;
        }
    }
}

class Scale{
    _images;
    constructor(){
        this._images = new Map();
    }
    getScale(health){
        return this._images.get(health);
    }
}

class BlueScale extends Scale{
    constructor(){
        super();
        this._images.set(150,document.getElementById("scale-blue-img-150"));
        this._images.set(140,document.getElementById("scale-blue-img-140"));
        this._images.set(130,document.getElementById("scale-blue-img-130"));
        this._images.set(120,document.getElementById("scale-blue-img-120"));
        this._images.set(110,document.getElementById("scale-blue-img-110"));
        this._images.set(100,document.getElementById("scale-blue-img-100"));
        this._images.set(90,document.getElementById("scale-blue-img-90"));
        this._images.set(80,document.getElementById("scale-blue-img-80"));
        this._images.set(70,document.getElementById("scale-blue-img-70"));
        this._images.set(60,document.getElementById("scale-blue-img-60"));
        this._images.set(50,document.getElementById("scale-blue-img-50"));
        this._images.set(40,document.getElementById("scale-blue-img-40"));
        this._images.set(30,document.getElementById("scale-blue-img-30"));
        this._images.set(20,document.getElementById("scale-blue-img-20"));
        this._images.set(10,document.getElementById("scale-blue-img-10"));
        this._images.set(0,document.getElementById("scale-blue-img-10"));
    }
}

class RedScale extends Scale{
    constructor(){
        super();
        this._images.set(150,document.getElementById("scale-red-img-150"));
        this._images.set(140,document.getElementById("scale-red-img-140"));
        this._images.set(130,document.getElementById("scale-red-img-130"));
        this._images.set(120,document.getElementById("scale-red-img-120"));
        this._images.set(110,document.getElementById("scale-red-img-110"));
        this._images.set(100,document.getElementById("scale-red-img-100"));
        this._images.set(90,document.getElementById("scale-red-img-90"));
        this._images.set(80,document.getElementById("scale-red-img-80"));
        this._images.set(70,document.getElementById("scale-red-img-70"));
        this._images.set(60,document.getElementById("scale-red-img-60"));
        this._images.set(50,document.getElementById("scale-red-img-50"));
        this._images.set(40,document.getElementById("scale-red-img-40"));
        this._images.set(30,document.getElementById("scale-red-img-30"));
        this._images.set(20,document.getElementById("scale-red-img-20"));
        this._images.set(10,document.getElementById("scale-red-img-10"));
        this._images.set(0,document.getElementById("scale-red-img-10"));
    }
}

class Game{
    _canvas;
    _ctx;
    _ring;
    _blueBoxer;
    _redBoxer;
    _blueScale;
    _redScale;
    _count;
    _timer;

    constructor(){
        this._canvas = document.getElementById("canvas");
        this._ctx = this._canvas.getContext("2d");
        this._ring = new Ring();
        this._blueBoxer = new BlueBoxer();
        this._redBoxer = new RedBoxer();
        this._blueScale = new BlueScale();
        this._redScale = new RedScale();
        this._count = 0;
    }

    _Resize(){
        this._canvas.width = window.innerWidth;
        this._canvas.height = window.innerHeight;
    }

    _Draw(){
        this._ctx.clearRect(0, 0, this._canvas.width, this._canvas.height);
        this._ctx.drawImage(this._ring.getImage(), 0, 0);
        this._ctx.drawImage(this._blueBoxer.getImage(), this._blueBoxer.getX(), 0);
        this._ctx.drawImage(this._redBoxer.getImage(), this._redBoxer.getX(), 0 );
        this._ctx.drawImage(this._blueScale.getScale(this._blueBoxer.getLife()), 10, 0);
        this._ctx.drawImage(this._redScale.getScale(this._redBoxer.getLife()), 420, 0);
    }

    _Update(){
        this._Resize();
        this._Draw();
    }

    _KeyDownBlue(e){
        switch(e.keyCode)
        {
            case 87: //кнопка 'w' - прямой удар
                this._blueBoxer.action('FRONTHIT');
                break;
            case 83: //кнопка 's' - блок
                this._blueBoxer.action('BLOCK');
                break;
            case 81: //кнопка 'q' - верхний удар
                this._blueBoxer.action('UPPERHIT');
                break;
            case 65: //кнопка 'a' - нижний удар
                this._blueBoxer.action('LOWERHIT');
                break;
            case 39: //шаг вправо
                this._blueBoxer.move(30, this._redBoxer);
                break;
            case 37: //шаг влево
                this._blueBoxer.move(-30, this._redBoxer);
                break;
        }
    }

    _KeyUpBlue(){ 
        if (this._redBoxer.getLife() <= 0){
            this._Win('blueBoxer');
        }
        else{
            this._blueBoxer.action('STAND');
        }
    }

    _AutoGameKeyDownRed(rndm){
        switch(rndm){
            case 0: //кнопка 'w' - прямой удар
                this._redBoxer.action('FRONTHIT');
                break;
            case 1: //кнопка 's' - блок
                this._redBoxer.action('BLOCK');
                break;
            case 2: //кнопка 'q' - верхний удар
                this._redBoxer.action('UPPERHIT');
                break;
            case 3: //кнопка 'a' - нижний удар
                this._redBoxer.action('LOWERHIT');
                break;
            case 4 || 6 : //шаг вправо
                this._redBoxer.move(30, this._blueBoxer);
                break;
            case 5 || 7 : //шаг влево
                this._redBoxer.move(-30, this._blueBoxer);
                break;
        }
    }

    _AutoGameKeyUpRed(){
        if (this._blueBoxer.getLife() <= 0){
            this._Win('redBoxer');
        }
        else{
            this._redBoxer.action('STAND');
        }
    }

    _Check(){
        if (this._blueBoxer.getFistX() > this._redBoxer.getFaceX()){
            this._redBoxer.takeHit(this._blueBoxer.getHitDamage());
        }
        if (this._redBoxer.getFistX() < this._blueBoxer.getFaceX()){
            this._blueBoxer.takeHit(this._redBoxer.getHitDamage());
        }
    };

    _Win(winner){
        clearInterval(this._timer);
        this._blueBoxer.setX(0);
        this._redBoxer.setX(326);
        switch(winner){
            case 'blueBoxer':
                this._redBoxer.action('LOSE');
                this._blueBoxer.action('WIN');
                break;
            case 'redBoxer':
                this._blueBoxer.action('LOSE');
                this._redBoxer.action('WIN');
                break;
        }
        this._Draw();
    }

    Play(){
        this._timer = setInterval(() => {
            this._count++;
            if (this._count % 25 == 0){
                let rndm = getRandomInt(8);
                this._AutoGameKeyDownRed(rndm);
            }
            if (this._count % 35 == 0){
                this._AutoGameKeyUpRed();
            }
            this._Update();
        }, 1000 / 100);
        window.addEventListener("resize", () => {this._Resize();}); 
        window.addEventListener('hit', () => {this._Check()})
        window.addEventListener("keydown", (e) => { this._KeyDownBlue(e);}); 
        window.addEventListener("keyup", () => { this._KeyUpBlue();}); 
    }
}

let game = new Game();
game.Play();






















    // KeyDownStart(e){ //оставим пока здесь для многопользовательности
    //     switch(e.keyCode){
    //         case 66:
    //             window.addEventListener("keydown", (e) => { this.KeyDownBlue(e);}); 
    //             window.addEventListener("keyup", () => { this.KeyUpBlue();}); 
    //             break;
    //         case 82:
    //             window.addEventListener("keydown", (e) => { this.KeyDownRed(e);  }); 
    //             window.addEventListener("keyup", () => { this.KeyUpRed();}); 
    //             break;
    //     }
    // }

        // KeyDownRed(e){  //оставим пока здесь для много пользовательности
    //     switch(e.keyCode)
    //     {
    //         case 87: //кнопка 'w' - прямой удар
    //             this.redBoxer.action('FRONTHIT');
    //             break;
    //         case 83: //кнопка 's' - блок
    //             this.redBoxer.action('BLOCK');
    //             break;
    //         case 81: //кнопка 'q' - верхний удар
    //             this.redBoxer.action('UPPERHIT');
    //             break;
    //         case 65: //кнопка 'a' - нижний удар
    //             this.redBoxer.action('LOWERHIT');
    //             break;
    //         case 39: //шаг вправо
    //             this.redBoxer.move(30, this.blueBoxer);
    //             break;
    //         case 37: //шаг влево
    //             this.redBoxer.move(-30, this.blueBoxer);
    //             break;
    //     }
    // }
    
    // KeyUpRed(){  //оставим пока здесь для много пользовательности
    //     if (this.blueBoxer.getLife() <= 0){
    //         this.Win('redBoxer');
    //     }
    //     else{
    //         this.redBoxer.action('STAND');
    //     }
    // }
