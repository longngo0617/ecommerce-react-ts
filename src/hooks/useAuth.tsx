import React, { useContext, useState, useEffect } from "react";
import Api from "../helper/Api";
import LocalStorage from "../helper/LocalStorage";
let UserContext = React.createContext({});

const useAuth = (): any => {
  return useContext(UserContext);
};
const UserProvider = ({ children }: any) => {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user) {
      try {
        let user = LocalStorage.get("user");
        if (user) {
          getInfo();
        } else {
          throw "NOT USER";
        }
      } catch (err) {
        setLoading(false);
      }
    }
  }, []);

  function getInfo() {
    Api("api/get-user-info")
      .get()
      .then(res => {
        if (res && res.accessToken) {
          setUser(res);
          LocalStorage.set("user", res);
          setLoading(false);
        }
      });
  }
  function login(user : any) {
    return fetch("https://cfd-reactjs.herokuapp.com/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => {
        if (res.status === 200) {
          return res.json();
        }
      })
      .then((res) => {
        if (res.error) {
          return res;
        } else {
          localStorage.setItem("user", JSON.stringify(res));
          setUser(res);
        }
      });
  }

  const value = {
    user,
    login,
  };
  return (
    <UserContext.Provider value={value}>
      {!loading && children}
    </UserContext.Provider>
  );
};

export default UserProvider;
export { useAuth };
