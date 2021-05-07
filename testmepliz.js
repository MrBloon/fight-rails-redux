const userEquipments = [
  {
    "id": 30,
    "name": "Shield",
    "created_at": "2021-05-07T07:15:58.332Z",
    "updated_at": "2021-05-07T07:15:58.332Z",
    "user_id": 23,
    "quantity": 1,
    "description": "+1 hit points"
  },
  {
    "id": 31,
    "name": "Bow",
    "created_at": "2021-05-07T07:26:56.485Z",
    "updated_at": "2021-05-07T07:26:56.485Z",
    "user_id": 23,
    "quantity": 1,
    "description": "+1 ranged attack"
  }
];

const equipments = [
  {
    "name": "Sword",
    "quantity": 0,
    "price": 100,
    "description": "+1 melee attack"
  },
  {
    "name": "Shield",
    "quantity": 0,
    "price": 100,
    "description": "+1 hit points"
  },
  {
    "name": "Armour",
    "quantity": 0,
    "price": 200,
    "description": "+2 hit points"
  },
];

console.log(equipments);

userEquipments.forEach((userEquipment) => {
  equipments.forEach((equipment) => {
    if(userEquipment.name === equipment.name) {
      equipment.quantity = userEquipment.quantity
    }
  })
})

console.log(equipments);


