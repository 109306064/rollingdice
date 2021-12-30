function start(){
	var button =document.getElementById("rollButton");
    button.addEventListener("click",rollDice,false);
    alert('a');
}
function rollDice(){
    var face;
    for(var i=1;i<=12;++i){
    	face=Math.floor(1+Math.random()*6);
    	setImage(i,face);
        tallyRolls(face);
        ++totalDice;
    }
    updateFrenquencyTable();
}
function setImage(dieImg,face){
	var dieImage=document.getElementById("die"+dieNumber);
	dieImg.setAttribute("src","die"+face+".png");
	dieImg.setAttribute("alt","die with"+face+"spot(s)");
}
function tallyRolls(face){
	switch(face)
	{
		case 1:
          ++frequency1;
          break;
        case 2:
          ++frequency2;
          break;
        case 3:
          ++frequency3;
          break;
        case 4:
          ++frequency4;
          break;
        case 5:
          ++frequency5;
          break;
        case 6:
          ++frequency6;
          break;
	}

}
function  updateFrequencyTable(){
	var tableDiv=document.getElementById("frequenyTableDiv");

	tableDiv.innerHTML="<table>"+
	                   "<caption>Die Rolling Frequencies</caption>"+"<thead><th>Face</th><th>Frenquency</th>"+"<th>Percent</th></thead>"+
	                   "<tbody><tr> <td>1</td> <td>"+frenquency1+"</td> <td>"+Math.floor((frenquency1/totalDice)*100)+"%"+"</td></tr>"+
                               "<tr> <td>2</td> <td>"+frenquency2+"</td> <td>"+Math.floor((frenquency2/totalDice)*100)+"%"+"</td></tr>"+
                               "<tr> <td>3</td> <td>"+frenquency3+"</td> <td>"+Math.floor((frenquency3/totalDice)*100)+"%"+"</td></tr>"+
                               "<tr> <td>4</td> <td>"+frenquency4+"</td> <td>"+Math.floor((frenquency4/totalDice)*100)+"%"+"</td></tr>"+
                               "<tr> <td>5</td> <td>"+frenquency5+"</td> <td>"+Math.floor((frenquency5/totalDice)*100)+"%"+"</td></tr>"+
                               "<tr> <td>6</td> <td>"+frenquency6+"</td> <td>"+Math.floor((frenquency6/totalDice)*100)+"%"+"</td></tr>"+

}
window.addEventListener("load",start,false)