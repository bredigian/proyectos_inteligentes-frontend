import { TContact, TQuote } from '@/types/contact.types';

import { Input } from './input';
import { useForm } from 'react-hook-form';
import { useState } from 'react';

export const HomeContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    watch,
  } = useForm<TContact>();

  const onSubmit = async (values: TContact) => console.log(values);

  const [active, setActive] = useState<keyof TContact | keyof TQuote | null>(
    null,
  );
  const handleActive = (input: keyof TContact | keyof TQuote | null) =>
    setActive(input);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className='flex w-full flex-col gap-2'
    >
      <Input
        register={register}
        name='name'
        errorMessage={errors.name?.message}
        placeholder='Nombre'
        type='input'
        active={active}
        handleActive={handleActive}
        actualValue={watch('name')}
      />
      <Input
        register={register}
        name='email'
        errorMessage={errors.email?.message}
        placeholder='Correo'
        type='input'
        active={active}
        handleActive={handleActive}
        actualValue={watch('email')}
      />
      <Input
        register={register}
        name='phone'
        errorMessage={errors.phone?.message}
        placeholder='Teléfono'
        type='input'
        active={active}
        handleActive={handleActive}
        actualValue={watch('phone')}
      />
      <Input
        register={register}
        name='message'
        errorMessage={errors.message?.message}
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
