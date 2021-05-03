import { useForm } from 'react-hook-form';

export default function LoginForm() {
  const {
    handleSubmit,
    register,
    formState: { errors }
  } = useForm();

  const handleFormSubmit = (formValues) => {
    console.log(formValues);
  };

  return (
    <>
      <h2>Welcome to PetMatchMaker</h2>
      <form onSubmit={handleSubmit(handleFormSubmit)}>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="yourmail@gmail.com"
          {...register('email', {
            required: true
          })}
        />
        {errors.email && errors.email.type === 'required' ? (
          <p>Email field is required</p>
        ) : null}
        <br />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          {...register('password', { required: true })}
        />
        {errors.password && errors.password.type === 'required' ? (
          <p>Password field is required</p>
        ) : null}
        <br />
        <button type="submit">Login</button>
      </form>
    </>
  );
}
