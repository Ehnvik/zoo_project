import { useOutletContext, useParams } from "react-router-dom";
import { IAnimalContext } from "../../App";
import defaultImage from "../../../src/assets/img/default.png";
import "./AnimalDetails.scss";
import { IAnimal } from "../../models/IAnimal";
import moment from "moment";

export const AnimalDetails = () => {
  const { id } = useParams();
  const { updateFeedingTime, animals } = useOutletContext<IAnimalContext>();

  const addDefaultImage = (e: React.SyntheticEvent<HTMLImageElement>) => {
    e.currentTarget.src = defaultImage;
  };

  const handleClick = (animal: IAnimal) => {
    updateFeedingTime(animal);
  };

  let htmlAnimal = animals.map((a: IAnimal) => {
    let firstTimeFed = moment(a.lastFed).format("YYYY-MM-DD k:mm");
    if (id) {
      if (a.id === parseInt(id)) {
        return (
          <main key={a.id} className="animal">
            <div className="animal__container">
              <h2 className="animal__container__name">{a.name}</h2>
              <img
                className="animal__container__image"
                src={a.imageUrl}
                alt={a.name}
                onError={addDefaultImage}
              />
              <h4 className="animal__container__birth-year">
                Född: {a.yearOfBirth}
              </h4>
              <p className="animal__container__description">
                {a.longDescription}
              </p>
              <p className="animal__container__last-fed">
                <strong>Senast matad: {firstTimeFed}</strong>
              </p>
              <div className="animal__container__feed">
                {a.isFed ? (
                  <button
                    className="notHungry"
                    disabled={a.isFed}
                    onClick={() => {
                      handleClick(a);
                    }}>
                    {a.name} är mätt
                  </button>
                ) : (
                  <button
                    className="isHungry"
                    onClick={() => {
                      handleClick(a);
                    }}>
                    Mata {a.name}
                  </button>
                )}
              </div>
            </div>
          </main>
        );
      }
    }
  });

  return <>{htmlAnimal}</>;
};
