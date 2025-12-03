// --- GLOBAL AYARLAR ---
const TELEFON_NUMARASI = '+905367281833'; // Buradan tüm siteyi yönet
const WHATSAPP_NUMARASI = '905367281833'; // WhatsApp için prefix'siz

// --- GÜVENLİK AYARI: İZİN VERİLEN KATEGORİLER ---
// Bu liste dışındaki bir kelime url'ye yazılırsa sistem otomatik 'hepsi' yapar.
const allowedCategories = ['hepsi', 'bukme', 'kesme', 'vibrator', 'vibrator-hortum', 'asfalt-kesme', 'benzinli-kompaktor', 'ciroz', 'el-aletleri', 'diger'];

// --- ÜRÜN VERİTABANI ---
const products = [
    // BÜKME MAKİNELERİ (ID: 101-199)
    { id: 101, category: 'bukme', name: 'Afacan R18 Demir Bükme Makinesi', img: 'images/afacan-18mm/afacan_18mm_demirbukme.jpg', desc: 'Kompakt ve güçlü tasarımıyla 18mm çapa kadar demir bükme. Voltaj koruma sistemi ile güvenli çalışma.', specs: ['Kapasite: 18MM', 'Güç: 1,1 kW', 'Boyut: 865x500x480mm', 'Ağırlık: 70kg', 'Voltaj: 220V/380V'], detailPage: 'demir_bukme/afacan-18mm-demir-bukme.html' },
    { id: 150, category: 'bukme', name: 'Afacan R20 Demir Bükme Makinesi', img: 'images/afacan-20mm/20-MM-DEMiR-BuKME-MAKiNESi-82GBF.jpg', desc: 'Yüksek performanslı 20mm kapasiteli demir bükme. Ayarlanabilir hız kontrolü ve sağlam yapı.', specs: ['Kapasite: 20MM', 'Güç: 1,5 kW', 'Boyut: 865x500x480mm', 'Ağırlık: 70kg', 'Voltaj: 220V/380V'], detailPage: 'demir_bukme/afacan-20mm-demir-bukme.html' },
    { id: 170, category: 'bukme', name: 'Afacan R24 Demir Bükme Makinesi', img: 'images/afacan-24mm/24_mm_portatif_nsaat_demiri_bukme_makinasi-1-900x675.jpg', desc: 'Endüstriyel seviye 24mm kapasiteli demir bükme. Güçlü motor ve üstün dayanıklılık.', specs: ['Kapasite: 24MM', 'Güç: 2,2 kW', 'Boyut: 580x630x430mm', 'Ağırlık: 125kg', 'Voltaj: 220V/380V'], detailPage: 'demir_bukme/afacan-24mm-demir-bukme.html' },
    { id: 102, category: 'bukme', name: 'Yakar YKB 18 Demir Bükme Makinesi', img: 'images/ykb_18mm.jpg', desc: 'Elektromekanik pedal kontrollü 18mm demir bükme. 600 Nm bükme momenti, manuel ve otomatik çalışma.', specs: ['Kapasite: 18MM', 'Güç: 1.1 KW', 'Devir: 6-12 dev/dak', 'Yükseklik: 84 cm', 'Voltaj: 220V'], detailPage: 'demir_bukme/yakar-ykb18-demir-bukme.html' },
    { id: 103, category: 'bukme', name: 'Yakar YKB 22 Demir Bükme Makinesi', img: 'images/ykb_22_gemini.jpg', desc: 'Orta kapasite 22mm demir bükme. 600 Nm bükme momenti, elektromekanik pedal kontrolü.', specs: ['Kapasite: 22MM', 'Güç: 1.1 KW', 'Devir: 6-12 dev/dak', 'Yükseklik: 85 cm', 'Voltaj: 220V'], detailPage: 'demir_bukme/yakar-ykb22-demir-bukme.html' },
    { id: 104, category: 'bukme', name: 'Yakar YKB 24 Demir Bükme Makinesi', img: 'images/ykb_24mm_gemini.jpg', desc: 'Ağır hizmet 24mm demir bükme. 2.2 KW güçlü motor, 130 kg sağlam yapı.', specs: ['Kapasite: 24MM', 'Güç: 2.2 KW', 'Devir: 6-12 dev/dak', 'Ağırlık: 130 kg', 'Voltaj: 220V'], detailPage: 'demir_bukme/yakar-ykb24-demir-bukme.html' },

    // KESME MAKİNELERİ (ID: 201-299)
    { id: 201, category: 'kesme', name: 'Afacan 22mm Demir Kesme Makinesi', img: 'images/22_mm_demir_kesme_makinasi-1-400x300_afacan.webp', desc: 'Portatif taşıma kolay, hidrolik. Güçlü kesme performansı.', specs: ['Kapasite: 22 MM inşaat demiri', 'Güç: 1.5 KW', 'Ağırlık: 85 KG', 'Voltaj: 220 V (monofaze)', 'Ölçüler: 480(Y) X 750(G) X 600(D)'], detailPage: 'demir_kesme/afacan-22mm-demir-kesme.html' },
    { id: 202, category: 'kesme', name: 'Afacan F24 Demir Kesme Makinesi', img: 'images/afaca24mm_demırkesme.webp', desc: 'Portatif taşıma kolay, hidrolik. 24 mm kalınlığında güçlü kesme.', specs: ['Kapasite: 24 MM inşaat demiri', 'Güç: 2.2 KW', 'Ağırlık: 95 KG', 'Voltaj: 220 V (monofaze)', 'Ölçüler: 480(Y) X 750(G) X 600(D)'], detailPage: 'demir_kesme/afacan-f24-demir-kesme.html' },

    // BETON VİBRATÖRLERİ (ID: 301-399)
    { id: 301, category: 'vibrator', name: 'Wacker Neuson M-1500 Beton Vibratörü', img: 'images/1500_watt_beton_vibratoru-698-900x675.jpg', desc: 'Omuz tipi taşınabilir tasarım. 1.5 HP motor, 11.500 RPM devir, 5.3 kg hafif yapı.', specs: ['Motor: 1.5 HP / 1500W', 'Devir: 11.500 RPM', 'Voltaj: 230V', 'Ağırlık: 5.3 kg'], detailPage: 'beton_vibratoru/wacker-neuson-m1500.html' },
    { id: 302, category: 'vibrator', name: 'Wacker Neuson M-2500 Beton Vibratörü', img: 'images/wacker-neuson-m2500-3-hp-beton-vibratoru-b-wv-001.webp', desc: 'Güçlü 2.5 HP motor ile yoğun beton dökümlerinde yüksek verim. 12.000 RPM devir hızı.', specs: ['Motor: 2.5 HP / 1800W', 'Devir: 12.000 RPM', 'Voltaj: 230V', 'Ağırlık: 5.4 kg'], detailPage: 'beton_vibratoru/wacker-neuson-m2500.html' },
    { id: 303, category: 'vibrator', name: 'Enar KMS 180 Beton Vibratörü', img: 'images/kms_180_ispanyol_enar_vibrator.jpg', desc: 'İspanyol Enar kalitesi. 3 HP / 2300W motor, 17500 RPM yüksek devir, Ø56mm şişe çapı.', specs: ['Motor: 3 HP / 2300W', 'Devir: 17500 RPM', 'Şişe: Ø56mm', 'Ağırlık: 5.5 kg'], detailPage: 'beton_vibratoru/enar-kms180-vibrator.html' },

    // VİBRATÖR HORTUMLARI (ID: 350-399)
    { id: 350, category: 'vibrator-hortum', name: 'Wacker Neuson 4x45 Vibratör Hortumu', img: 'images/wacker_neuson_hortum_4_45.jpg', desc: 'Yerli üretim, 4 metre uzunluk, Ø45mm şişe çapı. Kare başlı pimli motor girişi.', specs: ['Uzunluk: 4 Metre', 'Şişe Çapı: Ø45mm', 'Motor Girişi: Kare Başlı', 'Ağırlık: 4.0 kg'], detailPage: 'vibrator_hortumu/wacker-neuson-4x45.html' },
    { id: 351, category: 'vibrator-hortum', name: 'Wacker Neuson 5x45 Vibratör Hortumu', img: 'images/wacker_hortum_545.png', desc: 'Yerli üretim, 5 metre uzunluk, Ø45mm şişe çapı. Geniş alanlarda esnek kullanım.', specs: ['Uzunluk: 5 Metre', 'Şişe Çapı: Ø45mm', 'Motor Girişi: Kare Başlı', 'Ağırlık: 4.2 kg'], detailPage: 'vibrator_hortumu/wacker-neuson-5x45.html' },

    // BENZİNLİ KOMPAKTÖRLER (ID: 401-410)
    { id: 402, category: 'benzinli-kompaktor', name: 'Afacan 6HP Benzinli Kompaktör', img: 'images/afacan_kompaktor1.jpg', desc: '6 HP Honda benzinli motor, plastik su haznesi, mekanik titreşim sistemi.', specs: ['Motor: 6 HP Honda', 'Yakıt: Benzinli', 'Ağırlık: 120 kg', 'İlerleme: Manuel'], detailPage: 'kompaktor/afacan-kompaktor-6hp.html' },
    { id: 403, category: 'benzinli-kompaktor', name: 'Wacker Neuson MP-15 Benzinli Kompaktör', img: 'images/wacker-neuson-mp15-cn,faa2ff63.jpg', desc: '15 kN santrifüj kuvveti, 4.4 kW Loncin motor, 83 kg. Profesyonel zemin sıkıştırma.', specs: ['Kuvvet: 15 kN', 'Motor: 4.4 kW Loncin', 'Ağırlık: 83 kg', 'Verim: 600 m²/h'], detailPage: 'kompaktor/wacker-neuson-mp15.html' },
    { id: 404, category: 'benzinli-kompaktor', name: 'Wacker Neuson MP-12 Benzinli Kompaktör', img: 'images/MP-12-WACKER-NEUSON-KOMPAKTOR-3-723FE.jpg', desc: '12 kN santrifüj kuvveti, 4.4 kW Loncin motor, 64 kg kompakt tasarım.', specs: ['Kuvvet: 12 kN', 'Motor: 4.4 kW Loncin', 'Ağırlık: 64 kg', 'Verim: 550 m²/h'], detailPage: 'kompaktor/wacker-neuson-mp12.html' },
    { id: 405, category: 'benzinli-kompaktor', name: 'Honda KM-60 Benzinli Kompaktör', img: 'images/honda_km60_kompaktor.png', desc: 'Honda GX200 motor, 6.5 HP güç, 13 kN merkezkaç kuvveti, 97 kg.', specs: ['Motor: Honda GX200', 'Güç: 6.5 HP', 'Kuvvet: 13 kN', 'Verim: 660 m²/h'], detailPage: 'kompaktor/honda-km60.html' },

    // ÇİROZ (ID: 501-599)
    { id: 501, category: 'ciroz', name: 'Afacan 4mm Çiroz Kalıp Kilidi', img: 'images/afacan_ciroz.jpg', desc: '4mm toz boyalı çiroz, galvaniz kaplama. 1 çuvalda 50 adet, 20 kg.', specs: ['Taban: 70-105mm', 'Sıkma: 6-10mm', 'Kalınlık: 4mm', 'Paket: 50 Adet'], detailPage: 'ciroz/afacan-4mm-ciroz.html' },

    // EL ALETLERİ (ID: 601-699)
    { id: 601, category: 'el-aletleri', name: 'Kimmer Plus 21V 5\'li Akülü Matkap Seti', img: 'images/matkap_seti_arkasibeyaz.jpg', desc: 'Kırıcı delici, taşlama, somun sıkma, vidalama ve budama testeresi. 2 adet Li-ion akü, hızlı şarj.', specs: ['Voltaj: 21V', 'Akü: 2x Li-ion', 'Şarj: ~1 Saat', 'Set: 5 Alet', 'Çanta: Dahil'], detailPage: 'el_aletleri/kimmer-plus-21v-5li-set.html' }
];

document.addEventListener('DOMContentLoaded', () => {
    
    // TELEFON NUMARALARINI OTOMATIK GÜNCELLE
    function updatePhoneNumbers() {
        // Floating butonlar
        const floatingPhone = document.getElementById('floating-phone-btn');
        const floatingWhatsapp = document.getElementById('floating-whatsapp-btn');
        
        if(floatingPhone) floatingPhone.href = `tel:${TELEFON_NUMARASI}`;
        if(floatingWhatsapp) floatingWhatsapp.href = `https://wa.me/${WHATSAPP_NUMARASI}?text=Merhaba, ürünleriniz hakkında bilgi almak istiyorum.`;
        
        // Header butonları  
        const headerPhone = document.getElementById('header-phone-btn');
        const headerWhatsapp = document.getElementById('header-whatsapp-btn');
        
        if(headerPhone) headerPhone.href = `tel:${TELEFON_NUMARASI}`;
        if(headerWhatsapp) headerWhatsapp.href = `https://wa.me/${WHATSAPP_NUMARASI}?text=Merhaba, ürünleriniz hakkında bilgi almak istiyorum.`;
        
        // Content/Ürün sayfası butonları
        const contentPhone = document.getElementById('content-phone-btn');
        const contentWhatsapp = document.getElementById('content-whatsapp-btn');
        
        if(contentPhone) contentPhone.href = `tel:${TELEFON_NUMARASI}`;
        if(contentWhatsapp) {
            const pageTitle = document.title;
            const productName = pageTitle.split(' - ')[0]; // Sayfa title'dan ürün adını al
            contentWhatsapp.href = `https://wa.me/${WHATSAPP_NUMARASI}?text=Merhaba, ${productName} için fiyat teklifi istiyorum.`;
        }
        
        // Footer iletişim bilgileri
        const footerPhones = document.querySelectorAll('.contact-info p');
        footerPhones.forEach(p => {
            if(p.innerHTML.includes('fas fa-phone')) {
                p.innerHTML = `<i class="fas fa-phone"></i> ${TELEFON_NUMARASI}`;
            }
        });
        
        // İletişim sayfası özel güncellemeleri
        updateContactPagePhones();
        updateQuickActionButtons();
    }
    
    // İletişim sayfası telefon numaralarını güncelle
    function updateContactPagePhones() {
        // İletişim sayfası telefon gösterimi
        const contactPhoneDisplay = document.getElementById('contact-phone-display');
        const whatsappPhoneDisplay = document.getElementById('whatsapp-phone-display');
        const supportPhoneDisplay = document.getElementById('support-phone-display');
        
        // Yeni ID'ler
        const phoneDisplay = document.getElementById('phone-display');
        const whatsappDisplay = document.getElementById('whatsapp-display');
        
        if(contactPhoneDisplay) contactPhoneDisplay.textContent = TELEFON_NUMARASI;
        if(whatsappPhoneDisplay) whatsappPhoneDisplay.textContent = TELEFON_NUMARASI;
        if(supportPhoneDisplay) supportPhoneDisplay.textContent = TELEFON_NUMARASI;
        
        // Yeni tasarım ID'leri
        if(phoneDisplay) phoneDisplay.textContent = TELEFON_NUMARASI;
        if(whatsappDisplay) whatsappDisplay.textContent = TELEFON_NUMARASI;
        
        // İletişim sayfası butonları
        const contactPhoneBtn = document.getElementById('contact-phone-btn');
        const contactWhatsappBtn = document.getElementById('contact-whatsapp-btn');
        const supportPhoneBtn = document.getElementById('support-phone-btn');
        const quickPhoneBtn = document.getElementById('quick-phone-btn');
        const quickWhatsappBtn = document.getElementById('quick-whatsapp-btn');
        
        // Yeni tasarım butonları
        const phoneBtn = document.getElementById('phone-btn');
        const whatsappBtn = document.getElementById('whatsapp-btn');
        
        if(contactPhoneBtn) contactPhoneBtn.href = `tel:${TELEFON_NUMARASI}`;
        if(contactWhatsappBtn) contactWhatsappBtn.href = `https://wa.me/${WHATSAPP_NUMARASI}?text=Merhaba, iletişim sayfasından yazıyorum.`;
        if(supportPhoneBtn) supportPhoneBtn.href = `tel:${TELEFON_NUMARASI}`;
        if(quickPhoneBtn) quickPhoneBtn.href = `tel:${TELEFON_NUMARASI}`;
        if(quickWhatsappBtn) quickWhatsappBtn.href = `https://wa.me/${WHATSAPP_NUMARASI}?text=Merhaba, size nasıl yardımcı olabiliriz?`;
        
        // Yeni tasarım butonları
        if(phoneBtn) phoneBtn.href = `tel:${TELEFON_NUMARASI}`;
        if(whatsappBtn) whatsappBtn.href = `https://wa.me/${WHATSAPP_NUMARASI}?text=Merhaba AVCI MAKİNE İNŞAAT, ürünleriniz hakkında bilgi almak istiyorum.`;
    }

    // Hızlı aksiyon butonları güncelle (Yeni iletişim sayfası için)
    function updateQuickActionButtons() {
        const priceQuoteBtn = document.getElementById('price-quote-btn');
        const emergencyCallBtn = document.getElementById('emergency-call-btn');
        
        if(priceQuoteBtn) {
            priceQuoteBtn.href = `https://wa.me/${WHATSAPP_NUMARASI}?text=Merhaba, ürünleriniz hakkında fiyat bilgisi almak istiyorum.`;
        }
        if(emergencyCallBtn) {
            emergencyCallBtn.href = `tel:${TELEFON_NUMARASI}`;
        }
        
        console.log('Hızlı aksiyon butonları güncellendi');
    }
    
    // Sayfa yüklendiğinde telefon numaralarını güncelle
    updatePhoneNumbers();
    
    // Mobil Menü
    const menuToggle = document.getElementById('mobile-menu');
    const navList = document.getElementById('nav-list');
    if(menuToggle) {
        menuToggle.addEventListener('click', () => {
            navList.classList.toggle('active');
        });
    }
    
    // Dropdown Click Event (hover yerine)
    const dropdownToggle = document.querySelector('.dropdown-toggle');
    const dropdown = document.querySelector('.dropdown');
    
    if(dropdownToggle && dropdown) {
        dropdownToggle.addEventListener('click', (e) => {
            e.preventDefault();
            dropdown.classList.toggle('active');
        });
        
        // Dışarı tıklanınca kapat
        document.addEventListener('click', (e) => {
            if (!dropdown.contains(e.target)) {
                dropdown.classList.remove('active');
            }
        });
    }
    
    // Mobil Kategoriler Toggle
    const mobileCategoriesToggle = document.getElementById('mobile-categories-toggle');
    const mobileCategoriesList = document.getElementById('mobile-categories-list');
    const mobileCategoriesIcon = document.getElementById('mobile-categories-icon');
    
    if(mobileCategoriesToggle) {
        mobileCategoriesToggle.addEventListener('click', () => {
            mobileCategoriesList.classList.toggle('active');
            mobileCategoriesIcon.classList.toggle('fa-chevron-down');
            mobileCategoriesIcon.classList.toggle('fa-chevron-up');
        });
    }

    // Ürünler Sayfası Kontrolü
    const productContainer = document.getElementById('product-container');
    
    if (productContainer) {
        const urlParams = new URLSearchParams(window.location.search);
        let categoryParam = urlParams.get('kategori');

        // --- GÜVENLİK KONTROLÜ ---
        // Eğer URL'deki parametre bizim izin verdiğimiz listede yoksa,
        // veya boşsa, otomatik olarak 'hepsi' kategorisine çevir.
        // Bu, siber güvenlik için input validation (giriş doğrulama) sağlar.
        if (!categoryParam || !allowedCategories.includes(categoryParam)) {
            categoryParam = 'hepsi';
        }

        filterProducts(categoryParam);
    }
});

function filterProducts(category) {
    const container = document.getElementById('product-container');
    const header = document.getElementById('category-header');
    
    // Butonları güncelle
    document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
    const activeBtn = document.getElementById('btn-' + category);
    if(activeBtn) activeBtn.classList.add('active');

    // Başlık güncelle
    if(category === 'hepsi') header.innerText = "Tüm Ürün Kataloğu";
    else if(category === 'bukme') header.innerText = "Demir Bükme Makineleri";
    else if(category === 'kesme') header.innerText = "Demir Kesme Makineleri";
    else if(category === 'vibrator') header.innerText = "Beton Vibratörleri";
    else if(category === 'diger') header.innerText = "Diğer Ekipmanlar";

    // Filtreleme
    let filteredData;
    if(category === 'hepsi') {
        filteredData = products;
    } else {
        filteredData = products.filter(p => p.category === category);
    }

    // HTML Oluştur
    let html = '';
    filteredData.forEach(item => {
        // Önce detailPage özelliğini kontrol et, yoksa generateProductUrl kullan
        const productUrl = item.detailPage || generateProductUrl(item.name, item.id);
        html += `
        <div class="p-card" onclick="window.location.href='${productUrl}'">
            <img src="${item.img}" alt="${item.name}">
            <div class="p-info">
                <h4>${item.name}</h4>
                <span class="p-detail">İncele <i class="fas fa-arrow-right"></i></span>
            </div>
        </div>
        `;
    });

    container.innerHTML = html;
}

// ÜRÜN SAYFA URL'İ OLUŞTUR
function generateProductUrl(productName, productId) {
    // Özel URL mappings için
    const specialUrls = {
        'Afacan R18': 'afacan-18mm-demir-bukme.html',
        'Afacan R20': 'afacan-20mm-demir-bukme.html',
        'Afacan R24': 'afacan-24mm-demir-bukme.html',
        'Anadolu DB25': 'anadolu-db25.html',
        // Buraya daha fazla özel URL eklenebilir
    };
    
    // Özel URL varsa onu kullan
    for (let key in specialUrls) {
        if (productName.includes(key)) {
            return specialUrls[key];
        }
    }
    
    // Otomatik URL oluştur (ürün adından)
    let slug = productName
        .toLowerCase()
        .replace(/ı/g, 'i')
        .replace(/ğ/g, 'g')
        .replace(/ü/g, 'u')
        .replace(/ş/g, 's')
        .replace(/ç/g, 'c')
        .replace(/ö/g, 'o')
        .replace(/[^a-z0-9\s]/g, '') // özel karakterleri kaldır
        .trim()
        .replace(/\s+/g, '-') // boşlukları tire ile değiştir
        .substring(0, 50); // 50 karakter ile sınırla
        
    return slug + '.html';
}

// MODAL İŞLEMLERİ (Eski sistem - geriye uyumluluk için)
const modal = document.getElementById('product-modal');

// WhatsApp Otomatik Mesaj Sistemi
function sendWhatsAppMessage() {
    const message = "Merhaba Avcı Makine İnşaat,\n\nİnşaat makineleri hakkında bilgi almak istiyorum. Beni arayabilir misiniz?\n\nTeşekkürler.";
    const encodedMessage = encodeURIComponent(message);
    const phoneNumber = "905367281833";
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');
}

// Ürün odaklı WhatsApp mesajı (modal'dan çağrılacak)
function sendProductWhatsApp(productName) {
    const message = `Merhaba Avcı Makine İnşaat,\n\n"${productName}" hakkında detaylı bilgi almak istiyorum.\n\nFiyat, teknik özellikler ve teslimat süresi konularında bilgi verebilir misiniz?\n\nTeşekkürler.`;
    const encodedMessage = encodeURIComponent(message);
    const phoneNumber = "905367281833";
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');
}

function openModal(id) {
    const product = products.find(p => p.id === id);
    if(!product) return;

    document.getElementById('m-img').src = product.img;
    document.getElementById('m-title').innerText = product.name;
    document.getElementById('m-desc').innerText = product.desc;
    
    const specsList = document.getElementById('m-specs');
    specsList.innerHTML = product.specs.map(s => `<li>${s}</li>`).join('');

    modal.style.display = 'flex';
}

function closeModal() {
    modal.style.display = 'none';
}

window.onclick = function(event) {
    if (event.target == modal) {
        closeModal();
    }
}