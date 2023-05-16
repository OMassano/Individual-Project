const initialState = {
  dogs: [{
    "id": 1,
    "image": "https://cdn2.thedogapi.com/images/BJa4kxc4X.jpg",
    "name": "Affenpinscher",
    "height": "23 - 29",
    "weight": "3 - 6",
    "life_span": "10 - 12 years",
    "temperaments": [
        "Stubborn",
        "Curious",
        "Playful",
        "Adventurous",
        "Active",
        "Fun-loving"
    ]
},
{
    "id": 2,
    "image": "https://cdn2.thedogapi.com/images/hMyT4CDXR.jpg",
    "name": "Afghan Hound",
    "height": "64 - 69",
    "weight": "23 - 27",
    "life_span": "10 - 13 years",
    "temperaments": [
        "Aloof",
        "Clownish",
        "Dignified",
        "Independent",
        "Happy"
    ]
},
{
    "id": 3,
    "image": "https://cdn2.thedogapi.com/images/rkiByec47.jpg",
    "name": "African Hunting Dog",
    "height": "76",
    "weight": "20 - 30",
    "life_span": "11 years",
    "temperaments": [
        "Wild",
        "Hardworking",
        "Dutiful"
    ]
},
{
    "id": 4,
    "image": "https://cdn2.thedogapi.com/images/1-7cgoZSh.jpg",
    "name": "Airedale Terrier",
    "height": "53 - 58",
    "weight": "18 - 29",
    "life_span": "10 - 13 years",
    "temperaments": [
        "Outgoing",
        "Friendly",
        "Alert",
        "Confident",
        "Intelligent",
        "Courageous"
    ]
},
{
    "id": 5,
    "image": "https://cdn2.thedogapi.com/images/26pHT3Qk7.jpg",
    "name": "Akbash Dog",
    "height": "71 - 86",
    "weight": "41 - 54",
    "life_span": "10 - 12 years",
    "temperaments": [
        "Loyal",
        "Independent",
        "Intelligent",
        "Brave"
    ]
},
{
    "id": 6,
    "image": "https://cdn2.thedogapi.com/images/BFRYBufpm.jpg",
    "name": "Akita",
    "height": "61 - 71",
    "weight": "29 - 52",
    "life_span": "10 - 14 years",
    "temperaments": [
        "Docile",
        "Alert",
        "Responsive",
        "Dignified",
        "Composed",
        "Friendly",
        "Receptive",
        "Faithful",
        "Courageous"
    ]
},
{
    "id": 7,
    "image": "https://cdn2.thedogapi.com/images/33mJ-V3RX.jpg",
    "name": "Alapaha Blue Blood Bulldog",
    "height": "46 - 61",
    "weight": "25 - 41",
    "life_span": "12 - 13 years",
    "temperaments": [
        "Loving",
        "Protective",
        "Trainable",
        "Dutiful",
        "Responsible"
    ]
},
{
    "id": 8,
    "image": "https://cdn2.thedogapi.com/images/-HgpNnGXl.jpg",
    "name": "Alaskan Husky",
    "height": "58 - 66",
    "weight": "17 - 23",
    "life_span": "10 - 13 years",
    "temperaments": [
        "Friendly",
        "Energetic",
        "Loyal",
        "Gentle",
        "Confident"
    ]
},],
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return { ...state };
  }
};

export default reducer;