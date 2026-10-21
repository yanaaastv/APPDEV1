import styles from "./Login.module.css";
import leaf from "../../assets/blue-white-leafy-background-vector_53876-136080 1.svg";
import googleIcon from "../../assets/flat-color-icons_google.svg";
import facebookIcon from "../../assets/Vector.svg";

export default function Login() {
  return (
    <main className={styles.loginPage}>
      <section className={styles.loginCard}>
        <div className={styles.imagePanel}>
          <img
            className={styles.leavesImage}
            src={leaf}
            alt="Blue-gray botanical leaves"
          />
        </div>

        <div className={styles.formPanel}>
          <header className={styles.heading}>
            <h1>Hello,</h1>
            <span>Guyss!</span>
          </header>

          <nav className={styles.tabs} aria-label="Login navigation">
            <button type="button" className={styles.activeTab}>
              Login
            </button>
            <button type="button" className={styles.inactiveTab}>
              SignUp
            </button>
          </nav>

          <form
            className={styles.loginForm}
            onSubmit={(event) => event.preventDefault()}
          >
            <input
              className={styles.input}
              type="email"
              placeholder="Enter your email"
              aria-label="Email"
              required
            />

            <input
              className={styles.input}
              type="password"
              placeholder="Enter Password"
              aria-label="Password"
              required
            />

            <button className={styles.loginButton} type="submit">
              Login
            </button>
          </form>

          <div className={styles.socialSection}>
            <span className={styles.orDivider}>Or</span>

            <div className={styles.socialIcons}>
              <button
                type="button"
                className={styles.socialButton}
                aria-label="Continue with Google"
              >
                <img src={googleIcon} alt="" />
              </button>

              <button
                type="button"
                className={styles.socialButton}
                aria-label="Continue with Facebook"
              >
                <img src={facebookIcon} alt="" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}