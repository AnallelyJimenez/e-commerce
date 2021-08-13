(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Bonsai\Documents\GitHub\Nueva carpeta\e-commerce\src\main.ts */"zUnb");


/***/ }),

/***/ "2o7I":
/*!***************************************************************************!*\
  !*** ./src/app/components/agregar-producto/agregar-producto.component.ts ***!
  \***************************************************************************/
/*! exports provided: AgregarProductoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgregarProductoComponent", function() { return AgregarProductoComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/data.service */ "EnSQ");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/input */ "qFsG");









class AgregarProductoComponent {
    constructor(fb, route, dataService, location) {
        this.fb = fb;
        this.route = route;
        this.dataService = dataService;
        this.location = location;
        this.form = this.fb.group({
            name: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
            price: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
            quantity: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
            sku: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]
        });
    }
    ngOnInit() {
    }
    goBack() {
        this.location.back();
    }
    onSubmit() {
        if (this.form.valid) {
            // this.form.reset();
            this.addItem();
        }
    }
    addItem() {
        const id = parseInt(this.route.snapshot.paramMap.get('id'), 10);
        this.dataService.addItem(this.form.value, id);
        ;
    }
}
AgregarProductoComponent.ɵfac = function AgregarProductoComponent_Factory(t) { return new (t || AgregarProductoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"])); };
AgregarProductoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AgregarProductoComponent, selectors: [["app-agregar-producto"]], decls: 29, vars: 1, consts: [[1, "btn-group"], ["mat-stroked-button", "", "type", "button", "color", "primary", 3, "click"], [3, "formGroup", "ngSubmit"], ["appearance", "fill", "color", "primary"], ["id", "itemName", "matInput", "", "formControlName", "name"], ["appearance", "fill", "floatLabel", "always"], ["matInput", "", "type", "number", "formControlName", "price", "placeholder", "0", 1, "example-right-align"], ["matPrefix", ""], ["matSuffix", ""], ["appearance", "fill"], ["matInput", "", "type", "number", "placeholder", "0", "min", "1", "formControlName", "quantity"], ["matInput", "", "formControlName", "sku"], [1, "btn-group", "align-center"], ["type", "submit", "mat-raised-button", "", "color", "accent"]], template: function AgregarProductoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "article");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AgregarProductoComponent_Template_button_click_2_listener() { return ctx.goBack(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "\u27F5 Regresar");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function AgregarProductoComponent_Template_form_ngSubmit_4_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "fieldset");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "mat-form-field", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Nombre");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "mat-form-field", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Precio");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "$\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, ".00");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "mat-form-field", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "Cantidad");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](21, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "mat-form-field", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "Sku");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](25, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "Agregar");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.form);
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButton"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NumberValueAccessor"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatPrefix"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatSuffix"]], styles: ["article[_ngcontent-%COMP%] {\n  max-width: 800px;\n  margin: 0 auto;\n}\nfieldset[_ngcontent-%COMP%] {\n  border: 0;\n  padding: 0;\n}\n.nav[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.btn-group[_ngcontent-%COMP%] {\n  margin: 0 0 20px;\n}\n.btn-group[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  min-width: 200px;\n}\nmat-form-field[_ngcontent-%COMP%] {\n  display: block;\n  box-sizing: border-box;\n}\n.align-center[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.align-right[_ngcontent-%COMP%] {\n  text-align: right;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFncmVnYXItcHJvZHVjdG8uY29tcG9uZW50LnN0eWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSSxnQkFBVTtFQUNWLGNBQU87QUFBWDtBQUVBO0VBQ0ksU0FBTztFQUNQLFVBQVE7QUFBWjtBQUVBO0VBQ0ksYUFBUTtFQUNSLDhCQUFnQjtFQUNoQixtQkFBWTtBQUFoQjtBQUVBO0VBQ0ksZ0JBQU87QUFBWDtBQUVJO0VBQ0ksZ0JBQVU7QUFBbEI7QUFFQTtFQUNJLGNBQVE7RUFDUixzQkFBVztBQUFmO0FBSUE7RUFDSSxrQkFBVztBQUZmO0FBSUE7RUFDSSxpQkFBVztBQUZmIiwiZmlsZSI6ImFncmVnYXItcHJvZHVjdG8uY29tcG9uZW50LnN0eWwiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuYXJ0aWNsZVxyXG4gICAgbWF4LXdpZHRoIDgwMHB4XHJcbiAgICBtYXJnaW4gMCBhdXRvXHJcblxyXG5maWVsZHNldFxyXG4gICAgYm9yZGVyIDBcclxuICAgIHBhZGRpbmcgMFxyXG5cclxuLm5hdlxyXG4gICAgZGlzcGxheSBmbGV4XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQgc3BhY2UtYmV0d2VlblxyXG4gICAgYWxpZ24taXRlbXMgY2VudGVyXHJcblxyXG4uYnRuLWdyb3VwXHJcbiAgICBtYXJnaW4gMCAwIDIwcHhcclxuXHJcbiAgICBidXR0b25cclxuICAgICAgICBtaW4td2lkdGggMjAwcHhcclxuXHJcbm1hdC1mb3JtLWZpZWxkXHJcbiAgICBkaXNwbGF5IGJsb2NrXHJcbiAgICBib3gtc2l6aW5nIGJvcmRlci1ib3hcclxuXHJcblxyXG5cclxuLmFsaWduLWNlbnRlclxyXG4gICAgdGV4dC1hbGlnbiBjZW50ZXJcclxuXHJcbi5hbGlnbi1yaWdodFxyXG4gICAgdGV4dC1hbGlnbiByaWdodCJdfQ== */"] });


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
    production: false
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

/***/ "EnSQ":
/*!******************************************!*\
  !*** ./src/app/services/data.service.ts ***!
  \******************************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");



class DataService {
    constructor(http) {
        this.http = http;
        this.api = 'https://eshop-deve.herokuapp.com/api/v2/orders';
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
                'Content-Type': 'application/json',
                Authorization: 'eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJwUGFINU55VXRxTUkzMDZtajdZVHdHV3JIZE81cWxmaCIsImlhdCI6MTYyMDY2Mjk4NjIwM30.lhfzSXW9_TC67SdDKyDbMOYiYsKuSk6bG6XDE1wz2OL4Tq0Og9NbLMhb0LUtmrgzfWiTrqAFfnPldd8QzWvgVQ'
            })
        };
    }
    getOrders() {
        return this.http.get(this.api, this.httpOptions);
        //return this.http.get<Item>(this.api, this.httpOptions);
    }
    getOrder(id) {
        const url = `${this.api}/${id}`;
        return this.http.get(url, this.httpOptions);
    }
    addItem(item, id) {
        const url = `${this.api}/${id}`;
        const body = JSON.stringify(item);
        console.log('id: ' + id);
        return this.http.post(this.api, body, this.httpOptions);
    }
}
DataService.ɵfac = function DataService_Factory(t) { return new (t || DataService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"])); };
DataService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: DataService, factory: DataService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "QVFe":
/*!*********************************************************!*\
  !*** ./src/app/components/details/details.component.ts ***!
  \*********************************************************/
/*! exports provided: DetailsComponent, DialogElements */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailsComponent", function() { return DetailsComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogElements", function() { return DialogElements; });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/data.service */ "EnSQ");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");








function DetailsComponent_mat_card_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-card", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "figure");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "img", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "mat-card-content", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "mat-card-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "h2", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("alt", item_r1.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", item_r1.imageUrl, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r0.id, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r1.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("$", item_r1.price, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Cantidad: ", item_r1.quantity, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Sku: ", item_r1.sku, "");
} }
const _c0 = ".content[_ngcontent-%COMP%] {\n  max-width: 700px;\n  margin: 0 auto;\n}\n.nav[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.title-order[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin: 0;\n}\n.btn-group[_ngcontent-%COMP%] {\n  margin: 0 0 20px;\n}\n.btn-group[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], .btn-group[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  min-width: 200px;\n}\n.card[_ngcontent-%COMP%] {\n  box-shadow: 0 0 3px 1px rgba(0,0,0,0.1);\n}\n.card[_ngcontent-%COMP%]:not(:last-child) {\n  margin-bottom: 15px;\n}\n.row[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n.grid[_ngcontent-%COMP%] {\n  display: flex;\n}\n.col-img[_ngcontent-%COMP%] {\n  width: 40%;\n  padding: 20px;\n  box-sizing: border-box;\n}\n.col-img[_ngcontent-%COMP%]   figure[_ngcontent-%COMP%] {\n  display: block;\n  margin: 0;\n}\n.col-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n  margin: 0 auto;\n}\n.col-content[_ngcontent-%COMP%] {\n  background: #fafafa;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 60%;\n  padding: 15px 20px;\n  box-sizing: border-box;\n}\n.card-content[_ngcontent-%COMP%] {\n  margin: 0;\n}\n.price[_ngcontent-%COMP%] {\n  color: #e53d3d;\n  font-weight: 500;\n}\n.align-center[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.align-right[_ngcontent-%COMP%] {\n  text-align: right;\n}\n.success[_ngcontent-%COMP%] {\n  display: block;\n  max-width: 200px;\n  width: 100%;\n  margin: 0 auto;\n}\n.success[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n}\n.dialog-title[_ngcontent-%COMP%] {\n  font-weight: 500;\n}\n.dialog-content[_ngcontent-%COMP%] {\n  margin-bottom: 30px;\n  text-align: center;\n}\n.dialog-actions[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.dialog-actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  background: #ff4081;\n  min-width: 150px;\n  padding: 0 15px;\n  color: #fff;\n  font-size: 1rem;\n  font-weight: 500;\n  line-height: 34px;\n  border: solid 1px rgba(0,0,0,0.12);\n  border-radius: 4px;\n  cursor: pointer;\n}\n.dialog-actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:focus {\n  outline: none;\n}\n@media screen and (max-width: 500px) {\n  .grid[_ngcontent-%COMP%] {\n    display: block;\n  }\n  .col-img[_ngcontent-%COMP%], .col-content[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .col-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    max-width: 250px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRldGFpbHMuY29tcG9uZW50LnN0eWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnQkFBVTtFQUNWLGNBQU87QUFDWDtBQUNBO0VBQ0ksYUFBUTtFQUNSLDhCQUFnQjtFQUNoQixtQkFBWTtBQUNoQjtBQUNBO0VBQ0kscUJBQVE7RUFDUixTQUFPO0FBQ1g7QUFDQTtFQUNJLGdCQUFPO0FBQ1g7QUFDSTs7RUFDSSxnQkFBVTtBQUVsQjtBQUFBO0VBQ0ksdUNBQVc7QUFFZjtBQUFJO0VBQ0ksbUJBQWM7QUFFdEI7QUFBQTtFQUNJLG1CQUFjO0FBRWxCO0FBQUE7RUFDSSxhQUFRO0FBRVo7QUFBQTtFQUNJLFVBQU07RUFDTixhQUFRO0VBQ1Isc0JBQVc7QUFFZjtBQUFJO0VBQ0ksY0FBUTtFQUNSLFNBQU87QUFFZjtBQUFJO0VBQ0ksY0FBUTtFQUNSLFdBQU07RUFDTixjQUFPO0FBRWY7QUFBQTtFQUNJLG1CQUFXO0VBQ1gsYUFBUTtFQUNSLG1CQUFZO0VBQ1osdUJBQWdCO0VBQ2hCLFVBQU07RUFDTixrQkFBUTtFQUNSLHNCQUFXO0FBRWY7QUFBQTtFQUNJLFNBQU87QUFFWDtBQUFBO0VBQ0ksY0FBTTtFQUNOLGdCQUFZO0FBRWhCO0FBQUE7RUFDSSxrQkFBVztBQUVmO0FBQUE7RUFDSSxpQkFBVztBQUVmO0FBQUE7RUFDSSxjQUFRO0VBQ1IsZ0JBQVU7RUFDVixXQUFNO0VBQ04sY0FBTztBQUVYO0FBQUk7RUFDSSxjQUFRO0VBQ1IsV0FBTTtBQUVkO0FBQUE7RUFDSSxnQkFBWTtBQUVoQjtBQUFBO0VBQ0ksbUJBQWU7RUFDZixrQkFBVztBQUVmO0FBQUE7RUFDSSxrQkFBVztBQUVmO0FBQUk7RUFDSSxtQkFBVztFQUNYLGdCQUFVO0VBQ1YsZUFBUTtFQUNSLFdBQU07RUFDTixlQUFVO0VBQ1YsZ0JBQVk7RUFDWixpQkFBWTtFQUNaLGtDQUFPO0VBQ1Asa0JBQWM7RUFDZCxlQUFPO0FBRWY7QUFBUTtFQUNJLGFBQVE7QUFFcEI7QUFHcUM7RUFDakM7SUFDSSxjQUFRO0VBRGQ7RUFHRTs7SUFFSSxXQUFNO0VBRFo7RUFHTTtJQUNJLGdCQUFVO0VBRHBCO0FBQ0YiLCJmaWxlIjoiZGV0YWlscy5jb21wb25lbnQuc3R5bCIsInNvdXJjZXNDb250ZW50IjpbIi5jb250ZW50XHJcbiAgICBtYXgtd2lkdGggNzAwcHhcclxuICAgIG1hcmdpbiAwIGF1dG9cclxuXHJcbi5uYXZcclxuICAgIGRpc3BsYXkgZmxleFxyXG4gICAganVzdGlmeS1jb250ZW50IHNwYWNlLWJldHdlZW5cclxuICAgIGFsaWduLWl0ZW1zIGNlbnRlclxyXG5cclxuLnRpdGxlLW9yZGVyXHJcbiAgICBkaXNwbGF5IGlubGluZS1ibG9ja1xyXG4gICAgbWFyZ2luIDBcclxuXHJcbi5idG4tZ3JvdXBcclxuICAgIG1hcmdpbiAwIDAgMjBweFxyXG5cclxuICAgIGEsIGJ1dHRvblxyXG4gICAgICAgIG1pbi13aWR0aCAyMDBweFxyXG5cclxuLmNhcmRcclxuICAgIGJveC1zaGFkb3cgMCAwIDNweCAxcHggcmdiYShibGFjaywgLjEpXHJcblxyXG4gICAgJjpub3QoOmxhc3QtY2hpbGQpXHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbSAxNXB4XHJcblxyXG4ucm93XHJcbiAgICBtYXJnaW4tYm90dG9tIDIwcHhcclxuXHJcbi5ncmlkXHJcbiAgICBkaXNwbGF5IGZsZXhcclxuXHJcbi5jb2wtaW1nXHJcbiAgICB3aWR0aCA0MCVcclxuICAgIHBhZGRpbmcgMjBweFxyXG4gICAgYm94LXNpemluZyBib3JkZXItYm94XHJcblxyXG4gICAgZmlndXJlXHJcbiAgICAgICAgZGlzcGxheSBibG9ja1xyXG4gICAgICAgIG1hcmdpbiAwXHJcbiAgICBcclxuICAgIGltZ1xyXG4gICAgICAgIGRpc3BsYXkgYmxvY2tcclxuICAgICAgICB3aWR0aCAxMDAlXHJcbiAgICAgICAgbWFyZ2luIDAgYXV0b1xyXG5cclxuLmNvbC1jb250ZW50XHJcbiAgICBiYWNrZ3JvdW5kICNmYWZhZmFcclxuICAgIGRpc3BsYXkgZmxleFxyXG4gICAgYWxpZ24taXRlbXMgY2VudGVyXHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQgY2VudGVyXHJcbiAgICB3aWR0aCA2MCVcclxuICAgIHBhZGRpbmcgMTVweCAyMHB4XHJcbiAgICBib3gtc2l6aW5nIGJvcmRlci1ib3hcclxuXHJcbi5jYXJkLWNvbnRlbnRcclxuICAgIG1hcmdpbiAwXHJcblxyXG4ucHJpY2VcclxuICAgIGNvbG9yICNlNTNkM2RcclxuICAgIGZvbnQtd2VpZ2h0IDUwMFxyXG5cclxuLmFsaWduLWNlbnRlclxyXG4gICAgdGV4dC1hbGlnbiBjZW50ZXJcclxuXHJcbi5hbGlnbi1yaWdodFxyXG4gICAgdGV4dC1hbGlnbiByaWdodFxyXG5cclxuLnN1Y2Nlc3NcclxuICAgIGRpc3BsYXkgYmxvY2tcclxuICAgIG1heC13aWR0aCAyMDBweFxyXG4gICAgd2lkdGggMTAwJVxyXG4gICAgbWFyZ2luIDAgYXV0b1xyXG5cclxuICAgIGltZ1xyXG4gICAgICAgIGRpc3BsYXkgYmxvY2tcclxuICAgICAgICB3aWR0aCAxMDAlXHJcblxyXG4uZGlhbG9nLXRpdGxlXHJcbiAgICBmb250LXdlaWdodCA1MDBcclxuXHJcbi5kaWFsb2ctY29udGVudFxyXG4gICAgbWFyZ2luLWJvdHRvbSAgMzBweFxyXG4gICAgdGV4dC1hbGlnbiBjZW50ZXJcclxuXHJcbi5kaWFsb2ctYWN0aW9uc1xyXG4gICAgdGV4dC1hbGlnbiBjZW50ZXJcclxuXHJcbiAgICBidXR0b25cclxuICAgICAgICBiYWNrZ3JvdW5kICNmZjQwODFcclxuICAgICAgICBtaW4td2lkdGggMTUwcHhcclxuICAgICAgICBwYWRkaW5nIDAgMTVweFxyXG4gICAgICAgIGNvbG9yIHdoaXRlXHJcbiAgICAgICAgZm9udC1zaXplIDFyZW1cclxuICAgICAgICBmb250LXdlaWdodCA1MDBcclxuICAgICAgICBsaW5lLWhlaWdodCAzNHB4XHJcbiAgICAgICAgYm9yZGVyIHNvbGlkIDFweCByZ2JhKGJsYWNrLCAuMTIpXHJcbiAgICAgICAgYm9yZGVyLXJhZGl1cyA0cHhcclxuICAgICAgICBjdXJzb3IgcG9pbnRlclxyXG5cclxuICAgICAgICAmOmZvY3VzXHJcbiAgICAgICAgICAgIG91dGxpbmUgbm9uZVxyXG5cclxuXHJcbi8vIFJlc3BvbnNpdmVcclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kICggbWF4LXdpZHRoOiA1MDBweCApXHJcbiAgICAuZ3JpZFxyXG4gICAgICAgIGRpc3BsYXkgYmxvY2tcclxuICAgIFxyXG4gICAgLmNvbC1pbWcsXHJcbiAgICAuY29sLWNvbnRlbnRcclxuICAgICAgICB3aWR0aCAxMDAlXHJcbiAgICAuY29sLWltZ1xyXG4gICAgICAgIGltZ1xyXG4gICAgICAgICAgICBtYXgtd2lkdGggMjUwcHgiXX0= */";
class DetailsComponent {
    constructor(route, dataService, location, dialog) {
        this.route = route;
        this.dataService = dataService;
        this.location = location;
        this.dialog = dialog;
        this.items = [];
        this.order = {};
        this.defaultImg = 'assets/images/img.png';
    }
    ngOnInit() {
        this.getOrder();
    }
    getOrder() {
        const id = parseInt(this.route.snapshot.paramMap.get('id'), 10);
        this.dataService.getOrder(id)
            .subscribe((data) => {
            data.order.items.map((item) => {
                if (!item.imageUrl)
                    item.imageUrl = this.defaultImg;
                this.items.push(item);
            });
            this.order.id = id;
            this.order.number = data.order.number;
        });
    }
    openDialog() {
        const dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogConfig"]();
        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;
        this.dialog.open(DialogElements, dialogConfig);
    }
}
DetailsComponent.ɵfac = function DetailsComponent_Factory(t) { return new (t || DetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialog"])); };
DetailsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: DetailsComponent, selectors: [["app-details"]], decls: 11, vars: 3, consts: [[1, "content"], [1, "btn-group", "nav"], [1, "title-order"], ["mat-stroked-button", "", "color", "primary", 3, "routerLink"], [1, "row"], ["class", "card", 4, "ngFor", "ngForOf"], [1, "btn-group", "align-center"], ["mat-flat-button", "", "type", "button", "color", "accent", 3, "click"], [1, "card"], [1, "grid"], [1, "col-img"], ["mat-card-image", "", 3, "src", "alt"], [1, "col-content"], [1, "card-content"], [1, "price"]], template: function DetailsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h1", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Agregar producto");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "section", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, DetailsComponent_mat_card_7_Template, 16, 7, "mat-card", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DetailsComponent_Template_button_click_9_listener() { return ctx.openDialog(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Pagar");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Orden ", ctx.order.number, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("routerLink", "/agregar/", ctx.order.id, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.items);
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatAnchor"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButton"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardImage"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardContent"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardTitle"]], styles: [_c0] });
class DialogElements {
    constructor(dialog) {
        this.dialog = dialog;
    }
    closeDialog() {
        this.dialog.closeAll();
    }
}
DialogElements.ɵfac = function DialogElements_Factory(t) { return new (t || DialogElements)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialog"])); };
DialogElements.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: DialogElements, selectors: [["dialog-elements"]], decls: 9, vars: 0, consts: [[1, "success"], ["src", "assets/images/success.png", "alt", "e-commers"], ["mat-dialog-title", "", 1, "dialog-title"], ["mat-dialog-content", "", 1, "dialog-content"], ["mat-dialog-actions", "", 1, "dialog-actions"], ["mat-button", "", "mat-dialog-close", "", "color", "primary", 3, "click"]], template: function DialogElements_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "figure", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h1", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "\u00A1Pago completado exitosamente!");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Da clic en \"Terminar\" para seguir revisando los productos.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DialogElements_Template_button_click_7_listener() { return ctx.closeDialog(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Terminar");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } }, styles: [_c0] });


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
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");




class AppComponent {
    constructor() {
        this.title = 'e-commerce';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 12, vars: 2, consts: [["color", "primary"], ["mat-icon-button", "", "routerLink", "/", 1, "btn"], ["src", "assets/images/icon.png", 3, "alt"], ["routerLink", "/orden"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-toolbar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "nav");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Orden de compra");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("alt", ctx.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.title);
    } }, directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__["MatToolbar"], _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatAnchor"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"]], styles: ["*[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  margin: 0;\n}\nsection[_ngcontent-%COMP%] {\n  max-width: 1200px;\n  width: 100%;\n  margin: 0 auto;\n  padding: 2rem 1.2rem;\n}\nmat-toolbar[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n}\n.btn[_ngcontent-%COMP%] {\n  background: transparent;\n  max-width: 40px;\n  width: 100%;\n  border: 0;\n}\n.btn[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 100%;\n  margin-right: 10px;\n}\n.btn[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: inline-block;\n  font-size: 1rem;\n}\nnav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin: 0 10px;\n  color: #fff;\n  font-size: 0.9rem;\n  font-weight: normal;\n  text-decoration: none;\n}\nnav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n  transition: all 0.6s ease;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuc3R5bCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNJLHNCQUFXO0VBQ1gsU0FBTztBQURYO0FBR0E7RUFDSSxpQkFBVTtFQUNWLFdBQU07RUFDTixjQUFPO0VBQ1Asb0JBQVE7QUFEWjtBQUdBO0VBQ0ksYUFBUTtFQUNSLDhCQUFnQjtBQURwQjtBQUdBO0VBQ0ksdUJBQVc7RUFDWCxlQUFVO0VBQ1YsV0FBTTtFQUNOLFNBQU87QUFEWDtBQUdJO0VBQ0kscUJBQVE7RUFDUixXQUFNO0VBQ04sa0JBQWE7QUFEckI7QUFHSTtFQUNJLHFCQUFRO0VBQ1IsZUFBVTtBQURsQjtBQUlJO0VBQ0kscUJBQVE7RUFDUixjQUFRO0VBQ1IsV0FBTTtFQUNOLGlCQUFXO0VBQ1gsbUJBQVk7RUFDWixxQkFBZ0I7QUFGeEI7QUFLUTtFQUNJLDBCQUFnQjtFQUNoQix5QkFBVztBQUh2QiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnN0eWwiLCJzb3VyY2VzQ29udGVudCI6WyIvL0BpbXBvcnQgJ25vZGVfbW9kdWxlcy9qZWV0L3N0eWx1cy9qZWV0L2luZGV4J1xyXG5cclxuKlxyXG4gICAgYm94LXNpemluZyBib3JkZXItYm94XHJcbiAgICBtYXJnaW4gMFxyXG5cclxuc2VjdGlvblxyXG4gICAgbWF4LXdpZHRoIDEyMDBweFxyXG4gICAgd2lkdGggMTAwJVxyXG4gICAgbWFyZ2luIDAgYXV0b1xyXG4gICAgcGFkZGluZyAycmVtIDEuMnJlbVxyXG5cclxubWF0LXRvb2xiYXJcclxuICAgIGRpc3BsYXkgZmxleFxyXG4gICAganVzdGlmeS1jb250ZW50IHNwYWNlLWJldHdlZW5cclxuXHJcbi5idG5cclxuICAgIGJhY2tncm91bmQgdHJhbnNwYXJlbnRcclxuICAgIG1heC13aWR0aCA0MHB4XHJcbiAgICB3aWR0aCAxMDAlXHJcbiAgICBib3JkZXIgMFxyXG5cclxuICAgIGltZ1xyXG4gICAgICAgIGRpc3BsYXkgaW5saW5lLWJsb2NrXHJcbiAgICAgICAgd2lkdGggMTAwJVxyXG4gICAgICAgIG1hcmdpbi1yaWdodCAxMHB4XHJcbiAgICBcclxuICAgIHNwYW5cclxuICAgICAgICBkaXNwbGF5IGlubGluZS1ibG9ja1xyXG4gICAgICAgIGZvbnQtc2l6ZSAxcmVtXHJcblxyXG5uYXZcclxuICAgIGFcclxuICAgICAgICBkaXNwbGF5IGlubGluZS1ibG9ja1xyXG4gICAgICAgIG1hcmdpbiAgMCAxMHB4XHJcbiAgICAgICAgY29sb3Igd2hpdGVcclxuICAgICAgICBmb250LXNpemUgIC45cmVtXHJcbiAgICAgICAgZm9udC13ZWlnaHQgbm9ybWFsXHJcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uIG5vbmVcclxuXHJcblxyXG4gICAgICAgICY6aG92ZXJcclxuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uIHVuZGVybGluZVxyXG4gICAgICAgICAgICB0cmFuc2l0aW9uIGFsbCAuNnMgZWFzZSJdfQ== */"] });


/***/ }),

/***/ "WptP":
/*!*******************************************!*\
  !*** ./src/app/routing/routing.module.ts ***!
  \*******************************************/
/*! exports provided: RoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoutingModule", function() { return RoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _components_orders_orders_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/orders/orders.component */ "z2VO");
/* harmony import */ var _components_agregar_producto_agregar_producto_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/agregar-producto/agregar-producto.component */ "2o7I");
/* harmony import */ var _components_details_details_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/details/details.component */ "QVFe");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");






const routes = [
    { path: 'orden', component: _components_orders_orders_component__WEBPACK_IMPORTED_MODULE_1__["OrdersComponent"] },
    { path: 'agregar/:id', component: _components_agregar_producto_agregar_producto_component__WEBPACK_IMPORTED_MODULE_2__["AgregarProductoComponent"] },
    { path: 'orden-detalles/:id', component: _components_details_details_component__WEBPACK_IMPORTED_MODULE_3__["DetailsComponent"] },
    { path: '', redirectTo: '/orden', pathMatch: 'full' },
];
class RoutingModule {
}
RoutingModule.ɵfac = function RoutingModule_Factory(t) { return new (t || RoutingModule)(); };
RoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: RoutingModule });
RoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](RoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


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
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./material.module */ "vvyD");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _components_orders_orders_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/orders/orders.component */ "z2VO");
/* harmony import */ var _components_details_details_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/details/details.component */ "QVFe");
/* harmony import */ var _routing_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./routing/routing.module */ "WptP");
/* harmony import */ var _components_agregar_producto_agregar_producto_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/agregar-producto/agregar-producto.component */ "2o7I");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ "fXoL");











class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineInjector"]({ providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
            _material_module__WEBPACK_IMPORTED_MODULE_4__["MaterialModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _routing_routing_module__WEBPACK_IMPORTED_MODULE_8__["RoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
        _components_orders_orders_component__WEBPACK_IMPORTED_MODULE_6__["OrdersComponent"],
        _components_details_details_component__WEBPACK_IMPORTED_MODULE_7__["DetailsComponent"],
        _components_agregar_producto_agregar_producto_component__WEBPACK_IMPORTED_MODULE_9__["AgregarProductoComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
        _material_module__WEBPACK_IMPORTED_MODULE_4__["MaterialModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _routing_routing_module__WEBPACK_IMPORTED_MODULE_8__["RoutingModule"]] }); })();


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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");




const routes = [];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[
            _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes),
            _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"]
        ], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "vvyD":
/*!************************************!*\
  !*** ./src/app/material.module.ts ***!
  \************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/grid-list */ "zkoq");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "fXoL");







class MaterialModule {
}
MaterialModule.ɵfac = function MaterialModule_Factory(t) { return new (t || MaterialModule)(); };
MaterialModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({ type: MaterialModule });
MaterialModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({ imports: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_0__["MatToolbarModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_1__["MatInputModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"],
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_4__["MatGridListModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialogModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](MaterialModule, { exports: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_0__["MatToolbarModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_1__["MatInputModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"],
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_4__["MatGridListModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialogModule"]] }); })();


/***/ }),

/***/ "z2VO":
/*!*******************************************************!*\
  !*** ./src/app/components/orders/orders.component.ts ***!
  \*******************************************************/
/*! exports provided: OrdersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrdersComponent", function() { return OrdersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/data.service */ "EnSQ");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");





function OrdersComponent_tr_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "td", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Ver detalles");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const order_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", order_r1.number, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](order_r1.totals.subtotal);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](order_r1.totals.discount);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](order_r1.totals.tax);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("$", order_r1.totals.total, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/orden-detalles/", order_r1.id, "");
} }
class OrdersComponent {
    // items: Item[] = [];
    constructor(dataService) {
        this.dataService = dataService;
        //orden: string;
        this.orders = [];
    }
    ngOnInit() {
        this.getOrders();
    }
    getOrders() {
        this.dataService.getOrders()
            .subscribe((data) => {
            data.orders.map((order) => {
                order.hide = true;
                this.orders.push(order);
            });
        });
        /*this.dataService.getOrders()
        .subscribe(
          (data: any) => {
            data.order.items.map((item: any) => {
              item.hide = true;
              this.items.push(item);
            });
           console.log(this.items)
    
          console.log(data)
    
          this.orden = data.order.number;
          }
        );*/
    }
}
OrdersComponent.ɵfac = function OrdersComponent_Factory(t) { return new (t || OrdersComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"])); };
OrdersComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: OrdersComponent, selectors: [["app-pagos"]], decls: 16, vars: 1, consts: [[4, "ngFor", "ngForOf"], ["aria-label", "No."], ["aria-label", "Subtotal:"], ["aria-label", "Descuento:"], ["aria-label", "IVA:"], ["aria-label", "Total:"], [1, "heading"], [1, "actions"], ["mat-stroked-button", "", "color", "primary", 3, "routerLink"]], template: function OrdersComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "table");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "No.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Subtotal");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Descuento");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "IVA");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Total");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, OrdersComponent_tr_15_Template, 15, 6, "tr", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.orders);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatAnchor"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"]], styles: ["table[_ngcontent-%COMP%] {\n  max-width: 800px;\n  width: 100%;\n  margin: 0 auto;\n  border-collapse: collapse;\n}\ntable[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  text-align: left;\n}\ntable[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 5px 15px;\n}\ntable[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(odd) {\n  background: #f2f2f2;\n}\n.heading[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n  font-weight: 500;\n}\n@media screen and (max-width: 700px) {\n  table[_ngcontent-%COMP%] {\n    max-width: 500px;\n  }\n  thead[_ngcontent-%COMP%] {\n    display: none;\n  }\n  tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n    display: block;\n  }\n  tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:before {\n    content: attr(aria-label);\n    display: inline-block;\n    margin-right: 10px;\n    font-weight: 500;\n  }\n  tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:last-child {\n    text-align: right;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm9yZGVycy5jb21wb25lbnQuc3R5bCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFVO0VBQ1YsV0FBTTtFQUNOLGNBQU87RUFDUCx5QkFBZ0I7QUFDcEI7QUFDSTtFQUNJLGdCQUFXO0FBQ25CO0FBQ0k7O0VBQ0ksaUJBQVE7QUFFaEI7QUFDUTtFQUNJLG1CQUFXO0FBQ3ZCO0FBQ0E7RUFDSSxpQkFBVTtFQUNWLGdCQUFZO0FBQ2hCO0FBSXFDO0VBRWpDO0lBQ0ksZ0JBQVU7RUFIaEI7RUFLRTtJQUNJLGFBQVM7RUFIZjtFQU9VO0lBQ0ksY0FBUTtFQUx0QjtFQU9jO0lBQ0kseUJBQVE7SUFDUixxQkFBUTtJQUNSLGtCQUFhO0lBQ2IsZ0JBQVk7RUFMOUI7RUFPYztJQUNJLGlCQUFXO0VBTDdCO0FBQ0YiLCJmaWxlIjoib3JkZXJzLmNvbXBvbmVudC5zdHlsIiwic291cmNlc0NvbnRlbnQiOlsidGFibGVcclxuICAgIG1heC13aWR0aCA4MDBweFxyXG4gICAgd2lkdGggMTAwJVxyXG4gICAgbWFyZ2luIDAgYXV0b1xyXG4gICAgYm9yZGVyLWNvbGxhcHNlIGNvbGxhcHNlXHJcblxyXG4gICAgdGhcclxuICAgICAgICB0ZXh0LWFsaWduIGxlZnRcclxuICAgIFxyXG4gICAgdGgsIHRkXHJcbiAgICAgICAgcGFkZGluZyA1cHggMTVweFxyXG4gICAgXHJcbiAgICB0Ym9keVxyXG4gICAgICAgIHRyOm50aC1jaGlsZChvZGQpXHJcbiAgICAgICAgICAgIGJhY2tncm91bmQgI2YyZjJmMlxyXG5cclxuLmhlYWRpbmdcclxuICAgIGZvbnQtc2l6ZSAxLjJyZW1cclxuICAgIGZvbnQtd2VpZ2h0IDUwMFxyXG5cclxuXHJcbi8vIFJlc3BvbnNpdmVcclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kICggbWF4LXdpZHRoOiA3MDBweCApXHJcblxyXG4gICAgdGFibGVcclxuICAgICAgICBtYXgtd2lkdGggNTAwcHhcclxuICAgIFxyXG4gICAgdGhlYWRcclxuICAgICAgICBkaXNwbGF5ICBub25lXHJcbiAgICBcclxuICAgIHRib2R5XHJcbiAgICAgICAgdHJcclxuICAgICAgICAgICAgdGRcclxuICAgICAgICAgICAgICAgIGRpc3BsYXkgYmxvY2tcclxuXHJcbiAgICAgICAgICAgICAgICAmOmJlZm9yZVxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQgYXR0cihhcmlhLWxhYmVsKVxyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXkgaW5saW5lLWJsb2NrXHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0IDEwcHhcclxuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodCA1MDBcclxuXHJcbiAgICAgICAgICAgICAgICAmOmxhc3QtY2hpbGRcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduIHJpZ2h0Il19 */"] });


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
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