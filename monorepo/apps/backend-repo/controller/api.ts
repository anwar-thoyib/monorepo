import { Request, Response } from 'express';
import { updateUserData, fetchUserData } from '../repository/userCollection';
import { User } from '../entities/user';

export const updateUser = async (req: Request, res: Response) => {
  const userId = req.params.userId;
  const userData: Partial<User> = req.body;
  try {
    await updateUserData(userId, userData);
    res.status(200).json({ message: 'User updated successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error updating user' });
  }
};

export const fetchUser = async (req: Request, res: Response) => {
  const userId = req.params.userId;
  try {
    const userData = await fetchUserData(userId);
    if (userData) {
      res.status(200).json(userData);
    } else {
      res.status(404).json({ message: 'User not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error fetching user' });
  }
};