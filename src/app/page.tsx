"use client";

import { Button } from "@/components/button/Button";
import { Input } from "@/components/input/Input";
import { Label } from "@/components/label/Label";
import { LinkWrapper } from "@/components/link/LinkWrapper";
import { Form } from "@/components/form/Form";
import styles from "./page.module.css";

export default function Page() {
  return (
    <Form>
      <h1>Sign In</h1>
      <p className={styles.subtitle}>
        We missed you! Please enter your details.
      </p>
      <Label labelText={"Email"}>
        <Input
          inputType={"email"}
          inputName={"email"}
          inputText={"Enter your email"}
        />
      </Label>
      <Label labelText={"Password"}>
        <Input
          inputType={"password"}
          inputName={"password"}
          inputText={"Enter your password"}
        />
      </Label>

      <Label labelText={"show password"} checkboxType={true}>
        <Input inputType={"checkbox"} inputName={"checkbox"} />
      </Label>

      <div className={styles.buttons}>
        <Button btnType={"button"} btnAction={"primary"}>
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
  );
}
