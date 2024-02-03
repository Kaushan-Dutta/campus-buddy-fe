import React, { useContext, createContext, useState } from 'react';

export type UserContent = {
  _id: string,
  email: string,
  entity: string,
  phone: string,
  collegeId: string
  details: {
    yearId: string,
    courseId: string
  }
};

interface UserDataContext {
  user?: UserContent; 
  setuser?: React.Dispatch<React.SetStateAction<UserContent | undefined>>;
}

export const Data = createContext<UserDataContext>({});

const AuthContext = ({ children }: any) => {
  const [user, setuser] = useState<UserContent | undefined>(undefined);

  const contextValue: UserDataContext = {
    user,
    setuser,
  };

  return (
    <Data.Provider value={contextValue}>
      {children}
    </Data.Provider>
  );
};

export const userData = () => {
  return useContext(Data);
};

export default AuthContext;
