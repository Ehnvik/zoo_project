import moment from "moment";
import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import "./App.scss";
import { Nav } from "./components/Nav/Nav";
import { IAnimal } from "./models/IAnimal";
import { getAnimals } from "./services/animalService";

export interface IAnimalContext {
  animals: IAnimal[];
  updateFeedingTime(animal: IAnimal): void;
}

function App() {
  const [animals, setAnimals] = useState<IAnimal[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    const getAnimalData = async () => {
      let animals = await getAnimals();
      setAnimals(animals);
      setIsLoading(true);
    };
    let dataFromLocalStorage = localStorage.getItem("animals");
    if (dataFromLocalStorage && !isLoading) {
      setAnimals(JSON.parse(dataFromLocalStorage));
      setIsLoading(true);
      return;
    } else {
      if (!isLoading) {
        getAnimalData();
      }
    }
    localStorage.setItem("animals", JSON.stringify(animals));
  }, [isLoading, animals]);

  const updateFeedingTime = (animal: IAnimal) => {
    let newDate = new Date();
    let currentTime = moment(newDate).format("YYYY-MM-DD k:mm");
    let updatedAnimalList = animals.map((a) =>
      animal.id === a.id ? { ...a, lastFed: currentTime, isFed: true } : a
    );
    setAnimals(updatedAnimalList);
  };
  return (
    <>
      <header>
        <Nav></Nav>
      </header>
      <>
        {animals.length > 0 ? (
          <Outlet context={{ animals, updateFeedingTime }}></Outlet>
        ) : (
          ""
        )}
      </>
    </>
  );
}

export default App;
