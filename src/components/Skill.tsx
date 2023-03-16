import style from "./skill.module.css";
import del from "./../assets/x.svg";

export interface ISkillProps {
  id: number;
  name: string;
  votes: number;
  wilder: any;
  setWilders: any;
  wilders: any;
}

export const Skill = ({
  setWilders,
  wilders,
  wilder,
  id,
  name,
  votes,
}: ISkillProps) => {
  const deleteWilderSkill = async () => {
    const requestOptions = {
      method: "DELETE",
    };
    await fetch(
      `http://localhost:5000/api/wilder/${wilder.id}/skill/${id}/delete`,
      requestOptions
    );

    setWilders = { ...wilders };
  };

  return (
    <li className={style.skill}>
      <button
        onClick={() => {
          deleteWilderSkill();
        }}
      >
        <img src={del} alt="delete" />
      </button>

      {name}
      <span className={style.votes}>{votes}</span>
    </li>
  );
};
