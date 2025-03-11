import React from 'react';
import { Button, Typography } from '@mui/material';
import { fetchUserData, updateUserData } from '../apis/userApi';

const UpdateButton = ({ userId }: { userId: string }) => {
  const [user, setUser] = React.useState<any>(null);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState('');

  const handleFetchUser = async () => {
    setLoading(true);
    try {
      const userData = await fetchUserData(userId);
      setUser(userData);
    } catch (err) {
      setError('Error fetching user data');
    } finally {
      setLoading(false);
    }
  };

  const handleUpdateUser = async () => {
    setLoading(true);
    try {
      await updateUserData(userId, { totalAverageWeightRatings: 4.5 });
      setUser((prev: any) => ({ ...prev, totalAverageWeightRatings: 4.5 }));
    } catch (err) {
      setError('Error updating user data');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <Button onClick={handleFetchUser} disabled={loading}>
        Fetch User Data
      </Button>
      <Button onClick={handleUpdateUser} disabled={loading}>
        Update User Data
      </Button>
      {user && (
        <Typography>
          User: {user.totalAverageWeightRatings} - {user.numberOfRents} - {user.recentlyActive}
        </Typography>
      )}
      {error && <Typography color="error">{error}</Typography>}
    </div>
  );
};

export default UpdateButton;