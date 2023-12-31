// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"53Ztx":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "e2205b50d5b4114f";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws;
    try {
        ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/");
    } catch (err) {
        if (err.message) console.error(err.message);
        ws = {};
    }
    // Web extension context
    var extCtx = typeof browser === "undefined" ? typeof chrome === "undefined" ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                }
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        if (e.message) console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute("href");
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", // $FlowFixMe
    href.split("?")[0] + "?" + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            });
            // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"2iQTb":[function(require,module,exports) {
var _quiz = require("./Quiz");
var _renderer = require("./Renderer");
class App {
    constructor(){
        this.quiz = new (0, _quiz.Quiz)();
        this.renderer = new (0, _renderer.Renderer)();
        this.loadQuiz(); // Przenieś wywołanie loadQuiz() przed startQuiz()
    }
    async loadQuiz() {
        try {
            console.log("Jestem tu 0");
            var fs = require("50e99a728697c1d9");
            const questions = JSON.parse('{\r\n  "questions": [\r\n    {\r\n      "question": "Co jest stolic\u0105 Francji?",\r\n      "options": ["Pary\u017C", "Londyn", "Berlin", "Madryt"],\r\n      "answer": "Pary\u017C"\r\n    },\r\n    {\r\n      "question": "Ile wynosi suma k\u0105t\xf3w w tr\xf3jk\u0105cie?",\r\n      "options": ["180 stopni", "90 stopni", "360 stopni", "270 stopni"],\r\n      "answer": "180 stopni"\r\n    },\r\n    {\r\n      "question": "Kt\xf3ry pierwiastek chemiczny ma symbol \'O\'?",\r\n      "options": ["Z\u0142oto", "Krzem", "Tlen", "Wod\xf3r"],\r\n      "answer": "Tlen"\r\n    },\r\n    {\r\n      "question": "Kto napisa\u0142 \'Hamleta\'?",\r\n      "options": ["William Shakespeare", "Charles Dickens", "Jane Austen", "Leo Tolstoy"],\r\n      "answer": "William Shakespeare"\r\n    },\r\n    {\r\n      "question": "Jaka jest najwy\u017Csza g\xf3ra \u015Bwiata?",\r\n      "options": ["Mount Everest", "K2", "Kangchenjunga", "Lhotse"],\r\n      "answer": "Mount Everest"\r\n    }\r\n  ]\r\n}\r\n  '); // wczytanie pytań z json
            console.log("Jestem tu");
            this.quiz.setQuestions(questions.questions); // Uwaga na to, jak odnosimy się do pytań
            console.log("Jestem tu2");
            this.renderer.renderIntroduction(this.quiz);
            //this.renderer.renderQuiz(this.quiz);
            console.log("Jestem tu3");
            this.quiz.startQuiz(); // Wywołaj startQuiz() po wczytaniu pytań
            console.log("Jestem tu4");
        } catch (error) {
            console.error("Failed to load quiz questions.", error);
        }
    }
}
new App();

},{"./Quiz":"ekbkv","./Renderer":"48D02","50e99a728697c1d9":"jhUEF"}],"ekbkv":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Quiz", ()=>Quiz);
var _question = require("./Question");
var _timer = require("./Timer");
var _statistics = require("./Statistics");
var _storageService = require("./StorageService");
class Quiz {
    constructor(){
        this.currentQuestionIndex = 0;
        this.score = 0;
        this.questions = [];
        this.shuffleQuestions();
        this.timer = new (0, _timer.Timer)();
        this.statistics = new (0, _statistics.Statistics)();
    }
    shuffleQuestions() {
        for(let i = this.questions.length - 1; i > 0; i--){
            const j = Math.floor(Math.random() * (i + 1));
            [this.questions[i], this.questions[j]] = [
                this.questions[j],
                this.questions[i]
            ];
        }
    }
    dawajToPytanie(widziszMnie) {
        return this.questions[widziszMnie];
    }
    getCurrentQuestion() {
        return this.questions[this.currentQuestionIndex];
    }
    nextQuestion() {
        if (this.currentQuestionIndex < this.questions.length - 1) this.currentQuestionIndex++;
    }
    previousQuestion() {
        if (this.currentQuestionIndex > 0) this.currentQuestionIndex--;
    }
    hasFinished() {
        return this.questions.every((question)=>question.getUserAnswer() !== null);
    }
    calculateScore() {
        this.score = this.questions.reduce((score, question)=>{
            return score + (question.isCorrect() ? 1 : 0);
        }, 0);
    }
    setQuestions(questionsData) {
        this.questions = questionsData.map((data)=>new (0, _question.Question)(data));
    }
    getScore() {
        return this.score;
    }
    getTimer() {
        return this.timer;
    }
    getNumberOfQuestion() {
        return this.currentQuestionIndex;
    }
    getQuestionCount() {
        return this.questions.length;
    }
    startQuiz() {
        this.timer.start();
        this.statistics.startQuestionTimer(this.currentQuestionIndex);
    }
    endQuiz() {
        this.timer.stop();
        this.statistics.stopQuestionTimer(this.currentQuestionIndex);
        this.calculateScore();
        (0, _storageService.StorageService).saveResults(this.getScore());
        // Save detailed statistics if required
        (0, _storageService.StorageService).saveDetailedStatistics(this.statistics.getStatistics());
    }
}

},{"./Question":"dB5bF","./Timer":"f21Yl","./Statistics":"3g0fP","./StorageService":"dcJCI","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dB5bF":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Question", ()=>Question);
class Question {
    constructor(data){
        this.answered = false;
        this.isLock = false;
        this.userAnswer = null;
        this.time = 0;
        this.text = data.question;
        this.options = data.options;
        this.answer = data.answer;
    }
    getTime() {
        return this.time;
    }
    setTime(timespend) {
        this.time = timespend;
    }
    IsAnswered() {
        return this.answered;
    }
    getIsLock() {
        return this.isLock;
    }
    getText() {
        return this.text;
    }
    getOptions() {
        return this.options;
    }
    getUserAnswer() {
        return this.userAnswer;
    }
    setIsLock() {
        this.isLock = true;
    }
    setUserAnswer(answer) {
        this.userAnswer = answer;
        this.answered = true;
    }
    isCorrect() {
        return this.answer === this.userAnswer;
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || Object.prototype.hasOwnProperty.call(dest, key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"f21Yl":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Timer", ()=>Timer);
class Timer {
    start() {
        this.startTime = new Date();
        this.timerInterval = window.setInterval(()=>this.tick(), 1000);
    }
    stop() {
        if (this.timerInterval) {
            clearInterval(this.timerInterval);
            this.timerInterval = null;
            this.elapsedTime += new Date().getTime() - this.startTime.getTime();
        }
    }
    reset() {
        this.stop();
        this.elapsedTime = 0;
    }
    tick() {
        const currentTime = new Date();
        const timeDiff = currentTime.getTime() - this.startTime.getTime() + this.elapsedTime;
        const seconds = Math.floor(timeDiff / 1000 % 60);
        const minutes = Math.floor(timeDiff / 60000 % 60);
        const formattedTime = this.formatTime(minutes, seconds);
        document.getElementById("timer").textContent = formattedTime;
    }
    formatTime(minutes, seconds) {
        return `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
    }
    constructor(){
        this.elapsedTime = 0;
        this.timerInterval = null;
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3g0fP":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Statistics", ()=>Statistics);
var _timer = require("./Timer");
class Statistics {
    startQuestionTimer(index) {
        this.ensureTimer(index);
    //this.questionTimers[index].start();
    }
    stopQuestionTimer(index) {
        if (this.questionTimers[index]) this.questionTimers[index].stop();
    }
    markQuestionCorrectness(index, isCorrect) {
        this.questionCorrectness[index] = isCorrect;
    }
    ensureTimer(index) {
        if (!this.questionTimers[index]) this.questionTimers[index] = new (0, _timer.Timer)();
    }
    getStatistics() {
        return this.questionTimers.map((timer, index)=>({
                timeSpent: timer.formatTime(0, Math.floor(timer.elapsedTime / 1000)),
                correct: this.questionCorrectness[index]
            }));
    }
    constructor(){
        this.questionTimers = [];
        this.questionCorrectness = [];
    }
}

},{"./Timer":"f21Yl","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dcJCI":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "StorageService", ()=>StorageService);
class StorageService {
    static #_ = this.resultsKey = "quizResults";
    static saveResults(score) {
        const results = StorageService.loadResults();
        results.push(score);
        localStorage.setItem(StorageService.resultsKey, JSON.stringify(results));
    }
    static loadResults() {
        const results = localStorage.getItem(StorageService.resultsKey);
        return results ? JSON.parse(results) : [];
    }
    static saveDetailedStatistics(statistics) {
        localStorage.setItem("detailedStatistics", JSON.stringify(statistics));
    }
    static loadDetailedStatistics() {
        const statistics = localStorage.getItem("detailedStatistics");
        return statistics ? JSON.parse(statistics) : [];
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"48D02":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Renderer", ()=>Renderer);
// import { Timer } from "./Timer";
var _myTimer = require("./MyTimer");
class Renderer {
    constructor(){
        this.result = "";
        this.totalTime = 0;
        this.quizContainer = document.getElementById("app");
        this.introductionContainer = document.getElementById("introduction");
        this.resultContainer = document.getElementById("output");
        this.mytimer = new (0, _myTimer.MyTimer)(0);
        this.timeDisplayElement = document.createElement("div");
        this.timeDisplayElement.id = "timer-display";
        this.resultDisplayElement = document.createElement("div");
        this.resultDisplayElement.id = "result-display";
        this.currentTime = 0;
    }
    renderIntroduction(quiz) {
        this.introductionContainer.innerHTML = `Przed tob\u{105} test wiedzy og\xf3lnej sk\u{142}adaj\u{105}cy sie z ${quiz.getQuestionCount()} pyta\u{144}. 
   <br> <button id="startTest">Zaczynajmy</button>`;
        this.setupStartTestListener(quiz);
    }
    setupStartTestListener(quiz) {
        const startTestButton = this.introductionContainer.querySelector("#startTest");
        startTestButton.onclick = ()=>{
            this.renderQuiz(quiz);
        };
    }
    renderQuiz(quiz) {
        this.introductionContainer.innerHTML = ``;
        const currentQuestion = quiz.getCurrentQuestion();
        this.quizContainer.innerHTML = ` <h2>Pytanie ${quiz.getNumberOfQuestion() + 1} z ${quiz.getQuestionCount()}</h2>
      <div class="question">
        <h3>Question: ${currentQuestion.getText()}</h3>
        ${this.renderOptions(currentQuestion)}
      </div>
      <button id="previous">Previous</button>
      <button id="next">Next</button>
      <button id="submit" ${quiz.hasFinished() ? "" : "disabled"}>Submit</button>
      
      
    `;
        this.setupOptionListeners(quiz);
        this.setupNavigationListeners(quiz);
        this.quizContainer.appendChild(this.timeDisplayElement);
        quiz.startQuiz();
        this.startTimer();
    }
    startTimer() {
        this.mytimer.startTimer();
        setInterval(()=>{
            this.currentTime = this.mytimer.getCurrentTime();
            this.updateTimeDisplay();
        }, 1000);
    }
    updateTimeDisplay() {
        this.timeDisplayElement.textContent = `Czas: ${this.currentTime}s`;
    }
    renderOptions(question) {
        if (question.getIsLock()) // Jeśli pytanie ma już odpowiedź, renderuje opcje jako zablokowane
        return question.getOptions().map((option, index)=>`
            <label>
                <input type="radio" name="option" value="${option}" 
                ${question.getUserAnswer() === option ? "checked" : ""} 
                disabled
                />
                ${option}
            </label>
        `).join("");
        else // Jeśli pytanie nie ma jeszcze odpowiedzi, renderuje normalne opcje
        return question.getOptions().map((option, index)=>`
            <label>
                <input type="radio" name="option" value="${option}" 
                ${question.getUserAnswer() === option ? "checked" : ""} 
                />
                ${option}
            </label>
        `).join("");
    }
    setupOptionListeners(quiz) {
        const options = this.quizContainer.querySelectorAll('input[name="option"]');
        options.forEach((option)=>{
            option.addEventListener("change", (e)=>{
                const selectedOption = e.target.value;
                quiz.getCurrentQuestion().setUserAnswer(selectedOption);
                this.enableSubmitIfFinished(quiz);
            });
        });
    }
    setupNavigationListeners(quiz) {
        const previousButton = this.quizContainer.querySelector("#previous");
        const nextButton = this.quizContainer.querySelector("#next");
        const submitButton = this.quizContainer.querySelector("#submit");
        previousButton.onclick = ()=>{
            if (quiz.getCurrentQuestion().IsAnswered()) quiz.getCurrentQuestion().setIsLock();
            quiz.getCurrentQuestion().setTime(this.currentTime);
            quiz.previousQuestion();
            this.renderQuiz(quiz);
            this.mytimer.stopTimer();
            this.mytimer = new (0, _myTimer.MyTimer)(quiz.getCurrentQuestion().getTime());
            this.startTimer();
        };
        nextButton.onclick = ()=>{
            if (quiz.getCurrentQuestion().IsAnswered()) quiz.getCurrentQuestion().setIsLock();
            quiz.getCurrentQuestion().setTime(this.currentTime);
            quiz.nextQuestion();
            this.renderQuiz(quiz);
            this.mytimer.stopTimer();
            this.mytimer = new (0, _myTimer.MyTimer)(quiz.getCurrentQuestion().getTime());
            this.startTimer();
        };
        submitButton.onclick = ()=>{
            quiz.getCurrentQuestion().setTime(this.currentTime);
            this.mytimer.stopTimer();
            quiz.calculateScore();
            this.renderResults(quiz);
        };
    }
    enableSubmitIfFinished(quiz) {
        const submitButton = this.quizContainer.querySelector("#submit");
        submitButton.disabled = !quiz.hasFinished();
    }
    renderResults(quiz) {
        for(let i = 0; i < quiz.getQuestionCount(); i++)this.result += " Pytanie nr." + (i + 1) + ": " + quiz.dawajToPytanie(i).getTime() + " sekund  " + `</br>`;
        // this.resultDisplayElement.textContent = this.result;
        this.resultContainer.innerHTML = this.result;
        this.quizContainer.innerHTML = `
      <div class="results">
        <h2>Results</h2>
        <p>Your score: ${quiz.getScore()} / ${quiz.getQuestionCount()}</p>
        
      

      </div>
    `;
        this.quizContainer.appendChild(this.resultDisplayElement);
        quiz.endQuiz();
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","./MyTimer":"6t5Nq"}],"6t5Nq":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "MyTimer", ()=>MyTimer);
class MyTimer {
    constructor(initialTime){
        this.time = initialTime;
        this.intervalId = null;
    }
    startTimer() {
        this.intervalId = window.setInterval(()=>{
            this.time += 1;
        }, 1000);
    }
    getCurrentTime() {
        return this.time;
    }
    stopTimer() {
        if (this.intervalId !== null) {
            window.clearInterval(this.intervalId);
            this.intervalId = null;
        }
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jhUEF":[function(require,module,exports) {
"use strict";

},{}]},["53Ztx","2iQTb"], "2iQTb", "parcelRequiref6ea")

//# sourceMappingURL=index.d5b4114f.js.map
