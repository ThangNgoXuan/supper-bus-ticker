import React from 'react'
import Text from '../../components/atoms/Text'
import Container from '../../components/organisms/Container'

const title = "Về Bus-ticket chúng tôi";
const content = `con ten qq <img alt="cac" src="https://picsum.photos/200"/> scacsacas <br/> qưdwdwq`

export default function AboutUs() {
  return (
      <Container>
        <div className='p-aboutUs'>
            <div className='p_aboutUs_title'>
              <Text content={title} modifiers={['30x32', 'coolBlack', '600', 'center']} />
            </div>
            <div className='p_aboutUs_content'>
              <Text content={content} />
            </div>
        </div>
      </Container>
  )
}
