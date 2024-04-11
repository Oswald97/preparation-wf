export const API_URL = import.meta.env.VITE_API_URL
export const ADHERENT_URL = `${API_URL}/adherents`
export const AUTH_URL = `${API_URL}/auth`
export const LOGIN_URL = `${AUTH_URL}/authenticate`
export const REGISTER_URL = `${AUTH_URL}/register`
export const LS_TOKEN_KEY = "tokens"