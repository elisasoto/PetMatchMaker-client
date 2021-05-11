import { useContext } from 'react';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import {
  FormErrorMessage,
  Stack,
  Input,
  Button,
  InputGroup,
  InputRightElement,
  InputLeftElement,
  InputLeftAddon,
  FormLabel,
  FormControl
} from '@chakra-ui/react';
import { EmailIcon, LockIcon } from '@chakra-ui/icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle, faUser } from '@fortawesome/free-solid-svg-icons';

import { errorMessage } from '../../../constants/formErrors';
import { UserContext } from '../../../context/User';
import { getFormData } from '../../../utils/formData';

export default function UserRegister() {
  const { adopterRegister } = useContext(UserContext);
  const [show, setShow] = useState(false);

  const handleClick = () => setShow(!show);

  const {
    handleSubmit,
    register,
    formState: { errors }
  } = useForm({});

  const handleFormSubmit = (formValues) => {
    const { img, ...restvalues } = formValues;
    const formData = getFormData('img', img, restvalues);
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit(handleFormSubmit)}>
      <Stack>
        <FormControl isRequired={errors.name} isInvalid={!!errors.name}>
          <InputGroup size="sm">
            <Input
              type="text"
              id="name"
              placeholder="Your Name"
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
              children={<FontAwesomeIcon icon={faUser} />}
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

        <FormControl isRequired={errors.name} isInvalid={!!errors.name}>
          <InputGroup size="sm">
            <Input
              type="text"
              id="surname"
              placeholder="Surname"
              {...register('surname', { required: false, maxLength: 100 })}
            />
            <InputLeftElement
              pointerEvents="none"
              children={<FontAwesomeIcon icon={faInfoCircle} />}
            />
          </InputGroup>
          <FormErrorMessage>
            {errors.name && errors.name.type === 'required' ? (
              <p>{errorMessage.required}</p>
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

        <FormControl isRequired={errors.name} isInvalid={!!errors.name}>
          <InputGroup>
            <FormLabel>Upload your Avatar Image</FormLabel>
            <input
              type="file"
              id="img"
              className="add-file"
              {...register('img', {
                required: true
              })}
            />
          </InputGroup>
        </FormControl>
        <FormErrorMessage>
          {errors.name && errors.name.type === 'required' ? (
            <p>{errorMessage.required}</p>
          ) : null}
        </FormErrorMessage>
      </Stack>
      <Button mt={4} colorScheme="cyan" type="submit">
        SignUp
      </Button>
    </form>
  );
}
