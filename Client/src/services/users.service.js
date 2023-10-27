function usersService() {
  const baseUrl = "api/users";
  const headers = {
    "Content-Type": "application/json",
  };
  async function checkLogin(username, password) {
    return await fetch(`${baseUrl}/login`, {
      method: "POST",
      headers,
      body: JSON.stringify(username, password),
    }).then((res) => res.json());
  }

  return {
    checkLogin,
  };
}

export default usersService();
