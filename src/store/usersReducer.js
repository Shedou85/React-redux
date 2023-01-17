const usersDefaultState = {
   mainUsers: [
      {
         name: 'Marius',
         lastname : 'Dainys',
         id: 1,
      },
      {
         name: 'Marina',
         lastname : 'Mariniene',
         id: 2,
      },
      {
         name: 'Milana',
         lastname : 'Milanyte',
         id: 3,
      },
      {
         name: 'Daniil',
         lastname : 'Daniilov',
         id: 4,
      }
   ],
   selectedUser: {}
};

const SELECT_USER = 'SELECT_USER';
const ADD_USER = 'ADD_USER';
const DELETE_USER = 'DELETE_USER';
const EDIT_USER = 'EDIT_USER';

export const usersReducer = (state = usersDefaultState, action) => {
   switch (action.type) {
      case SELECT_USER:
         return {
            ...state,
            selectedUser: action.payload
         };
      case ADD_USER:
         return {
            ...state,
            mainUsers: [...state.mainUsers, action.payload]
         };
      case DELETE_USER:
         return {
            ...state,
            mainUsers: state.mainUsers.filter(user => user.id !== action.payload)
         };
      case EDIT_USER:
         return {
            ...state,
            mainUsers: state.mainUsers.map(user => {
               if (user.id === action.payload.id) {
                  return {
                     ...user,
                     ...action.payload
                  };
               } else {
                  return user;
               }
            })
         };
      default:
         return state;
   }
};

export const selectUserActionCenter = (payload) => {
   return {
      type: SELECT_USER,
      payload
   };
};
export const addUserAction = (payload) => {
   return {
      type: ADD_USER,
      payload
   };
};
export const deleteUserActionCenter = (payload) => {
   return {
      type: DELETE_USER,
      payload
   };
};
export const editUserActionCenter = (payload) => {
   return {
      type: EDIT_USER,
      payload
   };
};

