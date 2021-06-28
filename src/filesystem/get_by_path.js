
export default function get_by_path(context, path) {

    if(!path) {
        throw new Error('This function requires a path passed as the second parameter.')
    }

    if (context.path === path) return context 

    let children = []

    function flatten(dir) {
        dir.children.forEach(child => {
            children.push(child)
            if(child.children) {
                flatten(child)
            }
        })
    }

    flatten(context)

    const result = children.find(child => (path === child.path))

    if(!result?.path) {
        throw new Error('Node with this path does not exist.')
    }

    return result
}
