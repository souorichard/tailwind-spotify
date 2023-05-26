import {
  Home as HomeIcon,
  Search,
  Library,
  ChevronLeft,
  ChevronRight,
  Play,
  Shuffle,
  SkipBack,
  SkipForward,
  Repeat,
  Mic2,
  LayoutList,
  Laptop2,
  Maximize2,
  Volume,
} from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      <div className="flex flex-1">
        <aside className="w-72 bg-zinc-950 p-6">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          </div>

          <nav className="space-y-5 mt-10">
            <a
              href=""
              className="flex items-center gap-2 text-sm font-semibold text-zinc-200"
            >
              <HomeIcon />
              Home
            </a>
            <a
              href=""
              className="flex items-center gap-2 text-sm font-semibold text-zinc-200"
            >
              <Search />
              Search
            </a>
            <a
              href=""
              className="flex items-center gap-2 text-sm font-semibold text-zinc-200"
            >
              <Library />
              Your Library
            </a>
          </nav>

          <nav className="mt-10 pt-10 border-t border-zinc-800 flex flex-col gap-2">
            <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
              Hot Hits Brasil
            </a>
            <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
              Aniver Funk
            </a>
            <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
              My Playlist
            </a>
            <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
              Top Brasil
            </a>
          </nav>
        </aside>
        <main className="flex-1 p-6">
          <div className="flex items-center gap-3">
            <button className="rounded-full bg-black/40 p-1">
              <ChevronLeft />
            </button>
            <button className="rounded-full bg-black/40 p-1">
              <ChevronRight />
            </button>
          </div>

          <h1 className="font-semibold text-3xl mt-10">Good Afternoon</h1>

          <div className="grid grid-cols-3 gap-4 mt-4">
            <a
              href=""
              className="bg-white/5 hover:bg-white/10 flex items-center gap-4 rounded overflow-hidden group"
            >
              <Image src="/album.jpg" width={104} height={104} alt="asd" />
              <strong>Black Pink</strong>
              <button className="w-12 h-12 flex justify-center items-center pl-1 rounded-full bg-green-500 text-black ml-auto mr-8 invisible group-hover:visible">
                <Play />
              </button>
            </a>
            <a
              href=""
              className="bg-white/5 hover:bg-white/10 flex items-center gap-4 rounded overflow-hidden group"
            >
              <Image src="/album.jpg" width={104} height={104} alt="asd" />
              <strong>Black Pink</strong>
              <button className="w-12 h-12 flex justify-center items-center pl-1 rounded-full bg-green-500 text-black ml-auto mr-8 invisible group-hover:visible">
                <Play />
              </button>
            </a>
            <a
              href=""
              className="bg-white/5 hover:bg-white/10 flex items-center gap-4 rounded overflow-hidden group"
            >
              <Image src="/album.jpg" width={104} height={104} alt="asd" />
              <strong>Black Pink</strong>
              <button className="w-12 h-12 flex justify-center items-center pl-1 rounded-full bg-green-500 text-black ml-auto mr-8 invisible group-hover:visible">
                <Play />
              </button>
            </a>
            <a
              href=""
              className="bg-white/5 hover:bg-white/10 flex items-center gap-4 rounded overflow-hidden group"
            >
              <Image src="/album.jpg" width={104} height={104} alt="asd" />
              <strong>Black Pink</strong>
              <button className="w-12 h-12 flex justify-center items-center pl-1 rounded-full bg-green-500 text-black ml-auto mr-8 invisible group-hover:visible">
                <Play />
              </button>
            </a>
            <a
              href=""
              className="bg-white/5 hover:bg-white/10 flex items-center gap-4 rounded overflow-hidden group"
            >
              <Image src="/album.jpg" width={104} height={104} alt="asd" />
              <strong>Black Pink</strong>
              <button className="w-12 h-12 flex justify-center items-center pl-1 rounded-full bg-green-500 text-black ml-auto mr-8 invisible group-hover:visible">
                <Play />
              </button>
            </a>
            <a
              href=""
              className="bg-white/5 hover:bg-white/10 flex items-center gap-4 rounded overflow-hidden group"
            >
              <Image src="/album.jpg" width={104} height={104} alt="asd" />
              <strong>Black Pink</strong>
              <button className="w-12 h-12 flex justify-center items-center pl-1 rounded-full bg-green-500 text-black ml-auto mr-8 invisible group-hover:visible">
                <Play />
              </button>
            </a>
          </div>

          <h2 className="font-semibold text-2xl mt-10">
            Made of Diego Schell Fernandes
          </h2>

          <div className="grid grid-cols-8 gap-4 mt-4">
            <a
              href=""
              className="bg-white/5 hover:bg-white/10 p-4 rounded flex flex-col gap-2"
            >
              <Image
                src="/album.jpg"
                className="w-full rounded"
                width={104}
                height={104}
                alt="asd"
              />
              <strong className="font-semibold">Daily Mix 1</strong>
              <span className="text-sm text-zinc-500">
                Wallows, COIN. girl in red and more
              </span>
            </a>
            <a
              href=""
              className="bg-white/5 hover:bg-white/10 p-4 rounded flex flex-col gap-2"
            >
              <Image
                src="/album.jpg"
                className="w-full rounded"
                width={104}
                height={104}
                alt="asd"
              />
              <strong className="font-semibold">Daily Mix 1</strong>
              <span className="text-sm text-zinc-500">
                Wallows, COIN. girl in red and more
              </span>
            </a>
            <a
              href=""
              className="bg-white/5 hover:bg-white/10 p-4 rounded flex flex-col gap-2"
            >
              <Image
                src="/album.jpg"
                className="w-full rounded"
                width={104}
                height={104}
                alt="asd"
              />
              <strong className="font-semibold">Daily Mix 1</strong>
              <span className="text-sm text-zinc-500">
                Wallows, COIN. girl in red and more
              </span>
            </a>
            <a
              href=""
              className="bg-white/5 hover:bg-white/10 p-4 rounded flex flex-col gap-2"
            >
              <Image
                src="/album.jpg"
                className="w-full rounded"
                width={104}
                height={104}
                alt="asd"
              />
              <strong className="font-semibold">Daily Mix 1</strong>
              <span className="text-sm text-zinc-500">
                Wallows, COIN. girl in red and more
              </span>
            </a>
            <a
              href=""
              className="bg-white/5 hover:bg-white/10 p-4 rounded flex flex-col gap-2"
            >
              <Image
                src="/album.jpg"
                className="w-full rounded"
                width={104}
                height={104}
                alt="asd"
              />
              <strong className="font-semibold">Daily Mix 1</strong>
              <span className="text-sm text-zinc-500">
                Wallows, COIN. girl in red and more
              </span>
            </a>
          </div>
        </main>
      </div>
      <footer className="bg-zinc-800 border-t border-zinc-700 px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Image src="/album.jpg" width={72} height={72} alt="asd" />
          <div className="flex flex-col">
            <strong className="font-normal">Rope</strong>
            <span className="text-xs text-zinc-400">Black Pink</span>
          </div>
        </div>
        <div className="flex flex-col items-center gap-2">
          <div className="flex items-center gap-4">
            <Shuffle size={20} className="text-zinc-200" />
            <SkipBack size={20} className="text-zinc-200" />

            <button className="w-10 h-10 flex justify-center items-center pl-1 rounded-full bg-white text-black">
              <Play />
            </button>

            <SkipForward size={20} className="text-zinc-200" />
            <Repeat size={20} className="text-zinc-200" />
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xs text-zinc-400">0:31</span>
            <div className="w-96 h-1 bg-zinc-600 rounded-full">
              <div className="w-40 h-1 bg-zinc-200 rounded-full"></div>
            </div>
            <span className="text-xs text-zinc-400">2:14</span>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <Mic2 size={20} />
          <LayoutList size={20} />
          <Laptop2 size={20} /> 
          <div className="flex items-center gap-0">
            <Volume size={20} />
            <div className="w-24 h-1 bg-zinc-600 rounded-full">
              <div className="w-10 h-1 bg-zinc-200 rounded-full"></div>
            </div>
          </div>
          <Maximize2 size={20} />
        </div>
      </footer>
    </div>
  );
}
