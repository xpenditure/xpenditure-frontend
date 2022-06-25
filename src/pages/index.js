import React, { useEffect, useState } from 'react';
import Auth from '../components/Auth';
import Logout from '../components/Logout';
import PageLoading from '../components/PageLoading';

const index = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, []);

  if (loading) {
    return <PageLoading />;
  }

  return (
    <div>
      <Auth />
      <Logout />
    </div>
  );
};

export default index;
