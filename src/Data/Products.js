const products = [
  {
    id: 1,
    title: "Big Mac",
    price: 2,
    img: "https://neal.fun/spend/images/big-mac.jpg",
  },
  {
    id: 2,
    title: "Flip Flops",
    price: 3,
    img: "https://neal.fun/spend/images/flip-flops.jpg",
  },
  {
    id: 3,
    title: "Coca-Cola Pack",
    price: 5,
    img: "https://neal.fun/spend/images/coca-cola-pack.jpg",
  },
  {
    id: 4,
    title: "Movie Ticket",
    price: 12,
    img: "https://neal.fun/spend/images/movie-ticket.jpg",
  },
  {
    id: 5,
    title: "Book",
    price: 15,
    img: "https://neal.fun/spend/images/book.jpg",
  },
  {
    id: 6,
    title: "Lobster Dinner",
    price: 45,
    img: "https://neal.fun/spend/images/lobster-dinner.jpg",
  },
  {
    id: 7,
    title: "Video Game",
    price: 60,
    img: "https://neal.fun/spend/images/video-game.jpg",
  },
  {
    id: 8,
    title: "Amazon Echo",
    price: 99,
    img: "https://neal.fun/spend/images/amazon-echo.jpg",
  },
  {
    id: 9,
    title: "Year of Netflix",
    price: 100,
    img: "https://neal.fun/spend/images/year-of-netflix.jpg",
  },
  {
    id: 10,
    title: "Air Jordans",
    price: 152,
    img: "https://neal.fun/spend/images/air-jordans.jpg",
  },
  {
    id: 11,
    title: "Airpods",
    price: 199,
    img: "https://neal.fun/spend/images/airpods.jpg",
  },
  {
    id: 12,
    title: "Gaming Console",
    price: 299,
    img: "https://neal.fun/spend/images/gaming-console.jpg",
  },
  {
    id: 13,
    title: "Drone",
    price: 350,
    img: "https://neal.fun/spend/images/drone.jpg",
  },
  {
    id: 14,
    title: "Smartphone",
    price: 699,
    img: "https://neal.fun/spend/images/smartphone.jpg",
  },
  {
    id: 15,
    title: "Bike",
    price: 800,
    img: "https://neal.fun/spend/images/bike.jpg",
  },
  {
    id: 16,
    title: "Kitten",
    price: 1500,
    img: "https://neal.fun/spend/images/kitten.jpg",
  },
  {
    id: 17,
    title: "Puppy",
    price: 1500,
    img: "https://neal.fun/spend/images/puppy.jpg",
  },
  {
    id: 18,
    title: "Auto Rickshaw",
    price: 2300,
    img: "https://neal.fun/spend/images/auto-rickshaw.jpg",
  },
  {
    id: 19,
    title: "Horse",
    price: 2500,
    img: "https://neal.fun/spend/images/horse.jpg",
  },
  {
    id: 20,
    title: "Acre of Farmland",
    price: 3000,
    img: "https://neal.fun/spend/images/acre-of-farmland.jpg",
  },
  {
    id: 21,
    title: "Designer Handbag",
    price: 5500,
    img: "https://neal.fun/spend/images/designer-handbag.jpg",
  },
  {
    id: 22,
    title: "Hot Tub",
    price: 6000,
    img: "https://neal.fun/spend/images/hot-tub.jpg",
  },
  {
    id: 23,
    title: "Luxury Wine",
    price: 7000,
    img: "https://neal.fun/spend/images/luxury-wine.jpg",
  },
  {
    id: 24,
    title: "Diamond Ring",
    price: 10000,
    img: "https://neal.fun/spend/images/diamond-ring.jpg",
  },
  {
    id: 25,
    title: "Jet Ski",
    price: 12000,
    img: "https://neal.fun/spend/images/jet-ski.jpg",
  },
  {
    id: 26,
    title: "Rolex",
    price: 15000,
    img: "https://neal.fun/spend/images/rolex.jpg",
  },
  {
    id: 27,
    title: "Ford F-150",
    price: 30000,
    img: "https://neal.fun/spend/images/ford-f-150.jpg",
  },
  {
    id: 28,
    title: "Tesla",
    price: 75000,
    img: "https://neal.fun/spend/images/tesla.jpg",
  },
  {
    id: 29,
    title: "Monster Truck",
    price: 150000,
    img: "https://neal.fun/spend/images/monster-truck.jpg",
  },
  {
    id: 30,
    title: "Ferrari",
    price: 250000,
    img: "https://neal.fun/spend/images/ferrari.jpg",
  },
  {
    id: 31,
    title: "Single Family Home",
    price: 300000,
    img: "https://neal.fun/spend/images/single-family-home.jpg",
  },
  {
    id: 32,
    title: "Gold Bar",
    price: 700000,
    img: "https://neal.fun/spend/images/gold-bar.jpg",
  },
  {
    id: 33,
    title: "McDonalds Franchise",
    price: 1500000,
    img: "https://neal.fun/spend/images/mcdonalds-franchise.jpg",
  },
  {
    id: 34,
    title: "Superbowl Ad",
    price: 5250000,
    img: "https://neal.fun/spend/images/superbowl-ad.jpg",
  },
  {
    id: 35,
    title: "Yacht",
    price: 7500000,
    img: "https://neal.fun/spend/images/yacht.jpg",
  },
  {
    id: 36,
    title: "M1 Abrams",
    price: 8000000,
    img: "https://neal.fun/spend/images/m1-abrams.jpg",
  },
  {
    id: 37,
    title: "Formula 1 Car",
    price: 15000000,
    img: "https://neal.fun/spend/images/formula-1-car.jpg",
  },
  {
    id: 38,
    title: "Apache Helicopter",
    price: 31000000,
    img: "https://neal.fun/spend/images/apache-helicopter.jpg",
  },
  {
    id: 39,
    title: "Mansion",
    price: 45000000,
    img: "https://neal.fun/spend/images/mansion.jpg",
  },
  {
    id: 40,
    title: "Make a Movie",
    price: 100000000,
    img: "https://neal.fun/spend/images/make-a-movie.jpg",
  },
  {
    id: 41,
    title: "Boeing 747",
    price: 148000000,
    img: "https://neal.fun/spend/images/boeing-747.jpg",
  },
  {
    id: 42,
    title: "Mona Lisa",
    price: 780000000,
    img: "https://neal.fun/spend/images/mona-lisa.jpg",
    stock: 1,
  },
  {
    id: 43,
    title: "Skyscraper",
    price: 850000000,
    img: "https://neal.fun/spend/images/skyscraper.jpg",
  },
  {
    id: 44,
    title: "Cruise Ship",
    price: 930000000,
    img: "https://neal.fun/spend/images/cruise-ship.jpg",
  },
  {
    id: 45,
    title: "NBA Team",
    price: 2120000000,
    img: "https://neal.fun/spend/images/nba-team.jpg",
    stock: 30,
  },
];

export default products;
