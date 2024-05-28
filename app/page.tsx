"use client";

import { useState } from "react";
import { useFormState } from "react-dom";
import { Form } from "./components/form/Form";
import { Button } from "./components/button/Button";
import { Input } from "./components/input/Input";
import { Label } from "./components/label/Label";
import { LinkWrapper } from "./components/link/LinkWrapper";
import { PasswordCheckbox } from "./components/checkbox/PasswordCheckbox";
import { authenticateLogin } from "./lib/actions";
import styles from "./page.module.css";

const initialState = {
  errors: {},
};

export default function Page() {
  const [data, dispatch] = useFormState(authenticateLogin, initialState);
  const [isPasswordShow, setPasswordShow] = useState(false);

  const togglePasswordVisibility = (isChecked: boolean) => {
    setPasswordShow(isChecked);
  };

  return (
    <main>
      <Form formAction={dispatch}>
        <h1>Sign In</h1>
        <p className={styles.subtitle}>
          We missed you! Please enter your details.
        </p>
        <Label labelText={"Email"}>
          <Input
            inputType={"email"}
            inputName={"email"}
            inputText={"Enter your email"}
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
            inputType={isPasswordShow ? "text" : "password"}
            inputName={"password"}
            inputText={"Enter your password"}
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
        <Label labelText={"show password"} checkboxType={true}>
          <PasswordCheckbox toggleCheckbox={togglePasswordVisibility} />
        </Label>

        <div className={styles.buttons}>
          <Button btnType={"submit"} btnAction={"primary"}>
            Sign in
          </Button>
          <Button btnType={"button"} btnAction={"social"}>
            Sign in with Google
          </Button>
        </div>

        <div className={styles.links}>
          <LinkWrapper reference={"/password"}>Forgot password?</LinkWrapper>
          <span>
            Don’t have an account?{" "}
            <LinkWrapper reference={"/signup"}>Sign up</LinkWrapper>
          </span>
        </div>
      </Form>
    </main>
  );
}
