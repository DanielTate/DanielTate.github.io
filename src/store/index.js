import { createStore } from 'vuex'
import { v4 as uuidv4 } from 'uuid'
import set_ids from '../filesystem/set_ids'
import set_paths from '../filesystem/set_paths'
import fs from '../filesystem/fs'
let FS = set_ids(fs, fs)
FS = set_paths(FS)

const store = createStore({
    state() {
        return {
            fs: FS,
            config: {
                window: {
                    decorations: {
                        labels: true,
                        close: {
                            style: {
                                background: 'var(--color-red)',
                                color: 'var(--color-white)'
                            }
                        }
                    }
                }
            }
        }
    },
    mutations: {
        toggleWindowDecorationLabels(state) {
            state.config.window.decorations.labels = !state.config.window.decorations.labels
        }
    }
})

export default store
