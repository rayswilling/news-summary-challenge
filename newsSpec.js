describe('News', () => {
    it ('has a title', () => {
        var title =  "New news article"
        var news = new News(title)
        expect(news.title).toEqual(title)
    })
})





