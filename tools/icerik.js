// --- STATİK SAYFA İÇERİKLERİ ---
// Kategori sayfası metinleri, sık sorulan sorular ve hizmet bölgesi (şehir) sayfaları.
// tools/sayfa-uret.js bu dosyayı okuyup HTML sayfalarını üretir.

const firma = {
    ad: 'Avcı İnşaat Makine ve Teknik Servis',
    site: 'https://avcimakine.com',
    telefon: '+905367281833',
    telefonGorunen: '0536 728 18 33',
    whatsapp: '905367281833',
    email: 'selcukavcilar1970@gmail.com',
    konum: 'Nilüfer / Bursa',
    calismaSaatleri: 'Pazartesi - Cumartesi 08:00 - 18:00'
};

// Kategori sayfaları: başlık, açıklama, uzun metin, SSS ve ürün sayfalarında kullanılan "kullanım alanları"
const kategoriIcerik = {
    'bukme': {
        title: 'Demir Bükme Makinesi Fiyatları ve Modelleri | Avcı İnşaat Makine',
        description: 'İnşaat demiri bükme makinesi modelleri: Afacan ve Yakar 18, 20, 22, 24 mm demir bükme makineleri. Bursa merkezli, Türkiye geneli teslimat. WhatsApp\'tan hızlı fiyat alın.',
        h1: 'Demir Bükme Makinesi',
        intro: [
            'Demir bükme makinesi, inşaat demirini (nervürlü betonarme çeliği) istenen açıda ve ölçüde bükmek için kullanılır. Şantiyede etriye, kanca, filiz ve pilye gibi donatı parçalarının elle uğraşmadan, hızlı ve hep aynı ölçüde hazırlanmasını sağlar.',
            'Avcı İnşaat Makine olarak Afacan ve Yakar markalarının 18 mm\'den 24 mm\'ye kadar farklı kapasitelerdeki demir bükme makinelerini satıyoruz. Bursa\'dan Türkiye\'nin her iline gönderim yapıyoruz; güncel fiyat ve stok bilgisi için WhatsApp\'tan yazmanız yeterli.'
        ],
        rehber: [
            { baslik: 'Demir bükme makinesi seçerken nelere bakılmalı?', maddeler: [
                '<strong>Kapasite (mm):</strong> Makinenin bükebileceği en kalın demir çapıdır. Konut şantiyelerinde çoğunlukla 18-20 mm yeterli olurken, kalın kolon ve temel donatısında 22-24 mm kapasite tercih edilir.',
                '<strong>Motor gücü (kW):</strong> Kalın demiri sık bükecekseniz daha güçlü motor, makinenin zorlanmadan uzun süre çalışmasını sağlar.',
                '<strong>Voltaj (220V / 380V):</strong> Şantiyenizde trifaze elektrik yoksa 220V ile çalışabilen bir model seçmek gerekir.',
                '<strong>Kontrol şekli:</strong> Pedal kontrollü modeller, iki elin demirde kalmasını sağlayarak hem hız hem güvenlik kazandırır.',
                '<strong>Ağırlık ve taşınabilirlik:</strong> Şantiyeden şantiyeye taşınacaksa daha hafif ve kompakt modeller işinizi kolaylaştırır.'
            ]}
        ],
        kullanim: ['Etriye ve çiroz demiri hazırlama', 'Kolon ve kiriş donatısında kanca bükme', 'Temel ve perde donatısı', 'Demir atölyeleri ve prefabrik üretim'],
        sss: [
            { q: 'Demir bükme makinesi fiyatları ne kadar?', a: 'Fiyat; makinenin kapasitesine (18, 20, 22 veya 24 mm), markasına ve güncel stok durumuna göre değişir. Güncel fiyatı öğrenmek için 0536 728 18 33 numarasından WhatsApp\'tan yazabilir veya arayabilirsiniz.' },
            { q: 'Hangi demir bükme makinesini almalıyım?', a: 'En kalın bükeceğiniz demir çapına göre seçim yapın. Çoğunlukla 12-16 mm demirle çalışıyorsanız 18-20 mm kapasiteli bir model yeterlidir; 20 mm üzeri demir sık bükülüyorsa 22-24 mm kapasiteli bir model daha uygun olur.' },
            { q: 'Demir bükme makinesi 220V ile çalışır mı?', a: 'Sitemizdeki Yakar modelleri 220V ile, Afacan modelleri ise 220V/380V seçenekleriyle çalışır. Şantiyenizdeki elektrik durumunu bize söylerseniz size uygun modeli önerelim.' },
            { q: 'Bursa dışına gönderim yapıyor musunuz?', a: 'Evet. Bursa\'dan Türkiye\'nin 81 iline gönderim yapıyoruz. Gönderim şekli ve süresi için WhatsApp\'tan bilgi alabilirsiniz.' }
        ]
    },
    'kesme': {
        title: 'Demir Kesme Makinesi Fiyatları ve Modelleri | Avcı İnşaat Makine',
        description: 'Hidrolik ve portatif demir kesme makinesi: Afacan 22 mm ve F24 24 mm inşaat demiri kesme makineleri. 220V monofaze. Türkiye geneli teslimat, WhatsApp\'tan fiyat alın.',
        h1: 'Demir Kesme Makinesi',
        intro: [
            'Demir kesme makinesi, inşaat demirini taşlamaya ya da oksijene gerek kalmadan, temiz ve hızlı şekilde istenen boyda kesmek için kullanılır. Şantiyede donatı hazırlarken en çok zaman kazandıran makinelerden biridir.',
            'Avcı İnşaat Makine\'de Afacan marka 22 mm ve 24 mm kapasiteli, 220V monofaze çalışan portatif demir kesme makineleri bulunur. Türkiye\'nin her yerine gönderim yapıyoruz.'
        ],
        rehber: [
            { baslik: 'Demir kesme makinesi seçerken nelere bakılmalı?', maddeler: [
                '<strong>Kesme kapasitesi:</strong> Kesmek istediğiniz en kalın demir çapını karşılayan modeli seçin. 22 mm ve 24 mm kapasiteler konut ve orta ölçekli şantiyelerin büyük kısmını karşılar.',
                '<strong>Elektrik bağlantısı:</strong> 220V monofaze modeller, trifaze hat olmayan şantiyelerde de rahatça kullanılır.',
                '<strong>Taşınabilirlik:</strong> Portatif modeller, kesimi demirin olduğu yerde yapmanızı sağlar.',
                '<strong>Kesim kalitesi:</strong> Hidrolik kesim, taşlamaya göre daha az kıvılcım ve daha temiz bir kesim yüzeyi sağlar.'
            ]}
        ],
        kullanim: ['İnşaat demirini boyuna göre kesme', 'Etriye ve filiz için demir hazırlama', 'Demir atölyeleri', 'Tadilat ve güçlendirme işleri'],
        sss: [
            { q: 'Demir kesme makinesi fiyatı ne kadar?', a: 'Fiyat modele ve güncel stoğa göre değişir. 0536 728 18 33 numarasından WhatsApp\'tan yazarak güncel fiyatı hemen öğrenebilirsiniz.' },
            { q: 'Kaç mm demir keser?', a: 'Sitemizdeki Afacan modelleri 22 mm ve 24 mm kalınlığa kadar inşaat demirini keser.' },
            { q: 'Ev elektriği (220V) ile çalışır mı?', a: 'Evet, Afacan 22 mm ve F24 demir kesme makineleri 220V monofaze elektrikle çalışır.' },
            { q: 'Hangi illere gönderiyorsunuz?', a: 'Bursa\'dan Türkiye\'nin tüm illerine gönderim yapıyoruz.' }
        ]
    },
    'vibrator': {
        title: 'Beton Vibratörü (İnşaat Vibratörü) Fiyatları | Avcı İnşaat Makine',
        description: 'Beton vibratörü ve inşaat vibratörü modelleri: Wacker Neuson M-1500, M-2500 ve Enar KMS 180 vibratör motorları, hortum ve şişeler. Türkiye geneli teslimat, WhatsApp\'tan fiyat.',
        h1: 'Beton Vibratörü (İnşaat Vibratörü)',
        intro: [
            'Beton vibratörü, halk arasında inşaat vibratörü ya da beton titreşim makinesi olarak da bilinir. Kalıba dökülen taze betonun içindeki hava boşluklarını alır, betonun donatının etrafını tamamen sarmasını ve kalıbı eksiksiz doldurmasını sağlar. Böylece daha sağlam, boşluksuz ve düzgün yüzeyli beton elde edilir.',
            'Bir beton vibratörü genellikle üç parçadan oluşur: <strong>vibratör motoru</strong>, motoru şişeye bağlayan <strong>vibratör hortumu</strong> ve betonun içine daldırılan <strong>şişe</strong>. Avcı İnşaat Makine\'de Wacker Neuson ve Enar marka vibratör motorları ile uyumlu hortumları bulabilirsiniz.'
        ],
        rehber: [
            { baslik: 'Beton vibratörü seçerken nelere bakılmalı?', maddeler: [
                '<strong>Motor gücü:</strong> 1,5 HP motorlar küçük ve orta döküm işleri için, 2,5-3 HP motorlar ise büyük ve yoğun döküm işleri için tercih edilir.',
                '<strong>Devir (RPM):</strong> Yüksek devir, betonun daha hızlı ve etkili sıkışmasını sağlar.',
                '<strong>Şişe çapı:</strong> Dar kalıp ve sık donatılı kolonlarda daha ince, geniş döşeme ve radyelerde daha kalın şişe kullanılır.',
                '<strong>Hortum uzunluğu:</strong> Motorun beton döküm noktasına ne kadar uzak olacağına göre 4 m veya 5 m hortum seçilir.',
                '<strong>Ağırlık:</strong> Omuz tipi hafif motorlar, döküm sırasında kalıp üzerinde rahat hareket etmeyi sağlar.'
            ]}
        ],
        kullanim: ['Kolon, kiriş ve perde beton dökümü', 'Döşeme ve radye temel dökümü', 'Prefabrik beton üretimi', 'Köprü, istinat duvarı ve altyapı işleri'],
        sss: [
            { q: 'Beton vibratörü fiyatları ne kadar?', a: 'Fiyat; motor gücüne, markasına ve hortum seçimine göre değişir. Güncel fiyat için 0536 728 18 33 numarasından WhatsApp\'tan yazabilirsiniz.' },
            { q: 'İnşaat vibratörü ile beton vibratörü aynı şey mi?', a: 'Evet. İnşaat vibratörü, beton vibratörü ve beton titreşim makinesi aynı makine için kullanılan farklı isimlerdir.' },
            { q: 'Vibratör motoru ile hortumu ayrı mı satılıyor?', a: 'Evet, vibratör motorları ve vibratör hortumları ayrı ayrı satılır. Elinizdeki motora uygun hortumu seçmek için motorunuzun markasını ve modelini bize iletmeniz yeterli.' },
            { q: 'Hangi beton vibratörünü almalıyım?', a: 'Konut ve küçük döküm işleri için 1,5 HP Wacker Neuson M-1500 genellikle yeterlidir. Daha büyük ve yoğun döküm yapıyorsanız 2,5 HP M-2500 veya 3 HP Enar KMS 180 daha uygun olur.' },
            { q: 'Türkiye\'nin her yerine gönderiyor musunuz?', a: 'Evet, Bursa\'dan Türkiye\'nin 81 iline beton vibratörü gönderiyoruz.' }
        ]
    },
    'vibrator-hortum': {
        title: 'Beton Vibratör Hortumu ve Şişesi | Avcı İnşaat Makine',
        description: 'Wacker Neuson uyumlu 4 metre ve 5 metre beton vibratör hortumları, Ø45 mm şişe. Kare başlı pimli motor girişi. Türkiye geneli teslimat, WhatsApp\'tan fiyat alın.',
        h1: 'Beton Vibratör Hortumu',
        intro: [
            'Beton vibratör hortumu, vibratör motorunun gücünü betonun içine daldırılan şişeye ileten parçadır. Şişe betonun içinde titreşerek hava boşluklarını alır. Hortum ve şişe, vibratörde en çok yıpranan ve en sık yenilenen parçalardır.',
            'Avcı İnşaat Makine\'de 4 metre ve 5 metre uzunluğunda, Ø45 mm şişe çaplı, kare başlı pimli motor girişine sahip Wacker Neuson vibratör hortumları bulunur.'
        ],
        rehber: [
            { baslik: 'Vibratör hortumu seçerken nelere bakılmalı?', maddeler: [
                '<strong>Motor girişi:</strong> Hortumun motor tarafındaki bağlantısı motorunuza uygun olmalıdır. Sitemizdeki hortumlar kare başlı pimli girişlidir.',
                '<strong>Uzunluk:</strong> Motorun döküm noktasına uzak kaldığı işlerde 5 m, daha yakın işlerde 4 m hortum yeterlidir.',
                '<strong>Şişe çapı:</strong> Ø45 mm şişe, kolon, kiriş ve döşeme gibi genel döküm işlerinde yaygın olarak kullanılır.'
            ]}
        ],
        kullanim: ['Yıpranmış vibratör hortumunun yenilenmesi', 'Yedek hortum olarak şantiyede bulundurma', 'Kolon, kiriş ve döşeme dökümü'],
        sss: [
            { q: 'Vibratör hortumu benim motoruma uyar mı?', a: 'Hortumlarımız kare başlı pimli motor girişlidir. Motorunuzun markasını ve modelini WhatsApp\'tan iletirseniz uyumlu olup olmadığını hemen söyleyelim.' },
            { q: 'Vibratör hortumu fiyatı ne kadar?', a: 'Güncel fiyat için 0536 728 18 33 numarasından WhatsApp\'tan yazabilirsiniz.' },
            { q: '4 metre mi 5 metre mi almalıyım?', a: 'Motoru döküm noktasına yakın koyabiliyorsanız 4 m yeterlidir. Geniş döşemelerde veya motora uzak noktalarda 5 m hortum daha rahat çalışma sağlar.' }
        ]
    },
    'benzinli-kompaktor': {
        title: 'Benzinli Kompaktör (Zemin Sıkıştırma) Fiyatları | Avcı İnşaat Makine',
        description: 'Benzinli kompaktör modelleri: Wacker Neuson MP-12, MP-15, Honda KM-60 ve Afacan 6HP zemin sıkıştırma makineleri. Türkiye geneli teslimat, WhatsApp\'tan fiyat alın.',
        h1: 'Benzinli Kompaktör',
        intro: [
            'Kompaktör, zemini, dolguyu ve asfaltı titreşimle sıkıştırmak için kullanılan bir makinedir. Temel altı dolgusu, kilit parke taşı döşemesi, bahçe ve yol çalışmaları gibi işlerde zeminin oturmasını ve sonradan çökmemesini sağlar.',
            'Avcı İnşaat Makine\'de Wacker Neuson, Honda ve Afacan marka benzinli kompaktörler bulunur. Elektriğin olmadığı açık alanlarda da rahatça çalışırlar.'
        ],
        rehber: [
            { baslik: 'Kompaktör seçerken nelere bakılmalı?', maddeler: [
                '<strong>Santrifüj kuvveti (kN):</strong> Kuvvet arttıkça sıkıştırma derinliği ve etkisi artar.',
                '<strong>Çalışma verimi (m²/saat):</strong> Büyük alanlarda saatte daha fazla alan sıkıştıran model zaman kazandırır.',
                '<strong>Ağırlık:</strong> Hafif modeller taşıma kolaylığı sağlar, ağır modeller daha derin sıkıştırma yapar.',
                '<strong>Motor:</strong> Honda ve Loncin benzinli motorlar sahada yaygın olarak kullanılır ve servis bulmak kolaydır.',
                '<strong>Su haznesi:</strong> Asfalt sıkıştırmada tabana asfalt yapışmasını önlemek için su haznesi işe yarar.'
            ]}
        ],
        kullanim: ['Temel altı ve dolgu sıkıştırma', 'Kilit parke taşı döşeme', 'Yol, otopark ve kaldırım çalışmaları', 'Asfalt yama ve tamir işleri'],
        sss: [
            { q: 'Kompaktör fiyatları ne kadar?', a: 'Fiyat; markaya, motor gücüne ve sıkıştırma kuvvetine göre değişir. 0536 728 18 33 numarasından WhatsApp\'tan güncel fiyat alabilirsiniz.' },
            { q: 'Hangi kompaktörü almalıyım?', a: 'Parke taşı ve hafif dolgu işleri için 12-13 kN kuvvetli bir model yeterlidir. Daha kalın dolgu ve büyük alanlarda 15 kN Wacker Neuson MP-15 gibi daha güçlü modeller tercih edilir.' },
            { q: 'Kompaktörler elektrikli mi benzinli mi?', a: 'Sitemizdeki kompaktörlerin hepsi benzinlidir; elektriğin olmadığı şantiyelerde de çalışır.' },
            { q: 'Türkiye geneline gönderim var mı?', a: 'Evet, Bursa\'dan Türkiye\'nin tüm illerine kompaktör gönderiyoruz.' }
        ]
    },
    'ciroz': {
        title: 'Çiroz (Kalıp Kilidi) Fiyatı - Afacan 4 mm Çiroz | Avcı İnşaat Makine',
        description: 'Afacan 4 mm galvaniz ve toz boyalı çiroz kalıp kilidi. 50\'li çuval, 20 kg. Kalıp sıkma işleri için. Türkiye geneli teslimat, WhatsApp\'tan fiyat alın.',
        h1: 'Çiroz (Kalıp Kilidi)',
        intro: [
            'Çiroz, beton kalıplarını birbirine sıkıca bağlamak ve beton dökümü sırasında kalıbın açılmasını önlemek için kullanılan bir kalıp kilididir. Özellikle kolon, kiriş ve perde kalıplarında kullanılır.',
            'Avcı İnşaat Makine\'de Afacan marka 4 mm kalınlığında, galvaniz kaplamalı ve toz boyalı çirozlar 50 adetlik çuvallar halinde bulunur.'
        ],
        rehber: [
            { baslik: 'Çiroz alırken nelere dikkat edilmeli?', maddeler: [
                '<strong>Kalınlık:</strong> 4 mm kalınlık, dayanıklılık ve kullanım kolaylığı arasında iyi bir denge sağlar.',
                '<strong>Kaplama:</strong> Galvaniz kaplama paslanmayı geciktirir, çirozun defalarca kullanılmasını sağlar.',
                '<strong>Taban ve sıkma aralığı:</strong> Kalıp kalınlığınıza uygun taban ve sıkma ölçüsünü seçin.'
            ]}
        ],
        kullanim: ['Kolon ve kiriş kalıplarını sabitleme', 'Perde beton kalıpları', 'Kalıpçı ekiplerinin günlük kullanımı'],
        sss: [
            { q: 'Çiroz fiyatı ne kadar?', a: 'Çiroz 50 adetlik çuvallar halinde satılır. Güncel çuval fiyatı için 0536 728 18 33 numarasından WhatsApp\'tan yazabilirsiniz.' },
            { q: 'Bir çuvalda kaç adet çiroz var?', a: 'Afacan 4 mm çiroz çuvalında 50 adet bulunur, çuval yaklaşık 20 kg gelir.' },
            { q: 'Toptan çiroz alabilir miyim?', a: 'Evet, çoklu çuval siparişleri için WhatsApp\'tan bilgi alabilirsiniz.' }
        ]
    },
    'el-aletleri': {
        title: 'Akülü El Aletleri ve Matkap Seti | Avcı İnşaat Makine',
        description: 'Kimmer Plus 21V 5\'li akülü matkap seti: kırıcı delici, taşlama, somun sıkma, vidalama ve budama testeresi. 2 akü, çanta dahil. Türkiye geneli teslimat.',
        h1: 'El Aletleri',
        intro: [
            'Şantiyede, atölyede ve tadilat işlerinde en çok ihtiyaç duyulan el aletlerini tek bir sette toplamak hem maliyet hem de taşıma kolaylığı sağlar. Ortak akü kullanan setlerde aynı aküyle birden fazla alet çalıştırılabilir.',
            'Avcı İnşaat Makine\'de Kimmer Plus 21V 5\'li akülü set; kırıcı delici, taşlama, somun sıkma, vidalama ve budama testeresini bir arada sunar.'
        ],
        rehber: [
            { baslik: 'Akülü alet seti alırken nelere bakılmalı?', maddeler: [
                '<strong>Voltaj:</strong> Daha yüksek voltaj genellikle daha fazla güç anlamına gelir.',
                '<strong>Akü sayısı:</strong> İki akülü setlerde biri şarj olurken diğeriyle çalışmaya devam edebilirsiniz.',
                '<strong>Set içeriği:</strong> Setteki aletlerin günlük işlerinizi karşılayıp karşılamadığına bakın.'
            ]}
        ],
        kullanim: ['Tadilat ve montaj işleri', 'Beton ve duvar delme', 'Metal kesme ve taşlama', 'Bahçe budama'],
        sss: [
            { q: 'Kimmer Plus 21V set fiyatı ne kadar?', a: 'Güncel fiyat için 0536 728 18 33 numarasından WhatsApp\'tan yazabilirsiniz.' },
            { q: 'Sette kaç akü var?', a: 'Sette 2 adet Li-ion akü bulunur. Şarj süresi yaklaşık 1 saattir.' }
        ]
    }
};

// Hizmet bölgesi sayfaları. Her şehrin kendine ait metni, ilçeleri ve Bursa'ya uzaklığı var;
// aynı metni kopyalayıp sadece şehir adını değiştirmek Google'da spam sayıldığı için bunu yapmıyoruz.
const sehirler = [
    {
        slug: 'bursa', ad: 'Bursa', mesafe: null,
        giris: 'Avcı İnşaat Makine ve Teknik Servis, Bursa Nilüfer\'den hizmet veren bir inşaat makineleri tedarikçisidir. Bursa\'nın merkez ilçelerinden İnegöl\'e, Gemlik\'ten Mustafakemalpaşa\'ya kadar tüm şantiyelere demir bükme makinesi, demir kesme makinesi, beton vibratörü ve kompaktör tedarik ediyoruz.',
        detay: 'Bursa\'da hızla büyüyen konut projeleri, organize sanayi bölgeleri ve kentsel dönüşüm çalışmaları; donatı hazırlama ve beton dökümü için güvenilir makinelere olan ihtiyacı artırıyor. Bursa içindeki müşterilerimiz ürünler hakkında bizimle doğrudan görüşebilir, telefonla ya da WhatsApp\'tan hızlıca fiyat alabilir.',
        ilceler: ['Osmangazi', 'Nilüfer', 'Yıldırım', 'İnegöl', 'Gemlik', 'Mudanya', 'Mustafakemalpaşa', 'Karacabey', 'Orhangazi', 'İznik', 'Yenişehir', 'Gürsu', 'Kestel', 'Orhaneli', 'Keles', 'Büyükorhan', 'Harmancık'],
        tumIlceler: true
    },
    {
        slug: 'istanbul', ad: 'İstanbul', mesafe: 155,
        giris: 'İstanbul\'daki şantiyeler için demir bükme, demir kesme, beton vibratörü ve kompaktör ihtiyacınızı Bursa\'dan karşılıyoruz. Osmangazi Köprüsü ile Bursa ve İstanbul arası yaklaşık 155 km olduğu için İstanbul, en sık gönderim yaptığımız şehirlerden biri.',
        detay: 'İstanbul\'da süren kentsel dönüşüm projeleri ve yoğun konut inşaatları, hem Avrupa hem de Anadolu yakasında donatı ve beton dökümü makinelerine sürekli bir talep oluşturuyor. Kalıpçı, demirci ve müteahhit ekipleri için makinelerimizi İstanbul\'un tüm ilçelerine gönderiyoruz.',
        ilceler: ['Esenyurt', 'Başakşehir', 'Beylikdüzü', 'Arnavutköy', 'Büyükçekmece', 'Silivri', 'Küçükçekmece', 'Avcılar', 'Eyüpsultan', 'Sarıyer', 'Pendik', 'Tuzla', 'Kartal', 'Maltepe', 'Ümraniye', 'Ataşehir', 'Sancaktepe', 'Çekmeköy', 'Sultanbeyli', 'Üsküdar', 'Kadıköy'],
        tumIlceler: false
    },
    {
        slug: 'kocaeli', ad: 'Kocaeli', mesafe: 135,
        giris: 'Kocaeli\'deki inşaat ve sanayi projeleri için inşaat makinelerini Bursa\'dan gönderiyoruz. Bursa ile İzmit arası karayoluyla yaklaşık 135 km.',
        detay: 'Gebze, Dilovası ve İzmit çevresindeki sanayi tesisleri, depo ve fabrika inşaatları ile Körfez boyunca devam eden konut projeleri; kalın donatı ve yoğun beton dökümü gerektiriyor. Bu tür işler için 24 mm kapasiteli demir bükme ve kesme makineleri ile güçlü beton vibratörleri öne çıkıyor.',
        ilceler: ['İzmit', 'Gebze', 'Darıca', 'Çayırova', 'Dilovası', 'Körfez', 'Derince', 'Kartepe', 'Başiskele', 'Gölcük', 'Karamürsel', 'Kandıra'],
        tumIlceler: true
    },
    {
        slug: 'sakarya', ad: 'Sakarya', mesafe: 165,
        giris: 'Sakarya\'daki müteahhit ve şantiyelere demir bükme makinesi, demir kesme makinesi, beton vibratörü ve kompaktör gönderiyoruz. Bursa ile Adapazarı arası yaklaşık 165 km.',
        detay: 'Sakarya\'da konut, sanayi ve altyapı yatırımları; deprem yönetmeliğine uygun, sık donatılı ve iyi sıkıştırılmış beton gerektiriyor. Doğru vibratör kullanımı betondaki boşlukları alarak yapının dayanımına doğrudan katkı sağlar.',
        ilceler: ['Adapazarı', 'Serdivan', 'Erenler', 'Arifiye', 'Sapanca', 'Akyazı', 'Hendek', 'Karasu', 'Geyve', 'Pamukova', 'Kocaali', 'Ferizli', 'Söğütlü', 'Karapürçek', 'Taraklı', 'Kaynarca'],
        tumIlceler: true
    },
    {
        slug: 'yalova', ad: 'Yalova', mesafe: 70,
        giris: 'Yalova, Bursa\'ya yaklaşık 70 km mesafesiyle bize en yakın illerden biri. Yalova\'daki şantiyelere demir bükme, demir kesme, beton vibratörü ve kompaktör tedarik ediyoruz.',
        detay: 'Çınarcık, Armutlu ve Altınova gibi ilçelerdeki konut ve yazlık inşaatlarında, çoğunlukla 220V ile çalışabilen, taşıması kolay makineler tercih ediliyor. Bu tür işler için 18-20 mm demir bükme makineleri ve 1,5 HP beton vibratörleri pratik çözümler sunar.',
        ilceler: ['Merkez', 'Çiftlikköy', 'Altınova', 'Armutlu', 'Çınarcık', 'Termal'],
        tumIlceler: true
    },
    {
        slug: 'bilecik', ad: 'Bilecik', mesafe: 95,
        giris: 'Bilecik\'teki inşaat projeleri için makinelerimizi Bursa\'dan gönderiyoruz. Bursa ile Bilecik arası yaklaşık 95 km.',
        detay: 'Bozüyük\'teki sanayi tesisleri ve Bilecik genelindeki konut ve altyapı işleri için demir bükme ve kesme makineleri, beton vibratörleri ve zemin sıkıştırma için benzinli kompaktörler sunuyoruz.',
        ilceler: ['Merkez', 'Bozüyük', 'Osmaneli', 'Pazaryeri', 'Söğüt', 'Gölpazarı', 'İnhisar', 'Yenipazar'],
        tumIlceler: true
    },
    {
        slug: 'eskisehir', ad: 'Eskişehir', mesafe: 150,
        giris: 'Eskişehir\'deki şantiyelere inşaat makinesi gönderiyoruz: demir bükme makinesi, demir kesme makinesi, beton vibratörü, vibratör hortumu ve kompaktör. Bursa ile Eskişehir arası yaklaşık 150 km.',
        detay: 'Odunpazarı ve Tepebaşı\'ndaki yeni konut alanları, organize sanayi bölgesindeki fabrika ve depo inşaatları ile çevre ilçelerdeki tarımsal yapılar; Eskişehir\'de donatı ve beton işlerinin hiç durmamasını sağlıyor. Eskişehir\'den arayan müşterilerimize ihtiyaca göre model önerip Türkiye geneli gönderim ağıyla ulaştırıyoruz.',
        ilceler: ['Odunpazarı', 'Tepebaşı', 'Sivrihisar', 'Çifteler', 'Seyitgazi', 'Alpu', 'Mihalıççık', 'Mahmudiye', 'Beylikova', 'İnönü', 'Günyüzü', 'Han', 'Mihalgazi', 'Sarıcakaya'],
        tumIlceler: true
    },
    {
        slug: 'kutahya', ad: 'Kütahya', mesafe: 175,
        giris: 'Kütahya\'daki inşaat işleri için demir bükme, demir kesme, beton vibratörü ve kompaktör tedarik ediyoruz. Bursa ile Kütahya arası yaklaşık 175 km.',
        detay: 'Tavşanlı, Simav ve Gediz gibi ilçelerdeki konut ve kamu binası inşaatlarında, şantiyeden şantiyeye kolayca taşınabilen portatif makineler öne çıkıyor. Afacan ve Yakar demir bükme makineleri ile omuz tipi beton vibratörleri bu ihtiyaca uygun seçenekler.',
        ilceler: ['Merkez', 'Tavşanlı', 'Simav', 'Gediz', 'Emet', 'Domaniç', 'Altıntaş', 'Aslanapa', 'Dumlupınar', 'Hisarcık', 'Pazarlar', 'Şaphane', 'Çavdarhisar'],
        tumIlceler: true
    },
    {
        slug: 'balikesir', ad: 'Balıkesir', mesafe: 150,
        giris: 'Balıkesir\'in tüm ilçelerine inşaat makinesi gönderiyoruz. Bursa ile Balıkesir merkez arası yaklaşık 150 km; Bandırma ve Gönen gibi ilçeler Bursa\'ya daha da yakın.',
        detay: 'Edremit, Ayvalık, Burhaniye ve Erdek gibi kıyı ilçelerindeki yazlık ve konut inşaatları ile Bandırma\'daki sanayi ve liman çevresi projeleri; demir bükme, demir kesme ve beton vibratörüne yoğun talep oluşturuyor. Kilit parke ve bahçe düzenlemeleri için benzinli kompaktörlerimiz de sık tercih ediliyor.',
        ilceler: ['Altıeylül', 'Karesi', 'Bandırma', 'Edremit', 'Ayvalık', 'Burhaniye', 'Gönen', 'Bigadiç', 'Dursunbey', 'Erdek', 'Gömeç', 'Havran', 'İvrindi', 'Kepsut', 'Manyas', 'Marmara', 'Savaştepe', 'Sındırgı', 'Susurluk', 'Balya'],
        tumIlceler: true
    },
    {
        slug: 'canakkale', ad: 'Çanakkale', mesafe: 270,
        giris: 'Çanakkale\'deki şantiyeler için inşaat makinelerini Bursa\'dan gönderiyoruz. Bursa ile Çanakkale arası yaklaşık 270 km.',
        detay: 'Biga, Çan ve Lapseki çevresindeki sanayi ve enerji yatırımları ile Ayvacık, Ezine ve Gelibolu\'daki konut ve yazlık inşaatlarında demir bükme, demir kesme makineleri ve beton vibratörleri kullanılıyor.',
        ilceler: ['Merkez', 'Biga', 'Çan', 'Gelibolu', 'Ezine', 'Lapseki', 'Ayvacık', 'Bayramiç', 'Yenice', 'Eceabat', 'Gökçeada', 'Bozcaada'],
        tumIlceler: true
    },
    {
        slug: 'izmir', ad: 'İzmir', mesafe: 330,
        giris: 'İzmir\'deki müteahhit, kalıpçı ve demirci ekipleri için demir bükme makinesi, demir kesme makinesi, beton vibratörü ve kompaktör gönderiyoruz. Bursa ile İzmir arası otoyolla yaklaşık 330 km.',
        detay: 'İzmir\'de Bornova, Buca, Çiğli ve Karşıyaka gibi merkez ilçelerdeki kentsel dönüşüm ve konut projeleri ile Torbalı, Kemalpaşa ve Menemen\'deki sanayi yapıları; güçlü ve sürekli çalışabilen makinelere ihtiyaç duyuyor. Çeşme, Urla ve Seferihisar\'daki yazlık inşaatlarında ise taşınabilir modeller öne çıkıyor.',
        ilceler: ['Bornova', 'Buca', 'Karşıyaka', 'Çiğli', 'Bayraklı', 'Konak', 'Karabağlar', 'Gaziemir', 'Menemen', 'Torbalı', 'Kemalpaşa', 'Menderes', 'Urla', 'Çeşme', 'Seferihisar', 'Aliağa', 'Bergama', 'Ödemiş', 'Tire'],
        tumIlceler: false
    },
    {
        slug: 'manisa', ad: 'Manisa', mesafe: 300,
        giris: 'Manisa\'daki inşaat ve sanayi projelerine demir bükme, demir kesme, beton vibratörü ve kompaktör gönderiyoruz. Bursa ile Manisa arası yaklaşık 300 km.',
        detay: 'Manisa Organize Sanayi Bölgesi\'ndeki fabrika ve depo inşaatları, Akhisar, Turgutlu ve Salihli\'deki konut projeleri; kalın donatı ve geniş döşeme dökümleri için güçlü makineler gerektiriyor.',
        ilceler: ['Yunusemre', 'Şehzadeler', 'Akhisar', 'Turgutlu', 'Salihli', 'Soma', 'Alaşehir', 'Saruhanlı', 'Kula', 'Kırkağaç', 'Demirci', 'Sarıgöl', 'Gördes', 'Selendi', 'Ahmetli', 'Gölmarmara', 'Köprübaşı'],
        tumIlceler: true
    },
    // İlçe sayfaları (ust: bağlı olduğu il)
    {
        slug: 'bandirma', ad: 'Bandırma', ust: 'Balıkesir', mesafe: 115,
        giris: 'Bandırma\'daki şantiyelere demir bükme makinesi, demir kesme makinesi, beton vibratörü ve kompaktör gönderiyoruz. Bursa ile Bandırma arası yaklaşık 115 km; Bandırma, Bursa\'dan en hızlı ulaştığımız ilçelerden biri.',
        detay: 'Bandırma\'da liman ve sanayi bölgesi çevresindeki depo ve tesis inşaatları ile şehir merkezindeki konut projeleri, hem kalın donatı işleri hem de geniş beton dökümleri için güçlü makineler gerektiriyor. Gönen, Erdek ve Manyas gibi komşu ilçelere de aynı şekilde gönderim yapıyoruz.'
    },
    {
        slug: 'inegol', ad: 'İnegöl', ust: 'Bursa', mesafe: 45,
        giris: 'İnegöl\'deki inşaat ve sanayi projelerine demir bükme makinesi, demir kesme makinesi, beton vibratörü ve kompaktör tedarik ediyoruz. Bursa merkez ile İnegöl arası yaklaşık 45 km.',
        detay: 'İnegöl\'ün mobilya sanayisi ve organize sanayi bölgesindeki fabrika ve atölye inşaatları ile hızla büyüyen konut alanları; donatı hazırlama ve zemin sıkıştırma için makineye sürekli ihtiyaç duyuyor.'
    },
    {
        slug: 'gebze', ad: 'Gebze', ust: 'Kocaeli', mesafe: 110,
        giris: 'Gebze\'deki şantiyelere ve sanayi projelerine demir bükme makinesi, demir kesme makinesi, beton vibratörü ve kompaktör gönderiyoruz. Osmangazi Köprüsü üzerinden Bursa ile Gebze arası yaklaşık 110 km.',
        detay: 'Gebze ve çevresindeki organize sanayi bölgeleri, lojistik depoları ve Darıca, Çayırova gibi komşu ilçelerdeki konut projeleri; 24 mm kapasiteli demir makineleri ve güçlü beton vibratörlerine yoğun talep oluşturuyor.'
    },
    {
        slug: 'ankara', ad: 'Ankara', mesafe: 385,
        giris: 'Ankara\'daki şantiyeler için inşaat makinelerimizi Bursa\'dan gönderiyoruz. Bursa ile Ankara arası yaklaşık 385 km.',
        detay: 'Etimesgut, Sincan, Gölbaşı ve Pursaklar gibi hızla büyüyen ilçelerdeki toplu konut projeleri ile kamu yatırımları, Ankara\'da demir bükme, demir kesme ve beton vibratörü talebini sürekli canlı tutuyor.',
        ilceler: ['Çankaya', 'Keçiören', 'Yenimahalle', 'Mamak', 'Etimesgut', 'Sincan', 'Altındağ', 'Pursaklar', 'Gölbaşı', 'Polatlı', 'Çubuk', 'Kahramankazan', 'Elmadağ', 'Beypazarı'],
        tumIlceler: false
    }
];

// Şehir sayfalarındaki "Yalova Beton Vibratörü" gibi ürün bölümlerinin başlığı ve kısa metni
const sehirKategoriMetni = {
    'bukme': (s) => ({ baslik: `${s} Demir Bükme Makinesi`, metin: `${s} için 18 mm'den 24 mm'ye kadar Afacan ve Yakar demir bükme makineleri. Etriye, kanca ve filiz bükme işlerinizde hızlı ve ölçülü çalışma.` }),
    'kesme': (s) => ({ baslik: `${s} Demir Kesme Makinesi`, metin: `${s} şantiyeleri için 220V ile çalışan, 22 mm ve 24 mm kapasiteli portatif Afacan demir kesme makineleri.` }),
    'vibrator': (s) => ({ baslik: `${s} Beton Vibratörü (İnşaat Vibratörü)`, metin: `${s} genelindeki beton dökümleri için Wacker Neuson ve Enar beton vibratörü motorları. Kolon, kiriş, döşeme ve radye dökümlerinde boşluksuz beton.` }),
    'vibrator-hortum': (s) => ({ baslik: `${s} Vibratör Hortumu`, metin: `${s} için 4 m ve 5 m, Ø45 mm şişeli Wacker Neuson vibratör hortumları.` }),
    'benzinli-kompaktor': (s) => ({ baslik: `${s} Kompaktör`, metin: `${s} için dolgu, kilit parke ve asfalt sıkıştırmada kullanılan Wacker Neuson, Honda ve Afacan benzinli kompaktörler.` }),
    'ciroz': (s) => ({ baslik: `${s} Çiroz`, metin: `${s} kalıpçıları için 50'li çuvallarda Afacan 4 mm galvaniz çiroz.` }),
    'el-aletleri': (s) => ({ baslik: `${s} Akülü El Aletleri`, metin: `${s} için Kimmer Plus 21V 5'li akülü matkap seti.` })
};

// Teslimat bölgeleri sayfasında listelenen 81 il
const tumIller = ['Adana', 'Adıyaman', 'Afyonkarahisar', 'Ağrı', 'Aksaray', 'Amasya', 'Ankara', 'Antalya', 'Ardahan', 'Artvin', 'Aydın', 'Balıkesir', 'Bartın', 'Batman', 'Bayburt', 'Bilecik', 'Bingöl', 'Bitlis', 'Bolu', 'Burdur', 'Bursa', 'Çanakkale', 'Çankırı', 'Çorum', 'Denizli', 'Diyarbakır', 'Düzce', 'Edirne', 'Elazığ', 'Erzincan', 'Erzurum', 'Eskişehir', 'Gaziantep', 'Giresun', 'Gümüşhane', 'Hakkari', 'Hatay', 'Iğdır', 'Isparta', 'İstanbul', 'İzmir', 'Kahramanmaraş', 'Karabük', 'Karaman', 'Kars', 'Kastamonu', 'Kayseri', 'Kilis', 'Kırıkkale', 'Kırklareli', 'Kırşehir', 'Kocaeli', 'Konya', 'Kütahya', 'Malatya', 'Manisa', 'Mardin', 'Mersin', 'Muğla', 'Muş', 'Nevşehir', 'Niğde', 'Ordu', 'Osmaniye', 'Rize', 'Sakarya', 'Samsun', 'Şanlıurfa', 'Siirt', 'Sinop', 'Şırnak', 'Sivas', 'Tekirdağ', 'Tokat', 'Trabzon', 'Tunceli', 'Uşak', 'Van', 'Yalova', 'Yozgat', 'Zonguldak'];

module.exports = { firma, kategoriIcerik, sehirler, sehirKategoriMetni, tumIller };
