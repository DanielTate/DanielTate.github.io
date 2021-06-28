
/** 
 * Parses a string into an array of arguments and their values, while
 * separating options with their values passed.
 */

export default function argparse(args) {

    // Remove extra white space from string
    args = args.replace(/\s+/g, ' ').split(' ')
    let command = args.shift()

    let options = []
    let newArgs = []

    args.forEach(arg => {
        if(arg[0] === '-') {
            options.push(arg.substr(1, arg.length -1))
        } else {
            newArgs.push(arg)
        }
    });

    return {
        command,
        opts: options,
        args: newArgs
    }
}