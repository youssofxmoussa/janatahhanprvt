const SESSION_KEY = "janaprvt_demo_session";

export const DEMO_EMAIL = "jana@gmail.com";
export const DEMO_PASSWORD = "jana1?";

export function hasDemoSession() {
  if (typeof window === "undefined") return false;
  return window.localStorage.getItem(SESSION_KEY) === "signed-in";
}

export function createDemoSession() {
  window.localStorage.setItem(SESSION_KEY, "signed-in");
}

export function clearDemoSession() {
  window.localStorage.removeItem(SESSION_KEY);
}
