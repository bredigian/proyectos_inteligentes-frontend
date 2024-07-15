import { FieldErrors, UseFormRegister, useForm } from 'react-hook-form';

import { cn } from '../lib/utils';
import { useState } from 'react';

type TContact = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

type Props = {
  name: keyof TContact;
  register: UseFormRegister<TContact>;
  errors: FieldErrors<TContact>;
  placeholder: string;
  type: 'input' | 'textarea';

  active: keyof TContact | null;
  handleActive: (name: keyof TContact | null) => void;

  actualValue: string;
};

const Input = ({
  register,
  name,
  errors,
  placeholder,
  type,
  active,
  handleActive,
  actualValue,
}: Props) => (
  <div className='relative flex flex-col text-sm'>
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
        {...register(name as keyof TContact, {
          required: {
            value: true,
            message: 'El atributo es requerido.',
          },
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
        {...register(name as keyof TContact, {
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
    <small className='h-4 self-end text-red-500'>
      {errors[name]?.message ?? ''}
    </small>
  </div>
);

export const HomeContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    watch,
  } = useForm<TContact>();

  const onSubmit = async (values: TContact) => console.log(values);

  const [active, setActive] = useState<keyof TContact | null>(null);
  const handleActive = (input: keyof TContact | null) => setActive(input);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className='flex w-full flex-col gap-2'
    >
      <Input
        register={register}
        name='name'
        errors={errors}
        placeholder='Nombre'
        type='input'
        active={active}
        handleActive={handleActive}
        actualValue={watch('name')}
      />
      <Input
        register={register}
        name='email'
        errors={errors}
        placeholder='Correo'
        type='input'
        active={active}
        handleActive={handleActive}
        actualValue={watch('email')}
      />
      <Input
        register={register}
        name='phone'
        errors={errors}
        placeholder='Teléfono'
        type='input'
        active={active}
        handleActive={handleActive}
        actualValue={watch('phone')}
      />
      <Input
        register={register}
        name='message'
        errors={errors}
        placeholder='Mensaje'
        type='textarea'
        active={active}
        handleActive={handleActive}
        actualValue={watch('message')}
      />
      <button
        type='submit'
        className='w-full rounded-md bg-pi-blue-light py-2 text-sm font-bold text-white shadow-sm shadow-slate-500'
      >
        {!isSubmitting ? 'Enviar mensaje' : 'Enviando...'}
      </button>
    </form>
  );
};
