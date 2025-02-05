import { faFire } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const PriorityDisplay = () => {
  return (
    <div className="flex align-baseline space-x-1">
      <FontAwesomeIcon icon={ faFire } className="text-red-400" />
      <FontAwesomeIcon icon={ faFire } className="text-red-400" />
      <FontAwesomeIcon icon={ faFire } className="text-red-400" />
      <FontAwesomeIcon icon={ faFire } className="text-red-400" />
      <FontAwesomeIcon icon={ faFire } className="text-red-400" />
    </div>
  );
};

export default PriorityDisplay;