// function getfile(file,callback){
//  var xhr = new XMLHttpRequest();
//   xhr.overrideMimeType("application/json");
//   xhr.open("GET",file,true);
//   xhr.onreadystatechange = function(){
//     if(xhr.readyState===4&&xhr.status=="200"){
//       callback(xhr.responseText);
//     }
//   };
//   xhr.send(null);
// }
// getfile("data.json",function(text){
//   var data=JSON.parse(text);
//   console.log(data);
//   var info=JSON.parse(text);
//   console.log(info);
//   details(data.basics);
//   career(info.careerobjective);
//   education(data.education);
//   skillset(data.skills);
//   achievements(data.achievements);
// })
function loadjson(file) {
  return new Promise((resolve,reject)=>{
    return fetch(file).then(response=>{
     if(response.ok){
       resolve(response.json());
     }else{
       reject(new Error('error'));
     }
    })
  })
}
var newfile = loadjson("data.json");
newfile.then(data=>{
  details(data.basics);
     career(data.careerobjective);
     education(data.education);
     skillset(data.skills);
     achievements(data.achievements);

})
var child=document.querySelector(".child1");
function details(det){
  var img=document.createElement("img");
  img.src=det.image;
  child.appendChild(img);

  var name= document.createElement("h3");
  name.textContent=det.name;
  child.appendChild(name);

  var pno= document.createElement("h3");
  pno.textContent=det.pno;
  child.appendChild(pno);
  var mail=document.createElement("a");
  mail.href= "mailto:sameerasrigeddapu@gmail.com";
  mail.textContent =det.mail;
  child.appendChild(mail);

  var k= document.createElement("h3");
  k.textContent="adress:";
  child.appendChild(k);
var l=document.createElement("hr");
child.appendChild(l);
  var a= document.createElement("p");
   a.textContent=det.adress;
  child.appendChild(a);


}
var childs=document.querySelector(".child2");
function career(careerinfo) {
  var obj=document.createElement("h3");
  obj.textContent="Career objective:";
  childs.appendChild(obj);
  var l=document.createElement("hr");
  childs.appendChild(l);
  var o=document.createElement("h4");
  o.textContent=careerinfo.info;
  childs.appendChild(o);

}
function education(edu){
  var x=document.createElement("h3");
  x.textContent="educational qualification";
  childs.appendChild(x);
  var l1=document.createElement("hr");
  childs.appendChild(l1);
  for(i=0;i<edu.length;i++){
    var deg = document.createElement("h3");
    deg.textContent = edu[i].degree;
    childs.appendChild(deg);

    var eduul=document.createElement("ul");
    var eduli=document.createElement("li");
    eduli.textContent=edu[i].institute;
    eduul.appendChild(eduli);
    childs.appendChild(eduul);

    var eduul=document.createElement("ul");
    var eduli=document.createElement("li");
    eduli.textContent=edu[i].data;
    eduul.appendChild(eduli);
    childs.appendChild(eduul);
}
}
function skillset(skillinfo) {
  var x=document.createElement("h3");
  x.textContent="Technical skills";
  childs.appendChild(x);
  var l1=document.createElement("hr");
  childs.appendChild(l1);
  var ta=document.createElement("table");
  ta.border="1";
  childs.appendChild(ta);
  tabledata="";
  for(i=0;i<skillinfo.length;i++)
  {
    tabledata+="<tr><td>"+skillinfo[i].title+"</td><td>"+skillinfo[i].data+"</td></tr>";
  }
ta.innerHTML=tabledata;
}
function achievements(det) {
  var x=document.createElement("h3");
  x.textContent="achievements";
  childs.appendChild(x);
  var l1=document.createElement("hr");
  childs.appendChild(l1);

  for(i=0;i<det.length;i++){
    var deg = document.createElement("h3");
    deg.textContent = det[i].type;
    childs.appendChild(deg);

    var eduul=document.createElement("ul");
    var eduli=document.createElement("li");
    eduli.textContent=det[i].ac;
    eduul.appendChild(eduli);
    childs.appendChild(eduul);


}

}
