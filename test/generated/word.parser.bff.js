module.exports = function (parsers) {
    parsers.bff.object = function () {
        return function parse ($buffer, $start, $end) {
            const object = {
                word: 0
            }

            if ($end - $start < 4) {
                return parsers.inc.object(object, 1)($buffer, $start, $end)
            }

            object.word =
                $buffer[$start++] * 0x1000000 +
                $buffer[$start++] * 0x10000 +
                $buffer[$start++] * 0x100 +
                $buffer[$start++]

            return { start: $start, object: object, parse: null }
        }
    }
}
