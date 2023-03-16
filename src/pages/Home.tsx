import React, { useEffect, useState } from "react";
import Wilder, { IWilderProps } from "../components/Wilder";
import style from "./home.module.css";
import "./../App.css";

const Home = () => {
  const [wilders, setWilders] = useState<IWilderProps[]>([]);

  const getWilders = async () => {
    const response = await fetch("http://localhost:5000/api/wilder");
    const result = await response.json();
    return setWilders(result);
  };

  useEffect(() => {
    getWilders();
  }, [wilders.length]);

  console.log(wilders);

  console.log("wilders", wilders);
  return (
    <div className="App">
      <main className={style.container}>
        <h2>Wilders</h2>
        <section className={style.cardrow}>
          {wilders?.map((wilder: any, index) => (
            <Wilder
              key={index}
              wilder={wilder}
              id={wilder.id}
              name={wilder.name}
              city={wilder.city}
              email={wilder.email}
              skills={wilder.skills}
              setWilders={setWilders}
            />
          ))}
        </section>
      </main>
    </div>
  );
};

export default Home;
