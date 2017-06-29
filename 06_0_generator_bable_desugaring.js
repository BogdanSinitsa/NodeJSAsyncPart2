///////////////BEFORE/////////////////////
function* doSth() {
    yield 'Hello 1';
    yield 'hello 2';
}

///////////////AFTER//////////////////////
var _marked = [doSth].map(regeneratorRuntime.mark);

function doSth() {
    return regeneratorRuntime.wrap(function doSth$(_context) {
        while (1) {
            switch (_context.prev = _context.next) {
                case 0:
                    _context.next = 2;
                    return 'Hello 1';

                case 2:
                    _context.next = 4;
                    return 'hello 2';

                case 4:
                case 'end':
                    return _context.stop();
            }
        }
    }, _marked[0], this);
}