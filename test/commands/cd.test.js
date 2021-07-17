const fs = require('../../src/filesystem/fs').default
const set_ids = require('../../src/filesystem/set_ids').default
const set_paths = require('../../src/filesystem/set_paths').default
const get_by_path = require('../../src/filesystem/get_by_path').default
const cd = require('../../src/commands/cd').default

let FS = set_ids(fs, fs)
FS = set_paths(FS)

test('Expects an error if directory passed doesn\'t exist.', () => {

    expect(() => {
        cd(FS, 'root/aaa')
    }).toThrow(new Error('aaa No such file or directory.'))
})

test('Expects the file passed to exist but throws error because it\'s not a directory.', () => {

    expect(() => {
        cd(FS, 'root/home/dan/about.txt')
    }).toThrow(new Error('about.txt is not a directory.'))
})

test('Expects / to return root.', () => {

    expect(cd(FS, '/'))
        .toBe(FS)
})

test('Expects ~ to return root/home/dan.', () => {

    expect(cd(FS, '~'))
        .toBe(FS.children[0].children[0])
})

test('Allow / instead of root/ in calling paths.', () => {

    expect(cd(FS, '/home'))
        .toBe(FS.children[0])
})

test('Expects ~ empty to return home.', () => {

    expect(cd(FS, '~'))
        .toBe(FS.children[0].children[0])

    expect(cd(FS))
        .toBe(FS.children[0].children[0])
})
