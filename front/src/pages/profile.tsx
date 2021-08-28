import React from 'react';
import { Redirect } from 'react-router-dom';

import { Settings } from '../user/components/settings';
import { useUser } from '../user/hooks/use-user';

export const ProfilePage = () => {
  const { data } = useUser(); 
  if (data == null) return <Redirect to='/' />;
  
  return (
    <Settings user={data} />
  );
};

