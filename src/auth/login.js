export const login = async (username, password) => {
  // TODO: Implement login logic
  try {
    // API call simulation
    const response = await new Promise(resolve => {
      setTimeout(() => {
        resolve({ success: true, token: 'dummy-token' });
      }, 1000);
    });
    return response;
  } catch (error) {
    throw new Error('Login failed');
  }
};