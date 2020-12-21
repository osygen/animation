const dB =[{
    productName: "forrest tycoon",
    discription: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    productID:"1",
    colourCode:"green"
},{
    productName: "ocean explorer",
    discription: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    productID:"2",
    colourCode:"blue"
},{
    productName: "mountain bikers",
    discription: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    productID:"3",
    colourCode: "brown"
},{
    productName: "concrete jungle",
    discription: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    productID:"4",
    colourCode: "concrete"
},{
    productName: "volcanic springs",
    discription: "...",
    productID:"5",
    colourCode: "red"
},{
    productName: "..coming soon",
    discription: "...",
    productID:"5",
    colourCode: ""
}];

  items = (item) =>{
        return `<div class="inner">
                <div class="cubic-left">
                   <div class="text-box-a">
                     <h2 class="${item.colourCode}">${item.productName}</h2>
                   </div>  
                 </div>
                <div class="cubic-right ${item.colourCode}">
                     <div class="text-box-b">
                     <h5>${item.discription}</h5>
                   </div>   
                </div>
             </div>`;
};

var tempBuild= dB.map(items).join('');
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