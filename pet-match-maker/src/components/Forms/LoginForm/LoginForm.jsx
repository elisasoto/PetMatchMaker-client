import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import React from 'react';
import {
  Button,
  FormControl,
  FormErrorMessage,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Stack,
  Switch,
  Text
} from '@chakra-ui/react';
import { EmailIcon, LockIcon } from '@chakra-ui/icons';

import { UserContext } from '../../../context/User';
import { errorMessage } from '../../../constants/formErrors';

export default function LoginForm() {
  const { adopterLogin, shelterLogin } = useContext(UserContext);

  const [show, setShow] = React.useState(false);
  const [isUser, setIsUser] = React.useState(1);
  const handleClick = () => setShow(!show);

  const history = useHistory();

  const {
    handleSubmit,
    register,
    formState: { errors }
  } = useForm();

  const handleFormSubmit = async (formValues) => {
    try {
      if (isUser) {
        await adopterLogin(formValues);
        await history.push('/user/home');
      } else {
        await shelterLogin(formValues);
        await history.push('/shelter/home');
      }
    } catch (error) {
      console.log('i am the erro', error);
    }
  };

  return (
    <form onSubmit={handleSubmit(handleFormSubmit)}>
      <Stack spacing={2}>
        <Text>
          Start session as
          <Text color={'cyan.400'} fontWeight={600}>
            {isUser ? 'Adopter' : 'Shelter'}
          </Text>
        </Text>
        <Switch
          id="mode"
          defaultIsChecked={isUser}
          onChange={(e) => {
            setIsUser(e.target.checked ? 1 : 0);
          }}
        />

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
