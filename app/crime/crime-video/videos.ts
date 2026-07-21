export type VideoCategory = "Entertainment" | "Cornhub";

export interface Video {
    url: string;
    name: string;
    category: VideoCategory;
    imageUrl: string;
}

export const videos: Video[] = [
    {
        url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        name: "Rick Astley The Movie",
        category: "Entertainment",
        imageUrl: "/images/crime-video/rick.jpg"
    },
    {
        url: "https://cornhub.website",
        name: "Cornhub",
        category: "Cornhub",
        imageUrl: "/images/crime-video/cornhub-logo.png"
    }
]