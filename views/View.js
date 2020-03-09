const tag = '[View]'

export default {
    init(el) {
        if(!el) throw el
        this.el = el
        return el
    },
    on(event, handler) {
        this.el.addEventListener(event, handler)
        return this
    }
}