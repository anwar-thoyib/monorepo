import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';

admin.initializeApp();

export const updateRecentlyActive = functions.firestore
  .document('USERS/{userId}')
  .onUpdate((change, context) => {
    const userId = context.params.userId;
    const userRef = admin.firestore().collection('USERS').doc(userId);
    return userRef.update({ recentlyActive: Date.now() });
  });