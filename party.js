var names = ["angel","shivanshu","ansh","stubborn"];
var a = prompt("wann enter any names yes/no :");
if(a=="yes"){
   b = prompt("enter name: ");
   names.push(b);
  d=prompt("guess the persong going to give party yes/no: ");

   if(d=="yes"){

var nop = names.length;
var r = Math.floor(Math.random()*nop);
var rp = names[r];
alert(rp+" "+"going to pay for party");}
else if(d=="no"){
  alert("then guess urself : ")
  alert(names);
    }
    else{
        alert("chla ja bosdk");
    }
}
else if(a=="no"){
var nop = names.length;
var r = Math.floor(Math.random()*nop);
var rp = names[r];
alert(rp+"going to pay for party");
}
else{
    alert("ye game tere lia nhi hai tu jaa");
}