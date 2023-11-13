import { useEffect, useState } from "react";
import MemberEditBasicInfo from "../settings/member-edit-basic-info";

export default function ProtectedRoutePrincipal({ children }) {
  const [isOk, setIsOk] = useState(false);
  useEffect(() => {
    setIsOk(false);
  }, []);
  return (
    <>
      {isOk ? (
        children
      ) : (
        <MemberEditBasicInfo
          title="Check Your Password"
          profileImg={false}
          tags={["password"]}
          btnText="Check"
          type="protection"
          checkPwd={setIsOk}
        />
      )}
    </>
  );
}
