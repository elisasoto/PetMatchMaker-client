import { useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useForm, Controller } from 'react-hook-form';
import ReactDatePicker from 'react-datepicker';
import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Heading,
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightAddon,
  Stack,
  Text,
  Textarea
} from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBirthdayCake,
  faCalendar,
  faCameraRetro,
  faDog,
  faPaw,
  faWeight
} from '@fortawesome/free-solid-svg-icons';
import { SmallCloseIcon } from '@chakra-ui/icons';
import { errorMessage } from '../../../constants/formErrors';
import { UserContext } from '../../../context/User';
import { getFormData } from '../../../utils/formData';
import { putPetRegister } from '../../../services/pets';

import '../UserRegisterForm/userForm.scss';
import 'react-datepicker/dist/react-datepicker.css';

export default function PetRegister() {
  const { user } = useContext(UserContext);
  const {
    handleSubmit,
    control,
    watch,
    register,
    formState: { errors }
  } = useForm({});

  const history = useHistory();

  const handleFormSubmit = async (formValues) => {
    if (user) {
      const { img, ...restvalues } = formValues;
      const formData = getFormData('img', img, restvalues);
      await putPetRegister(formData);
      await history.push('/shelter/home');
    }
  };

  const [about] = watch(['about']);

  return (
    <form onSubmit={handleSubmit(handleFormSubmit)}>
      <Stack>
        <Heading
          lineHeight={1.1}
          fontWeight={600}
          fontSize={{ base: '2xl', sm: '6xl', lg: '10xl' }}
        >
          <Text
            as={'span'}
            position={'relative'}
            _after={{
              content: "''",
              width: 'full',
              height: '30%',
              position: 'absolute',
              bottom: 1,
              left: 0,
              bg: 'cyan.400',
              zIndex: -1
            }}
          >
            Please fill
          </Text>

          <Text as={'span'} color={'cyan.400'}>
            the fields below
          </Text>
        </Heading>
        <Link to="/shelter/home">
          <Box p="2" textAlign="right">
            <IconButton
              aria-label="Call Segun"
              size="sm"
              colorScheme="whiteAlpha"
              icon={<SmallCloseIcon color="black" />}
            />
            Close
          </Box>
        </Link>
        <FormControl isRequired={errors.name} isInvalid={!!errors.name}>
          <InputGroup size="sm">
            <Input
              type="text"
              id="name"
              placeholder="Pet's Name"
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
              children={<FontAwesomeIcon icon={faDog} />}
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
        <FormControl isRequired={errors.age} isInvalid={!!errors.age}>
          <InputGroup size="sm">
            <Input
              type="text"
              id="age"
              placeholder="8 Years"
              {...register('age', {
                required: true,
                maxLength: 9,
                pattern: {
                  value: /\d\s\w/
                }
              })}
            />
            <InputLeftElement
              pointerEvents="none"
              children={<FontAwesomeIcon icon={faBirthdayCake} />}
            />
          </InputGroup>
          <FormErrorMessage>
            {errors.age && errors.age.type === 'required' ? (
              <p>{errorMessage.required}</p>
            ) : null}
            {errors.age && errors.age.type === 'pattern' ? (
              <p>{errorMessage.agePattern}</p>
            ) : null}
            {errors.age && errors.age.type === 'maxLength' ? (
              <p>{errorMessage.maxAgeLenght}</p>
            ) : null}
          </FormErrorMessage>
        </FormControl>
        <FormControl isRequired={errors.weight} isInvalid={!!errors.weight}>
          <Box
            p={2}
            border="0.5px solid lightgray"
            borderRadius="5px"
            color="gray"
          >
            <FormLabel>
              <FontAwesomeIcon icon={faCalendar} />
              <Controller
                control={control}
                name="dateArrivalInShelter"
                render={(props) => (
                  <ReactDatePicker
                    placeholderText="Date of arrival in Shelter"
                    onChange={(e) => {
                      props.field.onChange(e);
                    }}
                    selected={props.field.value}
                  />
                )}
              />
            </FormLabel>
          </Box>
          <FormErrorMessage>
            {errors.age && errors.age.type === 'required' ? (
              <p>{errorMessage.required}</p>
            ) : null}
          </FormErrorMessage>
        </FormControl>
        <FormControl isRequired={errors.weight} isInvalid={!!errors.weight}>
          <InputGroup size="sm">
            <Input
              type="text"
              id="weight"
              placeholder="Aprox weight of the pet in Kilograms: i.e: 8"
              {...register('weight', {
                required: true,
                maxLength: 2,
                pattern: {
                  value: /^[0-9]*$/
                }
              })}
            />
            <InputLeftElement
              pointerEvents="none"
              children={<FontAwesomeIcon icon={faWeight} />}
            />
            <InputRightAddon children="Kilograms" />
          </InputGroup>
          <FormErrorMessage>
            {errors.weight && errors.weight.type === 'required' ? (
              <p>{errorMessage.required}</p>
            ) : null}
            {errors.weight && errors.weight.type === 'pattern' ? (
              <p>{errorMessage.integerPattern}</p>
            ) : null}
            {errors.weight && errors.weight.type === 'maxLength' ? (
              <p>{errorMessage.maxWeightLenght}</p>
            ) : null}
          </FormErrorMessage>
        </FormControl>
        <FormControl isRequired={errors.breed} isInvalid={!!errors.breed}>
          <InputGroup size="sm">
            <Input
              type="text"
              id="breed"
              placeholder="Pet's breed (ie: Golden Retriever OR Mix of...)"
              {...register('breed', {
                required: true,
                minLength: {
                  value: 2
                },
                maxLength: 80
              })}
            />
            <InputLeftElement
              pointerEvents="none"
              children={<FontAwesomeIcon icon={faPaw} />}
            />
          </InputGroup>
          <FormErrorMessage>
            {errors.breed && errors.breed.type === 'required' ? (
              <p>{errorMessage.required}</p>
            ) : null}
            {errors.breed && errors.breed.type === 'minLength' ? (
              <p>{errorMessage.nameFieldLenght}</p>
            ) : null}
            dd
          </FormErrorMessage>
        </FormControl>
        <FormControl isRequired={errors.about} isInvalid={!!errors.about}>
          <Box>
            <Textarea
              type="text"
              id="about"
              rows={5}
              placeholder="Please describe the Pet: its personality, mood, trainings and/or special needs for adopters to get to know it better and fall in love."
              {...register('about', {
                required: true,
                maxLength: 240,
                minLength: 50
              })}
            />
            <p>
              <strong>{`${(about || '').length} / 240 left`}</strong>{' '}
            </p>
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
        <FormControl isRequired={errors.name} isInvalid={!!errors.name}>
          <InputGroup>
            <Box
              p={4}
              border="1px solid lightgrey"
              borderRadius="10px"
              color="gray.300"
            >
              <FormLabel>Upload a cute pic of the Pet</FormLabel>
              <input
                type="file"
                id="img"
                name="img"
                accept="image/png,image/gif,image/jpeg"
                {...register('img', {
                  required: true
                })}
              />
              <label htmlFor="img" className="btn-2">
                <FontAwesomeIcon icon={faCameraRetro} />
              </label>
            </Box>
          </InputGroup>
          <FormHelperText>
            *1 picture of the Pet is required for adopters to pick them
          </FormHelperText>
        </FormControl>
        <FormErrorMessage>
          {errors.name && errors.name.type === 'required' ? (
            <p>{errorMessage.required}</p>
          ) : null}
        </FormErrorMessage>
      </Stack>
      <Button mt={4} colorScheme="cyan" type="submit">
        Add a Pet
      </Button>
    </form>
  );
}
