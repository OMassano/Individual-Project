// creates an intial state for all dogs, in this case the api would be the intial state
const initialState = {
  dogs: [
    {
      id: 1,
      name: "Affenpinscher",
      image: {
        id: "BJa4kxc4X",
        width: 1600,
        height: 1199,
        url: "https://cdn2.thedogapi.com/images/BJa4kxc4X.jpg",
      },
      height: "9 - 11.5",
      weight: "6-13",
      life_span: "10 - 12 years",
      temperament: [
        "Stubborn",
        "Curious",
        "Playful",
        "Adventurous",
        "Active",
        "Fun-loving",
      ],
    },
    {
      id: 2,
      name: "Afghan Hound",
      image: {
        id: "hMyT4CDXR",
        width: 606,
        height: 380,
        url: "https://cdn2.thedogapi.com/images/hMyT4CDXR.jpg",
      },
      height: "25-27",
      weight: "50 - 60",
      life_span: "10 - 13 years",
      temperament: ["Aloof", "Clownish", "Dignified", "Independent", "Happy"],
    },
    {
      id: 3,
      name: "African Hunting Dog",
      image: {
        id: "rkiByec47",
        width: 500,
        height: 335,
        url: "https://cdn2.thedogapi.com/images/rkiByec47.jpg",
      },
      height: "30",
      weight: "44-66",
      life_span: "11 years",
      temperament: ["Wild", "Hardworking", "Dutiful"],
    },
    {
      id: 4,
      name: "Airedale Terrier",
      image: {
        id: "1-7cgoZSh",
        width: 645,
        height: 430,
        url: "https://cdn2.thedogapi.com/images/1-7cgoZSh.jpg",
      },
      height: "21-23",
      weight: "40-65",
      life_span: "10 - 13 years",
      temperament: [
        "Outgoing",
        "Friendly",
        "Alert",
        "Confident",
        "Intelligent",
        "Courageous",
      ],
    },
  ],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return { ...state };
  }
};

export default reducer;
