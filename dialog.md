### Aray�z Fonksiyonlar� ve Ayarlar�
#### mdialog
Dialog'u kapat�p a�ar.  
``mdialog d_dialog``

#### background
Aray�z arka plan�n� belirler. Normalde �u �ekilde kullan�lan ``resizepic`` ve 5'er piksellik i� �er�eve i�in ``checkertrans``
````
resizepic 0 0 3500 200 250
checkertrans 5 5 190 240
````
�u �ekilde daha kolay ve anla��l�r �ekilde kullan�labilir
````
background 3500 200 250, transparent 5 5
````

#### ibutton
Stil atanm�� buttonlard�r. �o�alt�labilir. Kullan�ld��� t�m yerde 210 211 buttonunu g�sterir. **input** ile birlikte kullan�labilir
````
[function ibutton]
local._button '210 211'
button <argn1> <argn2> <local._button> 1 0 <argn3>
````
``ibutton 15 10 1`` x y id

#### <small> <small/>
Aray�zden ``htmlgump`` eleman�nda kullan�nabilen **ufak** yaz� stil fonksiyonudur.

#### <big> <big/>
Aray�zden ``htmlgump`` eleman�nda kullan�nabilen **b�y�k** yaz� stil fonksiyonudur.

#### input
Dialog'a tek sat�rda elemanlar ekler (dtext, button, radio vs.) Normal kullan�m �ekli a�a��dad�r.
````
dtext 20 20 0481 �ld�rd���n�z : <src.kills>
dtext 20 40 0481 �ld���n�z : <src.deaths>
````
Fakat yukar�daki kullan�mda ``: <src.kills>`` ve ``: <src.deaths>`` ayn� hizada de�ildir. Aray�zde g�r�nt� kirlili�ine sebep olur.  
�ncesinde gelen ``�ld�rd���n�z`` veya ``�ld���n�z`` kelimesinin uzunlu�una g�re hiza al�r.  
Bunu hizalamak i�in ``: <src.kills>`` ile ``: <src.deaths>`` de�erlerine ayr� bir dtext atar�z.
````
dtext 20 20 0481 �ld�rd���n�z
dtext 120 20 0481 : <src.kills>
dtext 20 40 0481 �ld���n�z
dtext 120 40 0481 <src.deaths>
````
G�r�nt�y� d�zeletelim derken de kodlama uzar gider. **input** y�ntemi ile hem g�r�nt� kirlili�ini hem de kodlaman�n uzamas�n� engelleyebilirsiniz. �stelik anla��l�r olarak..  
````
input "dtext 20 20 0481 �ld�rd���n�z", "dtext 120 20 0481 : <src.kills>"
input "dtext 20 40 0481 �ld���n�z", "dtext 120 40 0481 : <src.deaths>"
````
Dorigin eklenmi�tir ve opsiyoneldir, sonraki elemanlarda + - de�erleri kullan�labilir.
````
input "dtext 20 20 0481 �ld�rd���n�z", "dtext **+100 -** 0481 : <src.kills>"
input "dtext 20 40 0481 �ld���n�z", "dtext **+100 -** 0481 : <src.deaths>"
````
Button ve dtext ile yap�lm�� farkl� bir �rnek a�a��dad�r.
````
input "button 15 10 210 211 1 0 1, "dtext +25 - 0481 Britain"
input "button 15 30 210 211 1 0 2, "dtext +25 - 0481 Minoc"
input "button 15 50 210 211 1 0 3, "dtext +25 - 0481 Vesper"
input "button 15 70 210 211 1 0 4, "dtext +25 - 0481 Yew"
input "button 15 90 210 211 1 0 5, "dtext +25 - 0481 Moonglow"
````
Yukar�daki �rnekten de anla��laca�� gibi, normalde 8 sat�r olmas� gereken ve hangi buttonun hangi yaz�ya denk geldi�ini ��renmek i�in verilen u�ra�lar�n yerine bu basit fonksiyon haz�rlanm��t�r.



Kullan�m� i�in sadece x y id de�erlerinin girilmesi yeterlidir.  
````
mbutton 15 300 1
````

input ile kullan�l���  
````
input "mbutton 15 300 1, "dtext +5 - 0481 T�kla"
````
**