'use client';

import { signInService } from "@services";
import { ButtonSubmit, Flex, Form, InputForm } from "@ui";

export const SignInPage = () => {
  const submitAction = async (formData: FormData) => {
    const email = formData.get('email');
    const password = formData.get('password');
    console.log(email, password);
    await signInService(email as string, password as string);
  };

  return (
    <Form action={submitAction}>
      <Flex.Center wFull hFull>
        <Flex.Col>
          <InputForm name="email">Email</InputForm>
          <InputForm name="password">Password</InputForm>
          <ButtonSubmit>Submit</ButtonSubmit>
        </Flex.Col>
      </Flex.Center>
    </Form>
  );
};