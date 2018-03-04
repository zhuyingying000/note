/*setTimeout(
    function () {
        document.getElementById('title').innerHTML = 'zzp';
    }
    , 0);


document.getElementById('test').innerHTML = 888;*/


function parent() {
    var name = 'dog';
    return function child() {
        var name = 'cat';
        return name;
    };
}

var r = parent()();
document.getElementById('test').innerHTML = r;


