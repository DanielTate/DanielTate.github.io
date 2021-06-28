const set_ids = require('../../src/filesystem/set_ids').default
const set_paths = require('../../src/filesystem/set_paths').default
const get_by_path = require('../../src/filesystem/get_by_path').default
const fs = require('../../src/filesystem/fs').default

let FS = set_ids(fs, fs)
FS = set_paths(FS)

test('Returns the corresponding node in the filesystem object.', () => {

    const node = get_by_path(FS, 'root')

    expect(node.path)
        .toBeDefined()

    const home = get_by_path(FS, 'root/home')

    expect(home)
        .toBeDefined()
})