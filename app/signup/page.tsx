"use client";

import { useFormState } from "react-dom";
import { Button } from "../components/button/Button";
import { Form } from "../components/form/Form";
import { Input } from "../components/input/Input";
import { Label } from "../components/label/Label";
import { LinkWrapper } from "../components/link/LinkWrapper";
import { authenticateRegister } from "../lib/actions";
import styles from "./page.module.css";

const initialState = {
  errors: {},
  message: "",
};

export default function Page() {
  const [data, dispatch] = useFormState(authenticateRegister, initialState);

  return (
    <main>
      <Form formAction={dispatch}>
        <h1>Sign Up</h1>
        <p className={styles.subtitle}>Create an account to continue.</p>
        <Label labelText={"Username"}>
          <Input
            inputType={"text"}
            inputName={"username"}
            inputText={"Enter username"}
            aria-describedby="username-error"
          />

          <span id="username-error" aria-live="polite" aria-atomic="true">
            {data.errors?.username &&
              data.errors.username.map((error: string) => (
                <span className="error" key={error}>
                  {error}
                </span>
              ))}
          </span>
        </Label>
        <Label labelText={"Email"}>
          <Input
            inputType={"email"}
            inputName={"email"}
            inputText={"johndoe@example.com"}
            aria-describedby="email-error"
          />

          <span id="email-error" aria-live="polite" aria-atomic="true">
            {data.errors?.email &&
              data.errors.email.map((error: string) => (
                <span className="error" key={error}>
                  {error}
                </span>
              ))}
          </span>
        </Label>
        <Label labelText={"Password"}>
          <Input
            inputType={"password"}
            inputName={"password"}
            inputText={"Enter password"}
            aria-describedby="password-error"
          />

          <span id="password-error" aria-live="polite" aria-atomic="true">
            {data.errors?.password &&
              data.errors.password.map((error: string) => (
                <span className="error" key={error}>
                  {error}
                </span>
              ))}
          </span>
        </Label>

        <div className={styles.buttons}>
          <Button btnType={"submit"} btnAction={"primary"}>
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
