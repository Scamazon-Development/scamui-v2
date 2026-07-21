import { listings } from "@/lib/listings";
import Image from "next/image";
import Link from "next/link";
import config from "@/lib/config.json";

export async function generateStaticParams() {
    return listings.map((listing) => ({
        ID: listing.id,
    }));
}

export default async function ListingPage({ params }: { params: Promise<{ ID: string }> }) {
    const { ID } = await params;

    console.log(ID);

    const listing = listings.find((l) => l.id === ID);

    if (!listing) {
        return <div>Listing not found</div>;
    }

    return (
        <div className="flex flex-col flex-1 min-h-0 gap-4">
            <div className="flex flex-row justify-between gap-4">
                <Image src={`${config.sitepath}${listing.imageUrl}`} alt={listing.name} width={400} height={400} />
                <div className="card bg-base-200 flex-1 basis-0 min-w-0 shadow-sm">
                    <div className="card-body flex flex-col">
                        <h2 className="card-title">{listing.name}</h2>
                        <p>${listing.price}</p>
                    </div>
                </div>
                <div className="card bg-base-200 flex-1 basis-0 min-w-0 h-fit shadow-sm gap-4 p-4">
                    <h1 className="text-2xl font-bold">${listing.price}</h1>
                    <input type="number" placeholder="Quantity" className="input input-bordered w-full" />
                    <Link href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" className="btn btn-primary">
                        Buy Now
                    </Link>
                    <Link href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" className="btn btn-secondary">
                        Add to Cart
                    </Link>
                    <Link href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" className="btn btn-accent">
                        Add to Wishlist
                    </Link>
                    <Link href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" className="btn btn-info">
                        Buy with Scamazon Financing Service
                    </Link>
                    <Link href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" className="btn btn-success">
                        Add to Scamazon QuickOrder
                    </Link>
                    <Link href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" className="btn btn-warning">
                        Subscribe to Automatic Ordering
                    </Link>
                </div>
            </div>
            <div className="card bg-base-200 w-full flex-1 min-h-0 shadow-sm">
                <h2 className="card-title p-4">{listing.name}</h2>
                <p className="px-4">{listing.description}</p>
            </div>
        </div>
    )
}