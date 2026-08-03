const API_URL = import.meta.env.VITE_API_URL || '';

export const apiFetch = (path, options = {}) => {
  const url = path.startsWith('http') ? path : `${API_URL}${path}`;
  return fetch(url, options);
};
