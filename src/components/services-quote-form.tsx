import { Controller, useForm } from 'react-hook-form';
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover';

import { Calendar } from './ui/calendar';
import { CalendarIcon } from 'lucide-react';
import { Input } from './input';
import { SERVICES } from '@/content/services';
import { TQuote } from '@/types/contact.types';
import { TService } from '@/types/services.types';
import { useState } from 'react';

export const ServicesQuoteForm = () => {
  const {
    control,
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    watch,
    getValues,
  } = useForm<TQuote>();

  const [selectedServices, setSelectedServices] = useState<TService['title'][]>(
    [],
  );

  const [dateError, setDateError] = useState(false);
  const [servicesError, setServicesError] = useState(false);

  const onChangeSelectedService = (service: TService['title']) => {
    const findedService = selectedServices.find((item) => item === service);
    if (findedService) {
      setSelectedServices((prev) => prev.filter((item) => item !== service));
    } else setSelectedServices((prev) => [...prev, service]);
  };

  const onSubmit = async (values: TQuote) => {
    if (!getValues('date')) {
      setDateError(true);
      return;
    }
    if (selectedServices.length === 0) {
      setServicesError(true);
      return;
    }

    const payload: TQuote = {
      ...values,
      services: selectedServices,
    };

    console.log(payload);
  };

  const [active, setActive] = useState<keyof TQuote | null>(null);
  const handleActive = (input: keyof TQuote | null) => setActive(input);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className='mt-4 flex w-full flex-col items-center gap-2 px-4'
    >
      <Input
        register={register}
        active={active}
        handleActive={handleActive}
        type='input'
        errorMessage={errors?.name?.message}
        name='name'
        placeholder='Nombre'
        actualValue={watch('name')}
      />
      <Input
        register={register}
        active={active}
        handleActive={handleActive}
        type='input'
        errorMessage={errors?.email?.message}
        name='email'
        placeholder='Correo'
        actualValue={watch('email')}
      />
      <Input
        register={register}
        active={active}
        handleActive={handleActive}
        type='input'
        errorMessage={errors?.phone?.message}
        name='phone'
        placeholder='Teléfono'
        actualValue={watch('phone')}
      />
      <div className='flex w-full flex-col gap-2'>
        <Popover>
          <PopoverTrigger asChild>
            <button
              type='button'
              className='flex w-full items-center justify-between rounded-md border-2 bg-pi-gray-light p-2 text-sm font-semibold text-pi-gray-normal outline-none focus:border-pi-blue-normal'
            >
              {!watch('date')
                ? 'Seleccione una fecha'
                : new Date(watch('date')).toLocaleDateString()}
              <CalendarIcon size={20} />
            </button>
          </PopoverTrigger>
          <PopoverContent className='w-auto p-0' align='center' side='top'>
            <Controller
              control={control}
              name='date'
              rules={{
                required: {
                  value: true,
                  message: 'El atributo es requerido.',
                },
              }}
              render={({ field }) => (
                <Calendar
                  mode='single'
                  selected={field.value}
                  onSelect={field.onChange}
                  disabled={[{ before: new Date() }]}
                  onDayClick={() => setDateError(false)}
                />
              )}
            />
          </PopoverContent>
        </Popover>
        <div className='flex w-full items-center justify-between'>
          <small className='font-bold text-pi-gray-normal'>
            *Sujeta a confirmación
          </small>
          {dateError && (
            <small className='text-red-500'>La fecha es requerida.</small>
          )}
        </div>
      </div>
      <span className='text-lg font-semibold text-pi-blue-normal'>
        Servicio
      </span>
      <ul className='flex flex-wrap items-center justify-center gap-2'>
        {SERVICES.filter(
          (service) =>
            service.title !== 'Perforaciones en Concreto' &&
            service.title !== 'Remodelaciones',
        ).map((service) => (
          <li
            key={`${service.title}_key__service`}
            className='flex items-center gap-2'
          >
            <label
              htmlFor={`${service.title}_input`}
              className='font-semibold text-pi-gray-normal'
            >
              {service.title}
            </label>
            <input
              onChange={() => onChangeSelectedService(service.title)}
              onClick={() => setServicesError(false)}
              type='checkbox'
              id={`${service.title}_input`}
            />
          </li>
        ))}
      </ul>
      <small className='h-4 text-red-500'>
        {servicesError ? 'Debe seleccionar al menos un servicio.' : ''}
      </small>
      <Input
        type='textarea'
        active={active}
        register={register}
        name='message'
        actualValue={watch('message')}
        placeholder='Mensaje'
        errorMessage={errors?.message?.message}
        handleActive={handleActive}
      />
      <button
        type='submit'
        className='w-full rounded-sm bg-pi-blue-normal py-2 text-sm font-bold text-white'
      >
        {!isSubmitting ? 'Solicitar cotización' : 'Solicitando...'}
      </button>
    </form>
  );
};
