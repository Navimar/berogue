const img_floor = new Image();
img_floor.src = 'img/floor.png';
const img_hero = new Image();
img_hero.src = 'img/hero.png';
const img_wat = new Image();
img_wat.src = 'img/wat.png';
const img_wall = new Image();
img_wall.src = 'img/wall.png';
const img_hedgehog = new Image();
img_hedgehog.src = 'img/hedgehog.png';
const img_stairs = new Image();
img_stairs.src = 'img/stairs.png';
const img_slot = new Image();
img_slot.src = 'img/slot.png';
const img_move = new Image();
img_move.src = 'img/move.png';
const img_select = new Image();
img_select.src = 'img/select.png';
const img_spear= new Image();
img_spear.src = 'img/spear.png';
const img_fow= new Image();
img_fow.src = 'img/fow.png';
const img_beheaded= new Image();
img_beheaded.src = 'img/beheaded.png';
const img_from = new Image();
img_from.src = 'img/from.png';
const img_brick = new Image();
img_brick.src = 'img/brick.png';
const img_box = new Image();
img_box.src = 'img/box.png';
const img_ghost = new Image();
img_ghost.src = 'img/ghost.png';
const img_plant = new Image();
img_plant.src = 'img/plant.png';
const img_motherplant = new Image();
img_motherplant.src = 'img/motherplant.png';
const img_stay = new Image();
img_stay.src = 'img/stay.png';
const img_bite = new Image();
img_bite.src = 'img/bite.png';
const img_burdock = new Image();
img_burdock.src = 'img/burdock.png';
const img_redburdock = new Image();
img_redburdock.src = 'img/redburdock.png';
const img_water = new Image();
img_water.src = 'img/water.png';
const img_fish = new Image();
img_fish.src = 'img/fish.png';
const img_drawn = new Image();
img_drawn.src = 'img/drawn.png';
const img_pickaxe = new Image();
img_pickaxe.src = 'img/pickaxe.png';
const img_rock = new Image();
img_rock.src = 'img/rock.png';
const img_redkey= new Image();
img_redkey.src = 'img/redkey.png';
const img_bluekey = new Image();
img_bluekey.src = 'img/bluekey.png';
const img_whitekey = new Image();
img_whitekey.src = 'img/whitekey.png';
const img_rainkey = new Image();
img_rainkey.src = 'img/rainkey.png';
const img_miragekey = new Image();
img_miragekey.src = 'img/miragekey.png';
const img_magentakey = new Image();
img_magentakey.src = 'img/magentakey.png';
const img_greenkey = new Image();
img_greenkey.src = 'img/greenkey.png';
const img_goldenkey = new Image();
img_goldenkey.src = 'img/goldenkey.png';
const img_blackkey = new Image();
img_blackkey.src = 'img/blackkey.png';
const img_left = new Image();
img_left.src = 'img/left.png';
const img_right = new Image();
img_right.src = 'img/right.png';
const img_up = new Image();
img_up.src = 'img/up.png';
const img_down = new Image();
img_down.src = 'img/down.png';


const item_move={name:"move", img:img_move, text:"Старые ботинки, WASD чтобы ходить."};
const item_slot={name:"slot", img:img_slot, text:"Уголок сердца Героя, его можно заполнить любимыми предметами или болью и страданиями."};

const item_spear={name:"spear", img:img_spear, text:"Копье гоплита, метните его во врага!"};
const item_brick={name:"brick", img:img_brick, text:"Семена стеницы, уроните семечко у себя за спиной и там выростет настоящая стена."};
const item_stay={name:"stay", img:img_stay, text:"Палочка проростания, превращает в растение"};
const item_pickaxe={name:"pickaxe", img:img_pickaxe, text:"Кирка, крушит стены и черепа."};


const item_bite={name:"bite", img:img_bite, text:"Серьезный укус, нужно забинтовать рану."};
const item_burdock={name:"burdock", img:img_burdock, text:"Пристал репей, не думаю что стоит бросать его на землю..."};
const item_redburdock={name:"redburdock", img:img_redburdock, text:"Репей главного хищного растения."};
const item_drawn={name:"drawn", img:img_drawn, text:"Тухлая вода залилась за шиворот и в карманы, нужно срочно на сушу!"};

const item_redkey={name:"key", img:img_redkey, text:"Один из девяти ключей открывающих портал домой"};
const item_goldenkey={name:"key", img:img_goldenkey, text:"Один из девяти ключей открывающих портал домой"};
const item_whitekey={name:"key", img:img_whitekey, text:"Один из девяти ключей открывающих портал домой"};
const item_blackkey={name:"key", img:img_blackkey, text:"Один из девяти ключей открывающих портал домой"};
const item_greenkey={name:"key", img:img_greenkey, text:"Один из девяти ключей открывающих портал домой"};
const item_bluekey={name:"key", img:img_bluekey, text:"Один из девяти ключей открывающих портал домой"};
const item_rainkey={name:"key", img:img_rainkey, text:"Один из девяти ключей открывающих портал домой"};
const item_magentakey={name:"key", img:img_magentakey, text:"Один из девяти ключей открывающих портал домой"};
const item_miragekey={name:"key", img:img_miragekey, text:"Один из девяти ключей открывающих портал домой"};


var game={};
var dh=0;
const vision=9;

var gameovered=false;
var add_monster = 0;
// var localEnemy=[];
var allKeys=[];

var stamp=0;
var key=0;
const canvas = document.getElementById('canvas'), ctx = canvas.getContext('2d');

window.onkeydown = function (e) {
   var code = e.keyCode ? e.keyCode : e.which;
   // console.log(code);

   if (code==65 || code == 37){
   	key="left";
   }
   if (code==87 ||code == 38){
   	key="up";
   }
   if (code==39|| code==68){
   	key="right";
   }
   if (code==40 || code==83){
   	key ="down";
   }
   if (code==32){
   	key ="sleep";
   }
   if (code==81){
   	key ="select_left";
   }
   if (code==69){
   	key ="select_right";
   }
   if (code==13){
   	key ="enter";
   }
    // console.log(key);
}
window.onkeyup = function (e) {
   key=0;
}

window.onload = function () {
	game = init();
	var oldtime = 0;
	function loop(time) {
		var frame = time-oldtime;
		oldtime=time;
    	run(frame);
    	requestAnimationFrame(loop);
	}
	requestAnimationFrame(loop);
}

function init(){
	game.map=[];
	for (x = 0; x < 50; x++) {
  		game.map[x] = [];
  		for (y = 0; y < 50; y++) {
    		game.map[x][y] = [];
    		for (z = 0; z < 3; z++) {
    		game.map[x][y][z] = "empty";
		}
		}
	}
	game.fow=[];
	for (x = -10; x < 20; x++) {
  		game.fow[x] = [];
  		for (y = -10; y < 20; y++) {
    		game.fow[x][y] = false;
    	}
    }
	
	return newgame();
}

function generateMonster(img,x,y){
	game.enemy[add_monster]={img: img, x:x, y:y,fromx:x,fromy:y,tax:x,tay:y, alive:true};
		add_monster++;
}

function newgame(){
	gameovered=false;
	add_monster=0;
	allKeys=[];
	var rndItem=[];
	var rndItemCounter=0;
	for(var y=6; y<45; y++){
		for(var x=6; x<45; x++){
			rndItem[rndItemCounter]={a:x,b:y};;
			rndItemCounter++;
		}
	}
	for(var y=0; y<50; y++){
		for(var x=0; x<50; x++){		
			for(var z=0; z<3; z++){ 
    			game.map[x][y][z] = "empty";
    		}
    	}
    }
    for(var y=0; y<50; y++){
    	for(var x=0; x<50; x++){
    		if (y<15){
    			game.map[x][y][0] = img_floor;
    		}else{ 
	    		if(rndint(0,99)<25){
	    			game.map[x][y][0] = img_floor;
	    			if (x>1&&y>1){
		    			game.map[x-1][y][0] = img_floor;
		    			game.map[x][y-1][0] = img_floor;
		    			game.map[x-1][y-1][0] = img_floor;
	    			}
	    		}else{
	    			game.map[x][y][0] = img_water;
	    		}
    		}
    		if(rndint(0,4)==0){
    			game.map[x][y][1] = img_wall;
    		}
    		if ((y==13 || y == 14)&&(x!==40 && x!==41)){
    			game.map[x][y][1] = img_wall;
    		}
    		if (x<5 || x>=45){
    			game.map[x][y][1] = img_rock;	
    		}
    		if (y<5 || y>=45){
    			game.map[x][y][1] = img_rock;	
    		}	
		}
	}
	// game.map[35][35][0] = img_stairs;	
	// game.map[35][35][1] = "empty";	
	game.enemy=[];

	var ghosts=15;
	for (j=0;j<90;j++){
		var a=rndint(5,45);
		var b=rndint(5,45);
		if(game.map[a][b][0]==img_floor){
			generateMonster(img_hedgehog,a,b);
		}else{
			generateMonster(img_fish,a,b);
		}
	}
	for (j=0;j<ghosts;j++){
		var a=rndint(6,10);
		var b=rndint(1,49);
		generateMonster(img_ghost,a,b);
	}
	for (j=0;j<ghosts;j++){
		var a=rndint(1,49);
		var b=rndint(6,10);
		generateMonster(img_ghost,a,b);
	}
	for (j=0;j<ghosts;j++){
		var a=rndint(35,40);
		var b=rndint(1,49);
		generateMonster(img_ghost,a,b);
	}
	for (j=0;j<ghosts;j++){
		var a=rndint(1,49);
		var b=rndint(35,40);
		generateMonster(img_ghost,a,b);
	}
	var a=rndint(11,39);
	var b=rndint(11,39);
	generateMonster(img_motherplant,a,b);
	a=rndint(11,39);
	b=rndint(11,39);
	generateMonster(img_motherplant,a,b);

    for(var y=5; y<11; y++){
		for(var x=5; x<11; x++){
			game.map[x][y][1] = "empty";	
		}
	}
	for(var y=0; y<12; y++){
		for(var x=0; x<12; x++){
			killEnemy(x,y);	
		}
	}
	
	game.pos = {x:7,y:7};
	text("Началась новая игра. Найдите выход из подземелья! WASD чтобы ходить. QE чтобы выбирать предметы. SPACE чтобы стоять на месте")

	game.select=0;
	game.inv=[];
	for (var iv=0; iv<vision;iv++){
		game.inv[iv] = item_slot;
	}
	game.inv[0]=item_move;
	game.inv[1]=item_pickaxe;
	game.inv[2]=item_pickaxe;
	game.inv[3]=item_pickaxe;
	generateItem(item_brick);
	generateItem(item_stay);00
	generateItem(item_spear);
	for (var p=0;p<149;p++){
		generateItem(item_pickaxe);
	}
	generateItem(item_goldenkey);
	generateItem(item_whitekey);
	generateItem(item_blackkey);
	generateItem(item_greenkey);
	generateItem(item_redkey);
	generateItem(item_bluekey);
	generateItem(item_magentakey);
	generateItem(item_miragekey);
	generateItem(item_rainkey);

	function generateItem(item){
	    var m = rndint(0,rndItem.length)
		var a = rndItem[m].a;
		var b = rndItem[m].b;
		rndItem[m].splice;
		game.map[a][b][2] = item;
		if(item.name=="key"){
			allKeys[allKeys.length]={x:a,y:b, img:item.img};
			// console.log("addkey");
		}
		generateItemCounter=0;
	}
	return game;
}

function resize(){
	canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    if(canvas.width>canvas.height){
    	dh = canvas.height/vision;
    }else{
    	dh = canvas.width/(vision+4);
    }
    ctx.fillStyle="rgb(0,0,0)";
    ctx.fillRect(0,0,canvas.width,canvas.height);
}

function drawimg(img,x,y){
	if (img!=undefined){
		if (img!="empty"){
			ctx.drawImage(img,x*dh+3*dh,y*dh,dh,dh);
		}
	}else{ctx.drawImage(img_wat,x*dh+3*dh,y*dh,dh,dh)}
}

function imfp(x,y,z){
	if (game.map[x][y][z] != "empty"){
		if(z<2){
			return game.map[x][y][z];
		}else{
			return game.map[x][y][z].img;
		}
	} else return "empty";
}

function killNotAlive(){
	for (var e in game.enemy){
			if (!game.enemy[e].alive){
				game.enemy.splice(e, 1);
				add_monster--;
			}
		}
}

function draw(frame){
	function animate(i,x,y,fx,fy,p){
		var dx = fx;
		var dy = fy;
		var dx = fx+(x-fx)*p/100;
		var dy = fy+(y-fy)*p/100;
		drawimg(img_from,x,y);
		drawimg(i,dx,dy);
	}
	resize();
	if (stamp<=100){
		stamp+=frame/7;
	}else{
		killNotAlive();
	}
	var posx=game.pos.x-(vision-1)/2;
	var posy=game.pos.y-(vision-1)/2;
	
	for(var z=0; z<3; z++){
    	for(var y=0; y<9; y++){
    		for(var x=0; x<9; x++){
    			i = imfp(posx+x,posy+y,z,game);
    			drawimg(i,x,y);
    		}
		}
	}
	for (var e of game.enemy){
		if (e.x-posx <vision && e.x-posx>=0){
			if (e.y-posy <=vision && e.y-posy>=0){
				if (!game.fow[e.x-posx][e.y-posy]){
					animate(e.img,e.x-posx,e.y-posy,e.fromx-posx,e.fromy-posy,stamp)
			 		// drawimg(e.img,e.x-posx,e.y-posy);
			 		// drawimg(img_from,e.fromx-posx,e.fromy-posy);
			 	}	
			}
		}
	}

	if (!gameovered){drawimg(img_hero,4,4);}else{
		drawimg(img_beheaded,4,4)
	}
	
	//inventory
	for (l=0;l<vision;l++){
		drawimg(game.inv[l].img,vision,l);
	}
	drawimg(img_select,vision,game.select);

	//fow
	for(var y=0; y<9; y++){
    	for(var x=0; x<9; x++){
    		if(game.fow[x][y]){
    			drawimg(img_fow,x,y);
    		}	
    	}
    }

    if(game.arrow=="left"){
    	drawimg(img_left,3,4);
    }
    if(game.arrow=="right"){
    	drawimg(img_right,5,4);
    }
    if(game.arrow=="down"){
    	drawimg(img_down,4,5);
    }
    if(game.arrow=="up"){
    	drawimg(img_up,4,3);
    }

}

function run(frame){
	logic();
	draw(frame);
}

function logic(){
	if (!gameovered){
		if (key=="select_left"){
			if (game.select>0){
				game.select-=1;
				text(game.inv[game.select].text);
			}
			key=0;
		}
		if (key=="select_right"){
			if (game.select<vision-1){
				game.select+=1;
				text(game.inv[game.select].text);
			}
			key=0;
		}
		if (key== "left"){
			action(-1,0,game.inv[game.select].name);
		}
		if (key== "up"){
			action(0,-1,game.inv[game.select].name);
		}
		if (key== "right"){
			action(1,0,game.inv[game.select].name);
		}
		if (key== "down"){
			action(0,1,game.inv[game.select].name);
		}
		if (key=="sleep"){
			action(0,0,game.inv[game.select].name);
		}
	}else{
		if (key=="enter"){
			newgame(game);
		}
	}

	var min = 0;
		for(var n in allKeys){
		if (Math.abs(game.pos.x-allKeys[n].x+game.pos.y-allKeys[n].y)<Math.abs(game.pos.x-allKeys[min].x+game.pos.y-allKeys[min].y)){
			min=n;
			}
		}
		if(Math.abs(allKeys[min].x-game.pos.x)>Math.abs(allKeys[min].y-game.pos.y)){
			if (allKeys[min].x-game.pos.x<0){
				game.arrow="left";
			}else{
				game.arrow="right";
			}
		}else{
			if (allKeys[min].y-game.pos.y<0){
				game.arrow="up";
			}else{
				game.arrow="down";
			}
		}


		//fow
		var posx=game.pos.x-(vision-1)/2;
		var posy=game.pos.y-(vision-1)/2;
		for(var y=0; y<9; y++){
		for(var x=0; x<9; x++){
			game.fow[x][y]=false;
			}
		}
		for(var y=0; y<9; y++){
			for(var x=0; x<9; x++){
				if (imfp(posx+x,posy+y,1,game)==img_wall){
					if(x<4 && y==4){
						 	var a=x;
							while(a>0){
							a--;
							game.fow[a][4]=true;
							game.fow[a][5]=true;
							game.fow[a][3]=true;
						}
					}
					if(x>4 && y==4){
						 	var a=x;
							while(a<8){
							a++;
							game.fow[a][4]=true;
							game.fow[a][5]=true;
							game.fow[a][3]=true;
						}
					}
					if(x==4 && y<4){
						 	var a=y;
							while(a>0){
							a--;
							game.fow[4][a]=true;
							game.fow[5][a]=true;
							game.fow[3][a]=true;
						}
					}
					if(x==4 && y>4){
						 	var a=y;
							while(a<8){
							a++;
							game.fow[4][a]=true;
							game.fow[5][a]=true;
							game.fow[3][a]=true;
						}
					}
					if (x>=4&&y>=4){
						var a=x;
						var b=y;
						while(a<8 && b<8){
							a++;
							b++;
							game.fow[a][b]=true;
							if(x<=y){game.fow[a-1][b]=true};
							if(x>=y){game.fow[a][b-1]=true};
						}
					}
					if (x>=4&&y<=4){
						var a=x;
						var b=y;
						while(a>0 && a<8 && b>0 && b<8){
							a++;
							b--;
							game.fow[a][b]=true;
							if(x+y<=8){game.fow[a-1][b]=true};
							if(x+y>=8){game.fow[a][b+1]=true};
						}
					}
					if (x<=4&&y<=4){
						var a=x;
						var b=y;
						while(a>0 && a<8 && b>0 && b<8){
							a--;
							b--;
							game.fow[a][b]=true;
							if(x>=y){game.fow[a+1][b]=true};
							if(x<=y){game.fow[a][b+1]=true};
						}
					}
					if (x<=4&&y>=4){
						var a=x;
						var b=y;
						while(a>0 && a<8 && b>0 && b<8){
							a--;
							b++;
							game.fow[a][b]=true;
							if(x+y>=8){game.fow[a+1][b]=true};
							if(x+y<=8){game.fow[a][b-1]=true};
						}
					}
				}
			} 		
		}
		

	function canMove(a,b){
		if(game.map[game.pos.x+a][game.pos.y+b][1]!="empty"){
					text("Препятствие!");
					return false;
				}
			for (var e of game.enemy){		
				if(game.pos.x+a==e.x && game.pos.y+b==e.y){
					text("Нельзя наступать на ёжиков!");
					return false;
					}
			}
		return true;
	}
	function action(a,b,act){
		var x = game.pos.x;
		var y = game.pos.y;
		
		if (act==="move"){	
			if(canMove(a,b)){
				var ok=true;
				game.pos.x+=a;
				game.pos.y+=b;
				if(game.map[game.pos.x][game.pos.y][0]==img_stairs){
					gameover(game,true);
				}
				if(game.map[game.pos.x][game.pos.y][0]==img_water){
					text("Если и не утону, то точно задохнусь от этого зловония!");
					addItem(item_drawn,false);
				}
				if(game.map[game.pos.x][game.pos.y][0]==img_floor){
					var drawntext=true;
					for (var i in game.inv){
						if(game.inv[i].img==img_drawn){
							if(drawntext){
								text("Герой обсох и обветрился, готов к еще одному заплыву!");
								drawntext=false;
							}
							game.inv[i]=item_slot;
						}
					}
				}
				if(game.map[game.pos.x][game.pos.y][2]!="empty"){
					addItem(game.map[game.pos.x][game.pos.y][2],true);
					if(game.map[game.pos.x][game.pos.y][2].name=="key"){
						console.log("splice");
						for (k in allKeys){
							if(allKeys[k].img==game.map[game.pos.x][game.pos.y][2].img){
								allKeys.splice(k,1);							}
						}
					}
					game.map[game.pos.x][game.pos.y][2]="empty";
				}
				enemyturn();
				justmoved = true;
			}
		}
		if (act==="pickaxe"){
			if(game.map[game.pos.x+a][game.pos.y+b][1]==img_wall || enemyInPos(game.pos.x+a,game.pos.y+b)!=false){
				game.map[game.pos.x+a][game.pos.y+b][1]="empty";
				killEnemy(game.pos.x+a,game.pos.y+b);
				text("Ломай, убивай!!!");
				game.inv[game.select]=item_slot;
				game.select=0;
				enemyturn();
			}else{
				text("Цыньк!");
				if(a==0 && b==0){
					text("Кирка едва годится вместо зубочистки..");
				}
			}
		}
		if (act==="burdock"){
			if(game.map[game.pos.x+a][game.pos.y+b][1]=="empty" &&(a!=0 || b!=0)){
				generateMonster(img_plant,game.pos.x+a,game.pos.y+b);
				text("Растет как на дрожащ!");
				game.inv[game.select]=item_slot;
				enemyturn();
			}else{
				text("Некуда тут");
			}
		}
		if (act==="redburdock"){
			if(game.map[game.pos.x+a][game.pos.y+b][1]=="empty" &&(a!=0 || b!=0)){
				generateMonster(img_motherplant,game.pos.x+a,game.pos.y+b);
				text("Растет как на дрожащ!");
				game.inv[game.select]=item_slot;
				game.select=0;
				enemyturn();
			}else{
				text("Некуда тут");
			}
		}
		if (act==="spear"){
			if(a==0 && b==0){
				text("Копье слишком длинное для харакири!")
			}else{
				var ok=true;
				for(var i=1; i<5; i++){
					if(enemyInPos(x+a*i,y+b*i)!=0 && ok){
						killEnemy(x+a*i,y+b*i);
						text("Вы пронзили врага копьем!")
						game.inv[game.select]=item_slot;
						game.map[x+a*i][y+b*i][2]=item_spear;
						ok=false;
						game.select=0;
					}
				}
			enemyturn();
			}
		}
		if (act=="brick"){
			if(!(a==0 && b==0)){
				if(canMove(a,b)){
					text("Пожалуй приберегу несколько на строительство дома.");
					game.map[x][y][1]=img_wall;
					action(a,b,"move");
				}
			}else{
				text("Даже не хочу думать, что будет если съесть эти семена.");
			}
		}
		if (act=="stay"){
			if(a==0 && b==0){
				text("Я не хочу стать растением!")
			}else{
				var ok=true;
				for(var i=1; i<5; i++){
					if(enemyInPos(x+a*i,y+b*i)!=0 && ok){
						enemyInPos(x+a*i,y+b*i).img=img_plant;
						text("Даже поливать не нужно!");
						ok=false;
						game.select=0;
					}
				}
			// enemyturn();
			}
		}
		key=0;
		// return "none";
	}

	function enemyturn(){
		killNotAlive();
		text("--------------");
		
		function move(a,b,monster){
			var wound=item_bite;
			var wound2=false;
			if(monster.img==img_plant){wound=item_burdock}
			if(monster.img==img_motherplant){wound=item_redburdock;wound2=item_bite;}

			var nx=enemy.x+a;
			var ny=enemy.y+b;
			
			for (var e of game.enemy){
			 	if (nx==e.x && ny==e.y && e.alive){
			 		if(monster.img==img_plant || monster.img==img_motherplant){
				 		killEnemy(nx,ny);
				 		text("Хрум-хрум-хрум");
			 		}else{
			 			nx=enemy.x;
				 		ny=enemy.y;
			 		}
				}
			}
			enemy.x=nx;
			enemy.y=ny;
			if(enemy.x==game.pos.x && enemy.y==game.pos.y){
				text("Героя серьезно укусили");
				killEnemy(enemy.x,enemy.y);
				addItem(wound,false);
				if (wound2!=false){
					addItem(wound2,false);
				}
			}
			stamp=0;
		}
		function near(x,y,a,b){
			if(x==a-1 && y==b){
				return {a:-1,b:0};
			}	
			if(x==a+1 && y==b){
				return {a:1,b:0};
			}	
			if(y==b+1 && x==a){
				return {a:0,b:1};
			}	
			if(y==b-1 && x==a){
				return {a:0,b:-1};
			}
			return {a:0,b:0};
		}
		for (var enemy of game.enemy){
			var px = enemy.x-game.pos.x+4;
			var py = enemy.y-game.pos.y+4;
			enemy.fromx=enemy.x;
			enemy.fromy=enemy.y;
			if(enemy.img==img_motherplant){
				var a=rndint(1,49);
				var b=rndint(1,49);
				text("Герой слышит вой новорожденного плотоядного растения ");
				if(!((a==game.pos.x || a==game.pos.x-1|| a==game.pos.x+1) && (b==game.pos.y || b==game.pos.y-1|| b==game.pos.y+1))){
					if(game.map[a][b][1]=="empty" && enemyInPos(a,b)==0){
						generateMonster(img_plant,a,b);
					}
				}
				
				var okkk=true;
				for (eka of game.enemy){
					var n = near(eka.x,eka.y,enemy.x,enemy.y);
					if(n.a!=0 || n.b!=0 && okkk==true){
						text("Хищный цветок кого-то заживал!")
						move(n.a,n.b,enemy);
						okkk=false;	
					}
				}
				if(okkk){
					var n = near(game.pos.x,game.pos.y,enemy.x,enemy.y);
					if(n.a!=0 || n.b!=0){
						move(n.a,n.b,enemy);
					}	
				}	
			}
			if(px>=0 && py>=0 && px<=9 && py<=9){
				
				if(enemy.img==img_plant){
					var n = near(game.pos.x,game.pos.y,enemy.x,enemy.y);
					if(n.a!=0 || n.b!=0){
						move(n.a,n.b,enemy);
					}	
					
				}
				if(enemy.img==img_hedgehog || enemy.img == img_fish){
					if(enemy.img==img_hedgehog){
						var fear=img_water;
					}else{
						var fear=img_floor;
					}
					if(px>=0 && py>=0 && px<=9 && py<=9){
						if(!game.fow[px][py]){
							enemy.tax=game.pos.x;
							enemy.tay=game.pos.y;
						}
					}
					var xmot = enemy.x-enemy.tax;
					if(game.map[enemy.x-Math.sign(xmot)][enemy.y][1]!="empty" || game.map[enemy.x-Math.sign(xmot)][enemy.y][0]==fear){
						xmot=0;
					}
					var ymot = enemy.y-enemy.tay;
					if(game.map[enemy.x][enemy.y-Math.sign(ymot)][1]!="empty" || game.map[enemy.x][enemy.y-Math.sign(ymot)][0]==fear){
						ymot=0;
					}
					if (Math.abs(xmot)<6 && Math.abs(ymot)<6){
						var rnd = Math.abs(xmot)+Math.abs(ymot);
						rnd = rndint(1,rnd);
						if (xmot==0 && ymot ==0){}else{
							if (rnd<=Math.abs(xmot)){
								if (xmot<0){
									move(1,0,enemy);
								}else{move(-1,0,enemy);};
							}else{
								if (ymot<0){
									move(0,1,enemy);
								}else{move(0,-1,enemy);};
							}
						}
					}
				}
				if(enemy.img==img_ghost){
					if(px>=0 && py>=0 && px<=9 && py<=9){
						enemy.tax=game.pos.x;
						enemy.tay=game.pos.y;
					}
					var xmot = enemy.x-enemy.tax;
					var ymot = enemy.y-enemy.tay;
					if (Math.abs(xmot)<6 && Math.abs(ymot)<6){
						var rnd = Math.abs(xmot)+Math.abs(ymot);
						rnd = rndint(1,rnd);
						if (xmot==0 && ymot ==0){}else{
							if (rnd<=Math.abs(xmot)){
								if (xmot<0){
									move(1,0,enemy);
								}else{move(-1,0,enemy);};
							}else{
								if (ymot<0){
									move(0,1,enemy);
								}else{move(0,-1,enemy);};
							}
						}
					}
				}
			}
		}
	}
}

function killEnemy(x,y){
		for (var e in game.enemy){
			if (game.enemy[e].x==x && game.enemy[e].y==y){
				// game.enemy.splice(e, 1);
				game.enemy[e].alive=false;
				// add_monster--;
			}
		}
	}

function rndint(min, max) {
  var rand = min + Math.random() * (max - min)
  rand = Math.round(rand);
  return rand;
}

function gameover(win){
	if(win){
		text("Вы выиграли!!! Нажмите ENTER чтобы играть снова!");
	}else{
		text("Вы проиграли. Нажмите ENTER чтобы начать сначала.");
	}
	gameovered=true;
}

function text(string){
  $('#console').prepend("<br><br>");
  $('#console').prepend(string);
  
  var txt=$('#console').html().substring(0,600);
  $('#console').html(txt);
}

function enemyInPos(x,y){
	var r=0;
	for (var e of game.enemy){
		if (e.x==x && e.y==y){
			r=e;
		}
	}
	return r;
}

function addItem(item,good){
	var ok = true;
	var okkey = true;
	if(item.name=="key"){
		for(var i in game.inv){
			if(okkey && game.inv[game.inv.length-i-1].name!="key"){
				game.inv[game.inv.length-i-1]=item;
				okkey=false;
			}
		}
	if(okkey){
		gameover(true);
	}
	}else{

		if(good){
			for (var i in game.inv){
				if(game.inv[i].name=="slot" && ok){
					game.inv[i]=item;
					ok=false;
				}
			}
		}else{
			for (var i in game.inv){
				// console.log(game.inv.length-i-1);
				if(game.inv[game.inv.length-i-1].name=="slot" && ok){
					game.inv[game.inv.length-i-1]=item;
					ok=false;
				}
			}
		}
		if(ok){
			text("Герой не может вынести большего груза боли старадний и артефактов...");
			gameover(false);
		}
	}
}