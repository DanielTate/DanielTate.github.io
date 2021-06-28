const cat = require('../../src/commands/cat').default

const context = [
    {
        name: 'file.txt',
        content: `file contents`
    },
]

test('Returns the file contents if it exists.', () => {

    expect(cat(context, ["file.txt"]))
        .toBe('file contents')
})