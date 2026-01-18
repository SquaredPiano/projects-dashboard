// Fake auth provider - no real authentication
// This is for demo purposes only

import { mockUser } from "./mock-data";

export interface User {
  id: string;
  email: string;
  name: string;
}

// Simulate auth state
let currentUser: User | null = mockUser;

export function getCurrentUser(): User | null {
  return currentUser;
}

export function login(email: string, password: string): User {
  // Always succeeds with mock user
  currentUser = { ...mockUser, email };
  return currentUser;
}

export function logout(): void {
  currentUser = null;
}

export function isAuthenticated(): boolean {
  return currentUser !== null;
}
