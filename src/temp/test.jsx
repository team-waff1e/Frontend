import { useDispatch, useSelector } from "react-redux";
import { storeInputs } from "../store/signupInputsSlice";
import styled from "styled-components";

const Btn = styled.input`
  margin: 5px;
  padding: 5px;
`;

export default function Test() {
  const dispatch = useDispatch();
  const test = useSelector((state) => {
    return state.test.testData;
  });
  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(storeInputs({ name: "email", value: "emailvalue" }));
  };
  return (
    <div>
      <div>{test}</div>
      <form onSubmit={onSubmit}>
        <Btn type="submit"></Btn>
      </form>
    </div>
  );
}
