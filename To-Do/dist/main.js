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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_DOMCreator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/DOMCreator */ \"./src/modules/DOMCreator.js\");\n\n\nconst projects_DOM = ['li', 'button']\n\nfunction DOMInteraction() {\n    const ul = document.querySelector('ul')\n    generateNewProjects(projects_DOM, ul)\n}\n\n// Função para trocar os dois index do array e jogar o botão p/ final\nfunction swapIndex(array) {\n\n    const last_index = array.length - 1\n    const button_index = array.length - 2\n\n    const li = array[last_index]\n    const button_li = array[button_index]\n\n    array[last_index] = button_li\n    array[button_index] = li\n\n}\n\n// Evento de clique para adicionar novo projeto\nfunction addEvent(btn) {\n\n    const ul = document.querySelector('ul')\n\n    btn.addEventListener('click', () => {\n        projects_DOM.push('li')\n        swapIndex(projects_DOM)\n        generateNewProjects(projects_DOM, ul)\n    })\n\n}\n\n//Geração de novo projeto com base no array\nfunction generateNewProjects(array, ul) {\n\n    const render = renderProject()\n    let container \n\n    clearAllSpace(ul)\n\n    array.forEach((index) => {\n\n        if (index == 'li') {\n            container = render.container()\n            render.title(container)\n            render.tasks(container)\n        }\n        if (index == 'button') {\n            container = render.button()\n            addEvent(container)\n        }\n\n        ul.append(container)\n\n    })\n\n}\n\n\n// Geração do projeto e interno do projeto com função auxiliar\nfunction renderProject() {\n    const builderDOM = (0,_modules_DOMCreator__WEBPACK_IMPORTED_MODULE_0__.DOMCreator)()\n\n    const container = () => {\n        const list = builderDOM.generateList('Project')\n        return list\n    }\n\n    const button = () => {\n        const button = builderDOM.generateList('Project')\n        button.innerHTML = '<button>+</button>'\n        return button\n    }\n\n    const title = (container) => {\n\n        const title = builderDOM.generateDIV('Project-Title')\n        const input = document.createElement('input')\n        input.setAttribute('placeholder', 'Insira o título!')\n        title.append(input)\n\n        container.append(title)\n    }\n\n    const tasks = (container) => {\n        const tasks = builderDOM.generateWrapper('Tasks')\n\n        const default_task = builderDOM.generateWrapper('Task')\n        const checkbox = document.createElement('input')\n        checkbox.setAttribute('type', 'checkbox')\n        const input = document.createElement('input')\n        default_task.append(checkbox, input)\n\n        tasks.append(default_task)\n        container.append(tasks)\n    }\n\n    return { container, button, title, tasks }\n}\n\n// Remove todos os elementos das DIVS\nfunction clearAllSpace(DIV) {\n    while (DIV.hasChildNodes()) {\n        DIV.removeChild(DIV.firstChild)\n    }\n}\n\n\n\n\n\ndocument.addEventListener('DOMContentLoaded', DOMInteraction)\n\n\n/*\nvar projects = []\n\nasync function DOMInteraction() {\n    activateDialogue()\n    openProject()\n    openCalendar()\n}\n\n\n\nfunction activateDialogue() {\n\n    const toggle = document.querySelector('.Toggle-Dialogue')\n    const close = document.querySelector('#close')\n    const dialog = document.querySelector('.Add')\n    const main = document.querySelector('main')\n    \n    toggle.addEventListener('click', () => {\n        if (!(dialog.className.includes('Open'))) {\n            dialog.classList.add('Open')\n        }\n        main.style.filter = 'blur(5px)'\n    })\n    \n    close.addEventListener('click', () => {\n        if (dialog.className.includes('Open')) {\n            dialog.classList.remove('Open')\n            main.style.filter = 'blur(0px)'\n        }\n    })\n\n}\n\n\nfunction closeDialogue() {\n    const dialog = document.querySelector('.Add')\n    const main = document.querySelector('main')\n    dialog.classList.remove('Open')\n    main.style.filter = 'blur(0px)'\n}\n\nfunction openProject() {\n\n    class Project {\n        constructor(name, icon, tasks = []) {\n            this.name = name\n            this.icon = icon\n            this.tasks = tasks\n        }\n    }\n\n    const form = document.querySelector('form')\n\n    function getProjectForm() {\n\n        function addNewProject() {\n\n            const title = document.querySelector('#project').value\n            const icon = document.querySelector('select').value\n\n            const li = document.createElement('li')\n\n            const button = document.createElement('button')\n            button.className = 'Project-Page'\n            button.id = title\n            button.innerHTML = icon\n\n            li.append(button)\n\n            document.querySelector('ul').append(li)\n            projects.push(new Project(title, icon))\n            form.reset()\n            \n        }\n        \n        addNewProject()\n        openNewProject(projects)\n\n    }\n\n    const submit = document.querySelector('#submit')\n    submit.addEventListener('click', (e) => {\n        e.preventDefault()\n        closeDialogue()\n        getProjectForm()\n    })\n\n}\n\nfunction openNewProject(projects) {\n\n    const pages = document.querySelectorAll('.Project-Page')\n    const content = document.querySelector('main')\n    const rendering = render()\n\n    for (let i = 0; i < pages.length; i++) {\n        pages[i].addEventListener('click', () => {\n            deleteContent(content)\n            // content.classList.remove('Calendar')\n            rendering.project(projects[i].name, projects[i].icon, projects[i].tasks)\n        })\n\n    }\n\n}\n\nfunction openCalendar() {\n\n    const calendar = document.querySelector('.Calendar-Button')\n    const content = document.querySelector('main')\n    const rendering = render()\n    \n    calendar.addEventListener('click', () => {\n        deleteContent(content)\n        const tasks = []\n        for (let i = 0; i < projects.length; i++) {\n            tasks.push(projects[i].tasks)\n        }\n        content.classList.add('Calendar')\n        rendering.calendar(tasks)\n    })\n}\n\nfunction deleteContent(content) {\n    while (content.hasChildNodes()) {\n        content.removeChild(content.firstChild)\n    }\n}\n\ndocument.addEventListener('DOMContentLoaded', DOMInteraction)\n*/\n\n//# sourceURL=webpack://to-do/./src/index.js?");

/***/ }),

/***/ "./src/modules/DOMCreator.js":
/*!***********************************!*\
  !*** ./src/modules/DOMCreator.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   DOMCreator: () => (/* binding */ DOMCreator)\n/* harmony export */ });\nfunction DOMCreator() {\n\n    const generateDIV = (name) => {\n        const div = document.createElement('div')\n        div.className = name\n        return div\n    }\n\n    const generateWrapper = (name) => {\n        const ul = document.createElement('ul')\n        ul.className = name\n        return ul\n    }\n\n    const generateList = (name) => {\n        const il = document.createElement('il')\n        il.className = name\n        return il\n    }\n\n    return { generateDIV, generateWrapper, generateList }\n}\n\n//# sourceURL=webpack://to-do/./src/modules/DOMCreator.js?");

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