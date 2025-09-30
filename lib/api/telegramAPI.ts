import { ValuesProps } from '../../types/values';
import { nextServer } from './api';

export const sendMessage = async ({ name, telegram, email }: ValuesProps) => {
  const text = `Новая заявка!\n\nИмя: ${name}\nТелеграм: ${telegram}\nПочта: ${email}`;
  const res = await nextServer.post(`/sendmessage`, {
    chat_id: process.env.NEXT_PUBLIC_CHAT_ID,
    text,
    parse_mode: 'HTML',
  });
};
