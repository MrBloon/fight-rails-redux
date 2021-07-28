const BASE_URL = '/api/v1';

export const SET_PLAYER_HERO = 'SET_PLAYER_HERO';
export const SET_COMPUTER_HERO = 'SET_COMPUTER_HERO';
export const CREATE_FIGHT = 'CREATE_FIGHT';
export const SET_PLAYER_ACTION = 'SET_PLAYER_ACTION';
export const SET_SELECTED_EQUIPMENT_LIST = 'SET_SELECTED_EQUIPMENT_LIST';
export const UPDATE_EQUIPMENT_LIST = 'UPDATE_EQUIPMENT_LIST';
export const SET_COMPUTER_ACTION = 'SET_COMPUTER_ACTION';
export const SET_ROUND_RESULT = 'SET_ROUND_RESULT';
export const SET_FINAL_RESULT = 'SET_FINAL_RESULT';
export const RESET_STATE = 'RESET_STATE';
export const UPDATE_PLAYER_HP = 'UPDATE_PLAYER_HP';
export const UPDATE_PLAYER_EXPERIENCE = 'UPDATE_PLAYER_EXPERIENCE';
export const UPDATE_COMPUTER_HP = 'UPDATE_COMPUTER_HP';
export const UPDATE_USES = 'UPDATE_USES';
export const SET_SELECTED_SPECIAL = 'SET_SELECTED_SPECIAL';

export function setPlayerHero(playerHero) {
  return {
    type: SET_PLAYER_HERO,
    payload: playerHero
  };
}

export function setComputerHero(computerHero) {
  return {
    type: SET_COMPUTER_HERO,
    payload: computerHero
  };
}

export function setSelectedEquipmentList(equipment) {
  return {
    type: SET_SELECTED_EQUIPMENT_LIST,
    payload: equipment
  };
}

export function updateEquipmentList(equipment) {
  return {
    type: UPDATE_EQUIPMENT_LIST,
    payload: equipment
  };
}

export function createFight(callback) {
  const url = "/api/v1/fights";
  const csrfToken = document.querySelector('meta[name="csrf-token"]').attributes.content.value;
  const promise = fetch(url, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'X-CSRF-Token': csrfToken
    },
    credentials: 'same-origin',
    body: JSON.stringify()
  }).then(r => r.json())
    .then(callback);

  return {
    type: CREATE_FIGHT,
    payload: promise
  }
}

export function setPlayerAction(playerAction) {
  return {
    type: SET_PLAYER_ACTION,
    payload: playerAction
  };
}

export function setComputerAction(computerAction) {
  return {
    type: SET_COMPUTER_ACTION,
    payload: computerAction
  };
}

export function setRoundResult(roundResult) {
  return {
    type: SET_ROUND_RESULT,
    payload: roundResult
  };
}

export function resetState() {
  return {
    type: RESET_STATE
  };
}

export function updatePlayerHP(playerHP) {
  return {
    type: UPDATE_PLAYER_HP,
    payload: playerHP
  };
}

export function updateComputerHP(computerHP) {
  return {
    type: UPDATE_COMPUTER_HP,
    payload: computerHP
  };
}

export function updatedUses(uses) {
  return {
    type: UPDATE_USES,
    payload: uses
  };
}

export function setSelectedSpecial(special) {
  return {
    type: SET_SELECTED_SPECIAL,
    payload: special
  };
}

export function setFinalResult(finalResult) {
  return {
    type: SET_FINAL_RESULT,
    payload: finalResult
  };
}

export function updatePlayerExperience(newExperience, fightId) {
  const csrfToken = document.querySelector('meta[name="csrf-token"]').attributes.content.value;

  const body = {newExperience};

  const request = fetch(`${BASE_URL}/fights/${fightId}`, {
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
    type: UPDATE_PLAYER_EXPERIENCE,
    payload: request
  };

}
