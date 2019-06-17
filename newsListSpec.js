describe('News List', () => {
    it('can add articles to the list of news', () => {
        let list = new NewsList 
        list.add("First Title")
        list.add("Second Title")
        expect(list.newsArray.length).toEqual(2)
    })
});