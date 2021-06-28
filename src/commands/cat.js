export default function cat(context, args, opts) {

    let output =  ''

    if(args.length === 0 && opts === 0) {
        output = 'cat requires an argument or option to be passed. Try seeing what you can pass by typing ls.'
    }

    if(opts && opts.length && opts.indexOf('-help') > -1) {
        output = `
            <p>Usage: cat [option]... [FILE]...</p>
            <p>Concatenate File(s) to standard output.</p>
            <table>
                <tr>
                    <td>--help</td><td>display this help and exit</td>
                </tr>
            </table>
        `
    }

    let exists = context.find(child => {
        return child.name === args[0]
    })

    if(exists) {
        output = exists.content
    }

    return output
}
