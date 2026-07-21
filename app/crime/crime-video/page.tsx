import Image from "next/image";
import { videos } from "./videos";
import Link from "next/link";
import config from "@/lib/config.json";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 min-h-0 gap-4">
      <div className="card bg-base-200 w-full shadow-sm">
        <div className="card-body">
          <h1 className="card-title text-2xl">Best Entertainment You Could Ever Find</h1>
          <br />
          <div className="flex flex-row overflow-x-scroll gap-4">
            {videos
              .filter((video) => video.category === "Entertainment")
              .map((video) => (
                <Link key={video.url} href={video.url}>
                  <div className="card bg-base-300 w-96 shadow-sm">
                    <figure>
                      <Image
                        src={`${config.sitepath}${video.imageUrl}`}
                        alt={video.name}
                        width={600}
                        height={600}
                      />
                    </figure>
                    <div className="card-body">
                      <h2 className="card-title">{video.name}</h2>
                    </div>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </div>
      <div className="card bg-base-200 w-full shadow-sm">
        <div className="card-body">
          <h1 className="card-title text-2xl">Cornhub</h1>
          <br />
          <div className="flex flex-row overflow-x-scroll gap-4">
            {videos
              .filter((video) => video.category === "Cornhub")
              .map((video) => (
                <Link key={video.url} href={video.url}>
                  <div key={video.url} className="card bg-base-300 w-96 shadow-sm">
                    <figure>
                      <Image
                        src={`${config.sitepath}${video.imageUrl}`}
                        alt={video.name}
                        width={600}
                        height={600}
                      />
                    </figure>
                    <div className="card-body">
                      <h2 className="card-title">{video.name}</h2>
                    </div>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </div>
    </div >
  )
}
