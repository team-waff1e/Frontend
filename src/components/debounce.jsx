import { debounce } from "lodash";
import CkDuplication from "../apis/ckDuplication";

export const Debounce = debounce(async ({ name, value }) => {
  try {
    const errorCode = await CkDuplication({ name, value });
    if (errorCode === 200) {
      console.log("success");
    } else if (errorCode !== 200) {
      console.log("failed");
    }
  } catch (e) {
    console.log(e);
  }
}, 500);
