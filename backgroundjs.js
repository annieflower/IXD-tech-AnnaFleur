
		//BACKGROUND
		window.onload = function(){
			// Creating the Canvas
			var canvas = document.createElement("canvas"), 
				c = canvas.getContext("2d"),
				particles = {},
				particleIndex = 0,
				particleNum = 8;
			
			canvas.width = window.innerWidth;
	        canvas.height = window.innerHeight;
			canvas.id = "motion";
			document.body.appendChild(canvas);
			// Finished Creating Canvas
			
			// Setting color which is just one big square
			c.fillStyle = "black";
			c.fillRect(0,0,canvas.width,canvas.height);
			// Finished Color
			
			function Particle(){
				var random_x = Math.floor(Math.random() * (canvas.width - 1 + 1)) + 1;
				var random_y = Math.floor(Math.random() * (canvas.height - 1 + 1)) + 1;
				this.x = random_x;
				this.y = random_y;
				this.vx = 0;
				this.vy = 0;
				this.gravity = 0;
				particleIndex++;
				particles[particleIndex] = this;
				this.id = particleIndex;
				this.life = 0;
	        this.size = Math.random() * 6 - 2;
				this.maxlife = Math.random() * 80 + 20; // Stars are set to have a random life length right now, but you can shorten this or make it longer
				this.color = "rgb("+parseInt(Math.random()*255, 10)+",0,0)"; // Change color being displayed here
			}

			Particle.prototype.draw = function(){
				this.x += this.vx;
				this.y += this.vy;
				
				this.vy += this.gravity;
				this.life++;
				if(this.life >= this.maxlife){
					delete particles[this.id];
				}
				c.fillStyle = this.color;
				c.fillRect(this.x, this.y, this.size, this.size);
			};
			
			setInterval(function(){
				c.fillStyle = "black";
				c.fillRect(0,0,canvas.width,canvas.height);
				for (var i = 0; i < particleNum; i++){
					new Particle();
				}
				for(var i in particles){
					particles[i].draw();
				}
			}, 30);
		};
