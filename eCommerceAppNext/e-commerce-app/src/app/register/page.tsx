'use client';
import styles from'../styles/Register.module.css';
function Register() {
return(
     <main className={styles.registerPage}>
            <div className={styles.container}>
      <div className={styles.registerContainer}>
        <div className={styles.registerHeader}>
          <h1>Kayıt Ol</h1>
          <p>KitapDünyası ailesine katılın!</p>
        </div>

        <form id="registerForm">
          <div className={styles.formRow}>
            <div className={styles.formGroup}>
              <label htmlFor="firstName">Ad *</label>
              <input type="text" id="firstName" name="firstName" required />
              <div className={styles.errorMessage} id="firstNameError"></div>
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="lastName">Soyad *</label>
              <input type="text" id="lastName" name="lastName" required />
              <div className={styles.errorMessage} id="lastNameError"></div>
            </div>
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="email">E-posta *</label>
            <input type="email" id="email" name="email" required />
            <div className={styles.errorMessage} id="emailError"></div>
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="phone">Telefon *</label>
            <input type="tel" id="phone" name="phone" placeholder="0555 123 45 67" required />
            <div className={styles.errorMessage} id="phoneError"></div>
          </div>

          <div className={styles.formRow}>
            <div className={styles.formGroup}>
              <label htmlFor="password">Şifre *</label>
              <input type="password" id="password" name="password" required />
              <div className={styles.errorMessage} id="passwordError"></div>
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="confirmPassword">Şifre Tekrar *</label>
              <input type="password" id="confirmPassword" name="confirmPassword" required />
              <div className={styles.errorMessage} id="confirmPasswordError"></div>
            </div>
          </div>

          <div className={styles.formRow}>
            <div className={styles.formGroup}>
              <label htmlFor="birthDate">Doğum Tarihi</label>
              <input type="date" id="birthDate" name="birthDate" />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="gender">Cinsiyet</label>
              <select id="gender" name="gender">
                <option value="">Seçiniz</option>
                <option value="male">Erkek</option>
                <option value="female">Kadın</option>
                <option value="other">Diğer</option>
              </select>
            </div>
          </div>

          <div className={styles.checkboxGroup}>
            <input type="checkbox" id="terms" name="terms" required />
            <label htmlFor="terms">
              <a href="#">Kullanım Koşulları</a>'nı ve <a href="#">Gizlilik Politikası</a>'nı okudum, kabul ediyorum. *
            </label>
          </div>

          <div className={styles.checkboxGroup}>
            <input type="checkbox" id="newsletter" name="newsletter" />
            <label htmlFor="newsletter">
              Kampanya ve fırsatlardan haberdar olmak istiyorum.
            </label>
          </div>

          <button type="submit" className={styles.registerBtn}>Kayıt Ol</button>
        </form>
      </div>
    </div>
                </main>
);
}

export default Register;