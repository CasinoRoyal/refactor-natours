import React, { FC, ReactNode} from 'react';

import { Spinner } from './spinner';

export const Wrapper: FC<ReactNode> = ({ children }) => {
   return (
     <div className="wrapper">
       {children}
     </div>
   );
};

export const WrappedSpinner = () => (
  <Wrapper>
    <Spinner />
  </Wrapper>
);