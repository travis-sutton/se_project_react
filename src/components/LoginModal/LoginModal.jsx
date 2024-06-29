import React, { useState } from "react";
import ModalWithForm from "./ModalWithForm";

const LoginModal = ({ onClose, onLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin({ email, password });
  };

  return (
    <ModalWithForm
      title="Sign In"
      name="login"
      onClose={onClose}
      onSubmit={handleSubmit}
      submitButtonClassName="login__submit_button"
    >
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        required
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
        required
      />
    </ModalWithForm>
  );
};

export default LoginModal;
