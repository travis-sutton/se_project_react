// import React, { useState } from "react";
// import ModalWithForm from "../ModalWithForm/ModalWithForm";

// const RegisterModal = ({ onClose, onRegister }) => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [name, setName] = useState("");
//   const [avatar, setAvatar] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     onRegister({ email, password, name, avatar });
//   };

//   return (
//     <ModalWithForm
//       title="Sign Up"
//       submitButtonClassName="register__submit_button"
//       onClose={onClose}
//       onSubmit={handleSubmit}
//     >
//       <input
//         type="email"
//         value={email}
//         onChange={(e) => setEmail(e.target.value)}
//         placeholder="Email"
//         required
//       />
//       <input
//         type="password"
//         value={password}
//         onChange={(e) => setPassword(e.target.value)}
//         placeholder="Password"
//         required
//       />
//       <input
//         type="text"
//         value={name}
//         onChange={(e) => setName(e.target.value)}
//         placeholder="Name"
//         required
//       />
//       <input
//         type="url"
//         value={avatar}
//         onChange={(e) => setAvatar(e.target.value)}
//         placeholder="Avatar URL"
//         required
//       />
//     </ModalWithForm>
//   );
// };

// export default RegisterModal;
import "./RegisterModal.css";
import React, { useState } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

const RegisterModal = ({ onClose, onRegister }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [avatar, setAvatar] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onRegister({ email, password, name, avatar });
  };

  return (
    <ModalWithForm
      title="Sign Up"
      submitButtonClassName="register__modal-submit_button"
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <div>
        <label className="register__modal-input_label">
          <input
            type="email"
            className="register__modal-input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            required
          />
        </label>

        <label className="register__modal-input_label">
          <input
            type="password"
            className="register__modal-input"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            required
          />
        </label>

        <label className="register__modal-input_label">
          <input
            type="text"
            className="register__modal-input"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Name"
            required
          />
        </label>

        <label className="register__modal-input_label">
          <input
            type="url"
            className="register__modal-input"
            value={avatar}
            onChange={(e) => setAvatar(e.target.value)}
            placeholder="Avatar URL"
            required
          />
        </label>
      </div>
    </ModalWithForm>
  );
};

export default RegisterModal;
