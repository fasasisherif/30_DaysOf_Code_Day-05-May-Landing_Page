var iprocure = [ "iprocure1.png", "iprocure2.png","iprocure3.png","iprocure4.png","iprocure5.png","iprocure6.png","iprocure7.png","iprocure8.png"]


var a = 0;
function myfunc1(){
var b = document.getElementsByClassName('sli1');
a++;
if ( a >= iprocure.length){
				a = 0;
}
b[0].style.backgroundImage=  "url"('+iprocure[a]+')";
}
setInterval(myfunc1,3000);



var totebag = ["tote1.png","tote2.png","tote3.png","tote4.png"]
var c = document.getElementsByClassName('sli2');

var d = 0;
function myfunc2(){
				d++;
			 c[0].style.backgroundImage =  'url(' + totebag[d] + ')';
if (d >= 3){
				d = 0;
				}
	}
setInterval(myfunc2,3000);


var e = 0;
var jameel = ["jameel1.png", "jameel2.png","jameel3.png","jameel4.png","jameel5.png" ]

function myfunc3() {
				e++;
var f = document.getElementsByClassName('sli3');
f[0].style.backgroundImage = 'url(' + jameel[e] + ')';
if (e>=3){
				e = 0;
				}
				}
setInterval(myfunc3,3000);
