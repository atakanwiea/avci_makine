// --- STATİK SAYFA ÜRETİCİ ---
// urun-verisi.js ve tools/icerik.js içindeki bilgilerden Google ve yapay zeka botlarının
// okuyabileceği hazır HTML sayfaları üretir: kategori, ürün ve şehir sayfaları, sitemap.xml, llms.txt.
// Çalıştırmak için (proje klasöründe): node tools/sayfa-uret.js

const fs = require('fs');
const path = require('path');
const { products, categories } = require('../urun-verisi.js');
const { firma, kategoriIcerik, sehirler, sehirKategoriMetni, tumIller } = require('./icerik.js');

const ROOT = path.join(__dirname, '..');
const BUGUN = new Date().toISOString().slice(0, 10);
const uretilenSayfalar = []; // sitemap için: { url, images: [] }

// --- YARDIMCILAR ---
const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const etiketsiz = (s) => String(s).replace(/<[^>]+>/g, '');
const tamUrl = (p) => `${firma.site}/${p.replace(/^\//, '').replace(/index\.html$/, '')}`;
const kategoriUrl = (catKey) => `/${categories[catKey].slug}/`;
const whatsappLink = (mesaj) => `https://wa.me/${firma.whatsapp}?text=${encodeURIComponent(mesaj)}`;
const kategoriUrunleri = (catKey) => products.filter(p => p.category === catKey);
const sehirSayfasi = (ad) => sehirler.find(s => s.ad === ad);

function yaz(dosya, icerik) {
    const hedef = path.join(ROOT, dosya);
    fs.mkdirSync(path.dirname(hedef), { recursive: true });
    fs.writeFileSync(hedef, icerik);
}

const organizasyonLd = {
    '@type': 'Organization',
    '@id': `${firma.site}/#organization`,
    name: firma.ad,
    url: `${firma.site}/`,
    logo: `${firma.site}/images/logo.png`,
    telephone: firma.telefon,
    email: firma.email,
    areaServed: { '@type': 'Country', name: 'Türkiye' },
    contactPoint: { '@type': 'ContactPoint', telephone: firma.telefon, contactType: 'sales', areaServed: 'TR', availableLanguage: 'Turkish' }
};

function breadcrumbLd(yol) {
    return {
        '@type': 'BreadcrumbList',
        itemListElement: yol.map((b, i) => ({ '@type': 'ListItem', position: i + 1, name: b.ad, item: tamUrl(b.url) }))
    };
}

function sssLd(sss) {
    return {
        '@type': 'FAQPage',
        mainEntity: sss.map(s => ({ '@type': 'Question', name: s.q, acceptedAnswer: { '@type': 'Answer', text: etiketsiz(s.a) } }))
    };
}

// --- ORTAK PARÇALAR ---
function sayfa({ dosya, title, description, gorsel, jsonLd, yol, govde, gorseller = [] }) {
    const canonical = tamUrl(dosya);
    const ogGorsel = `${firma.site}/${gorsel}`;
    const ld = { '@context': 'https://schema.org', '@graph': [organizasyonLd, breadcrumbLd(yol), ...jsonLd] };

    const breadcrumbHtml = yol.map((b, i) => i === yol.length - 1
        ? `<span>${esc(b.ad)}</span>`
        : `<a href="${b.url}">${i === 0 ? '<i class="fas fa-home"></i> ' : ''}${esc(b.ad)}</a>\n                <i class="fas fa-chevron-right"></i>`
    ).join('\n                ');

    const html = `<!DOCTYPE html>
<html lang="tr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${esc(title)}</title>
    <meta name="description" content="${esc(description)}">
    <meta name="robots" content="index, follow, max-image-preview:large">
    <link rel="canonical" href="${canonical}">
    <meta property="og:type" content="website">
    <meta property="og:locale" content="tr_TR">
    <meta property="og:site_name" content="${firma.ad}">
    <meta property="og:url" content="${canonical}">
    <meta property="og:title" content="${esc(title)}">
    <meta property="og:description" content="${esc(description)}">
    <meta property="og:image" content="${ogGorsel}">
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:image" content="${ogGorsel}">
    <link rel="icon" href="/images/favicon.png" type="image/png">
    <link rel="stylesheet" href="/style.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">
    <script type="application/ld+json">${JSON.stringify(ld)}</script>
</head>
<body>
    <!-- Bu sayfa tools/sayfa-uret.js ile üretildi. Elle düzenlemeyin; urun-verisi.js veya tools/icerik.js dosyasını değiştirip betiği yeniden çalıştırın. -->
    <div class="breadcrumb-section">
        <div class="container">
            <nav class="breadcrumb">
                ${breadcrumbHtml}
            </nav>
        </div>
    </div>

${govde}

    <script src="/components.js"></script>
</body>
</html>
`;
    yaz(dosya, html);
    uretilenSayfalar.push({ url: canonical, images: [ogGorsel, ...gorseller.map(g => `${firma.site}/${g}`)] });
}

// "Kapasite: 18MM" -> { ad: 'Kapasite', deger: '18MM' }
function ozellikAyir(s) {
    const i = s.indexOf(':');
    return i > -1 ? { ad: s.slice(0, i).trim(), deger: s.slice(i + 1).trim() } : { ad: s, deger: '' };
}

function urunKarti(p) {
    const ozellikler = p.specs.slice(0, 2).map(ozellikAyir);
    return `<a href="/${p.detailPage}" class="u-kart">
                    <div class="u-kart-gorsel">
                        <span class="u-marka">${esc(p.brand)}</span>
                        <img src="/${p.img}" alt="${esc(p.name)}" loading="lazy">
                    </div>
                    <div class="u-kart-govde">
                        <h3>${esc(p.name)}</h3>
                        <ul class="u-ozellik">
                            ${ozellikler.map(o => `<li><span>${esc(o.ad)}</span>${esc(o.deger)}</li>`).join('\n                            ')}
                        </ul>
                        <span class="u-incele">İncele <i class="fas fa-arrow-right"></i></span>
                    </div>
                </a>`;
}

// Sayfanın üstündeki lacivert bant: başlık, kısa metin, rozetler ve iletişim butonları
function hero({ h1, alt, paragraflar, rozetler = [], gorsel, mesaj }) {
    return `    <section class="sayfa-hero">
        <div class="container sayfa-hero-ic${gorsel ? '' : ' tek-sutun'}">
            <div class="sayfa-hero-metin">
                <h1>${esc(h1)}</h1>
                ${alt ? `<p class="sayfa-hero-alt">${esc(alt)}</p>` : ''}
                ${paragraflar.map(p => `<p>${p}</p>`).join('\n                ')}
                ${rozetler.length ? `<ul class="hero-rozetler">
                    ${rozetler.map(r => `<li><i class="${r.ikon}"></i> ${esc(r.metin)}</li>`).join('\n                    ')}
                </ul>` : ''}
                <div class="hero-butonlar">
                    <a href="tel:${firma.telefon}" class="btn-primary"><i class="fas fa-phone"></i> ${firma.telefonGorunen}</a>
                    <a href="${whatsappLink(mesaj)}" target="_blank" rel="noopener" class="btn-whatsapp"><i class="fab fa-whatsapp"></i> WhatsApp'tan Fiyat Al</a>
                </div>
            </div>
            ${gorsel ? `<div class="sayfa-hero-gorsel"><img src="/${gorsel.img}" alt="${esc(gorsel.alt)}"></div>` : ''}
        </div>
    </section>`;
}

function sssHtml(sss, baslik = 'Sıkça Sorulan Sorular') {
    return `<div class="seo-block">
                <h2>${esc(baslik)}</h2>
                <div class="faq-liste">
                ${sss.map(s => `<details class="faq-item">
                    <summary>${esc(s.q)}</summary>
                    <p>${esc(s.a)}</p>
                </details>`).join('\n                ')}
                </div>
            </div>`;
}

function iletisimKutusu(mesaj) {
    return `<div class="cta-bant">
                <div class="cta-bant-metin">
                    <i class="fab fa-whatsapp"></i>
                    <div>
                        <strong>Güncel fiyat ve stok bilgisi için yazın</strong>
                        <span>Ürün adını WhatsApp'tan göndermeniz yeterli · ${firma.telefonGorunen}</span>
                    </div>
                </div>
                <div class="contact-buttons">
                    <a href="tel:${firma.telefon}" class="btn-primary"><i class="fas fa-phone"></i> Hemen Ara</a>
                    <a href="${whatsappLink(mesaj)}" target="_blank" rel="noopener" class="btn-whatsapp"><i class="fab fa-whatsapp"></i> WhatsApp'tan Yaz</a>
                </div>
            </div>`;
}

function bolgeLinkleri(haric) {
    const linkler = sehirler.filter(s => s.slug !== haric).map(s => `<li><a href="/bolgeler/${s.slug}.html"><i class="fas fa-location-dot"></i> ${esc(s.ad)}</a></li>`);
    return `<aside class="bolge-panel">
                <div class="bolge-panel-baslik">
                    <span class="bolge-ikon"><i class="fas fa-truck-fast"></i></span>
                    <div>
                        <h2>Düzenli olarak gittiğimiz bölgeler</h2>
                        <p>Bursa'dan Türkiye'nin 81 iline gönderim yapıyoruz.</p>
                    </div>
                </div>
                <ul class="bolge-cipler">
                    ${linkler.join('\n                    ')}
                </ul>
                <a href="/bolgeler/" class="bolge-tumu">Tüm hizmet bölgeleri <i class="fas fa-arrow-right"></i></a>
            </aside>`;
}

// "<strong>Kapasite (mm):</strong> açıklama" maddesini başlık + metin olarak ayırır
function rehberKarti(madde, i) {
    const m = madde.match(/^<strong>(.*?)<\/strong>\s*(.*)$/s);
    const baslik = m ? m[1].replace(/:\s*$/, '') : '';
    const metin = m ? m[2] : madde;
    return `<li class="rehber-kart">
                        <span class="rehber-no">${String(i + 1).padStart(2, '0')}</span>
                        <div>
                            ${baslik ? `<h3>${baslik}</h3>` : ''}
                            <p>${metin}</p>
                        </div>
                    </li>`;
}

// Karşılaştırma tablosu: en az iki üründe geçen özellikler sütun olur
function karsilastirmaTablosu(urunler) {
    const sayac = new Map();
    urunler.forEach(p => p.specs.map(ozellikAyir).forEach(o => o.deger && sayac.set(o.ad, (sayac.get(o.ad) || 0) + 1)));
    const sutunlar = [...sayac].filter(([, n]) => n >= Math.min(2, urunler.length)).sort((a, b) => b[1] - a[1]).slice(0, 5).map(([ad]) => ad);
    const deger = (p, ad) => { const o = p.specs.map(ozellikAyir).find(o => o.ad === ad); return o ? esc(o.deger) : '<span class="bos">—</span>'; };
    return `<div class="table-scroll">
                <table class="karsilastirma">
                    <thead><tr><th>Model</th><th>Marka</th>${sutunlar.map(s => `<th>${esc(s)}</th>`).join('')}</tr></thead>
                    <tbody>
                    ${urunler.map(p => `<tr><td><a href="/${p.detailPage}">${esc(p.name)}</a></td><td>${esc(p.brand)}</td>${sutunlar.map(s => `<td>${deger(p, s)}</td>`).join('')}</tr>`).join('\n                    ')}
                    </tbody>
                </table>
                </div>`;
}

// --- KATEGORİ SAYFALARI ---
for (const [catKey, cat] of Object.entries(categories)) {
    const icerik = kategoriIcerik[catKey];
    const urunler = kategoriUrunleri(catKey);
    if (!icerik || urunler.length === 0) continue;

    const markalar = [...new Set(urunler.map(p => p.brand))];
    const govde = `${hero({
        h1: icerik.h1,
        paragraflar: icerik.intro,
        rozetler: [
            { ikon: 'fas fa-box', metin: `${urunler.length} model` },
            { ikon: 'fas fa-tag', metin: markalar.join(' · ') },
            { ikon: 'fas fa-truck-fast', metin: '81 ile gönderim' }
        ],
        gorsel: { img: urunler[0].img, alt: urunler[0].name },
        mesaj: `Merhaba, ${cat.short} makineleri hakkında fiyat bilgisi almak istiyorum.`
    })}

    <section class="seo-page">
        <div class="container">
            <div class="bolum-baslik">
                <h2>${esc(cat.name)} Modelleri</h2>
                <span>${urunler.length} ürün</span>
            </div>
            <div class="u-grid">
                ${urunler.map(urunKarti).join('\n                ')}
            </div>

            ${icerik.rehber.map(r => `<div class="seo-block">
                <h2>${esc(r.baslik)}</h2>
                <ul class="rehber-grid">
                    ${r.maddeler.map(rehberKarti).join('\n                    ')}
                </ul>
            </div>`).join('\n            ')}

            ${urunler.length > 1 ? `<div class="seo-block">
                <h2>${esc(cat.name)} Karşılaştırma</h2>
                ${karsilastirmaTablosu(urunler)}
            </div>` : ''}

            ${iletisimKutusu(`Merhaba, ${cat.short} makineleri hakkında fiyat bilgisi almak istiyorum.`)}

            ${bolgeLinkleri()}
        </div>
    </section>`;

    sayfa({
        dosya: `${cat.slug}/index.html`,
        title: icerik.title,
        description: icerik.description,
        gorsel: urunler[0].img,
        gorseller: urunler.slice(1).map(p => p.img),
        yol: [{ ad: 'Ana Sayfa', url: '/' }, { ad: 'Ürünler', url: '/urunler.html' }, { ad: cat.short, url: kategoriUrl(catKey) }],
        jsonLd: [
            {
                '@type': 'CollectionPage', name: icerik.h1, url: tamUrl(`${cat.slug}/`),
                mainEntity: { '@type': 'ItemList', itemListElement: urunler.map((p, i) => ({ '@type': 'ListItem', position: i + 1, url: tamUrl(p.detailPage), name: p.name })) }
            }
        ],
        govde
    });
}

// --- ÜRÜN SAYFALARI ---
for (const p of products) {
    const cat = categories[p.category];
    const icerik = kategoriIcerik[p.category];
    const specs = p.specs.map(ozellikAyir);

    const benzerler = kategoriUrunleri(p.category).filter(r => r.id !== p.id).slice(0, 3);
    const benzerHtml = benzerler.length ? `<div class="related-products">
            <h2><i class="fas fa-layer-group"></i> Benzer Ürünler</h2>
            <div class="related-grid">
                ${benzerler.map(r => `<a href="/${r.detailPage}" class="related-item">
                    <img src="/${r.img}" alt="${esc(r.name)}" loading="lazy">
                    <h4>${esc(r.name)}</h4>
                    <span class="related-price">İncele</span>
                </a>`).join('\n                ')}
            </div>
        </div>` : '';

    const govde = `    <section class="product-detail">
        <div class="container">
        <div class="product-detail-layout">
            <div class="product-images">
                <div class="main-image">
                    <img src="/${p.img}" alt="${esc(p.name)}">
                </div>
            </div>

            <div class="product-info">
                <div class="product-header">
                    <h1>${esc(p.name)}</h1>
                    <div class="product-category">
                        <a href="${kategoriUrl(p.category)}" class="category-tag"><i class="fas fa-tag"></i> ${esc(cat.short)}</a>
                    </div>
                </div>

                <div class="product-summary">
                    <p>${esc(p.desc)}</p>
                </div>

                <div class="product-features">
                    <h2><i class="fas fa-cogs"></i> Teknik Özellikler</h2>
                    <ul class="features-list">
                        ${p.specs.map(s => `<li>${esc(s)}</li>`).join('\n                        ')}
                    </ul>
                </div>

                <div class="product-pricing">
                    <div class="price-section">
                        <div class="price-label">Fiyat Bilgisi İçin:</div>
                        <div class="contact-buttons">
                            <a href="tel:${firma.telefon}" class="btn-primary"><i class="fas fa-phone"></i> Hemen Ara</a>
                            <a href="${whatsappLink(`Merhaba, ${p.name} için fiyat teklifi istiyorum.`)}" target="_blank" rel="noopener" class="btn-whatsapp"><i class="fab fa-whatsapp"></i> WhatsApp Fiyat Al</a>
                        </div>
                    </div>
                </div>

                <div class="product-advantages">
                    <div class="advantages-grid">
                        <div class="advantage-item"><i class="fas fa-shipping-fast"></i><span>Türkiye Geneli Teslimat</span></div>
                        <div class="advantage-item"><i class="fas fa-tools"></i><span>Ücretsiz Destek</span></div>
                        <div class="advantage-item"><i class="fab fa-whatsapp"></i><span>WhatsApp'tan Hızlı Fiyat</span></div>
                    </div>
                </div>
            </div>
        </div>

        <div class="seo-block">
            <h2>Teknik Tablo</h2>
            <table class="specs-table">
                ${specs.map(s => s.deger ? `<tr><td>${esc(s.ad)}</td><td>${esc(s.deger)}</td></tr>` : `<tr><td colspan="2">${esc(s.ad)}</td></tr>`).join('\n                ')}
            </table>
        </div>

        ${icerik ? `<div class="seo-block">
            <h2>Kullanım Alanları</h2>
            <ul class="seo-list">
                ${icerik.kullanim.map(k => `<li>${esc(k)}</li>`).join('\n                ')}
            </ul>
        </div>` : ''}

        ${benzerHtml}

        ${bolgeLinkleri()}
        </div>
    </section>`;

    sayfa({
        dosya: p.detailPage,
        title: `${p.name} Fiyatı ve Özellikleri | Avcı Makine`,
        description: `${p.name}: ${p.desc} Türkiye geneli teslimat. Fiyat için WhatsApp: ${firma.telefonGorunen}.`,
        gorsel: p.img,
        yol: [{ ad: 'Ana Sayfa', url: '/' }, { ad: cat.short, url: kategoriUrl(p.category) }, { ad: p.name, url: `/${p.detailPage}` }],
        jsonLd: [
            {
                '@type': 'Product',
                name: p.name,
                image: [`${firma.site}/${p.img}`],
                description: p.desc,
                brand: { '@type': 'Brand', name: p.brand },
                category: cat.name,
                url: tamUrl(p.detailPage),
                additionalProperty: specs.filter(s => s.deger).map(s => ({ '@type': 'PropertyValue', name: s.ad, value: s.deger }))
            }
        ],
        govde
    });
}

// --- ŞEHİR / BÖLGE SAYFALARI ---
for (const s of sehirler) {
    const doluKategoriler = Object.keys(categories).filter(k => kategoriUrunleri(k).length > 0);
    const ustSayfa = s.ust ? sehirSayfasi(s.ust) : null;

    // Şehir sayfalarında sadece ana 4 kategori başlık olarak geçer, metinler kısa tutulur;
    // sayfanın çoğu şehre özel yazıdan oluşsun diye (aynı şablon metin Google'da kopya sayfa sayılır)
    const anaKategoriler = ['bukme', 'kesme', 'vibrator', 'benzinli-kompaktor'].filter(k => kategoriUrunleri(k).length > 0);
    const bolumler = `<div class="category-grid bolge-kategoriler">
                ${anaKategoriler.map(k => `<a href="${kategoriUrl(k)}" class="cat-card">
                    <img src="/${kategoriUrunleri(k)[0].img}" alt="${esc(categories[k].name)}" loading="lazy">
                    <div class="cat-info">
                        <h2>${esc(sehirKategoriMetni[k](s.ad).baslik)}</h2>
                        <p>${kategoriUrunleri(k).length} model · İncele</p>
                    </div>
                </a>`).join('\n                ')}
            </div>
            <p class="ek-urunler">Ayrıca <a href="/vibrator_hortumu/">vibratör hortumu</a>, <a href="/ciroz/">çiroz</a> ve <a href="/el_aletleri/">akülü el aletleri</a> de bulunur.</p>`;

    const ilcelerHtml = s.ilceler ? `<div class="seo-block">
                <h2>${esc(s.ad)} İlçeleri</h2>
                <p>${esc(s.ad)} genelindeki tüm ilçelere gönderim yapıyoruz: ${s.ilceler.map(i => {
                    const ilceSayfa = sehirSayfasi(i);
                    return ilceSayfa ? `<a href="/bolgeler/${ilceSayfa.slug}.html">${esc(i)}</a>` : esc(i);
                }).join(', ')}.</p>
            </div>` : '';

    const sss = [
        { q: `${s.ad} için fiyat nasıl alırım?`, a: `${firma.telefonGorunen} numarasından WhatsApp'tan ürün adını yazmanız yeterli; güncel fiyat ve gönderim bilgisini hemen iletelim.` },
        ...(s.mesafe ? [{ q: `Bursa ile ${s.ad} arası ne kadar?`, a: `Bursa ile ${s.ad} arası karayoluyla yaklaşık ${s.mesafe} km. ${s.ad} bölgesine düzenli olarak bizzat geliyoruz.` }] : [])
    ];

    const konum = s.ust ? `${s.ad} (${s.ust})` : s.ad;
    const govde = `${hero({
        h1: `${s.ad} İnşaat Makineleri`,
        alt: `${konum} için demir bükme makinesi, demir kesme makinesi, beton vibratörü (inşaat vibratörü) ve kompaktör`,
        paragraflar: [esc(s.giris), esc(s.detay)],
        rozetler: [
            { ikon: 'fas fa-location-dot', metin: s.mesafe ? `Bursa'ya yaklaşık ${s.mesafe} km` : 'Merkezimiz Nilüfer / Bursa' },
            { ikon: 'fas fa-truck-fast', metin: 'Düzenli olarak bizzat geliyoruz' }
        ],
        mesaj: `Merhaba, ${s.ad} için inşaat makineleri hakkında fiyat bilgisi almak istiyorum.`
    })}

    <section class="seo-page">
        <div class="container">
            <div class="bolum-baslik">
                <h2>${esc(s.ad)} için ürünlerimiz</h2>
            </div>
            ${bolumler}

            ${ilcelerHtml}

            ${sssHtml(sss)}

            ${iletisimKutusu(`Merhaba, ${s.ad} için inşaat makineleri hakkında fiyat bilgisi almak istiyorum.`)}

            ${bolgeLinkleri(s.slug)}
        </div>
    </section>`;

    const yol = [{ ad: 'Ana Sayfa', url: '/' }, { ad: 'Hizmet Bölgeleri', url: '/bolgeler/' }];
    if (ustSayfa) yol.push({ ad: ustSayfa.ad, url: `/bolgeler/${ustSayfa.slug}.html` });
    yol.push({ ad: s.ad, url: `/bolgeler/${s.slug}.html` });

    sayfa({
        dosya: `bolgeler/${s.slug}.html`,
        title: `${s.ad} Beton Vibratörü, Demir Bükme ve Demir Kesme Makinesi | Avcı Makine`,
        description: `${s.ad} inşaat vibratörü (beton vibratörü), demir bükme makinesi, demir kesme makinesi ve kompaktör. Bursa'dan ${s.ad} için gönderim. WhatsApp'tan fiyat: ${firma.telefonGorunen}.`,
        gorsel: products.find(p => p.category === 'vibrator').img,
        yol,
        jsonLd: [
            { '@type': 'WebPage', name: `${s.ad} İnşaat Makineleri`, url: tamUrl(`bolgeler/${s.slug}.html`), about: { '@id': organizasyonLd['@id'] }, spatialCoverage: { '@type': 'Place', name: s.ust ? `${s.ad}, ${s.ust}` : s.ad } },
            sssLd(sss)
        ],
        govde
    });
}

// Hizmet bölgeleri ana sayfası
sayfa({
    dosya: 'bolgeler/index.html',
    title: 'Hizmet Bölgeleri - Türkiye\'nin 81 İline İnşaat Makinesi Gönderimi | Avcı Makine',
    description: 'Avcı Makine, Bursa\'dan Türkiye\'nin 81 iline demir bükme, demir kesme makinesi, beton vibratörü ve kompaktör gönderir. İstanbul, İzmir, Ankara, Eskişehir, Balıkesir, Yalova ve tüm iller.',
    gorsel: products[0].img,
    yol: [{ ad: 'Ana Sayfa', url: '/' }, { ad: 'Hizmet Bölgeleri', url: '/bolgeler/' }],
    jsonLd: [{ '@type': 'CollectionPage', name: 'Hizmet Bölgeleri', url: tamUrl('bolgeler/') }],
    govde: `${hero({
        h1: 'Hizmet Bölgelerimiz',
        paragraflar: ['Avcı Makine İnşaat, Bursa Nilüfer\'den Türkiye\'nin 81 iline demir bükme makinesi, demir kesme makinesi, beton vibratörü, vibratör hortumu, kompaktör ve çiroz gönderir. Bulunduğunuz şehri seçerek o bölgeye özel bilgilere ulaşabilirsiniz.'],
        rozetler: [
            { ikon: 'fas fa-location-dot', metin: `${sehirler.length} bölgeye bizzat gidiyoruz` },
            { ikon: 'fas fa-truck-fast', metin: '81 ile gönderim' }
        ],
        mesaj: 'Merhaba, bulunduğum şehre gönderim ve fiyat hakkında bilgi almak istiyorum.'
    })}

    <section class="seo-page">
        <div class="container">
            <div class="seo-block">
                <h2>Düzenli Olarak Gittiğimiz Bölgeler</h2>
                <ul class="bolge-kartlar">
                    ${sehirler.map(s => `<li><a href="/bolgeler/${s.slug}.html"><i class="fas fa-location-dot"></i><strong>${esc(s.ad)}${s.ust ? ` <small>(${esc(s.ust)})</small>` : ''}</strong><span>${s.mesafe ? `Bursa'ya yaklaşık ${s.mesafe} km` : 'Merkez'}</span></a></li>`).join('\n                    ')}
                </ul>
            </div>

            <div class="seo-block">
                <h2>Gönderim Yaptığımız İller</h2>
                <p>Aşağıdaki tüm illere gönderim yapıyoruz. Gönderim şekli ve süresi için WhatsApp'tan bilgi alabilirsiniz.</p>
                <ul class="il-liste">
                    ${tumIller.map(il => `<li>${esc(il)}</li>`).join('\n                    ')}
                </ul>
            </div>

            ${iletisimKutusu('Merhaba, bulunduğum şehre gönderim ve fiyat hakkında bilgi almak istiyorum.')}
        </div>
    </section>`
});

// --- SITEMAP ---
const sabitSayfalar = [
    { url: `${firma.site}/`, images: [`${firma.site}/images/afacan-18mm/afacan_18mm_demirbukme.jpg`] },
    { url: `${firma.site}/urunler.html`, images: [] },
    { url: `${firma.site}/iletisim.html`, images: [] }
];
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${[...sabitSayfalar, ...uretilenSayfalar].map(s => `  <url>
    <loc>${esc(s.url)}</loc>
    <lastmod>${BUGUN}</lastmod>
${[...new Set(s.images)].map(img => `    <image:image><image:loc>${esc(encodeURI(img))}</image:loc></image:image>`).join('\n')}
  </url>`).join('\n')}
</urlset>
`;
yaz('sitemap.xml', sitemap.replace(/\n\n/g, '\n'));

// --- LLMS.TXT (yapay zeka asistanları için site özeti) ---
const llms = `# ${firma.ad}

> ${firma.ad}, ${firma.konum} merkezli bir inşaat makineleri satıcısıdır. Demir bükme makinesi, demir kesme makinesi, beton vibratörü (inşaat vibratörü), vibratör hortumu, benzinli kompaktör, çiroz ve akülü el aletleri satar. Türkiye'nin 81 iline gönderim yapar. Fiyatlar sitede yazmaz; fiyat ve stok bilgisi WhatsApp'tan verilir.

- Telefon / WhatsApp: ${firma.telefonGorunen} (${firma.telefon})
- E-posta: ${firma.email}
- Konum: ${firma.konum}
- Çalışma saatleri: ${firma.calismaSaatleri}
- Hizmet bölgesi: Türkiye geneli (81 il) gönderim. Düzenli olarak bizzat gidilen bölgeler: ${sehirler.map(s => s.ad).join(', ')}
- Markalar: ${[...new Set(products.map(p => p.brand))].join(', ')}

## Ürün kategorileri

${Object.entries(categories).filter(([k]) => kategoriUrunleri(k).length).map(([k, c]) => `- [${c.name}](${tamUrl(c.slug + '/')}): ${kategoriIcerik[k] ? kategoriIcerik[k].description : ''}`).join('\n')}

## Ürünler

${products.map(p => `- [${p.name}](${tamUrl(p.detailPage)}): ${p.desc} Özellikler: ${p.specs.join(', ')}.`).join('\n')}

## Hizmet bölgeleri

${sehirler.map(s => `- [${s.ad} inşaat makineleri](${tamUrl('bolgeler/' + s.slug + '.html')})`).join('\n')}
- [Tüm iller](${tamUrl('bolgeler/')})

## İletişim

- [İletişim sayfası](${firma.site}/iletisim.html)
`;
yaz('llms.txt', llms);

console.log(`${uretilenSayfalar.length} sayfa, sitemap.xml ve llms.txt üretildi.`);
