import { useState } from "react";

export default function useToken() {
  const getToken = () => {
    const tokenString = localStorage.getItem("token");
    const userToken = JSON.parse(tokenString);
    return userToken;
  };

  const getUserId = () => {
    const userString = localStorage.getItem("id");
    const userId = JSON.parse(userString);
    return userId;
  };

  const getIsLandlord = () => {
    const isLandlordString = localStorage.getItem("is_landlord");
    const isLandlord = JSON.parse(isLandlordString);
    return isLandlord;
  };
  const [token, setToken] = useState(getToken());
  const [userId, setUserId] = useState(getUserId());
  const [isLandlord, setLandlordId] = useState(getIsLandlord());

  const saveToken = (userToken, id, landlord) => {
    localStorage.setItem("token", JSON.stringify(userToken));
    localStorage.setItem("id", JSON.stringify(id));
    setToken(userToken);
    setUserId(id);
    setLandlordId(landlord);
  };

  const deleteToken = () => {
    localStorage.removeItem("token");
    setToken(null);
  };

  return {
    setToken: saveToken,
    deleteToken,
    token,
    userId,
    isLandlord,
  };
}
