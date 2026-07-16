export interface Listing {
    id: string;
    name: string;
    price: string;
    description: string;
    imageUrl: string;
    category: ListingCategory;
}
export type ListingCategory = "Food" | "Tech";

export const listings: Listing[] = [
    {
        id: "pre-cracked-egg",
        name: "Pre Cracked Egg",
        price: "696969696969696969.69",
        description: "An egg that has been pre-cracked and is ready to cook, we don't recommend eating it raw and we don't recommend eating it cooked either. WARNING: This product is not intended for consumption and contains multiple harmful substances including Dihydrogen Monoxide, (2R,3S,4R,5R)-2,3,4,5,6-pentahydroxyhexanal and Acedic acid.",
        imageUrl: "/images/products/pre-cracked-egg.png",
        category: "Food"
    },
    {
        id: "pizza",
        name: "Pizza",
        price: "696969696969696969.69",
        description: "An pizza that is high in tastiness and nutrition, very good and we reccomend eating it, packed with toppings and the warning is mandated by the goverment but we reccomend ignoring it. WARNING: This product is not intended for consumption and contains multiple harmful substances including Dihydrogen Monoxide, (2R,3S,4R,5R)-2,3,4,5,6-pentahydroxyhexanal and Acedic acid.",
        imageUrl: "/images/products/pizza.jpeg",
        category: "Food"
    },
    {
        id: "scamazon-repeat",
        name: "Scamazon Repeat",
        price: "999999999999999999999999.99",
        description: "A revolutionary new smart speaker powered by Scamaozon's unique \"Alex\" AI technology, capable of controlling some of most of your Scamazon devices powerd by WaterOS and providing you with none of the latest news and weather updates.",
        imageUrl: "/images/products/scamazon-repeat.png",
        category: "Tech"
    },
    {
        id: "scamazon-mouth",
        name: "Scamazon Mouth",
        price: "999999999999999999999999.99",
        description: "A revolutionary new mouse that is so good you click before you even know that you want to click, it clicks for you at random intervals and even moves itself, we don't know why it does this but it's very cool and we recommend it.",
        imageUrl: "/images/products/scamazon-mouth.png",
        category: "Tech"
    },
    {
        id: "little-hero-adventure-racing",
        name: "Little Hero Adventure Racing",
        price: "123456789012345678",
        description: "A racing game that is so good you will stop playing before you start, you will never want to play or even want to buy this game but it lives up to scamazons high standards and we recommend it, it's a very good game and we reccomend it.",
        imageUrl: "/images/products/little-hero-adventure-racing.jpg",
        category: "Tech"
    }
]