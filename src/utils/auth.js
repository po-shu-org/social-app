export const handleLoginError = (error) => {
  if (error.code === 'auth/invalid-credentials') {
    return 'Invalid email or password';
  } else if (error.code === 'auth/network-error') {
    return 'Network error occurred. Please try again.';
  }
  return 'An unexpected error occurred';
};