const jsonfile = require('jsonfile')

// temp json file for checking in and out
const file = './history/test.json'
export default {
    putExpenditure(obj) {
        return jsonfile.writeFile(file, obj)
                .then(res => 200)
                .catch(() => 500)
    },
    getExpenditures() {
        return jsonfile.readFile(file)
                .then(obj => obj)
                .catch(() => 500)
    }
}