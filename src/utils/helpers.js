export const setUserLoggedIn = (bool, id) => {
  localStorage.setItem("vueIsLoggedIn", bool);
  localStorage.setItem("userID", id);
};

export const getUserID = () => {
  return localStorage.getItem("userID");
};

export const isUserLoggedIn = () => {
  const bool = localStorage.getItem("vueIsLoggedIn");
  const userid = localStorage.getItem("userID");

  if (bool && bool === "true" && userid && userid !== "") {
    return true;
  } else {
    return false;
  }
};
