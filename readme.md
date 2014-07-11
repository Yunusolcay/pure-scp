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
