import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'
import tw from "tailwind-styled-components"

import youtube from '../api/youtube';
import moment from 'moment';

export default function Home() {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [search, setSearch] = useState('');

  let current = new Date();
  console.log(current.toISOString());
  const handleChange = (e) => {
    // console.log(search);
    setSearch(e.target.value);
  }

  const handleSearch = async () => {
    console.log(search);
    const response = await youtube.get('/search', {
      params: {
        q: search
      }
    })
    console.log(response.data.items);
    setVideos(response.data.items);
  }

  const renderDate = (publishedAt) => {
    let days = moment(current.toISOString()).diff(moment(publishedAt), 'days')
    if (days < 8 && days > 0)
      return `${days} days ago`;
    if (days < 30 && days > 7) {
      let weeks = moment(current.toISOString()).diff(moment(publishedAt), 'weeks')
      return `${weeks} weeks ago`;
    }
    if (days > 30 && days < 365) {
      let months = moment(current.toISOString()).diff(moment(publishedAt), 'months')
      return `${months} months ago`;
    }

    if (days > 365) {
      let years = moment(current.toISOString()).diff(moment(publishedAt), 'years')
      return `${years} years ago`;
    }


  }


  return (
    <Wrapper>
      <Title>Search any YT tutorial</Title>
      <SearchBox name='search' value={search} onChange={handleChange} placeholder='search a keyword or paste a link' />
      <SearchButton onClick={handleSearch}>Search</SearchButton>
      <SearchResultList>
        {
          videos.map(video => {
            return (
              <SearchListItem key={video.id.videoId}>
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
                  <DaysAgo>
                    {
                      renderDate(video.snippet.publishedAt)
                    }
                  </DaysAgo>
                </VideoInfo>
              </SearchListItem>
            )
          })
        }
      </SearchResultList>
    </Wrapper>
  )
}

const Wrapper = tw.div`
  flex flex-1 bg-gray-100 items-center justify-center flex-col
`
const Title = tw.div`
  text-3xl mb-4 mt-10
`


const SearchBox = tw.input`
  p-2 border border-black  rounded-xl w-80 mb-4
`

const SearchButton = tw.div`
  cursor-pointer border bg-black text-white px-4 py-2 rounded-xl mb-5
`

const SearchResultList = tw.div`
  mx-10 flex flex-col items-center mb-10
`

const SearchListItem = tw.div`
  w-full flex m-2 border
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
