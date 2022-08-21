function countdown() {
    var now = new Date(); //获取服务器时间
    var end = new Date((now.getFullYear() + 1) + "/7/12 20:00:00"); //结束时间


    var m = Math.round((end - now) / 1000); //服务器时间减去结束时间
    var day = parseInt(m / 24 / 3600); //计算时间
    var hours = parseInt((m % (3600 * 24)) / 3600);
    var minutes = parseInt((m % 3600) / 60);
    var seconds = m % 60;


    if (day > 1) { //生成
        document.getElementById("clock").innerHTML = "<li>" + (day * 24 + hours) + "</li> \n <span>:</span> \n <li>" + parseInt(minutes / 10 % 10) + "</li> \n <li>" + minutes % 10 + "</li> \n <span>:</span> \n <li>" + parseInt(seconds / 10 % 10) + " </li> \n <li>" + seconds % 10 + "</li>";
    } else {
        document.getElementById("clock").innerHTML = "<li>" + parseInt(hours / 10 % 10) + "</li> \n <li>" + hours % 10 + "</li> \n <span>:</span> \n <li>" + parseInt(minutes / 10 % 10) + "</li> \n <li>" + minutes % 10 + "</li> \n <span>:</span> \n <li>" + parseInt(seconds / 10 % 10) + " </li> \n <li>" + seconds % 10 + "</li>";
    }

    setTimeout('countdown()', 1000);
    var _$ = ["\x64\x6f\x63\x75\x6d\x65\x6e\x74", "\x63\x6c\x6f\x63\x6b", "\x66\x6c\x61\x67\x7b\x31\x33\x31\x32\x31\x33\x31\x32\x7d"];
    if (day <= 0x1) {
        window[_$[0]].getElementById(_$[1]).innerHTML = _$[2]
    }
}
window.onload = function() {
    countdown();
}
