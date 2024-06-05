import Link from "next/link";
import { CredentialsLoginForm } from "./components/login/CredentialsLoginForm";
import { GithubLoginForm } from "./components/login/GithubLoginForm";
import { Background } from "./components/background/Background";
import styles from "./page.module.css";

export default function Page() {
  return (
    <main>
      <Background>
        <div className={styles.formHeader}>
          <h1 className={styles.title}>Sign In</h1>
          <p>We missed you! Please enter your details.</p>
        </div>

        <CredentialsLoginForm />

        <div className={styles.divider}>or</div>

        <GithubLoginForm />

        <div className={styles.formFooter}>
          <span>
            Don’t have an account? <Link href={"/signup"}>Sign up</Link>
          </span>
        </div>
      </Background>
    </main>
  );
}
