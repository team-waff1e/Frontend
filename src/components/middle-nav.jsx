import { useCallback, useRef } from "react";
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

export default function MiddleNav({ btns, type, args }) {
  // 버튼 선택 로직
  const btnDecoRefs = useRef([]);
  btnDecoRefs.current = [];
  const addBtnDecoRefs = (e) => {
    if (!e) return;
    btnDecoRefs.current.push(e);
  };
  const onClick = useCallback(
    (e) => {
      const { name } = e.currentTarget.dataset;
      for (const btnDecoRef of btnDecoRefs.current) {
        if (btnDecoRef.dataset.name === name) {
          btnDecoRef.style.display = "block";
        } else {
          btnDecoRef.style.display = "none";
        }
      }
      // 각 기능별 로직
      if (type === "follow") {
        if (name === "0") {
          args.setIsFollowing(true);
        } else {
          args.setIsFollowing(false);
        }
      }
    },
    [type, args]
  );

  return (
    <Wrapper>
      {btns.map((btn, idx) => {
        return (
          <BtnContainer key={idx} data-name={idx} onClick={onClick}>
            <Btn>
              {btn.name}
              <BtnDeco
                data-name={idx}
                ref={addBtnDecoRefs}
                display={btn.display}
              />
            </Btn>
          </BtnContainer>
        );
      })}
    </Wrapper>
  );
}
