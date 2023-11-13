import { useNavigate, useParams } from "react-router-dom";
import {
  Backdrop,
  Btn1,
  Btn2,
  Text,
  TextSection,
  BtnSection,
  Window,
} from "../assets/styles/modal-form";
import { useDispatch } from "react-redux";
import { setIsClicked } from "../store/homeClickSlice";
import deletePost from "../apis/delete-post";
import { deleteWaffle } from "../store/wafflesSlice";

export default function Modal({
  texts = ["Are you sure?"],
  isBtn1 = true,
  isBtn2 = true,
  btnContent1 = "Confirm",
  btnContent2 = "Cancel",
  link1 = "/",
  link2 = "/",
  method = "",
  args = {},
}) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { waffleId } = useParams();

  const onClick = async (e) => {
    const { name } = e.target;
    if (name === "btn1") {
      navigate(link1);
      if (link1 === "/") {
        dispatch(setIsClicked(false));
      }
      if (method === "deleteWaffle") {
        console.log(waffleId);
        const result = await deletePost({ waffleId });
        const { errorCode, errorMsg } = await result;
        if (errorCode === 204) {
          console.log("delete succeed");
          dispatch(deleteWaffle(waffleId));
        } else if (errorCode !== 204) {
          console.log(errorCode, "editing error :", errorMsg);
        }
      }
    } else if (name === "btn2") {
      navigate(link2);
      if (method === "deleteWaffle") {
        args.setIsModaled(false);
      }
    }
  };
  return (
    <Backdrop>
      <Window>
        <TextSection>
          {texts.map((text, idx) => (
            <Text key={idx}>{text}</Text>
          ))}
        </TextSection>
        <BtnSection>
          {isBtn1 ? (
            <Btn1 onClick={onClick} name="btn1">
              {btnContent1}
            </Btn1>
          ) : null}
          {isBtn2 ? (
            <Btn2 onClick={onClick} name="btn2">
              {btnContent2}
            </Btn2>
          ) : null}
        </BtnSection>
      </Window>
    </Backdrop>
  );
}
