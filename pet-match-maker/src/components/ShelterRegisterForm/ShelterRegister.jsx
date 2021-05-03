import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

import { errorMessage } from '../../constants/formErrors';

export default function ShelterRegister() {
  const [aboutCounthLength, settextAreaLengthCount] = useState(0);

  const textAreaRecalculate = (e) => {
    settextAreaLengthCount(e.target.value.length);
  };

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
        <h4>Fill the info below to start registering Pets</h4>
        <form
          onSubmit={handleSubmit(handleFormSubmit)}
          onChange={textAreaRecalculate}
        >
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            placeholder="Shelters name"
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
          <label>Country</label>
          <input
            type="text"
            id="country"
            placeholder="Mexico"
            {...register('country', {
              required: true
            })}
          />
          {errors.country && errors.country.type === 'required' ? (
            <p>{errorMessage.required}</p>
          ) : null}
          <label>City</label>
          <input
            type="text"
            id="city"
            placeholder="Ciudad de Mexico"
            {...register('city', {
              required: true
            })}
          />
          {errors.city && errors.city.type === 'required' ? (
            <p>{errorMessage.required}</p>
          ) : null}
          <label>Please tell us a bit about yourself</label>
          <p> {`${aboutCounthLength} / 240 left`} </p>
          <textarea
            type="text"
            id="about"
            rows={5}
            className="full_height_Width"
            placeholder="your personality, where do you work, your hobbies"
            {...register('about', {
              required: true,
              maxLength: 240,
              minLength: 50
            })}
          />
          {errors.about && errors.about.type === 'required' ? (
            <p>{errorMessage.required}</p>
          ) : null}
          {errors.about && errors.about.type === 'maxLength' ? (
            <p>{errorMessage.pharagraphMaxLength}</p>
          ) : null}
          {errors.about && errors.about.type === 'minLength' ? (
            <p>{errorMessage.pharagraphMinLength}</p>
          ) : null}
          <button type="submit">Sign up</button>
        </form>
      </div>
    </div>
  );
}
