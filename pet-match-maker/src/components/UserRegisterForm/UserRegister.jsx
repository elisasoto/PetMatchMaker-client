import { useForm } from 'react-hook-form';

import { errorMessage } from '../../constants/formErrors';

export default function UserRegister() {
  const {
    handleSubmit,
    register,
    formState: { errors }
  } = useForm({});

  const handleFormSubmit = (formValues) => {
    console.log(formValues);
  };

  return (
    <div className="formPage">
      <div className="form">
        <h1>Welcome</h1>
        <h4>
          Fill your Basic Info and start matching with your perfect friend
        </h4>
        <form onSubmit={handleSubmit(handleFormSubmit)}>
          <label htmlFor="name"> Name</label>
          <input
            type="text"
            id="name"
            placeholder="First name"
            {...register('name', {
              required: true,
              minLength: {
                value: 2
              },
              maxLength: 80
            })}
          />
          {errors.name && errors.name.type === 'required' ? (
            <p>{errorMessage.required}</p>
          ) : null}
          {errors.name && errors.name.type === 'minLength' ? (
            <p>{errorMessage.nameFieldLenght}</p>
          ) : null}
          <label>Surname</label>
          <input
            type="text"
            id="surname"
            placeholder="Last name"
            {...register('surname', { required: false, maxLength: 100 })}
          />
          <label>Email</label>
          <input
            type="text"
            id="email"
            placeholder="jondoe@gmail.com"
            {...register('email', {
              required: true,
              pattern: {
                value: /^\S+@\S+$/i
              }
            })}
          />
          {errors.email && errors.email.type === 'required' ? (
            <p>{errorMessage.required}</p>
          ) : null}
          {errors.email && errors.email.type === 'pattern' ? (
            <p>{errorMessage.emailPattern}</p>
          ) : null}
          <label>Password</label>
          <input
            type="password"
            id="password"
            name="password"
            {...register('password', {
              required: true,
              minLength: 6,
              maxLength: 20
            })}
          />
          {errors.password && errors.password.type === 'required' ? (
            <p>{errorMessage.required}</p>
          ) : null}
          {errors.password && errors.password.type === 'minLength' ? (
            <p>{errorMessage.passwordFieldLenght}</p>
          ) : null}
          {errors.password && errors.password.type === 'maxLength' ? (
            <p>{errorMessage.passwordFieldLenght}</p>
          ) : null}
          <label>Contact Number</label>
          <input
            type="text"
            id="phone"
            placeholder="787652901"
            {...register('phone', {
              required: true,
              minLength: 9,
              maxLength: 15,
              pattern: {
                value: /^(?:(?:\(?(?:00|\+)([1-4]\d\d|[1-9]\d?)\)?)?[-. \\/]?)?((?:\(?\d{1,}\)?[-. \\/]?){0,})(?:[-. \\/]?(?:#|ext\.?|extension|x)[-. \\/]?(\d+))?$/i
              }
            })}
          />
          {errors.phone && errors.phone.type === 'required' ? (
            <p>{errorMessage.required}</p>
          ) : null}
          {errors.phone && errors.phone.type === 'maxLength' ? (
            <p>{errorMessage.maxPhoneLength}</p>
          ) : null}
          {errors.phone && errors.phone.type === 'minLength' ? (
            <p>{errorMessage.phoneMinLenght}</p>
          ) : null}
          {errors.phone && errors.phone.type === 'pattern' ? (
            <p>{errorMessage.integerPattern}</p>
          ) : null}
          <label>Upload your Image</label>
          <input
            type="text"
            id="img"
            {...register('img', {
              required: true
            })}
          />
          {errors.img && errors.img.type === 'required' ? (
            <p>{errorMessage.required}</p>
          ) : null}
          <button type="submit">Sign up</button>
        </form>
      </div>
    </div>
  );
}
