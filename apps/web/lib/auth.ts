import { onAuthStateChanged, User } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { auth, db } from "./firebase.client";

export type UserProfile = {
  uid: string;
  email: string;
  displayName?: string;
  photoURL?: string;
  status: "active" | "pending" | "disabled";
  roleLevel: number;
  roleName: string;
  sections: string[];
  createdAt: number;
  updatedAt: number;
};

export async function getUserProfile(uid: string): Promise<UserProfile | null> {
  const ref = doc(db, "users", uid);
  const snap = await getDoc(ref);
  if (!snap.exists()) return null;
  return snap.data() as UserProfile;
}

export function watchAuth(callback: (user: User | null) => void) {
  return onAuthStateChanged(auth, callback);
}