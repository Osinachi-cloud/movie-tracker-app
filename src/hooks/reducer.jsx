export const initialState = {
    favorites:[],
};



const reducer = (state, action)=> {
    console.log(action);
    console.log(state.favorites)
    switch(action.type){
        case 'ADD_TO_FAVORITES':
            console.log(state.favorites)
            console.log(action.item.id)
            const newIndex = state.favorites.findIndex((favoritesItem)=> favoritesItem.id === action.item.id);
            if(newIndex >=0){
                console.log(...state.favorites)
                return [state.favorites]
            }
            return {
              
                ...state,
                favorites: [...state.favorites, action.item],
            };
            case "REMOVE_FROM_FAVORITES":
           const index = state.favorites.findIndex((favoritesItem)=> favoritesItem.id === action.id);
           let newfavorite = [...state.favorites];
           if (index >=0){
               newfavorite.splice(index,1)
            } else {
                console.warn(
                    `cant remove product (id:${action.id}) as its not in basket!`
                )
            }
        
            return{
                ...state,
                favorites: newfavorite
            }
            default:
                return state;
    }
};
export default reducer;