### BoilerPlate Fonksiyonlar
#### max
Ýki deðer arasýnda ``<max 5,9>`` büyük olan deðeri verir

#### min
Ýki deðer arasýnda ``<min 2,6>`` küçük olan deðeri verir

#### pay
Girilen deðer kadar GP alýr ``pay 25000``
Olumlu sorgu için ``if <pay 25000>``

#### isalfa
Sorgulanan deðerin alfabetik olup-olmadýðýný sorgular ``if <isalfa lorem>``

#### isnumber
Sorgulanan deðerin numerik olup-olmadýðýný sorgular ``if <isalfa lorem>``

#### spellcircle
Sorgulanan büyünün sayfa sayýsýný verir ``<spellcircle 17>``

#### spellresources
Sorgulanan büyünün sayfa sayýsýný verir ``<spellresources 17>``

#### freeze
Verilen deðer*10 kadar oyuncuyu dondurur, 3 saniye için ``freeze 30``

#### clearevents
Tüm event'leri temizler

#### closedialogs
Tüm dialog'larý kapatýr

#### clearkeys
Ev veya gemi kaldýrýldýðýnda tüm anahtarlarýný temizler

#### hasclass
Oyunca, sorgulanan class'ýn olup-olmadýðý deðeri verir ( 0/1 )

#### hasevent
Oyunca, sorgulanan event'in olup-olmadýðý deðeri verir ( 0/1 )  
``if <src.hasevent e_profile>``

#### hastag / hasctag
Oyunca, sorgulanan tag veya ctag'ýn olup-olmadýðý deðeri verir ( 0/1 )  
``if <src.hastag color>``

#### ucfirst
Kelimenin ilk harfini büyütür

#### ucwords
Cümledeki tüm kelimelerin ilk harfini büyütür

#### uppercase
Tüm harfleri büyütür

#### lowercase
Tüm harfleri ufaltýr

#### array
Deðerin, virgülle ayrýlmýþ deðer içinden çekip-alýnmasýna yarar (zero-based)  
Alýnacak deðer : 1  
Alýnacaðý yer = tag/local/def : ``lorem, ipsum, sit, amet``  
Kullanýmý: ``<array 1, <tag>>``  
Dönen deðer : ``ipsum``  
Yukarýdaki tag\local\def için ``lorem = 0, ipsum = 1, sit = 2, amet = 3``

#### inarray
Deðerin, virgüllerle ayrýlmýþ bir deðerde olup olmadýðýný sorgular, varsa sýrasýný verir (one-based)  
Aranan deðer: ``sit``  
Aranacaðý yer: ``lorem, ipsum, sit, amet``  
Kullanýmý: ``if <inarray sit, lorem, ipsum, sit, amet>``  
Dönen deðer: ``3``

#### seperate
Numerik deðeri ondalýk olarak gösterir ``<seperate 3000>`` = 3.000 ``<seperate 1262326>`` = 1.262.326

#### iscriminal
Genel olarak suçlu olup olmadýðýný sorgular ``if <iscriminal>`` <uid> = sorgulanan

#### iscrime
Sorgulanan kiþiye, sorgulanan kiþinin suçlu olup olmadýðýný sorgular ``if <target.iscrime <uid>>`` <target> = sorgulanan, <uid> = sorgulayan
````
if (<src.targ.iscrime <src>>)
	src.sysmessage @,,1 Suçlu
else
	src.sysmessage @,,1 Suçsuz
endif
````

#### iskarma
Karma (gri) olup olmadýðýný sorgular ``if <iskarma>`` <uid> = sorgulanan

#### ismurder
Katil (kýrmýzý) olup olmadýðýný sorgular ``if <ismurder>`` <uid> = sorgulanan

#### isally
Sorgulanan kiþiye, sorgulanan kiþinin dost olup olmadýðýný sorgular ``if <target.isally <uid>>`` <target> = sorgulanan, <uid> = sorgulayan

#### isenemy
Sorgulanan kiþiye, sorgulanan kiþinin düþman olup olmadýðýný sorgular ``if <target.isenemy <uid>>`` <target> = sorgulanan, <uid> = sorgulayan

#### except
Rasgetle sayý üretirken, belirlenen sayýlarý saf dýþý býrakýr  
r10 içinde 1 2 3 hariç rand sayý döndürür (<r1,10> da kullanýlabilir)  
````
except <r10>, 1, 2, 3
````

#### ispoisoned
Sorgulanan oyuncunun zehirlenip zehirlenmediðini gösterir ( 0/1 )