
export default {
    name: 'root',
    alias: '/',
    children: [
        {
            name: 'home',
            alias: '~',
            children: [
                {
                    name: 'dan',
                    children: [
                        {
                            name: 'about.txt',
                            content: `
                                <p>I'm Dan, a Web Developer living in Piha, New Zealand,</p>
                                <p>I enjoy making things people use every day from websites with refined animations to service based applications with an emphasis on usability and maintainability.</p>
                                <p>When I'm not making stuff like this website I like hanging out with my partner Amy and my dog <a href="https://www.instagram.com/pipittheheeler">Pipit</a>.</p>
                                <p>I'm passionate about Privacy, Performance and Pizza.</p>
                            `
                        },
                        {
                            name: 'contact.txt',
                            content: `<p>Send me a message at dan@tate.nz if you're interested in working together.</p>`
                        },
                        {
                            name: 'todo.txt',
                            content: `
                                <p>There's lots to do!</p>
                                <p>Terminal</p>
                                <ul>
                                    <li>"../" Should move to the parent directory, this should be recursive so that ../../ attempts grandparent directory ect...</li>
                                    <li>Implement options in "ls" "-a" giving more ( fake ) information and "-l" long listing the files.</li>
                                    <li>Give the Terminal a theme.</li>
                                    <li>Cat should be able to take multiple files ( like how cat actually works ).</li>
                                    <li>commands should have man pages and a help command</li>
                                    <li>Implement up go through command history</li>
                                    <li>Implement tab completion</li>
                                </ul>
                                <p>Desktop</p>
                                <ul>
                                    <li>Settings application</li>
                                    <li>Double click should launch application</li>
                                </ul>
                                <p>Other</p>
                                <ul>
                                    <li>Need to implement some kind of global css for styles.</li>
                                    <li>Need a helper to parse css variables into javascript for various components.</li>
                                    <li>Read markdown files into content fields for Terminal pages.</li>
                                </ul>
                            `
                        }
                    ]
                }
            ]
        }
    ]
}
