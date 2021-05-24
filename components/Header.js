import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import {
  BellIcon,
  ChatIcon,
  ChevronDownIcon,
  HomeIcon,
  UserGroupIcon,
  ViewGridIcon,
} from "@heroicons/react/solid";
import {
  FlagIcon,
  PlayIcon,
  SearchIcon,
  ShoppingCartIcon,
} from "@heroicons/react/outline";
import HeaderIcon from "../components/HeaderIcon";
import { signOut, useSession } from "next-auth/client";

function Header() {
  const [session] = useSession();
  return (
    <header className="sticky top-0 z-50 bg-white flex items-center p-2 lg:px-5 shadow-md">
      <div className="flex items-center">
        <FontAwesomeIcon
          className="text-blue-500 h-10 w-10"
          icon={["fab", "facebook"]}
        />
        <div className="flex ml-2 items-center bg-gray-100 rounded-full">
          <SearchIcon className="hidden md:flex ml-2 h-6 text-gray-600" />
          <input
            type="text"
            className="hidden md:inline-flex bg-transparent border-transparent rounded-full placeholder-gray-500 focus:outline-none flex-shrink"
            placeholder="Zoeken"
          />
        </div>
      </div>
      {/* Center */}
      <div className="flex justify-center flex-grow">
        <div className="flex space-x-6 md:space-x-2">
          <HeaderIcon active Icon={HomeIcon} />
          <HeaderIcon Icon={FlagIcon} />
          <HeaderIcon Icon={PlayIcon} />
          <HeaderIcon Icon={ShoppingCartIcon} />
          <HeaderIcon Icon={UserGroupIcon} />
        </div>
      </div>
      {/*  Right Side */}
      <div className="flex items-center sm:space-x-2 justify-end">
        {/*  Profile Picture */}
        <Image
          onClick={signOut}
          className="rounded-full cursor-pointer"
          src={session.user.image}
          width="40"
          height="40"
          layout="fixed"
        />
        <p className="hidden lg:flex whitespace-nowrap pr-3 font-semibold">
          {session.user.name}
        </p>
        <ViewGridIcon className="icon" />
        <ChatIcon className="icon" />
        <BellIcon className="icon" />
        <ChevronDownIcon className="icon" />
      </div>
    </header>
  );
}

export default Header;
