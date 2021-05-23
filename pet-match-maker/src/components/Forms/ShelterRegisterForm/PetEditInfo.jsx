import { useHistory } from 'react-router-dom';
import { useForm, Controller } from 'react-hook-form';
import ReactDatePicker from 'react-datepicker';
import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  WrapItem,
  Avatar,
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
  faUpload,
  faDog,
  faPaw,
  faWeight
} from '@fortawesome/free-solid-svg-icons';
import { SmallCloseIcon } from '@chakra-ui/icons';
import { errorMessage } from '../../../constants/formErrors';
import { getFormData } from '../../../utils/formData';
import { putPetEdit } from '../../../services/pets';

import '../UserRegisterForm/userForm.scss';
import 'react-datepicker/dist/react-datepicker.css';

export default function PetEditInfo({ pet }) {
  const { _id } = pet;
  const history = useHistory();
  const {
    handleSubmit,
    control,
    watch,
    register,
    formState: { errors }
  } = useForm({ defaultValues: pet });

  const handleFormSubmit = async (formValues, _id) => {
    console.log(formValues, _id);
    const { picture, ...restvalues } = formValues;
    const formData = getFormData('img', picture, restvalues);
    await putPetEdit(formData, _id);
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
            as="span"
            position="relative"
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
            Edit Pet Info
          </Text>
          <Text as="span" color="cyan.400">
            in the fields below
          </Text>
        </Heading>
        <Box p="2" textAlign="right" onClick={() => history.goBack()}>
          <IconButton
            aria-label="Call Segun"
            size="sm"
            colorScheme="whiteAlpha"
            icon={<SmallCloseIcon color="black" />}
          />
          Close
        </Box>
        <Box display="flex" alignItems="center" justifyContent="space-between">
          <WrapItem p={2}>
            <Avatar size="md" name="Prosper Otemuyiwa" src={`${pet.img}`} />
            <input
              type="file"
              id="img"
              name="picture"
              accept="image/png,image/gif,image/jpeg"
              {...register('picture')}
            />
            <label htmlFor="img" className="btn-3">
              <FontAwesomeIcon icon={faUpload} />
            </label>
          </WrapItem>
          <Button p={4} mt={4} width="70px" colorScheme="cyan" type="submit">
            Save
          </Button>
        </Box>
        <FormControl isInvalid={!!errors.name}>
          <InputGroup size="sm">
            <Input
              type="text"
              id="name"
              placeholder="Pet's Name"
              {...register('name', {
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
            {errors.name && errors.name.type === 'minLength' ? (
              <p>{errorMessage.nameFieldLenght}</p>
            ) : null}
            {errors.name && errors.name.type === 'maxLength' ? (
              <p>{errorMessage.nameFieldMaxLenght}</p>
            ) : null}
          </FormErrorMessage>
        </FormControl>
        <FormControl isInvalid={!!errors.age}>
          <InputGroup size="sm">
            <Input
              type="text"
              id="age"
              placeholder="8 Years"
              {...register('age', {
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
            {errors.age && errors.age.type === 'pattern' ? (
              <p>{errorMessage.agePattern}</p>
            ) : null}
            {errors.age && errors.age.type === 'maxLength' ? (
              <p>{errorMessage.maxAgeLenght}</p>
            ) : null}
          </FormErrorMessage>
        </FormControl>
        <FormControl isInvalid={!!errors.weight}>
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
          <FormErrorMessage></FormErrorMessage>
        </FormControl>
        <FormControl isInvalid={!!errors.weight}>
          <InputGroup size="sm">
            <Input
              type="text"
              id="weight"
              placeholder="Aprox weight of the pet in Kilograms: i.e: 8"
              {...register('weight', {
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
            {errors.weight && errors.weight.type === 'pattern' ? (
              <p>{errorMessage.integerPattern}</p>
            ) : null}
            {errors.weight && errors.weight.type === 'maxLength' ? (
              <p>{errorMessage.maxWeightLenght}</p>
            ) : null}
          </FormErrorMessage>
        </FormControl>
        <FormControl isInvalid={!!errors.breed}>
          <InputGroup size="sm">
            <Input
              type="text"
              id="breed"
              placeholder="Pet's breed (ie: Golden Retriever OR Mix of...)"
              {...register('breed', {
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
            {errors.breed && errors.breed.type === 'minLength' ? (
              <p>{errorMessage.nameFieldLenght}</p>
            ) : null}
            dd
          </FormErrorMessage>
        </FormControl>
        <FormControl isInvalid={!!errors.about}>
          <Box>
            <Textarea
              type="text"
              id="about"
              rows={5}
              placeholder="Please describe the Pet: its personality, mood, trainings and/or special needs for adopters to get to know it better and fall in love."
              {...register('about', {
                maxLength: 240,
                minLength: 0
              })}
            />
            <p>
              <strong>{`${(about || '').length} / 240 left`}</strong>{' '}
            </p>
          </Box>
          <FormErrorMessage>
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
        Save
      </Button>
    </form>
  );
}
