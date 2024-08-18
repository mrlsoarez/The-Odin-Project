/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_DOMCreator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/DOMCreator */ \"./src/modules/DOMCreator.js\");\n\n\n\nclass ToDo {\n    constructor (title, date, description, icon, isDone) {\n        this.title = title \n        this.date = date\n        this.description = description\n        this.icon = icon\n        this.isDone = isDone\n    }\n    \n    checkIFDone() {\n        if (this.isDone == false) {\n            return 'red'\n        }\n        else {\n            return 'green'\n        }\n    }\n}\n\nlet PROJECTS_OVERVIEW = [{'Project': 0, 'Tasks': []}]\nlet PROJECTS_DOM = ['li', 'button']\nlet PROJECTS_TOTAL = 0\n\nfunction DOMInteraction() {\n\n    const Panel_Button = document.querySelectorAll('.Panel-Button')\n    const PAGE_GENERATE = PageGenerate()\n    Panel_Button.forEach((button) => {\n        button.addEventListener('click', () => {\n            if (button.id == 'home') {\n                PAGE_GENERATE.home()\n            }\n            else if (button.id == 'calendar') {\n                PAGE_GENERATE.calendar() \n            }\n        })\n        button.addEventListener('mouseenter', () => {\n            button.style.cursor = 'pointer'\n            button.style.color = 'var(--font-color-hover-panel)'\n        })\n        button.addEventListener('mouseleave', () => {\n            button.style.cursor = 'cursor'\n            button.style.color = 'var(--font-color)'\n        })\n    })\n    \n    const Add_New_Projects_Button = document.querySelector('.Button')\n    const container = document.querySelector('ul')\n\n    Add_New_Projects_Button.addEventListener('click', () => {\n        addNewProject(container)\n    })\n    \n    \n\n    const Open_Task_Form_Buttons = document.querySelectorAll('.Toggle-Dialogue')\n    Open_Task_Form_Buttons.forEach((button) => {\n        button.addEventListener('click', () => {\n            TaskForm_Dealer(button.id)\n        })\n        button.addEventListener('mouseenter', () => {\n            button.style.cursor = 'pointer'\n            button.classList.add('Hover')\n        })\n    })\n\n    \n   \n    \n}\n\nfunction PageGenerate() {\n\n    const main = document.querySelector('.Content')\n    const render = (0,_modules_DOMCreator__WEBPACK_IMPORTED_MODULE_0__.DOMCreator)() \n    \n    const home = () => {\n        render.emptyness(main)\n\n        const container = render.element('section', '', 'Projects')\n        const h1 = render.element('h1', 'TO-DO', 'Title')\n        const ul = render.element('ul', '', '')\n\n        container.append(h1, ul)\n        main.append(container)\n\n        renderProjects(ul)\n    }\n\n    const calendar = () => {\n        render.emptyness(main)\n\n        const container = render.element('section', '', 'Calendar')\n        const h1 = render.element('h1', 'Calendar', 'Title')\n        const ul = render.element('ul', '', '')\n\n        container.append(h1, ul)\n        main.append(container)\n    }\n    return {home, calendar}\n}\n\nfunction renderProjects(container) {\n\n    const render = (0,_modules_DOMCreator__WEBPACK_IMPORTED_MODULE_0__.DOMCreator)()\n\n    function renderTasks(container, index) {\n        PROJECTS_OVERVIEW[index].Tasks.forEach((task) => {\n            const li = render.element('li', '', 'Task')\n            const input = render.element('input', '', 'Task-Doner')\n            render.setAttribute(input, 'type', 'checkbox')\n            const span = render.element('span', task.title, '')\n            span.style.color = task.checkIFDone()\n            li.append(input, span)\n            container.append(li)\n        })\n    }\n\n    render.emptyness(container)\n\n    for (let i = 0; i < PROJECTS_DOM.length; i++) {   \n        const li = render.element('li', '', 'Project')\n        if (PROJECTS_DOM[i] == 'button') {\n            const button = render.element('button', '', 'Button')\n            li.append(button)\n            container.append(li)\n            break    \n        }\n\n        const title = render.element('h2', 'Title', 'Project-Title')\n        const btn = render.element('button', \"<i class='bx bx-message-square-add'></i>\", 'Toggle-Dialogue')\n        btn.id = i\n        const ul = render.element('ul', '', 'Task-Wrapper')\n\n        renderTasks(ul, i)\n        li.append(title, btn, ul)\n        container.append(li)\n    }\n    DOMInteraction()\n\n}\n\nfunction addNewProject(container) {\n    \n    function swapIndex(array) {\n\n    const last_index = array.length - 1\n    const button_index = array.length - 2\n\n    const li = array[last_index]\n    const button_li = array[button_index]\n\n    array[last_index] = button_li\n    array[button_index] = li\n\n    }  \n\n\n    PROJECTS_DOM.push('li')\n    PROJECTS_OVERVIEW.push({'Project': PROJECTS_TOTAL += 1, 'Tasks': []})\n\n    swapIndex(PROJECTS_DOM)   \n    renderProjects(container)\n\n}\n\nfunction TaskForm_Dealer(index) {\n    const container = document.querySelector('ul')\n    function openForm() {\n        dialog.classList.add('Open')\n        main.style.filter = 'blur(5px)'\n    }\n\n    function closeForm() {\n        dialog.classList.remove('Open')\n        main.style.filter = 'blur(0px)'\n        submit.removeEventListener('click', submitHandler)\n    }\n\n    function submitHandler(e) {\n        e.preventDefault()\n        const form = document.querySelector('form')\n        const formData = new FormData(form)\n\n        PROJECTS_OVERVIEW[index].Tasks.push(\n            new ToDo(\n                formData.get('task'),\n                formData.get('date'),\n                formData.get('description'),\n                formData.get('icon'),\n                false\n            )\n        )\n\n        renderProjects(container)\n        closeForm()\n    }\n    \n    const close = document.querySelector('#close')\n    const dialog = document.querySelector('.Add')\n    const main = document.querySelector('main')\n    const submit = document.querySelector('#submit')\n\n    if (!(dialog.className.includes('Open'))) {\n        openForm()\n        submit.addEventListener('click', submitHandler)\n    }\n\n    close.addEventListener('click', () => {\n        if (dialog.className.includes('Open')) {\n            closeForm()\n        }\n    })\n}\n\n\n//renderProjects()\ndocument.addEventListener('DOMContentLoaded', () => { PageGenerate().home()})\n/*\nfunction DOMInteraction() {\n    const ul = document.querySelector('ul')\n    generateNewProjects(PROJECTS_DOM, ul)\n    const task_form = document.querySelectorAll('.Task-Form')\n    TaskForm_Dealer(task_form)\n    renderTasks()\n}\n  \nfunction renderTasks() {\n    const project = document.querySelectorAll('.Project')\n    const wrapper = document.querySelector('.Task-Wrapper')\n    for (let i = 0; i < project.length; i++) {\n        for (let q=0; q < PROJECTS_OVERVIEWW.length; q++) {\n            if (i == PROJECTS_OVERVIEWW[q].Project) {\n                if (PROJECTS_OVERVIEWW[q].Tasks == 'button') {\n                    const il = document.createElement('il')\n                    const button = document.createElement('button')\n                    button.innerHTML = 'Create'\n                    openForm(button)\n                    il.append(button)\n                    wrapper.append(il)\n                }\n            }\n        }\n    }\n}\n\nfunction openForm(button) {\n    button.addEventListener('click', () => {\n        console.log(button)\n    })\n}\n// Função para trocar os dois index do array e jogar o botão p/ final\nfunction swapIndex(array) {\n\n    const last_index = array.length - 1\n    const button_index = array.length - 2\n\n    const li = array[last_index]\n    const button_li = array[button_index]\n\n    array[last_index] = button_li\n    array[button_index] = li\n\n}\n\n// Evento de clique para adicionar novo projeto\nfunction addEvent(btn) {\n\n    const ul = document.querySelector('ul')\n\n    btn.addEventListener('click', () => {\n        PROJECTS_DOM.push('li')\n        container.push({'Project': project_total += 1, 'Tasks': ['button']})\n        swapIndex(PROJECTS_DOM)\n        generateNewProjects(PROJECTS_DOM, ul)\n    })\n\n}\n\n//Geração de novo projeto com base no array\nfunction generateNewProjects(array, ul) {\n\n    const render = renderProject()\n    let container \n\n    clearAllSpace(ul)\n\n    array.forEach((index) => {\n\n        if (index == 'li') {\n            container = render.container()\n            render.title(container)\n            render.tasks_form(container)\n        }\n        if (index == 'button') {\n            container = render.button()\n            addEvent(container)\n        }\n      \n\n        ul.append(container)\n\n    })\n\n}\n\n\n// Geração do projeto e interno do projeto com função auxiliar\nfunction renderProject() {\n    const builderDOM = DOMCreator()\n\n    const container = () => {\n        const list = builderDOM.generateList('Project')\n        return list\n    }\n\n    const button = () => {\n        const button = builderDOM.generateList('Project')\n        button.innerHTML = '<button>+</button>'\n        return button\n    }\n\n    const title = (container) => {\n\n        const title = builderDOM.generateDIV('Project-Title')\n        const input = document.createElement('input')\n        input.setAttribute('placeholder', 'Insira o título!')\n        title.append(input)\n\n        container.append(title)\n    }\n\n    const tasks_form = (container) => {\n        const ul = document.createElement('ul')\n        ul.className = 'Task-Wrapper'\n        container.append(ul) \n        return container\n        /*\n        const tasks_form = builderDOM.generateWrapper('tasks_form')\n\n        const default_task = builderDOM.generateWrapper('Task')\n        const checkbox = document.createElement('input')\n        checkbox.setAttribute('type', 'checkbox')\n        const input = document.createElement('input')\n        default_task.append(checkbox, input)\n\n        tasks_form.append(default_task)\n        container.append(tasks_form)\n    }\n    \n    return { container, button, title, tasks_form }\n}\n\n// Remove todos os elementos das DIVS\nfunction clearAllSpace(DIV) {\n    while (DIV.hasChildNodes()) {\n        DIV.removeChild(DIV.firstChild)\n    }\n}\n\nfunction TaskForm_Dealer(task_form) {\n    console.log(task_form, 'a')    \n    for (let i=0; i < task_form.length; i++) {\n        task_form[i].addEventListener('click', (e) => {\n            const form = document.createElement('form')\n            const input1 = document.createElement\n            e.preventDefault()\n        })\n    } \n}\n\n\n\n\n\ndocument.addEventListener('DOMContentLoaded', DOMInteraction)\n\n\n*/\n/*\nlet projects = []\n\nasync function DOMInteraction() {\n    activateDialogue()\n    openProject()\n    openCalendar()\n}\n\n\n\nfunction activateDialogue() {\n\n    const toggle = document.querySelector('.Toggle-Dialogue')\n    const close = document.querySelector('#close')\n    const dialog = document.querySelector('.Add')\n    const main = document.querySelector('main')\n    \n    toggle.addEventListener('click', () => {\n        if (!(dialog.className.includes('Open'))) {\n            dialog.classList.add('Open')\n        }\n        main.style.filter = 'blur(5px)'\n    })\n    \n    close.addEventListener('click', () => {\n        if (dialog.className.includes('Open')) {\n            dialog.classList.remove('Open')\n            main.style.filter = 'blur(0px)'\n        }\n    })\n\n}\n\n\nfunction closeDialogue() {\n    const dialog = document.querySelector('.Add')\n    const main = document.querySelector('main')\n    dialog.classList.remove('Open')\n    main.style.filter = 'blur(0px)'\n}\n\nfunction openProject() {\n\n    class Project {\n        constructor(name, icon, tasks_form = []) {\n            this.name = name\n            this.icon = icon\n            this.tasks_form = tasks_form\n        }\n    }\n\n    const form = document.querySelector('form')\n\n    function getProjectForm() {\n\n        function addNewProject() {\n\n            const title = document.querySelector('#project').value\n            const icon = document.querySelector('select').value\n\n            const li = document.createElement('li')\n\n            const button = document.createElement('button')\n            button.className = 'Project-Page'\n            button.id = title\n            button.innerHTML = icon\n\n            li.append(button)\n\n            document.querySelector('ul').append(li)\n            projects.push(new Project(title, icon))\n            form.reset()\n            \n        }\n        \n        addNewProject()\n        openNewProject(projects)\n\n    }\n\n    const submit = document.querySelector('#submit')\n    submit.addEventListener('click', (e) => {\n        e.preventDefault()\n        closeDialogue()\n        getProjectForm()\n    })\n\n}\n\nfunction openNewProject(projects) {\n\n    const pages = document.querySelectorAll('.Project-Page')\n    const content = document.querySelector('main')\n    const rendering = render()\n\n    for (let i = 0; i < pages.length; i++) {\n        pages[i].addEventListener('click', () => {\n            deleteContent(content)\n            // content.classList.remove('Calendar')\n            rendering.project(projects[i].name, projects[i].icon, projects[i].tasks_form)\n        })\n\n    }\n\n}\n\nfunction openCalendar() {\n\n    const calendar = document.querySelector('.Calendar-Button')\n    const content = document.querySelector('main')\n    const rendering = render()\n    \n    calendar.addEventListener('click', () => {\n        deleteContent(content)\n        const tasks_form = []\n        for (let i = 0; i < projects.length; i++) {\n            tasks_form.push(projects[i].tasks_form)\n        }\n        content.classList.add('Calendar')\n        rendering.calendar(tasks_form)\n    })\n}\n\nfunction deleteContent(content) {\n    while (content.hasChildNodes()) {\n        content.removeChild(content.firstChild)\n    }\n}\n\ndocument.addEventListener('DOMContentLoaded', DOMInteraction)\n*/\n\n\n//# sourceURL=webpack://to-do/./src/index.js?");

/***/ }),

/***/ "./src/modules/DOMCreator.js":
/*!***********************************!*\
  !*** ./src/modules/DOMCreator.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   DOMCreator: () => (/* binding */ DOMCreator)\n/* harmony export */ });\nfunction DOMCreator() {\n\n    const element = (type, content, class_name) => {\n        const element = document.createElement(type)\n        element.innerHTML = content\n        element.className = class_name\n        return element\n    }\n    const emptyness = (container) => {\n        while (container.hasChildNodes()) {\n            container.removeChild(container.firstChild)\n        }\n    }\n    const setAttribute = (container, attribute, type) => {\n        container.setAttribute(attribute, type)\n    }\n    \n    return { element, emptyness, setAttribute }\n\n}\n\n//# sourceURL=webpack://to-do/./src/modules/DOMCreator.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;