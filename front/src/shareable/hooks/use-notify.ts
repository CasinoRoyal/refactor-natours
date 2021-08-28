import { useState, useEffect, useCallback } from 'react';
import { toast } from 'react-toastify';

type ReturnNotifyType = {
  getErrorNotify: (values: string | object) => void;
  getSuccessNotify: (msg: string) => void;
}

type NotifyType = 'error' | 'success';

export const useNotify = (): ReturnNotifyType => {
  const [notify, setNotify] = useState<string | string[]>('');
  const [type, setType] = useState<NotifyType>('success');

  const _getNotifyMessages = (values: object): string[] => {
    return Object.values(values).map(value => value?.message)
  }
  
  useEffect(() => {
    if (!!notify ===false) return;

    if (notify instanceof Array && notify.length !==0) {
      notify.forEach(msg => toast[type](msg));
    }

    if (typeof notify ==='string') {
      toast[type](notify);
      return;
    }    

  }, [notify, type]);
  
  
  const getErrorNotify = useCallback((values: string | object): void => {    
    if (typeof values === 'string') {
      setNotify(values);
      setType('error');
    } else {
      const notifyMessages = _getNotifyMessages(values);
      setNotify(notifyMessages);
      setType('error');
    }
  }, [])

  const getSuccessNotify = useCallback((msg: string): void => {   
    setNotify(msg);
    setType('success');
  }, [])

  return {
    getSuccessNotify,
    getErrorNotify
  }
}