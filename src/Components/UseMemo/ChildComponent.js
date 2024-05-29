import { memo, React } from "react";
const ChildComponent = ({ value }) => {
  console.log(`render child component`);
  return (
    <>
      <h1>ChildComponent</h1>
      <div>count: {value}</div>
    </>
  );
};
export default memo(ChildComponent);
