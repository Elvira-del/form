import { Button } from "../components/button/Button";
import { Form } from "../components/form/Form";
import { Input } from "../components/input/Input";
import { Label } from "../components/label/Label";
import { LinkWrapper } from "../components/link/LinkWrapper";
import styles from "./page.module.css";

export default function Page() {
  return (
    <main>
      <Form>
        <h1>Sign Up</h1>
        <p className={styles.subtitle}>Create an account to continue.</p>
        <Label labelText={"Username"}>
          <Input
            inputType={"text"}
            inputName={"username"}
            inputText={"Enter username"}
          />
        </Label>
        <Label labelText={"Email"}>
          <Input
            inputType={"email"}
            inputName={"email"}
            inputText={"johndoe@example.com"}
          />
        </Label>
        <Label labelText={"Password"}>
          <Input
            inputType={"password"}
            inputName={"password"}
            inputText={"Enter password"}
          />
        </Label>

        <div className={styles.buttons}>
          <Button btnType={"button"} btnAction={"primary"}>
            Sign up
          </Button>
          <Button btnType={"button"} btnAction={"social"}>
            Sign up with Google
          </Button>
        </div>

        <div className={styles.links}>
          <span>
            I agree to the processing of{" "}
            <LinkWrapper reference={"/"}>Personal data</LinkWrapper>
          </span>
          <span>
            Already have an account?{" "}
            <LinkWrapper reference={"/"}>Sign in</LinkWrapper>
          </span>
        </div>
      </Form>
    </main>
  );
}
