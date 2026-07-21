"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
export default function Navbar() {
    const [isSubscribed, setIsSubscribed] = useState(false);
    useEffect(() => {
        setIsSubscribed(localStorage.getItem("crimeSubscribed") === "true");
    }, []);
    return (
        <div className="navbar bg-base-100 shadow-sm">
            <div className="flex-1">
                <Link href="/" className="btn btn-ghost text-xl">
                    Scamazon
                </Link>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1">
                    <li><Link href="/">Home</Link></li>
                    {isSubscribed ? (
                        <li><Link href="/crime/crime-video">Crime Video</Link></li>
                    ) : (
                        <li><Link href="/crime/get-crime">Get Crime</Link></li>
                    )}
                </ul>
            </div>
        </div>
    )
}