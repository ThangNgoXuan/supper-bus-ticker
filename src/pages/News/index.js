import React from 'react'
import Image from '../../components/atoms/Image';
import Link from '../../components/atoms/Link';
import Text from '../../components/atoms/Text'
import NewsCard from '../../components/organisms/NewsCard'

const title = 'Tin tức';
const dataNews = new Array(7).fill({
  title: 'Bài viết 1',
  more: 'Xem thêm',
  time: "10/20/2022",
  link: "https://google.com",
  imgSrc: 'https://picsum.photos/425/285',
  description: "Nôi dung bài viet môt"
})

export default function News() {
  return (
    <div className='p-news'>
      <div className='p-news_title'>
        <Text modifiers={['30x32', '600', 'coolBlack', 'center', 'uppercase']}>{title}</Text>
      </div>
      <div className='p-news_wrapContent'>
        <Link href={dataNews[0].link}>
        <div className='p-news_wrapContent_header'>
          <Image imgSrc={dataNews[0].imgSrc} ratio="895x590"/>
          <div className='p-news_fistNews'>
            <div className='p-news_fistNews_time'>
              <Text modifiers={["16x20", "dimGray", "400"]}>{dataNews[0].time}</Text>
            </div>
            <div className='p-news_fistNews_title'>
              <Text modifiers={["28x32", "oxfordBlue", "400"]}>{dataNews[0].title}</Text>
            </div>
            <div className='p-news_fistNews_spanBorder'/>
            <div className='p-news_fistNews_description'>
              <Text modifiers={["16x24", "outerSpace", "400"]}>{dataNews[0].description}</Text>
            </div>
            <div className='p-news_fistNews_more'>
              <Text modifiers={["16x34", "electricCrimson", "400"]}>{dataNews[0].more}</Text>
            </div>
          </div>
        </div>
        </Link>
        <div className='p-news_wrapContent_bottom'>
        {dataNews && dataNews.length > 0 && dataNews.slice(1).map((item,index) => (
          <NewsCard
            key={`item-new-${index.toString()}`}
            link={item.link}
            more={item.more}
            time={item.time}
            title={item.title}
            imgSrc={item.imgSrc}
          />
        ))}
        </div>
      </div>

    </div>
  )
}
