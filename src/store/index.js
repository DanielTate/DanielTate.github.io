import { createStore } from 'vuex'
import { v4 as uuidv4 } from 'uuid'
import { createFileSystem } from '../filesystem'

const store = createStore({
    state() {
        return {
            fs: createFileSystem()
        }
    }
})

export default store
