import { PhotographIcon, EmojiHappyIcon } from "@heroicons/react/outline";

const InputSide = () => {
  return (
    <div className="flex border-b boredr-gray-200 p-3 space-x-3">
      <img
        className="w-14 h-14 rounded-full cursor-pointer hover:brightness-90"
        src="https://dl.memuplay.com/new_market/img/com.vicman.newprofilepic.icon.2022-06-07-21-33-07.png"
        alt=""
      />
      <div className="w-full divide-y divide-gray-200">
        <div className="">
          <textarea
            className="w-full border-none focus:ring-0 text-lg placeholder-gray-700 tracking-wide min-h-[50px] text-gray-700"
            rows="3"
            placeholder="What's happening"
          ></textarea>
        </div>
        <div className=" flex items-center justify-between pt-2.5">
          <div className=" flex ">
            <PhotographIcon className="h-10 w-10 hoverEffect p-2 text-sky-500 hover:bg-sky-100" />
            <EmojiHappyIcon className="h-10 w-10 hoverEffect p-2 text-sky-500 hover:bg-sky-100" />
          </div>
          <button className="bg-blue-400 text-white px-4 py-1.5 rounded-full font-bold shadow-md hover:brightness-95 disabled:opacity-50">
            Tweet
          </button>
        </div>
      </div>
    </div>
  );
};

export default InputSide;
