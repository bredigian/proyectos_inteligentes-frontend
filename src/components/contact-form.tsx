import { TContact, TCustomQuote, TQuote } from '@/types/contact.types';

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

  const [active, setActive] = useState<
    keyof TContact | keyof TQuote | keyof TCustomQuote | null
  >(null);
  const handleActive = (
    input: keyof TContact | keyof TQuote | keyof TCustomQuote | null,
  ) => setActive(input);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className='grid w-full max-w-xs grid-cols-2 grid-rows-3 gap-2 md:max-w-lg md:gap-x-6 lg:max-w-2xl'
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
        className='col-span-full row-span-1 md:col-span-1'
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
        className='col-span-full row-span-1 md:col-span-1'
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
        className='col-span-full row-span-1 md:col-span-1'
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
        className='col-span-full row-span-1 md:col-span-1 md:col-start-2 md:row-span-2 md:row-start-1 md:row-end-3'
      />
      <button
        type='submit'
        className='row col-span-full row-span-1 w-full rounded-md bg-pi-blue-light py-2 text-sm font-bold text-white shadow-sm shadow-slate-500 md:col-span-1 md:h-[39px]'
      >
        {!isSubmitting ? 'Enviar mensaje' : 'Enviando...'}
      </button>
    </form>
  );
};
