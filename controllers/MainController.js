// views
import ExpenditureView from '../views/ExpenditureView.js'

// models
import ExpenditureModel from '../models/ExpenditureModel.js'

const tag = '[MainController]'

export default {
    init() {
        ExpenditureView.setup(document.querySelector('#expenditure'))
            .on('@submit', data => this.onSubmit(data))
    },
    onSubmit(data) {
        console.log(tag, 'onSubmit()', data)
        var promise = this.putExpenditure(data.detail)
        this.resetExpenditures(promise)
    },
    putExpenditure(data) {
        console.log(tag, 'putExpenditure()', data)
        return ExpenditureModel.putExpenditure(data)
    },
    resetExpenditures(promise) {
        promise.then(stat => {
            debugger
            if(stat === 200)
                console.log('writing file success')
        })
    }
}