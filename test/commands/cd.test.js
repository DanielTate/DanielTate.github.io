const cd = require('../../src/commands/cd').default

test('Expects the directory passed to exist.', () => {

    expect(() => {
        cd(FS, '/root/aaa')
    }).toThrow(new Error('aaa No such file or directory.'))
})

// test('Expects the file passed to exist but throws error because it\'s not a directory.', () => {
// 
//     expect(() => {
//         cd(FS, 'root/home/dan/about.txt')
//     }).toThrow(new Error('about.txt is not a directory.'))
// })

// test('Expects / to return root.', () => {
// 
//     expect(cd(FS, '/'))
//         .toBe(FS)
// })
// 
// test('Allow / instead of root/ in calling paths.', () => {
// 
//     expect(cd(FS, '/home'))
//         .toBe(FS.children[0])
// })
// 
// test('Expects ~ or empty to return home.', () => {
// 
//     expect(cd(FS, '~'))
//         .toBe(FS.children[0])
// 
//     expect(cd(FS))
//         .toBe(FS.children[0])
// })
// 