### BoilerPlate Fonksiyonlar
**mdialog**  
Dialog'u kapatýp açar

**elem**
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
**max**  
Ýki deðer arasýnda ``<max 5,9>`` maksimim deðeri verir

**min** 
Ýki deðer arasýnda ``<min 2,6>`` maksimim deðeri verir

**pay**  
Girilen deðer kadar GP alýr ``pay 25000``
Olumlu sorgu için ``if <pay 25000>``

**isalfa**  
Sorgulanan deðerin alfabetik olup-olmadýðýný sorgular ``if <isalfa lorem>``

**isnumber**  
Sorgulanan deðerin numerik olup-olmadýðýný sorgular ``if <isalfa lorem>``

**spellcircle**  
Sorgulanan büyünün sayfa sayýsýný verir ``<spellcircle 17>``

**freeze**  
Verilen deðer*10 kadar oyuncuyu dondurur, 3 saniye için ``freeze 30``

**clearevents**  
Tüm event'leri temizler

**closealldialogs**  
Tüm dialog'larý kapatýr

**logout**  
Oyundan çýkarýr

**clearkeys**  
Ev veya gemi kaldýrýldýðýnda tüm anahtarlarýný temizler

**cancel**  
Herhangi bir eylemden çýkan target'i iptal eder

**ucfirst**  
Kelimenin ilk harfini büyütür

**ucwords**  
Cümledeki tüm kelimelerin ilk harfini büyütür

**uppercase**  
Tüm harfleri büyütür

**lowercase**  
Tüm harfleri ufaltýr

**array**  
Deðerin, virgülle ayrýlmýþ deðer içinden çekip-alýnmasýna yarar (zero-based)  
Alýnacak deðer : 1  
Alýnacaðý yer = tag/local/def : ``lorem, ipsum, sit, amet``  
Kullanýmý: ``<array 1, <tag>>``  
Dönen deðer : ``ipsum``  
Yukarýdaki tag\local\def için ``lorem = 0, ipsum = 1, sit = 2, amet = 3``

**inarray**  
Deðerin, virgüllerle ayrýlmýþ bir deðerde olup olmadýðýný sorgular, varsa sýrasýný verir (one-based)  
Aranan deðer: ``sit``  
Aranacaðý yer: ``lorem, ipsum, sit, amet``  
Kullanýmý: ``if <inarray sit, lorem, ipsum, sit, amet>``  
Dönen deðer: ``3``

**seperate**  
Numerik deðeri ondalýk olarak gösterir ``<seperate 3000>`` = 3.000 ``<seperate 1262326>`` = 1.262.326

**iscriminal**  
Genel olarak suçlu olup olmadýðýný sorgular ``if <iscriminal>`` <uid> = sorgulanan

**iscrime**  
Sorgulanan kiþiye, sorgulanan kiþinin suçlu olup olmadýðýný sorgular ``if <target.iscrime <uid>>`` <target> = sorgulanan, <uid> = sorgulayan
````
if (<src.targ.iscrime <src>>)
	src.sysmessage @,,1 Suçlu
else
	src.sysmessage @,,1 Suçsuz
endif
````

**iskarma**  
Karma (gri) olup olmadýðýný sorgular ``if <iskarma>`` <uid> = sorgulanan

**ismurder**  
Katil (kýrmýzý) olup olmadýðýný sorgular ``if <ismurder>`` <uid> = sorgulanan

**isally**  
Sorgulanan kiþiye, sorgulanan kiþinin dost olup olmadýðýný sorgular ``if <target.isally <uid>>`` <target> = sorgulanan, <uid> = sorgulayan

**isenemy**  
Sorgulanan kiþiye, sorgulanan kiþinin düþman olup olmadýðýný sorgular ``if <target.isenemy <uid>>`` <target> = sorgulanan, <uid> = sorgulayan

**amessage**  
Aos tarzý yukarý kayan yazý için (sadece rakam kullanýlabilir) ``amessage 30``  
Düz sarý, karþýya gönderildiðinde kýrmýzý yazar

**psound**  
Sadece eylemi yapan, etraftan yani baþka oyuncular tarafýndan duyulmayan ses çýkarýr ``psound 25``

