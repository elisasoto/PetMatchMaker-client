import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import ReactDatePicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';

import { errorMessage } from '../../constants/formErrors';

export default function PetRegister() {
  const [aboutCounthLength, settextAreaLengthCount] = useState(0);

  const textAreaRecalculate = (e) => {
    settextAreaLengthCount(e.target.value.length);
  };

  const {
    handleSubmit,
    control,
    register,
    formState: { errors }
  } = useForm({});

  const handleFormSubmit = (formValues) => {
    console.log(formValues);
  };

  return (
    <div className="formPage">
      <div className="form">
        <h1>Hello /Shelter/</h1>
        <h4>Let´s start registering your available pets</h4>
        <form
          onSubmit={handleSubmit(handleFormSubmit)}
          onChange={textAreaRecalculate}
        >
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            placeholder="Pet's name"
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
          <label>Age</label>
          <input
            type="text"
            id="age"
            placeholder="2"
            {...register('age', {
              required: true,
              maxLength: 2,
              pattern: {
                value: /^[0-9]*$/
              }
            })}
          />
          {errors.age && errors.age.type === 'required' ? (
            <p>{errorMessage.required}</p>
          ) : null}
          {errors.age && errors.age.type === 'pattern' ? (
            <p>{errorMessage.integerPattern}</p>
          ) : null}
          {errors.age && errors.age.type === 'maxLength' ? (
            <p>{errorMessage.maxAgeLenght}</p>
          ) : null}
          <select {...register('ageMonthYear', { required: true })}>
            <option value="months">Months</option>
            <option value="months">Years</option>
          </select>
          <label>Weight</label>
          <input
            type="text"
            id="weight"
            placeholder="8"
            {...register('weight', {
              required: true,
              maxLength: 2,
              pattern: {
                value: /^[0-9]*$/
              }
            })}
          />
          {errors.weight && errors.weight.type === 'required' ? (
            <p>{errorMessage.required}</p>
          ) : null}
          {errors.weight && errors.weight.type === 'pattern' ? (
            <p>{errorMessage.integerPattern}</p>
          ) : null}
          {errors.weight && errors.weight.type === 'maxLength' ? (
            <p>{errorMessage.maxAgeLenght}</p>
          ) : null}
          <label>Kg</label>
          <br />
          <label>Upload A nice pet´s Image</label>
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
          <label htmlFor="name">Dog's Breed?</label>
          <input
            type="text"
            id="breed"
            placeholder="Pet's breed"
            {...register('breed', {
              required: true,
              minLength: {
                value: 2
              },
              maxLength: 80
            })}
          />
          {errors.breed && errors.breed.type === 'required' ? (
            <p>{errorMessage.required}</p>
          ) : null}
          {errors.breed && errors.breed.type === 'minLength' ? (
            <p>{errorMessage.nameFieldLenght}</p>
          ) : null}
          <label>When did the pet arrived to the Shelter?</label>

          <Controller
            control={control}
            name="ReactDatepicker"
            render={(props) => (
              <ReactDatePicker
                className="input"
                placeholderText="Select date"
                onChange={(e) => {
                  props.field.onChange(e);
                }}
                selected={props.field.value}
              />
            )}
          />

          <label>Please tell us a bit about the Pet</label>
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
          <button type="submit">Add Dog</button>
        </form>
      </div>
    </div>
  );
}
