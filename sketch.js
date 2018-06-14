var sg;
var cnvSize = 800;
var res = 3;
var btnStep;
var btnClear;
var finishP;

function setup(){

  gridCanvas = createCanvas(cnvSize,cnvSize);
  background(51)

  btnStep = createButton("Step");
  btnStep.position(8, gridCanvas.position().y + height+20);
  btnStep.mousePressed(evolve);

  btnClear = createButton("Clear");
  btnClear.position(78,gridCanvas.position().y + height+20);
  btnClear.mousePressed(ClearGrid);

  finishP = createP("")
  finishP.position(148, gridCanvas.position().y + height+10);

  sg = new spongeGrid(res, res, cnvSize/res, 0,0);
  sg.show();
}

function evolve() {
	var result = sg.evolve();

	if (result){
		sg.show();
	}else{
		finishP.elt.innerHTML = "too small to continue";
	}

}

function ClearGrid() {
	finishP.elt.innerHTML = "";
	sg = new spongeGrid(res, res, cnvSize/res, 0,0);
	sg.show();
}
