const argparse = require('../../src/methods/argparse').default

test('Parses arguments into expected format, { command: command, args: [...args], opts: [...opts] }', () => {

    expect(argparse('cat about.txt')).toStrictEqual({
        command: 'cat',
        opts: [],
        args: [
            'about.txt'
        ]
    })

    expect(argparse("ls -l")).toStrictEqual({
        command: 'ls',
        opts: ['l'],
        args: []
    })

    expect(argparse("ls -l /")).toStrictEqual({
        command: 'ls',
        opts: ['l'],
        args: ['/']
    })

    expect(argparse("ls -l / -a")).toStrictEqual({
        command: 'ls',
        opts: [
            'l',
            'a'
        ],
        args: [
            '/'
        ]
    })
})
