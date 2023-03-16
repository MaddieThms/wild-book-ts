import { useEffect, useState } from "react";
import { ISkillProps, Skill } from "./Skill";
import blank_profile from "./../assets/blank_profile.png";
import style from "./wilder.module.css";

export interface IWilderProps {
  id: number;
  name: string;
  city: string;
  email: string;
  skills: ISkillProps[];
  wilder: any;
  setWilders: any;
  wilders: any;
  getWilders: any;
}

const Wilder = ({
  id,
  name,
  skills,
  wilder,
  setWilders,
  wilders,
  getWilders,
}: IWilderProps) => {
  const [skillsList, setSkillsList] = useState([]);

  const deleteWilder = async () => {
    const requestOptions = {
      method: "DELETE",
    };
    await fetch(
      `http://localhost:5000/api/wilder/${wilder.id}`,
      requestOptions
    );
    setWilders(wilders.filter((wilder: { id: number }) => wilder.id !== id));
  };

  const getSkills = async () => {
    const response = await fetch("http://localhost:5000/api/skill");
    const result = await response.json();
    return setSkillsList(result);
  };

  useEffect(() => {
    getSkills();
  }, [skillsList.length]);

  const addSkillToWilder = async (skillId: number) => {
    await fetch(
      `http://localhost:5000/api/wilder/${wilder.id}/skill/${skillId}/add`,
      {
        method: "POST",
      }
    );

    getWilders();
  };

  return (
    <div>
      <button
        type="button"
        className={style.delete}
        onClick={() => {
          deleteWilder();
        }}
      >
        Delete
      </button>
      <article className={style.card}>
        <img src={blank_profile} alt={`${name} Profile`} />
        <h3>{name}</h3>
        <ul className={style.skills}>
          {skills?.map((skill) => (
            <Skill
              key={skill.id}
              id={skill.id}
              name={skill.name}
              votes={skill.votes}
              wilder={wilder}
              setWilders={setWilders}
              wilders={wilders}
            />
          ))}
        </ul>
        <h3>Add skill</h3>
        <select onChange={(e) => addSkillToWilder(e.target.selectedIndex)}>
          <option value="">...</option>
          {skillsList.map((skill: any) => (
            <option key={skill.id} value={skill.name}>
              {skill.name}
            </option>
          ))}
        </select>
      </article>
    </div>
  );
};

export default Wilder;
