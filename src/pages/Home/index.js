import React from 'react'
import HeroBanner from '../../components/organisms/HeroBanner'
import PopularRoute from '../../components/organisms/PopularRoute'
import TopDestination from '../../components/organisms/TopDestinations'

export default function Home() {
  return (
    <div className='p-home'>
        <HeroBanner />
        <PopularRoute />
        <TopDestination/>
    </div>
  )
}
