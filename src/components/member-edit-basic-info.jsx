import { useCallback, useRef } from "react";
import { InputList } from "./member-edit-basic-info-form";
import { Title, Wrapper } from "./member-edit-nav-form";

export default function MemberEditBasicInfo() {
  const { emailTag } = useRef();

  const onFocus = useCallback((e) => {}, []);
  return (
    <Wrapper>
      <Title>Change User Information</Title>
      <InputList>
        <label htmlFor="email">
          <div>
            <div>
              <div>
                <span ref={emailTag}>email</span>
              </div>
            </div>
            <div>
              <input onFocus={onFocus} id="email" type="text" />
            </div>
          </div>
        </label>
      </InputList>
    </Wrapper>
  );
}
