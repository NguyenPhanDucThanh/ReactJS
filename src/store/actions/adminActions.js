import actionTypes from "./actionTypes";
import { toast } from "react-toastify";
import {
  getAllCodeService,
  createNewUserService,
  getAllUsers,
  deleteUserService,
  editUserService,
} from "../../services/userService";

// export const fetchGenderStart = () => ({
//   type: actionTypes.FETCH_GENDER_START,
// });
export const fetchGenderStart = () => {
  return async (dispatch, getState) => {
    try {
      dispatch({
        type: actionTypes.FETCH_GENDER_START,
      });
      let res = await getAllCodeService("gender");
      if (res && res.errCode === 0) {
        dispatch(fetchGenderSuccessed(res.data));
      } else {
        dispatch(fetchGenderFaild());
      }
    } catch (e) {
      dispatch(fetchGenderFaild());
      console.log("fetchGenderStart error", e);
    }
  };
};
export const fetchGenderSuccessed = (genderData) => ({
  type: actionTypes.FETCH_GENDER_SUCCESS,
  data: genderData,
});
export const fetchGenderFaild = () => ({
  type: actionTypes.FETCH_GENDER_FAILED,
});

export const fetchPositionStart = () => {
  return async (dispatch, getState) => {
    try {
      dispatch({
        type: actionTypes.FETCH_POSITION_START,
      });
      let res = await getAllCodeService("position");
      if (res && res.errCode === 0) {
        dispatch(fetchPositionSuccessed(res.data));
      } else {
        dispatch(fetchPositionFaild());
      }
    } catch (e) {
      dispatch(fetchPositionFaild());
      console.log("fetchPositionStart error", e);
    }
  };
};
export const fetchPositionSuccessed = (PositionData) => ({
  type: actionTypes.FETCH_POSITION_SUCCESS,
  data: PositionData,
});
export const fetchPositionFaild = () => ({
  type: actionTypes.FETCH_POSITION_FAILED,
});

export const fetchRoleStart = () => {
  return async (dispatch, getState) => {
    try {
      dispatch({
        type: actionTypes.FETCH_ROLE_START,
      });
      let res = await getAllCodeService("role");
      if (res && res.errCode === 0) {
        dispatch(fetchRoleSuccessed(res.data));
      } else {
        dispatch(fetchRoleFaild());
      }
    } catch (e) {
      dispatch(fetchRoleFaild());
      console.log("fetchRoleStart error", e);
    }
  };
};
export const fetchRoleSuccessed = (RoleData) => ({
  type: actionTypes.FETCH_ROLE_SUCCESS,
  data: RoleData,
});
export const fetchRoleFaild = () => ({
  type: actionTypes.FETCH_ROLE_FAILED,
});

export const createNewUser = (data) => {
  return async (dispatch, getState) => {
    try {
      let res = await createNewUserService(data);
      if (res && res.errCode === 0) {
        toast.success("Create a new user succeed");
        dispatch(createUserSuccess());
        dispatch(fetchAllUser());
      } else {
        toast.error("Delete the  user failed");
        dispatch(createUserFailed());
      }
    } catch (e) {
      dispatch(createUserFailed());
      console.log("createUserFailed error", e);
    }
  };
};
export const createUserFailed = () => ({
  type: "CREATE_USER_FAILED",
});
export const createUserSuccess = () => ({
  type: "CREATE_USER_SUCCESS",
});
export const fetchAllUser = () => {
  return async (dispatch, getState) => {
    try {
      let res = await getAllUsers("All");
      if (res && res.errCode === 0) {
        dispatch(fetchAllUserSuccess(res.user.reverse()));
      } else {
        dispatch(fetchAllUserFailed());
      }
    } catch (e) {
      dispatch(fetchAllUserFailed());
      console.log("fetchAllUserFailed error", e);
    }
  };
};
export const fetchAllUserFailed = () => ({
  type: actionTypes.FETCH_ALL_USERS_FAILED,
});
export const fetchAllUserSuccess = (data) => ({
  type: actionTypes.FETCH_ALL_USERS_SUCESS,
  users: data,
});

export const deleteUser = (userId) => {
  return async (dispatch, getState) => {
    try {
      let res = await deleteUserService(userId);
      if (res && res.errCode === 0) {
        toast.success("Delete the  user succeed");
        dispatch(deleteUserSuccess());
        dispatch(fetchAllUser());
      } else {
        toast.error("Delete the  user failed");

        dispatch(deleteUserFailed());
      }
    } catch (e) {
      dispatch(deleteUserFailed());
      console.log("deleteUserFailed error", e);
    }
  };
};
export const deleteUserFailed = () => ({
  type: actionTypes.DELETE_USER_FAILED,
});
export const deleteUserSuccess = () => ({
  type: actionTypes.DELETE_USER_SUCCESS,
});

export const editUser = (data) => {
  return async (dispatch, getState) => {
    try {
      let res = await editUserService(data);
      if (res && res.errCode === 0) {
        toast.success("Edit the user succeed");
        dispatch(editUserSuccess());
        dispatch(fetchAllUser());
      } else {
        toast.error("Edit  the  user failed");
        dispatch(editUserFailed());
      }
    } catch (e) {
      dispatch(editUserFailed());
      console.log("editUserFailed error", e);
    }
  };
};
export const editUserFailed = () => ({
  type: actionTypes.EDIT_USER_FAILED,
});
export const editUserSuccess = () => ({
  type: actionTypes.EDIT_USER_SUCCESS,
});
