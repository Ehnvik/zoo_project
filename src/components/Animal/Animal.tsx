import { useNavigate } from "react-router-dom";
import { IAnimal } from "../../models/IAnimal";
import defaultImage from "../../../src/assets/img/default.png";
import "./Animal.scss";
import moment from "moment";

interface IAnimalSmallProps {
  animalSmall: IAnimal;
}

export const Animal = (props: IAnimalSmallProps) => {
  const navigate = useNavigate();
  const addDefaultImage = (e: React.SyntheticEvent<HTMLImageElement>) => {
    e.currentTarget.src = defaultImage;
  };

  const handleClick = () => {
    navigate(`/animal/${props.animalSmall.id}`);
  };

  let firstTimeFed = moment(props.animalSmall.lastFed).format(
    "YYYY-MM-DD k:mm"
  );

  return (
    <>
      <div className="animals__container">
        <h3 className="animals__container__name">{props.animalSmall.name}</h3>
        <img
          onClick={handleClick}
          className="animals__container__image"
          src={props.animalSmall.imageUrl}
          alt={props.animalSmall.name}
          onError={addDefaultImage}
        />
        <div className="animals__container__info-box">
          <h4 className="animals__container__info-box__description">
            {props.animalSmall.shortDescription}
          </h4>
          <p className="animals__container__info-box__date">
            <strong>Senast matad:</strong> {firstTimeFed}
          </p>
          {props.animalSmall.isFed ? (
            <span className="hasEaten">{props.animalSmall.name} är mätt</span>
          ) : (
            <span className="wantsToEat">
              {props.animalSmall.name} är hungrig!
            </span>
          )}
        </div>
      </div>
    </>
  );
};
