import { signIn } from "@/auth";
import { Form } from "../form/Form";
import { Button } from "../button/Button";

export const GithubLoginForm = () => {
  return (
    <Form
      formAction={async () => {
        "use server";
        await signIn("github");
      }}
    >
      <Button btnType={"submit"} btnAction={"social"} socialType={"github"}>
        Sign in with GitHub
      </Button>
    </Form>
  );
};
