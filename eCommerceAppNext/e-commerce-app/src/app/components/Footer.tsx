'use client';
import '../globals.css';
function Footer() {
    return (
        <footer>
        <div className="container">
            <div className="footer-content">
                <div className="footer-section">
                    <h4>Kurumsal</h4>
                    <ul>
                        <li><a href="#">Hakkımızda</a></li>
                        <li><a href="#">Kariyer</a></li>
                        <li><a href="#">İletişim</a></li>
                    </ul>
                </div>
                <div className="footer-section">
                    <h4>Müşteri Hizmetleri</h4>
                    <ul>
                        <li><a href="#">Yardım Merkezi</a></li>
                        <li><a href="#">Canlı Destek</a></li>
                        <li><a href="#">S.S.S</a></li>
                    </ul>
                </div>
                <div className="footer-section">
                    <h4>Sosyal Medya</h4>
                    <ul>
                        <li><a href="#">📘 Facebook</a></li>
                        <li><a href="#">🐦 Twitter</a></li>
                        <li><a href="#">📷 Instagram</a></li>
                    </ul>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; 2024 KitapDünyası. Tüm hakları saklıdır.</p>
            </div>
        </div>
    </footer>
    );
}

export default Footer;