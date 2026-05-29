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
    const isHome = currentPath.endsWith('index.html') || currentPath.endsWith('/');
    const isProducts = currentPath.includes('urunler.html') || currentPath.includes('urun-detay.html');
    const isContact = currentPath.includes('iletisim.html');

    const headerHtml = `
    <header>
        <div class="container navbar">
            <div class="navbar-brand">
                <div class="logo"><a href="index.html">AVCI <span class="insaat">MAKİNE</span></a></div>
                <div class="menu-toggle" id="mobile-menu"><i class="fas fa-bars"></i></div>
            </div>
            
            <nav>
                <ul class="nav-list" id="nav-list">
                    <li><a href="index.html" class="${isHome ? 'active' : ''}">Ana Sayfa</a></li>
                    <li class="dropdown">
                        <a href="urunler.html" class="dropdown-toggle ${isProducts ? 'active' : ''}">Ürünler <i class="fas fa-chevron-down"></i></a>
                        <ul class="dropdown-menu">
                            <li><a href="urunler.html?kategori=bukme"><i class="fas fa-bezier-curve"></i> Demir Bükme</a></li>
                            <li><a href="urunler.html?kategori=kesme"><i class="fas fa-cut"></i> Demir Kesme</a></li>
                            <li><a href="urunler.html?kategori=vibrator"><i class="fas fa-hammer"></i> Beton Vibratör</a></li>
                            <li><a href="urunler.html?kategori=diger"><i class="fas fa-tools"></i> Diğer Ekipmanlar</a></li>
                            <li><a href="urunler.html?kategori=hepsi"><i class="fas fa-th"></i> Tüm Ürünler</a></li>
                        </ul>
                    </li>
                    <li><a href="iletisim.html" class="${isContact ? 'active' : ''}">İletişim</a></li>
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
                <h3>AVCI <span class="insaat">MAKİNE</span></h3>
                <p>İnşaat sektöründe güvenilir çözüm ortağınız. Kaliteli ekipman, zamanında teslimat.</p>
            </div>
            <div class="footer-col">
                <h3>Hızlı Erişim</h3>
                <ul>
                    <li><a href="index.html">Ana Sayfa</a></li>
                    <li><a href="urunler.html">Ürün Kataloğu</a></li>
                </ul>
            </div>
            <div class="footer-col">
                <h3>İletişim Bilgileri</h3>
                <p><i class="fas fa-phone-alt"></i> <a href="tel:${TELEFON_NUMARASI_GLOBAL}" style="color: inherit; text-decoration: none;">0536 728 18 33</a></p>
                <p><i class="fas fa-envelope"></i> <a href="mailto:selcukavcilar1970@gmail.com" style="color: inherit; text-decoration: none;">selcukavcilar1970@gmail.com</a></p>
                <p><i class="fas fa-map-marker-alt"></i> Nilüfer / Bursa</p>
            </div>
        </div>
        <div class="copyright">
            <p>&copy; ${new Date().getFullYear()} Avcı Makine İnşaat. Tüm Hakları Saklıdır.</p>
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
