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
    <div className="hidden sm:flex flex-colum">
      {/* twiterLogo */}
      <div className="hoverEffect">
        <Image
          width="50"
          height="50"
          src="https://help.twitter.com/content/dam/help-twitter/brand/logo.png"
        ></Image>
      </div>
      {/* Menu */}
      <div className="">
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
          width="50"
        />
        <div className="">
          <h4>Bazubagira</h4>
          <p>@bedinah</p>
        </div>
        <DotsHorizontalIcon className="h-5" />
      </div>
    </div>
  );
};

export default Sidebar;
