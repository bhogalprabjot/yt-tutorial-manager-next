import Head from 'next/head'
import Image from 'next/image'
import tw from "tailwind-styled-components"

export default function Home() {
  return (
    <Wrapper>
      <Title>Search any YT tutorial</Title>
      <SearchBox placeholder='search a keyword or paste a link' />
      <SearchButton>Search</SearchButton>
    </Wrapper>
  )
}

const Wrapper = tw.div`
  flex flex-1 bg-gray-100 items-center justify-center flex-col
`
const Title = tw.div`
  text-3xl mb-4
`


const SearchBox = tw.input`
  p-2 border border-black  rounded-xl w-80 mb-4
`

const SearchButton = tw.div`
  cursor-pointer border bg-black text-white px-4 py-2 rounded-xl
`