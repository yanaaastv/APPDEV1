import styles from "./Login.module.css";
import logo from "../../assets/logo.svg";

export default function Login({ onSwitch }) {
    return (
        <div className={styles.login}>
            {/* Left panel */}
            <section className={styles.left}>
                <h1 className={styles.tagline}>
                    Need webdesign
                    <br />
                    for your business?
                    <br />
                    <strong>Design Spacee</strong>
                    <br />
                    will help you.
                </h1>

                <img
                    className={styles.logo}
                    src={logo}
                    alt="Design Spacee logo"
                />

                <p className={styles.link}>figma.com/@designspacee</p>
            </section>

            {/* Right panel */}
            <section className={styles.right}>
                <div className={styles.form}>
                    <img
                        className={styles.mobileLogo}
                        src={logo}
                        alt="Design Spacee logo"
                    />

                    <h2>Sign-in</h2>

                    <input
                        type="email"
                        placeholder="Email"
                        aria-label="Email"
                        autoComplete="email"
                        required
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        aria-label="Password"
                        autoComplete="current-password"
                        required
                    />

                    <button type="button">Login</button>

                    <p className={styles.signup}>
                        Don't have an account?{" "}
                        <a href="#" onClick={(e) => { e.preventDefault(); onSwitch?.(); }}>
                            Signup Here
                        </a>
                    </p>
                </div>
            </section>
        </div>
    );
}
