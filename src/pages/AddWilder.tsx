import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { IWilderProps } from "../components/Wilder";
import style from "./addWilder.module.css";
import { useForm } from "react-hook-form";

const AddWilder = () => {
  const [name, setName] = useState<IWilderProps["name"]>("");
  const [city, setCity] = useState<IWilderProps["city"]>("");
  const [email, setEmail] = useState<IWilderProps["email"]>("");
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      city: "",
      email: "",
    },
  });
  console.log("err", errors);

  const addWilder = async () => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    const raw = JSON.stringify({
      name,
      city,
      email,
    });

    const wilder = await fetch("http://localhost:5000/api/wilder", {
      method: "POST",
      redirect: "follow",
      body: raw,
      headers: myHeaders,
    });
    console.log("wilder", wilder);

    navigate("/");
  };

  return (
    <main className={style.container}>
      <h2>Register as a new Wilder</h2>
      <form
        className={style.form}
        onSubmit={handleSubmit((data) => console.log("data", data))}
      >
        <input
          className={style.formElement}
          type="text"
          placeholder="Name"
          {...register("name", {
            required: "A name is required",
            minLength: 2,
            maxLength: 100,
          })}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        {errors.name?.message}
        <input
          className={style.formElement}
          type="text"
          placeholder="City"
          {...register("city", {})}
          onChange={(e) => {
            setCity(e.target.value);
          }}
        />
        <input
          className={style.formElement}
          type="text"
          placeholder="Email"
          {...register("email", {
            required: "An email is required",
            pattern: /^\S+@\S+$/i,
          })}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        {errors.email && "An email is required"}
        <input className={style.button} type="submit" />
      </form>
    </main>
  );
};

export default AddWilder;
