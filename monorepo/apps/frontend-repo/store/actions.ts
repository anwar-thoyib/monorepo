import { fetchUserData } from '../apis/userApi';
import { fetchUserStart, fetchUserSuccess, fetchUserFailure } from './reducers';

export const fetchUser = (userId: string) => async (dispatch: any) => {
  dispatch(fetchUserStart());
  try {
    const userData = await fetchUserData(userId);
    dispatch(fetchUserSuccess(userData));
  } catch (error) {
    dispatch(fetchUserFailure(error.message));
  }
};