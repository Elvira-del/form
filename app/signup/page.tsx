"use client";

import { useFormState } from "react-dom";
import Link from "next/link";
import { authenticateRegister } from "../lib/actions";
import { Button } from "../components/button/Button";
import { Form } from "../components/form/Form";
import { Input } from "../components/input/Input";
import { Label } from "../components/label/Label";
import { Background } from "../components/background/Background";
import styles from "./page.module.css";

const initialState = {
  errors: {},
  message: "",
};

export default function Page() {
  const [data, dispatch] = useFormState(authenticateRegister, initialState);

  return (
    <main>
      <Background>
        <div className={styles.formHeader}>
          <h1 className={styles.title}>Sign Up</h1>
          <p>Create an account to continue.</p>
        </div>

        <Form formAction={dispatch}>
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

          <Button btnType={"submit"} btnAction={"primary"}>
            Sign up
          </Button>
        </Form>

        <div className={styles.formFooter}>
          <span>
            Already have an account? <Link href={"/"}>Sign in</Link>
          </span>
        </div>
      </Background>
    </main>
  );
}
