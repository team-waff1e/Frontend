import { useCallback, useRef } from "react";
import {
  Btn,
  BtnContainer,
  BtnDeco,
  Wrapper,
} from "../../assets/styles/middle-nav-form";

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
