import { TContact, TQuote } from '@/types/contact.types';

import { UseFormRegister } from 'react-hook-form';
import { cn } from '@/lib/utils';

type Props = {
  name: keyof TContact | keyof TQuote;
  register: UseFormRegister<TContact> | UseFormRegister<TQuote>;
  errorMessage: string | undefined;
  placeholder: string;
  type: 'input' | 'textarea';

  active: keyof TContact | keyof TQuote | null;
  handleActive: (name: keyof TContact | keyof TQuote | null) => void;

  actualValue: string;
};

export const Input = ({
  register,
  name,
  errorMessage,
  placeholder,
  type,
  active,
  handleActive,
  actualValue,
}: Props) => (
  <div className='relative flex w-full flex-col text-sm'>
    <label
      htmlFor={name as keyof TContact}
      className={cn(
        'absolute rounded-md font-semibold duration-200 ease-in-out',
        active !== name && !actualValue
          ? 'ml-2 mt-2 text-pi-gray-normal'
          : 'ml-1 -translate-y-4 scale-[.80] bg-pi-blue-normal px-2 py-1 text-white',
      )}
    >
      {placeholder}
    </label>
    {type === 'input' ? (
      <input
        {...(register as UseFormRegister<TContact | TQuote>)(name, {
          required: {
            value: true,
            message: 'El atributo es requerido.',
          },
          pattern:
            name === 'email'
              ? {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                  message: 'El email no es válido.',
                }
              : undefined,
        })}
        id={name}
        className={cn(
          'rounded-md border-2 bg-pi-gray-light p-2 text-sm outline-none focus:border-pi-blue-normal',
          actualValue && 'border-pi-blue-normal',
        )}
        onBlur={() => handleActive(null)}
        onFocus={() => handleActive(name)}
      />
    ) : (
      <textarea
        {...(register as UseFormRegister<TContact | TQuote>)(name, {
          required: {
            value: true,
            message: 'El atributo es requerido.',
          },
        })}
        className={cn(
          'h-24 resize-none rounded-md border-2 bg-pi-gray-light p-2 text-sm outline-none focus:border-pi-blue-normal',
          actualValue && 'border-pi-blue-normal',
        )}
        onFocus={() => handleActive(name)}
        onBlur={() => handleActive(null)}
      />
    )}
    <small className='h-4 self-end text-red-500'>{errorMessage}</small>
  </div>
);
