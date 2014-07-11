### BoilerPlate Fonksiyonlar
**mdialog**  
Dialog'u kapat�p a�ar

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
Numerik de�eri ondal�k olarak g�sterir ``<seperate 3000>`` 3.000

**iscriminal**  
genel olarak su�lu olup olmad���n� sorgular ``if <iscriminal>`` <uid> = sorgulanan

**iscrime**  
sorgulanan ki�iye, sorgulanan ki�inin su�lu olup olmad���n� sorgular ``if <target.iscrime <uid>>`` <target> = sorgulanan, <uid> = sorgulayan
````
if (<src.targ.iscrime <src>>)
	src.sysmessage @,,1 Su�lu
else
	src.sysmessage @,,1 Su�suz
endif
````

**iskarma**  
karma (gri) olup olmad���n� sorgular ``if <iskarma>`` <uid> = sorgulanan

**ismurder**  
katil (k�rm�z�) olup olmad���n� sorgular ``if <ismurder>`` <uid> = sorgulanan

**isally**  
sorgulanan ki�iye, sorgulanan ki�inin dost olup olmad���n� sorgular ``if <target.isally <uid>>`` <target> = sorgulanan, <uid> = sorgulayan

**isenemy**  
sorgulanan ki�iye, sorgulanan ki�inin d��man olup olmad���n� sorgular ``if <target.isenemy <uid>>`` <target> = sorgulanan, <uid> = sorgulayan