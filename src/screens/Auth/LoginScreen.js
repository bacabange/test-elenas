import React, { useState, useEffect } from "react";
import { useLocalStorage } from "@rehooks/local-storage";
import { navigate } from "@reach/router"

import { useLoginMutation } from "../../GraphQL/Auth/LoginMutation";

const LoginScreen = () => {
  const [cellphone, setCellphone] = useState("+573057199995");
  const [password, setPassword] = useState("nueva123");
  const [loginMutation, loginMutationResults] = useLoginMutation();
  const [token] = useLocalStorage("authToken");

  const disabledButton = loginMutationResults.loading;

  useEffect(() => {
    if (token) {
      navigate('/')
    }
  }, [token])

  const onLogin = () => {
    loginMutation(cellphone, password);
  };

  return (
    <div className="flex h-phone">
      <div className="grid items-center w-full">
        <div className="w-full px-4">
          <div className="my-5 text-sm">
            <label htmlFor="phone" className="block text-black">
              Phone
            </label>
            <input
              type="text"
              autoFocus
              id="phone"
              className="form-input"
              placeholder="Phone"
              onChange={(e) => setCellphone(e.target.value)}
              value={cellphone}
            />
          </div>
          <div className="my-5 text-sm">
            <label htmlFor="password" className="block text-black">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="form-input"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
          </div>

          <div className="my-5">
            <button
              onClick={onLogin}
              disabled={disabledButton}
              className="btn w-full"
            >
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginScreen;
