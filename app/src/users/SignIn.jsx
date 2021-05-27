import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { signIn } from '../store/user';
import { AppButton } from '../theme';
import UserFormLayout from './UserFormLayout';
import AppInput from '../components/AppInput';

let SignIn = (props) => {
  let dispatch = useDispatch();

  const { register, handleSubmit } = useForm();

  let onSubmit = (data) => {
    dispatch(
      signIn(
        { credentials: data }
      )
    )
  }
  return (
    <UserFormLayout>
      <form onSubmit={handleSubmit(onSubmit)}>
        <AppInput type="email" name="email" {...register('email')} label="Email" />

        <AppInput type="password" name="password" {...register('password')} label="Password" />
        <AppButton type="submit" small>Send</AppButton>

      </form>
    </UserFormLayout>
  )
}

export default SignIn;