import { signOut } from "@/auth";
import styles from "./page.module.css";
import { Button } from "../components/button/Button";
import { Form } from "../components/form/Form";

export default function Page() {
  return (
    <main>
      <Form
        formAction={async () => {
          "use server";
          await signOut();
        }}
      >
        <div className={styles.avatar}></div>
        <h1>Hello, User!</h1>
        <Button btnType={"submit"} btnAction={"primary"}>
          Sign out
        </Button>
      </Form>
    </main>
  );
}
