import ExpenditureView from '../views/ExpenditureView.js'
const tag = '[MainController]'

export default {
    init() {
        ExpenditureView.setup(document.querySelector('#expenditure'))
    }
}