// ==UserScript==
// @name         turkanime.net otomatik bölüm geçici
// @namespace    http://tampermonkey.net/
// @version      3.1
// @description  turkanime.net'de z ye tıklarsanız bölümü izlenilenlere ekleyip sıradaki bölüme geçer.(Sıradaki bölüme geçmesi 4 saniye sürer izlenildilere eklemesi 4 saniyeye yakın olduğundan)
// @author       efeozoz
// @match        https*://www.turkanime.net/*
// @grant        none
// @require     http://ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js
// @license     MIT
// @require     https://gist.github.com/raw/2625891/waitForKeyElements.js
// @grant       GM_addStyle
// ==/UserScript==



document.addEventListener('keydown', function(event) {
  if (event.code == 'KeyZ' ) {           //Z tuşunu algılayan kod oradaki KeyZ'nin sonundaki Z'yi istediğiniz harf yapabilirsiniz (Eğer ctrl tuşu yada ctrl+z gibi yapcaksanız if (event.code == 'KeyZ' && (event.ctrlKey || event.metaKey)) kodunu kullanın (https://javascript.info/keyboard-events)



(function() {
    'use strict';
   setTimeout(function() { document.getElementsByClassName("fa fa-eye fa-fw ikon-1x ikon-margin")[0].click(); }, 500); //İzlenildilere eklemesini istemiyorsanız bu satırı silebilirsiniz (500 izlenilenlere ekleme butonuna tıklama süresi (500=0.5 saniye)
//                                                                                                                                                                                                                                           (1000=1 saniye)
})();


(function() {
    'use strict';
    setTimeout(function() {
var labels = document.getElementsByClassName('btn btn-default bold baloon');
for (var i = 0; i < labels.length; ++i) {
    if (labels[i].textContent == "Sonraki Bölüm ") {  //Sonraki bölüme geçmesini sağlayan kod Sonraki Bölüm yazan yeri Önceki Bölüm yaparsanız önceki bölüme doğru gidicektir
        labels[i].click();
    }
}
    }, 4000); //Sonraki bölüme geçme süresi (4000=4 saniye) 4 saniye sonra geçiyor çünkü izlenildilere eklemesi 4 saniyeye yakın sürüyor eğer izlenildiği iptal ettiyseniz bu süreyi azaltabilirsiniz
//                                            (1000=1 saniye)
})();

       }
});
  
