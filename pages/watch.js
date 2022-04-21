import { useEffect, useState } from 'react'
import tw from "tailwind-styled-components"
import { useRouter } from 'next/router'

import youtube from './api/youtube'
import { auth, provider } from "../Firebase"

const Watch = () => {

  const router = useRouter();
  const { v, t } = router.query;
  const [playlistItems, setPlaylistItems] = useState(null)
  console.log(v);
  let videoURL = '';
  let response;

  const [shouldRender, setShouldRender] = useState(true);

  useEffect(async () => {
    auth.onAuthStateChanged(async (user) => {
      if (!user) {
        router.push('/');
      } else {
        if (t === 'youtube#playlist') {
          response = await youtube.get('/playlistItems', {
            params: {
              playlistId: v
            }
          })
          // setShouldRender(false)
          setPlaylistItems(response?.data?.items)
        }
      }
    })
  }, [v])


  console.log('playlistItems', playlistItems);
  console.log(v)

  if (t === 'youtube#video')
    videoURL = `https://www.youtube.com/embed/${v}`;
  else
    videoURL = `https://www.youtube.com/embed?listType=playlist&list=${v}`


  return (
    <Wrapper>
      <PlayerContainer>
        <Player src={videoURL} allowFullScreen title="Player"></Player>
      </PlayerContainer>
      {/* <ListContainer>
        {
          playlistItems && playlistItems.map((video) => (
            v == video.id ? <VideoTileVisited>
              <VideoThumbnailBox>
                <VideoThumbnail src={video.snippet.thumbnails.medium.url} />
              </VideoThumbnailBox>
              <VideoInfo>
                <VideoTitle>
                  {video.snippet.title}
                </VideoTitle>
                <ChannelTitle>
                  {video.snippet.channelTitle}
                </ChannelTitle>

              </VideoInfo>
            </VideoTileVisited>
              :
              <VideoTile>
                <VideoThumbnailBox>
                  <VideoThumbnail src={video.snippet.thumbnails.medium.url} />
                </VideoThumbnailBox>
                <VideoInfo>
                  <VideoTitle>
                    {video.snippet.title}
                  </VideoTitle>
                  <ChannelTitle>
                    {video.snippet.channelTitle}
                  </ChannelTitle>

                </VideoInfo>
              </VideoTile>
          ))
        }
      </ListContainer> */}
    </Wrapper>
  )
}

export default Watch

const Wrapper = tw.div` 
  flex w-screen bg-black-dark text-white p-5 max-h-screen h-full 
`
const PlayerContainer = tw.div`
  w-screen
`

const Player = tw.iframe`
   aspect-video w-full h-full
`
const ListContainer = tw.div` 
  border border-gray-500 p-2 mx-2 overflow-y-scroll overflow-x-hidden scrollbar scrollbar-thumb-white h-5/6 w-1/2
`

const VideoTile = tw.div` 
  mx-1 my-3 mr-4 flex justify-center h-32 w-full pr-3
 `
const VideoTileVisited = tw.div` 
 mx-1 my-3 mr-4 flex justify-center h-32 w-full pr-3 bg-black-light
`
const VideoThumbnailBox = tw.div` 
  h-32 w-60 mr-2 flex-4
`

const VideoThumbnail = tw.img`
  object-fit  h-32 w-60
`

const VideoInfo = tw.div`
  flex flex-1 flex-col items-start  
`

const VideoTitle = tw.div`
  text-sm font-bold
`
const ChannelTitle = tw.div`
  text-xs
`

const DaysAgo = tw.div`
  text-sm

`
