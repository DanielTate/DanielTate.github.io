const seperator = '/'

export default function set_paths(dir, parent) {

    if(parent === undefined) {
        dir.path = dir.name 
    } else {
        dir.path = `${parent.path}${seperator}${dir.name}`
    }

    if(!dir.children || dir.children.length < 1) return

    dir.children.forEach((child) => {
        set_paths(child, dir)
    })

    return dir
} 
