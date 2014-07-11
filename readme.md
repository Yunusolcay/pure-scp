# Pure Sphere Scripting
## Açıklama
Bu projeye Sphere Scripting baz alınarak girişilmiştir. Amacı sade kodlamadır. Fazlalık gibi görülen, bunca yıl tecrübeyle sabit olarak kullanılmayan eşyaları, yaratıkları vb. kodları silerek sadeliğe yönelmek başlıca hedeflerindendir.

Arandığında ne nerde en çabuk şekilde ulaşılabilmeli, BoilerPlate kodlar ile kod yazımında ki kolaylığı maksimuma çıkarmaktır.

## Kurulum
Pure-SCP ``SphereServer Nightly Automated SVN`` kullanır. Olası ``güncellemeler`` özenle incelenerek devam eden bu projeye entegre edilir. Nightly versiyon release edildiğinde Pure-SCP ile geçişte hiçbir problem yaşanmaması sağlanmıştır., simply run `bower install zepto-full` within your terminal.

## BoilerPlate
Yarasız gibi görülen ufak kod parçalarıdır ve projede büyük rol oynar. Bir kodu tekrar tekrar yazmamamız için bu yola başvurulmuş ve bundan sondaki kodlamalar bu yönde yapılacaktır.

### BoilerPlate Kodlar
**mdialog**  
Dialog'u kapatıp açar

**max**  
İki değer arasında ``<max 5,9>`` maksimim değeri verir

**min** 
İki değer arasında ``<min 2,6>`` maksimim değeri verir

**pay**<br />
Girilen değer kadar GP alır ``pay 25000``
Olumlu sorgu için ``if <pay 25000>``

**isalfa**<br />
Sorgulanan değerin alfabetik olup-olmadığını sorgular ``if <isalfa lorem>``

**isnumber**<br />
Sorgulanan değerin numerik olup-olmadığını sorgular ``if <isalfa lorem>``

**spellcircle**<br />
Sorgulanan büyünün sayfa sayısını verir ``<spellcircle 17>``

**freeze**<br />
Verilen değer*10 kadar oyuncuyu dondurur, 3 saniye için ``freeze 30``

**clearevents**<br />
Tüm event'leri temizler

**closealldialogs**<br />
Tüm dialog'ları kapatır

**logout**<br />
Oyundan çıkarır

**clearkeys**<br />
Ev veya gemi kaldırıldığında tüm anahtarlarını temizler

**cancel**<br />
Herhangi bir eylemden çıkan target'i iptal eder

**ucfirst**<br />
Kelimenin ilk harfini büyütür

**ucwords**<br />
Cümledeki tüm kelimelerin ilk harfini büyütür

**uppercase**<br />
Tüm harfleri büyütür

**lowercase**<br />
Tüm harfleri ufaltır

**array**
**inarray**<br />
Değerin, virgüllerle ayrılmış bir değerde olup olmadığını sorgular, varsa sırasını verir<br />
Aranan değer: ``sit``<br />
Aranacağı yer: ``lorem, ipsum, sit, amet``<br />
Kullanımı: ``if <inarray sit, lorem, ipsum, sit, amet>``<br />
Dönen değer: ``3``<br />

**seperate**<br />
Numerik değeri ondalık olarak gösterir ``<seperate 3000>`` 3.000

**iscriminal**<br />
genel olarak suçlu olup olmadığını sorgular ``if <iscriminal>`` <uid> = sorgulanan

**iscrime**<br />
sorgulanan kişiye, sorgulanan kişinin suçlu olup olmadığını sorgular ``if <target.iscrime <uid>>`` <target> = sorgulanan, <uid> = sorgulayan
````
if (<src.targ.iscrime <src>>)
	src.sysmessage @,,1 Suçlu
else
	src.sysmessage @,,1 Suçsuz
endif
````

**iskarma**<br />
karma (gri) olup olmadığını sorgular ``if <iskarma>`` <uid> = sorgulanan

**ismurder**<br />
katil (kırmızı) olup olmadığını sorgular ``if <ismurder>`` <uid> = sorgulanan

**isally**<br />
sorgulanan kişiye, sorgulanan kişinin dost olup olmadığını sorgular ``if <target.isally <uid>>`` <target> = sorgulanan, <uid> = sorgulayan

**isenemy**<br />
sorgulanan kişiye, sorgulanan kişinin düşman olup olmadığını sorgular ``if <target.isenemy <uid>>`` <target> = sorgulanan, <uid> = sorgulayan
