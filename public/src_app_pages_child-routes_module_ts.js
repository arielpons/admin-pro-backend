"use strict";
(self["webpackChunkadminpro"] = self["webpackChunkadminpro"] || []).push([["src_app_pages_child-routes_module_ts"],{

/***/ 1896:
/*!***************************************!*\
  !*** ./src/app/guards/admin.guard.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdminGuard": () => (/* binding */ AdminGuard)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _services_usuario_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/usuario.service */ 5763);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 2816);



class AdminGuard {
    constructor(usuarioService, router) {
        this.usuarioService = usuarioService;
        this.router = router;
    }
    canActivate(route, state) {
        if (this.usuarioService.role === 'ADMIN_ROLE') {
            return true;
        }
        else {
            this.router.navigateByUrl('/dashboard');
            return false;
        }
    }
}
AdminGuard.ɵfac = function AdminGuard_Factory(t) { return new (t || AdminGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_services_usuario_service__WEBPACK_IMPORTED_MODULE_0__.UsuarioService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router)); };
AdminGuard.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: AdminGuard, factory: AdminGuard.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 599:
/*!**********************************************!*\
  !*** ./src/app/pages/child-routes.module.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChildRoutesModule": () => (/* binding */ ChildRoutesModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dashboard/dashboard.component */ 4789);
/* harmony import */ var _progress_progress_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./progress/progress.component */ 3205);
/* harmony import */ var _grafica1_grafica1_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./grafica1/grafica1.component */ 5906);
/* harmony import */ var _account_settings_account_settings_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./account-settings/account-settings.component */ 4411);
/* harmony import */ var _promesas_promesas_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./promesas/promesas.component */ 3414);
/* harmony import */ var _rxjs_rxjs_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./rxjs/rxjs.component */ 9174);
/* harmony import */ var _perfil_perfil_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./perfil/perfil.component */ 2390);
/* harmony import */ var _mantenimiento_usuarios_usuarios_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./mantenimiento/usuarios/usuarios.component */ 221);
/* harmony import */ var _mantenimiento_hospitales_hospitales_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./mantenimiento/hospitales/hospitales.component */ 4763);
/* harmony import */ var _mantenimiento_medicos_medicos_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./mantenimiento/medicos/medicos.component */ 7022);
/* harmony import */ var _mantenimiento_medicos_medico_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./mantenimiento/medicos/medico.component */ 7134);
/* harmony import */ var _busqueda_busqueda_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./busqueda/busqueda.component */ 8376);
/* harmony import */ var _guards_admin_guard__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../guards/admin.guard */ 1896);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 3184);
















const childRoutes = [
    { path: '', component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_0__.DashboardComponent, data: { titulo: 'Dashboard' } },
    { path: 'account-settings', component: _account_settings_account_settings_component__WEBPACK_IMPORTED_MODULE_3__.AccountSettingsComponent, data: { titulo: 'Ajustes de cuenta' } },
    { path: 'buscar/:termino', component: _busqueda_busqueda_component__WEBPACK_IMPORTED_MODULE_11__.BusquedaComponent, data: { titulo: 'Búsqueda' } },
    { path: 'grafica1', component: _grafica1_grafica1_component__WEBPACK_IMPORTED_MODULE_2__.Grafica1Component, data: { titulo: 'Gráfica #1' } },
    { path: 'perfil', component: _perfil_perfil_component__WEBPACK_IMPORTED_MODULE_6__.PerfilComponent, data: { titulo: 'Perfil de usuario' } },
    { path: 'progress', component: _progress_progress_component__WEBPACK_IMPORTED_MODULE_1__.ProgressComponent, data: { titulo: 'ProgressBar' } },
    { path: 'promesas', component: _promesas_promesas_component__WEBPACK_IMPORTED_MODULE_4__.PromesasComponent, data: { titulo: 'Promesas' } },
    { path: 'rxjs', component: _rxjs_rxjs_component__WEBPACK_IMPORTED_MODULE_5__.RxjsComponent, data: { titulo: 'RxJs' } },
    //Mantenimientos
    { path: 'hospitales', component: _mantenimiento_hospitales_hospitales_component__WEBPACK_IMPORTED_MODULE_8__.HospitalesComponent, data: { titulo: 'Mantenimiento de Hospitales' } },
    { path: 'medicos', component: _mantenimiento_medicos_medicos_component__WEBPACK_IMPORTED_MODULE_9__.MedicosComponent, data: { titulo: 'Mantenimiento de Médicos' } },
    { path: 'medicos/:id', component: _mantenimiento_medicos_medico_component__WEBPACK_IMPORTED_MODULE_10__.MedicoComponent, data: { titulo: 'Mantenimiento de Médico' } },
    //Guard para role ADMIN
    { path: 'usuarios', canActivate: [_guards_admin_guard__WEBPACK_IMPORTED_MODULE_12__.AdminGuard], component: _mantenimiento_usuarios_usuarios_component__WEBPACK_IMPORTED_MODULE_7__.UsuariosComponent, data: { titulo: 'Usuario de Aplicación' } },
];
class ChildRoutesModule {
}
ChildRoutesModule.ɵfac = function ChildRoutesModule_Factory(t) { return new (t || ChildRoutesModule)(); };
ChildRoutesModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineNgModule"]({ type: ChildRoutesModule });
ChildRoutesModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_14__.RouterModule.forChild(childRoutes)], _angular_router__WEBPACK_IMPORTED_MODULE_14__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵsetNgModuleScope"](ChildRoutesModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_14__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_14__.RouterModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_pages_child-routes_module_ts.js.map