// Description: This file contains utility functions for the electron application.
export function isDevelopment(): boolean {
  return process.env.NODE_ENV === "development";
}
