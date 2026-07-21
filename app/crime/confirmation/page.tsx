import Link from "next/link";

export default function ConfirmationPage() {
    return (
        <div className="flex flex-col flex-1 min-h-0">
                    <h1 className="card-title text-2xl">Thank you for your purchase!</h1>
                    <br />
                    <p>You now have scamazon crime access!</p>
                    <Link href="/" className="btn btn-primary mt-4 w-34">Take me home</Link>
        </div>
    )
}