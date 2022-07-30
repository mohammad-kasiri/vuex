import {createStore} from 'vuex'

// Create a new store instance.
export const store = createStore({
    state () {
        return {
            cities:
                [
                    {id: 1,  name: "New York"  , population: 8.38 , isYourChoice:false},
                    {id: 2,  name: "California", population: 39.35, isYourChoice:false},
                    {id: 3,  name: "Texas"     , population: 28.64, isYourChoice:false},
                    {id: 4,  name: "Michigan"  , population: 10.00, isYourChoice:false},
                ]
        }
    },
    getters:{
        chooseCity : (state) => (id) => {
            return state.cities.find(city => city.id === id);
        },
        chosenCities(state) {
            return state.cities.filter(city => city.isYourChoice === true);
        },
        chosenCitiesCount(state, getters) {
            return getters.chosenCities.length;
        }
    },
    mutations: {
        chooseCity(state , id) {
            let hasChosen = state.cities.find(city => city.id === id).isYourChoice;
            state.cities.find(city => city.id === id).isYourChoice = !hasChosen;
        }
    },
    actions: {
        chooseCity(context , id) {
           setTimeout(()=> {
               context.commit('chooseCity' , id);
           } , 1000)
        }
    }
})