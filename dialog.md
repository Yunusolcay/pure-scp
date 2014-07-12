### Arayüz Fonksiyonlarý
#### mdialog
Dialog'u kapatýp açar.  
``mdialog d_dialog``

#### iresizepic
Arayüz arka planýný belirler. Normalde þu þekilde kullanýlan ``resizepic`` ve 5'er piksellik iç çerçeve için ``checkertrans``
````
resizepic 0 0 3500 200 250
checkertrans 5 5 190 240
````
Þu þekilde daha kolay ve anlaþýlýr þekilde kullanýlabilir
````
iresizepic 3500 200 250, transparent 5 5
````

#### elem
Dialog'a tek satýrda elemanlar ekler (dtext, button, radio vs.)  
Dorigin opsiyoneldir, sonraki elemanlarda + - deðerleri kullanýlabilir
````
elem "dtext 20 40 0481 Baþlýk", "dtext +20 - 55 : Ýçerik"
elem "button 15 300 210 211 1 0 1, "dtext +5 - 0481 Týkla"
````
Sonradan fonksiyon olarak özelleþtirilmiþ ve eklenmiþ elemanlar eklenebilir  

Özelleþtirilmiþ buton için örnek fonksiyon. Kullanýldýðý tüm yerde 210 211 butonunu gösterir  
````
[function mbutton]
local._button '210 211'
button <argn1> <argn2> <local._button> 1 0 <argn3>
````

Kullanýmý için sadece x y id deðerlerinin girilmesi yeterlidir.  
````
mbutton 15 300 1
````

elem ile kullanýlýþý  
````
elem "mbutton 15 300 1, "dtext +5 - 0481 Týkla"
````
**