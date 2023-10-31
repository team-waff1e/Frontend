export default function SetErrorMsg({ errorCode, name, value }) {
  if (errorCode === 200) {
    if (name === "email") {
      if (value) {
        return { isValid: true, msg: "This email is not being used." };
      } else {
        return { isValid: true, msg: "" };
      }
    } else if (name === "nickname") {
      if (value) {
        return { isValid: true, msg: "This nickname is not being used." };
      } else {
        return { isValid: true, msg: "" };
      }
    }
  } else if (errorCode !== 200) {
    if (name === "email") {
      if (value) {
        return { isValid: false, msg: "This email is already in use." };
      } else {
        return { isValid: false, msg: "" };
      }
    } else if (name === "nickname") {
      if (value) {
        return { isValid: false, msg: "This nickname is already in use" };
      } else {
        return { isValid: false, msg: "" };
      }
    }
  }
  return;
}
