import { useForm } from 'react-hook-form';
import '../../styles/LoginPage.scss';

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
    <div className="form-constructor">
      <div className="signup">
        <h2 class="form-title" id="login">
          <span>or</span>Welcome to Pet-Matchmaker
        </h2>
        <h4 className="app-description">
          The place where you can find a friend for life
        </h4>
        <form onSubmit={handleSubmit(handleFormSubmit)}>
          <div className="form-holder">
            <input
              type="email"
              id="email"
              name="email"
              className="input"
              placeholder="Email"
              {...register('email', {
                required: true
              })}
            />
            {errors.email && errors.email.type === 'required' ? (
              <p>Email field is required</p>
            ) : null}
            <input
              type="password"
              id="password"
              name="password"
              className="input"
              placeholder="Password"
              {...register('password', { required: true })}
            />
            {errors.password && errors.password.type === 'required' ? (
              <p>Password field is required</p>
            ) : null}
          </div>
          <button className="submit-btn" type="submit">
            Login
          </button>
        </form>
      </div>
      <div class="login slide-up">
        <div class="center">
          <h2 class="form-title" id="login">
            <span>or</span>SignUp as Shelter
          </h2>
          <button class="submit-btn">Sign up</button>
        </div>
      </div>
    </div>
  );
}
