module.exports = function (sizeOf) {
    sizeOf.object = function (object) {
        let $_ = 0

        $_ += 2
        $_ += 2 * object.array.length

        return $_
    }
}
