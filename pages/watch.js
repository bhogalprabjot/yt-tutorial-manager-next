import { useEffect, useState } from 'react'
import tw from "tailwind-styled-components"
import { useRouter } from 'next/router'
import youtube from '../api/youtube'


const Watch = () => {

  const router = useRouter();
  const { v, t } = router.query;
  const [playlistItems, setPlaylistItems] = useState(null)
  console.log(v);
  let videoURL = '';
  let response;

  const [shouldRender, setShouldRender] = useState(true);

  useEffect(async () => {
    if (t === 'youtube#playlist') {
      response = await youtube.get('/playlistItems', {
        params: {
          playlistId: v
        }
      })
      // setShouldRender(false)
      setPlaylistItems(response?.data?.items)
    }
  }, [v])


  console.log('playlistItems', playlistItems);

  if (t === 'youtube#video')
    videoURL = `https://www.youtube.com/embed/${v}`;
  else
    videoURL = `https://www.youtube.com/embed?listType=playlist&list=${v}`


  return (
    <Wrapper>
      <PlayerContainer>
        <Player src={videoURL} allowFullScreen title="Player"></Player>
      </PlayerContainer>
      <ListContainer>
        {
          playlistItems && playlistItems.map((video) => (

            <>
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
            </>
          ))
        }
      </ListContainer>
    </Wrapper>
  )
}

export default Watch

const Wrapper = tw.div`
  flex w-screen
`
const PlayerContainer = tw.div`
  w-5/6
`

const Player = tw.iframe`
   aspect-video w-full
`
const ListContainer = tw.div`

`

const VideoThumbnailBox = tw.div` 
  h-30 w-60 mr-2 
`

const VideoThumbnail = tw.img`
  object-cover 
`

const VideoInfo = tw.div`
  flex flex-col items-start p-2
`

const VideoTitle = tw.div`
  text-lg font-bold
`
const ChannelTitle = tw.div`
  text-sm
`

const DaysAgo = tw.div`
  text-sm

`
