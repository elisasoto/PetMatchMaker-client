import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

import { errorMessage } from '../../constants/formErrors';

// este se cambiara por el User del profile
const mockedProfile = {
  name: 'Lalo',
  surname: 'Gomez',
  email: 'lalo@hotmail.com',
  password: '98j4hfaoh8hgri4jgj',
  phone: '123935858',
  img: 'http://imge.com'
};

export default function UserMoreInfo() {
  const [aboutCounthLength, settextAreaLengthCount] = useState(0);

  const textAreaRecalculate = (e) => {
    settextAreaLengthCount(e.target.value.length);
  };

  const {
    handleSubmit,
    register,
    formState: { errors }
  } = useForm({
    defaultValues: mockedProfile ? mockedProfile : {}
  });

  const handleFormSubmit = (formValues) => {
    console.log(formValues);
  };

  return (
    <div className="formPage">
      <div className="form">
        <h2>Hi /user/</h2>
        <h4>
          Help us complete your profile for shelters to evaluate your form and
          suitability with your selected pets
        </h4>
        <form
          onSubmit={handleSubmit(handleFormSubmit)}
          onChange={textAreaRecalculate}
        >
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
          <label>Image</label>
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
          <label>Age</label>
          <input
            type="text"
            id="age"
            placeholder="30"
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
          <label>Who do you live with?</label>
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
          <label>Motivations</label>
          <p> {`${aboutCounthLength} / 240 left`} </p>
          <textarea
            type="text"
            id="motivations"
            rows={5}
            className="full_height_Width"
            placeholder="why do you want to adopt a dog?"
            {...register('motivations', {
              required: true,
              maxLength: 240,
              minLength: 50
            })}
          />
          {errors.motivations && errors.motivations.type === 'required' ? (
            <p>{errorMessage.required}</p>
          ) : null}
          {errors.motivations && errors.motivations.type === 'maxLength' ? (
            <p>{errorMessage.pharagraphMaxLength}</p>
          ) : null}
          {errors.motivations && errors.motivations.type === 'minLength' ? (
            <p>{errorMessage.pharagraphMinLength}</p>
          ) : null}
          <label>Daily Hours to Spend with pet</label>
          <input
            type="text"
            id="hoursToSpend"
            placeholder="4"
            {...register('hoursToSpend', {
              required: true,
              maxLength: 2,
              pattern: {
                value: /^[0-9]*$/
              }
            })}
          />
          {errors.hoursToSpend && errors.hoursToSpend.type === 'required' ? (
            <p>{errorMessage.required}</p>
          ) : null}
          {errors.hoursToSpend && errors.hoursToSpend.type === 'pattern' ? (
            <p>{errorMessage.integerPattern}</p>
          ) : null}
          {errors.hoursToSpend && errors.hoursToSpend.type === 'maxLength' ? (
            <p>{errorMessage.maxHoursLenght}</p>
          ) : null}
          <label>Pet Size preference</label>
          <select {...register('size', { required: true })}>
            <option value="any">Any</option>
            <option value="Small: less than 10kg">Small: less than 10kg</option>
            <option value="Medium: 10-20kg">Medium: 10-20kg</option>
            <option value="Big: 20-40kg">Big: 20-40kg</option>
            <option value="X-Large: over 40kg">X-Large: over 40kg</option>
          </select>
          <label>Pet Age preference</label>
          <select {...register('ageOfDog', { required: true })}>
            <option value="any">Any</option>
            <option value="less tha a year">Less tha a year</option>
            <option value="1-3 years">1-3 years</option>
            <option value="4-6 years">4-6 years</option>
            <option value="over 6 years">over 6 years</option>
          </select>
          <label>In which of these do you live in?</label>
          <select {...register('houseType', { required: true })}>
            <option value="apartament">apartament</option>
            <option value="chalet">chalet</option>
            <option value="house with yard">house with yard</option>
          </select>
          <label>Where will the pet spend most of its days?</label>
          <select {...register('petLivingArrangement', { required: true })}>
            <option value="inside house">inside house</option>
            <option value="outside house">outside house</option>
          </select>
          <label>Ammenities for the dog</label>
          <p> {`${aboutCounthLength} / 240 left`} </p>
          <textarea
            type="text"
            id="ammenities"
            rows={5}
            className="full_height_Width"
            placeholder="Big park 1km away, agility gym nearby..."
            {...register('ammenities', {
              required: true,
              maxLength: 100,
              minLength: 30
            })}
          />
          {errors.ammenities && errors.ammenities.type === 'required' ? (
            <p>{errorMessage.required}</p>
          ) : null}
          {errors.ammenities && errors.ammenities.type === 'maxLength' ? (
            <p>{errorMessage.pharagraphMaxLength}</p>
          ) : null}
          {errors.ammenities && errors.ammenities.type === 'minLength' ? (
            <p>{errorMessage.pharagraphMinLength}</p>
          ) : null}
          <label>Do you have any other pets living in the same house?</label>
          <label>Yes</label>
          <input
            {...register('otherPets', { required: true })}
            type="radio"
            id="otherPets"
            value="true"
          />
          <label>No</label>
          <input
            {...register('otherPets', { required: true })}
            type="radio"
            id="otherPets"
            value="false"
          />
          {errors.firstPet && errors.firstPet.type === 'required' ? (
            <p>{errorMessage.required}</p>
          ) : null}
          <label>Is this your first pet?</label>
          <label>Yes</label>
          <input
            {...register('firstPet', { required: true })}
            type="radio"
            id="firstPet"
            value="true"
          />
          <label>No</label>
          <input
            {...register('firstPet', { required: true })}
            type="radio"
            id="firstPet"
            value="false"
          />
          {errors.firstPet && errors.firstPet.type === 'required' ? (
            <p>{errorMessage.required}</p>
          ) : null}
          <button type="submit">Sign up</button>
        </form>
      </div>
    </div>
  );
}
