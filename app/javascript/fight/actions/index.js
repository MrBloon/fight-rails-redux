const BASE_URL = '/api/v1';

export const SET_PLAYER_ACTION = 'SET_PLAYER_ACTION';
export const SET_COMPUTER_ACTION = 'SET_COMPUTER_ACTION';
export const SET_ROUND_RESULT = 'SET_ROUND_RESULT';
export const SET_FINAL_RESULT = 'SET_FINAL_RESULT';
export const RESET_STATE = 'RESET_STATE';
export const UPDATE_PLAYER_HP = 'UPDATE_PLAYER_HP';
export const UPDATE_COMPUTER_HP = 'UPDATE_COMPUTER_HP';
export const UPDATE_USES = 'UPDATE_USES';
export const SET_SELECTED_SPECIAL = 'SET_SELECTED_SPECIAL';

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
