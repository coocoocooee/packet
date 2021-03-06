module.exports = function (parsers) {
    parsers.bff.object = function () {
        return function parse ($buffer, $start, $end) {
            let $i = [], $I = []

            const object = {
                array: new Array
            }

            if ($end - $start < 2) {
                return parsers.inc.object(object, 1, $i, $I)($buffer, $start, $end)
            }

            $i[0] = 0
            $I[0] =
                $buffer[$start++] * 0x100 +
                $buffer[$start++]

            if ($end - $start < 2 * $I[0]) {
                return parsers.inc.object(object, 3, $i, $I)($buffer, $start, $end)
            }

            for (; $i[0] < $I[0]; $i[0]++) {
                object.array[$i[0]] =
                    $buffer[$start++] * 0x100 +
                    $buffer[$start++]
            }

            return { start: $start, object: object, parse: null }
        }
    }
}
