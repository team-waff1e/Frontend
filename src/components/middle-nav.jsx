import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  border: 1px rgb(255, 240, 199) solid;
  border-top: none;
`;

const BtnContainer = styled.div`
  flex: 1 1;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    background-color: #e5e5e5;
  }
`;

const Btn = styled.button`
  height: 55px;
  border: none;
  color: #707070;
  font-weight: 550;
  background-color: transparent;
  position: relative;
`;

const BtnDeco = styled.div`
  width: 100%;
  height: 4px;
  position: absolute;
  display: ${({ display = "none" }) => display};
  bottom: 0;
  background-color: #732c00;
  border-radius: 2px;
`;

export default function MiddleNav({ btns }) {
  return (
    <Wrapper>
      {btns.map((btn) => {
        return (
          <BtnContainer>
            <Btn>
              {btn.name}
              <BtnDeco display={btn.display} />
            </Btn>
          </BtnContainer>
        );
      })}
    </Wrapper>
  );
}
