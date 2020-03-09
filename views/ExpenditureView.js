import View from './View.js'

const tag = '[ExpenditureView]'

const ExpenditureView = Object.create(View)

ExpenditureView.setup = function (el) {
    console.log(tag, 'setup()')
    this.init(el)
    this.bindEvents()
    return this
}

ExpenditureView.bindEvents = function () {
    this.on('keyup', e => this.onKeyup(e))
}

ExpenditureView.onKeyup = function (e) {
    const enter = 13
    if(e.keyCode !== enter) return
    console.log(tag, 'onKeyup()', e.keyCode)
}

export default ExpenditureView