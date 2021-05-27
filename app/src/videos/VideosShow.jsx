import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch} from 'react-redux';
import { getVideo } from '../store/videos';
import Player from './Player';

let VideoShow = (props) => {
  let { id } = useParams();
  let dispatch = useDispatch();
  let video = useSelector(state => state.videos.currentVideo);
  useEffect(() => {
    dispatch(
      getVideo(id)
    )
  }, []);

  return (
    <>
      {
        video && <Player video={video}></Player>
      }
    </>
  )
}

export default VideoShow;