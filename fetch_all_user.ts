import { db } from '../config/firebaseConfig';
import { collection, getDocs } from 'firebase/firestore';

const fetchUsers = async () => {
  const usersRef = collection(db, 'USERS');
  const usersSnap = await getDocs(usersRef);
  const users = usersSnap.docs.map(doc => doc.data() as User);

  // Sort users based on priority criteria
  users.sort((a, b) => {
    if (a.totalAverageWeightRatings !== b.totalAverageWeightRatings) {
      return b.totalAverageWeightRatings - a.totalAverageWeightRatings;
    } else if (a.numberOfRents !== b.numberOfRents) {
      return b.numberOfRents - a.numberOfRents;
    } else {
      return b.recentlyActive - a.recentlyActive;
    }
  });

  return users;
};