import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';

import { UserContext } from '../../context/User';

import './styles.scss';

export default function LoginForm() {
  const { login } = useContext(UserContext);
  const {
    handleSubmit,
    register,
    formState: { errors }
  } = useForm();

  const handleFormSubmit = (formValues) => {
    login(formValues.email, formValues.password);
  };

  return (
    <>
      <h2>Welcome</h2>
      <h4>Sign In</h4>
      <form onSubmit={handleSubmit(handleFormSubmit)}>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="jondoe@gmail.com"
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

      <div className="profile__registerLink">
        <h5>
          Not yet a user of Tutti.Frutti?
          <Link to="/register"> Register</Link>
        </h5>
      </div>
    </>
  );
}
