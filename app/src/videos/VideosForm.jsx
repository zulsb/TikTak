import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { createVideo } from '../store/videos';
import AppInput, { Fieldset } from '../components/AppInput';
import { AppButton, CenteredContainer, SmallContainer as SmallContainerTemplate } from '../theme';
import styled from 'styled-components';

let SmallContainer = styled(SmallContainerTemplate)`
  text-align: center;
`;

let VideosForm = (props) => {
  let { register, handleSubmit } = useForm();
  let dispatch = useDispatch();
  let onSubmit = async (video) => {
    let formData = new FormData();
    formData.append('title', video.title);
    formData.append('video', video.video[0]);
    dispatch (
      createVideo(formData)
    )
  };

  return (
    <CenteredContainer>
      <SmallContainer>
        <form onSubmit={handleSubmit(onSubmit)}>
          <AppInput type="text" name="title" {...register('title')} id="" label="Title" />
          <Fieldset>
            <label>Video file</label>
            <input type='file' name='video'  {...register('video')} />
          </Fieldset>
          <AppButton type="submit" small>upload</AppButton>
        </form>
      </SmallContainer>
    </CenteredContainer>
  )
}

export default VideosForm;