///////////////BEFORE/////////////////////
function* doSth() {
    for (let i = 0; i < 5; i++) {
        yield 'Hello 1';
        yield 'hello 2';
    }
}

///////////////AFTER//////////////////////
var _marked = [doSth].map(regeneratorRuntime.mark);

function doSth() {
    var i;
    return regeneratorRuntime.wrap(function doSth$(_context) {
        while (1) {
            switch (_context.prev = _context.next) {
                case 0:
                    i = 0;

                case 1:
                    if (!(i < 5)) {
                        _context.next = 9;
                        break;
                    }

                    _context.next = 4;
                    return 'Hello 1';

                case 4:
                    _context.next = 6;
                    return 'hello 2';

                case 6:
                    i++;
                    _context.next = 1;
                    break;

                case 9:
                case 'end':
                    return _context.stop();
            }
        }
    }, _marked[0], this);
}