import React from 'react'
import tw from "tailwind-styled-components"
import { dummyList } from '../public/dummyLearning'
import { useRouter } from 'next/router'

import { useState, useEffect } from 'react'

import { auth, provider } from "../Firebase"

const MyLearning = () => {

  const router = useRouter();
  useEffect(() => {
    auth.onAuthStateChanged(async (user) => {
      if (!user) {
        router.push('/');
      }
    })
  }, []);




  console.log(dummyList)
  return (
    <Wrapper>
      <LearningList>
        {
          dummyList.map((item, index) => (

            <ListItem key={index}>
              <Thumbnail src={item.imgURL} />

              <Title>
                {item.title}
              </Title>
            </ListItem>
          )
          )
        }
      </LearningList>
    </Wrapper>
  )
}

export default MyLearning;

const Wrapper = tw.div`
  flex flex-col items-center w-screen mt-5 
`

const LearningList = tw.div`
  w-2/3 
`

const ListItem = tw.div`
  flex mb-2 border 
`
const Thumbnail = tw.img`
  h-30 w-60 object-contain
`

const Title = tw.div`
  p-2 text-xl
`