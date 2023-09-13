
//const urlBacon = "https://baconipsum.com/api/?type=all-meat";
const urlBacon = "https://jsonplaceholder.typicode.com/todos";

var getAPI = function(){$.ajax({
    method: "GET",
    url: urlBacon,
    dataType: "json"
})
    .done(function (data) {
        var obj = {
            "title": data[0].title,
            "complete": data[0].completed,
        }
        console.log(obj);
    })
    .fail(function () {
        alert("no good");
    });
}
getAPI();


