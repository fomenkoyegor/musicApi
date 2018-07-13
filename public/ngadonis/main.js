(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <app-post></app-post>\r\n<app-posts></app-posts> -->\r\n<!--<app-music></app-music>-->\r\n<app-navbar></app-navbar>\r\n\r\n\r\n<router-outlet></router-outlet>\r\n\r\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _components_post_post_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/post/post.component */ "./src/app/components/post/post.component.ts");
/* harmony import */ var _components_posts_posts_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/posts/posts.component */ "./src/app/components/posts/posts.component.ts");
/* harmony import */ var _components_music_music_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/music/music.component */ "./src/app/components/music/music.component.ts");
/* harmony import */ var _servises_auth_guard__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./servises/auth.guard */ "./src/app/servises/auth.guard.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_auth_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./auth/auth.component */ "./src/app/auth/auth.component.ts");
/* harmony import */ var _pagenotfound_pagenotfound_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pagenotfound/pagenotfound.component */ "./src/app/pagenotfound/pagenotfound.component.ts");
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/navbar/navbar.component */ "./src/app/components/navbar/navbar.component.ts");
/* harmony import */ var _components_mymusic_mymusic_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/mymusic/mymusic.component */ "./src/app/components/mymusic/mymusic.component.ts");
/* harmony import */ var _components_cover_cover_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/cover/cover.component */ "./src/app/components/cover/cover.component.ts");
/* harmony import */ var _components_player_player_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/player/player.component */ "./src/app/components/player/player.component.ts");
/* harmony import */ var _components_audio_audio_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/audio/audio.component */ "./src/app/components/audio/audio.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















var routes = [
    { path: '', redirectTo: '/music', pathMatch: 'full' },
    { path: 'music', component: _components_music_music_component__WEBPACK_IMPORTED_MODULE_7__["MusicComponent"], canActivate: [_servises_auth_guard__WEBPACK_IMPORTED_MODULE_8__["AuthGuard"]] },
    { path: 'mymusic', component: _components_mymusic_mymusic_component__WEBPACK_IMPORTED_MODULE_13__["MymusicComponent"], canActivate: [_servises_auth_guard__WEBPACK_IMPORTED_MODULE_8__["AuthGuard"]] },
    { path: 'player', component: _components_player_player_component__WEBPACK_IMPORTED_MODULE_15__["PlayerComponent"], canActivate: [_servises_auth_guard__WEBPACK_IMPORTED_MODULE_8__["AuthGuard"]] },
    { path: 'audio', component: _components_audio_audio_component__WEBPACK_IMPORTED_MODULE_16__["AudioComponent"], canActivate: [_servises_auth_guard__WEBPACK_IMPORTED_MODULE_8__["AuthGuard"]] },
    { path: 'auth', component: _auth_auth_component__WEBPACK_IMPORTED_MODULE_10__["AuthComponent"], canActivate: [_servises_auth_guard__WEBPACK_IMPORTED_MODULE_8__["NoAuthGuard"]] },
    { path: '**', component: _pagenotfound_pagenotfound_component__WEBPACK_IMPORTED_MODULE_11__["PagenotfoundComponent"] },
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _components_post_post_component__WEBPACK_IMPORTED_MODULE_5__["PostComponent"],
                _components_posts_posts_component__WEBPACK_IMPORTED_MODULE_6__["PostsComponent"],
                _components_music_music_component__WEBPACK_IMPORTED_MODULE_7__["MusicComponent"],
                _auth_auth_component__WEBPACK_IMPORTED_MODULE_10__["AuthComponent"],
                _pagenotfound_pagenotfound_component__WEBPACK_IMPORTED_MODULE_11__["PagenotfoundComponent"],
                _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_12__["NavbarComponent"],
                _components_mymusic_mymusic_component__WEBPACK_IMPORTED_MODULE_13__["MymusicComponent"],
                _components_cover_cover_component__WEBPACK_IMPORTED_MODULE_14__["CoverComponent"],
                _components_player_player_component__WEBPACK_IMPORTED_MODULE_15__["PlayerComponent"],
                _components_audio_audio_component__WEBPACK_IMPORTED_MODULE_16__["AudioComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_9__["RouterModule"].forRoot(routes)
            ],
            providers: [_servises_auth_guard__WEBPACK_IMPORTED_MODULE_8__["AuthGuard"], _servises_auth_guard__WEBPACK_IMPORTED_MODULE_8__["NoAuthGuard"]],
            bootstrap: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]
            ]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/auth/auth.component.css":
/*!*****************************************!*\
  !*** ./src/app/auth/auth.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/auth/auth.component.html":
/*!******************************************!*\
  !*** ./src/app/auth/auth.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "    <h2>{{msg}}</h2>\n    <div class=\"form\">\n        <input type=\"text\" [(ngModel)]=\"email\" placeholder=\"email\">\n        <input type=\"text\" [(ngModel)]=\"password\" placeholder=\"password\">\n        <button (click)=\"onLogin()\" *ngIf=\"mod==='login'\" >login</button>\n        <button (click)=\"onRegister()\" *ngIf=\"mod==='register'\" >register</button>\n        <span *ngIf=\"mod==='login'\" (click)=\"mod='register'\" >register</span>\n        <span *ngIf=\"mod==='register'\" (click)=\"mod='login'\" >login</span>\n    </div>"

/***/ }),

/***/ "./src/app/auth/auth.component.ts":
/*!****************************************!*\
  !*** ./src/app/auth/auth.component.ts ***!
  \****************************************/
/*! exports provided: AuthComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthComponent", function() { return AuthComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _servises_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../servises/auth.service */ "./src/app/servises/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthComponent = /** @class */ (function () {
    function AuthComponent(authServise, router) {
        this.authServise = authServise;
        this.router = router;
        this.email = '';
        this.password = '';
        this.msg = '';
        this.mod = 'login';
    }
    AuthComponent.prototype.ngOnInit = function () {
    };
    AuthComponent.prototype.onLogin = function () {
        var _this = this;
        if (!this.email || !this.password) {
            this.message('enter all fields');
            return;
        }
        this.authServise.login(this.email, this.password)
            .subscribe(function (res) {
            _this.message(res['msg']);
            if (res['token']) {
                _this.router.navigate(['/']);
            }
            console.log(res);
        });
    };
    AuthComponent.prototype.onRegister = function () {
        var _this = this;
        if (!this.email || !this.password) {
            this.message('enter all fields');
            return;
        }
        this.authServise.register(this.email, this.password)
            .subscribe(function (res) {
            _this.message(res['msg']);
            if (res['token']) {
                _this.router.navigate(['/']);
            }
            console.log(res);
        });
    };
    AuthComponent.prototype.message = function (text) {
        var _this = this;
        this.msg = text;
        setTimeout(function () {
            _this.msg = '';
        }, 1000);
    };
    AuthComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-auth',
            template: __webpack_require__(/*! ./auth.component.html */ "./src/app/auth/auth.component.html"),
            styles: [__webpack_require__(/*! ./auth.component.css */ "./src/app/auth/auth.component.css")]
        }),
        __metadata("design:paramtypes", [_servises_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AuthComponent);
    return AuthComponent;
}());



/***/ }),

/***/ "./src/app/components/audio/audio.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/audio/audio.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".icon img{\r\n    width: 100%;\r\n    height: 100%;\r\n}\r\n\r\n.playlist{\r\n    width: 33%;\r\n    height: 500px;\r\n    overflow-y: scroll;\r\n}\r\n\r\n.playlist .list{\r\n    height: 50px;\r\n    width: 100%;\r\n    display: flex;\r\n    cursor: pointer;\r\n\r\n}\r\n\r\n.playlist .list .icon{\r\n    height: 100%;\r\n    width:50px;\r\n\r\n}\r\n\r\n.playlist .list .info{\r\n    height: 100%;\r\n    flex-grow: 1;\r\n    background: #141e30;\r\n    color: aliceblue;\r\n    padding-left: 5px;\r\n\r\n}\r\n\r\n.playlist .list.act .info{\r\n    background: rgba(6,17,97,0.72);\r\n    color: wheat;\r\n\r\n}\r\n\r\n.control,.playlist{\r\n    background: rgba(20,30,48,0.72);\r\n    width: 33%;\r\n}\r\n\r\n.control .btn{\r\n    background: rgba(0, 0, 0, 0.62);\r\n    color: aliceblue;\r\n}\r\n\r\n.control{\r\n    background-size: cover;\r\n    background-position: center;\r\n    transition: all ease 1s;\r\n}\r\n\r\n.player{\r\n    display: flex;\r\n}\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/components/audio/audio.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/audio/audio.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"player\">\n    <div class=\"playlist\">\n        <div\n                class=\"list\"\n                *ngFor=\"let m of allMusic;let i = index;\"\n                (click)=\"playP(i)\"\n                [class.act]=\"i===cur\"\n        >\n\n            <div class=\"icon\">\n                <img src=\"{{prefix}}{{m.icon}}\">\n            </div>\n            <div class=\"info\">\n                <h5>{{m.title}}</h5>\n                <h6>{{m.singer}}</h6>\n                <p>\n                    <span> {{ m.genre }} </span>\n                    <span> {{ m.year }} </span>\n\n\n                </p>\n            </div>\n        </div>\n    </div>\n\n\n    <div  class=\"control\" [ngStyle]=\"{'background-image':'url('+imgList[cur]+')'}\">\n\n        <div class=\"btn\">\n            <audio #player [attr.src]=\"musicList[cur]\" autoplay controls></audio>\n            <p>{{cur+1}} / {{musicList.length}}</p>\n            <button (click)=\"prevP()\">prev</button>\n            <button (click)=\"playP()\">play</button>\n            <button (click)=\"pauseP()\">pause</button>\n            <button (click)=\"nextP()\">next</button>\n        </div>\n\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/components/audio/audio.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/audio/audio.component.ts ***!
  \*****************************************************/
/*! exports provided: AudioComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AudioComponent", function() { return AudioComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _servises_mus_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../servises/mus.service */ "./src/app/servises/mus.service.ts");
/* harmony import */ var _untils_constans__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../untils/constans */ "./src/app/untils/constans.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AudioComponent = /** @class */ (function () {
    function AudioComponent(mus) {
        this.mus = mus;
        this.musicList = [];
        this.imgList = [];
        this.allMusic = [];
        this.cur = 0;
        this.prefix = _untils_constans__WEBPACK_IMPORTED_MODULE_2__["Constans"].url();
    }
    AudioComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.playP();
        this.mus.getMusic()
            .subscribe(function (res) {
            var arr = res['music'];
            _this.allMusic = res['music'];
            Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["from"])(arr)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (e) { return _this.musicList.push(_this.prefix + e['path']); }))
                .subscribe();
            Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["from"])(arr)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (c) { return _this.imgList.push(_this.prefix + c['cover']); }))
                .subscribe();
        });
    };
    AudioComponent.prototype.ngAfterViewInit = function () {
    };
    AudioComponent.prototype.nextP = function () {
        if (this.cur === this.musicList.length - 1) {
            this.cur = 0;
        }
        else {
            this.cur++;
        }
        this.playP();
    };
    AudioComponent.prototype.prevP = function () {
        if (this.cur === 0) {
            this.cur = this.musicList.length - 1;
        }
        else {
            this.cur--;
        }
        this.playP();
    };
    AudioComponent.prototype.playP = function (count) {
        if (count === void 0) { count = this.cur; }
        this.cur = count;
        this.player.nativeElement.play();
    };
    AudioComponent.prototype.pauseP = function () {
        this.player.nativeElement.pause();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('player'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], AudioComponent.prototype, "player", void 0);
    AudioComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-audio',
            template: __webpack_require__(/*! ./audio.component.html */ "./src/app/components/audio/audio.component.html"),
            styles: [__webpack_require__(/*! ./audio.component.css */ "./src/app/components/audio/audio.component.css")]
        }),
        __metadata("design:paramtypes", [_servises_mus_service__WEBPACK_IMPORTED_MODULE_1__["MusService"]])
    ], AudioComponent);
    return AudioComponent;
}());



/***/ }),

/***/ "./src/app/components/cover/cover.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/cover/cover.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/cover/cover.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/cover/cover.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [ngStyle]=\"{\n            'background-color':'green',\n            'width':'150px',\n            'height':'150px',\n            'background-image':'url('+img+')',\n            'background-size': 'center',\n            'background-repeat': 'no-repeat',\n            'background-position': 'center'\n}\"></div>\n"

/***/ }),

/***/ "./src/app/components/cover/cover.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/cover/cover.component.ts ***!
  \*****************************************************/
/*! exports provided: CoverComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoverComponent", function() { return CoverComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _untils_constans__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../untils/constans */ "./src/app/untils/constans.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CoverComponent = /** @class */ (function () {
    function CoverComponent() {
        this.prefix = '';
        this.img = '';
    }
    CoverComponent.prototype.ngOnInit = function () {
        this.prefix = _untils_constans__WEBPACK_IMPORTED_MODULE_1__["Constans"].url();
        this.img = "" + this.prefix + this.cover;
        console.log(this.img);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], CoverComponent.prototype, "cover", void 0);
    CoverComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-cover',
            template: __webpack_require__(/*! ./cover.component.html */ "./src/app/components/cover/cover.component.html"),
            styles: [__webpack_require__(/*! ./cover.component.css */ "./src/app/components/cover/cover.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CoverComponent);
    return CoverComponent;
}());



/***/ }),

/***/ "./src/app/components/music/music.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/music/music.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/music/music.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/music/music.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<label for=\"cover\">addAlbumCover<input #fileCover type=\"file\" id=\"cover\"/></label><br>\n<input type=\"text\" name=\"title\" placeholder=\"title\" [(ngModel)]=\"title\"><br>\n<input type=\"text\" name=\"singer\" placeholder=\"singer\" [(ngModel)]=\"singer\"><br>\n<input type=\"text\" name=\"genre\" placeholder=\"genre\" [(ngModel)]=\"genre\"><br>\n<input type=\"number\" name=\"year\" placeholder=\"year\" [(ngModel)]=\"year\" min=\"2000\" max=\"2018\"><br>\n<label for=\"mus\">addMusic<input #fileInput type=\"file\" id=\"mus\"/></label>\n\n<button (click)=\"addMusic()\">add</button>\n<p>{{loading}}</p>\n<hr>\n\n<ul>\n    <li *ngFor=\"let music of musics.reverse()\">\n        <p><span>{{music.title }}</span>_<span>{{ music.singer}}</span></p>\n        <img src=\"{{prefix}}{{music.icon}}\" alt=\"icon\" width=\"50\">\n        <img src=\"{{prefix}}{{music.cover}}\" alt=\"icon\" width=\"50\">\n        <app-cover [cover]=\"music.cover\"></app-cover>\n        <audio controls>\n            <source src=\"{{prefix}}{{music.path}}\" type=\"audio/ogg; codecs=vorbis\">\n        </audio>\n        <p><span>{{music.genre }}</span>_<span>{{ music.year}}</span></p>\n        <p>created in {{music.created_at}} user: {{music.username}}</p>\n    </li>\n</ul>\n\n\n"

/***/ }),

/***/ "./src/app/components/music/music.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/music/music.component.ts ***!
  \*****************************************************/
/*! exports provided: MusicComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MusicComponent", function() { return MusicComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _servises_mus_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../servises/mus.service */ "./src/app/servises/mus.service.ts");
/* harmony import */ var _untils_constans__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../untils/constans */ "./src/app/untils/constans.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MusicComponent = /** @class */ (function () {
    function MusicComponent(mus) {
        this.mus = mus;
        this.musics = [];
        this.title = '';
        this.prefix = '';
        this.loading = '';
        this.fileInput = null;
        this.fileCover = null;
        this.year = '';
        this.genre = '';
        this.singer = '';
    }
    MusicComponent.prototype.ngOnInit = function () {
        this.getMusic();
    };
    MusicComponent.prototype.getMusic = function () {
        var _this = this;
        this.prefix = _untils_constans__WEBPACK_IMPORTED_MODULE_2__["Constans"].url();
        this.mus.getMusic().subscribe(function (res) {
            _this.musics = res['music'];
            console.log(res);
        });
    };
    MusicComponent.prototype.addMusic = function () {
        var _this = this;
        if (!this.title ||
            !this.singer ||
            !this.genre ||
            !this.year ||
            !this.fileInput.nativeElement.files[0] ||
            !this.fileCover.nativeElement.files[0]) {
            return;
        }
        var file = this.fileInput.nativeElement.files[0];
        var cover = this.fileCover.nativeElement.files[0];
        var formData = new FormData();
        formData.append('title', this.title);
        formData.append('singer', this.singer);
        formData.append('genre', this.genre);
        formData.append('year', this.year);
        formData.append('file', file);
        formData.append('cover', cover);
        this.mus.postMusic(formData)
            .subscribe(function (events) {
            if (events.type === _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpEventType"].UploadProgress) {
                _this.loading = "loading: " + Math.round(events.loaded / events.total * 100) + "%";
                console.log(events);
            }
            else {
                _this.loading = 'dowload';
                setTimeout(function () { return _this.loading = ''; }, 2000);
                console.log(events);
            }
            _this.getMusic();
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('fileInput'),
        __metadata("design:type", Object)
    ], MusicComponent.prototype, "fileInput", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('fileCover'),
        __metadata("design:type", Object)
    ], MusicComponent.prototype, "fileCover", void 0);
    MusicComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-music',
            template: __webpack_require__(/*! ./music.component.html */ "./src/app/components/music/music.component.html"),
            styles: [__webpack_require__(/*! ./music.component.css */ "./src/app/components/music/music.component.css")]
        }),
        __metadata("design:paramtypes", [_servises_mus_service__WEBPACK_IMPORTED_MODULE_1__["MusService"]])
    ], MusicComponent);
    return MusicComponent;
}());



/***/ }),

/***/ "./src/app/components/mymusic/mymusic.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/mymusic/mymusic.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/mymusic/mymusic.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/mymusic/mymusic.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ul>\n  <li *ngFor=\"let music of musics.reverse()\">\n    <img src=\"{{prefix}}{{music.icon}}\" alt=\"icon\" width=\"50\">\n    <audio controls>\n      <source src=\"{{prefix}}{{music.path}}\" type=\"audio/ogg; codecs=vorbis\">\n    </audio>\n    <p>created in {{music.created_at}} user: {{music.username}}</p>\n  </li>\n</ul>"

/***/ }),

/***/ "./src/app/components/mymusic/mymusic.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/mymusic/mymusic.component.ts ***!
  \*********************************************************/
/*! exports provided: MymusicComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MymusicComponent", function() { return MymusicComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _servises_mus_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../servises/mus.service */ "./src/app/servises/mus.service.ts");
/* harmony import */ var _untils_constans__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../untils/constans */ "./src/app/untils/constans.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MymusicComponent = /** @class */ (function () {
    function MymusicComponent(mus) {
        this.mus = mus;
        this.musics = [];
    }
    MymusicComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.prefix = _untils_constans__WEBPACK_IMPORTED_MODULE_2__["Constans"].url();
        this.mus.getMyMusic().subscribe(function (res) {
            _this.musics = res['music'];
            console.log(res);
        });
    };
    MymusicComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-mymusic',
            template: __webpack_require__(/*! ./mymusic.component.html */ "./src/app/components/mymusic/mymusic.component.html"),
            styles: [__webpack_require__(/*! ./mymusic.component.css */ "./src/app/components/mymusic/mymusic.component.css")]
        }),
        __metadata("design:paramtypes", [_servises_mus_service__WEBPACK_IMPORTED_MODULE_1__["MusService"]])
    ], MymusicComponent);
    return MymusicComponent;
}());



/***/ }),

/***/ "./src/app/components/navbar/navbar.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*nav ul{*/\r\n    /*display: flex;*/\r\n    /*}*/\r\n    /*ul li a{*/\r\n    /*padding: 1em;*/\r\n    /*background: black;*/\r\n    /*color: gray;*/\r\n    /*}*/\r\n    /*ul li a.active{*/\r\n    /*background: black;*/\r\n    /*color: wheat;*/\r\n    /*}*/\r\n    nav{\r\n    width: 100%;\r\n}\r\n    nav ul{\r\n    display: flex;\r\n    justify-content: space-around;\r\n    background: #000;\r\n}\r\n    nav ul li{\r\n    padding: .3rem;\r\n    width: 100%;\r\n    text-align: center;\r\n    transition: all 1s;\r\n    background: #000;\r\n}\r\n    nav ul li:hover{\r\n    background: #0d3349;\r\n\r\n}\r\n    nav ul li a{\r\n    display: block;\r\n    color: gray;\r\n}\r\n    nav ul li a.active{\r\n    color: wheat;\r\n}"

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n    <nav>\n        <ul>\n\n            <li><a routerLink=\"/music\"\n                   routerLinkActive=\"active\"\n                   [routerLinkActiveOptions]=\"{exact:true}\"\n            >AllMusic</a></li>\n\n            <li><a routerLink=\"/mymusic\"\n                   routerLinkActive=\"active\"\n                   [routerLinkActiveOptions]=\"{exact:true}\"\n            >MyMusic</a>\n\n            </li>\n            <li><a routerLink=\"/player\"\n                   routerLinkActive=\"active\"\n                   [routerLinkActiveOptions]=\"{exact:true}\"\n            >PLAY</a>\n\n            </li><li><a routerLink=\"/audio\"\n                   routerLinkActive=\"active\"\n                   [routerLinkActiveOptions]=\"{exact:true}\"\n            >Audio</a></li>\n\n\n        </ul>\n    </nav>\n\n\n"

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.ts ***!
  \*******************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _servises_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../servises/auth.service */ "./src/app/servises/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/components/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.css */ "./src/app/components/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [_servises_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/components/player/player.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/player/player.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".init {\r\n    width: 100%;\r\n    background-size: cover;\r\n    background-position: center;\r\n    /*background-repeat: inherit;*/\r\n    transition: all ease 1s;\r\n\r\n}\r\n\r\n.init ul li {\r\n    border: black 1px solid\r\n}\r\n\r\n.init ul li.active {\r\n    background: rgba(0, 0, 0, 0.64);\r\n    color: wheat;\r\n}\r\n\r\n.init ul {\r\n    background: rgba(13, 51, 73, 0.68);\r\n    color: aliceblue;\r\n}\r\n\r\n.controll {\r\n    position: fixed;\r\n    padding: 1rem;\r\n    background: rgba(0, 0, 0, 0.5);\r\n    box-sizing: border-box;\r\n    color: aliceblue;\r\n    left: 0;\r\n    right: 0;\r\n    display: flex;\r\n    justify-content: center;\r\n    bottom: 0;\r\n}\r\n\r\n.controll .indicator {\r\n    width: 50px;\r\n    height: 50px;\r\n    background: #0d3349;\r\n    border-radius: 50%;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n\r\n.controll .indicator span {\r\n    display: block;\r\n    width: 10px;\r\n    height: 10px;\r\n    background: royalblue;\r\n    border-radius: 50%;\r\n\r\n}\r\n\r\n.controll .indicator span.active {\r\n    background: red;\r\n    -webkit-animation: flip ease 1s infinite;\r\n            animation: flip ease 1s infinite;\r\n}\r\n\r\n@-webkit-keyframes flip {\r\n    from {\r\n        -webkit-transform: scale(1);\r\n                transform: scale(1);\r\n        opacity: 1\r\n    }\r\n    to {\r\n        -webkit-transform: scale(2);\r\n                transform: scale(2);\r\n        opacity: 0.1\r\n    }\r\n}\r\n\r\n@keyframes flip {\r\n    from {\r\n        -webkit-transform: scale(1);\r\n                transform: scale(1);\r\n        opacity: 1\r\n    }\r\n    to {\r\n        -webkit-transform: scale(2);\r\n                transform: scale(2);\r\n        opacity: 0.1\r\n    }\r\n}\r\n"

/***/ }),

/***/ "./src/app/components/player/player.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/player/player.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"init\" [ngStyle]=\"{'background-image':'url('+bgImage+')'}\">\r\n    <ul>\r\n        <li *ngFor=\"let m of songs;let i = index\" (click)=\"pl(i)\" [class.active]=\"i===currenPosition\">\r\n            <img src=\"{{prefix+m.icon}}\" width=\"50\" height=\"50\">\r\n            <span>{{m.title}}</span>\r\n            <span>( {{m.singer}} )</span>\r\n            <span> {{m.genre}} {{m.year}}</span>\r\n        </li>\r\n    </ul>\r\n\r\n\r\n    <div class=\"controll\">\r\n        <div>\r\n            <p>{{currenPosition+1}}/{{music.length}}</p>\r\n\r\n            <button (click)=\"pr()\">prev</button>\r\n            <button (click)=\"pl()\">play</button>\r\n            <button (click)=\"ps()\">pause</button>\r\n            <button (click)=\"nxt()\">next</button>\r\n            <div class=\"indicator\">\r\n                <span [class.active]=\"isPlay\"></span>\r\n            </div>\r\n\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/components/player/player.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/player/player.component.ts ***!
  \*******************************************************/
/*! exports provided: PlayerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayerComponent", function() { return PlayerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _servises_mus_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../servises/mus.service */ "./src/app/servises/mus.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _untils_constans__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../untils/constans */ "./src/app/untils/constans.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
///<reference path="../../../../node_modules/rxjs/internal/Observable.d.ts"/>





var PlayerComponent = /** @class */ (function () {
    function PlayerComponent(mus) {
        this.mus = mus;
        this.songs = [];
        this.audio = new Audio();
        this.music = [];
        this.currenPosition = 0;
        this.isPlay = false;
        this.images = [];
        this.bgImage = '';
    }
    PlayerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.prefix = _untils_constans__WEBPACK_IMPORTED_MODULE_4__["Constans"].url();
        this.mus.getMusic()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res['music']; }))
            .subscribe(function (res) {
            _this.songs = res;
            var path = res;
            Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["from"])(path)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (e) { return _this.music.push(e['path']); }))
                .subscribe();
            Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["from"])(path)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (c) { return _this.images.push(c['cover']); }))
                .subscribe();
        });
    };
    PlayerComponent.prototype.pl = function (m) {
        if (m === void 0) { m = this.currenPosition; }
        this.isPlay = true;
        this.currenPosition = m;
        this.audio.src = "" + this.prefix + this.music[m];
        this.audio.load();
        this.audio.play();
        this.bgImage = "" + this.prefix + this.images[m];
        console.log(this.audio.duration);
    };
    PlayerComponent.prototype.nxt = function () {
        if (this.currenPosition >= this.music.length - 1) {
            this.currenPosition = 0;
        }
        else {
            this.currenPosition = this.currenPosition + 1;
        }
        this.pl();
    };
    PlayerComponent.prototype.pr = function () {
        if (this.currenPosition === 0) {
            this.currenPosition = this.music.length - 1;
        }
        else {
            this.currenPosition = this.currenPosition - 1;
        }
        this.pl();
    };
    PlayerComponent.prototype.ps = function () {
        this.isPlay = false;
        this.audio.pause();
        this.bgImage = '';
    };
    PlayerComponent.prototype.ngOnDestroy = function () {
        this.audio = new Audio();
    };
    PlayerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-player',
            template: __webpack_require__(/*! ./player.component.html */ "./src/app/components/player/player.component.html"),
            styles: [__webpack_require__(/*! ./player.component.css */ "./src/app/components/player/player.component.css")]
        }),
        __metadata("design:paramtypes", [_servises_mus_service__WEBPACK_IMPORTED_MODULE_1__["MusService"]])
    ], PlayerComponent);
    return PlayerComponent;
}());



/***/ }),

/***/ "./src/app/components/post/post.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/post/post.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/post/post.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/post/post.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<form [formGroup]=\"postForm\" (submit)=\"addPost(postForm.value)\">\r\n\r\n        <div>\r\n            <label for=\"title\">Title</label>\r\n            <input type=\"text\" name=\"title\" required [formControl]=\"postForm.controls['title']\" placeholder=\"title\" id=\"title\">\r\n        </div>\r\n    \r\n        <div>\r\n            <label for=\"body\">Body</label>\r\n            <input type=\"text\" name=\"body\" required [formControl]=\"postForm.controls['body']\" placeholder=\"body\" id=\"body\">\r\n        </div>\r\n    \r\n        <div>\r\n            <input type=\"submit\" [disabled]=\"!postForm.valid\">\r\n        </div>\r\n    \r\n    \r\n    </form>"

/***/ }),

/***/ "./src/app/components/post/post.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/post/post.component.ts ***!
  \***************************************************/
/*! exports provided: PostComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostComponent", function() { return PostComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _servises_adonis_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../servises/adonis.service */ "./src/app/servises/adonis.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PostComponent = /** @class */ (function () {
    function PostComponent(ad, fb) {
        this.ad = ad;
        this.fb = fb;
        this.postForm = fb.group({
            'title': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(1),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(15)
                ])],
            'body': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(1),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(150)
                ])]
        });
    }
    PostComponent.prototype.ngOnInit = function () {
    };
    PostComponent.prototype.addPost = function (post) {
        this.ad.addPost(post);
        this.postForm.reset();
    };
    PostComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-post',
            template: __webpack_require__(/*! ./post.component.html */ "./src/app/components/post/post.component.html"),
            styles: [__webpack_require__(/*! ./post.component.css */ "./src/app/components/post/post.component.css")]
        }),
        __metadata("design:paramtypes", [_servises_adonis_service__WEBPACK_IMPORTED_MODULE_1__["AdonisService"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])
    ], PostComponent);
    return PostComponent;
}());



/***/ }),

/***/ "./src/app/components/posts/posts.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/posts/posts.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/posts/posts.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/posts/posts.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<ul>\n  <li *ngFor=\"let post of posts.reverse()\">\n    <p>{{post.title}}</p>\n    <p>{{post.body}}</p>\n    <button (click)=\"onDelete(post.id)\">del</button>\n  </li>\n</ul>"

/***/ }),

/***/ "./src/app/components/posts/posts.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/posts/posts.component.ts ***!
  \*****************************************************/
/*! exports provided: PostsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostsComponent", function() { return PostsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _servises_adonis_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../servises/adonis.service */ "./src/app/servises/adonis.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PostsComponent = /** @class */ (function () {
    function PostsComponent(adonisServise) {
        this.adonisServise = adonisServise;
        this.posts = [];
    }
    PostsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getPosts();
        this.postUpdate = this.adonisServise.posts.subscribe(function () { return _this.getPosts(); });
    };
    PostsComponent.prototype.getPosts = function () {
        var _this = this;
        this.adonisServise.getPost()
            .subscribe(function (res) { return _this.posts = res; });
    };
    PostsComponent.prototype.onDelete = function (id) {
        this.adonisServise.deletePost(id);
    };
    PostsComponent.prototype.ngOnDestroy = function () {
        this.postUpdate.unsubscribe();
    };
    PostsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-posts',
            template: __webpack_require__(/*! ./posts.component.html */ "./src/app/components/posts/posts.component.html"),
            styles: [__webpack_require__(/*! ./posts.component.css */ "./src/app/components/posts/posts.component.css")]
        }),
        __metadata("design:paramtypes", [_servises_adonis_service__WEBPACK_IMPORTED_MODULE_1__["AdonisService"]])
    ], PostsComponent);
    return PostsComponent;
}());



/***/ }),

/***/ "./src/app/pagenotfound/pagenotfound.component.css":
/*!*********************************************************!*\
  !*** ./src/app/pagenotfound/pagenotfound.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pagenotfound/pagenotfound.component.html":
/*!**********************************************************!*\
  !*** ./src/app/pagenotfound/pagenotfound.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<a routerLink=\"/\">to main</a>\n\n<h1>Page not found</h1>\n"

/***/ }),

/***/ "./src/app/pagenotfound/pagenotfound.component.ts":
/*!********************************************************!*\
  !*** ./src/app/pagenotfound/pagenotfound.component.ts ***!
  \********************************************************/
/*! exports provided: PagenotfoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagenotfoundComponent", function() { return PagenotfoundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PagenotfoundComponent = /** @class */ (function () {
    function PagenotfoundComponent() {
    }
    PagenotfoundComponent.prototype.ngOnInit = function () {
    };
    PagenotfoundComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-pagenotfound',
            template: __webpack_require__(/*! ./pagenotfound.component.html */ "./src/app/pagenotfound/pagenotfound.component.html"),
            styles: [__webpack_require__(/*! ./pagenotfound.component.css */ "./src/app/pagenotfound/pagenotfound.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PagenotfoundComponent);
    return PagenotfoundComponent;
}());



/***/ }),

/***/ "./src/app/servises/adonis.service.ts":
/*!********************************************!*\
  !*** ./src/app/servises/adonis.service.ts ***!
  \********************************************/
/*! exports provided: AdonisService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdonisService", function() { return AdonisService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AdonisService = /** @class */ (function () {
    function AdonisService(http) {
        this.http = http;
        this.url = 'http://localhost:3333/api/';
        this.posts = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.data = [];
    }
    AdonisService.prototype.getPost = function () {
        return this.http.get(this.url + 'posts')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) { return res['data']; }));
    };
    AdonisService.prototype.addPost = function (post) {
        var _this = this;
        return this.http.put(this.url + 'post', post).subscribe(function (res) { return _this.posts.next(); });
    };
    AdonisService.prototype.deletePost = function (id) {
        var _this = this;
        return this.http.delete(this.url + ("post/" + id))
            .subscribe(function (res) { return _this.posts.next(); });
    };
    AdonisService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], AdonisService);
    return AdonisService;
}());



/***/ }),

/***/ "./src/app/servises/auth.guard.ts":
/*!****************************************!*\
  !*** ./src/app/servises/auth.guard.ts ***!
  \****************************************/
/*! exports provided: AuthGuard, NoAuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoAuthGuard", function() { return NoAuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth.service */ "./src/app/servises/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthGuard = /** @class */ (function () {
    function AuthGuard(router, authService) {
        this.router = router;
        this.authService = authService;
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        var _this = this;
        return this.authService.isAuth().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (b) {
            if (!b) {
                _this.router.navigate(['/auth']);
            }
        }));
    };
    AuthGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]])
    ], AuthGuard);
    return AuthGuard;
}());

var NoAuthGuard = /** @class */ (function () {
    function NoAuthGuard(router, authService) {
        this.router = router;
        this.authService = authService;
    }
    NoAuthGuard.prototype.canActivate = function (route, state) {
        var _this = this;
        return this.authService.isAuth()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (b) {
            if (b) {
                _this.router.navigate(['/']);
            }
        })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (e) { return !e; }));
    };
    NoAuthGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]])
    ], NoAuthGuard);
    return NoAuthGuard;
}());



/***/ }),

/***/ "./src/app/servises/auth.service.ts":
/*!******************************************!*\
  !*** ./src/app/servises/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _untils_constans__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../untils/constans */ "./src/app/untils/constans.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AuthService = /** @class */ (function () {
    function AuthService(http) {
        this.http = http;
    }
    AuthService.prototype.getToken = function () {
        var t = localStorage.getItem('token');
        return t ? t : null;
    };
    AuthService.prototype.setToken = function (token) {
        localStorage.setItem('token', token);
    };
    AuthService.prototype.clearToken = function () {
        localStorage.removeItem('token');
    };
    AuthService.prototype.register = function (email, password) {
        var _this = this;
        return this.http.post(_untils_constans__WEBPACK_IMPORTED_MODULE_3__["Constans"].url('/api/auth/register'), {
            email: email, password: password
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (res) {
            if (res['token']) {
                _this.setToken(res['token']);
            }
        }));
    };
    AuthService.prototype.login = function (email, password) {
        var _this = this;
        return this.http.post(_untils_constans__WEBPACK_IMPORTED_MODULE_3__["Constans"].url('/api/auth/login'), {
            email: email, password: password
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (res) {
            if (res['token']) {
                _this.setToken(res['token']);
            }
        }));
    };
    AuthService.prototype.logOut = function () {
        this.clearToken();
    };
    AuthService.prototype.isAuth = function () {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(this.getToken() !== null);
    };
    AuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/servises/mus.service.ts":
/*!*****************************************!*\
  !*** ./src/app/servises/mus.service.ts ***!
  \*****************************************/
/*! exports provided: MusService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MusService", function() { return MusService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _untils_constans__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../untils/constans */ "./src/app/untils/constans.ts");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth.service */ "./src/app/servises/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MusService = /** @class */ (function () {
    function MusService(http, auth) {
        this.http = http;
        this.auth = auth;
    }
    MusService.prototype.getMusic = function () {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]()
            .set('Authorization', "Bearer " + this.auth.getToken());
        return this.http.get(_untils_constans__WEBPACK_IMPORTED_MODULE_2__["Constans"].url() + 'getMusic', { headers: headers });
    };
    MusService.prototype.getMyMusic = function () {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]()
            .set('Authorization', "Bearer " + this.auth.getToken());
        return this.http.get(_untils_constans__WEBPACK_IMPORTED_MODULE_2__["Constans"].url() + 'getUserMusic', { headers: headers });
    };
    MusService.prototype.postMusic = function (formData) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]()
            .set('Authorization', "Bearer " + this.auth.getToken());
        return this.http.post(_untils_constans__WEBPACK_IMPORTED_MODULE_2__["Constans"].url() + 'apiImg', formData, {
            headers: headers,
            reportProgress: true,
            observe: 'events'
        });
    };
    MusService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]])
    ], MusService);
    return MusService;
}());



/***/ }),

/***/ "./src/app/untils/constans.ts":
/*!************************************!*\
  !*** ./src/app/untils/constans.ts ***!
  \************************************/
/*! exports provided: Constans */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Constans", function() { return Constans; });
var Constans = /** @class */ (function () {
    function Constans() {
    }
    Constans.url = function (url) {
        if (url === void 0) { url = '/'; }
        return this.BASE_URL + url;
    };
    Constans.BASE_URL = 'http://localhost:3333';
    return Constans;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\fomenkoyegor\Desktop\ngApi\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map