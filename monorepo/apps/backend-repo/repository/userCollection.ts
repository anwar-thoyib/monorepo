import { db } from '../config/firebaseConfig';
import { User } from '../entities/user';
import { doc, getDoc, updateDoc } from 'firebase/firestore';

export const updateUserData = async (userId: string, userData: Partial<User>) => {
  const userRef = doc(db, 'USERS', userId);
  await updateDoc(userRef, userData);
};

export const fetchUserData = async (userId: string): Promise<User | null> => {
  const userRef = doc(db, 'USERS', userId);
  const userSnap = await getDoc(userRef);
  return userSnap.exists() ? (userSnap.data() as User) : null;
};