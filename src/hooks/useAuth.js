const useAuth = () => {
  const _auth = localStorage.getItem("auth");

  const auth = !_auth.includes(["undefined", "null", undefined, null, ""]) ? JSON.parse(_auth) : {};

  const setAuth = (value) => {
    localStorage.setItem("auth", JSON.stringify(value));
  };

  return { auth, setAuth };
};

export default useAuth;
