import React from 'react'
import HeroBanner from '../../components/organisms/HeroBanner'
import Information from '../../components/organisms/Infomation'
import PopularRoute from '../../components/organisms/PopularRoute'
import TopDestination from '../../components/organisms/TopDestinations'

export default function Home() {
  return (
    <div className='p-home'>
        <HeroBanner />
        <div className="p-home_body">
        <PopularRoute />
        <TopDestination/>
        <Information/>
        </div>
    </div>
  )
}
