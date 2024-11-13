'use server';

export const fetchMessage = async () => {
  await new Promise((resolve) => setTimeout(resolve, 2500));
  return 'Secret Message Recieved!';
};
