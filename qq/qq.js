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
