
const set_ids = require('../../src/filesystem/set_ids').default
const get_by_id = require('../../src/filesystem/get_by_id').default
const fs = require('../../src/filesystem/fs').default

const FS = set_ids(fs, fs)

test('Returns the corresponding node in the filesystem object.', () => {
    const node = get_by_id(FS, FS.children[0].id)

    expect(node)
        .toBeDefined()
})

test('Throws an Error if the node doesn\'t exist.', () => {

    expect(() => {
        get_by_id(FS, 'fake_id')
    }).toThrow(new Error('Node does not exist.'))
})

test('Throws an Error if the id isn\'t passed.', () => {

    expect(() => {
        get_by_id(FS)
    }).toThrow(new Error('This function requires an Id passed as the second paramater.'))
})
