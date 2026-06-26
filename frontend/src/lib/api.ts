export const API_BASE = import.meta.env.VITE_API_URL || "/api";

export const apiUrl = (path: string) =>
  `${API_BASE}${path.startsWith("/") ? path : `/${path}`}`;
