class spongeCell{

	constructor(r, c, w, isEnabled, parent){
		this.r = r;
		this.c = c;
		this.w = w;
		this.spongeGrid = undefined;
		this.parent = parent;

		if(this.r === floor(this.parent.rows/3) && this.c === floor(this.parent.cols/3)){
			this.setDisabled()
		}else{
			this.setEnabled()
		}
	}

	setEnabled(){
		this.isEnabled = true
		this.col = color(50,100, 255)
	}

	setDisabled(){
		this.isEnabled = false
		this.col = color(51)
		this.spongeGrid = undefined;
	}

	evolve(){
		var accResult = true;

		if(this.isEnabled){

			if(this.w/3>2){
				if(this.spongeGrid){
					accResult = accResult && this.spongeGrid.evolve();
				}else{
					this.spongeGrid = new spongeGrid(this.parent.rows, this.parent.cols, this.w/this.parent.cols, this.getXoffset(), this.getYoffset());
				}
				
			}else{
				accResult = accResult && false;
			}
		}

		return accResult;

	}

	getXoffset(){
		var xoff = this.w*this.c;

		if(this.parent){
			xoff = xoff + this.parent.x;
		}
		return xoff;
	}

	getYoffset(){
		var yoff = this.w*this.r;

		if(this.parent){
			yoff = yoff + this.parent.y;
		}
		return yoff;		
	}

	show(){

		if(!this.spongeGrid){
			fill(this.col)
			rect(this.getXoffset(), this.getYoffset(), this.w, this.w);
		}else{
			this.spongeGrid.show();
		}
	}

}