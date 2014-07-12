### Dialog Fonksiyonlarý ve Ayarlarý
#### mdialog
Dialog'u kapatýp açar.  
``mdialog d_dialog``

#### background
Arayüz arka planýný belirler. Normalde þu þekilde kullanýlan ``resizepic`` ve 5'er piksellik iç çerçeve için ``checkertrans``
````
resizepic 0 0 3500 200 250
checkertrans 5 5 190 240
````
Þu þekilde daha kolay ve anlaþýlýr þekilde kullanýlabilir.
````
background 3500 200 250, transparent 5 5
````

#### ibutton iradio icheck itext
Stil atanmýþ button-radio-checkbox-dtext fonksiyonlarýdýr, çoðaltýlabilir. Kullanýldýðý tüm yerde öncesinde ayarlanmýþ, örneðin **210 211** buttonunu gösterir. ``input`` ile birlikte kullanýlabilir.  
``ibutton 15 10 1`` x y id  
Sonrasýna sabit **x y** deðerlerine sahip ``dtext`` atanabilir.  
``ibutton 15 10 1, Lorem ipsum``  
Yukarýdaki örnekte **Lorem ipsum** daha yani ``dtext`` in **x y** deðerleri fonksiyon içinden daha önce atanmýþtýr ve sabittir. ``radio-checkbox-dtext`` için örnekler aynýdýr.

#### &lt;big&gt; &lt;big/&gt; ve &lt;small&gt; &lt;small/&gt;
Arayüzden ``htmlgump`` elemanýnda kullanýnabilen **büyük** ve **ufak** yazý stil fonksiyonudur.
``htmlgump 10 10 100 20 0 0 lorem <small>ipsum<small/> sit amet``

#### &lt;hblue&gt; &lt;hblue/&gt; &lt;hwhite&gt; &lt;hwhite/&gt; &lt;hred&gt; &lt;hred/&gt; &lt;hyellow&gt; &lt;hyellow/&gt; 
Arayüzden ``htmlgump`` elemanýnda kullanýnabilen renk stil fonksiyonudur, çoðaltýlabilir
``htmlgump 10 10 100 20 0 0 lorem ipsum <hred>sit<hred/> amet``

#### &lt;blue&gt; &lt;white&gt; &lt;red&gt; &lt;yellow&gt;
Arayüzden ``dtext`` elemanýnda kullanýnabilen renk stil fonksiyonudur, çoðaltýlabilir. Ayrýca ``msg`` ve ``smsg`` ile de kullanýlabilir.
``dtext 10 10 <white> lorem ipsum sit amet``

#### msg smsg
``message`` ve ``sysmessage`` ile ayný görevi görür. Yazý tipi ve Türkçe ascii ayarlarý ``,,1`` buradan yapýlýr.  
``msg <red> Lorem ipsum sit amet``

#### input
Dialog'a tek satýrda elemanlar ekler (dtext, button, radio vs.) Normal kullaným þekli aþaðýdadýr.
````
dtext 20 20 0481 Öldürdüðünüz : <src.kills>
dtext 20 40 0481 Öldüðünüz : <src.deaths>
````
Fakat yukarýdaki kullanýmda ``: <src.kills>`` ve ``: <src.deaths>`` ayný hizada deðildir. Arayüzde görüntü kirliliðine sebep olur.  
Öncesinde gelen ``Öldürdüðünüz`` veya ``Öldüðünüz`` kelimesinin uzunluðuna göre hiza alýr.  
Bunu hizalamak için ``: <src.kills>`` ile ``: <src.deaths>`` deðerlerine ayrý bir dtext atarýz.
````
dtext 20 20 0481 Öldürdüðünüz
dtext 120 20 0481 : <src.kills>
dtext 20 40 0481 Öldüðünüz
dtext 120 40 0481 <src.deaths>
````
Görüntüyü düzeletelim derken de kodlama uzar gider. ``input`` yöntemi ile hem görüntü kirliliðini hem de kodlamanýn uzamasýný engelleyebilirsiniz. Üstelik anlaþýlýr olarak..  
````
input "dtext 20 20 0481 Öldürdüðünüz", "dtext 120 20 0481 : <src.kills>"
input "dtext 20 40 0481 Öldüðünüz", "dtext 120 40 0481 : <src.deaths>"
````
Dorigin eklenmiþtir ve opsiyoneldir, sonraki elemanlarda + - deðerleri kullanýlabilir.
````
input "dtext 20 20 0481 Öldürdüðünüz", "dtext **+100 -** 0481 : <src.kills>"
input "dtext 20 40 0481 Öldüðünüz", "dtext **+100 -** 0481 : <src.deaths>"
````
Button ve dtext ile yapýlmýþ farklý bir örnek aþaðýdadýr.
````
input "button 15 10 210 211 1 0 1, "dtext +25 - 0481 Britain"
input "button 15 30 210 211 1 0 2, "dtext +25 - 0481 Minoc"
input "button 15 50 210 211 1 0 3, "dtext +25 - 0481 Vesper"
input "button 15 70 210 211 1 0 4, "dtext +25 - 0481 Yew"
input "button 15 90 210 211 1 0 5, "dtext +25 - 0481 Moonglow"
````
Yukarýdaki örnekten de anlaþýlacaðý gibi, normalde 8 satýr olmasý gereken ve hangi buttonun hangi yazýya denk geldiðini öðrenmek için verilen uðraþlarýn yerine bu basit fonksiyon hazýrlanmýþtýr.

