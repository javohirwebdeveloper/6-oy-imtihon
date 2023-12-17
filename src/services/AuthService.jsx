export const AuthService = {
    login: (username, password) => {
      if (username === 'user' && password === 'password') {
        localStorage.setItem('authenticatedUser', username);
        return true;
      }
      return false;
    },
    logout: () => {
      localStorage.removeItem('authenticatedUser');
    },
    isAuthenticated: () => {
      return localStorage.getItem('authenticatedUser') !== null;
    },
  };
  