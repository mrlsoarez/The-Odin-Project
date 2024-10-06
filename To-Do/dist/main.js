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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_DOMCreator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/DOMCreator.js */ \"./src/modules/DOMCreator.js\");\n\n\nclass ToDo {\n    constructor(title, date, description, icon, isDone) {\n        this.title = title\n        this.date = date\n        this.description = description\n        this.icon = icon\n        this.isDone = isDone\n    }\n\n    checkIFDone() {\n        if (this.isDone == false) {\n            return 'red'\n        }\n        else {\n            return 'green'\n        }\n    }\n}\n\nlet PROJECTS_OVERVIEW = [{ 'Project': 0, 'Tasks': [] }]\nlet PROJECTS_DOM = ['li', 'button']\nlet PROJECTS_TOTAL = 0\n\nfunction DOMInteraction() {\n\n    const Panel_Button = document.querySelectorAll('.Panel-Button')\n    const PAGE_GENERATE = PageGenerate()\n    \n    Panel_Button.forEach((button) => {\n        button.addEventListener('click', () => {\n            \n            if (button.id == 'home') {\n                PAGE_GENERATE.home()\n            }\n            else if (button.id == 'calendar') {\n                PAGE_GENERATE.calendar()\n            }\n        })\n       \n    })\n\n    const Add_New_Projects_Button = document.querySelector('.Button')\n    const container = document.querySelector('ul')\n\n    Add_New_Projects_Button.addEventListener('click', () => {\n        addNewProject(container)\n    })\n\n\n\n    const Open_Task_Form_Buttons = document.querySelectorAll('.Toggle-Dialogue')\n    Open_Task_Form_Buttons.forEach((button) => {\n        button.addEventListener('click', () => {\n            TaskForm_Dealer(button.id)\n        })\n        button.addEventListener('mouseenter', () => {\n            button.style.cursor = 'pointer'\n            button.classList.add('Hover')\n        })\n    })\n\n\n\n\n}\n\nfunction PageGenerate() {\n\n    const main = document.querySelector('.Content')\n    const render = (0,_modules_DOMCreator_js__WEBPACK_IMPORTED_MODULE_0__.DOMCreator)()\n\n    const home = () => {\n        render.emptyness(main)\n\n        const container = render.element('section', '', 'Projects')\n        const ul = render.element('ul', '', '')\n\n        container.append(ul)\n        main.append(container)\n\n        renderProjects(ul)\n    }\n\n    const calendar = () => {\n\n        render.emptyness(main)\n\n        const container = render.element('section', '', 'Calendar')\n        const ul = render.element('ul', '', '')\n\n        const year_number = 2024\n        const months = [['January', 31], ['February', 29], ['Mars', 31], ['April', 30], ['May', 31], ['June', 30], ['July', 31], ['August', 31], ['September', 30], ['October', 31], ['November', 30], ['December', 31]]\n\n        let month_days = []\n        const year = []\n\n        function createMonths() {\n            for (let i = 0; i < months.length; i++) {\n                for (let day = 1; day <= months[i][1]; day++) {\n                    let date = new Date(`${months[i][0]} ${day}, ${year_number}`)\n                    month_days.push(date)\n                }\n                year.push([month_days])\n                month_days = []\n            }\n        }\n\n        function renderMonths() {\n\n            // Criar o nome do mês\n            function createMonth(name) {\n\n                const month = document.createElement('div')\n                const h1 = document.createElement('h1')\n\n                month.className = 'Month'\n                h1.textContent = name\n\n                month.append(h1)\n                return month\n            }\n\n            // Criar os dias dentro do mês junto com tasks\n            function createDay(day, monthIndex) {\n                const div = document.createElement('div')\n                div.innerHTML = `<p>${day}</p>`\n                //getTask(day, div, monthIndex)\n                return div\n            }\n\n            // Criar o calendário com base nos 365 indexes\n            for (let i = 0; i < year.length; i++) {\n\n                const section = document.createElement('section')\n\n                const month = createMonth(months[i][0])\n                const monthIndex = i\n\n                // Criar o mês com os dias\n                for (let day = 1; day <= year[i][0].length; day++) {\n                    const day_div = createDay(day, monthIndex)\n                    section.append(day_div)\n                }\n\n                month.append(section)\n                ul.append(month)\n            }\n\n        }\n\n        container.append(ul)\n        main.append(container)\n       \n        createMonths() // Guarda os meses em array\n        renderMonths() // Renderiza os meses em tela + junto com as tasks\n\n    }\n\n    \n    return { home, calendar }\n\n}\n\n\nfunction renderProjects(container) {\n\n    const render = (0,_modules_DOMCreator_js__WEBPACK_IMPORTED_MODULE_0__.DOMCreator)()\n\n    function renderTasks(container, index) {\n        PROJECTS_OVERVIEW[index].Tasks.forEach((task) => {\n            const li = render.element('li', '', 'Task')\n            const input = render.element('input', '', 'Task-Doner')\n            render.setAttribute(input, 'type', 'checkbox')\n            const task_icon = render.element('span', task.icon, '')\n            const task_title = render.element('span', task.title, '')\n            task_icon.style.color = task.checkIFDone()\n            const span = render.element('div', '', '')\n            span.append(task_icon, task_title)\n            li.append(span, input)\n            container.append(li)\n        })\n    }\n\n    render.emptyness(container)\n\n    for (let i = 0; i < PROJECTS_DOM.length; i++) {\n        const li = render.element('li', '', 'Project')\n        if (PROJECTS_DOM[i] == 'button') {\n            const button = render.element('button', '', 'Button')\n            button.innerHTML = \"+\"\n            li.append(button)\n            container.append(li)\n            break\n        }\n\n        const btn = render.element('button', \"<i class='bx bx-message-square-add'></i>\", 'Toggle-Dialogue')\n        btn.id = i\n        const ul = render.element('ul', '', 'Task-Wrapper')\n\n        renderTasks(ul, i)\n        li.append(btn, ul)\n        container.append(li)\n    }\n    DOMInteraction()\n\n}\n\nfunction addNewProject(container) {\n\n    function swapIndex(array) {\n\n        const last_index = array.length - 1\n        const button_index = array.length - 2\n\n        const li = array[last_index]\n        const button_li = array[button_index]\n\n        array[last_index] = button_li\n        array[button_index] = li\n\n    }\n\n\n    PROJECTS_DOM.push('li')\n    PROJECTS_OVERVIEW.push({ 'Project': PROJECTS_TOTAL += 1, 'Tasks': [] })\n\n    swapIndex(PROJECTS_DOM)\n    renderProjects(container)\n\n}\n\nfunction TaskForm_Dealer(index) {\n    const container = document.querySelector('ul')\n    function openForm() {\n        dialog.classList.add('Open')\n        main.style.filter = 'blur(5px)'\n    }\n\n    function closeForm() {\n        dialog.classList.remove('Open')\n        main.style.filter = 'blur(0px)'\n        submit.removeEventListener('click', submitHandler)\n    }\n\n    function submitHandler(e) {\n        e.preventDefault()\n        const form = document.querySelector('form')\n        const formData = new FormData(form)\n\n        PROJECTS_OVERVIEW[index].Tasks.push(\n            new ToDo(\n                formData.get('task'),\n                formData.get('date'),\n                formData.get('description'),\n                formData.get('icon'),\n                false\n            )\n        )\n\n        renderProjects(container)\n        closeForm()\n    }\n\n    const close = document.querySelector('#close')\n    const dialog = document.querySelector('.Add')\n    const main = document.querySelector('main')\n    const submit = document.querySelector('#submit')\n\n    if (!(dialog.className.includes('Open'))) {\n        openForm()\n        submit.addEventListener('click', submitHandler)\n    }\n\n    close.addEventListener('click', () => {\n        if (dialog.className.includes('Open')) {\n            closeForm()\n        }\n    })\n}\n\n\n\n\n//# sourceURL=webpack://to-do/./src/index.js?");

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