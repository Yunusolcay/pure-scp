### Aray�z Fonksiyonlar�
#### mdialog
Dialog'u kapat�p a�ar.  
``mdialog d_dialog``

#### iresizepic
Aray�z arka plan�n� belirler. Normalde �u �ekilde kullan�lan ``resizepic`` ve 5'er piksellik i� �er�eve i�in ``checkertrans``
````
resizepic 0 0 3500 200 250
checkertrans 5 5 190 240
````
�u �ekilde daha kolay ve anla��l�r �ekilde kullan�labilir
````
iresizepic 3500 200 250, transparent 5 5
````

#### elem
Dialog'a tek sat�rda elemanlar ekler (dtext, button, radio vs.)  
Dorigin opsiyoneldir, sonraki elemanlarda + - de�erleri kullan�labilir
````
elem "dtext 20 40 0481 Ba�l�k", "dtext +20 - 55 : ��erik"
elem "button 15 300 210 211 1 0 1, "dtext +5 - 0481 T�kla"
````
Sonradan fonksiyon olarak �zelle�tirilmi� ve eklenmi� elemanlar eklenebilir  

�zelle�tirilmi� buton i�in �rnek fonksiyon. Kullan�ld��� t�m yerde 210 211 butonunu g�sterir  
````
[function mbutton]
local._button '210 211'
button <argn1> <argn2> <local._button> 1 0 <argn3>
````

Kullan�m� i�in sadece x y id de�erlerinin girilmesi yeterlidir.  
````
mbutton 15 300 1
````

elem ile kullan�l���  
````
elem "mbutton 15 300 1, "dtext +5 - 0481 T�kla"
````
**