import { v4 as uuidv4 } from 'uuid'

export default function set_ids(dir, parent, generateId = uuidv4) {
    dir.id = generateId() 

    if(!dir.children || dir.children.length < 1) return

    dir.children.forEach((child) => {
        child.parent = dir.id
        set_ids(child, dir)
    })

    return dir
} 