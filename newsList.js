class NewsList {
    constructor() {
        this.newsArray = []
    }

    add(title) {
        this.newsArray.push(new News(title)); 
    }

    displayNews() {
        let div = document.createElement('div')
        for (var i=0; i <this.newsArray.length; i++) {

div.appendChild(this.displayNews(this.newsArray[i])) 
        }
        return div
    }

    displayArticle(article) { 
        let articleDiv = document.createElement('div')
        articleDiv.setAttribute("style", "margin-bottom:3em")
        let title = document.createElement('p')

        title.innerText = article.title
        articleDiv.appendChild(title)

        return articleDiv
    }
    

}