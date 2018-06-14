class spongeGrid{

	constructor(rows, cols, w, x, y){
		this.rows = rows;
		this.cols = cols;
		this.x=x;
		this.y=y;

		this.cells = [];

		for(var r=0; r<this.rows; r++){
			for(var c=0; c<this.cols; c++){
				this.cells[c + r*this.cols] = new spongeCell(r,c,w,true, this);
			}
		}

	}

	evolve(){

		var ok = true;
		for(var i=0; i<this.rows*this.cols; i++){
			ok = ok && this.cells[i].evolve();
		}
		return ok;
	}

	show(){
		for(var i=0; i<this.rows*this.cols; i++){
			this.cells[i].show();
		}
	}

}