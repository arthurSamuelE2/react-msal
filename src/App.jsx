import "./App.css";
import { useMsal } from "@azure/msal-react";
import useStorage from "./hook/Storage";
import { useEffect } from "react";

function App() {
  const { instance, accounts, inProgress } = useMsal();
  const { get, set } = useStorage();

  useEffect(() => {
    console.log(get());
  }, [get]);

  const handleLogin = async () => {
    const results = await instance.loginPopup();
    if (results) {
      set(results);
    }
  };

  const testApi = () => {
    fetch("http://localhost:7071/api/fun/1", {
      headers: {
        Authorization: `Bearer ${get().accessToken}`,
      },
    })
      .then((res) => {
        res.json();
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  if (accounts.length > 0) {
    return <button onClick={testApi}>TEst</button>;
  } else if (inProgress === "login") {
    return <span>Login is currently in progress!</span>;
  } else {
    return (
      <>
        <span>There are currently no users signed in!</span>
        <button onClick={handleLogin}>Login</button>
      </>
    );
  }
}

export default App;
