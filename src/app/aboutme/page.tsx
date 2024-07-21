import dynamic from 'next/dynamic'
import React from 'react'

const AboutMe = dynamic(() => import('../../components/component/AboutMe'), { ssr: false })


export default function Page() {
  return (
    <>
    <AboutMe/>
    </>
  )
}
