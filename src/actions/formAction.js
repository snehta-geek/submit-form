
export const GET_FORM_DATA='GET_FORM_DATA'
export const formAction = payload => {
    return {
      type: GET_FORM_DATA,
      payload,
    }
  };
