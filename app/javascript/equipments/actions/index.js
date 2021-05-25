export const SET_SELECTED_EQUIPMENT = 'SET_SELECTED_EQUIPMENT';
export const INCREASE_EQUIPMENT_QUANTITY = 'INCREASE_EQUIPMENT_QUANTITY';
export const DECREASE_GOLD_AMOUNT = 'DECREASE_GOLD_AMOUNT';

export function setSelectedEquipment(equipment) {
  return {
    type: SET_SELECTED_EQUIPMENT,
    payload: equipment
  };
}

export function increaseEquipmentQuantity(equipment) {
  const url = `api/v1/equipments`;
  const csrfToken = document.querySelector('meta[name="csrf-token"]').attributes.content.value;
  const body = {
    "name": equipment.name,
    "quantity": equipment.quantity,
    "description": equipment.description
  };

  const promise = fetch(url, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'X-CSRF-Token': csrfToken
    },
    credentials: 'same-origin',
    body: JSON.stringify(body)
  }).then(r => r.json());
  return {
    type: INCREASE_EQUIPMENT_QUANTITY,
    payload: promise
  };
}

export function decreaseGoldAmount(newGoldAmount) {
  const csrfToken = document.querySelector('meta[name="csrf-token"]').attributes.content.value;

  const body = {newGoldAmount};

  const request = fetch(`api/v1/equipments`, {
    method: 'PATCH',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'X-CSRF-Token': csrfToken
    },
    credentials: 'same-origin',
    body: JSON.stringify(body)
  }).then(response => response.json())

  return {
    type: DECREASE_GOLD_AMOUNT,
    payload: newGoldAmount
  };
}

