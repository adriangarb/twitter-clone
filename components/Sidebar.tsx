import React from 'react'
import {
    BellIcon,
    HashtagIcon,
    BookmarkIcon,
    CollectionIcon,
    DotsCircleHorizontalIcon,
    MailIcon,
    UserIcon,
    HomeIcon
} from '@heroicons/react/outline'
import Image from 'next/image'
import SidebarRow from './SidebarRow'
import {signIn, signOut, useSession} from 'next-auth/react'
function Sidebar() {
  const {data:session} = useSession()
  return (
    <div className='flex col-span-2 flex-col items-center px-4 md:items-start'>
        <Image className='h-10 w-10 m-3' layout="fixed" src="https://links.papareact.com/drq" height={40} width={40}/>
        <SidebarRow Icon={HomeIcon} title="Home"/>
        <SidebarRow Icon={HashtagIcon} title="Explore"/>
        <SidebarRow Icon={HomeIcon} title="Notifications"/>
        <SidebarRow Icon={MailIcon} title="Messages"/>
        <SidebarRow Icon={BookmarkIcon} title="Bookmarks"/>
        <SidebarRow Icon={CollectionIcon} title="Lists"/>
        <SidebarRow Icon={UserIcon} onClick={session ? signOut : signIn}title={session ? 'Sign Out' : 'Sign in'}/>
        <SidebarRow Icon={DotsCircleHorizontalIcon} title="More"/>
    </div>
  )
}

export default Sidebar