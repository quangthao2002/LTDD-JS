
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

//  dung map render ra dữ liệu từ API về ==> lấy title và complete

var getAPI2 = function(){$.ajax({
    method: "GET",
    url: urlBacon,
    dataType: "json"
})
    .done(function (data) {
        var obj = data.map(function (item) {
            return {
                "title": item.title,
                "complete": item.completed,
            }
        })
        console.log(obj);
    })
    .fail(function () {
        alert("no good");
    });
}

getAPI2();


