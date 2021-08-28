import React, { FC, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

import { ChangeDataType } from '../types';
import { updateUserDataAsync } from '../actions';
import { useFetchSubmit } from '../hooks/use-fecth-submit';
import { userDataSchema } from '../utils/schemas';
import { compare } from '../utils/compare';
import { useNotify } from '../../shareable/hooks/use-notify';

type ChangeUserPropsType = ChangeDataType & {photo: string};

export const ChangeUserData: FC<ChangeUserPropsType> = ({name, email, photo}) => {
  const { fetch } = useFetchSubmit<ChangeDataType>(updateUserDataAsync);
  const { getErrorNotify } = useNotify();
  const { register, handleSubmit, errors, reset } = useForm<ChangeDataType>({
    defaultValues: {
      name: '',
      email: ''
    },
    validationSchema: userDataSchema
  });

  useEffect(() => {
    reset({name: name, email: email});
  }, [reset, name, email])


  useEffect(() => {
    if (errors.name || errors.email) {
      getErrorNotify(errors)
    }
  }, [errors, getErrorNotify]);

  const handlerUserDataSubmit = (newData: ChangeDataType): void => {

    const comparedValues = { 
      name: name, 
      email: email 
    };

    const isChange = compare<ChangeDataType>(newData, comparedValues);

    if (!isChange) {
      toast.error('data was not change');
      return;
    }

    fetch(newData);
  }

  return (
    <div className="user-view__form-container">
      <h2 className="heading-secondary ma-bt-md">Your account settings</h2>
      <form 
        className="form form-user-data" 
        onSubmit={handleSubmit(handlerUserDataSubmit)}
      >
        <div className="form__group">
          <label htmlFor="name" className="form__label">Name</label>
          <input 
            type="text" 
            id="name" 
            className="form__input" 
            required 
            name='name'
            ref={register}
          />
        </div>

        <div className="form__group">
          <label htmlFor="email" className="form__label">Email address</label>
          <input 
            type="email" 
            id="email" 
            className="form__input" 
            required 
            name='email'
            ref={register}
          />
        </div>

        <div className="form__group form__photo-upload">
          <img src={`img/users/${photo}`} alt="User" className="form__user-photo" />
          <button className="btn-text">Choose new photo</button>
        </div>

        <div className="form__group right">
          <button type="submit" className="btn btn--small btn--green">
            Save settings
          </button>
        </div>                           
      </form>
    </div>
  );
}
