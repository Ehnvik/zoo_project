import { useOutletContext } from "react-router-dom";
import { IAnimalContext } from "../../App";
import { IAnimal } from "../../models/IAnimal";
import { Animal } from "../Animal/Animal";
import "../Animal/Animal.scss";

export const Animals = () => {
  const { animals } = useOutletContext<IAnimalContext>();
  const showAnimals = animals.map((animal: IAnimal) => {
    return <Animal key={animal.id} animalSmall={animal} />;
  });

  return (
    <>
      <main className="animals">{showAnimals}</main>
    </>
  );
};
