import { Controller, useForm } from 'react-hook-form';
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover';
import { TCustomQuote, TPerforation, TQuote } from '@/types/contact.types';

import { Calendar } from './ui/calendar';
import { CalendarIcon } from 'lucide-react';
import { Input } from './input';
import { SERVICES } from '@/content/services';
import { TService } from '@/types/services.types';
import { cn } from '@/lib/utils';
import { useDebouncedCallback } from 'use-debounce';
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

  const [active, setActive] = useState<
    keyof TQuote | keyof TCustomQuote | null
  >(null);
  const handleActive = (input: keyof TQuote | keyof TCustomQuote | null) =>
    setActive(input);

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

export const ServicesCustomQuoteForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    watch,
  } = useForm<TCustomQuote>();

  const [active, setActive] = useState<
    | keyof TCustomQuote
    | keyof TQuote
    | `${keyof TPerforation}__index__${number}`
    | null
  >(null);
  const handleActive = (
    input:
      | keyof TCustomQuote
      | keyof TQuote
      | `${keyof TPerforation}__index__${number}`
      | null,
  ) => setActive(input);

  const [perforations, setPerforations] = useState<TPerforation[]>([
    { whickness: '', size: '' },
  ]);

  const areEmptyPerforation = perforations.some((p) => {
    return !p.size || !p.whickness ? true : false;
  });

  const [perforationsError, setPerforationsError] = useState(false);

  const addPerforation = () =>
    setPerforations((prev) => [...prev, { size: '', whickness: '' }]);

  const removePerforation = () => setPerforations((prev) => prev.slice(0, -1));

  const updatePeforation = useDebouncedCallback(
    (values: TPerforation, index: number) =>
      setPerforations((prev) =>
        prev.map((item, i) => ({
          whickness: index === i ? values.whickness : item.whickness,
          size: index === i ? values.size : item.size,
        })),
      ),
    300,
  );

  const onSubmit = async (values: TCustomQuote) => {
    if (areEmptyPerforation) {
      setPerforationsError(true);
      return;
    }
    setPerforationsError(false);
    const payload: TCustomQuote = {
      ...values,
      perforations,
    };
    console.log(payload);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className='mx-auto mt-4 flex w-full max-w-[397px] flex-col items-center gap-2 px-4 xl:max-w-full'
    >
      <div className='flex w-full flex-col gap-2 xl:flex-row xl:gap-8'>
        <div className='flex w-full flex-col gap-2'>
          <Input
            register={register}
            name='name'
            active={active}
            handleActive={handleActive}
            errorMessage={errors.name?.message}
            actualValue={watch('name')}
            type='input'
            placeholder='Nombre'
          />
          <Input
            register={register}
            name='email'
            active={active}
            handleActive={handleActive}
            errorMessage={errors.email?.message}
            actualValue={watch('email')}
            type='input'
            placeholder='Correo'
          />
          <Input
            register={register}
            name='phone'
            active={active}
            handleActive={handleActive}
            errorMessage={errors.phone?.message}
            actualValue={watch('phone')}
            type='input'
            placeholder='Teléfono'
          />
          <div className='flex w-full flex-col gap-2'>
            <div className='flex items-center gap-2 self-start'>
              <input
                {...register('position', {
                  required: {
                    value: true,
                    message: 'El atributo es requerido.',
                  },
                })}
                value={'vertical'}
                id='vertical'
                type='radio'
              />
              <label htmlFor='vertical' className='font-medium text-gray-600'>
                Vertical
              </label>
            </div>
            <div className='flex items-center gap-2 self-start'>
              <input
                {...register('position', {
                  required: {
                    value: true,
                    message: 'El atributo es requerido.',
                  },
                })}
                value={'horizontal'}
                id='horizontal'
                type='radio'
              />
              <label htmlFor='horizontal' className='font-medium text-gray-600'>
                Horizontal
              </label>
            </div>
            <div className='flex items-center gap-2 self-start'>
              <input
                {...register('position', {
                  required: {
                    value: true,
                    message: 'El atributo es requerido.',
                  },
                })}
                value={'sin-especificar'}
                id='sin-especificar'
                type='radio'
              />
              <label
                htmlFor='sin-especificar'
                className='font-medium text-gray-600'
              >
                Sin especificar
              </label>
            </div>
            <small className='h-4 self-end text-xs text-red-500'>
              {errors?.position?.message || ''}
            </small>
          </div>
          <Input
            register={register}
            name='location'
            active={active}
            actualValue={watch('location')}
            errorMessage={errors.location?.message}
            handleActive={handleActive}
            placeholder='Ubicación de la obra'
            type='input'
          />
        </div>
        <div className='flex w-full flex-col items-center gap-2'>
          <div className='flex w-full items-center justify-between'>
            <span className='font-bold text-pi-gray-normal'>Cantidad</span>
            <div className='flex items-center gap-4'>
              <button
                type='button'
                onClick={addPerforation}
                className='h-12 w-14 rounded-sm bg-pi-blue-normal text-3xl font-bold text-white disabled:bg-pi-gray-light disabled:text-pi-gray-normal'
              >
                +
              </button>
              <button
                type='button'
                onClick={removePerforation}
                disabled={perforations.length < 2}
                className='h-12 w-14 rounded-sm bg-pi-blue-normal text-3xl font-bold text-white disabled:bg-pi-gray-light disabled:text-pi-gray-normal'
              >
                -
              </button>
            </div>
          </div>
          <ul className='relative mt-2 flex w-full flex-col items-center gap-4 overflow-auto xl:max-h-[280px]'>
            {perforations.map((item, index) => (
              <li
                key={index}
                className='flex w-full items-center gap-2 xl:justify-between'
              >
                <div className='relative flex w-full flex-col text-sm'>
                  <label
                    htmlFor={`whickness__index__${index}__id`}
                    className={cn(
                      'absolute rounded-md font-semibold duration-200 ease-in-out',
                      active !== `whickness__index__${index}` && !item.whickness
                        ? 'ml-2 mt-2 text-pi-gray-normal'
                        : 'ml-1 -translate-x-4 -translate-y-4 scale-[.70] bg-pi-blue-normal px-2 py-1 text-white',
                    )}
                  >
                    Espesor de loza
                  </label>
                  <input
                    id={`whickness__index__${index}__id`}
                    className={cn(
                      'w-full rounded-md border-2 bg-pi-gray-light p-2 text-sm outline-none focus:border-pi-blue-normal',
                      item.whickness && 'border-pi-blue-normal',
                    )}
                    onBlur={() => handleActive(null)}
                    onFocus={() => handleActive(`whickness__index__${index}`)}
                    onChange={(e) =>
                      updatePeforation(
                        { whickness: e.target.value, size: item.size },
                        index,
                      )
                    }
                  />
                </div>
                <div className='relative flex w-full flex-col text-sm'>
                  <label
                    htmlFor={`size__index__${index}__id`}
                    className={cn(
                      'absolute overflow-hidden text-ellipsis text-nowrap rounded-md font-semibold duration-200 ease-in-out',
                      active !== `size__index__${index}` && !item.size
                        ? 'ml-2 mt-2 text-pi-gray-normal'
                        : 'ml-0 -translate-x-2 -translate-y-4 scale-[.70] bg-pi-blue-normal px-2 py-1 text-white',
                    )}
                  >
                    {active !== `size__index__${index}`
                      ? 'Tamaño de perf...'
                      : 'Perforación'}
                  </label>
                  <input
                    id={`size__index__${index}__id`}
                    className={cn(
                      'w-full rounded-md border-2 bg-pi-gray-light p-2 text-sm outline-none focus:border-pi-blue-normal',
                      item.size && 'border-pi-blue-normal',
                    )}
                    onBlur={() => handleActive(null)}
                    onFocus={() => handleActive(`size__index__${index}`)}
                    onChange={(e) =>
                      updatePeforation(
                        { whickness: item.whickness, size: e.target.value },
                        index,
                      )
                    }
                  />
                </div>
              </li>
            ))}
          </ul>
          <small className='h-4 self-end text-xs text-red-500'>
            {perforationsError ? 'Tienes información incompleta.' : ''}
          </small>
        </div>
      </div>
      <button
        type='submit'
        className='w-full rounded-sm bg-pi-blue-normal py-3 text-sm font-bold text-white'
      >
        {!isSubmitting ? 'Solicitar cotización' : 'Solicitando...'}
      </button>
    </form>
  );
};
