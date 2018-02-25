/**
 *
 * Created by Lossa on 2018/2/25.
 */
function goAjax() {


    var ajax = new XMLHttpRequest();
    ajax.onreadystatechange = function callback() {
        if (ajax.readyState === 4 && ajax.status === 200) {
            alert("readyState:" + ajax.readyState +
                'status：' + ajax.status +
                'responseText' + ajax.responseText);
            var resule = JSON.parse(ajax.responseText);
            var serverImage = document.getElementById("image");
            serverImage.src = resule.image;
        }

    };
    ajax.open('GET', 'https://yesno.wtf/api', true);
    ajax.send();
}




