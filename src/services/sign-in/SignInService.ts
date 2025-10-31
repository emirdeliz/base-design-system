'use server';

export const signInService = async (email: string | null, password: string | null) => {
  console.log(email, password);
  await new Promise(resolve => setTimeout(resolve, 3000));
};
