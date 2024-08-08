import { TContact, TCustomQuote, TQuote } from '@/types/contact.types';

import { API_URL } from '@/const/api';

const ERROR_MESSAGE =
  'Ocurrió un error al enviar el formulario. Intente nuevamente mas tarde.';

export const sendEmail = async (payload: TContact) => {
  try {
    const res = await fetch(`${API_URL}/contact`, {
      method: 'POST',
      body: JSON.stringify(payload),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (!res.ok) throw new Error(ERROR_MESSAGE);
  } catch (error) {
    throw new Error(ERROR_MESSAGE);
  }
};

export const sendQuote = async (payload: TQuote) => {
  try {
    const res = await fetch(`${API_URL}/contact/quote`, {
      method: 'POST',
      body: JSON.stringify(payload),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (!res.ok) throw new Error(ERROR_MESSAGE);
  } catch (error) {
    throw new Error(ERROR_MESSAGE);
  }
};

export const sendCustomQuote = async (payload: TCustomQuote) => {
  try {
    const res = await fetch(`${API_URL}/contact/quote/custom`, {
      method: 'POST',
      body: JSON.stringify(payload),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (!res.ok) throw new Error(ERROR_MESSAGE);
  } catch (error) {
    throw new Error(ERROR_MESSAGE);
  }
};
