import {
  TContact,
  TCustomQuote,
  TPerforation,
  TQuote,
} from '@/types/contact.types';

import { UseFormRegister } from 'react-hook-form';
import { cn } from '@/lib/utils';

type Props = {
  name: keyof TContact | keyof TQuote | keyof TCustomQuote;
  register:
    | UseFormRegister<TContact>
    | UseFormRegister<TQuote>
    | UseFormRegister<TCustomQuote>;
  errorMessage: string | undefined;
  placeholder: string;
  type: 'input' | 'textarea';

  active:
    | keyof TContact
    | keyof TQuote
    | keyof TCustomQuote
    | `${keyof TPerforation}__index__${number}`
    | null;
  handleActive: (
    name: keyof TContact | keyof TQuote | keyof TCustomQuote | null,
  ) => void;

  actualValue: string;

  className?: string;
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
  className,
}: Props) => (
  <div className={cn('relative flex w-full flex-col text-sm', className)}>
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
        {...(register as UseFormRegister<TContact | TQuote | TCustomQuote>)(
          name,
          {
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
          },
        )}
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
        {...(register as UseFormRegister<TContact | TQuote | TCustomQuote>)(
          name,
          {
            required: {
              value: true,
              message: 'El atributo es requerido.',
            },
          },
        )}
        className={cn(
          'h-24 resize-none rounded-md border-2 bg-pi-gray-light p-2 text-sm outline-none focus:border-pi-blue-normal md:h-full',
          actualValue && 'border-pi-blue-normal',
        )}
        onFocus={() => handleActive(name)}
        onBlur={() => handleActive(null)}
      />
    )}
    <small className='h-4 self-end text-red-500'>{errorMessage}</small>
  </div>
);
