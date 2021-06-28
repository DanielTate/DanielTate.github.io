
export default function get_by_id(context, id) {

    if(!id) {
        throw new Error('This function requires an Id passed as the second paramater.')
    }

    if (context.id === id) return context 

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

    const result = children.find(child => (id === child.id))

    if(!result?.id) {
        throw new Error('Node does not exist.')
    }

    return result
}
