import { Hotel } from "../types/Hotel";

export const mockHotelData: Hotel = {
  id: 1,
  name: "Shinagawa Prince Hotel",
  rating: 7.7,
  stars: 4,
  address: "108-8611 Tokyo Prefecture, Minato-ku, Takanawa 4-10-30, Japan",
  photo: "https://d2ey9sqrvkqdfs.cloudfront.net/ZqSQ/i1_t.jpg",
  price: 120,
  description:
    "<p>Boasting 15 food and beverage options, 2 swimming pools, and its own aquarium, Prince Hotel is right next to JR Shinagawa Train Station, from where Haneda Airport is only a 25-minute train ride away. This 39-storey hotel offers beautiful Tokyo views and free WiFi throughout the entire hotel.</p> <br> <p>The air-conditioned rooms at Shinagawa Prince Hotel have a fridge and an en suite bathroom with a bathtub and shower booth. Free toiletries and a hairdryer are provided. Guests will also find a personal locker in the room.</p> <br> <p>By train, Shibuya is 5 stops away and Shinjuku is a 16-minute ride. Tokyo Station is an 11-minute train ride away. Direct buses to and from Narita Airport stop at the hotel.</p> <br> <p>A city within a city, the hotel has its own movie theatre, bowling alley and tennis courts. Guests can enjoy a visit to the karaoke bar. The hotel also features a 24-hour front desk, indoor and outdoor pools, a sauna facility and massage services. Currency exchange service is available. Guests will find drink vending machines and a cash machine on site.</p> <br> <p>The 39th-floor Dining & Bar Table 9 Tokyo offers one of Tokyo’s best views. Restaurants serves unique Western cuisine, grill and steaks, while the bar lounge offers fusion tapas and drinks including whiskey, cocktails, sake and champagne. </p> <br> <p>Minato is a great choice for travellers interested in clean streets, friendly locals and culture.</p>",
  reviews: [
    {
      user: {
        name: "Kenbo",
        location: "Tokyo",
      },
      rating: 2,
      title: "Disappointing",
      description:
        "The women staff at fresh restaurant were unhelpful and unfriendly. I booked for grand deluxe 2 bed bay view non smoking but they gave me a smoking grand deluxe room instead. The room stinks so bad my aunt and my mom and myself could not sleep. I have asthma, and that makes it more even worst. All night i have palpitations and could hardly breathe. And the chocolate in a small box that is suppose to be a welcoming gift was empty and whoever among the staff who took/ate the chocolate Had the decency to leave the wrapper inside the box. I'm not a big fan of those welcoming chocolate gift since i am not a chocolate freak myself but hopefully the hotel manager will read this and perhaps make him/her more aware and be more vigilant in checking or monitoring your staff activities. This is bad for business especially for foreign guests. This is a 4 star hotel...but the service is so poor and disappointing and I do not wish to come back into this hotel ever again.",
    },
    {
      user: {
        name: "Litz",
        location: "Phillipines",
      },
      rating: 5,
      title: "Excellent",
      description:
        "Free upgrade Large and clean room Accessible to the airport",
    },
    {
      user: {
        name: "Fizbo",
        location: "Ontario",
      },
      rating: 4,
      title: "Excellent",
      description:
        "Very clean. Staff is gracious. 7 minutes to the International airport. I just wish they have shuttle buses that would pick up and drop off guests for free",
    },
    {
      user: {
        name: "Kevin",
        location: "Calgary, A.B.",
      },
      rating: 3.5,
      title: "Ok",
      description:
        "Average would be a great word to sum up my experience. The price is a little high for a hotel delivering mediocre service. The staff was ok. The hotel is newer and clean. The atmosphere was a little cold and unfriendly. The breakfast buffet was very good though. Good location near the airport and mall of Asia. Smoking in casino may bother some people.",
    },
    {
      user: {
        name: "Martin",
        location: "KL, Malaysia",
      },
      rating: 4,
      title: "Excellent except for Smoke",
      description:
        "This is a beautiful hotel, casino resort. It truly is 5 star. Only thing that is disappointing is the smell of cigarettes everywhere. Being from Australia, where smoking is banned almost everywhere, it's a shame this place doesn't have enclosed space for smoking so the non smoking gambling people can breath without inhaling second hand cancerous fumes. This place really needs it and should realize there are a lot more non smoking gamblers than the smoking ones. The non smoking gamblers have more money as well.",
    },
  ],
};
