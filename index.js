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


const item_move={name:"move", img:img_move, text:"Старые ботинки, WASD чтобы ходить."};
const item_slot={name:"slot", img:img_slot, text:"Пустой мешочек, найдите полезные предметы чтобы заполнить его."};

const item_spear={name:"spear", img:img_spear, text:"Копье гоплита, метните его во врага!"};
const item_brick={name:"brick", img:img_brick, text:"Семена стеницы, уроните семечко у себя за спиной и там выростет настоящая стена."};

var dh=0;
const vision=9;

var gameovered=false;
var justmoved=false;

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
	var game = init();
	var oldtime = 0;
	function loop(time) {
		var frame = time-oldtime;
		oldtime=time;
    	run(game,frame);
    	requestAnimationFrame(loop);
	}
	requestAnimationFrame(loop);
}

function init(){
	var game=[];
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
	
	return newgame(game);
}

function newgame(game){
	gameovered=false;

	for(var y=0; y<50; y++){
		for(var x=0; x<50; x++){
			for(var z=0; z<3; z++){ 
    			game.map[x][y][z] = "empty";
    		}
    	}
    }
    for(var y=0; y<50; y++){
    	for(var x=0; x<50; x++){ 
    			game.map[x][y][0] = img_floor;
    		if(rndint(0,4)==0){
    			game.map[x][y][1] = img_wall;
    		}
    		if (x<10 || x>=40){
    			game.map[x][y][1] = img_wall;	
    		}
    		if (y<10 || y>=40){
    			game.map[x][y][1] = img_wall;	
    		}
    		if (x==35 && y==35){
    			game.map[x][y][0] = img_stairs;	
    			game.map[x][y][1] = "empty";	
    		}

		}
	}

	game.enemy=[];
	for (j=0;j<74;j++){
		var a=rndint(11,39);
		var b=rndint(11,39);
		game.enemy[j]={img: img_hedgehog, x:a, y:b,fromx:a,fromy:b,tax:a,tay:b};
	}

	for(e in game.enemy){
		if(game.enemy[e].x<14 && game.enemy[e].y<14){
			killEnemy(game.enemy[e].x,game.enemy[e].y,game);
		}
	}

    for(var y=10; y<15; y++){
		for(var x=10; x<15; x++){
			game.map[x][y][1] = "empty";	
		}
	}
	
	game.pos = {x:12,y:12};
	text("Началась новая игра. Найдите выход из подземелья! WASD чтобы ходить. QE чтобы выбирать предметы. SPACE чтобы стоять на месте")

	game.select=0;
	game.inv=[];
	for (var iv=0; iv<vision;iv++){
		game.inv[iv] = item_slot;
	}
	game.inv[0]=item_move;
	game.inv[1]=item_spear;
	game.inv[2]=item_brick;
	
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

function imfp(x,y,z,game){
	if (game.map[x][y][z] != "empty"){
		return game.map[x][y][z];
	} else return "empty";
}



function draw(game,frame){
	function animove(i,x,y,fx,fy,p){
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
	}
	var posx=game.pos.x-(vision-1)/2;
	var posy=game.pos.y-(vision-1)/2;
	for(var y=0; y<9; y++){
		for(var x=0; x<9; x++){
			game.fow[x][y]=false;
		}
	}
	//fow
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
					animove(e.img,e.x-posx,e.y-posy,e.fromx-posx,e.fromy-posy,stamp)
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

}

function run(game,frame){
	game = logic(game);
	draw(game,frame);
}

function logic(game){
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
					text("Вы выиграли!!! Нажмите ENTER чтобы играть снова!");
					gameover();
				}
				if(game.map[game.pos.x][game.pos.y][2]!="empty"){
					for (var i in game.inv){
						if(game.inv[i].name=="slot" && ok){
							game.inv[i]=item_spear;
							ok=false;
						}
					}
					game.map[game.pos.x][game.pos.y][2]="empty";
				}
				enemyturn();
				justmoved = true;
			}
		}
		if (act==="spear"){
			if(a==0 && b==0){
				text("Копье слишком длинное для харакири!")
			}else{
				var ok=true;
				for(var i=1; i<5; i++){
					if(enemyInPos(x+a*i,y+b*i,game)!=0 && ok){
						killEnemy(x+a*i,y+b*i,game);
						text("Вы пронзили ежа копьем!")
						game.inv[game.select]=item_slot;
						game.map[x+a*i][y+b*i][2]=img_spear;
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
		key=0;
		// return "none";
	}

	function enemyturn(){
		function move(a,b){
			var nx=enemy.x+a;
			var ny=enemy.y+b;

			for (var e of game.enemy){
			 	if (nx==e.x && ny==e.y){
			 		nx=enemy.x;
			 		ny=enemy.y;
			 	}
			 	if(game.map[nx][ny][1]!="empty"){
			 		nx=enemy.x;
			 		ny=enemy.y;
			 		text("еж топчит стену!");
			 	}

			 }
			stamp=0;
			enemy.x=nx;
			enemy.y=ny;


			if(enemy.x==game.pos.x && enemy.y==game.pos.y){
				text("Ваш герой обезглавлен огромным ежиком...")
				gameover(game);
			}
		}
		for (var enemy of game.enemy){
			enemy.fromx=enemy.x;
			enemy.fromy=enemy.y;
			var px = enemy.x-game.pos.x+4;
			var py = enemy.y-game.pos.y+4;
			if(px>=0 && py>=0 && px<=9 && py<=9){
				if(!game.fow[px][py]){
					enemy.tax=game.pos.x;
					enemy.tay=game.pos.y;
				}
			}
			var xmot = enemy.x-enemy.tax;
			if(game.map[enemy.x-Math.sign(xmot)][enemy.y][1]!="empty"){
				xmot=0;
			}
			var ymot = enemy.y-enemy.tay;
			if(game.map[enemy.x][enemy.y-Math.sign(ymot)][1]!="empty"){
				ymot=0;
			}
			if (Math.abs(xmot)<6 && Math.abs(ymot)<6){
				var rnd = Math.abs(xmot)+Math.abs(ymot);
				rnd = rndint(1,rnd);
				if (xmot==0 && ymot ==0){}else{
					if (rnd<=Math.abs(xmot)){
						if (xmot<0){
							move(1,0);
						}else{move(-1,0);};
					}else{
						if (ymot<0){
							move(0,1);
						}else{move(0,-1);};
					}
				}
			}
		}
	}
 	return game;
}

function killEnemy(x,y,game){
		for (var e in game.enemy){
			if (game.enemy[e].x==x && game.enemy[e].y==y){
				game.enemy.splice(e, 1);
			}
		}
	}

function rndint(min, max) {
  var rand = min + Math.random() * (max - min)
  rand = Math.round(rand);
  return rand;
}

function gameover(game){
	text("Вы проиграли. Нажмите ENTER чтобы начать сначала");
	gameovered=true;
}

function text(string){
  $('#console').prepend("<br><br>");
  $('#console').prepend(string);
  
  var txt=$('#console').html().substring(0,600);
  $('#console').html(txt);
}

function enemyInPos(x,y,game){
	var r=0;
	for (var e of game.enemy){
		if (e.x==x && e.y==y){
			r=game.enemy;
			
		}
	}
	return r;
}