const row = document.getElementById ('newstype')
const baseUrl = 'https://api.worldnewsapi.com/search-news?api-key=a34105e6478e452abde5a96b150c712f&text=sport.'
fetch (baseUrl)
.then (result => result.json ())
.then((data) =>{
  console.log(data);
  data.news.map((value,index) =>{
    row.innerHTML+=`
    <div class ="col-lg-4">
    <img src="${value.image}" alt="" style="width:100%; height:190px;">
    <strong>Name:${value.title.slice(0,60)}</strong><br>
    <strong>Author:${value.author}</strong>
    <p>${value.text.slice(0,200)}</p>
   <a href ="${value.url} <button class="btn">read more</button></a>
    </div>
    `
  })
})