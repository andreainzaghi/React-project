import "./CustomInput.css";

export const CustomInput = ({ customInput, onHandleInput }) => {
  const handleInputLogin = (event) => {
    onHandleInput(event.target.id, event.target.value);
  };

  return (
    <div className={customInput.className}>
      <input {...customInput.inputValue} onChange={handleInputLogin} />
    </div>
  );
};
