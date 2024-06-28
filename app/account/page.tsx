import { signOut } from "@/auth";
import { Button } from "../components/button/Button";
import { Form } from "../components/form/Form";
import { Background } from "../components/background/Background";
import styles from "./page.module.css";

export default function Page() {
  return (
    <main>
      <Background>
        <div className={styles.formHeader}>
          <h1>Hello, User!</h1>
        </div>
        <Form
          formAction={async () => {
            "use server";
            await signOut();
          }}
        >
          <Button btnType={"submit"} btnAction={"primary"}>
            Sign out
          </Button>
        </Form>
      </Background>
    </main>
  );
}
