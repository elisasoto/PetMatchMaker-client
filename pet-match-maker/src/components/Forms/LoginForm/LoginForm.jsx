import { useForm } from 'react-hook-form';
import React from 'react';
import {
  FormErrorMessage,
  Stack,
  Input,
  Button,
  InputGroup,
  InputRightElement,
  InputLeftElement,
  FormControl
} from '@chakra-ui/react';
import { EmailIcon, LockIcon } from '@chakra-ui/icons';

import { errorMessage } from '../../../constants/formErrors';

export default function LoginForm() {
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);

  // state de is user / shelter
  const {
    handleSubmit,
    register,
    formState: { errors }
  } = useForm();

  const handleFormSubmit = (formValues) => {
    console.log(formValues);
  };

  return (
    <form onSubmit={handleSubmit(handleFormSubmit)}>
      <Stack spacing={2}>
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
      </Stack>

      <Button mt={4} colorScheme="cyan" type="submit">
        Login
      </Button>
    </form>
  );
}
