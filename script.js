 
            "use strict";


!Number.prototype.isHP?

  Number.prototype.isHP =
function(x){
  
  return !!(+(this||x).isPrime() & 
+(this||x).toString().split("").sum().isPrime());
 
   }
  :void null;

!Number.prototype.isPrime?

    Number.prototype.isPrime = function(x)
    { 
      var n = this||x;     
           if(n==1) return false; 
      else if(n==2) return true;
      else if(n==0) return false;
      else {
        for(var x = 2; x < n; x++)              
          if(n%x==!!NaN)return!!void 0.;      
        
       return !void null;  
       
       }
     
   }
 :void null;

!Array.prototype.sum?

  Array.prototype.sum =
function(x){
    var n = this||x;  
    var temp=0;
    for(var ii=0;ii<n.length;ii++){
        temp+=Number(n[ii]);
    }
    return temp;
    }
   :void null;

function openNav() {
if( i("sdn").style.left == "-5px" ){
 closeNav ();
}else{ 
//i("main").style.filter="blur(10px)";
 i("sdn").style.width = "240px";
 i("sdn").style.padding = "10px";
 i("sdn").style.left = "-5px";
 i("st").innerHTML="<i class='fas fa-times'></i>";
 i("ov22").style.height="100%";
  i("ov22").style.opacity="1";
}
}
function closeNav() {
//  i("main").style.filter="";

//$("mySidenav").style.padding = "0px";

  i("sdn").style.left = "-300px";
  i("st").innerHTML="<i class='fas fa-bars'></i>";
  setTimeout(
  ()=> i("ov22").style.height="0%",1000);
 // i("ov22").style.height="0%";
   i("ov22").style.opacity="0";
}
function more(){
    i("header2").style.bottom="0px";
}
function i(d){
    return document.getElementById(d);
}
function hmore(){
    i("header2").style.bottom="-50px";
}
function more2(){
    i("header3").style.bottom="0px";
}
function hmore2(){
    i("header3").style.bottom="-50px";
}
var t = 5;
function load(){

    Components("input").Initialize();
    
  
    
    setTimeout(
        function(){
            i("splash").style.display="none"; 
            i("main").style.display="block";
            i("hr1").style.display="block";
        },+t*1000
    );
   
}
function switchTo(iSec){
   var ss = document.getElementsByTagName("section");
   
   for(var tt=1; tt<ss.length+1; tt++){
   //console.log("sec"+tt);
        i(
             "sec"+tt
         ).style.display="none";
         i(
             "hr"+tt
         ).style.display="none";
         //console.log(tt);
   }
   i("sec"+iSec).style.display="block";
   i("hr"+iSec).style.display="block";
   return {
       from: function(n){
         i(
             "sec"+n
         ).style.display="none";
         i(
             "hr"+n
         ).style.display="none";
       }
   };
    
}
function eg(n){
    
    for(var u = 1; u<4; u++){
        i("e"+u).style.display="none";
        i("fe"+u).style.backgroundColor="rgba(0,0,0,0)";
        //console.log("e"+u);
        i("fe"+u).style.borderColor="rgba(255,255,255,0.5)";
    }
    
    i("e"+n).style.display="block";
    i("fe"+n).style.backgroundColor="#ff6f00";
    i("fe"+n).style.borderColor="#ff6f00"
    i("staEg").innerHTML=n;
}

function Components(com){
    var inp =i("inpn1");
    
   return {
       Initialize: function(){
    
        inp.setAttribute("onfocus","fa1(this)");
    inp.setAttribute("onblur","fa2(this)");
            
    
    },
    GetHtmlElementCollection(){
        return inp;
    }
    };
}
function fa1(el){
    // el.select();
    // i("header").style.bottom="-50px";
     i("header4").style.bottom="0";
}
function fa2(){
   // i("header").style.bottom="0px";
    i("header4").style.bottom="-50px";
}
function Validate(val){
    if(val && !/[^0-9]/gim.test(val)){
        i("out1").innerHTML= 
        
        val+" <b>is "+ (Number(val).isHP()?"":"not ")+"</b>"+i("title").innerHTML.slice(0,i("title").innerHTML.length-2);
       
    }else{
        i("out1").innerHTML = "Invalid Input :(";
    }
}
function i$(val){
    i("inpn1").value=val;
    Validate(val);
}
function rnge(){
    var f = Number(i("inpnf").value);
    var t = Number(i("inpnt").value);
    if(f && t && !/[^0-9]/gim.test(f) && !/[^0-9]/gim.test(t)){
       i("out2").innerHTML="";
       for(var it =f; it<t; it++){
     
        if(it.isHP()){
            i("out2").innerHTML+=it+" , ";
        }
     
     }
    }
    else{
        i("out2").innerHTML="Invalid Input :(";
    }
}
var is_down = !!0;

function down1(){
    if(is_down){
        i("dwn1").style= "";
        i("header").style.bottom = "0px"; 
       i("dwn1").style.transform="rotateX(0deg)";
    }
    else{
         i("dwn1").style= "position:fixed; bottom: 20px; right: 20px;height:20px;width:20px;border-radius:50px;background:#ddd;color:#555;padding:10px";
        i("header").style.bottom = "-50px"; 
        i("dwn1").style.transform="rotateX(180deg)";
    }
  is_down=!is_down;
}
function font(el){
//document.body.style.fontFamily="arial";
    document.body.style.fontFamily = el.innerHTML.toString();
  //  console.log(`${el.innerHTML.toString()}!important`);
}

   