import React from "react";
import { Context as AuthContext } from "../context/AuthContext";

export default function ResolveAuthScreen() {
  const { tryLocalSignin } = React.useContext(AuthContext);

  React.useEffect(() => {
    tryLocalSignin();
  }, []);

  return null;
}
