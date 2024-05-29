import { useState, useCallback } from "react";
import Button from "./Button";
import Count from "./Count";
import Title from "./Title";
const ParentComponent = () => {
  const [age, setAge] = useState(22);
  const [salary, setSalary] = useState(50000);

  const incrementAge = useCallback(() => {
    setAge(age + 1);
  }, [age]);

  const incrermentSalary = useCallback(() => {
    setSalary(salary + 1000);
  }, [salary]);

  return (
    <>
      <h1>ParentComponent</h1>
      <Title />
      <Count text="age" count={age} />
      <Button handleClick={incrementAge}>Inc Age</Button>
      <Count text="Salary" count={salary} />
      <Button handleClick={incrermentSalary}>Inc Salary</Button>
    </>
  );
};

export default ParentComponent;
