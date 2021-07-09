/* In script format (not needed to run query.html) */
document.getElementById("myText").addEventListener("click", myFunction);
document.getElementById("Input1")
    .addEventListener('keyup', function(event) {
        if (event.code === 'Enter')
        {
            /* event.preventDefault(); */
            myFunction();
        }
    });
document.getElementById("Input2")
    .addEventListener('keyup', function(event) {
        if (event.code === 'Enter')
        {
            /* event.preventDefault(); */
            myFunction();
        }
    });
function myFunction() {
var url = "https://api.healthcarelocator.com/api/graphql/query?subscription-key={{Your-API-Key}}";

var xhr = new XMLHttpRequest();
xhr.open("POST", url);
xhr.setRequestHeader("Accept-Encoding", "gzip, deflate, br");
xhr.setRequestHeader("Content-Type", "application/json");
xhr.setRequestHeader("Accept", "application/json");
xhr.setRequestHeader("Connection", "keep-alive");
xhr.setRequestHeader("DNT", "1");
xhr.setRequestHeader("Origin", "https://api.healthcarelocator.com");
let data2; 
xhr.onreadystatechange = function () {
   if (xhr.readyState === 4) {
      console.log(xhr.status);
      console.log(xhr.responseText);
      a = JSON.parse(xhr.responseText);
      let text; 
      let lonA = 0;
      let latA = 0; 
      let aa = [];
      for (let i = 0; i < a.data.activities.length; i++) {
	if (a.data.activities[i].activity.workplace.address.location.lat === latA && a.data.activities[i].activity.workplace.address.location.lon === lonA) {}
	else {
        text += a.data.activities[i].activity.workplace.address.location.lat + " " +           a.data.activities[i].activity.workplace.address.location.lon + "<br>"; 
	latA = a.data.activities[i].activity.workplace.address.location.lat;
	lonA = a.data.activities[i].activity.workplace.address.location.lon;
	name = a.data.activities[i].activity.workplace.name;
	add1 = a.data.activities[i].activity.workplace.address.longLabel; 
	add2 = a.data.activities[i].activity.workplace.address.county.label; 
	add3 = a.data.activities[i].activity.workplace.address.country; 
	add4 = a.data.activities[i].activity.workplace.address.postalCode; 
        aa.push([latA, lonA, name, add1, add2, add3, add4]);} 
      }
      /* if(text){document.getElementById("myText").innerHTML = aa}; */
      console.log(distll(aa[0][0],aa[0][1],aa[1][0],aa[1][1],'T'));
      let aal = 0; 
      if (aa.length >= 10) {aal = 10;} 
      else {aal = aa.length}; 
	let ans = [];
      for (let i = 0; i < aal; i++) {
	for (let j = 0; j < aal; j++) {
	if (i === j) { ans.push(Infinity);}
	else {ans.push(distll(aa[i][0],aa[i][1],aa[j][0],aa[j][1],'T'))};
	}}

	/* Adjacency Matrix */
	let adjMat = matrixC(ans,10);
	let minR = [Infinity,0,0];
	let minM = [];
	let text2 = "<ol type=\"1\">";    
	console.log(adjMat); 
	for (let i = 0; i < aal; i++) {
		for (let j = 0; j < aal; j++) {
			if (i === j) {}
			else {if (adjMat[i][j] < minR[0]) {minR = [adjMat[i][j], i, j];}}  
	}
	minM.push(minR);
	text2 += "<li>Miles apart: " + minR[0] + "<br>" + "Location 1: " + aa[minR[1]][2] + "<br>"
		+  aa[minR[1]][3]  + "<br>" +  aa[minR[1]][4]  + " " +  aa[minR[1]][5]  + " " +  aa[minR[1]][6] + "<br>" 
		+ "Location 2: " + aa[minR[2]][2] + "<br>"
		+  aa[minR[2]][3]  + "<br>" +  aa[minR[2]][4]  + " " +  aa[minR[2]][5]  + " " +  aa[minR[2]][6] + "<br><br></li>" 
	minR = [Infinity,0,0]; 
	}
	text2 += "</ol>"; 
	if(text){document.getElementById("myText").innerHTML = text2};
	console.log(text2); 
   }};
var county = document.getElementsByName("Input1")[0].value;
var country = document.getElementsByName("Input2")[0].value;
var data = '{"query":"query{activities (first:1000 offset:0 country:\\"' + country + '\\" county:\\"'+ county + '\\" ) {distance  relevance  activity{id,title{code,label},role{code,label},workplace{name,address{longLabel,county{label},country,postalCode,location{lat lon}}}} }}"}';

xhr.send(data);
}
