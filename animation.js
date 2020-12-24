const template =document.getElementById("pulldB").innerHTML;

const replaceTemp=(item,temp)=>{
        let output = temp.replace(/{{colour}}/g,item.colourCode);
        output= output.replace(/{{name}}/g,item.productName);
        return output= output.replace(/{{detail}}/g,item.discriptions);
};

const tempBuild= dB.map(dbItem=>replaceTemp(dbItem,template)).join('');
document.getElementById("pulldB").innerHTML=tempBuild;

var backColor;
if (backColor = document.querySelectorAll(".red")) {
    backColor.forEach(element => {
        element.style.backgroundImage="linear-gradient(to right bottom,rgb(255, 68, 0) 1%, rgb(255, 166, 0))"
   });
};
 if (backColor = document.querySelectorAll(".blue")) {
    backColor.forEach(element => {
        element.style.backgroundImage="linear-gradient(to right bottom,#004772 1%, #0ca4ff"
   });
};
if (backColor = document.querySelectorAll(".brown")) {
    backColor.forEach(element => {
        element.style.backgroundImage="linear-gradient(to right bottom,#3d1e04 1%, #994c0b"
   });
};
if (backColor = document.querySelectorAll(".green")) {
    backColor.forEach(element => {
        element.style.backgroundImage="linear-gradient(to right bottom,#3d703d 1%, #0e9f0e"
   });
};
if (backColor = document.querySelectorAll(".concrete")) {
    backColor.forEach(element => {
        element.style.backgroundImage=`linear-gradient(to right bottom,#5e5d55 1%, #9a988f`
   });
};