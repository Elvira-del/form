import { signOut } from "@/auth";
import { Button } from "../components/button/Button";
import { Form } from "../components/form/Form";
import { Icon } from "../components/icon/Icon";
import { Background } from "../components/background/Background";
import styles from "./page.module.css";

export default function Page() {
  return (
    <main>
      <Background>
        <Form
          formAction={async () => {
            "use server";
            await signOut();
          }}
        >
          <div className={styles.avatar}>
            <Icon id={"avatar"} iconType={"avatar"} />
          </div>
          <h1>Hello, User!</h1>
          <Button btnType={"submit"} btnAction={"primary"}>
            Sign out
          </Button>
        </Form>
      </Background>
    </main>
  );
}
