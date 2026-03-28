// Cocktail dynamic page
const params = new URLSearchParams(window.location.search);
const name = params.get("name");

if(name){
  const title = document.getElementById("title");
  const video = document.getElementById("video");
  const list = document.getElementById("ingredients");

  if(title) title.innerText = name;

  if(video){
    video.src = "https://www.w3schools.com/html/mov_bbb.mp4";
  }

  const items = [
    "Vodka","Lime","Mint","Sugar",
    "Ice","Soda","Salt","Fruit Garnish"
  ];

  if(list){
    items.forEach(i=>{
      let li = document.createElement("li");
      li.innerText = i;
      list.appendChild(li);
    });
  }
}
