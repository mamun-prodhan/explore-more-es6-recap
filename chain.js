const user = {
  id: 5001,
  name: "shoriful Raj",
  address: {
    street: {
      fist: "uttor side",
      second: "poribag er goli",
      third: "no dorai",
    },
    city:'Dhaka'
  },
};
const user2 = {
  id: 5001,
  name: "shoriful Raj",
  address: {
    city:'Dhaka'
  },
};

console.log(user.address.street.second);
console.log(user2.address?.street?.second);
