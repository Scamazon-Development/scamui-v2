"use client";

import Link from "next/link";

export default function Navbar() {
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
                    <li>
                        <details>
                            <summary>Crime</summary>
                            <ul className="bg-base-100 rounded-t-none p-2 -mx-10 z-99">
                                <li><a>Placeholder 1</a></li>
                                <li><a>Placeholder 2</a></li>
                            </ul>
                        </details>
                    </li>
                </ul>
            </div>
        </div>
    )
}