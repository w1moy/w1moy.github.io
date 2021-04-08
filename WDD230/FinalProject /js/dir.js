const requestURL = "https://my-json-server.typicode.com/w1moy/directoryjson/business";

fetch(requestURL)
    .then(function(response){
        return response.json();
    })
    .then(function (jsonObject){
        console.table(jsonObject);})