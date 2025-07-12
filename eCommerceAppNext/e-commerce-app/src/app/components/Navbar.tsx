'use client';
import Link from 'next/link';
import '../globals.css';
function Navbar() {

    return (
        <header>
        <div className="container">
            <div className="header-content">
                <div className="logo">📚 KitapDünyası</div>
                <div className="search-bar">
                    <input type="text" placeholder="Kitap, yazar veya ISBN ara..."/>
                    <button>🔍</button>
                </div>
                <div className="header-actions">
                    <Link href="/login" className="header-btn">Giriş Yap</Link>
                    <Link href="/register" className="header-btn">Kayıt Ol</Link>
                    <div className="cart-icon">
                        🛒
                        <span className="cart-count">3</span>
                    </div>
                </div>
            </div>
        </div>
    </header>
    );
}

export default Navbar;