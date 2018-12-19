$(document).ready(function() {
    pullHeadlines();
     function pullHeadlines() {
        var queryURL = 'https://newsapi.org/v2/everything?' +
          'language=en&' +
          'q=Trump&' +
          'from=2018-12-05&' +
          'sortBy=popularity&' +
          'apiKey=382af314b44b40bbb7154dd966a93540';
          $.ajax({
            url: queryURL,
            method: "GET"
          }).then(function(response) {
              console.log(response.articles);
              var article= response.articles;
              for (var i = 0; i < response.articles.length; i++) {
                var headline = article[i].title;
                var links = jQuery.makeArray($("<div class='row'><div class='col-12'><a href='"+ article[i].url +"' style='color: white'><p>"+ headline +"</p></a></div></div>"));
                links.reverse();
                $(links).appendTo("#headlines");
                // $("#headlines").html(links);
                }
              

              });

}
});