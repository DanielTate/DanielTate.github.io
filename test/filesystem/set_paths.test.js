const get_by_id = require('../../src/filesystem/get_by_id').default
const set_paths = require('../../src/filesystem/set_paths').default
const set_ids = require('../../src/filesystem/set_ids').default
const fs = require('../../src/filesystem/fs').default

let FS = set_ids(fs, fs)
FS = set_paths(FS)

test("Returns error if path doesn't exist.", () => {

    expect(FS.path)
        .toBeDefined()

    expect(FS.path)
        .toBe('root')
})

test('Nodes have their name and parents name in it. Not including the root name.', () => {

    const seperator = '/'

    function hasExpectedPath(dir) {

        if(dir.parent === undefined)  {
            expect(dir.path)
                .toBe(dir.name)
        } else {
            const parent = get_by_id(FS, dir.parent)
            const expected = `${parent.path}${seperator}${dir.name}`
            expect(dir.path)
                .toBe(expected)
        }

        if(dir.children && dir.children.length > 0) {

            dir.children.forEach(child => {
                hasExpectedPath(child)
            })
        }
    }

    hasExpectedPath(FS)
})

