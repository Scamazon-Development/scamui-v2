import Image from "next/image";
import { listings } from "@/lib/listings";
import Link from "next/link";
import config from "@/lib/config.json";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 min-h-0 gap-4">
      <div className="card bg-base-200 w-full shadow-sm">
        <div className="card-body">
          <h1 className="card-title text-2xl">Best Food You Could Ever Find</h1>
          <br />
          <div className="flex flex-row sm:overflow-x-scroll gap-4 flex-wrap sm:flex-nowrap">
            {listings
              .filter((listing) => listing.category === "Food")
              .map((listing) => (
                <Link key={listing.id} href={`/listing/${listing.id}`}>
                  <div className="card bg-base-300 w-96 shadow-sm">
                    <figure>
                      <Image
                        src={`${config.sitepath}${listing.imageUrl}`}
                        alt={listing.name}
                        width={600}
                        height={600}
                      />
                    </figure>
                    <div className="card-body">
                      <h2 className="card-title">{listing.name}</h2>
                      <p>${listing.price}</p>
                    </div>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </div>
      <div className="card bg-base-200 w-full shadow-sm">
        <div className="card-body">
          <h1 className="card-title text-2xl">Supreme Tech For All Of Your Tech Needs</h1>
          <br />
          <div className="flex flex-row sm:overflow-x-scroll gap-4 flex-wrap sm:flex-nowrap">
            {listings
              .filter((listing) => listing.category === "Tech")
              .map((listing) => (
                <Link key={listing.id} href={`/listing/${listing.id}`}>
                  <div key={listing.id} className="card bg-base-300 w-96 shadow-sm">
                    <figure>
                      <Image
                        src={`${config.sitepath}${listing.imageUrl}`}
                        alt={listing.name}
                        width={600}
                        height={600}
                      />
                    </figure>
                    <div className="card-body">
                      <h2 className="card-title">{listing.name}</h2>
                      <p>${listing.price}</p>
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
