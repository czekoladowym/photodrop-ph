import {
  setUser,
  setToken,
  setRefreshToken,
} from "../../store/redusers/reduser";
import instance from "../default";
import { useDispatch } from "react-redux";

interface IPrors {
  login: string;
  password: string;
}

// export const signIn =
//   ({ login, password }: IPrors) =>
//   async (dispatch) => {
//     const response = await instance.post(
//       "https://1fhuccr2jh.execute-api.us-east-1.amazonaws.com/dev/sign-in",
//       { login, password }
//     );
//     const { user, token, refreshToken } = response.data;
//     dispatch(setUser(user));
//     dispatch(setToken(token));
//     dispatch(setRefreshToken(refreshToken));
//   };
