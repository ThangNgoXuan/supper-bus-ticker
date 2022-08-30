import React from 'react';
import Proptypes from 'prop-types';
import error404 from '../../assets/images/error404.svg'
import Text from '../../components/atoms/Text';
import Image from '../../components/atoms/Image';
import Link from '../../components/atoms/Link';
import Button from '../../components/atoms/Button';

export default function NotFound({title, description, btnText}) {
  return (
    <div className="t-notFound">

      <div className="t-notFound_imgWrapper">
        <Image imgSrc={error404} ratio="1x1" />
      </div>
      <div className="t-notFound_content">
        <Text modifiers={['700', '32x48', 'center', 'raisinBlack']}>{title}</Text>
        <div className="t-notFound_content-error">
          <Text modifiers={['16x24', '500', 'center', 'davysGrey']}>{description}</Text>
        </div>
        <div className="t-notFound_btnList">
          <Link href="/">
            <Button modifiers={['md', 'third']}><Text modifiers={['14x20', '600', 'white']}>{btnText}</Text></Button>
          </Link>
        </div>
      </div>
  </div>
  )
}

NotFound.prototype = {
  title: Proptypes.string,
  describe: Proptypes.string,
  btnText: Proptypes.string,
}

NotFound.defaultProps = {
   title: 'Rất tiếc, chúng tôi không tìm thấy trang này',
   description: 'Vui lòng trở về trang chủ hoặc liên hệ với chúng tôi để được hỗ trợ.',
   btnText: 'Quay lại',
}