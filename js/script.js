var apiURL = "https://api.dribbble.com/v1/users/14318/shots?callback=?"

$.getJSON(apiURL,{

    per_page:8,
    access_token: "bb7b80ad6bbc148eedfe2992c60b7cb0d6b93d48270578c736dc5e7f3ef2d543"

}).done(function(json){

    for( var i = 0; i < 6; i++){

        var imgsrc = json.data[i].images.normal;
        var html_url = json.data[i].html_url
        var title = json.data[i].title
        var template = "<a href='" + html_url + "' target='_blank'><span>" + title + "</span><img style='width:300px;" +
            "height:225px;' src='" + imgsrc + "'></a>"
        $("#dribbble").append(template)

    }
})

