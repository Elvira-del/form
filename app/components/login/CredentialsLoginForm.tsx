"use client";

import { useState } from "react";
import { useFormState } from "react-dom";
import { authenticateLogin } from "@/app/lib/actions";
import { PasswordCheckbox } from "../checkbox/PasswordCheckbox";
import { Button } from "../button/Button";
import { Form } from "../form/Form";
import { Input } from "../input/Input";
import { Label } from "../label/Label";

const initialState = {
  errors: {},
};

export const CredentialsLoginForm = () => {
  const [data, dispatch] = useFormState(authenticateLogin, initialState);
  const [isPasswordShow, setPasswordShow] = useState(false);

  const togglePasswordVisibility = (isChecked: boolean) => {
    setPasswordShow(isChecked);
  };

  return (
    <Form formAction={dispatch}>
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

      <Button btnType={"submit"} btnAction={"primary"}>
        Sign in
      </Button>
    </Form>
  );
};
