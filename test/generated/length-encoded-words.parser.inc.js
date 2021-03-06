module.exports = function (parsers) {
    parsers.inc.object = function (object = {}, $step = 0, $i = [], $I = []) {
        let $_, $bite
        return function parse ($buffer, $start, $end) {
            for (;;) {
                switch ($step) {
                case 0:

                    object = {
                        array: new Array
                    }
                    $step = 1

                case 1:

                    $_ = 0
                    $step = 2
                    $bite = 1

                case 2:

                    while ($bite != -1) {
                        if ($start == $end) {
                            return { start: $start, object: null, parse }
                        }
                        $_ += $buffer[$start++] << $bite * 8 >>> 0
                        $bite--
                    }

                    $I[0] = $_

                    $i[0] = 0

                case 3:

                    $_ = 0
                    $step = 4
                    $bite = 1

                case 4:

                    while ($bite != -1) {
                        if ($start == $end) {
                            return { start: $start, object: null, parse }
                        }
                        $_ += $buffer[$start++] << $bite * 8 >>> 0
                        $bite--
                    }

                    object.array[$i[0]] = $_

                    if (++$i[0] != $I[0]) {
                        $step = 3
                        continue
                    }
                    return { start: $start, object: object, parse: null }
                }
                break
            }
        }
    }
}
