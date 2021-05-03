const BASE_URL = '/api/v1/heros';

export const SET_SELECTED_CLASS = 'SET_SELECTED_CLASS';
export const HERO_CREATED = 'HERO_CREATED';

export function setSelectedClass(classname) {
  return {
    type: SET_SELECTED_CLASS,
    payload: classname
  };
}

export function createHero(name, classtype) {
  const body = {name, classtype};
  const csrfToken = document.querySelector('meta[name="csrf-token"]').attributes.content.value;
  const promise = fetch(BASE_URL, {
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
    type: HERO_CREATED,
    payload: promise
  };
}
