import { useContext } from 'react';
import { useForm } from 'react-hook-form';

import { errorMessage } from '../../constants/formErrors';
import { UserContext } from '../../context/User';

export default function UserRegister() {
  const { adopterRegister } = useContext(UserContext);

  const {
    handleSubmit,
    register,
    formState: { errors }
  } = useForm({});

  const handleFormSubmit = (formValues) => {
    adopterRegister(formValues);
  };

  return (
    <div className="form-constructor">
      <div className="signup">
        <button className="submit-btn">Sign up as Shelter</button>
        <button className="submit-btn">Sign up as Adopter</button>
        <h4>
          Fill your Basic Info and start matching with your perfect friend
        </h4>
        <form onSubmit={handleSubmit(handleFormSubmit)}>
          <input
            type="text"
            id="name"
            placeholder="Name"
            className="input"
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
          <input
            type="text"
            id="surname"
            placeholder="Surname"
            className="input"
            {...register('surname', { required: false, maxLength: 100 })}
          />
          <input
            type="text"
            id="email"
            placeholder="Email"
            className="input"
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
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Password"
            className="input"
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
          <input
            type="text"
            id="phone"
            placeholder="Your Contact Phone Number"
            className="input"
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
          <input
            type="text"
            className="input"
            id="img"
            placeholder="Upload your photo"
            {...register('img', {
              required: true
            })}
          />
          {errors.img && errors.img.type === 'required' ? (
            <p>{errorMessage.required}</p>
          ) : null}
          <button type="submit" className="submit-btn">
            Sign up
          </button>
        </form>
      </div>
    </div>
  );
}
