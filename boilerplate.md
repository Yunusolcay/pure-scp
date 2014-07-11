### BoilerPlate Fonksiyonlar
**mdialog**  
Dialog'u kapat�p a�ar

**elem**
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
**max**  
�ki de�er aras�nda ``<max 5,9>`` maksimim de�eri verir

**min** 
�ki de�er aras�nda ``<min 2,6>`` maksimim de�eri verir

**pay**  
Girilen de�er kadar GP al�r ``pay 25000``
Olumlu sorgu i�in ``if <pay 25000>``

**isalfa**  
Sorgulanan de�erin alfabetik olup-olmad���n� sorgular ``if <isalfa lorem>``

**isnumber**  
Sorgulanan de�erin numerik olup-olmad���n� sorgular ``if <isalfa lorem>``

**spellcircle**  
Sorgulanan b�y�n�n sayfa say�s�n� verir ``<spellcircle 17>``

**freeze**  
Verilen de�er*10 kadar oyuncuyu dondurur, 3 saniye i�in ``freeze 30``

**clearevents**  
T�m event'leri temizler

**closealldialogs**  
T�m dialog'lar� kapat�r

**logout**  
Oyundan ��kar�r

**clearkeys**  
Ev veya gemi kald�r�ld���nda t�m anahtarlar�n� temizler

**cancel**  
Herhangi bir eylemden ��kan target'i iptal eder

**ucfirst**  
Kelimenin ilk harfini b�y�t�r

**ucwords**  
C�mledeki t�m kelimelerin ilk harfini b�y�t�r

**uppercase**  
T�m harfleri b�y�t�r

**lowercase**  
T�m harfleri ufalt�r

**array**  
De�erin, virg�lle ayr�lm�� de�er i�inden �ekip-al�nmas�na yarar (zero-based)  
Al�nacak de�er : 1  
Al�naca�� yer = tag/local/def : ``lorem, ipsum, sit, amet``  
Kullan�m�: ``<array 1, <tag>>``  
D�nen de�er : ``ipsum``  
Yukar�daki tag\local\def i�in ``lorem = 0, ipsum = 1, sit = 2, amet = 3``

**inarray**  
De�erin, virg�llerle ayr�lm�� bir de�erde olup olmad���n� sorgular, varsa s�ras�n� verir (one-based)  
Aranan de�er: ``sit``  
Aranaca�� yer: ``lorem, ipsum, sit, amet``  
Kullan�m�: ``if <inarray sit, lorem, ipsum, sit, amet>``  
D�nen de�er: ``3``

**seperate**  
Numerik de�eri ondal�k olarak g�sterir ``<seperate 3000>`` = 3.000 ``<seperate 1262326>`` = 1.262.326

**iscriminal**  
Genel olarak su�lu olup olmad���n� sorgular ``if <iscriminal>`` <uid> = sorgulanan

**iscrime**  
Sorgulanan ki�iye, sorgulanan ki�inin su�lu olup olmad���n� sorgular ``if <target.iscrime <uid>>`` <target> = sorgulanan, <uid> = sorgulayan
````
if (<src.targ.iscrime <src>>)
	src.sysmessage @,,1 Su�lu
else
	src.sysmessage @,,1 Su�suz
endif
````

**iskarma**  
Karma (gri) olup olmad���n� sorgular ``if <iskarma>`` <uid> = sorgulanan

**ismurder**  
Katil (k�rm�z�) olup olmad���n� sorgular ``if <ismurder>`` <uid> = sorgulanan

**isally**  
Sorgulanan ki�iye, sorgulanan ki�inin dost olup olmad���n� sorgular ``if <target.isally <uid>>`` <target> = sorgulanan, <uid> = sorgulayan

**isenemy**  
Sorgulanan ki�iye, sorgulanan ki�inin d��man olup olmad���n� sorgular ``if <target.isenemy <uid>>`` <target> = sorgulanan, <uid> = sorgulayan

**amessage**  
Aos tarz� yukar� kayan yaz� i�in (sadece rakam kullan�labilir) ``amessage 30``  
D�z sar�, kar��ya g�nderildi�inde k�rm�z� yazar

**psound**  
Sadece eylemi yapan, etraftan yani ba�ka oyuncular taraf�ndan duyulmayan ses ��kar�r ``psound 25``

