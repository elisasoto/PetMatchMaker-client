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
    <div className="form-constructor">
      <div className="signup">
        <h4>Fill the info below to start registering Pets</h4>
        <form
          onSubmit={handleSubmit(handleFormSubmit)}
          onChange={textAreaRecalculate}
        >
          <input
            type="text"
            id="name"
            placeholder="Shelters name"
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
            id="email"
            placeholder="Contact Email"
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
            className="input"
            placeholder="Password"
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
            placeholder="Phone Number"
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
            id="country"
            placeholder="Country"
            {...register('country', {
              required: true
            })}
          />
          {errors.country && errors.country.type === 'required' ? (
            <p>{errorMessage.required}</p>
          ) : null}
          <input
            type="text"
            id="city"
            placeholder="City"
            {...register('city', {
              required: true
            })}
          />
          {errors.city && errors.city.type === 'required' ? (
            <p>{errorMessage.required}</p>
          ) : null}
          <div>
            <textarea
              type="text"
              id="about"
              rows={5}
              className="full_height_Width input"
              placeholder="Brief Description of the Shelter"
              {...register('about', {
                required: true,
                maxLength: 240,
                minLength: 50
              })}
            />
            <p> {`${aboutCounthLength} / 240 left`} </p>
          </div>
          {errors.about && errors.about.type === 'required' ? (
            <p>{errorMessage.required}</p>
          ) : null}
          {errors.about && errors.about.type === 'maxLength' ? (
            <p>{errorMessage.pharagraphMaxLength}</p>
          ) : null}
          {errors.about && errors.about.type === 'minLength' ? (
            <p>{errorMessage.pharagraphMinLength}</p>
          ) : null}
          <button type="submit" className="submit-btn">
            Sign up
          </button>
        </form>
      </div>
    </div>
  );
}
