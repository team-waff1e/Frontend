import { useCallback, useRef } from "react";
import {
  Input,
  InputItem,
  InputItemTag,
  Label,
} from "../../assets/styles/member-edit-basic-infor-input-item-form";

export default function MemberEditBasicInfoInputItem({
  tag,
  content,
  onChange,
}) {
  const Box = useRef();
  const Tag = useRef();
  const Value = useRef();
  const onFocus = useCallback((e) => {
    Box.current.style.setProperty("border", "2px solid #f0cb8c");
    Tag.current.style.setProperty("font-size", "12px");
  }, []);
  const onBlur = useCallback((e) => {
    Box.current.style.setProperty("border", "1px solid #f0cb8c");
    if (!Value.current.value.trim()) {
      Tag.current.style.setProperty("font-size", "22px");
    }
  }, []);

  return (
    <Label htmlFor={tag}>
      <InputItem ref={Box}>
        <InputItemTag ref={Tag}>{tag}</InputItemTag>
        <Input
          onFocus={onFocus}
          onBlur={onBlur}
          onChange={onChange}
          ref={Value}
          id={tag}
          value={content}
          type="text"
        />
      </InputItem>
    </Label>
  );
}
