import axios from "axios";

export const getCards = ({ commit }) => {
    axios.get('https://area-doctor.herokuapp.com/api/testimonials/featured')
    .then(response => {
        commit('SET_CARDS', response.data)
    })
}