import axios from "axios"
export const authenticateUser = async (email, password) => {
    try {
        const response = await axios.get("https://fakestoreapi.com/users");
        console.log(response);
        const authenticate = response.data.find((user)=> user.email === email && user.password === password)
        return authenticate;
      } catch (error) {
        console.log(error.message);
      } 
}

