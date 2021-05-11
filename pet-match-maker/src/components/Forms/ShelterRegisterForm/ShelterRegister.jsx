import { useContext } from 'react';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import {
  FormErrorMessage,
  Stack,
  Input,
  Textarea,
  Button,
  InputGroup,
  Box,
  InputRightElement,
  InputLeftElement,
  InputLeftAddon,
  FormControl
} from '@chakra-ui/react';
import { EmailIcon, LockIcon } from '@chakra-ui/icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCity,
  faGlobeEurope,
  faHouseUser
} from '@fortawesome/free-solid-svg-icons';

import { errorMessage } from '../../../constants/formErrors';
import { UserContext } from '../../../context/User';

export default function ShelterRegister() {
  const { shelterRegister } = useContext(UserContext);
  const [aboutCounthLength, settextAreaLengthCount] = useState(0);
  const [show, setShow] = useState(false);

  const handleClick = () => setShow(!show);

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
    <form
      onSubmit={handleSubmit(handleFormSubmit)}
      onChange={textAreaRecalculate}
    >
      <Stack spacing={2}>
        <FormControl isRequired={errors.name} isInvalid={!!errors.name}>
          <InputGroup size="sm">
            <Input
              type="text"
              id="name"
              placeholder="Shelter's name"
              className="input"
              {...register('name', {
                required: true,
                minLength: {
                  value: 2
                },
                maxLength: 80
              })}
            />
            <InputLeftElement
              pointerEvents="none"
              children={<FontAwesomeIcon icon={faHouseUser} />}
            />
          </InputGroup>
          <FormErrorMessage>
            {errors.name && errors.name.type === 'required' ? (
              <p>{errorMessage.required}</p>
            ) : null}
            {errors.name && errors.name.type === 'minLength' ? (
              <p>{errorMessage.nameFieldLenght}</p>
            ) : null}
            {errors.name && errors.name.type === 'maxLength' ? (
              <p>{errorMessage.nameFieldMaxLenght}</p>
            ) : null}
          </FormErrorMessage>
        </FormControl>

        <FormControl isRequired={errors.email} isInvalid={!!errors.email}>
          <InputGroup size="sm">
            <Input
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
            <InputLeftElement
              pointerEvents="none"
              children={<EmailIcon color="gray.300" />}
            />
          </InputGroup>
          <FormErrorMessage>
            {errors.email && errors.email.type === 'required' ? (
              <p>{errorMessage.required}</p>
            ) : null}
            {errors.email && errors.email.type === 'pattern' ? (
              <p>{errorMessage.emailPattern}</p>
            ) : null}
          </FormErrorMessage>
        </FormControl>

        <FormControl isRequired={errors.password} isInvalid={!!errors.password}>
          <InputGroup size="sm">
            <Input
              pr="4.5rem"
              type={show ? 'text' : 'password'}
              placeholder="Enter password"
              id="password"
              name="password"
              className="input"
              {...register('password', {
                required: true,
                minLength: 6,
                maxLength: 20
              })}
            />
            <InputLeftElement
              pointerEvents="none"
              children={<LockIcon color="gray.300" />}
            />
            <InputRightElement width="4.5rem">
              <Button h="1.75rem" size="sm" onClick={handleClick}>
                {show ? 'Hide' : 'Show'}
              </Button>
            </InputRightElement>
          </InputGroup>
          <FormErrorMessage>
            {errors.password && errors.password.type === 'required' ? (
              <p>{errorMessage.required}</p>
            ) : null}
            {errors.password && errors.password.type === 'minLength' ? (
              <p>{errorMessage.passwordFieldLenght}</p>
            ) : null}
            {errors.password && errors.password.type === 'maxLength' ? (
              <p>{errorMessage.passwordFieldLenght}</p>
            ) : null}
          </FormErrorMessage>
        </FormControl>

        <FormControl isRequired={errors.phone} isInvalid={!!errors.phone}>
          <InputGroup>
            <InputLeftAddon children="+34" />
            <Input
              type="text"
              id="phone"
              placeholder="Phone Number"
              className="input"
              {...register('phone', {
                required: true,
                minLength: 9,
                maxLength: 15,
                pattern: {
                  value: /^(?:(?:\(?(?:00|\+)([1-4]\d\d|[1-9]\d?)\)?)?[-. /]?)?((?:\(?\d{1,}\)?[-. /]?){0,})(?:[-. /]?(?:#|ext\.?|extension|x)[-. /]?(\d+))?$/i
                }
              })}
            />
          </InputGroup>
          <FormErrorMessage>
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
          </FormErrorMessage>
        </FormControl>

        <FormControl isRequired={errors.country} isInvalid={!!errors.country}>
          <InputGroup size="sm">
            <Input
              type="text"
              id="country"
              placeholder="Country"
              {...register('country', {
                required: true
              })}
            />
            <InputLeftElement
              pointerEvents="none"
              children={<FontAwesomeIcon icon={faGlobeEurope} />}
            />
          </InputGroup>
          <FormErrorMessage>
            {errors.country && errors.country.type === 'required' ? (
              <p>{errorMessage.required}</p>
            ) : null}
          </FormErrorMessage>
        </FormControl>

        <FormControl isRequired={errors.city} isInvalid={!!errors.city}>
          <InputGroup size="sm">
            <Input
              type="text"
              id="city"
              placeholder="City"
              {...register('city', {
                required: true
              })}
            />
            <InputLeftElement
              pointerEvents="none"
              children={<FontAwesomeIcon icon={faCity} />}
            />
          </InputGroup>
          <FormErrorMessage>
            {errors.city && errors.city.type === 'required' ? (
              <p>{errorMessage.required}</p>
            ) : null}
          </FormErrorMessage>
        </FormControl>

        <FormControl isRequired={errors.about} isInvalid={!!errors.about}>
          <Box>
            <Textarea
              type="text"
              id="about"
              rows={5}
              className="full_height_Width input"
              placeholder="Tell us about your shelter"
              {...register('about', {
                required: true,
                maxLength: 240,
                minLength: 50
              })}
            />
            <p> {`${aboutCounthLength} / 240 left`} </p>
          </Box>

          <FormErrorMessage>
            {errors.about && errors.about.type === 'required' ? (
              <p>{errorMessage.required}</p>
            ) : null}
            {errors.about && errors.about.type === 'maxLength' ? (
              <p>{errorMessage.pharagraphMaxLength}</p>
            ) : null}
            {errors.about && errors.about.type === 'minLength' ? (
              <p>{errorMessage.pharagraphMinLength}</p>
            ) : null}
          </FormErrorMessage>
        </FormControl>
      </Stack>

      <Button mt={4} colorScheme="cyan" type="submit">
        SignUp
      </Button>
    </form>
  );
}
