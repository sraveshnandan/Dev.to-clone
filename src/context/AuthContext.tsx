import React, { createContext, useState } from "react";

export const AuthContext = createContext({
  Auth: false
});



export const AuthContextProvider = ({ children }: { children: React.ReactElement }) => {

  const [Auth, setAuth] = useState<boolean>(false)

  return (

    <AuthContext.Provider value={{ Auth }}>
      {children}
    </AuthContext.Provider>
  )

}