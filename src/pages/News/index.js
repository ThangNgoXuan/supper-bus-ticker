import React from 'react'
import Text from '../../components/atoms/Text'
import NewsCard from '../../components/organisms/NewsCard'

const title = 'tin tuc';
const dataNews = new Array(9).fill({
  title: 'Bài viết 1',
  description: 'Xem thêm',
  time: "10/20/2022",
  link: "https://google.com",
  imgSrc: 'https://picsum.photos/425/285',
})

export default function News() {
  return (
    <div className='p-news'>
      <div className='p-news_title'>
        <Text modifiers={['30x32', '600', 'coolBlack', 'center', 'uppercase']}>{title}</Text>
      </div>
      <div className='p-news_wrapContent'> 
        <div className='p-news_wrapContent_header'>

        </div>
        <div className='p-news_wrapContent_bottom'>
        {dataNews && dataNews.length > 0 && dataNews.slice(1).map((item,index) => (
          <NewsCard 
            key={`item-new-${index.toString()}`}
            link={item.link}
            description={item.description}
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
