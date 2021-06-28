
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
