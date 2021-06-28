
import { v4 as uuidv4 } from 'uuid'

// Base filesystem we will decorate
const FS = {
    name: 'root',
    children: [
        {
            name: 'home',
            children: [
                {
                    name: 'dan',
                    children: [
                        {
                            name: 'about.txt',
                            content: `
                                <p>I'm Dan, a Web Developer living in Piha, New Zealand,</p>
                                <p>I really enjoy making things people use every day from websites with cool animations to service based applications with an emphasis on usability and maintainability.</p>
                                <p>When I'm not making stuff like this website I like hanging out with my partner Amy and my dog Pipit.</p>
                                <p>I'm passionate about Privacy, Performance and Pizzaz.</p>
                            `
                        },
                        {
                            name: 'contact.txt',
                            content: `<p>Send me a message at dan@tate.nz if you're interested in working together.</p>`
                        }
                    ]
                }
            ]
        }
    ]
}

function get_by_path(filesystem, path) {

    if (filesystem.path === path) return filesystem 

    let children = []

    function flatten(dir) {
        dir.children.forEach(child => {
            children.push(child)
            if(child.children) {
                flatten(child)
            }
        })
    }

    flatten(filesystem)

    return children.find(child => (path === child.path.join('/')))
}

function get_by_id(filesystem, id) {

    if (filesystem.id === id) return filesystem 

    let children = []

    function flatten(dir) {
        dir.children.forEach(child => {
            children.push(child)
            if(child.children) {
                flatten(child)
            }
        })
    }

    flatten(FS)

    return children.find(child => (id === child.id))
}

function set_ids(dir, parent) {
    dir.id = uuidv4() 

    if(!dir.children || dir.children.length < 1) return

    dir.children.forEach((child) => {
        child.parent = dir.id
        set_ids(child, dir)
    })

    return dir
} 

function set_paths(filesystem, dir, path, get_by_id) {

    dir.path = [dir.name]

    if(dir.parent) {
        dir.path = get_by_id(filesystem, dir.parent).path.concat(dir.path)
    }

    if(!dir.children || dir.children.length < 1) return

    dir.children.forEach((child) => {
        set_paths(filesystem, child, null)
    })

    return filesystem
}

function createFileSystem(SCAFFOLD = FS) {

    let filesystem = set_ids(SCAFFOLD, null)
    filesystem = set_paths(filesystem, filesystem, null)

    return filesystem 
}

export {
    createFileSystem,
    get_by_id,
    get_by_path,
    set_paths
}
