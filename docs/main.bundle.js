webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ".foot-cont {\r\n    text-align: center;\r\n}\r\n\r\n.footer {\r\n    margin-top: 3rem;\r\n    background-color: rgba(0, 0, 255, 0);\r\n    height: 5rem;\r\n}\r\n\r\n#holder {\r\n    margin-top: 1rem;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    /* establish flex container */\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: column;\r\n            flex-direction: column;\r\n    /* stack flex items vertically */\r\n    -webkit-box-pack: center;\r\n        -ms-flex-pack: center;\r\n            justify-content: center;\r\n    /* center items vertically, in this case */\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n    /* center items horizontally, in this case */\r\n    text-align: center;\r\n}\r\n\r\n#IEEE-logo {\r\n    height: 4rem;\r\n    margin: 1rem;\r\n}\r\n\r\na.svg:after {\r\n    content: \"\";\r\n    position: absolute;\r\n    top: 0;\r\n    right: 0;\r\n    bottom: 0;\r\n    left: 0;\r\n}\r\n\r\na.svg {\r\n    position: relative;\r\n    display: inline-block;\r\n}"

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<body>\n  <!--Hero section-->\n  <section id=\"hero\">\n    <app-hero></app-hero>\n  </section>\n\n  <section id=\"main\">\n    <app-main></app-main>\n  </section>\n\n  <footer class=\"footer\">\n    <div class=\"container foot-cont\">\n      <div id=\"holder\">\n        <a target=\"_blank\" href=\"https://ieee.northwestern.edu\" class=\"svg\">\n          <object id=\"IEEE-logo\" type=\"image/svg+xml\" data=\"assets/IEEE-NU.svg\">Your browser does not support SVGs</object>\n        </a>\n      </div>\n    </div>\n  </footer>\n</body>"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_hero_hero_component__ = __webpack_require__("./src/app/components/hero/hero.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_main_main_component__ = __webpack_require__("./src/app/components/main/main.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["E" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_3__components_hero_hero_component__["a" /* HeroComponent */],
                __WEBPACK_IMPORTED_MODULE_4__components_main_main_component__["a" /* MainComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */]
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/hero/hero.component.css":
/***/ (function(module, exports) {

module.exports = "body {\r\n    height: 100vh;\r\n}\r\n\r\n.container {\r\n    margin-top: 2rem;\r\n    margin-bottom: 2rem;\r\n}\r\n\r\n#splash {\r\n    margin-top: 1rem;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    /* establish flex container */\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: column;\r\n            flex-direction: column;\r\n    /* stack flex items vertically */\r\n    -webkit-box-pack: center;\r\n        -ms-flex-pack: center;\r\n            justify-content: center;\r\n    /* center items vertically, in this case */\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n    /* center items horizontally, in this case */\r\n    height: 75vh;\r\n    text-align: center;\r\n}\r\n\r\n.arrow {\r\n    position: relative;\r\n    bottom: -2rem;\r\n    left: 50%;\r\n    margin-left: -20px;\r\n    height: 3.5rem;\r\n    width: 2rem;\r\n    /**\r\n   * Dark Arrow Down\r\n   */\r\n    /*     background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjxzdmcgaGVpZ2h0PSI1MTIiIGlkPSJzdmcyIiB2ZXJzaW9uPSIxLjEiIHdpZHRoPSI1MTIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6Y2M9Imh0dHA6Ly9jcmVhdGl2ZWNvbW1vbnMub3JnL25zIyIgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIiB4bWxuczppbmtzY2FwZT0iaHR0cDovL3d3dy5pbmtzY2FwZS5vcmcvbmFtZXNwYWNlcy9pbmtzY2FwZSIgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIiB4bWxuczpzb2RpcG9kaT0iaHR0cDovL3NvZGlwb2RpLnNvdXJjZWZvcmdlLm5ldC9EVEQvc29kaXBvZGktMC5kdGQiIHhtbG5zOnN2Zz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxkZWZzIGlkPSJkZWZzNCIvPjxnIGlkPSJsYXllcjEiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAsLTU0MC4zNjIyKSI+PHBhdGggZD0ibSAxMjcuNDA2MjUsNjU3Ljc4MTI1IGMgLTQuOTg1MywwLjA3ODQgLTkuOTEwNzcsMi4xNjMwOCAtMTMuNDM3NSw1LjY4NzUgbCAtNTUsNTUgYyAtMy42MDA1NjUsMy41OTkyNyAtNS42OTY4ODMsOC42NTg5NSAtNS42OTY4ODMsMTMuNzUgMCw1LjA5MTA1IDIuMDk2MzE4LDEwLjE1MDczIDUuNjk2ODgzLDEzLjc1IEwgMjQyLjI1LDkyOS4yNSBjIDMuNTk5MjcsMy42MDA1NiA4LjY1ODk1LDUuNjk2ODggMTMuNzUsNS42OTY4OCA1LjA5MTA1LDAgMTAuMTUwNzMsLTIuMDk2MzIgMTMuNzUsLTUuNjk2ODggTCA0NTMuMDMxMjUsNzQ1Ljk2ODc1IGMgMy42MDA1NiwtMy41OTkyNyA1LjY5Njg4LC04LjY1ODk1IDUuNjk2ODgsLTEzLjc1IDAsLTUuMDkxMDUgLTIuMDk2MzIsLTEwLjE1MDczIC01LjY5Njg4LC0xMy43NSBsIC01NSwtNTUgYyAtMy41OTgxNSwtMy41OTEyNyAtOC42NTA2OCwtNS42ODEyNyAtMTMuNzM0MzgsLTUuNjgxMjcgLTUuMDgzNjksMCAtMTAuMTM2MjIsMi4wOSAtMTMuNzM0MzcsNS42ODEyNyBMIDI1Niw3NzguMDMxMjUgMTQxLjQzNzUsNjYzLjQ2ODc1IGMgLTMuNjY2NzgsLTMuNjY0MjMgLTguODQ4MDEsLTUuNzY0NDIgLTE0LjAzMTI1LC01LjY4NzUgeiIgaWQ9InBhdGgzNzY2LTEiIHN0eWxlPSJmb250LXNpemU6bWVkaXVtO2ZvbnQtc3R5bGU6bm9ybWFsO2ZvbnQtdmFyaWFudDpub3JtYWw7Zm9udC13ZWlnaHQ6bm9ybWFsO2ZvbnQtc3RyZXRjaDpub3JtYWw7dGV4dC1pbmRlbnQ6MDt0ZXh0LWFsaWduOnN0YXJ0O3RleHQtZGVjb3JhdGlvbjpub25lO2xpbmUtaGVpZ2h0Om5vcm1hbDtsZXR0ZXItc3BhY2luZzpub3JtYWw7d29yZC1zcGFjaW5nOm5vcm1hbDt0ZXh0LXRyYW5zZm9ybTpub25lO2RpcmVjdGlvbjpsdHI7YmxvY2stcHJvZ3Jlc3Npb246dGI7d3JpdGluZy1tb2RlOmxyLXRiO3RleHQtYW5jaG9yOnN0YXJ0O2Jhc2VsaW5lLXNoaWZ0OmJhc2VsaW5lO2NvbG9yOiMwMDAwMDA7ZmlsbDojMjIyMjIyO2ZpbGwtb3BhY2l0eToxO2ZpbGwtcnVsZTpub256ZXJvO3N0cm9rZTpub25lO3N0cm9rZS13aWR0aDozOC44ODAwMDEwNzttYXJrZXI6bm9uZTt2aXNpYmlsaXR5OnZpc2libGU7ZGlzcGxheTppbmxpbmU7b3ZlcmZsb3c6dmlzaWJsZTtlbmFibGUtYmFja2dyb3VuZDphY2N1bXVsYXRlO2ZvbnQtZmFtaWx5OlNhbnM7LWlua3NjYXBlLWZvbnQtc3BlY2lmaWNhdGlvbjpTYW5zIi8+PC9nPjwvc3ZnPg==);\r\n */\r\n    background-image: url('angle-double-down.321821c848e65b792145.svg');\r\n    background-size: contain;\r\n}\r\n\r\n.bounce {\r\n    -webkit-animation: bounce 2s infinite;\r\n            animation: bounce 2s infinite;\r\n}\r\n\r\n@-webkit-keyframes bounce {\r\n    0%, 20%, 50%, 80%, 100% {\r\n        -webkit-transform: translateY(0);\r\n                transform: translateY(0);\r\n    }\r\n    40% {\r\n        -webkit-transform: translateY(-30px);\r\n                transform: translateY(-30px);\r\n    }\r\n    60% {\r\n        -webkit-transform: translateY(-15px);\r\n                transform: translateY(-15px);\r\n    }\r\n}\r\n\r\n@keyframes bounce {\r\n    0%, 20%, 50%, 80%, 100% {\r\n        -webkit-transform: translateY(0);\r\n                transform: translateY(0);\r\n    }\r\n    40% {\r\n        -webkit-transform: translateY(-30px);\r\n                transform: translateY(-30px);\r\n    }\r\n    60% {\r\n        -webkit-transform: translateY(-15px);\r\n                transform: translateY(-15px);\r\n    }\r\n}\r\n\r\n#video-background {\r\n/*  making the video fullscreen  */\r\n  position: fixed;\r\n  right: 0; \r\n  bottom: 0;\r\n  min-width: 100%; \r\n  min-height: 100%;\r\n  width: auto; \r\n  height: auto;\r\n  z-index: -100;\r\n}\r\n"

/***/ }),

/***/ "./src/app/components/hero/hero.component.html":
/***/ (function(module, exports) {

module.exports = "<body>\r\n  <div class=\"container\">\r\n    <div id=\"splash\">\r\n      <img id=\"bh-img\" src=\"assets/badhacks-splash-ALT2.svg\" />\r\n    </div>\r\n    <div class=\"arrow bounce\"></div>\r\n  </div>\r\n</body>\r\n"

/***/ }),

/***/ "./src/app/components/hero/hero.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeroComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeroComponent = /** @class */ (function () {
    function HeroComponent() {
    }
    HeroComponent.prototype.ngOnInit = function () {
    };
    HeroComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-hero',
            template: __webpack_require__("./src/app/components/hero/hero.component.html"),
            styles: [__webpack_require__("./src/app/components/hero/hero.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HeroComponent);
    return HeroComponent;
}());



/***/ }),

/***/ "./src/app/components/main/main.component.css":
/***/ (function(module, exports) {

module.exports = ".container {\r\n    margin-top: 2rem;\r\n    margin-bottom: 2rem;\r\n}\r\n\r\n.card, .card-header, .mb-0 {\r\n    background-color: inherit;\r\n    border: 0px;\r\n}\r\n\r\n.card-header {\r\n    border-bottom: 1px solid rgba(244, 237, 227, 0.082);\r\n}\r\n\r\n.btn-link {\r\n    color: #f8db10;\r\n    font-size: 1rem;\r\n}\r\n\r\n.col-lg-9{\r\n    text-align: left;\r\n}\r\n\r\nh1{\r\n    border-bottom: .5rem solid #f8db10;\r\n    width: 3rem;\r\n    padding-bottom: 1rem;\r\n    margin-bottom: 3rem;\r\n}\r\n\r\n.question {\r\n    position: relative;\r\n    right: 33px;\r\n}\r\n\r\n/* \r\n.asteroids {\r\n    position: relative;\r\n    left: 310px;\r\n    top: 30px;\r\n} */\r\n\r\n#asteroids-hold {\r\n    margin-top: 1rem;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    /* establish flex container */\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: column;\r\n            flex-direction: column;\r\n    /* stack flex items vertically */\r\n    -webkit-box-pack: center;\r\n        -ms-flex-pack: center;\r\n            justify-content: center;\r\n    /* center items vertically, in this case */\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n    /* center items horizontally, in this case */\r\n    height: 50vh;\r\n    text-align: center;\r\n}\r\n\r\n.game{\r\n    margin-top: 1rem;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    /* establish flex container */\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: column;\r\n            flex-direction: column;\r\n    /* stack flex items vertically */\r\n    -webkit-box-pack: center;\r\n        -ms-flex-pack: center;\r\n            justify-content: center;\r\n    /* center items vertically, in this case */\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n    /* center items horizontally, in this case */\r\n    height:30vh;\r\n    text-align: left;\r\n}"

/***/ }),

/***/ "./src/app/components/main/main.component.html":
/***/ (function(module, exports) {

module.exports = "<body>\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n      <div class=\"col-lg-3\">\r\n        <h1>About</h1>\r\n      </div>\r\n      <div class=\"col-lg-9\">\r\n        <p>\r\n          We’re exploring a galaxy far far away and you’re invited!\r\n          <br>\r\n          <br>BadHacks is IEEE NU’s annual mini-hackathon where you are not only allowed, but encouraged to bring your worst\r\n          tech ideas to life. This year, we upped our marketing budget just enough to have a theme: sci-fi! Explore your\r\n          dark side with the baddest hack that makes Darth Vader cringe! Challenge your inner sci-fi fan to replicate some\r\n          of the futuristic tech we think is only for movies! Create something that has nothing to do with sci-fi! Whatever\r\n          your counter-productive idea is, make it come to life at BadHacks.\r\n          <br>\r\n          <br>Prizes will probably include lightsabers and up to $100 in Amazon gift cards. Of course, everyone will receive\r\n          some C-3PO knowledge. The hacks will be bad&hellip; the games that we’ll have for you will probably be worse. But\r\n          don’t worry, at least dinner will be good. Join us on Saturday, May 5th from 1-10PM at The Garage!\r\n          <br>\r\n          <br> And may the\r\n          <del>4th</del> 5th be with you.\r\n          <br>\r\n          <br>Register here:\r\n          <a target=\"_blank\" href=\"https://ieeenu.typeform.com/to/yzfvvH\">BadHacks 2018 Registration Form</a>\r\n          <br>Check out the event on\r\n          <a target=\"_blank\" href=\"https://www.facebook.com/events/161417684539017/\">Facebook</a>!\r\n          <br>And don't forget to join our Slack channel!\r\n          <a target=\"_blank\" href=\"https://join.slack.com/t/ieee-nu/shared_invite/enQtMzU4Mjg1OTIxNjgwLTY1ZDc1ZjllYjg2N2M1MjY4MDY2ZGY3YmEzMGI1YzFiMTlkMTI5NmE2ZTVjOWZjNWFmOTI5MTg1YTQ3NmFhMjg\">BadHacks 2018 Slack Channel</a>\r\n\r\n        </p>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n      <div class=\"col-lg-3\">\r\n        <h1>Event Schedule</h1>\r\n      </div>\r\n      <div class=\"col-lg-9 schedule\">\r\n        <p>1:00 PM:\r\n          <span class=\"event\">Registration and Sign in</span>\r\n        </p>\r\n        <p>1:30 PM:\r\n          <span class=\"event\">Opening Ceremony</span>\r\n        </p>\r\n        <p>2:00 PM:\r\n          <span class=\"event\">Hacking Begins</span>\r\n        </p>\r\n        <p>4:00 PM:\r\n          <span class=\"event\">Blindfolded Partner Typeracer</span>\r\n        </p>\r\n        <p>6:00 PM:\r\n          <span class=\"event\">Dinner</span>\r\n        </p>\r\n        <p>8:00 PM:\r\n          <span class=\"event\">Fibbage</span>\r\n        </p>\r\n        <p>9:00 PM:\r\n          <span class=\"event\">Hacking Concludes</span>\r\n        </p>\r\n        <p>9:00 PM:\r\n          <span class=\"event\">Project Expo</span>\r\n        </p>\r\n        <p>9:30 PM:\r\n          <span class=\"event\">Closing Ceremony</span>\r\n        </p>\r\n\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n      <div class=\"col-lg-3\">\r\n        <h1>FAQ</h1>\r\n      </div>\r\n      <div class=\"col-lg-9 faq\">\r\n        <div id=\"accordion\" style=\"text-align: left;\">\r\n          <div class=\"card\">\r\n            <div class=\"card-header\" id=\"headingOne\">\r\n              <h5 class=\"mb-0\">\r\n                <button class=\"btn btn-link collapsed\" data-toggle=\"collapse\" data-target=\"#collapseOne\" aria-expanded=\"true\" aria-controls=\"collapseOne\">\r\n                  <div class=\"question\">Why the Sci-Fi theme?</div>\r\n                </button>\r\n              </h5>\r\n            </div>\r\n\r\n            <div id=\"collapseOne\" class=\"collapse\" aria-labelledby=\"headingOne\" data-parent=\"#accordion\">\r\n              <div class=\"card-body\">\r\n                You must question our decisions not. Hmmmmmm.\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"card\">\r\n            <div class=\"card-header\" id=\"headingTwo\">\r\n              <h5 class=\"mb-0\">\r\n                <button class=\"btn btn-link collapsed\" data-toggle=\"collapse\" data-target=\"#collapseTwo\" aria-expanded=\"false\" aria-controls=\"collapseTwo\">\r\n                  <div class=\"question\">I'm new to coding. Will I be out of place?</div>\r\n                </button>\r\n              </h5>\r\n            </div>\r\n            <div id=\"collapseTwo\" class=\"collapse\" aria-labelledby=\"headingTwo\" data-parent=\"#accordion\">\r\n              <div class=\"card-body\">\r\n                No, good thing that is. Everyone starts somewhere, and what better place to start than a bad-hackathon? We'll have mentors\r\n                at hand to help you out if you're struggling, and plenty of games so you can blow off steam. Come through,\r\n                you must.\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"card\">\r\n            <div class=\"card-header\" id=\"headingThree\">\r\n              <h5 class=\"mb-0\">\r\n                <button class=\"btn btn-link collapsed\" data-toggle=\"collapse\" data-target=\"#collapseThree\" aria-expanded=\"false\" aria-controls=\"collapseThree\">\r\n                  <div class=\"question\">What prizes can I win?</div>\r\n                </button>\r\n              </h5>\r\n            </div>\r\n            <div id=\"collapseThree\" class=\"collapse\" aria-labelledby=\"headingThree\" data-parent=\"#accordion\">\r\n              <div class=\"card-body\">\r\n                Offering giftcards and other miscellaneous sci-fi related gifts, we are.\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"card\">\r\n            <div class=\"card-header\" id=\"headingFour\">\r\n              <h5 class=\"mb-0\">\r\n                <button class=\"btn btn-link collapsed\" data-toggle=\"collapse\" data-target=\"#collapseFour\" aria-expanded=\"false\" aria-controls=\"collapseFour\">\r\n                  <div class=\"question\">I have more questions.</div>\r\n                </button>\r\n              </h5>\r\n            </div>\r\n            <div id=\"collapseFour\" class=\"collapse\" aria-labelledby=\"headingFour\" data-parent=\"#accordion\">\r\n              <div class=\"card-body\">\r\n                Email us, you can:\r\n                <a href=\"mailto:ieee@u.northwestern.edu\">ieee(at)u.northwestern.edu</a>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n      <div class=\"col-lg-3\">\r\n        <h1>Photos from BadHacks 2017</h1>\r\n      </div>\r\n      <div class=\"col-lg-9 pics\">\r\n        <div id=\"carouselExampleIndicators\" class=\"carousel slide\" data-ride=\"carousel\">\r\n          <ol class=\"carousel-indicators\">\r\n            <li data-target=\"#carouselExampleIndicators\" data-slide-to=\"0\" class=\"active\"></li>\r\n            <li data-target=\"#carouselExampleIndicators\" data-slide-to=\"1\"></li>\r\n            <li data-target=\"#carouselExampleIndicators\" data-slide-to=\"2\"></li>\r\n            <li data-target=\"#carouselExampleIndicators\" data-slide-to=\"3\"></li>\r\n            <li data-target=\"#carouselExampleIndicators\" data-slide-to=\"4\"></li>\r\n          </ol>\r\n          <div class=\"carousel-inner\">\r\n            <div class=\"carousel-item active\">\r\n              <img class=\"d-block w-100\" src=\"assets/DSC_0594.JPG\" alt=\"First slide\">\r\n            </div>\r\n            <div class=\"carousel-item\">\r\n              <img class=\"d-block w-100\" src=\"assets/DSC_0678.JPG\" alt=\"Second slide\">\r\n            </div>\r\n            <div class=\"carousel-item\">\r\n              <img class=\"d-block w-100\" src=\"assets/DSC_0672.JPG\" alt=\"Third slide\">\r\n            </div>\r\n            <div class=\"carousel-item\">\r\n              <img class=\"d-block w-100\" src=\"assets/DSC_0705.JPG\" alt=\"Fourth slide\">\r\n            </div>\r\n            <div class=\"carousel-item\">\r\n              <img class=\"d-block w-100\" src=\"assets/DSC_0679.JPG\" alt=\"Fifth slide\">\r\n            </div>\r\n          </div>\r\n\r\n          <a class=\"carousel-control-prev\" href=\"#carouselExampleIndicators\" role=\"button\" data-slide=\"prev\">\r\n            <span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span>\r\n            <span class=\"sr-only\">Previous</span>\r\n          </a>\r\n          <a class=\"carousel-control-next\" href=\"#carouselExampleIndicators\" role=\"button\" data-slide=\"next\">\r\n            <span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span>\r\n            <span class=\"sr-only\">Next</span>\r\n          </a>\r\n\r\n        </div>\r\n\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n      <div class=\"col-lg-3\">\r\n        <h1>Fun and Games</h1>\r\n      </div>\r\n      <div class=\"col-lg-9 game\">\r\n        <p>A little bored at BadHacks? Try this game developed by IEEE members! Available for Mac and PC.\r\n          <br>\r\n          <a href=\"assets/SecondLawIEEEPC.exe\"><strong>Second Law Download</strong></a>\r\n        </p>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</body>"

/***/ }),

/***/ "./src/app/components/main/main.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MainComponent = /** @class */ (function () {
    function MainComponent() {
    }
    MainComponent.prototype.ngOnInit = function () {
    };
    MainComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-main',
            template: __webpack_require__("./src/app/components/main/main.component.html"),
            styles: [__webpack_require__("./src/app/components/main/main.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], MainComponent);
    return MainComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: true
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map