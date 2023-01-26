import React, { FormEvent, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { firebaseUserLogin } from "../../redux/auth/authSlice";
import { useAppDispatch, useAppSelector } from "../../redux/utils/hook";

const LoginPage = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { user } = useAppSelector((state) => state.auth);

  const emailInputElement = useRef<HTMLInputElement>(null);
  const passwordInputElement = useRef<HTMLInputElement>(null);

  if (Object.keys(user).length) {
    navigate("/", { replace: true });
  }

  const handleLoginClick = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const email = emailInputElement.current?.value;
    const password = passwordInputElement.current?.value;

    if (email && password) {
      await dispatch(
        firebaseUserLogin({
          email: emailInputElement.current?.value,
          password: passwordInputElement.current?.value,
        })
      );
    }
    navigate("/", { replace: true });
  };
  return (
    <>
      <div className="min-h-screen bg-gray-50">
        <div className="flex min-h-screen items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
          <div className="w-full max-w-md space-y-8">
            <div>
              <h1 className="font-bold text-center">LOGO</h1>
              <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
                Sign in to your account
              </h2>
            </div>
            <form
              className="mt-8 space-y-6"
              onSubmit={(e) => handleLoginClick(e)}
            >
              <input type="hidden" name="remember" defaultValue="true" />
              <div className="-space-y-px rounded-md shadow-sm">
                <div>
                  <label htmlFor="email-address" className="sr-only">
                    Email address
                  </label>
                  <input
                    id="email-address"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    ref={emailInputElement}
                    className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 p-4 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-primary-500 focus:outline-none focus:ring-primary-500 sm:text-sm"
                    placeholder="Email address"
                  />
                </div>
                <div>
                  <label htmlFor="password" className="sr-only">
                    Password
                  </label>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    ref={passwordInputElement}
                    className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 p-4 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-primary-500 focus:outline-none focus:ring-primary-500 sm:text-sm"
                    placeholder="Password"
                  />
                </div>
              </div>
              <div>
                <button
                  type="submit"
                  className="group relative flex w-full justify-center rounded-md border border-transparent bg-primary-600 py-2 px-4 text-sm font-medium text-white hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
                >
                  Sign in
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
