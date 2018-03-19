$('document').ready(function () {
    $('#search').keyup(function () {
        var searchText = $('#search').val();
        var list = $('#list');
        $.get('http://api.bing.com/qsonhs.aspx?q=' + searchText, function (result) {
            console.log(result.AS);
            var suggest = document.createElement('div');
            for (item in result.AS.Results[0].Suggests) {
                var listItem = document.createElement('div');
                listItem.innerText = item.Txt;
                suggest.appendChild(listItem)
            }
            list.appendChild(suggest);
        }, 'json')

    });
});