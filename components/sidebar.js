import Image from "next/image";
import MenuItems from "./menuItems";
import { DotsHorizontalIcon, HomeIcon } from "@heroicons/react/solid";
import {
  BookmarkIcon,
  ClipboardIcon,
  BellIcon,
  InboxIcon,
  HashtagIcon,
  UserIcon,
  DotsCircleHorizontalIcon,
} from "@heroicons/react/outline";

const Sidebar = () => {
  return (
    <div className="hidden sm:flex flex-col p-2 xl:items-start fixed h-full">
      {/* twiterLogo */}
      <div className="hoverEffect p-0 hover:bg-blue-100 xl:px-1">
        <Image
          width="50"
          height="50"
          src="https://help.twitter.com/content/dam/help-twitter/brand/logo.png"
        ></Image>
      </div>
      {/* Menu */}
      <div className="mt-4 mb-2.5 xl:items-start">
        <MenuItems text="Home" Icon={HomeIcon} active />
        <MenuItems text="Explore" Icon={HashtagIcon} />
        <MenuItems text="Notifications" Icon={BellIcon} />
        <MenuItems text="Messages" Icon={InboxIcon} />
        <MenuItems text="Bookmarks" Icon={BookmarkIcon} />
        <MenuItems text="Lists" Icon={ClipboardIcon} />
        <MenuItems text="Profile" Icon={UserIcon} />
        <MenuItems text="More" Icon={DotsCircleHorizontalIcon} />
      </div>

      {/* button */}
      <button className="bg-blue-400 text-white rounded-full w-56 h-12 font-bold shadow-md hover:brightness-95 text-lg hidden xl:inline">
        Tweet
      </button>

      {/* miniProfile */}
      <div className="hoverEffect text-gray-700 flex items-center justify-center xl:justify-start mt-auto">
        <img
          src="https://dl.memuplay.com/new_market/img/com.vicman.newprofilepic.icon.2022-06-07-21-33-07.png"
          alt="userImage"
          //   width="50"
          className=" h-12 w-12 rounded full xl:mr-2"
        />
        <div className="leading-5 hiden xl:inline">
          <h4 className="font-bold">Bazubagira</h4>
          <p className=" text-gray-500">@bedinah</p>
        </div>
        <DotsHorizontalIcon className="h-5 xl:ml-8 hiden xl:inline" />
      </div>
    </div>
  );
};

export default Sidebar;
