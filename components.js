const TELEFON_NUMARASI_GLOBAL = '+905367281833';
const WHATSAPP_NUMARASI_GLOBAL = '905367281833';

function renderFloatingContact() {
    const floatHtml = `
    <div class="floating-contact">
        <a href="tel:${TELEFON_NUMARASI_GLOBAL}" id="floating-phone-btn" class="float-btn phone-btn" title="Hemen Ara">
            <i class="fas fa-phone"></i>
        </a>
        <a href="https://wa.me/${WHATSAPP_NUMARASI_GLOBAL}?text=Merhaba, ürünleriniz hakkında bilgi almak istiyorum." id="floating-whatsapp-btn" class="float-btn whatsapp-btn" target="_blank" title="WhatsApp">
            <i class="fab fa-whatsapp"></i>
        </a>
    </div>
    `;
    document.body.insertAdjacentHTML('afterbegin', floatHtml);
}

function renderHeader() {
    const currentPath = window.location.pathname;
    const isHome = currentPath === '/' || currentPath.endsWith('/index.html') && currentPath.split('/').length === 2;
    const isProducts = currentPath.includes('urunler.html') || currentPath.includes('urun-detay.html');
    const isContact = currentPath.includes('iletisim.html');
    const isRegions = currentPath.includes('/bolgeler/');

    const headerHtml = `
    <header>
        <div class="container navbar">
            <div class="navbar-brand">
                <div class="logo"><a href="/" class="brand-logo"><img src="/images/logo-avci.png" alt="Avcı" width="115" height="46"><span class="brand-sub">İnşaat Makine ve<br>Teknik Servis</span></a></div>
                <div class="menu-toggle" id="mobile-menu"><i class="fas fa-bars"></i></div>
            </div>
            
            <nav>
                <ul class="nav-list" id="nav-list">
                    <li><a href="/" class="${isHome ? 'active' : ''}">Ana Sayfa</a></li>
                    <li class="dropdown">
                        <a href="/urunler.html" class="dropdown-toggle ${isProducts ? 'active' : ''}">Ürünler <i class="fas fa-chevron-down"></i></a>
                        <ul class="dropdown-menu">
                            <li><a href="/demir_bukme/"><i class="fas fa-bezier-curve"></i> Demir Bükme</a></li>
                            <li><a href="/demir_kesme/"><i class="fas fa-cut"></i> Demir Kesme</a></li>
                            <li><a href="/beton_vibratoru/"><i class="fas fa-hammer"></i> Beton Vibratörü</a></li>
                            <li><a href="/vibrator_hortumu/"><i class="fas fa-slash"></i> Vibratör Hortumu</a></li>
                            <li><a href="/kompaktor/"><i class="fas fa-compress"></i> Kompaktör</a></li>
                            <li><a href="/ciroz/"><i class="fas fa-link"></i> Çiroz</a></li>
                            <li><a href="/el_aletleri/"><i class="fas fa-tools"></i> El Aletleri</a></li>
                            <li><a href="/urunler.html"><i class="fas fa-th"></i> Tüm Ürünler</a></li>
                        </ul>
                    </li>
                    <li><a href="/bolgeler/" class="${isRegions ? 'active' : ''}">Hizmet Bölgeleri</a></li>
                    <li><a href="/iletisim.html" class="${isContact ? 'active' : ''}">İletişim</a></li>
                </ul>
            </nav>
        </div>
    </header>
    `;
    document.body.insertAdjacentHTML('afterbegin', headerHtml);
    
    // Header yüklendikten sonra mobil menü ve dropdown event listenerlarını ekle
    initMenuEvents();
}

function renderFooter() {
    const footerHtml = `
    <footer id="footer-iletisim">
        <div class="container footer-row">
            <div class="footer-col">
                <h3>Avcı İnşaat Makine ve Teknik Servis</h3>
                <p>İnşaat sektöründe güvenilir çözüm ortağınız. Kaliteli ekipman, zamanında teslimat.</p>
            </div>
            <div class="footer-col">
                <h3>Hızlı Erişim</h3>
                <ul>
                    <li><a href="/">Ana Sayfa</a></li>
                    <li><a href="/urunler.html">Ürün Kataloğu</a></li>
                    <li><a href="/beton_vibratoru/">Beton Vibratörü</a></li>
                    <li><a href="/demir_bukme/">Demir Bükme Makinesi</a></li>
                    <li><a href="/demir_kesme/">Demir Kesme Makinesi</a></li>
                    <li><a href="/kompaktor/">Kompaktör</a></li>
                    <li><a href="/bolgeler/">Hizmet Bölgeleri</a></li>
                </ul>
            </div>
            <div class="footer-col">
                <h3>İletişim Bilgileri</h3>
                <p><i class="fas fa-phone-alt"></i> <a href="tel:${TELEFON_NUMARASI_GLOBAL}" style="color: inherit; text-decoration: none;">0536 728 18 33</a></p>
                <p><i class="fas fa-envelope"></i> <a href="mailto:selcukavcilar1970@gmail.com" style="color: inherit; text-decoration: none;">selcukavcilar1970@gmail.com</a></p>
                <p><i class="fas fa-map-marker-alt"></i> Nilüfer / Bursa</p>
                <p><i class="fas fa-truck"></i> Türkiye'nin 81 iline gönderim</p>
            </div>
        </div>
        <div class="copyright">
            <p>&copy; ${new Date().getFullYear()} Avcı İnşaat Makine ve Teknik Servis. Tüm Hakları Saklıdır.</p>
        </div>
    </footer>
    `;
    document.body.insertAdjacentHTML('beforeend', footerHtml);
}

function initMenuEvents() {
    const menuToggle = document.getElementById('mobile-menu');
    const navList = document.getElementById('nav-list');
    if(menuToggle && navList) {
        menuToggle.addEventListener('click', () => {
            navList.classList.toggle('active');
        });
    }
    
    const dropdownToggle = document.querySelector('.dropdown-toggle');
    const dropdown = document.querySelector('.dropdown');
    
    if(dropdownToggle && dropdown) {
        dropdownToggle.addEventListener('click', (e) => {
            if (window.innerWidth <= 768) {
                e.preventDefault();
                dropdown.classList.toggle('active');
            }
        });
        
        document.addEventListener('click', (e) => {
            if (window.innerWidth <= 768 && !dropdown.contains(e.target)) {
                dropdown.classList.remove('active');
            }
        });
    }
}

document.addEventListener('DOMContentLoaded', () => {
    renderHeader();
    renderFloatingContact();
    renderFooter();
});
