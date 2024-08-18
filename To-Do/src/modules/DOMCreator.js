export function DOMCreator() {

    const element = (type, content, class_name) => {
        const element = document.createElement(type)
        element.innerHTML = content
        element.className = class_name
        return element
    }
    const emptyness = (container) => {
        while (container.hasChildNodes()) {
            container.removeChild(container.firstChild)
        }
    }
    const setAttribute = (container, attribute, type) => {
        container.setAttribute(attribute, type)
    }
    
    return { element, emptyness, setAttribute }

}