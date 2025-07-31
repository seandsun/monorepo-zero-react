import { useForm } from 'react-hook-form';
import { useState, useEffect } from 'react';
import toast, { Toaster } from 'react-hot-toast';

const notify = () => toast.success('Email sent successfully');

export const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [placeholder, setPlaceholder] = useState('Your email address...');
  const [placeholderColor, setPlaceholderColor] = useState(
    'placeholder-Blue-200/90'
  );

  useEffect(() => {
    if (errors.email?.type === 'required') {
      setPlaceholder('example@email/com');
      setPlaceholderColor('placeholder-Blue-950');
    } else {
      setPlaceholder('Your email address...');
      setPlaceholderColor('placeholder-Blue-200/90');
    }
  }, [errors.email]);

  // Enviar data al server
  const onSubmit = (data) => {
    console.log(data);
    notify();
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="max-w-[280px] m-auto mb-10 sm:flex sm:items-start sm:gap-4 sm:max-w-[637px] sm:mb-14"
      action=""
    >
      <div className="sm:w-full">
        <Toaster />
        <input
          className={`border border-Blue-200 rounded-full ${placeholderColor} text-xs outline-none py-[12px] px-6 w-full ${
            errors.email && 'border-Red-400'
          } sm:text-base`}
          type="text"
          name=""
          id=""
          placeholder={placeholder}
          {...register('email', {
            required: true,
            pattern:
              /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g,
          })}
        />
        {errors.email?.type === 'pattern' && (
          <p className="text-Red-400 italic text-[0.625rem] text-center mt-1 sm:text-left sm:text-xs sm:mt-1.5 sm:ml-6">
            Please provide a valid email address
          </p>
        )}
        {errors.email?.type === 'required' && (
          <p className="text-Red-400 italic text-[0.625rem] text-center mt-1 sm:text-left sm:text-xs sm:mt-1.5 sm:ml-6">
            The email address must not be empty
          </p>
        )}
      </div>
      <input
        className="bg-Blue-500 text-white text-xs font-semibold rounded-full py-[12px] w-full mt-[10px] shadow-Blue-200 shadow-lg cursor-pointer hover:bg-Blue-500/80 transition-all duration-300 ease-in-out sm:w-[300px] sm:mt-0 sm:text-base"
        type="submit"
        value="Nofity Me"
      />
    </form>
  );
};
