export function DOMCreator() {

    const generateDIV = (name) => {
        const div = document.createElement('div')
        div.className = name
        return div
    }

    const generateWrapper = (name) => {
        const ul = document.createElement('ul')
        ul.className = name
        return ul
    }

    const generateList = (name) => {
        const il = document.createElement('il')
        il.className = name
        return il
    }

    return { generateDIV, generateWrapper, generateList }
}