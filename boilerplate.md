### BoilerPlate Fonksiyonlar
**mdialog**  
Dialog'u kapatýp açar

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
Numerik deðeri ondalýk olarak gösterir ``<seperate 3000>`` 3.000

**iscriminal**  
genel olarak suçlu olup olmadýðýný sorgular ``if <iscriminal>`` <uid> = sorgulanan

**iscrime**  
sorgulanan kiþiye, sorgulanan kiþinin suçlu olup olmadýðýný sorgular ``if <target.iscrime <uid>>`` <target> = sorgulanan, <uid> = sorgulayan
````
if (<src.targ.iscrime <src>>)
	src.sysmessage @,,1 Suçlu
else
	src.sysmessage @,,1 Suçsuz
endif
````

**iskarma**  
karma (gri) olup olmadýðýný sorgular ``if <iskarma>`` <uid> = sorgulanan

**ismurder**  
katil (kýrmýzý) olup olmadýðýný sorgular ``if <ismurder>`` <uid> = sorgulanan

**isally**  
sorgulanan kiþiye, sorgulanan kiþinin dost olup olmadýðýný sorgular ``if <target.isally <uid>>`` <target> = sorgulanan, <uid> = sorgulayan

**isenemy**  
sorgulanan kiþiye, sorgulanan kiþinin düþman olup olmadýðýný sorgular ``if <target.isenemy <uid>>`` <target> = sorgulanan, <uid> = sorgulayan