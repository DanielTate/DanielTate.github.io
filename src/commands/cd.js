// const get_by_path = require('../../src/filesystem/get_by_path').default
import get_by_path from '../../src/filesystem/get_by_path'

const TOKENS = [
    {
        key: '/',
        value: 'root'
    },
    {
        key: '~',
        value: 'root/home/dan'
    },
    {
        key: '',
        value: 'root/home/dan'
    }
]


export default function cd(context, path='', opts) {

    let result = false

    const exists = TOKENS.find(token => token.key === path)
    const first = TOKENS.find(token => token.key === path[0])

    if(first) {
        path = first.value + path.substr(0, path.length)
    }

    if(exists !== undefined) {
        path = exists.value
    }

    try {
        result = get_by_path(context, path)
    } catch(e) {
        throw new Error(`${path.split('/').pop()} No such file or directory.`)
    }

    if(result.content) {
        throw new Error(`${path.split('/').pop()} is not a directory.`)
    }

    return result
}
