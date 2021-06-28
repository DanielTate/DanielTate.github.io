
const set_ids = require('../../src/filesystem/set_ids').default
const fs = require('../../src/filesystem/fs').default

test('Loops through a filesystem setting ids to every node.', () => {

    const FS = set_ids(fs, fs)

    function has_id(item) {

        expect(item.id)
            .toBeDefined()

        if(!item.children || item.children.length < 1) return

        item.children.forEach(has_id)
    }

    has_id(FS)
})

test('Loops through a filesystem setting parent ids to every child node.', () => {

    const FS = set_ids(fs, fs)

    function has_parent(item) {

        expect(item.parent)
            .toBeDefined()

        if(!item.children || item.children.length < 1) return

        item.children.forEach(has_parent)
    }

    FS.children.forEach(has_parent)
})