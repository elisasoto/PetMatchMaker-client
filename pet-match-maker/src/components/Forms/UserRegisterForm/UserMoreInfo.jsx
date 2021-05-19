import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useForm, Controller } from 'react-hook-form';

import {
  Avatar,
  Box,
  Link,
  IconButton,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  InputGroup,
  InputLeftAddon,
  InputLeftElement,
  InputRightElement,
  Radio,
  RadioGroup,
  Select,
  Stack,
  Textarea,
  WrapItem
} from '@chakra-ui/react';
import { EmailIcon, LockIcon, SmallCloseIcon } from '@chakra-ui/icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faClock,
  faDog,
  faInfoCircle,
  faUpload,
  faUser
} from '@fortawesome/free-solid-svg-icons';
import { errorMessage } from '../../../constants/formErrors';
import { getFormData } from '../../../utils/formData';
import { putUserProfile } from '../../../services/user';
import './moreInfo.scss';

export default function UserMoreInfo({ profile }) {
  const [show, setShow] = useState(false);

  const history = useHistory();

  const {
    handleSubmit,
    register,
    control,
    formState: { errors },
    watch
  } = useForm({
    defaultValues: profile
  });

  const handleClick = () => setShow(!show);

  const handleFormSubmit = async (formValues) => {
    console.log(formValues);
    const { img, ...restvalues } = formValues;
    const formData = getFormData('img', img, restvalues);
    await putUserProfile(formData);
    await history.push('/user/profile');
  };

  const [about, motivations, ammenities] = watch([
    'about',
    'motivations',
    'ammenities'
  ]);

  return (
    <form onSubmit={handleSubmit(handleFormSubmit)}>
      <Box d="flex-wrap" p={2} borderRadius="5px">
        <Link href="/user/home">
          <Box p="2" textAlign={'right'}>
            <IconButton
              aria-label="Call Segun"
              size="sm"
              colorScheme="whiteAlpha"
              icon={<SmallCloseIcon color="black" />}
            />
            Close
          </Box>
        </Link>
        <FormLabel>Profile Details</FormLabel>
        <Stack>
          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
          >
            <WrapItem p={2}>
              <Avatar
                size="md"
                name={`${profile.name}`}
                src={`${profile.img}`}
              />
              <input
                type="hidden" // https://spectrum.chat/react-hook-form/help/invalidstateerror-failed-to-set-the-value-property-on-htmlinputelement-this-input-element-accepts-a-filename-which-may-only-be-programmatically-set-to-the-empty-string~0960a16b-db07-4b53-a6b7-580d3de67403
                id="img"
                name="img"
                accept="image/png,image/gif,image/jpeg"
                {...register('img')}
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
                placeholder="Your Name"
                {...register('name', {
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
              {errors.name && errors.name.type === 'minLength' ? (
                <p>{errorMessage.nameFieldLenght}</p>
              ) : null}
              {errors.name && errors.name.type === 'maxLength' ? (
                <p>{errorMessage.nameFieldMaxLenght}</p>
              ) : null}
            </FormErrorMessage>
          </FormControl>
          <FormControl isInvalid={!!errors.surname}>
            <InputGroup size="sm">
              <Input
                type="text"
                id="surname"
                placeholder="Surname"
                {...register('surname', { minLength: 2, maxLength: 100 })}
              />
              <InputLeftElement
                pointerEvents="none"
                children={<FontAwesomeIcon icon={faInfoCircle} />}
              />
            </InputGroup>
            <FormErrorMessage>
              {errors.surname && errors.surname.type === 'minLength' ? (
                <p>{errorMessage.nameFieldLenght}</p>
              ) : null}
              {errors.surname && errors.surname.type === 'maxLength' ? (
                <p>{errorMessage.nameFieldMaxLenght}</p>
              ) : null}
            </FormErrorMessage>
          </FormControl>
          <FormControl isInvalid={!!errors.email}>
            <InputGroup size="sm">
              <Input
                type="text"
                id="email"
                placeholder="Email"
                {...register('email', {
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
              {errors.email && errors.email.type === 'pattern' ? (
                <p>{errorMessage.emailPattern}</p>
              ) : null}
            </FormErrorMessage>
          </FormControl>
          <FormControl isInvalid={!!errors.password}>
            <InputGroup size="sm">
              <Input
                pr="4.5rem"
                type={show ? 'text' : 'password'}
                placeholder="Enter a new Password"
                id="password"
                name="password"
                {...register('password', {
                  minLength: 0,
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
                  minLength: 9,
                  maxLength: 15,
                  pattern: {
                    value: /^(?:(?:\(?(?:00|\+)([1-4]\d\d|[1-9]\d?)\)?)?[-. /]?)?((?:\(?\d{1,}\)?[-. /]?){0,})(?:[-. /]?(?:#|ext\.?|extension|x)[-. /]?(\d+))?$/i
                  }
                })}
              />
            </InputGroup>
            <FormErrorMessage>
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
          <FormControl isInvalid={!!errors.about}>
            <Box>
              <Textarea
                type="text"
                name="about"
                id="about"
                rows={5}
                placeholder="Tell us about you: work, hobbies, personality, family. Any relevant information for the Shelter to contrast with the pet you liked."
                {...register('about', {
                  maxLength: 240,
                  minLength: 20
                })}
              />
              <p>
                <strong>{`${(about || '').length} / 240 left`}</strong>
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
          <FormControl isInvalid={!!errors.about}>
            <Box>
              <Textarea
                type="text"
                id="motivations"
                name="motivations"
                rows={5}
                placeholder="Tell us why do you want to adopt a pet?"
                {...register('motivations', {
                  maxLength: 240,
                  minLength: 20
                })}
              />
              <p>
                <strong>{`${(motivations || '').length} / 240 left`}</strong>
              </p>
            </Box>
            <FormErrorMessage>
              {errors.motivations && errors.motivations.type === 'maxLength' ? (
                <p>{errorMessage.pharagraphMaxLength}</p>
              ) : null}
              {errors.motivations && errors.motivations.type === 'minLength' ? (
                <p>{errorMessage.pharagraphMinLength}</p>
              ) : null}
            </FormErrorMessage>
          </FormControl>
          <FormControl
            isRequired={errors.hoursToSpend}
            isInvalid={!!errors.hoursToSpend}
          >
            <InputGroup size="sm">
              <Input
                type="text"
                id="hoursToSpend"
                placeholder="Daily hours you plan to spend with the Pet"
                {...register('hoursToSpend', {
                  maxLength: 2,
                  pattern: {
                    value: /^[0-9]*$/
                  }
                })}
              />
              <InputLeftElement
                pointerEvents="none"
                children={<FontAwesomeIcon icon={faClock} />}
              />
            </InputGroup>
            <FormErrorMessage>
              {errors.hoursToSpend && errors.hoursToSpend.type === 'pattern' ? (
                <p>{errorMessage.integerPattern}</p>
              ) : null}
              {errors.hoursToSpend &&
              errors.hoursToSpend.type === 'maxLength' ? (
                <p>{errorMessage.maxHoursLenght}</p>
              ) : null}
            </FormErrorMessage>
          </FormControl>
          <FormControl isInvalid={!!errors.about}>
            <Box>
              <Textarea
                type="text"
                id="ammenities"
                rows={5}
                className="full_height_Width"
                placeholder="Big park 1km away, agility gym nearby..."
                {...register('ammenities', {
                  maxLength: 240,
                  minLength: 20
                })}
              />
              <p>
                <strong>{`${(ammenities || '').length} / 240 left`}</strong>
              </p>
            </Box>
            <FormErrorMessage>
              {errors.ammenities && errors.ammenities.type === 'maxLength' ? (
                <p>{errorMessage.pharagraphMaxLength}</p>
              ) : null}
              {errors.ammenities && errors.ammenities.type === 'minLength' ? (
                <p>{errorMessage.pharagraphMinLength}</p>
              ) : null}
            </FormErrorMessage>
          </FormControl>
          <Controller
            name="living"
            id="living"
            control={control}
            defaultValue={'BY MYSELF'}
            rules={{ ...register('living', { required: true }) }}
            render={({ field: { onChange } }) => (
              <Select placeholder="Who do you live with?" onChange={onChange}>
                <option value="BY MYSELF">By Myself</option>
                <option value="WITH PARENTS">With my Parents</option>
                <option value="WITH PARTNER AND CHILDREN">
                  With my partner and children
                </option>
                <option value="WITH PARTNER ONLY">With partner only</option>
                <option value="WITH ROOMATE">With Roomate(s)</option>
              </Select>
            )}
          />
          <Controller
            name="houseType"
            id="houseType"
            defaultValue={'APARTAMENT'}
            control={control}
            rules={{ ...register('houseType', { required: true }) }}
            render={({ field: { onChange } }) => (
              <Select
                placeholder="Where will the dog live?"
                onChange={onChange}
              >
                <option value="APARTAMENT">In an apartament</option>
                <option value="CHALET">In a house without yard</option>
                <option value="HOUSE WITH YARD">In a house with yard</option>
              </Select>
            )}
          />
          <Box
            p={2}
            border="0.5px solid lightgray"
            borderRadius="5px"
            color="gray"
          >
            <FormLabel>Is this your first Pet?</FormLabel>
            <Controller
              name="firstPet"
              id="firstPet"
              defaultValue={'No'}
              control={control}
              rules={{ ...register('firstPet', { required: true }) }}
              render={({ field: { onChange } }) => (
                <RadioGroup defaultValue="No" onChange={onChange}>
                  <Stack spacing={5} direction="row">
                    <Radio colorScheme="blue" value={'Yes'}>
                      Yes
                    </Radio>
                    <Radio colorScheme="blue" value={'No'}>
                      No
                    </Radio>
                  </Stack>
                </RadioGroup>
              )}
            />
          </Box>
          <Box
            p={2}
            border="0.5px solid lightgray"
            borderRadius="5px"
            color="gray"
          >
            <FormLabel>Other pets living in the same place?</FormLabel>
            <Controller
              name="otherPets"
              id="otherPets"
              defaultValue={'No'}
              control={control}
              rules={{ ...register('otherPets', { required: true }) }}
              render={({ field: { onChange } }) => (
                <RadioGroup defaultValue="No" onChange={onChange}>
                  <Stack spacing={5} direction="row">
                    <Radio colorScheme="blue" value={'Yes'}>
                      Yes
                    </Radio>
                    <Radio colorScheme="blue" value={'No'}>
                      No
                    </Radio>
                  </Stack>
                </RadioGroup>
              )}
            />
          </Box>

          <Controller
            name="petLivingArrangement"
            id="petLivingArrangement"
            defaultValue={'INSIDE HOUSE'}
            control={control}
            rules={{ ...register('petLivingArrangement', { required: true }) }}
            render={({ field: { onChange } }) => (
              <Select
                placeholder="Where will the dog sleep?"
                onChange={onChange}
              >
                <option value="INSIDE HOUSE">Inside the house</option>
                <option value="OUTSIDE HOUSE">Outside in a PetHouse</option>
              </Select>
            )}
          />
        </Stack>
      </Box>
      <Box p={2} border="0.5px solid lightgray" borderRadius="5px">
        <FormLabel>Pet Preferences</FormLabel>
        <Stack>
          <Box
            p={2}
            border="0.5px solid lightgray"
            borderRadius="5px"
            color="gray"
          >
            <FormLabel>Ideal Size</FormLabel>
            <Controller
              name="size"
              id="size"
              control={control}
              defaultValue="ANY"
              rules={{ ...register('size', { required: true }) }}
              render={({ field: { onChange } }) => (
                <RadioGroup defaultValue="ANY" onChange={onChange}>
                  <Stack spacing={5} direction="row">
                    <Radio colorScheme="blue" value="ANY">
                      Any
                    </Radio>
                    <Radio colorScheme="blue" value="SMALL">
                      <FontAwesomeIcon
                        icon={faDog}
                        className="icon icon--small"
                      />
                    </Radio>
                    <Radio size="md" colorScheme="blue" value="MEDIUM">
                      <FontAwesomeIcon
                        icon={faDog}
                        className="icon icon--medium"
                      />
                    </Radio>
                    <Radio colorScheme="blue" value="BIG">
                      <FontAwesomeIcon
                        icon={faDog}
                        className="icon icon--big"
                      />
                    </Radio>
                    <Radio colorScheme="blue" value="XXL">
                      <FontAwesomeIcon
                        icon={faDog}
                        className="icon icon--large"
                      />
                    </Radio>
                  </Stack>
                </RadioGroup>
              )}
            />
          </Box>
          <Controller
            name="ageOfDog"
            id="ageOfDog"
            defaultValue={'ANY'}
            control={control}
            rules={{ ...register('ageOfDog', { required: true }) }}
            render={({ field: { onChange } }) => (
              <Select placeholder="Preferred Dog Age" onChange={onChange}>
                <option value="ANY">Any</option>
                <option value="PUPPY">I prefer a Puppy</option>
                <option value="ADULT">I prefer an Adult Dog</option>
              </Select>
            )}
          />
        </Stack>
      </Box>
      <Button mt={4} colorScheme="cyan" type="submit">
        Save
      </Button>
    </form>
  );
}
