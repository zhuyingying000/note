function goFast() {
    var fast = document.querySelector('.tab');
    var account = document.querySelector('#content');
    fast.style['display'] = 'flex';
    account.style['display'] = 'none';
}


function goAccount() {
    var fast = document.querySelector('.tab');
    var account = document.querySelector('#content');
    fast.style['display'] = 'none';
    account.style['display'] = 'flex';

}


function load() {

   var xml = document.getElementById('userName');
   var as =xml.value;
   console.log('as:',as);
   if(as===''){
       alert("请输入QQ号码");
       return;
   }
    var aml = document.getElementById('password');
    var bs =aml.value;
    if(bs===''){
        alert("请输入密码");
        return;
    }

    var ajax = new XMLHttpRequest();
    ajax.onreadystatechange = function callback() {
        if (ajax.readyState === 4 && ajax.status === 200) {

            var result = ajax.responseText;
            console.log(result);
            var resultObject = JSON.parse(ajax.responseText);
            console.log(resultObject);
            if (resultObject.answer==='yes') {
                alert("登录成功")
            }
            else{
                alert("登录失败")
            }

        }

    };
    ajax.open('GET', 'https://yesno.wtf/api', true);
    ajax.send();
}











