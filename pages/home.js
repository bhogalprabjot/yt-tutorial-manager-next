import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'
import tw from "tailwind-styled-components"
import Link from 'next/link'
import youtube from './api/youtube';
import moment from 'moment';

export default function Home() {
  const [videos, setVideos] = useState([]);
  // const [selectedVideo, setSelectedVideo] = useState(null);
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
    console.log(response);
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
      <Search>
        <SearchBox name='search' value={search} onChange={handleChange} placeholder='Search a keyword or paste a link' />
        <SearchButton onClick={handleSearch}>SEARCH</SearchButton>
      </Search>
      <SearchResultList>
        {
          videos && videos.map((video, index) => (
            // video.id.kind === "youtube#playlist" && <>
            video.id.videoId && <div key={video.id.videoId}>
              <Link href={{
                pathname: `/watch`,
                query: {
                  v: `${video.id.videoId ? video.id.videoId : video.id.playlistId}`,
                  t: `${video.id.kind}`
                }
              }} passHref>

                <SearchListItem>
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
              </Link>
              <Link href={{
                pathname: `/watch`,
                query: {
                  v: `${video.id.videoId ? video.id.videoId : video.id.playlistId}`,
                  t: `${video.id.kind}`
                }
              }} passHref>
                <SearchListMobileItem>
                  <VideoThumbnailBoxMobile>
                    <VideoThumbnailMobile src={video.snippet.thumbnails.medium.url} />
                  </VideoThumbnailBoxMobile>
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
                </SearchListMobileItem>
              </Link>
            </div>
          )
          )
        }
      </SearchResultList>
    </Wrapper>
  )
}

const Wrapper = tw.div`
  flex flex-1 bg-black-dark items-center justify-center flex-col text-white max-w-1/2 

`
const Title = tw.div`
  text-3xl mb-4 mt-10 tracking-wider

`
const Search = tw.div`
  flex  
`

const SearchBox = tw.input`
  tracking-wider px-3 py-2  border border-black-dark w-80 mb-4 bg-black-light md: w-44
  `

const SearchButton = tw.div`
tracking-wider cursor-pointer border ml-2 border-black-dark bg-red text-white px-4 py-2  mb-4
`

const SearchResultList = tw.div`
  mx-10 mb-10 w-2/3 mt-4 tracking-wide grid-cols-1 
`

const SearchListItem = tw.div`
  w-full flex m-2 border border-black-light cursor-pointer hover:bg-black-light ease-in-out delay-100 hidden md:flex 
`

const VideoThumbnailBox = tw.div` 
  h-48 w-80 flex-4
`
const VideoThumbnail = tw.img`
  object-cover h-48 w-80 
`

const VideoInfo = tw.div`
  flex flex-col items-start p-2 flex-1
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



const SearchListMobileItem = tw.div`
  w-full mt-2 border border-black-light cursor-pointer hover:bg-black-light ease-in-out delay-100 md:hidden

`
const VideoThumbnailBoxMobile = tw.div` 
  h-48 w-full flex-4 md:hidden
`
const VideoThumbnailMobile = tw.img`
  object-cover h-48 w-full  md:hidden
`
