import { createContext } from "react"
import { useState } from "react"

const user = {
    email: "",
    password: "",
}

const UserContext = createContext(user)


// eslint-disable-next-line react/prop-types
const UserContextProvider = ({children}) => {
    const [user, setUser] = useState({})

    const updateUserState = (newUser) => {
        setUser((prev)=> ({
            ...prev,
            email: newUser.email,
            password: newUser.password
        }))
    }

    return (
        <UserContext.Provider value={{ user, updateUserState }}>
          {children}
        </UserContext.Provider>
      );

}

export {UserContext, UserContextProvider}