$(document).ready(function() {




    $("#submit_button").on("click", function(e) {
        console.log("button was clicked");
        var search = $("#search").val();
        var numberToDisplay = $("#numberToDisplay").val();
        var startYear = $("#startYear").val();
        var endYear = $("#endYear").val();
        e.preventDefault();
    
        console.log(search);
        console.log(startYear);
        console.log(endYear);
        var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json"; 
        url += '?' + $.param({
            'api-key': "0db685b474bd420b87d91152f32277a2",
            'q' : search,
            'begin_date' : startYear,
            'end_date' : endYear,
        });
        $.ajax({
          url: url,
          method: 'GET',
        }).done(function(result) {
            for (var i = 0; i < numberToDisplay; i++) {
                //console.log("hi");
                console.log(result.response.docs[i].web_url);
                var link = result.response.docs[i].web_url;
                var title = result.response.docs[i].snippet;
    
                var searchResult = $("<div>");
                console.log(link)
                searchResult.html('<a href="' + link + '"><h1>' + title + '</h1></a>'); 
                 $(".list-group").append(searchResult);
                console.log(title);
            }
          //console.log(result);
        }).fail(function(err) {
          throw err;
        });
    })
    
    });
    