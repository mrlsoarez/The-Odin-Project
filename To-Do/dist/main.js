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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_render__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/render */ \"./src/modules/render.js\");\n\n\nvar projects = []\n\nasync function DOMInteraction() {\n    activateDialogue()\n    openProject()\n    openCalendar()\n}\n\n\n\nfunction activateDialogue() {\n\n    const toggle = document.querySelector('.Toggle-Dialogue')\n    const close = document.querySelector('#close')\n    const dialog = document.querySelector('.Add')\n    const main = document.querySelector('main')\n    \n    toggle.addEventListener('click', () => {\n        if (!(dialog.className.includes('Open'))) {\n            dialog.classList.add('Open')\n        }\n        main.style.filter = 'blur(5px)'\n    })\n    \n    close.addEventListener('click', () => {\n        if (dialog.className.includes('Open')) {\n            dialog.classList.remove('Open')\n            main.style.filter = 'blur(0px)'\n        }\n    })\n\n}\n\n\nfunction closeDialogue() {\n    const dialog = document.querySelector('.Add')\n    const main = document.querySelector('main')\n    dialog.classList.remove('Open')\n    main.style.filter = 'blur(0px)'\n}\n\nfunction openProject() {\n\n    class Project {\n        constructor(name, icon, tasks = []) {\n            this.name = name\n            this.icon = icon\n            this.tasks = tasks\n        }\n    }\n\n    const form = document.querySelector('form')\n\n    function getProjectForm() {\n\n        function addNewProject() {\n\n            const title = document.querySelector('#project').value\n            const icon = document.querySelector('select').value\n\n            const li = document.createElement('li')\n\n            const button = document.createElement('button')\n            button.className = 'Project-Page'\n            button.id = title\n            button.innerHTML = icon\n\n            li.append(button)\n\n            document.querySelector('ul').append(li)\n            projects.push(new Project(title, icon))\n            form.reset()\n            \n        }\n        \n        addNewProject()\n        openNewProject(projects)\n\n    }\n\n    const submit = document.querySelector('#submit')\n    submit.addEventListener('click', (e) => {\n        e.preventDefault()\n        closeDialogue()\n        getProjectForm()\n    })\n\n}\n\nfunction openNewProject(projects) {\n\n    const pages = document.querySelectorAll('.Project-Page')\n    const content = document.querySelector('main')\n    const rendering = (0,_modules_render__WEBPACK_IMPORTED_MODULE_0__.render)()\n\n    for (let i = 0; i < pages.length; i++) {\n        pages[i].addEventListener('click', () => {\n            deleteContent(content)\n            // content.classList.remove('Calendar')\n            rendering.project(projects[i].name, projects[i].icon, projects[i].tasks)\n        })\n\n    }\n\n}\n\nfunction openCalendar() {\n\n    const calendar = document.querySelector('.Calendar-Button')\n    const content = document.querySelector('main')\n    const rendering = (0,_modules_render__WEBPACK_IMPORTED_MODULE_0__.render)()\n    \n    calendar.addEventListener('click', () => {\n        deleteContent(content)\n        const tasks = []\n        for (let i = 0; i < projects.length; i++) {\n            tasks.push(projects[i].tasks)\n        }\n        content.classList.add('Calendar')\n        rendering.calendar(tasks)\n    })\n}\n\nfunction deleteContent(content) {\n    while (content.hasChildNodes()) {\n        content.removeChild(content.firstChild)\n    }\n}\n\ndocument.addEventListener('DOMContentLoaded', DOMInteraction)\n\n//# sourceURL=webpack://to-do/./src/index.js?");

/***/ }),

/***/ "./src/modules/render.js":
/*!*******************************!*\
  !*** ./src/modules/render.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   render: () => (/* binding */ render)\n/* harmony export */ });\nclass Task {\n    constructor(project, name, date, section) {\n        this.project = project\n        this.name = name\n        this.date = date\n        this.section = section\n    }\n}\n\nfunction render() {\n\n    const content = document.querySelector('main')\n\n    // Renderiza a página de projeto\n    const project = (name, icon, tasks) => {\n\n        // Criar o título = nome + icon\n        function createTitle() {\n            const h1 = document.createElement('h1')\n            h1.textContent = icon + ' ' + name\n            content.append(h1)\n        }\n\n        // Input para inserir a task\n        function createInput() {\n\n            const form = document.createElement('form')\n\n            const section = document.createElement('section')\n            const label = document.createElement('label')\n            label.textContent = 'Insira a sua tarefa: '\n            const input = document.createElement('input')\n            input.setAttribute('type', 'text')\n            input.id = 'task'\n\n            const section2 = document.createElement('section')\n            const label2 = document.createElement('label')\n            label2.textContent = 'Insira a data para finalizar a tarefa: '\n            const input2 = document.createElement('input')\n            input2.setAttribute('type', 'date')\n            input2.id = 'date'\n\n            const submit = document.createElement('input')\n            submit.setAttribute('type', 'submit')\n            submit.id = 'add-task'\n            submit.setAttribute('value', 'Add')\n\n            section.append(label, input)\n            section2.append(label2, input2)\n            form.append(section, section2, submit)\n            content.append(form)\n\n        }\n\n        // Criação das tasks\n        function createTask() {\n\n            const section = document.createElement('section')\n            const label = document.createElement('label')\n            const task = document.createElement('input')\n\n            section.className = 'Task'\n\n            const div_task = document.createElement('div')\n            div_task.id = 'task-container'\n\n            const input = document.querySelector('#task')\n            const input2 = document.querySelector('#date')\n\n            task.setAttribute('type', 'checkbox')\n            const close = document.createElement('span')\n            close.className = 'checkmark'\n            close.innerHTML = 'X'\n\n            div_task.append(task, label)\n            label.textContent = input.value\n\n            section.append(div_task, close)\n            content.append(section)\n\n            tasks.push(new Task(name, input.value, input2.value, section))\n\n            task.addEventListener('click', () => {\n                label.style.textDecoration = 'line-through'\n            })\n        }\n\n        // Renderização do array com tasks\n        function renderTask(tasks) {\n            for (let i = 0; i < tasks.length; i++) {\n                content.append(tasks[i].section)\n            }\n        }\n\n        createTitle()\n        createInput()\n        renderTask(tasks)\n\n        const submit = document.querySelector('#add-task')\n\n        submit.addEventListener('click', (e) => {\n            e.preventDefault()\n            createTask()\n        })\n    }\n\n    const calendar = (tasks) => {\n        \n        function createCalendar() {\n\n            const year_number = 2024\n            const months = [['January', 31], ['February', 29], ['Mars', 31], ['April', 30], ['May', 31], ['June', 30], ['July', 31], ['August', 31], ['September', 30], ['October', 31], ['November', 30], ['December', 31]]\n\n            let month_days = []\n            const year = []\n\n            function createMonths() {\n                for (let i = 0; i < months.length; i++) {\n                    for (let day = 1; day <= months[i][1]; day++) {\n                        let date = new Date(`${months[i][0]} ${day}, ${year_number}`)\n                        month_days.push(date)\n                    }\n                    year.push([month_days])\n                    month_days = []\n                }\n            }\n\n            function renderMonths() {\n\n                // Criar o nome do mês\n                function createMonth(name) {\n\n                    const month = document.createElement('div')\n                    const h1 = document.createElement('h1')\n\n                    month.className = 'Month'\n                    h1.textContent = name\n\n                    month.append(h1)\n                    return month\n                }\n\n                // Criar os dias dentro do mês junto com tasks\n                function createDay(day, monthIndex) {\n                    const div = document.createElement('div')\n                    div.innerHTML = `<p>${day}</p>`\n                    getTask(day, div, monthIndex)\n                    return div\n                }\n\n                // Criar o calendário com base nos 365 indexes\n                for (let i = 0; i < year.length; i++) {\n\n                    const section = document.createElement('section')\n\n                    const month = createMonth(months[i][0])\n                    const monthIndex = i\n\n                    // Criar o mês com os dias\n                    for (let day = 1; day <= year[i][0].length; day++) {\n                        const day_div = createDay(day, monthIndex)\n                        section.append(day_div)   \n                    }\n\n                    month.append(section)\n                    content.append(month)\n                }\n\n            }\n\n            function getTask(day, div, monthIndex) {\n\n                function renderTask(task, div) {\n\n                    function createButton() {\n                        const button = document.createElement('button')\n                        button.id = 'task'\n                        button.innerHTML = task.project\n                        return button\n                    }\n\n                    function createTaskWindow() {\n                        const window = document.createElement('div2')\n                        window.className = 'Window'\n                        window.innerHTML = `TASK DO DIA: ${task.name}`\n                        return window\n                    }\n\n                    const button = createButton()\n                    const window = createTaskWindow()\n\n                    div.append(button, window)\n\n                }\n                // Loop para renderizar as tasks com base na data\n                for (let i = 0; i < tasks.length; i++) {\n                    for (let q = 0; q < tasks[i].length; q++) {\n                        const task = tasks[i][q]\n                        const date = new Date(task.date)\n                        const calendary_day = date.getDate(date.setDate(date.getDate() + 1))\n                        // Verifica se a data no calendário bate com a task (mês, dia)\n                        if (calendary_day == day && date.getMonth() == monthIndex) { renderTask(task, div) }\n                    }\n                }\n            }\n\n            createMonths() // Guarda os meses em array\n            renderMonths() // Renderiza os meses em tela + junto com as tasks\n\n        }\n\n        function hoverTask() {\n            const task = document.querySelectorAll('#task')\n            const div2 = document.querySelectorAll('.Window')\n            console.log(task, div2, 'hovertask')\n            task.forEach((t) => {\n                t.addEventListener('mouseenter', () => {\n                    div2.forEach((d) => {\n                        d.classList.add('Open')\n                        d.classList.remove('Closed')\n                    })\n                })\n                t.addEventListener('mouseleave', () => {\n                    div2.forEach((d) => {\n                        d.classList.add('Closed')\n                        d.classList.remove('Open')\n                    })\n                })\n            })\n        }\n\n        createCalendar()\n        hoverTask()\n    }\n\n    return { project, calendar }\n}\n\n\n\n\n\n//# sourceURL=webpack://to-do/./src/modules/render.js?");

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