(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/dindigital/Desktop/github-explorer/angular/src/main.ts */"zUnb");


/***/ }),

/***/ "12M8":
/*!***********************************************************!*\
  !*** ./src/app/services/repository/repository.service.ts ***!
  \***********************************************************/
/*! exports provided: RepositoryService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RepositoryService", function() { return RepositoryService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../environments/environment */ "AytR");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");




class RepositoryService {
    constructor(http) {
        this.http = http;
    }
    getRepositoryData(repository) {
        return this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].urlApi}repos/${repository}`);
    }
    getIssue(repository) {
        return this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].urlApi}repos/${repository}/issues`);
    }
    getLocalRepository() {
        const storagedRepositories = localStorage.getItem(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].storageKey);
        return storagedRepositories ? JSON.parse(storagedRepositories) : [];
    }
    setRepository(repositories) {
        localStorage.setItem(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].storageKey, JSON.stringify(repositories));
    }
}
RepositoryService.ɵfac = function RepositoryService_Factory(t) { return new (t || RepositoryService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
RepositoryService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: RepositoryService, factory: RepositoryService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RepositoryService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "28wQ":
/*!*****************************************************************************!*\
  !*** ./src/app/components/list-repositories/list-repositories.component.ts ***!
  \*****************************************************************************/
/*! exports provided: ListRepositoriesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListRepositoriesComponent", function() { return ListRepositoriesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _bar_info_bar_info_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../bar-info/bar-info.component */ "xFg+");





const _c0 = function (a1, a2) { return ["/repositorios", a1, a2]; };
function ListRepositoriesComponent_li_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-bar-info", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const repository_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](5, _c0, repository_r1.owner.login, repository_r1.name));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", repository_r1.full_name)("description", repository_r1.description)("avatar", repository_r1.owner.avatar_url)("alt", repository_r1.owner.login);
} }
class ListRepositoriesComponent {
    constructor() { }
    ngOnInit() {
    }
}
ListRepositoriesComponent.ɵfac = function ListRepositoriesComponent_Factory(t) { return new (t || ListRepositoriesComponent)(); };
ListRepositoriesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ListRepositoriesComponent, selectors: [["app-list-repositories"]], inputs: { repositories: "repositories" }, decls: 2, vars: 1, consts: [[1, "list"], [4, "ngFor", "ngForOf"], [3, "routerLink"], [3, "title", "description", "avatar", "alt"]], template: function ListRepositoriesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ListRepositoriesComponent_li_1_Template, 3, 8, "li", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.repositories);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _bar_info_bar_info_component__WEBPACK_IMPORTED_MODULE_3__["BarInfoComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbGlzdC1yZXBvc2l0b3JpZXMvbGlzdC1yZXBvc2l0b3JpZXMuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ListRepositoriesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-list-repositories',
                templateUrl: './list-repositories.component.html',
                styleUrls: ['./list-repositories.component.scss']
            }]
    }], function () { return []; }, { repositories: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "64xH":
/*!**********************************************************!*\
  !*** ./src/app/pages/repository/repository.component.ts ***!
  \**********************************************************/
/*! exports provided: RepositoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RepositoryComponent", function() { return RepositoryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_repository_repository_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/repository/repository.service */ "12M8");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _components_repository_info_repository_info_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/repository-info/repository-info.component */ "f9PL");
/* harmony import */ var _components_lists_list_issues_list_issues_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/lists/list-issues/list-issues.component */ "y+k7");






class RepositoryComponent {
    constructor(repositoryService, route) {
        this.repositoryService = repositoryService;
        this.route = route;
    }
    ngOnInit() {
        this.route.params.subscribe((params) => {
            const repository = `${params.owner}/${params.repository}`;
            this.repositoryService.getRepositoryData(repository).subscribe(repositories => {
                this.repository = repositories;
            });
            this.repositoryService.getIssue(repository).subscribe(issues => {
                this.issues = issues;
            });
        });
    }
}
RepositoryComponent.ɵfac = function RepositoryComponent_Factory(t) { return new (t || RepositoryComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_repository_repository_service__WEBPACK_IMPORTED_MODULE_1__["RepositoryService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"])); };
RepositoryComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RepositoryComponent, selectors: [["app-repository"]], decls: 3, vars: 2, consts: [[1, "about"], [3, "repository"], [3, "issues"]], template: function RepositoryComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-repository-info", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-list-issues", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("repository", ctx.repository);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("issues", ctx.issues);
    } }, directives: [_components_repository_info_repository_info_component__WEBPACK_IMPORTED_MODULE_3__["RepositoryInfoComponent"], _components_lists_list_issues_list_issues_component__WEBPACK_IMPORTED_MODULE_4__["ListIssuesComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3JlcG9zaXRvcnkvcmVwb3NpdG9yeS5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RepositoryComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-repository',
                templateUrl: './repository.component.html',
                styleUrls: ['./repository.component.scss']
            }]
    }], function () { return [{ type: src_app_services_repository_repository_service__WEBPACK_IMPORTED_MODULE_1__["RepositoryService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }]; }, null); })();


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    urlApi: "https://api.github.com/",
    storageKey: "@GithubExplorer:repositories"
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "MGot":
/*!*************************************************************************!*\
  !*** ./src/app/components/form-repository/form-repository.component.ts ***!
  \*************************************************************************/
/*! exports provided: FormRepositoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormRepositoryComponent", function() { return FormRepositoryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");




const _c0 = ["form"];
function FormRepositoryComponent_span_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Digite o autor/nome do reposit\u00F3rio");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c1 = function (a0) { return { "error": a0 }; };
class FormRepositoryComponent {
    constructor() {
        this.submit = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() {
    }
    reset() {
        this.value = " ";
    }
    onSubmit(e) {
        e.preventDefault();
        this.submit.emit(this.value);
        this.reset();
    }
}
FormRepositoryComponent.ɵfac = function FormRepositoryComponent_Factory(t) { return new (t || FormRepositoryComponent)(); };
FormRepositoryComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FormRepositoryComponent, selectors: [["app-form-repository"]], viewQuery: function FormRepositoryComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.form = _t.first);
    } }, outputs: { submit: "submit" }, decls: 7, vars: 6, consts: [["novalidate", "", 3, "submit"], ["form", "ngForm"], ["type", "text", "name", "repository", "required", "true", "placeholder", "Digite o nome do repositorio aqui", 3, "ngClass", "ngModel", "ngModelChange"], ["repository", "ngModel"], ["type", "submit", 3, "disabled"], ["class", "error", 4, "ngIf"], [1, "error"]], template: function FormRepositoryComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("submit", function FormRepositoryComponent_Template_form_submit_0_listener($event) { return ctx.onSubmit($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "input", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function FormRepositoryComponent_Template_input_ngModelChange_2_listener($event) { return ctx.value = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Pesquisar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, FormRepositoryComponent_span_6_Template, 2, 0, "span", 5);
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c1, _r1.invalid && !_r1.pristine))("ngModel", ctx.value);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", _r0.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r1.invalid && !_r1.pristine);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]], styles: ["form[_ngcontent-%COMP%] {\n  display: flex;\n  margin-top: 40px;\n  max-width: 700px;\n}\n\ninput[_ngcontent-%COMP%] {\n  border: 2px solid #fff;\n  border-radius: 5px 0 0 5px;\n  border-right: none;\n  color: #a3a3a3;\n  flex: 1;\n  height: 70px;\n  padding: 0 24px;\n  font-family: Roboto;\n  font-size: 20px;\n  line-height: 23px;\n}\n\ninput.error[_ngcontent-%COMP%] {\n  border-color: #c53030;\n  color: #c53030;\n  margin-top: 0;\n}\n\ninput[_ngcontent-%COMP%]::placeholder {\n  color: #a8a8b3;\n}\n\n.error[_ngcontent-%COMP%] {\n  color: #c53030;\n  display: block;\n  font-size: 16px;\n  font-weight: 700;\n  margin-top: 8px;\n}\n\nbutton[_ngcontent-%COMP%] {\n  background: #04d361;\n  border: none;\n  border-radius: 0 5px 5px 0;\n  color: #ffffff;\n  font-size: 18px;\n  font-weight: bold;\n  height: 70px;\n  line-height: 21px;\n  transition: 0.2s ease-in-out background-color;\n  width: 210px;\n}\n\nbutton[_ngcontent-%COMP%]:hover {\n  background: #026f33;\n}\n\nbutton[_ngcontent-%COMP%]:disabled {\n  cursor: not-allowed;\n  opacity: 0.6;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9mb3JtLXJlcG9zaXRvcnkvZm9ybS1yZXBvc2l0b3J5LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUFDRjs7QUFFQTtFQUNFLHNCQUFBO0VBQ0EsMEJBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxPQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQUNGOztBQUNFO0VBQ0UscUJBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtBQUNKOztBQUVFO0VBQ0UsY0FBQTtBQUFKOztBQUlBO0VBQ0UsY0FBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FBREY7O0FBSUE7RUFDRSxtQkFBQTtFQUNBLFlBQUE7RUFDQSwwQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSw2Q0FBQTtFQUNBLFlBQUE7QUFERjs7QUFHRTtFQUNFLG1CQUFBO0FBREo7O0FBSUU7RUFDRSxtQkFBQTtFQUNBLFlBQUE7QUFGSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZm9ybS1yZXBvc2l0b3J5L2Zvcm0tcmVwb3NpdG9yeS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImZvcm0ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBtYXJnaW4tdG9wOiA0MHB4O1xuICBtYXgtd2lkdGg6IDcwMHB4O1xufVxuXG5pbnB1dCB7XG4gIGJvcmRlcjogMnB4IHNvbGlkICNmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDVweCAwIDAgNXB4O1xuICBib3JkZXItcmlnaHQ6IG5vbmU7XG4gIGNvbG9yOiAjYTNhM2EzO1xuICBmbGV4OiAxO1xuICBoZWlnaHQ6IDcwcHg7XG4gIHBhZGRpbmc6IDAgMjRweDtcbiAgZm9udC1mYW1pbHk6IFJvYm90bztcbiAgZm9udC1zaXplOiAyMHB4O1xuICBsaW5lLWhlaWdodDogMjNweDtcblxuICAmLmVycm9yIHtcbiAgICBib3JkZXItY29sb3I6ICNjNTMwMzA7XG4gICAgY29sb3I6ICNjNTMwMzA7XG4gICAgbWFyZ2luLXRvcDogMDtcbiAgfVxuXG4gICY6OnBsYWNlaG9sZGVyIHtcbiAgICBjb2xvcjogI2E4YThiMztcbiAgfVxufVxuXG4uZXJyb3Ige1xuICBjb2xvcjogI2M1MzAzMDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgbWFyZ2luLXRvcDogOHB4O1xufVxuXG5idXR0b24ge1xuICBiYWNrZ3JvdW5kOiAjMDRkMzYxO1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDAgNXB4IDVweCAwO1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgaGVpZ2h0OiA3MHB4O1xuICBsaW5lLWhlaWdodDogMjFweDtcbiAgdHJhbnNpdGlvbjogMC4ycyBlYXNlLWluLW91dCBiYWNrZ3JvdW5kLWNvbG9yO1xuICB3aWR0aDogMjEwcHg7XG5cbiAgJjpob3ZlciB7XG4gICAgYmFja2dyb3VuZDogZGFya2VuKCMwNGQzNjEsIDIwJSk7XG4gIH1cblxuICAmOmRpc2FibGVkIHtcbiAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xuICAgIG9wYWNpdHk6IDAuNjtcbiAgfVxufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FormRepositoryComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-form-repository',
                templateUrl: './form-repository.component.html',
                styleUrls: ['./form-repository.component.scss']
            }]
    }], function () { return []; }, { form: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['form', { static: false }]
        }], submit: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");



class AppComponent {
    constructor() {
        this.title = 'github-explorer';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 2, vars: 0, consts: [["id", "app"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], null, null); })();


/***/ }),

/***/ "U5Cf":
/*!********************************************************!*\
  !*** ./src/app/pages/dashboard/dashboard.component.ts ***!
  \********************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_repository_repository_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/repository/repository.service */ "12M8");
/* harmony import */ var _components_form_repository_form_repository_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/form-repository/form-repository.component */ "MGot");
/* harmony import */ var _components_list_repositories_list_repositories_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/list-repositories/list-repositories.component */ "28wQ");





class DashboardComponent {
    constructor(repositoryService) {
        this.repositoryService = repositoryService;
    }
    ngOnInit() {
        this.repositories = this.repositoryService.getLocalRepository();
    }
    getRepository(repository) {
        if (typeof repository !== "string")
            return;
        this.repositoryService.getRepositoryData(repository).subscribe((reponse) => {
            const repositories = [...this.repositories, reponse];
            this.repositoryService.setRepository(repositories);
            this.repositories = repositories;
        });
    }
}
DashboardComponent.ɵfac = function DashboardComponent_Factory(t) { return new (t || DashboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_repository_repository_service__WEBPACK_IMPORTED_MODULE_1__["RepositoryService"])); };
DashboardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DashboardComponent, selectors: [["app-dashboard"]], decls: 6, vars: 1, consts: [[1, "Dashboard"], ["src", "/assets/logo.svg", "alt", "Github Explorer"], [1, "title"], [3, "submit"], [3, "repositories"]], template: function DashboardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Explore reposit\u00F3rios no Github.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "app-form-repository", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("submit", function DashboardComponent_Template_app_form_repository_submit_4_listener($event) { return ctx.getRepository($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-list-repositories", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("repositories", ctx.repositories);
    } }, directives: [_components_form_repository_form_repository_component__WEBPACK_IMPORTED_MODULE_2__["FormRepositoryComponent"], _components_list_repositories_list_repositories_component__WEBPACK_IMPORTED_MODULE_3__["ListRepositoriesComponent"]], styles: [".title[_ngcontent-%COMP%] {\n  color: #3a3a3a;\n  font-size: 48px;\n  margin-top: 80px;\n  max-width: 450px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQUNGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50aXRsZSB7XG4gIGNvbG9yOiAjM2EzYTNhO1xuICBmb250LXNpemU6IDQ4cHg7XG4gIG1hcmdpbi10b3A6IDgwcHg7XG4gIG1heC13aWR0aDogNDUwcHg7XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DashboardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-dashboard',
                templateUrl: './dashboard.component.html',
                styleUrls: ['./dashboard.component.scss']
            }]
    }], function () { return [{ type: src_app_services_repository_repository_service__WEBPACK_IMPORTED_MODULE_1__["RepositoryService"] }]; }, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _pages_repository_repository_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/repository/repository.component */ "64xH");
/* harmony import */ var _components_bar_info_bar_info_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/bar-info/bar-info.component */ "xFg+");
/* harmony import */ var _components_form_repository_form_repository_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/form-repository/form-repository.component */ "MGot");
/* harmony import */ var _components_list_repositories_list_repositories_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/list-repositories/list-repositories.component */ "28wQ");
/* harmony import */ var _pages_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/dashboard/dashboard.component */ "U5Cf");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _components_lists_list_issues_list_issues_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/lists/list-issues/list-issues.component */ "y+k7");
/* harmony import */ var _components_repository_info_repository_info_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/repository-info/repository-info.component */ "f9PL");














class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
        _pages_repository_repository_component__WEBPACK_IMPORTED_MODULE_5__["RepositoryComponent"],
        _components_bar_info_bar_info_component__WEBPACK_IMPORTED_MODULE_6__["BarInfoComponent"],
        _components_form_repository_form_repository_component__WEBPACK_IMPORTED_MODULE_7__["FormRepositoryComponent"],
        _components_list_repositories_list_repositories_component__WEBPACK_IMPORTED_MODULE_8__["ListRepositoriesComponent"],
        _pages_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_9__["DashboardComponent"],
        _components_lists_list_issues_list_issues_component__WEBPACK_IMPORTED_MODULE_11__["ListIssuesComponent"],
        _components_repository_info_repository_info_component__WEBPACK_IMPORTED_MODULE_12__["RepositoryInfoComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                    _pages_repository_repository_component__WEBPACK_IMPORTED_MODULE_5__["RepositoryComponent"],
                    _components_bar_info_bar_info_component__WEBPACK_IMPORTED_MODULE_6__["BarInfoComponent"],
                    _components_form_repository_form_repository_component__WEBPACK_IMPORTED_MODULE_7__["FormRepositoryComponent"],
                    _components_list_repositories_list_repositories_component__WEBPACK_IMPORTED_MODULE_8__["ListRepositoriesComponent"],
                    _pages_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_9__["DashboardComponent"],
                    _components_lists_list_issues_list_issues_component__WEBPACK_IMPORTED_MODULE_11__["ListIssuesComponent"],
                    _components_repository_info_repository_info_component__WEBPACK_IMPORTED_MODULE_12__["RepositoryInfoComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "f9PL":
/*!*************************************************************************!*\
  !*** ./src/app/components/repository-info/repository-info.component.ts ***!
  \*************************************************************************/
/*! exports provided: RepositoryInfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RepositoryInfoComponent", function() { return RepositoryInfoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class RepositoryInfoComponent {
    constructor() { }
    ngOnInit() {
    }
}
RepositoryInfoComponent.ɵfac = function RepositoryInfoComponent_Factory(t) { return new (t || RepositoryInfoComponent)(); };
RepositoryInfoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RepositoryInfoComponent, selectors: [["app-repository-info"]], inputs: { repository: "repository" }, decls: 24, vars: 7, consts: [[1, "repository-info"], [1, "repository-info__header"], [3, "src", "alt"], [1, "repository-info__container"], [1, "repository-info__list"]], template: function RepositoryInfoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "header", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "ul", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Stars");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Forks");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Issues abertas");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.repository == null ? null : ctx.repository.owner.avatar_url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("alt", ctx.repository == null ? null : ctx.repository.owner.login);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.repository == null ? null : ctx.repository.full_name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.repository == null ? null : ctx.repository.description);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.repository == null ? null : ctx.repository.stargazers_count);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.repository == null ? null : ctx.repository.forks_count);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.repository == null ? null : ctx.repository.open_issues_count);
    } }, styles: [".repository-info[_ngcontent-%COMP%] {\n  margin-top: 80px;\n}\n.repository-info__header[_ngcontent-%COMP%] {\n  align-items: center;\n  display: flex;\n}\n.repository-info__header[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 120px;\n  height: 120px;\n  border-radius: 50%;\n}\n.repository-info__container[_ngcontent-%COMP%] {\n  margin-left: 24px;\n}\n.repository-info__container[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #3d3d4d;\n  font-size: 36px;\n}\n.repository-info__container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 18px;\n  color: #737380;\n  margin-top: 4px;\n}\n.repository-info__list[_ngcontent-%COMP%] {\n  display: flex;\n  list-style: none;\n  margin-top: 40px;\n}\n.repository-info__list[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 36px;\n  color: #3d3d4d;\n}\n.repository-info__list[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: block;\n  margin-top: 4px;\n  color: #6c6c8c;\n}\n.repository-info__list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]    + li[_ngcontent-%COMP%] {\n  margin-left: 80px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9yZXBvc2l0b3J5LWluZm8vcmVwb3NpdG9yeS1pbmZvLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQUE7QUFDRjtBQUNFO0VBQ0UsbUJBQUE7RUFDQSxhQUFBO0FBQ0o7QUFDSTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7QUFDTjtBQUdFO0VBQ0UsaUJBQUE7QUFESjtBQUdJO0VBQ0UsY0FBQTtFQUNBLGVBQUE7QUFETjtBQUlJO0VBQ0UsZUFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0FBRk47QUFNRTtFQUNFLGFBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FBSko7QUFNSTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBQUpOO0FBT0k7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QUFMTjtBQVFJO0VBQ0UsaUJBQUE7QUFOTiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcmVwb3NpdG9yeS1pbmZvL3JlcG9zaXRvcnktaW5mby5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5yZXBvc2l0b3J5LWluZm8ge1xuICBtYXJnaW4tdG9wOiA4MHB4O1xuXG4gICZfX2hlYWRlciB7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBkaXNwbGF5OiBmbGV4O1xuXG4gICAgaW1nIHtcbiAgICAgIHdpZHRoOiAxMjBweDtcbiAgICAgIGhlaWdodDogMTIwcHg7XG4gICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgfVxuICB9XG5cbiAgJl9fY29udGFpbmVyIHtcbiAgICBtYXJnaW4tbGVmdDogMjRweDtcblxuICAgIHN0cm9uZyB7XG4gICAgICBjb2xvcjogIzNkM2Q0ZDtcbiAgICAgIGZvbnQtc2l6ZTogMzZweDtcbiAgICB9XG5cbiAgICBwIHtcbiAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgIGNvbG9yOiAjNzM3MzgwO1xuICAgICAgbWFyZ2luLXRvcDogNHB4O1xuICAgIH1cbiAgfVxuXG4gICZfX2xpc3Qge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICBtYXJnaW4tdG9wOiA0MHB4O1xuXG4gICAgc3Ryb25nIHtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgZm9udC1zaXplOiAzNnB4O1xuICAgICAgY29sb3I6ICMzZDNkNGQ7XG4gICAgfVxuXG4gICAgc3BhbiB7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIG1hcmdpbi10b3A6IDRweDtcbiAgICAgIGNvbG9yOiAjNmM2YzhjO1xuICAgIH1cblxuICAgIGxpICsgbGkge1xuICAgICAgbWFyZ2luLWxlZnQ6IDgwcHg7XG4gICAgfVxuICB9XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RepositoryInfoComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-repository-info',
                templateUrl: './repository-info.component.html',
                styleUrls: ['./repository-info.component.scss']
            }]
    }], function () { return []; }, { repository: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _pages_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/dashboard/dashboard.component */ "U5Cf");
/* harmony import */ var _pages_repository_repository_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/repository/repository.component */ "64xH");






const routes = [
    {
        path: '',
        component: _pages_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_2__["DashboardComponent"]
    },
    {
        path: 'repositorios/:owner/:repository',
        component: _pages_repository_repository_component__WEBPACK_IMPORTED_MODULE_3__["RepositoryComponent"]
    }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "xFg+":
/*!***********************************************************!*\
  !*** ./src/app/components/bar-info/bar-info.component.ts ***!
  \***********************************************************/
/*! exports provided: BarInfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BarInfoComponent", function() { return BarInfoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");



function BarInfoComponent_img_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 3);
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r0.avatar, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("alt", ctx_r0.alt);
} }
class BarInfoComponent {
    constructor() { }
    ngOnInit() {
    }
}
BarInfoComponent.ɵfac = function BarInfoComponent_Factory(t) { return new (t || BarInfoComponent)(); };
BarInfoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BarInfoComponent, selectors: [["app-bar-info"]], inputs: { alt: "alt", avatar: "avatar", description: "description", title: "title" }, decls: 8, vars: 3, consts: [[1, "bar-info"], [3, "src", "alt", 4, "ngIf"], ["src", "/assets/icons/FiChevronRight.svg", "alt", "Chevron Right", 1, "arrow"], [3, "src", "alt"]], template: function BarInfoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "article", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, BarInfoComponent_img_1_Template, 1, 2, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.avatar);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.description);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]], styles: ["article[_ngcontent-%COMP%] {\n  align-items: center;\n  background: #fff;\n  border-radius: 5px;\n  cursor: pointer;\n  display: flex;\n  max-width: 700px;\n  opacity: 0.8;\n  padding: 24px;\n  text-decoration: none;\n  transition: transform 0.2s ease-in-out;\n  width: 100%;\n}\narticle[_ngcontent-%COMP%]:hover {\n  opacity: 1;\n  transform: translateX(16px);\n}\nimg[_ngcontent-%COMP%] {\n  border-radius: 50%;\n  height: 64px;\n  width: 64px;\n}\ndiv[_ngcontent-%COMP%] {\n  flex: 1;\n  margin: 0 16px;\n}\ndiv[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #3d3d4d;\n  font-size: 20px;\n}\ndiv[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #a8a8b3;\n  font-size: 18px;\n  margin-top: 4px;\n}\n.arrow[_ngcontent-%COMP%] {\n  color: #cbcbd6;\n  display: block;\n  height: 14px;\n  margin-left: auto;\n  pointer-events: none;\n  width: 14px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9iYXItaW5mby9iYXItaW5mby5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHFCQUFBO0VBQ0Esc0NBQUE7RUFDQSxXQUFBO0FBQ0Y7QUFDRTtFQUNFLFVBQUE7RUFDQSwyQkFBQTtBQUNKO0FBR0E7RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FBQUY7QUFHQTtFQUNFLE9BQUE7RUFDQSxjQUFBO0FBQUY7QUFFRTtFQUNFLGNBQUE7RUFDQSxlQUFBO0FBQUo7QUFHRTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtBQURKO0FBS0E7RUFDRSxjQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0VBQ0EsV0FBQTtBQUZGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9iYXItaW5mby9iYXItaW5mby5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImFydGljbGUge1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZGlzcGxheTogZmxleDtcbiAgbWF4LXdpZHRoOiA3MDBweDtcbiAgb3BhY2l0eTogMC44O1xuICBwYWRkaW5nOiAyNHB4O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjJzIGVhc2UtaW4tb3V0O1xuICB3aWR0aDogMTAwJTtcblxuICAmOmhvdmVyIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxNnB4KTtcbiAgfVxufVxuXG5pbWcge1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGhlaWdodDogNjRweDtcbiAgd2lkdGg6IDY0cHg7XG59XG5cbmRpdiB7XG4gIGZsZXg6IDE7XG4gIG1hcmdpbjogMCAxNnB4O1xuXG4gIHN0cm9uZyB7XG4gICAgY29sb3I6ICMzZDNkNGQ7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICB9XG5cbiAgcCB7XG4gICAgY29sb3I6ICNhOGE4YjM7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIG1hcmdpbi10b3A6IDRweDtcbiAgfVxufVxuXG4uYXJyb3cge1xuICBjb2xvcjogI2NiY2JkNjtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGhlaWdodDogMTRweDtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICB3aWR0aDogMTRweDtcbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BarInfoComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-bar-info',
                templateUrl: './bar-info.component.html',
                styleUrls: ['./bar-info.component.scss']
            }]
    }], function () { return []; }, { alt: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], avatar: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], description: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], title: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "y+k7":
/*!***********************************************************************!*\
  !*** ./src/app/components/lists/list-issues/list-issues.component.ts ***!
  \***********************************************************************/
/*! exports provided: ListIssuesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListIssuesComponent", function() { return ListIssuesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _bar_info_bar_info_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../bar-info/bar-info.component */ "xFg+");




function ListIssuesComponent_li_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-bar-info", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const issue_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", issue_r1.html_url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", issue_r1.title)("description", issue_r1.user.login);
} }
class ListIssuesComponent {
    constructor() { }
    ngOnInit() {
    }
}
ListIssuesComponent.ɵfac = function ListIssuesComponent_Factory(t) { return new (t || ListIssuesComponent)(); };
ListIssuesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ListIssuesComponent, selectors: [["app-list-issues"]], inputs: { issues: "issues" }, decls: 2, vars: 1, consts: [[1, "list"], [4, "ngFor", "ngForOf"], [3, "href"], [3, "title", "description"]], template: function ListIssuesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ListIssuesComponent_li_1_Template, 3, 3, "li", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.issues);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _bar_info_bar_info_component__WEBPACK_IMPORTED_MODULE_2__["BarInfoComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbGlzdHMvbGlzdC1pc3N1ZXMvbGlzdC1pc3N1ZXMuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ListIssuesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-list-issues',
                templateUrl: './list-issues.component.html',
                styleUrls: ['./list-issues.component.scss']
            }]
    }], function () { return []; }, { issues: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map