import "./CustomInput.css";
import { CustomIcon } from "../CustomIcon";

export const CustomInput = ({ customInput, onHandleInput }) => {
  const handleInputLogin = (event) => {
    onHandleInput(event.target.id, event.target.value);
  };

  return (
    <div className={customInput.className}>
      <CustomIcon idInput={customInput.inputField.id} />
      <input {...customInput.inputField} onChange={handleInputLogin} />
    </div>
  );
};
