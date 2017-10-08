export default (state = null , action) => {  
    switch (action.type) {
        case 'select_seats':
            return action.payload; 
        default: 
            return state;
    }
}