import React from "react";
import { useForm } from "react-hook-form";

function App() {
  const {
    register,
    reset,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  function onSubmit() {
    console.log("sasas");
    // reset();
  }
  console.log(watch("example")); // watch input value by passing the name of it

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <input
            type="text"
            placeholder="ex: example@co.com"
            {...register("email", {
              required: "email address is required",
              maxLength: 20,
            })}
            defaultValue={"said"}
          />
          {errors.email && <p>{errors.email.message}</p>}
        </div>
        <div>
          <input
            type="password"
            placeholder="ex: Ss@1122334455"
            {...register("password", { required: "password is required" })}
          />
          {errors.password && <p>{errors.password.message}</p>}
        </div>

        <input type="submit" />
      </form>
    </>
  );
}

export default App;
