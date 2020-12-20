const dB =[{
    productName: "forrest tycoon",
    discription: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    productID:"1",
},{
    productName: "ocean explorer",
    discription: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    productID:"2",
},{
    productName: "mountain bikers",
    discription: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    productID:"3",
},{
    productName: "concrete jungle",
    discription: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    productID:"4",
},{
    productName: "..coming soon",
    discription: "...",
    productID:"5",
}];

 function items(item){
        return `<div class="inner">
                <div class="cubic-left">
                   <div class="text-box-a">
                     <h2>${item.productName}</h2>
                   </div>  
                 </div>
                <div class="cubic-right">
                     <div class="text-box-b">
                     <h5>${item.discription}</h5>
                   </div>   
                </div>
             </div>`;
};

var tempBuild= dB.map(items).join('');
document.getElementById("pulldB").innerHTML=tempBuild;
