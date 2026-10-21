// --- GLOBAL AYARLAR ---
const TELEFON_NUMARASI = '+905367281833'; // Buradan tüm siteyi yönet
const WHATSAPP_NUMARASI = '905367281833'; // WhatsApp için prefix'siz
const TELEFON_GORUNEN = '+90 536 728 18 33'; // Sayfada gösterilen hali

// --- GÜVENLİK AYARI: İZİN VERİLEN KATEGORİLER ---
// Bu liste dışındaki bir kelime url'ye yazılırsa sistem otomatik 'hepsi' yapar.
const allowedCategories = ['hepsi', 'bukme', 'kesme', 'vibrator', 'vibrator-hortum', 'asfalt-kesme', 'benzinli-kompaktor', 'ciroz', 'el-aletleri', 'diger'];


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
        
        if(contactPhoneDisplay) contactPhoneDisplay.textContent = TELEFON_GORUNEN;
        if(whatsappPhoneDisplay) whatsappPhoneDisplay.textContent = TELEFON_GORUNEN;
        if(supportPhoneDisplay) supportPhoneDisplay.textContent = TELEFON_GORUNEN;
        
        // Yeni tasarım ID'leri
        if(phoneDisplay) phoneDisplay.textContent = TELEFON_GORUNEN;
        if(whatsappDisplay) whatsappDisplay.textContent = TELEFON_GORUNEN;
        
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
    
    // Mobil menü ve dropdown olayları components.js içindeki initMenuEvents() ile bağlanıyor

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

    // Ürün Detay Sayfası Kontrolü
    const productDetailContainer = document.getElementById('product-detail-container');
    if (productDetailContainer) {
        renderProductDetail();
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
    const categoryTitles = {
        'hepsi': "Tüm Ürün Kataloğu",
        'bukme': "Demir Bükme Makineleri",
        'kesme': "Demir Kesme Makineleri",
        'vibrator': "Beton Vibratörleri",
        'vibrator-hortum': "Beton Vibratör Hortumları",
        'asfalt-kesme': "Asfalt Kesme Makineleri",
        'benzinli-kompaktor': "Benzinli Kompaktörler",
        'ciroz': "Çiroz",
        'el-aletleri': "El Aletleri",
        'diger': "Diğer Ekipmanlar"
    };
    header.innerText = categoryTitles[category] || "Tüm Ürün Kataloğu";

    // Filtreleme
    let filteredData;
    if(category === 'hepsi') {
        filteredData = products;
    } else if(category === 'diger') {
        // Ana kategoriler (bükme, kesme, vibratör) dışındaki tüm ürünler
        filteredData = products.filter(p => !['bukme', 'kesme', 'vibrator'].includes(p.category));
    } else {
        filteredData = products.filter(p => p.category === category);
    }

    // HTML Oluştur
    let html = '';
    filteredData.forEach(item => {
        const productUrl = generateProductUrl(item.name, item.id);
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

// ÜRÜN SAYFA URL'İ OLUŞTUR (tools/sayfa-uret.js ile üretilen statik ürün sayfası)
function generateProductUrl(productName, productId) {
    const product = products.find(p => p.id === productId);
    return product ? `/${product.detailPage}` : `urun-detay.html?id=${productId}`;
}

// ÜRÜN DETAY SAYFASI RENDER FONKSİYONU
function renderProductDetail() {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = parseInt(urlParams.get('id'));
    
    const product = products.find(p => p.id === productId);
    const container = document.getElementById('product-detail-container');
    
    if (!product) {
        container.innerHTML = '<div style="text-align: center; padding: 50px;"><h2>Ürün Bulunamadı</h2><a href="urunler.html" class="btn">Kataloğa Dön</a></div>';
        return;
    }

    // Eski urun-detay.html?id=... linklerini statik ürün sayfasına yönlendir
    if (product.detailPage) {
        window.location.replace(`/${product.detailPage}`);
        return;
    }
    
    // SEO Güncellemeleri
    document.title = `${product.name} - AVCI MAKİNE İNŞAAT`;
    const metaDesc = document.querySelector('meta[name="description"]');
    if(metaDesc) {
        metaDesc.setAttribute('content', `${product.name} - ${product.desc}`);
    }
    
    // Breadcrumb Güncellemesi
    document.getElementById('bc-product-name').innerText = product.name;
    const catLink = document.getElementById('bc-category-link');
    catLink.href = `urunler.html?kategori=${product.category}`;
    
    // Kategori adını bul
    let catName = "Kategori";
    if(product.category === 'bukme') catName = "Demir Bükme";
    if(product.category === 'kesme') catName = "Demir Kesme";
    if(product.category === 'vibrator') catName = "Beton Vibratörleri";
    if(product.category === 'vibrator-hortum') catName = "Beton Vibratör Hortumu";
    if(product.category === 'asfalt-kesme') catName = "Asfalt Kesme Makinesi";
    if(product.category === 'benzinli-kompaktor') catName = "Benzinli Kompaktör";
    if(product.category === 'ciroz') catName = "Çiroz";
    if(product.category === 'el-aletleri') catName = "El Aletleri";
    
    // Specs listesi ve tablosu oluştur
    const specsList = product.specs.map(s => `<li>${s}</li>`).join('');
    const specsTable = product.specs.map(s => {
        let parts = s.split(':');
        if(parts.length > 1) return `<tr><td>${parts[0]}</td><td>${parts[1]}</td></tr>`;
        return `<tr><td colspan="2">${s}</td></tr>`;
    }).join('');
    
    // Benzer Ürünler
    const relatedProducts = products.filter(p => p.category === product.category && p.id !== product.id).slice(0, 3);
    let relatedHtml = '';
    relatedProducts.forEach(rp => {
        relatedHtml += `
        <div class="related-item" onclick="window.location.href='urun-detay.html?id=${rp.id}'">
            <img src="${rp.img}" alt="${rp.name}">
            <h4>${rp.name}</h4>
            <span class="related-price">İncele</span>
        </div>`;
    });
    
    let relatedSection = '';
    if(relatedProducts.length > 0) {
        relatedSection = `
        <div class="related-products">
            <h3><i class="fas fa-layer-group"></i> Benzer Ürünler</h3>
            <div class="related-grid">
                ${relatedHtml}
            </div>
        </div>`;
    }

    const html = `
    <div class="product-detail-layout">
        <!-- ÜRÜN RESİMLERİ -->
        <div class="product-images">
            <div class="main-image">
                <img id="main-product-img" src="${product.img}" alt="${product.name}">
                <div class="image-zoom-overlay">
                    <i class="fas fa-search-plus"></i>
                </div>
            </div>
        </div>

        <!-- ÜRÜN BİLGİLERİ -->
        <div class="product-info">
            <div class="product-header">
                <h1>${product.name}</h1>
                <div class="product-category">
                    <span class="category-tag"><i class="fas fa-tag"></i> ${catName}</span>
                </div>
            </div>

            <div class="product-summary">
                <p>${product.desc}</p>
            </div>

            <!-- ÖZELLİKLER -->
            <div class="product-features">
                <h3><i class="fas fa-cogs"></i> Teknik Özellikler</h3>
                <ul class="features-list">
                    ${specsList}
                </ul>
            </div>

            <!-- FİYAT VE İLETİŞİM -->
            <div class="product-pricing">
                <div class="price-section">
                    <div class="price-label">Fiyat Bilgisi İçin:</div>
                    <div class="contact-buttons">
                        <a href="tel:${TELEFON_NUMARASI_GLOBAL}" class="btn-primary">
                            <i class="fas fa-phone"></i> Hemen Ara
                        </a>
                        <a href="https://wa.me/${WHATSAPP_NUMARASI_GLOBAL}?text=${encodeURIComponent('Merhaba, ' + product.name + ' için fiyat teklifi istiyorum.')}" target="_blank" class="btn-whatsapp">
                            <i class="fab fa-whatsapp"></i> WhatsApp Fiyat Al
                        </a>
                    </div>
                </div>
            </div>

            <!-- AVANTAJLAR -->
            <div class="product-advantages">
                <h3><i class="fas fa-star"></i> Ürün Avantajları</h3>
                <div class="advantages-grid">
                    <div class="advantage-item">
                        <i class="fas fa-shipping-fast"></i>
                        <span>Türkiye Geneli Teslimat</span>
                    </div>
                    <div class="advantage-item">
                        <i class="fas fa-tools"></i>
                        <span>Ücretsiz Destek</span>
                    </div>
                    <div class="advantage-item">
                        <i class="fab fa-whatsapp"></i>
                        <span>WhatsApp'tan Hızlı Fiyat</span>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- ÜRÜN AÇIKLAMASI -->
    <div class="product-description">
        <div class="tabs-container">
            <div class="tabs-nav">
                <button class="tab-btn active" onclick="openTab(event, 'description')">
                    <i class="fas fa-info-circle"></i> Genel Açıklama
                </button>
                <button class="tab-btn" onclick="openTab(event, 'specifications')">
                    <i class="fas fa-list"></i> Teknik Tablo
                </button>
            </div>

            <div id="description" class="tab-content active">
                <h3>${product.name} Detayları</h3>
                <p>${product.desc}</p>
                <p>Türkiye'nin her yerine teslimat imkanı. Detaylı bilgi için bizimle iletişime geçebilirsiniz.</p>
            </div>

            <div id="specifications" class="tab-content">
                <h3>Teknik Detaylar</h3>
                <table class="specs-table">
                    ${specsTable}
                </table>
            </div>
        </div>
    </div>
    
    ${relatedSection}
    `;
    
    container.innerHTML = html;
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