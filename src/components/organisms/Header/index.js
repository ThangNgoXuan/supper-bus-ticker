import React, { useState } from 'react';
import {MdOutlineMenu} from 'react-icons/md';
import {AiOutlineCloseSquare} from 'react-icons/ai';
import Image from '../../atoms/Image';
import Link from '../../atoms/Link';
import Text from '../../atoms/Text';
import routerPage from '../../../routes';
import mapModifiers from '../../../utils/functions';


export default function Header() {
    const [open, setOpen] = useState(false);
    const [choose, setChoose ] = useState(routerPage[0].path);

    console.log(choose)

    const handleClose = () => {
        setOpen(false)
    }

    const handleOpen = () => {
        setOpen(true)
    }

  return (
    <div className='o-header'>
        <div className='o-header_left'>
           <Link href="/">
           <Image ratio="logo" imgSrc="https://picsum.photos/200/300" />
           </Link>
        </div>
        <div className='o-header_right'>
            <ul className='o-header_menu'>
                {routerPage.map((item,index) => (
                    <Link href={item.path}>
                        <li className={mapModifiers('o-header_menu_item', item.path === choose && 'active')} key={`menu-item-${index}`} onClick={() => setChoose(item.path)}>
                            <Text modifiers={['300', 'center']}>{item.label}</Text>
                        </li>
                    </Link>
                ))}
            </ul>
            <div className='o-header_menuButton' onClick={handleOpen}> 
                <MdOutlineMenu/>
            </div>
            <div className={mapModifiers('o-header_menuMobile', open && 'open')}>
                <div className='o-header_menuMobile_buttonClose' onClick={handleClose}>
                    <AiOutlineCloseSquare/>
                </div>
                <ul className='o-header_menuMobile_list'>
                    {routerPage.map((item,index) => (
                        <Link href={item.path} onClick={handleClose}>
                            <li className='o-header_menuMobile_item' key={`menu-item-menu-${index}`}>
                                <Text modifiers={['300', 'center', 'white']}>{item.label}</Text>
                            </li>
                        </Link>
                    ))}
                </ul>
            </div>
        </div>
    </div>
  )
}
