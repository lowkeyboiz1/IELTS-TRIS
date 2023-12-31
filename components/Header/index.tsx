'use client'

import ExpandLessIcon from '@mui/icons-material/ExpandLess'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import Link from 'next/link'
import { useState } from 'react'
import styles from './index.module.scss'
import Driver from '../Driver'
import { HambergerMenu } from 'iconsax-react'
import Divider from '@mui/material/Divider'
import SwitchMode from '../SwitchMode'

function Header() {
  return (
    <div className='fixed left-0 right-0 z-10'>
      <header className='flex items-center justify-between h-[60px] px-6 bg-[#0d1224] text-white'>
        <Link href='/'>
          <div className='font-bold'>IELTS TRIS</div>
        </Link>
        <div className='hidden lg:block'>
          <RenderListMenu />
        </div>
        {/* <div className=''>
          <SwitchMode />
        </div> */}
        <div className='block lg:hidden'>
          <Driver>
            <HambergerMenu size='32' color='#FF8A65' />
          </Driver>
        </div>
      </header>
      <div className='border-b-[0.5px] border-[#E0E0E0]'></div>
    </div>
  )
}

export default Header

const RenderListMenu = () => {
  const menuList = [
    {
      id: 1,
      title: 'Home',
      url: '/',
    },
    {
      id: 2,
      title: 'Writing Task 1',
      url: 'WT1',
      children: [
        {
          id: 8,
          title: 'Compare/Contrast',
          url: '',
        },
        {
          id: 9,
          title: 'Khang',
          url: '',
        },
      ],
    },
    {
      id: 3,
      title: 'Writing Task 2',
      url: '',
      children: [
        {
          id: 10,
          title: 'Compare/Contrast',
          url: '',
        },
        {
          id: 11,
          title: 'Khang123',
          url: '',
        },
      ],
    },
    {
      id: 4,
      title: 'Easy Essays',
      url: '',
    },
    {
      id: 5,
      title: 'About Me',
      url: '',
    },
    {
      id: 6,
      title: 'Hall Of Fame',
      url: '',
    },
    {
      id: 7,
      title: 'Courses',
      url: '',
    },
  ]

  return (
    <>
      <div className='flex gap-4'>
        {menuList.map((menu) => (
          <ItemMenuList menu={menu} key={menu.id} />
        ))}
      </div>
    </>
  )
}

const ItemMenuList = ({ menu }: { menu: any }) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }
  return (
    <>
      <div className={styles.list}>
        <Link className={styles.listTitle} href={menu.url}>
          {menu.title}
        </Link>
        {menu?.children && (
          <>
            <div className={styles.moreIcon}>
              <ExpandMoreIcon />
            </div>
          </>
        )}
        {menu?.children && (
          <div className={styles.lisItem}>
            {menu?.children.map((item: any, index: number) => (
              <ItemMenu handleClose={handleClose} menuChildren={item} key={item.id} />
            ))}
          </div>
        )}
      </div>
    </>
  )
}

const ItemMenu = ({
  handleClose,
  menuChildren,
}: {
  handleClose: any
  menuChildren: any
}) => {
  return (
    <>
      <Link href={menuChildren.url}>
        <div className={styles.menuItem} onClick={handleClose}>
          {menuChildren.title}
        </div>
      </Link>
      <div className={styles.divider}>
        <Divider />
      </div>
    </>
  )
}
