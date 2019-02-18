function copyToClipboard(str){
    var el = document.getElementsByClassName(quote);
    el.value = str;
    document.body.appendChild(el);
    el.select();
}