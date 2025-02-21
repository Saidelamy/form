import React, { useState } from "react";

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState({ email: "", password: "" });

  function handleSubmit(e) {
    e.preventDefault();
    setEmail({ email: "", password: "" });

    if (!email.includes("@")) {
      setError({ ...error, email: "email must have @ sympol" });
      return;
    }
    if (password.length < 8) {
      setError({
        ...error,
        password: "password must be at least 8 charctars",
      });
      return;
    }

    console.log("submited");
  }

  return (
    <>
      <form action="" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="ex: example@co.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {error.email && <p>{error.email}</p>}
        <input
          type="password"
          placeholder="ex: Ss@1122334455"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {error.password && <p>{error.password}</p>}

        <button>submit</button>
      </form>
    </>
  );
}

export default App;
