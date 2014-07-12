### Arayüz Fonksiyonlarý ve Ayarlarý
#### mdialog
Dialog'u kapatýp açar.  
``mdialog d_dialog``

#### background
Arayüz arka planýný belirler. Normalde þu þekilde kullanýlan ``resizepic`` ve 5'er piksellik iç çerçeve için ``checkertrans``
````
resizepic 0 0 3500 200 250
checkertrans 5 5 190 240
````
Þu þekilde daha kolay ve anlaþýlýr þekilde kullanýlabilir
````
background 3500 200 250, transparent 5 5
````

#### ibutton
Stil atanmýþ buttonlardýr. Çoðaltýlabilir. Kullanýldýðý tüm yerde 210 211 buttonunu gösterir. **input** ile birlikte kullanýlabilir
````
[function ibutton]
local._button '210 211'
button <argn1> <argn2> <local._button> 1 0 <argn3>
````
``ibutton 15 10 1`` x y id

#### <small> <small/>
Arayüzden ``htmlgump`` elemanýnda kullanýnabilen **ufak** yazý stil fonksiyonudur.

#### <big> <big/>
Arayüzden ``htmlgump`` elemanýnda kullanýnabilen **büyük** yazý stil fonksiyonudur.

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
Görüntüyü düzeletelim derken de kodlama uzar gider. **input** yöntemi ile hem görüntü kirliliðini hem de kodlamanýn uzamasýný engelleyebilirsiniz. Üstelik anlaþýlýr olarak..  
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



Kullanýmý için sadece x y id deðerlerinin girilmesi yeterlidir.  
````
mbutton 15 300 1
````

input ile kullanýlýþý  
````
input "mbutton 15 300 1, "dtext +5 - 0481 Týkla"
````
**