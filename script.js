const params=new URLSearchParams(window.location.search);
const name=params.get("name");

if(name){
document.getElementById("title").innerText=name;

document.getElementById("video").src=
"https://www.w3schools.com/html/mov_bbb.mp4";

const ingredients=[
"Vodka","Lime Juice","Mint Leaves","Sugar Syrup",
"Ice Cubes","Soda Water","Salt","Orange Garnish"
];

const list=document.getElementById("ingredients");

ingredients.forEach(i=>{
let li=document.createElement("li");
li.innerText=i;
list.appendChild(li);
});
}
