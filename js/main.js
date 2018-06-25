document.querySelector("#search").addEventListener("click", function () {
    let picture = document.querySelector("#searching").value

    fetch(`https://api.unsplash.com/search/photos?page=1&query=${picture}`, {
        headers: {
            Authorization: 'Client-ID 2649370402558acde73afb38962ccab83f01c44efe37f8c27a06d8d97096968d'
        }
    }).then(function (response) {
        return response.json();
    }).then(addImage);

    function addImage(data) {
        let htmlContent = "";
        const firstImage = data.results;
        for (const photo of firstImage) {
            htmlContent += `<img src="${photo.urls.thumb}">`;
        }
        document.querySelector(".images").innerHTML += htmlContent;
        console.log(data)
    };
})



fetch(`https://api.nytimes.com/svc/search/v2/articlesearch.json?q=cat&api-key=bba33daa8d8a49698f25d1eaa6a4f189`)
    .then(function (response) {
        return response.json();
    }).then(addArticle);

function addArticle(art) {
    let htmlString = "";
    for (let article of art.response.docs) {
        htmlString += `<div id  = "main"><a id = "link" href="${article.web_url}">${article.headline.main}</a><p>${article.snippet}<p></div>`
    }
    document.querySelector("#article").innerHTML = htmlString;
};




let html = "";
html += `<input id = "title" type = "text" placeholder = "title">
    <input id = "body" type = "text" placeholder = "body">
    <input id = "userId" type = "text" placeholder = "userId">
    <button id = "button">ADD</button>`
document.querySelector("#inputs").innerHTML = html;
document.querySelector("#button").addEventListener("click", function () {
    let title = document.querySelector("#title").value
    let body = document.querySelector("#body").value
    let userId = document.querySelector("#userId").value
    fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify({
                title: title,
                body: body,
                userId: userId
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
        .then(response => response.json())
        .then(function (json) {
            let htm = "";
            htm += `<div>title:${json.title},body:${json.body}, userId: ${json.userId}</div>`
            document.querySelector("#values").innerHTML = htm;
        })
})
