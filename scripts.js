async function getData() {
    const result=await fetch("https://www.omdbapi.com/?i=tt3896198&apikey=92098ede")
    //console.log(result)
    const res= await result.json()
    console.log(res)
    cards = ''
    res.recipes.forEach(item => {
        cards+= `
        <div class="card" style="width: 18rem;">
        <img src="${item.title}" class="card-img-top" >
        <div class="card-body">
        
        <h5 class="card-title">${item.released}</h5>
        <p class="card-text">${item.actors}</p>
        <p class="card-text">${item.language}</p>
        <p class="card-text">${item.country}</p>
        <p class="card-text">${item.awards}</p>
        <p class="card-text">${item.poster}</p>
        <p class="card-text">${item.ratings}</p>
        </div>
        </div>
        `
    });
    prds.innerHTML=cards
        
}
getData()