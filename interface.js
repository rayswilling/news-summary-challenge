function initialize()  {
        var newsList = new NewsList(); 

    var newsDiv = document.getElementById('main');

        function getGuardianData() {
            // Create a request variable and assign a new XMLHttpRequest object to it.
            var request = new XMLHttpRequest();
            var urlAPI = 'https://content.guardianapis.com/search?api-key=9b05708c-25d0-4b2a-b98b-3db5daad8767' 
            // Open a new connection, using the GET request on the URL endpoint
            request.open('GET', urlAPI, true)

            request.onload = function() {
                var result = JSON.parse(this.response); 
                var responseLength = result.response.results.length;
                for (var i=0; i<responseLength; i++) {
                    newsList.add(result.response.results[i].webTitle)
                }
            newsDiv.appendChild(newsList.displayNews());

            }
        request.send()
    }

    getGuardianData();
}

document.addEventListener("DOMContentLoaded", initialize);

