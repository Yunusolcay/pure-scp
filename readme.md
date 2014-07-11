# Pure Sphere Scripting
## Açıklama
Bu projeye Sphere Scripting baz alınarak girişilmiştir. Amacı sade kodlamadır. Fazlalık gibi görülen, bunca yıl tecrübeyle sabit olarak kullanılmayan eşyaları, yaratıkları vb. kodları silerek sadeliğe yönelmek başlıca hedeflerindendir.

Arandığında ne nerde en çabuk şekilde ulaşılabilmeli, BoilerPlate kodlar ile kod yazımında ki kolaylığı maksimuma çıkarmaktır.

## Kurulum
Pure-SCP ``SphereServer Nightly Automated SVN`` kullanır. Olası ``güncellemeler`` özenle incelenerek devam eden bu projeye entegre edilir. Nightly versiyon release edildiğinde Pure-SCP ile geçişte hiçbir problem yaşanmaması sağlanmıştır., simply run `bower install zepto-full` within your terminal.

## BoilerPlate Kodlama
Yarasız gibi görülen ufak kod parçalarıdır ve projede büyük rol oynar. Bir kodu tekrar tekrar yazmamamız için bu yola başvurulmuş ve bundan sondaki kodlamalar bu yönde yapılacaktır.

### Kodlar
**mdialog**
Dialog'u kapatıp açar

**max**
İki değer arasında ``<max 5,9>`` maksimim değeri verir

**min**
İki değer arasında ``<min 2,6>`` maksimim değeri verir

**pay**
Girilen değer kadar GP alır ``pay 25000``
Olumlu sorgu için ``if <pay 25000>``

**isalfa**
Sorgulanan değerin alfabetik olup-olmadığını sorgular ``if <isalfa lorem>``

**isnumber**
Sorgulanan değerin numerik olup-olmadığını sorgular ``if <isalfa lorem>``

**spellcircle**
Sorgulanan büyünün sayfa sayısını verir ``<spellcircle 17>``

**freeze**
Verilen değer*10 kadar oyuncuyu dondurur, 3 saniye için ``freeze 30``

**clearevents**
Tüm event'leri temizler

**closealldialogs**
Tüm dialog'ları kapatır

**logout**
Oyundan çıkarır

**clearkeys**
Ev veya gemi kaldırıldığında tüm anahtarlarını temizler

**cancel**
Herhangi bir eylemden çıkan target'i iptal eder

**ucfirst**
Kelimenin ilk harfini büyütür

**ucwords**
Cümledeki tüm kelimelerin ilk harfini büyütür

**uppercase**
Tüm harfleri büyütür

**lowercase**
Tüm harfleri ufaltır

**inarray**
Değerin, virgüllerle ayrılmış bir değerde olup olmadığını sorgular, varsa sırasını verir
Aranan değer: ``sit``
Aranacağı yer: ``lorem, ipsum, sit, amet``
Kullanımı: ``if <inarray sit, lorem, ipsum, sit, amet>``
Dönen değer: ``3``

**seperate**
Numerik değeri ondalık olarak gösterir ``<seperate 3000>`` 3.000

**iscriminal**
genel olarak suçlu olup olmadığını sorgular ``if <iscriminal>`` <uid> = sorgulanan

**iscrime**
sorgulanan kişiye, sorgulanan kişinin suçlu olup olmadığını sorgular ``if <target.iscrime <uid>>`` <target> = sorgulanan, <uid> = sorgulayan
````
if (<src.targ.iscrime <src>>)
	src.sysmessage @,,1 Suçlu
else
	src.sysmessage @,,1 Suçsuz
endif
````
**iskarma**
karma (gri) olup olmadığını sorgular ``if <iskarma>`` <uid> = sorgulanan

**ismurder**
katil (kırmızı) olup olmadığını sorgular ``if <ismurder>`` <uid> = sorgulanan

**isally**
sorgulanan kişiye, sorgulanan kişinin dost olup olmadığını sorgular ``if <target.isally <uid>>`` <target> = sorgulanan, <uid> = sorgulayan

**isenemy**
sorgulanan kişiye, sorgulanan kişinin düşman olup olmadığını sorgular ``if <target.isenemy <uid>>`` <target> = sorgulanan, <uid> = sorgulayan
