import React from 'react';
import { InfiniteLoader, List } from 'react-virtualized';
import Video from './Video';


let VideosList = ({videosState, loadNextPage, loading}) => {
  let rowRenderer = (index, parent, key, style) => {
    let video = videosState.data.videos[index];
    return (
      video ?
      <Video key={key} video={video} style={style} /> : <p>Loading...</p>
    )
  };
  let loadMoreRows = loading ? ()=>{} : () => {
    loadNextPage()
  };

  let isRowLoaded = ({index}) => {
    return !!videosState.data.videos[index];
  }

  let totalCount = videosState.data.nextPage ? videosState.data.videos.length + 3 : videosState.data.total;
  let videosCount = videosState.data.nextPage ? videosState.data.videos.length + 1 : videosState.data.total;

  return (
    <div>
      {
        ({onRowsRendered, registerChild}) => (
          <InfiniteLoader
            rowCount={totalCount}
            isRowLoaded={isRowLoaded}
            loadMoreRows={loadMoreRows}
            minimumBatchSize={1}
            threshold={2}
            >
            <List onRowsRendered={onRowsRendered} {...registerChild}
            height='500'
            width='700'
            rowHeight='100'
            rowRenderer={rowRenderer}
            rowCount={videosCount}
          >
              

            </List>
          </InfiniteLoader>
        )
      }
    </div>
  )
}

export default VideosList;