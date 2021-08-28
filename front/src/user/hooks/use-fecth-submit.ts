import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

type StateFetchDataType<D> = {
  data: D | null;
  fetching: boolean;
};

type ReturnFetchSubmitType = { fetch: (data: any) => void };

export const useFetchSubmit = <D>(
  asyncAction: any,
  methodAuth?:string
): ReturnFetchSubmitType  => {

  const [doFetch, setDoFetch] = useState<StateFetchDataType<D>>({ 
    data: null, 
    fetching: false 
  });
  
  const dispatch = useDispatch();

  useEffect(() => {
    if (doFetch.fetching && doFetch.data !==null) {
      const actionsArguments: any[] = [doFetch.data];
      
      if (methodAuth) actionsArguments.push(methodAuth);

      dispatch(asyncAction(...actionsArguments));
      
      setDoFetch((prevState) => ({
        ...prevState,
        fetching: false
      }));
    }
  }, [doFetch, dispatch, methodAuth, asyncAction]);

  function fetch(data: D): void {
    setDoFetch((prevState) => ({
      ...prevState,
      data,
      fetching: true
    }));
  }

  return {
    fetch
  };
};