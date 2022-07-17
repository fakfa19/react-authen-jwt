import axios from "../api/axios";
import useAuth from "./useAuth";

const REFRESH_TOKEN_URL = "/auth/refreshToken";

const useRefreshToken = () => {
  const { auth, setAuth } = useAuth();

  const refresh = async () => {
    const refreshToken = `${auth?.refresh_token}`;

    const response = await axios.post(
      REFRESH_TOKEN_URL,
      { refresh_token: refreshToken },
      {
        withCredentials: true,
      }
    );

    const { access_token, refresh_token } = response?.data;

    setAuth({ ...auth, access_token, refresh_token });

    return access_token;
  };
  return refresh;
};

export default useRefreshToken;
