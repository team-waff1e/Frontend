import { useEffect, useState } from "react";

export default function FollowList({ type }) {
  const [test, setTest] = useState();
  useEffect(() => {
    if (type === "following") {
      setTest("following");
    } else {
      setTest("followers");
    }
  }, [type]);
  return <div>{test}</div>;
}
