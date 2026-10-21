// --- ÜRÜN VERİTABANI ---
// Hem sitedeki JavaScript (urunler.html, urun-detay.html) hem de tools/sayfa-uret.js bu dosyayı kullanır.
// Yeni ürün ekledikten sonra statik sayfaları güncellemek için: node tools/sayfa-uret.js
const products = [
    // BÜKME MAKİNELERİ (ID: 101-199)
    { id: 101, category: 'bukme', brand: 'Afacan', name: 'Afacan R18 Demir Bükme Makinesi', img: 'images/afacan-18mm/afacan_18mm_demirbukme.jpg', desc: 'Kompakt ve güçlü tasarımıyla 18mm çapa kadar demir bükme. Voltaj koruma sistemi ile güvenli çalışma.', specs: ['Kapasite: 18MM', 'Güç: 1,1 kW', 'Boyut: 865x500x480mm', 'Ağırlık: 70kg', 'Voltaj: 220V/380V'], detailPage: 'demir_bukme/afacan-18mm-demir-bukme.html' },
    { id: 150, category: 'bukme', brand: 'Afacan', name: 'Afacan R20 Demir Bükme Makinesi', img: 'images/afacan-20mm/20-MM-DEMiR-BuKME-MAKiNESi-82GBF.jpg', desc: 'Yüksek performanslı 20mm kapasiteli demir bükme. Ayarlanabilir hız kontrolü ve sağlam yapı.', specs: ['Kapasite: 20MM', 'Güç: 1,5 kW', 'Boyut: 865x500x480mm', 'Ağırlık: 70kg', 'Voltaj: 220V/380V'], detailPage: 'demir_bukme/afacan-20mm-demir-bukme.html' },
    { id: 170, category: 'bukme', brand: 'Afacan', name: 'Afacan R24 Demir Bükme Makinesi', img: 'images/afacan-24mm/24_mm_portatif_nsaat_demiri_bukme_makinasi-1-900x675.jpg', desc: 'Endüstriyel seviye 24mm kapasiteli demir bükme. Güçlü motor ve üstün dayanıklılık.', specs: ['Kapasite: 24MM', 'Güç: 2,2 kW', 'Boyut: 580x630x430mm', 'Ağırlık: 125kg', 'Voltaj: 220V/380V'], detailPage: 'demir_bukme/afacan-24mm-demir-bukme.html' },
    { id: 102, category: 'bukme', brand: 'Yakar', name: 'Yakar YKB 18 Demir Bükme Makinesi', img: 'images/ykb_18mm.jpg', desc: 'Elektromekanik pedal kontrollü 18mm demir bükme. 600 Nm bükme momenti, manuel ve otomatik çalışma.', specs: ['Kapasite: 18MM', 'Güç: 1.1 KW', 'Devir: 6-12 dev/dak', 'Yükseklik: 84 cm', 'Voltaj: 220V'], detailPage: 'demir_bukme/yakar-ykb18-demir-bukme.html' },
    { id: 103, category: 'bukme', brand: 'Yakar', name: 'Yakar YKB 22 Demir Bükme Makinesi', img: 'images/ykb_22_gemini.jpg', desc: 'Orta kapasite 22mm demir bükme. 600 Nm bükme momenti, elektromekanik pedal kontrolü.', specs: ['Kapasite: 22MM', 'Güç: 1.1 KW', 'Devir: 6-12 dev/dak', 'Yükseklik: 85 cm', 'Voltaj: 220V'], detailPage: 'demir_bukme/yakar-ykb22-demir-bukme.html' },
    { id: 104, category: 'bukme', brand: 'Yakar', name: 'Yakar YKB 24 Demir Bükme Makinesi', img: 'images/ykb_24mm_gemini.jpg', desc: 'Ağır hizmet 24mm demir bükme. 2.2 KW güçlü motor, 130 kg sağlam yapı.', specs: ['Kapasite: 24MM', 'Güç: 2.2 KW', 'Devir: 6-12 dev/dak', 'Ağırlık: 130 kg', 'Voltaj: 220V'], detailPage: 'demir_bukme/yakar-ykb24-demir-bukme.html' },

    // KESME MAKİNELERİ (ID: 201-299)
    { id: 201, category: 'kesme', brand: 'Afacan', name: 'Afacan 22mm Demir Kesme Makinesi', img: 'images/22_mm_demir_kesme_makinasi-1-400x300_afacan.webp', desc: 'Portatif taşıma kolay, hidrolik. Güçlü kesme performansı.', specs: ['Kapasite: 22 MM inşaat demiri', 'Güç: 1.5 KW', 'Ağırlık: 85 KG', 'Voltaj: 220 V (monofaze)', 'Ölçüler: 480(Y) X 750(G) X 600(D)'], detailPage: 'demir_kesme/afacan-22mm-demir-kesme.html' },
    { id: 202, category: 'kesme', brand: 'Afacan', name: 'Afacan F24 Demir Kesme Makinesi', img: 'images/afaca24mm_demırkesme.webp', desc: 'Portatif taşıma kolay, hidrolik. 24 mm kalınlığında güçlü kesme.', specs: ['Kapasite: 24 MM inşaat demiri', 'Güç: 2.2 KW', 'Ağırlık: 95 KG', 'Voltaj: 220 V (monofaze)', 'Ölçüler: 480(Y) X 750(G) X 600(D)'], detailPage: 'demir_kesme/afacan-f24-demir-kesme.html' },

    // BETON VİBRATÖRLERİ (ID: 301-399)
    { id: 301, category: 'vibrator', brand: 'Wacker Neuson', name: 'Wacker Neuson M-1500 Beton Vibratörü', img: 'images/1500_watt_beton_vibratoru-698-900x675.jpg', desc: 'Omuz tipi taşınabilir tasarım. 1.5 HP motor, 11.500 RPM devir, 5.3 kg hafif yapı.', specs: ['Motor: 1.5 HP / 1500W', 'Devir: 11.500 RPM', 'Voltaj: 230V', 'Ağırlık: 5.3 kg'], detailPage: 'beton_vibratoru/wacker-neuson-m1500.html' },
    { id: 302, category: 'vibrator', brand: 'Wacker Neuson', name: 'Wacker Neuson M-2500 Beton Vibratörü', img: 'images/wacker-neuson-m2500-3-hp-beton-vibratoru-b-wv-001.webp', desc: 'Güçlü 2.5 HP motor ile yoğun beton dökümlerinde yüksek verim. 12.000 RPM devir hızı.', specs: ['Motor: 2.5 HP / 1800W', 'Devir: 12.000 RPM', 'Voltaj: 230V', 'Ağırlık: 5.4 kg'], detailPage: 'beton_vibratoru/wacker-neuson-m2500.html' },
    { id: 303, category: 'vibrator', brand: 'Enar', name: 'Enar KMS 180 Beton Vibratörü', img: 'images/kms_180_ispanyol_enar_vibrator.jpg', desc: 'İspanyol Enar kalitesi. 3 HP / 2300W motor, 17500 RPM yüksek devir, Ø56mm şişe çapı.', specs: ['Motor: 3 HP / 2300W', 'Devir: 17500 RPM', 'Şişe: Ø56mm', 'Ağırlık: 5.5 kg'], detailPage: 'beton_vibratoru/enar-kms180-vibrator.html' },

    // VİBRATÖR HORTUMLARI (ID: 350-399)
    { id: 350, category: 'vibrator-hortum', brand: 'Wacker Neuson', name: 'Wacker Neuson 4x45 Vibratör Hortumu', img: 'images/wacker_neuson_hortum_4_45.jpg', desc: 'Yerli üretim, 4 metre uzunluk, Ø45mm şişe çapı. Kare başlı pimli motor girişi.', specs: ['Uzunluk: 4 Metre', 'Şişe Çapı: Ø45mm', 'Motor Girişi: Kare Başlı', 'Ağırlık: 4.0 kg'], detailPage: 'vibrator_hortumu/wacker-neuson-4x45.html' },
    { id: 351, category: 'vibrator-hortum', brand: 'Wacker Neuson', name: 'Wacker Neuson 5x45 Vibratör Hortumu', img: 'images/wacker_hortum_545.png', desc: 'Yerli üretim, 5 metre uzunluk, Ø45mm şişe çapı. Geniş alanlarda esnek kullanım.', specs: ['Uzunluk: 5 Metre', 'Şişe Çapı: Ø45mm', 'Motor Girişi: Kare Başlı', 'Ağırlık: 4.2 kg'], detailPage: 'vibrator_hortumu/wacker-neuson-5x45.html' },

    // BENZİNLİ KOMPAKTÖRLER (ID: 401-410)
    { id: 402, category: 'benzinli-kompaktor', brand: 'Afacan', name: 'Afacan 6HP Benzinli Kompaktör', img: 'images/afacan_kompaktor1.jpg', desc: '6 HP Honda benzinli motor, plastik su haznesi, mekanik titreşim sistemi.', specs: ['Motor: 6 HP Honda', 'Yakıt: Benzinli', 'Ağırlık: 120 kg', 'İlerleme: Manuel'], detailPage: 'kompaktor/afacan-kompaktor-6hp.html' },
    { id: 403, category: 'benzinli-kompaktor', brand: 'Wacker Neuson', name: 'Wacker Neuson MP-15 Benzinli Kompaktör', img: 'images/wacker-neuson-mp15-cn,faa2ff63.jpg', desc: '15 kN santrifüj kuvveti, 4.4 kW Loncin motor, 83 kg. Profesyonel zemin sıkıştırma.', specs: ['Kuvvet: 15 kN', 'Motor: 4.4 kW Loncin', 'Ağırlık: 83 kg', 'Verim: 600 m²/h'], detailPage: 'kompaktor/wacker-neuson-mp15.html' },
    { id: 404, category: 'benzinli-kompaktor', brand: 'Wacker Neuson', name: 'Wacker Neuson MP-12 Benzinli Kompaktör', img: 'images/MP-12-WACKER-NEUSON-KOMPAKTOR-3-723FE.jpg', desc: '12 kN santrifüj kuvveti, 4.4 kW Loncin motor, 64 kg kompakt tasarım.', specs: ['Kuvvet: 12 kN', 'Motor: 4.4 kW Loncin', 'Ağırlık: 64 kg', 'Verim: 550 m²/h'], detailPage: 'kompaktor/wacker-neuson-mp12.html' },
    { id: 405, category: 'benzinli-kompaktor', brand: 'Honda', name: 'Honda KM-60 Benzinli Kompaktör', img: 'images/honda_km60_kompaktor.png', desc: 'Honda GX200 motor, 6.5 HP güç, 13 kN merkezkaç kuvveti, 97 kg.', specs: ['Motor: Honda GX200', 'Güç: 6.5 HP', 'Kuvvet: 13 kN', 'Verim: 660 m²/h'], detailPage: 'kompaktor/honda-km60.html' },

    // ÇİROZ (ID: 501-599)
    { id: 501, category: 'ciroz', brand: 'Afacan', name: 'Afacan 4mm Çiroz Kalıp Kilidi', img: 'images/afacan_ciroz.jpg', desc: '4mm toz boyalı çiroz, galvaniz kaplama. 1 çuvalda 50 adet, 20 kg.', specs: ['Taban: 70-105mm', 'Sıkma: 6-10mm', 'Kalınlık: 4mm', 'Paket: 50 Adet'], detailPage: 'ciroz/afacan-4mm-ciroz.html' },

    // EL ALETLERİ (ID: 601-699)
    { id: 601, category: 'el-aletleri', brand: 'Kimmer', name: 'Kimmer Plus 21V 5\'li Akülü Matkap Seti', img: 'images/matkap_seti_arkasibeyaz.jpg', desc: 'Kırıcı delici, taşlama, somun sıkma, vidalama ve budama testeresi. 2 adet Li-ion akü, hızlı şarj.', specs: ['Voltaj: 21V', 'Akü: 2x Li-ion', 'Şarj: ~1 Saat', 'Set: 5 Alet', 'Çanta: Dahil'], detailPage: 'el_aletleri/kimmer-plus-21v-5li-set.html' }
];

// --- KATEGORİLER ---
// slug: statik kategori sayfasının klasörü (ör. /beton_vibratoru/)
const categories = {
    'bukme': { name: 'Demir Bükme Makineleri', short: 'Demir Bükme', slug: 'demir_bukme', icon: 'fa-bezier-curve' },
    'kesme': { name: 'Demir Kesme Makineleri', short: 'Demir Kesme', slug: 'demir_kesme', icon: 'fa-cut' },
    'vibrator': { name: 'Beton Vibratörleri', short: 'Beton Vibratörü', slug: 'beton_vibratoru', icon: 'fa-hammer' },
    'vibrator-hortum': { name: 'Beton Vibratör Hortumları', short: 'Vibratör Hortumu', slug: 'vibrator_hortumu', icon: 'fa-slash' },
    'benzinli-kompaktor': { name: 'Benzinli Kompaktörler', short: 'Kompaktör', slug: 'kompaktor', icon: 'fa-compress' },
    'ciroz': { name: 'Çiroz (Kalıp Kilidi)', short: 'Çiroz', slug: 'ciroz', icon: 'fa-link' },
    'el-aletleri': { name: 'El Aletleri', short: 'El Aletleri', slug: 'el_aletleri', icon: 'fa-tools' }
};

if (typeof module !== 'undefined') module.exports = { products, categories };
