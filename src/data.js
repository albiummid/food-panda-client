const resturants = [
    {
        name: "EPIC Steak",
        distance: 1.5,
        ratings: 4,
        discount: 5,
        image: "https://i.imgur.com/TfgC0Fn.jpg",
        facilities:["Home delivery","Pickup","Booking"],
    },
    {
        name: "Chili's",
        distance: 1,
        ratings: 3,
        facilities:["Pickup","Booking"],
        discount: 12,
        image:"https://i.imgur.com/QADW9pm.jpg"
    },
    {
        name: "Mermaid Cafe",
        distance: 6,
        ratings: 5,
        facilities:["Home delivery","Pickup"],
        discount: 0,
        image:"https://i.imgur.com/ahrWfZK.jpg"
    },
    {
        name: "KFC Resturant",
        distance: 9,
        ratings: 5,
        facilities:["Home delivery","Pickup","Booking"],
        discount: 7,
        image:"https://i.imgur.com/4ES0c1F.jpg"
    },
    {
        name: "Kutum Bari",
        distance: 6,
        ratings: 4.5,
        facilities:["Home delivery","Booking"],
        discount: 0,
        image:"https://i.imgur.com/BfmSVw0.jpg"
    },
  
    {
        name: "The Green Lounge",
        distance: 3,
        ratings: 4,
        facilities:["Home delivery","Pickup","Booking"],
        discount: 10,
        image:"https://i.imgur.com/Ibzsc0d.jpg"
    },
    {
        name: "Trattoria",
        distance: 9,
        ratings: 4.5,
        facilities:["Home delivery","Pickup"],
        discount: 0,
        image:"https://i.imgur.com/UJektYT.jpg"
    },
    {
        name: "Hakka Dhaka",
        distance: 5,
        ratings: 5,
        facilities:["Home delivery","Pickup","Booking"],
        discount: 2,
        image:"https://i.imgur.com/UDIIAAs.jpg"
    }
]
export default resturants ;
export const foods = [
    {
        _id: "606c4c73330e7838884e1c83",
        name: "Healthy Meal Plan",
        price: "23.99",
        resturant: ["Hakka Dhaka","The Green Lounge"],
        description: "Italian Delicious food.",
        type: "Lunch",
        image: "https://i.ibb.co/Jr5JTK6/lunch6.png"
    },
    {
        _id: "606c4cb4330e7838884e1c84",
        name: "Fried Chicken Bento",
        price: "9.99",
        resturant: ["Hakka Dhaka","The Green Lounge"],
        description: "Astralian Delicious food.",
        type: "Lunch",
        image: "https://i.ibb.co/TTGMgRT/lunch5.png"
    },
    {
        _id: "606c4d7b330e7838884e1c85",
        name: "Tarragon Rubbed Salmon",
        price: "6.99",
        resturant: ["Hakka Dhaka","The Green Lounge"],
        description: "Chinese Vegetable",
        type: "Lunch",
        image: "https://i.ibb.co/k0wN0v6/lunch3.png"
    },
    {
        _id: "606c4dd8330e7838884e1c86",
        name: "Indian Lunch",
        price: "8.99",
        resturant: ["Trattoria"],
        description: "Indian Luchi, RIce , Chicken Curry",
        type: "Lunch",
        image: "https://i.ibb.co/Csh2tZC/lunch4.png"
    },
    {
        _id: "606c4e40330e7838884e1c87",
        name: "Beef Steak",
        price: "15.99",
        resturant: ["Trattoria"],
        description: "Bangladeshi Beef Steak",
        type: "Lunch",
        image: "https://i.ibb.co/wLrJWWJ/lunch1.png"
    },
    {
        _id: "606c4f40330e7838884e1c88",
        name: "Honey Soy Glazed Salmon with Peppers",
        price: "7.99",
        resturant: ["Trattoria"],
        description: "Italian Delicious food.",
        type: "Lunch",
        image: "https://i.ibb.co/VHwpfT6/lunch2.png"
    },
    {
        _id: "606c4ff8330e7838884e1c89",
        name: "Bagel and Cream Cheese",
        price: "6.99",
        resturant: ["Kutum Bari","EPIC Steak"],
        description: "Indonesian breakfast",
        type: "Breakfast",
        image: "https://i.ibb.co/FBZH8YV/breakfast4.png"
    },
    {
        _id: "606c5083330e7838884e1c8a",
        name: "Breakfast Sandwich",
        price: "9.99",
        resturant: ["Kutum Bari","EPIC Steak"],
        description: "Healthy Sandwich ,Testy too.",
        type: "Breakfast",
        image: "https://i.ibb.co/cXYZtpx/breakfast2.png"
    },
    {
        _id: "606c50eb330e7838884e1c8b",
        name: "Baked Chicken",
        price: "10.99",
        resturant: ["Kutum Bari","EPIC Steak"],
        description: "Delicious Chicken with Spicy",
        type: "Breakfast",
        image: "https://i.ibb.co/G23GQtZ/breakfast3.png"
    },
    {
        _id: "606c5161330e7838884e1c8c",
        name: "Eggs Benedict",
        price: "8.99",
        resturant: ["KFC Resturant"],
        description: "Two eggs with spicy chilies",
        type: "Breakfast",
        image: "https://i.ibb.co/ZGYBT29/breakfast1.png"
    },
    {
        _id: "606c51b7330e7838884e1c8d",
        name: "Toast Croissant Fried egg",
        price: "19.99",
        resturant:[ "KFC Resturant"],
        description: "Tasty bread and Eggs with tomatto",
        type: "Breakfast",
        image: "https://i.ibb.co/kK4xBsJ/breakfast6.png"
    },
    {
        _id: "606c5220330e7838884e1c8e",
        name: "Full Breakfast Fried Egg Toast Brunch",
        price: "3.99",
        resturant: ["KFC Resturant"],
        description: "Fried egg and Bread ",
        type: "Breakfast",
        image: "https://i.ibb.co/Q9vLn5M/breakfast5.png"
    },
    {
        _id: "606c576d330e7838884e1c8f",
        name: "Salmon with Grapefruit and Lentil Salad",
        price: "9.99",
        resturant: ["KFC Resturant"],
        description: "Indian Salad food",
        type: "Dinner",
        image: "https://i.ibb.co/KKPt3mY/dinner6.png"
    },
    {
        _id: "606c57cc330e7838884e1c90",
        name: "Lemony Salmon Piccata",
        price: "10.99",
        resturant: ["Mermaid Cafe"],
        description: "Japanese Traditional food",
        type: "Dinner",
        image: "https://i.ibb.co/KLNV9TD/dinner2.png"
    },
    {
        _id: "606c5814330e7838884e1c91",
        name: "Park Tenderloin Quinoa Pilaf",
        price: "12.99",
        resturant: ["Mermaid Cafe"],
        description: "Thailand's Delicious Food ",
        type: "Dinner",
        image: "https://i.ibb.co/r7dY7tn/dinner5.png"
    },
    {
        _id: "606c585f330e7838884e1c92",
        name: "French Fries with cheese",
        price: "8.99",
        resturant: ["Mermaid Cafe"],
        description: "Most Popular dinner dish",
        type: "Dinner",
        image: "https://i.ibb.co/SQTBRLJ/dinner4.png"
    },
    {
        _id: "606c58b0330e7838884e1c93",
        name: "Garlic Butter Baked Salmon",
        price: "6.99",
        resturant: ["Chili's"],
        description: "Traditional Chinese food",
        type: "Dinner",
        image: "https://i.ibb.co/PF9LdNX/dinner3.png"
    },
    {
        _id: "606c5906330e7838884e1c94",
        name: "Baked Chicken",
        price: "9.99",
        resturant: ["Chili's"],
        description: "Thai food ,most popular",
        type: "Dinner",
        image: "https://i.ibb.co/6nwhn8Z/dinner1.png"
    }
]