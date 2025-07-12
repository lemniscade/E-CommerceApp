import styles from '../styles/HomePage.module.css';
function HomePage() {
    return (
         <>
      <section className={styles.heroSection}>
        <div className={styles.container}>
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>Kitap Severlerin Adresi</h1>
            <p className={styles.heroSubtitle}>Binlerce kitap, en uygun fiyatlar ve hızlı kargo ile kapınızda!</p>
            <a href="#" className={styles.ctaButton}>Kitaplara Göz At</a>
          </div>
        </div>
      </section>

      <section className={styles.categoriesSection}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Popüler Kategoriler</h2>
          <div className={styles.categoriesGrid}>
            <div className={styles.categoryCard}>
              <span className={styles.categoryIcon}>📚</span>
              <h3 className={styles.categoryName}>Edebiyat</h3>
              <p className={styles.categoryCount}>2,450 kitap</p>
            </div>
            <div className={styles.categoryCard}>
              <span className={styles.categoryIcon}>🔬</span>
              <h3 className={styles.categoryName}>Bilim</h3>
              <p className={styles.categoryCount}>1,280 kitap</p>
            </div>
            <div className={styles.categoryCard}>
              <span className={styles.categoryIcon}>🎨</span>
              <h3 className={styles.categoryName}>Sanat</h3>
              <p className={styles.categoryCount}>890 kitap</p>
            </div>
            <div className={styles.categoryCard}>
              <span className={styles.categoryIcon}>💼</span>
              <h3 className={styles.categoryName}>İş & Kariyer</h3>
              <p className={styles.categoryCount}>1,150 kitap</p>
            </div>
            <div className={styles.categoryCard}>
              <span className={styles.categoryIcon}>🧠</span>
              <h3 className={styles.categoryName}>Psikoloji</h3>
              <p className={styles.categoryCount}>670 kitap</p>
            </div>
            <div className={styles.categoryCard}>
              <span className={styles.categoryIcon}>🏛️</span>
              <h3 className={styles.categoryName}>Tarih</h3>
              <p className={styles.categoryCount}>1,920 kitap</p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.featuredSection}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Öne Çıkan Kitaplar</h2>
          <div className={styles.booksGrid}>
            <div className={styles.bookCard}>
              <div className={styles.bookImage}>📖</div>
              <div className={styles.bookInfo}>
                <h3 className={styles.bookTitle}>Suç ve Ceza</h3>
                <p className={styles.bookAuthor}>Fyodor Dostoyevski</p>
                <div className={styles.bookPrice}>₺45,90</div>
                <button className={styles.addToCart}>Sepete Ekle</button>
              </div>
            </div>
            <div className={styles.bookCard}>
              <div className={styles.bookImage}>📚</div>
              <div className={styles.bookInfo}>
                <h3 className={styles.bookTitle}>1984</h3>
                <p className={styles.bookAuthor}>George Orwell</p>
                <div className={styles.bookPrice}>₺32,50</div>
                <button className={styles.addToCart}>Sepete Ekle</button>
              </div>
            </div>
            <div className={styles.bookCard}>
              <div className={styles.bookImage}>📕</div>
              <div className={styles.bookInfo}>
                <h3 className={styles.bookTitle}>İnsan Ne İle Yaşar</h3>
                <p className={styles.bookAuthor}>Lev Tolstoy</p>
                <div className={styles.bookPrice}>₺28,75</div>
                <button className={styles.addToCart}>Sepete Ekle</button>
              </div>
            </div>
            <div className={styles.bookCard}>
              <div className={styles.bookImage}>📘</div>
              <div className={styles.bookInfo}>
                <h3 className={styles.bookTitle}>Sapiens</h3>
                <p className={styles.bookAuthor}>Yuval Noah Harari</p>
                <div className={styles.bookPrice}>₺52,00</div>
                <button className={styles.addToCart}>Sepete Ekle</button>
              </div>
            </div>
            <div className={styles.bookCard}>
              <div className={styles.bookImage}>📗</div>
              <div className={styles.bookInfo}>
                <h3 className={styles.bookTitle}>Atomik Alışkanlıklar</h3>
                <p className={styles.bookAuthor}>James Clear</p>
                <div className={styles.bookPrice}>₺39,90</div>
                <button className={styles.addToCart}>Sepete Ekle</button>
              </div>
            </div>
            <div className={styles.bookCard}>
              <div className={styles.bookImage}>📙</div>
              <div className={styles.bookInfo}>
                <h3 className={styles.bookTitle}>Küçük Prens</h3>
                <p className={styles.bookAuthor}>Antoine de Saint-Exupéry</p>
                <div className={styles.bookPrice}>₺24,90</div>
                <button className={styles.addToCart}>Sepete Ekle</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
    );
}

export default HomePage;