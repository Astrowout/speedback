// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function(modules, entry, mainEntry, parcelRequireName, globalName) {
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
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x) {
      return modules[name][1][x] || x;
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
  newRequire.register = function(id, exports) {
    modules[id] = [
      function(require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function() {
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
      define(function() {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"dTQGj":[function(require,module,exports) {
var Refresh = require('react-refresh/runtime');
Refresh.injectIntoGlobalHook(window);
window.$RefreshReg$ = function() {
};
window.$RefreshSig$ = function() {
    return function(type) {
        return type;
    };
};

},{"react-refresh/runtime":"9CdAE"}],"9CdAE":[function(require,module,exports) {
'use strict';
module.exports = require('./cjs/react-refresh-runtime.development.js');

},{"./cjs/react-refresh-runtime.development.js":"htU7g"}],"htU7g":[function(require,module,exports) {
/** @license React v0.9.0
 * react-refresh-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 'use strict';
(function() {
    // ATTENTION
    // When adding new symbols to this file,
    // Please consider also adding to 'react-devtools-shared/src/backend/ReactSymbols'
    // The Symbol used to tag the ReactElement-like types. If there is no native Symbol
    // nor polyfill, then a plain number is used for performance.
    var REACT_ELEMENT_TYPE = 60103;
    var REACT_PORTAL_TYPE = 60106;
    var REACT_FRAGMENT_TYPE = 60107;
    var REACT_STRICT_MODE_TYPE = 60108;
    var REACT_PROFILER_TYPE = 60114;
    var REACT_PROVIDER_TYPE = 60109;
    var REACT_CONTEXT_TYPE = 60110;
    var REACT_FORWARD_REF_TYPE = 60112;
    var REACT_SUSPENSE_TYPE = 60113;
    var REACT_SUSPENSE_LIST_TYPE = 60120;
    var REACT_MEMO_TYPE = 60115;
    var REACT_LAZY_TYPE = 60116;
    var REACT_BLOCK_TYPE = 60121;
    var REACT_SERVER_BLOCK_TYPE = 60122;
    var REACT_FUNDAMENTAL_TYPE = 60117;
    var REACT_SCOPE_TYPE = 60119;
    var REACT_OPAQUE_ID_TYPE = 60128;
    var REACT_DEBUG_TRACING_MODE_TYPE = 60129;
    var REACT_OFFSCREEN_TYPE = 60130;
    var REACT_LEGACY_HIDDEN_TYPE = 60131;
    if (typeof Symbol === 'function' && Symbol.for) {
        var symbolFor = Symbol.for;
        REACT_ELEMENT_TYPE = symbolFor('react.element');
        REACT_PORTAL_TYPE = symbolFor('react.portal');
        REACT_FRAGMENT_TYPE = symbolFor('react.fragment');
        REACT_STRICT_MODE_TYPE = symbolFor('react.strict_mode');
        REACT_PROFILER_TYPE = symbolFor('react.profiler');
        REACT_PROVIDER_TYPE = symbolFor('react.provider');
        REACT_CONTEXT_TYPE = symbolFor('react.context');
        REACT_FORWARD_REF_TYPE = symbolFor('react.forward_ref');
        REACT_SUSPENSE_TYPE = symbolFor('react.suspense');
        REACT_SUSPENSE_LIST_TYPE = symbolFor('react.suspense_list');
        REACT_MEMO_TYPE = symbolFor('react.memo');
        REACT_LAZY_TYPE = symbolFor('react.lazy');
        REACT_BLOCK_TYPE = symbolFor('react.block');
        REACT_SERVER_BLOCK_TYPE = symbolFor('react.server.block');
        REACT_FUNDAMENTAL_TYPE = symbolFor('react.fundamental');
        REACT_SCOPE_TYPE = symbolFor('react.scope');
        REACT_OPAQUE_ID_TYPE = symbolFor('react.opaque.id');
        REACT_DEBUG_TRACING_MODE_TYPE = symbolFor('react.debug_trace_mode');
        REACT_OFFSCREEN_TYPE = symbolFor('react.offscreen');
        REACT_LEGACY_HIDDEN_TYPE = symbolFor('react.legacy_hidden');
    }
    var PossiblyWeakMap = typeof WeakMap === 'function' ? WeakMap : Map; // We never remove these associations.
    // It's OK to reference families, but use WeakMap/Set for types.
    var allFamiliesByID = new Map();
    var allFamiliesByType = new PossiblyWeakMap();
    var allSignaturesByType = new PossiblyWeakMap(); // This WeakMap is read by React, so we only put families
    // that have actually been edited here. This keeps checks fast.
    // $FlowIssue
    var updatedFamiliesByType = new PossiblyWeakMap(); // This is cleared on every performReactRefresh() call.
    // It is an array of [Family, NextType] tuples.
    var pendingUpdates = []; // This is injected by the renderer via DevTools global hook.
    var helpersByRendererID = new Map();
    var helpersByRoot = new Map(); // We keep track of mounted roots so we can schedule updates.
    var mountedRoots = new Set(); // If a root captures an error, we remember it so we can retry on edit.
    var failedRoots = new Set(); // In environments that support WeakMap, we also remember the last element for every root.
    // It needs to be weak because we do this even for roots that failed to mount.
    // If there is no WeakMap, we won't attempt to do retrying.
    // $FlowIssue
    var rootElements = typeof WeakMap === 'function' ? new WeakMap() : null;
    var isPerformingRefresh = false;
    function computeFullKey(signature) {
        if (signature.fullKey !== null) return signature.fullKey;
        var fullKey = signature.ownKey;
        var hooks;
        try {
            hooks = signature.getCustomHooks();
        } catch (err) {
            // This can happen in an edge case, e.g. if expression like Foo.useSomething
            // depends on Foo which is lazily initialized during rendering.
            // In that case just assume we'll have to remount.
            signature.forceReset = true;
            signature.fullKey = fullKey;
            return fullKey;
        }
        for(var i = 0; i < hooks.length; i++){
            var hook = hooks[i];
            if (typeof hook !== 'function') {
                // Something's wrong. Assume we need to remount.
                signature.forceReset = true;
                signature.fullKey = fullKey;
                return fullKey;
            }
            var nestedHookSignature = allSignaturesByType.get(hook);
            if (nestedHookSignature === undefined) continue;
            var nestedHookKey = computeFullKey(nestedHookSignature);
            if (nestedHookSignature.forceReset) signature.forceReset = true;
            fullKey += '\n---\n' + nestedHookKey;
        }
        signature.fullKey = fullKey;
        return fullKey;
    }
    function haveEqualSignatures(prevType, nextType) {
        var prevSignature = allSignaturesByType.get(prevType);
        var nextSignature = allSignaturesByType.get(nextType);
        if (prevSignature === undefined && nextSignature === undefined) return true;
        if (prevSignature === undefined || nextSignature === undefined) return false;
        if (computeFullKey(prevSignature) !== computeFullKey(nextSignature)) return false;
        if (nextSignature.forceReset) return false;
        return true;
    }
    function isReactClass(type) {
        return type.prototype && type.prototype.isReactComponent;
    }
    function canPreserveStateBetween(prevType, nextType) {
        if (isReactClass(prevType) || isReactClass(nextType)) return false;
        if (haveEqualSignatures(prevType, nextType)) return true;
        return false;
    }
    function resolveFamily(type) {
        // Only check updated types to keep lookups fast.
        return updatedFamiliesByType.get(type);
    } // If we didn't care about IE11, we could use new Map/Set(iterable).
    function cloneMap(map) {
        var clone = new Map();
        map.forEach(function(value, key) {
            clone.set(key, value);
        });
        return clone;
    }
    function cloneSet(set) {
        var clone = new Set();
        set.forEach(function(value) {
            clone.add(value);
        });
        return clone;
    }
    function performReactRefresh() {
        if (pendingUpdates.length === 0) return null;
        if (isPerformingRefresh) return null;
        isPerformingRefresh = true;
        try {
            var staleFamilies = new Set();
            var updatedFamilies = new Set();
            var updates = pendingUpdates;
            pendingUpdates = [];
            updates.forEach(function(_ref) {
                var family = _ref[0], nextType = _ref[1];
                // Now that we got a real edit, we can create associations
                // that will be read by the React reconciler.
                var prevType = family.current;
                updatedFamiliesByType.set(prevType, family);
                updatedFamiliesByType.set(nextType, family);
                family.current = nextType; // Determine whether this should be a re-render or a re-mount.
                if (canPreserveStateBetween(prevType, nextType)) updatedFamilies.add(family);
                else staleFamilies.add(family);
            }); // TODO: rename these fields to something more meaningful.
            var update = {
                updatedFamilies: updatedFamilies,
                // Families that will re-render preserving state
                staleFamilies: staleFamilies // Families that will be remounted
            };
            helpersByRendererID.forEach(function(helpers) {
                // Even if there are no roots, set the handler on first update.
                // This ensures that if *new* roots are mounted, they'll use the resolve handler.
                helpers.setRefreshHandler(resolveFamily);
            });
            var didError = false;
            var firstError = null; // We snapshot maps and sets that are mutated during commits.
            // If we don't do this, there is a risk they will be mutated while
            // we iterate over them. For example, trying to recover a failed root
            // may cause another root to be added to the failed list -- an infinite loop.
            var failedRootsSnapshot = cloneSet(failedRoots);
            var mountedRootsSnapshot = cloneSet(mountedRoots);
            var helpersByRootSnapshot = cloneMap(helpersByRoot);
            failedRootsSnapshot.forEach(function(root) {
                var helpers = helpersByRootSnapshot.get(root);
                if (helpers === undefined) throw new Error('Could not find helpers for a root. This is a bug in React Refresh.');
                failedRoots.has(root);
                if (rootElements === null) return;
                if (!rootElements.has(root)) return;
                var element = rootElements.get(root);
                try {
                    helpers.scheduleRoot(root, element);
                } catch (err) {
                    if (!didError) {
                        didError = true;
                        firstError = err;
                    } // Keep trying other roots.
                }
            });
            mountedRootsSnapshot.forEach(function(root) {
                var helpers = helpersByRootSnapshot.get(root);
                if (helpers === undefined) throw new Error('Could not find helpers for a root. This is a bug in React Refresh.');
                mountedRoots.has(root);
                try {
                    helpers.scheduleRefresh(root, update);
                } catch (err) {
                    if (!didError) {
                        didError = true;
                        firstError = err;
                    } // Keep trying other roots.
                }
            });
            if (didError) throw firstError;
            return update;
        } finally{
            isPerformingRefresh = false;
        }
    }
    function register(type, id) {
        if (type === null) return;
        if (typeof type !== 'function' && typeof type !== 'object') return;
         // This can happen in an edge case, e.g. if we register
        // return value of a HOC but it returns a cached component.
        // Ignore anything but the first registration for each type.
        if (allFamiliesByType.has(type)) return;
         // Create family or remember to update it.
        // None of this bookkeeping affects reconciliation
        // until the first performReactRefresh() call above.
        var family = allFamiliesByID.get(id);
        if (family === undefined) {
            family = {
                current: type
            };
            allFamiliesByID.set(id, family);
        } else pendingUpdates.push([
            family,
            type
        ]);
        allFamiliesByType.set(type, family); // Visit inner types because we might not have registered them.
        if (typeof type === 'object' && type !== null) switch(type.$$typeof){
            case REACT_FORWARD_REF_TYPE:
                register(type.render, id + '$render');
                break;
            case REACT_MEMO_TYPE:
                register(type.type, id + '$type');
                break;
        }
    }
    function setSignature(type, key) {
        var forceReset = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
        var getCustomHooks = arguments.length > 3 ? arguments[3] : undefined;
        allSignaturesByType.set(type, {
            forceReset: forceReset,
            ownKey: key,
            fullKey: null,
            getCustomHooks: getCustomHooks || function() {
                return [];
            }
        });
    } // This is lazily called during first render for a type.
    // It captures Hook list at that time so inline requires don't break comparisons.
    function collectCustomHooksForSignature(type) {
        var signature = allSignaturesByType.get(type);
        if (signature !== undefined) computeFullKey(signature);
    }
    function getFamilyByID(id) {
        return allFamiliesByID.get(id);
    }
    function getFamilyByType(type) {
        return allFamiliesByType.get(type);
    }
    function findAffectedHostInstances(families) {
        var affectedInstances = new Set();
        mountedRoots.forEach(function(root) {
            var helpers = helpersByRoot.get(root);
            if (helpers === undefined) throw new Error('Could not find helpers for a root. This is a bug in React Refresh.');
            var instancesForRoot = helpers.findHostInstancesForRefresh(root, families);
            instancesForRoot.forEach(function(inst) {
                affectedInstances.add(inst);
            });
        });
        return affectedInstances;
    }
    function injectIntoGlobalHook(globalObject) {
        // For React Native, the global hook will be set up by require('react-devtools-core').
        // That code will run before us. So we need to monkeypatch functions on existing hook.
        // For React Web, the global hook will be set up by the extension.
        // This will also run before us.
        var hook = globalObject.__REACT_DEVTOOLS_GLOBAL_HOOK__;
        if (hook === undefined) {
            // However, if there is no DevTools extension, we'll need to set up the global hook ourselves.
            // Note that in this case it's important that renderer code runs *after* this method call.
            // Otherwise, the renderer will think that there is no global hook, and won't do the injection.
            var nextID = 0;
            globalObject.__REACT_DEVTOOLS_GLOBAL_HOOK__ = hook = {
                renderers: new Map(),
                supportsFiber: true,
                inject: function(injected) {
                    return nextID++;
                },
                onScheduleFiberRoot: function(id, root, children) {
                },
                onCommitFiberRoot: function(id, root, maybePriorityLevel, didError) {
                },
                onCommitFiberUnmount: function() {
                }
            };
        } // Here, we just want to get a reference to scheduleRefresh.
        var oldInject = hook.inject;
        hook.inject = function(injected) {
            var id = oldInject.apply(this, arguments);
            if (typeof injected.scheduleRefresh === 'function' && typeof injected.setRefreshHandler === 'function') // This version supports React Refresh.
            helpersByRendererID.set(id, injected);
            return id;
        }; // Do the same for any already injected roots.
        // This is useful if ReactDOM has already been initialized.
        // https://github.com/facebook/react/issues/17626
        hook.renderers.forEach(function(injected, id) {
            if (typeof injected.scheduleRefresh === 'function' && typeof injected.setRefreshHandler === 'function') // This version supports React Refresh.
            helpersByRendererID.set(id, injected);
        }); // We also want to track currently mounted roots.
        var oldOnCommitFiberRoot = hook.onCommitFiberRoot;
        var oldOnScheduleFiberRoot = hook.onScheduleFiberRoot || function() {
        };
        hook.onScheduleFiberRoot = function(id, root, children) {
            if (!isPerformingRefresh) {
                // If it was intentionally scheduled, don't attempt to restore.
                // This includes intentionally scheduled unmounts.
                failedRoots.delete(root);
                if (rootElements !== null) rootElements.set(root, children);
            }
            return oldOnScheduleFiberRoot.apply(this, arguments);
        };
        hook.onCommitFiberRoot = function(id, root, maybePriorityLevel, didError) {
            var helpers = helpersByRendererID.get(id);
            if (helpers === undefined) return;
            helpersByRoot.set(root, helpers);
            var current = root.current;
            var alternate = current.alternate; // We need to determine whether this root has just (un)mounted.
            // This logic is copy-pasted from similar logic in the DevTools backend.
            // If this breaks with some refactoring, you'll want to update DevTools too.
            if (alternate !== null) {
                var wasMounted = alternate.memoizedState != null && alternate.memoizedState.element != null;
                var isMounted = current.memoizedState != null && current.memoizedState.element != null;
                if (!wasMounted && isMounted) {
                    // Mount a new root.
                    mountedRoots.add(root);
                    failedRoots.delete(root);
                } else if (wasMounted && isMounted) ;
                else if (wasMounted && !isMounted) {
                    // Unmount an existing root.
                    mountedRoots.delete(root);
                    if (didError) // We'll remount it on future edits.
                    failedRoots.add(root);
                    else helpersByRoot.delete(root);
                } else if (!wasMounted && !isMounted) {
                    if (didError) // We'll remount it on future edits.
                    failedRoots.add(root);
                }
            } else // Mount a new root.
            mountedRoots.add(root);
            return oldOnCommitFiberRoot.apply(this, arguments);
        };
    }
    function hasUnrecoverableErrors() {
        // TODO: delete this after removing dependency in RN.
        return false;
    } // Exposed for testing.
    function _getMountedRootCount() {
        return mountedRoots.size;
    } // This is a wrapper over more primitive functions for setting signature.
    // Signatures let us decide whether the Hook order has changed on refresh.
    //
    // This function is intended to be used as a transform target, e.g.:
    // var _s = createSignatureFunctionForTransform()
    //
    // function Hello() {
    //   const [foo, setFoo] = useState(0);
    //   const value = useCustomHook();
    //   _s(); /* Second call triggers collecting the custom Hook list.
    //          * This doesn't happen during the module evaluation because we
    //          * don't want to change the module order with inline requires.
    //          * Next calls are noops. */
    //   return <h1>Hi</h1>;
    // }
    //
    // /* First call specifies the signature: */
    // _s(
    //   Hello,
    //   'useState{[foo, setFoo]}(0)',
    //   () => [useCustomHook], /* Lazy to avoid triggering inline requires */
    // );
    function createSignatureFunctionForTransform() {
        // We'll fill in the signature in two steps.
        // First, we'll know the signature itself. This happens outside the component.
        // Then, we'll know the references to custom Hooks. This happens inside the component.
        // After that, the returned function will be a fast path no-op.
        var status = 'needsSignature';
        var savedType;
        var hasCustomHooks;
        return function(type, key, forceReset, getCustomHooks) {
            switch(status){
                case 'needsSignature':
                    if (type !== undefined) {
                        // If we received an argument, this is the initial registration call.
                        savedType = type;
                        hasCustomHooks = typeof getCustomHooks === 'function';
                        setSignature(type, key, forceReset, getCustomHooks); // The next call we expect is from inside a function, to fill in the custom Hooks.
                        status = 'needsCustomHooks';
                    }
                    break;
                case 'needsCustomHooks':
                    if (hasCustomHooks) collectCustomHooksForSignature(savedType);
                    status = 'resolved';
                    break;
            }
            return type;
        };
    }
    function isLikelyComponentType(type) {
        switch(typeof type){
            case 'function':
                // First, deal with classes.
                if (type.prototype != null) {
                    if (type.prototype.isReactComponent) // React class.
                    return true;
                    var ownNames = Object.getOwnPropertyNames(type.prototype);
                    if (ownNames.length > 1 || ownNames[0] !== 'constructor') // This looks like a class.
                    return false;
                     // eslint-disable-next-line no-proto
                    if (type.prototype.__proto__ !== Object.prototype) // It has a superclass.
                    return false;
                     // Pass through.
                // This looks like a regular function with empty prototype.
                } // For plain functions and arrows, use name as a heuristic.
                var name = type.name || type.displayName;
                return typeof name === 'string' && /^[A-Z]/.test(name);
            case 'object':
                if (type != null) switch(type.$$typeof){
                    case REACT_FORWARD_REF_TYPE:
                    case REACT_MEMO_TYPE:
                        // Definitely React components.
                        return true;
                    default:
                        return false;
                }
                return false;
            default:
                return false;
        }
    }
    exports._getMountedRootCount = _getMountedRootCount;
    exports.collectCustomHooksForSignature = collectCustomHooksForSignature;
    exports.createSignatureFunctionForTransform = createSignatureFunctionForTransform;
    exports.findAffectedHostInstances = findAffectedHostInstances;
    exports.getFamilyByID = getFamilyByID;
    exports.getFamilyByType = getFamilyByType;
    exports.hasUnrecoverableErrors = hasUnrecoverableErrors;
    exports.injectIntoGlobalHook = injectIntoGlobalHook;
    exports.isLikelyComponentType = isLikelyComponentType;
    exports.performReactRefresh = performReactRefresh;
    exports.register = register;
    exports.setSignature = setSignature;
})();

},{}],"c2sAv":[function(require,module,exports) {
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "f2c9685dad4863d1";
module.bundle.HMR_BUNDLE_ID = "6df72f2d993df594";
"use strict";
function _createForOfIteratorHelper(o, allowArrayLike) {
    var it;
    if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
        if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
            if (it) o = it;
            var i = 0;
            var F = function F1() {
            };
            return {
                s: F,
                n: function n() {
                    if (i >= o.length) return {
                        done: true
                    };
                    return {
                        done: false,
                        value: o[i++]
                    };
                },
                e: function e(_e) {
                    throw _e;
                },
                f: F
            };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var normalCompletion = true, didErr = false, err;
    return {
        s: function s() {
            it = o[Symbol.iterator]();
        },
        n: function n() {
            var step = it.next();
            normalCompletion = step.done;
            return step;
        },
        e: function e(_e2) {
            didErr = true;
            err = _e2;
        },
        f: function f() {
            try {
                if (!normalCompletion && it.return != null) it.return();
            } finally{
                if (didErr) throw err;
            }
        }
    };
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
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
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function accept(fn) {
            this._acceptCallbacks.push(fn || function() {
            });
        },
        dispose: function dispose(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? 'wss' : 'ws';
    var ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/'); // $FlowFixMe
    ws.onmessage = function(event) {
        checkedAssets = {
        };
        acceptedAssets = {
        };
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === 'update') {
            // Remove error overlay if there is one
            removeErrorOverlay();
            var assets = data.assets.filter(function(asset) {
                return asset.envHash === HMR_ENV_HASH;
            }); // Handle HMR Update
            var handled = assets.every(function(asset) {
                return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                assets.forEach(function(asset) {
                    hmrApply(module.bundle.root, asset);
                });
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else window.location.reload();
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            var _iterator = _createForOfIteratorHelper(data.diagnostics.ansi), _step;
            try {
                for(_iterator.s(); !(_step = _iterator.n()).done;){
                    var ansiDiagnostic = _step.value;
                    var stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                    console.error('🚨 [parcel]: ' + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
                } // Render the fancy html overlay
            } catch (err) {
                _iterator.e(err);
            } finally{
                _iterator.f();
            }
            removeErrorOverlay();
            var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
            document.body.appendChild(overlay);
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn('[parcel] 🚨 Connection to the HMR server was lost');
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log('[parcel] ✨ Error resolved');
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    var errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    var _iterator2 = _createForOfIteratorHelper(diagnostics), _step2;
    try {
        for(_iterator2.s(); !(_step2 = _iterator2.n()).done;){
            var diagnostic = _step2.value;
            var stack = diagnostic.codeframe ? diagnostic.codeframe : diagnostic.stack;
            errorHTML += "\n      <div>\n        <div style=\"font-size: 18px; font-weight: bold; margin-top: 20px;\">\n          \uD83D\uDEA8 ".concat(diagnostic.message, "\n        </div>\n        <pre>\n          ").concat(stack, "\n        </pre>\n        <div>\n          ").concat(diagnostic.hints.map(function(hint) {
                return '<div>' + hint + '</div>';
            }).join(''), "\n        </div>\n      </div>\n    ");
        }
    } catch (err) {
        _iterator2.e(err);
    } finally{
        _iterator2.f();
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
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
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', link.getAttribute('href').split('?')[0] + '?' + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(window.location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') {
        reloadCSS();
        return;
    }
    var deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
    if (deps) {
        var fn = new Function('require', 'module', 'exports', asset.output);
        modules[asset.id] = [
            fn,
            deps
        ];
    } else if (bundle.parent) hmrApply(bundle.parent, asset);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) return true;
    return getParents(module.bundle.root, id).some(function(v) {
        return hmrAcceptCheck(v[0], v[1], null);
    });
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {
    };
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"2xVEC":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
// Config
var _configJs = require("./config.js");
var _configJsDefault = parcelHelpers.interopDefault(_configJs);
// Templates
var _inputJs = require("./templates/input.js");
var _inputJsDefault = parcelHelpers.interopDefault(_inputJs);
var _commentJs = require("./templates/comment.js");
var _commentJsDefault = parcelHelpers.interopDefault(_commentJs);
// Helpers
var _addCssJs = require("./helpers/add-css.js");
var _addCssJsDefault = parcelHelpers.interopDefault(_addCssJs);
var _checkElementsJs = require("./helpers/check-elements.js");
var _throttleJs = require("./helpers/throttle.js");
var _throttleJsDefault = parcelHelpers.interopDefault(_throttleJs);
// Vendors
var _tippyJs = require("./vendors/tippy.js");
var _tippyJsDefault = parcelHelpers.interopDefault(_tippyJs);
// Events
var _hoverJs = require("./events/hover.js");
var _hoverJsDefault = parcelHelpers.interopDefault(_hoverJs);
var _clickJs = require("./events/click.js");
var _clickJsDefault = parcelHelpers.interopDefault(_clickJs);
// Globals
const button = document.createElement("button");
button.classList.add("gthr-btn");
const overlay = document.createElement("div");
overlay.classList.add("gthr-overlay");
const dot = document.createElement("span");
dot.classList.add("gthr-dot", "gthr-dot--input");
const body = document.body;
const throttledEvent = _throttleJsDefault.default((e)=>_hoverJsDefault.default(e)
, 100);
let commentMode = false;
let id = null;
let tippyInstance = null;
let comments = [];
const updateButton = ()=>{
    if (commentMode) button.innerHTML = `\n			<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">\n				<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />\n			</svg>\n			Close feedback\n		`;
    else button.innerHTML = `\n			<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">\n				<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />\n			</svg>\n			Give feedback\n		`;
};
const renderElements = ()=>{
    body.insertBefore(button, body.firstChild);
    button.addEventListener("click", toggleCommentMode);
};
const handleInput = (e)=>{
    const placeholder = document.querySelector(".gthr-tooltip__placeholder");
    if (e.target.value) placeholder.style.visibility = "hidden";
    else placeholder.style.visibility = "visible";
};
const destroyTippy = ()=>{
    tippyInstance.destroy();
    tippyInstance = null;
};
const handlePostComment = async ()=>{
    const input = document.querySelector(".gthr-tooltip__input");
    await console.log("fetch");
};
const handleResolveComment = async ({ comment , el  })=>{
    console.log("resolve", comment.resolved);
    const res = await fetch(`${_configJsDefault.default.BASE_URL}/api/comments/resolve?id=${comment.id}&value=${!comment.resolved}`);
    const newComment = await res.json();
    el._tippy.setContent(_commentJsDefault.default({
        text: comment.text,
        resolved: newComment.resolved,
        email: comment.authUser.email
    }));
};
const handleCloseInput = (el)=>{
    el._tippy.hide();
};
const initTippy = ()=>{
    _tippyJsDefault.default.setDefaultProps({
        trigger: 'click',
        allowHTML: true,
        animation: 'scale-subtle',
        arrow: false,
        duration: 100,
        maxWidth: 320,
        placement: 'bottom-end',
        interactive: true,
        ignoreAttributes: true,
        inlinePositioning: true,
        popperOptions: {
            strategy: 'fixed'
        }
    });
};
const addComment = (el)=>{
    dot.textContent = comments.length + 1;
    if (!el.style.position) el.style.position = "relative";
    el.appendChild(dot);
    const postFn = ()=>handlePostComment()
    ;
    const cancelFn = ()=>handleCloseInput(dot)
    ;
    _tippyJsDefault.default(dot, {
        content: _inputJsDefault.default,
        onShown () {
            const postBtn = document.getElementById("gthr-action-post");
            const cancelBtn = document.getElementById("gthr-action-cancel");
            postBtn.addEventListener("click", postFn);
            cancelBtn.addEventListener("click", cancelFn);
        },
        onHide () {
            const postBtn = document.getElementById("gthr-action-post");
            const cancelBtn = document.getElementById("gthr-action-cancel");
            postBtn.removeEventListener("click", postFn);
            cancelBtn.removeEventListener("click", cancelFn);
        }
    });
};
const handleAddComment = (e)=>{
    _clickJsDefault.default(e, addComment);
};
const handleCommentMode = ()=>{
    body.addEventListener("click", handleAddComment);
    body.addEventListener("mousemove", throttledEvent, false);
    body.appendChild(overlay);
};
const cleanupCommentMode = ()=>{
    body.removeEventListener("click", handleAddComment);
    body.removeEventListener("mousemove", throttledEvent, false);
    _checkElementsJs.checkHighlightedElement();
    overlay.remove();
    dot.remove();
};
const toggleCommentMode = (e)=>{
    e.stopPropagation();
    commentMode = !commentMode;
    updateButton();
    if (commentMode) setTimeout(handleCommentMode);
    else cleanupCommentMode();
};
const placeComments = ()=>{
    for(let i = 0; i < comments.length; i++){
        const comment = comments[i];
        const el = document.querySelector(comment.elementSelector);
        if (!el) continue;
        const dot1 = document.createElement("span");
        dot1.classList.add("gthr-dot");
        dot1.textContent = i + 1;
        if (!el.style.position) el.style.position = "relative";
        el.appendChild(dot1);
        const resolveFn = ()=>handleResolveComment({
                comment,
                el: dot1
            })
        ;
        _tippyJsDefault.default(dot1, {
            content: _commentJsDefault.default({
                text: comment.text,
                resolved: comment.resolved,
                email: comment.authUser.email,
                metadata: comment.metadata
            }),
            onShown () {
                const resolveBtn = document.getElementById("gthr-action-resolve");
                resolveBtn.addEventListener("click", resolveFn);
            },
            onHide () {
                const resolveBtn = document.getElementById("gthr-action-resolve");
                resolveBtn.removeEventListener("click", resolveFn);
            }
        });
    }
};
const getComments = async ()=>{
    const res = await fetch(`${_configJsDefault.default.BASE_URL}/api/comments?projectId=${id}&pathname=${window.location.pathname}`);
    comments = await res.json();
    initTippy();
    placeComments();
};
const init = async ()=>{
    _addCssJsDefault.default(`${_configJsDefault.default.BASE_URL}/script/main.css`);
    const scriptElement = document.querySelector(`script[src^='${_configJsDefault.default.BASE_URL}/script']`);
    id = scriptElement.src.split("?id=")[1];
    await getComments();
    updateButton();
    renderElements();
};
init();

},{"./config.js":"jg0L4","./templates/input.js":"dECAR","./templates/comment.js":"j90E9","./helpers/add-css.js":"aaowp","./helpers/check-elements.js":"67C1n","./helpers/throttle.js":"hDKMl","./vendors/tippy.js":"houEm","./events/hover.js":"i79fM","./events/click.js":"3p916","@parcel/transformer-js/src/esmodule-helpers.js":"4N8i7"}],"jg0L4":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
const config = {
    BASE_URL: "http://127.0.0.1:3000"
};
exports.default = config;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"4N8i7"}],"4N8i7":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, '__esModule', {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === 'default' || key === '__esModule') return;
        // Skip duplicate re-exports when they have the same value.
        if (key in dest && dest[key] === source[key]) return;
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

},{}],"dECAR":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
const inputTemplate = `\n	<div class="gthr-tooltip">\n		<div\n			contenteditable\n			role="textbox"\n			class="gthr-tooltip__input"\n			id="gthr-action-input"\n		>\n			<p class="gthr-tooltip__placeholder">Add a comment</p>\n		</div>\n\n		<div class="gthr-tooltip__actions">\n			<button type="button" id="gthr-action-cancel" class="gthr-tooltip__action gthr-tooltip__action--secondary">\n				Cancel\n			</button>\n\n			<button type="button" id="gthr-action-post" class="gthr-tooltip__action gthr-tooltip__action--primary">\n				Post\n			</button>\n		</div>\n	</div>\n`;
exports.default = inputTemplate;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"4N8i7"}],"j90E9":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
const commentTemplate = ({ text , email , resolved  })=>`\n	<div class="gthr-tooltip">\n		<div class="gthr-tooltip__content">\n			<p\n				class="gthr-tooltip__input ${resolved && 'gthr-tooltip__comment--resolved'}"\n			>\n				${text}\n			</p>\n\n			<button type="button" id="gthr-action-resolve">\n				${resolved ? `\n					<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" viewBox="0 0 20 20" fill="#10B981">\n						<path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />\n					</svg>\n				` : `\n					<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="#9CA3AF">\n						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />\n					</svg>\n				`}\n			</button>\n		</div>\n\n		<div class="gthr-tooltip__actions">\n			<button type="button" class="gthr-tooltip__user">\n				<svg xmlns="http://www.w3.org/2000/svg" class="gthr-tooltip__avatar" viewBox="0 0 20 20" fill="currentColor">\n					<path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clip-rule="evenodd" />\n				</svg>\n\n				<span>${email}</span>\n			</button>\n		</div>\n	</div>\n`
;
exports.default = commentTemplate;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"4N8i7"}],"aaowp":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
const addCss = (fileName)=>{
    const head = document.head;
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = fileName;
    head.appendChild(link);
};
exports.default = addCss;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"4N8i7"}],"67C1n":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "checkElements", ()=>checkElements
);
parcelHelpers.export(exports, "checkHighlightedElement", ()=>checkHighlightedElement
);
const checkElements = (el)=>{
    return el.classList.contains("gthr-dot") || el.classList.contains("gthr-btn") || el.classList.contains("gthr-overlay") || el.classList.contains("tippy-box");
};
const checkHighlightedElement = ()=>{
    const highlightedElement = document.querySelector(".gthr-highlight");
    if (highlightedElement) highlightedElement.classList.remove("gthr-highlight");
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"4N8i7"}],"hDKMl":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
const throttle = (callback, interval)=>{
    let enableCall = true;
    return function(...args) {
        if (!enableCall) return;
        enableCall = false;
        callback.apply(this, args);
        setTimeout(()=>enableCall = true
        , interval);
    };
};
exports.default = throttle;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"4N8i7"}],"houEm":[function(require,module,exports) {
!function(t, e) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = e(require("./popper.js")) : "function" == typeof define && define.amd ? define([
        "@popperjs/core"
    ], e) : (t = t || self).tippy = e(t.Popper);
}(this, function(t) {
    "use strict";
    var e = "undefined" != typeof window && "undefined" != typeof document, n = e ? navigator.userAgent : "", r = /MSIE |Trident\//.test(n), i = {
        passive: !0,
        capture: !0
    };
    function o(t1, e1, n1) {
        if (Array.isArray(t1)) {
            var r1 = t1[e1];
            return null == r1 ? Array.isArray(n1) ? n1[e1] : n1 : r1;
        }
        return t1;
    }
    function a(t1, e1) {
        var n1 = ({
        }).toString.call(t1);
        return 0 === n1.indexOf("[object") && n1.indexOf(e1 + "]") > -1;
    }
    function s(t1, e1) {
        return "function" == typeof t1 ? t1.apply(void 0, e1) : t1;
    }
    function p(t1, e1) {
        var n1;
        return 0 === e1 ? t1 : function(r2) {
            clearTimeout(n1), n1 = setTimeout(function() {
                t1(r2);
            }, e1);
        };
    }
    function u(t1, e1) {
        var n1 = Object.assign({
        }, t1);
        return e1.forEach(function(t2) {
            delete n1[t2];
        }), n1;
    }
    function c(t1) {
        return [].concat(t1);
    }
    function f1(t1, e1) {
        -1 === t1.indexOf(e1) && t1.push(e1);
    }
    function l(t1) {
        return t1.split("-")[0];
    }
    function d(t1) {
        return [].slice.call(t1);
    }
    function v() {
        return document.createElement("div");
    }
    function m(t1) {
        return [
            "Element",
            "Fragment"
        ].some(function(e1) {
            return a(t1, e1);
        });
    }
    function g(t1) {
        return a(t1, "MouseEvent");
    }
    function h(t1) {
        return !(!t1 || !t1._tippy || t1._tippy.reference !== t1);
    }
    function b(t1) {
        return m(t1) ? [
            t1
        ] : (function(t2) {
            return a(t2, "NodeList");
        })(t1) ? d(t1) : Array.isArray(t1) ? t1 : d(document.querySelectorAll(t1));
    }
    function y(t1, e1) {
        t1.forEach(function(t2) {
            t2 && (t2.style.transitionDuration = e1 + "ms");
        });
    }
    function w(t1, e1) {
        t1.forEach(function(t2) {
            t2 && t2.setAttribute("data-state", e1);
        });
    }
    function x(t1) {
        var e1, n1 = c(t1)[0];
        return (null == n1 || null == (e1 = n1.ownerDocument) ? void 0 : e1.body) ? n1.ownerDocument : document;
    }
    function E(t1, e1, n1) {
        var r2 = e1 + "EventListener";
        [
            "transitionend",
            "webkitTransitionEnd"
        ].forEach(function(e2) {
            t1[r2](e2, n1);
        });
    }
    var O = {
        isTouch: !1
    }, C = 0;
    function T() {
        O.isTouch || (O.isTouch = !0, window.performance && document.addEventListener("mousemove", A));
    }
    function A() {
        var t1 = performance.now();
        t1 - C < 20 && (O.isTouch = !1, document.removeEventListener("mousemove", A)), C = t1;
    }
    function L() {
        var t1 = document.activeElement;
        if (h(t1)) {
            var e1 = t1._tippy;
            t1.blur && !e1.state.isVisible && t1.blur();
        }
    }
    var D = Object.assign({
        appendTo: function() {
            return document.body;
        },
        aria: {
            content: "auto",
            expanded: "auto"
        },
        delay: 0,
        duration: [
            300,
            250
        ],
        getReferenceClientRect: null,
        hideOnClick: !0,
        ignoreAttributes: !1,
        interactive: !1,
        interactiveBorder: 2,
        interactiveDebounce: 0,
        moveTransition: "",
        offset: [
            0,
            10
        ],
        onAfterUpdate: function() {
        },
        onBeforeUpdate: function() {
        },
        onCreate: function() {
        },
        onDestroy: function() {
        },
        onHidden: function() {
        },
        onHide: function() {
        },
        onMount: function() {
        },
        onShow: function() {
        },
        onShown: function() {
        },
        onTrigger: function() {
        },
        onUntrigger: function() {
        },
        onClickOutside: function() {
        },
        placement: "top",
        plugins: [],
        popperOptions: {
        },
        render: null,
        showOnCreate: !1,
        touch: !0,
        trigger: "mouseenter focus",
        triggerTarget: null
    }, {
        animateFill: !1,
        followCursor: !1,
        inlinePositioning: !1,
        sticky: !1
    }, {
    }, {
        allowHTML: !1,
        animation: "fade",
        arrow: !0,
        content: "",
        inertia: !1,
        maxWidth: 350,
        role: "tooltip",
        theme: "",
        zIndex: 9999
    }), k = Object.keys(D);
    function R(t1) {
        var e2 = (t1.plugins || []).reduce(function(e3, n1) {
            var r2 = n1.name, i1 = n1.defaultValue;
            return r2 && (e3[r2] = (void 0) !== t1[r2] ? t1[r2] : i1), e3;
        }, {
        });
        return Object.assign({
        }, t1, {
        }, e2);
    }
    function j(t1, e2) {
        var n1 = Object.assign({
        }, e2, {
            content: s(e2.content, [
                t1
            ])
        }, e2.ignoreAttributes ? {
        } : function(t2, e3) {
            return (e3 ? Object.keys(R(Object.assign({
            }, D, {
                plugins: e3
            }))) : k).reduce(function(e4, n2) {
                var r2 = (t2.getAttribute("data-tippy-" + n2) || "").trim();
                if (!r2) return e4;
                if ("content" === n2) e4[n2] = r2;
                else try {
                    e4[n2] = JSON.parse(r2);
                } catch (t3) {
                    e4[n2] = r2;
                }
                return e4;
            }, {
            });
        }(t1, e2.plugins));
        return n1.aria = Object.assign({
        }, D.aria, {
        }, n1.aria), n1.aria = {
            expanded: "auto" === n1.aria.expanded ? e2.interactive : n1.aria.expanded,
            content: "auto" === n1.aria.content ? e2.interactive ? null : "describedby" : n1.aria.content
        }, n1;
    }
    function M(t1, e2) {
        t1.innerHTML = e2;
    }
    function P(t1) {
        var e2 = v();
        return !0 === t1 ? e2.className = "tippy-arrow" : (e2.className = "tippy-svg-arrow", m(t1) ? e2.appendChild(t1) : M(e2, t1)), e2;
    }
    function V(t1, e2) {
        m(e2.content) ? (M(t1, ""), t1.appendChild(e2.content)) : "function" != typeof e2.content && (e2.allowHTML ? M(t1, e2.content) : t1.textContent = e2.content);
    }
    function I(t1) {
        var e2 = t1.firstElementChild, n1 = d(e2.children);
        return {
            box: e2,
            content: n1.find(function(t2) {
                return t2.classList.contains("tippy-content");
            }),
            arrow: n1.find(function(t2) {
                return t2.classList.contains("tippy-arrow") || t2.classList.contains("tippy-svg-arrow");
            }),
            backdrop: n1.find(function(t2) {
                return t2.classList.contains("tippy-backdrop");
            })
        };
    }
    function S(t1) {
        var e2 = v(), n1 = v();
        n1.className = "tippy-box", n1.setAttribute("data-state", "hidden"), n1.setAttribute("tabindex", "-1");
        var r2 = v();
        function i1(n2, r3) {
            var i2 = I(e2), o1 = i2.box, a1 = i2.content, s1 = i2.arrow;
            r3.theme ? o1.setAttribute("data-theme", r3.theme) : o1.removeAttribute("data-theme"), "string" == typeof r3.animation ? o1.setAttribute("data-animation", r3.animation) : o1.removeAttribute("data-animation"), r3.inertia ? o1.setAttribute("data-inertia", "") : o1.removeAttribute("data-inertia"), o1.style.maxWidth = "number" == typeof r3.maxWidth ? r3.maxWidth + "px" : r3.maxWidth, r3.role ? o1.setAttribute("role", r3.role) : o1.removeAttribute("role"), n2.content === r3.content && n2.allowHTML === r3.allowHTML || V(a1, t1.props), r3.arrow ? s1 ? n2.arrow !== r3.arrow && (o1.removeChild(s1), o1.appendChild(P(r3.arrow))) : o1.appendChild(P(r3.arrow)) : s1 && o1.removeChild(s1);
        }
        return r2.className = "tippy-content", r2.setAttribute("data-state", "hidden"), V(r2, t1.props), e2.appendChild(n1), n1.appendChild(r2), i1(t1.props, t1.props), {
            popper: e2,
            onUpdate: i1
        };
    }
    S.$$tippy = !0;
    var B = 1, H = [], N = [];
    function U(e2, n1) {
        var a1, u1, m1, h1, b1, C1, T1, A1, L1, k1 = j(e2, Object.assign({
        }, D, {
        }, R((a1 = n1, Object.keys(a1).reduce(function(t1, e3) {
            return (void 0) !== a1[e3] && (t1[e3] = a1[e3]), t1;
        }, {
        }))))), M1 = !1, P1 = !1, V1 = !1, S1 = !1, U1 = [], _ = p(bt, k1.interactiveDebounce), z = B++, F = (L1 = k1.plugins).filter(function(t1, e3) {
            return L1.indexOf(t1) === e3;
        }), W = {
            id: z,
            reference: e2,
            popper: v(),
            popperInstance: null,
            props: k1,
            state: {
                isEnabled: !0,
                isVisible: !1,
                isDestroyed: !1,
                isMounted: !1,
                isShown: !1
            },
            plugins: F,
            clearDelayTimeouts: function() {
                clearTimeout(u1), clearTimeout(m1), cancelAnimationFrame(h1);
            },
            setProps: function(t1) {
                if (W.state.isDestroyed) return;
                it("onBeforeUpdate", [
                    W,
                    t1
                ]), gt();
                var n2 = W.props, r2 = j(e2, Object.assign({
                }, W.props, {
                }, t1, {
                    ignoreAttributes: !0
                }));
                W.props = r2, mt(), n2.interactiveDebounce !== r2.interactiveDebounce && (st(), _ = p(bt, r2.interactiveDebounce));
                n2.triggerTarget && !r2.triggerTarget ? c(n2.triggerTarget).forEach(function(t2) {
                    t2.removeAttribute("aria-expanded");
                }) : r2.triggerTarget && e2.removeAttribute("aria-expanded");
                at(), rt(), q && q(n2, r2);
                W.popperInstance && (Et(), Ct().forEach(function(t2) {
                    requestAnimationFrame(t2._tippy.popperInstance.forceUpdate);
                }));
                it("onAfterUpdate", [
                    W,
                    t1
                ]);
            },
            setContent: function(t1) {
                W.setProps({
                    content: t1
                });
            },
            show: function() {
                var t1 = W.state.isVisible, e3 = W.state.isDestroyed, n2 = !W.state.isEnabled, r2 = O.isTouch && !W.props.touch, i1 = o(W.props.duration, 0, D.duration);
                if (t1 || e3 || n2 || r2) return;
                if (Z().hasAttribute("disabled")) return;
                if (it("onShow", [
                    W
                ], !1), !1 === W.props.onShow(W)) return;
                W.state.isVisible = !0, Q() && (Y.style.visibility = "visible");
                rt(), ft(), W.state.isMounted || (Y.style.transition = "none");
                if (Q()) {
                    var a2 = et(), p1 = a2.box, u2 = a2.content;
                    y([
                        p1,
                        u2
                    ], 0);
                }
                T1 = function() {
                    var t2;
                    if (W.state.isVisible && !S1) {
                        if (S1 = !0, Y.offsetHeight, Y.style.transition = W.props.moveTransition, Q() && W.props.animation) {
                            var e4 = et(), n3 = e4.box, r3 = e4.content;
                            y([
                                n3,
                                r3
                            ], i1), w([
                                n3,
                                r3
                            ], "visible");
                        }
                        ot(), at(), f1(N, W), null == (t2 = W.popperInstance) || t2.forceUpdate(), W.state.isMounted = !0, it("onMount", [
                            W
                        ]), W.props.animation && Q() && (function(t3, e5) {
                            dt(t3, e5);
                        })(i1, function() {
                            W.state.isShown = !0, it("onShown", [
                                W
                            ]);
                        });
                    }
                }, (function() {
                    var t2, e5 = W.props.appendTo, n4 = Z();
                    t2 = W.props.interactive && e5 === D.appendTo || "parent" === e5 ? n4.parentNode : s(e5, [
                        n4
                    ]);
                    t2.contains(Y) || t2.appendChild(Y);
                    Et();
                })();
            },
            hide: function() {
                var t1 = !W.state.isVisible, e3 = W.state.isDestroyed, n2 = !W.state.isEnabled, r2 = o(W.props.duration, 1, D.duration);
                if (t1 || e3 || n2) return;
                if (it("onHide", [
                    W
                ], !1), !1 === W.props.onHide(W)) return;
                W.state.isVisible = !1, W.state.isShown = !1, S1 = !1, M1 = !1, Q() && (Y.style.visibility = "hidden");
                if (st(), lt(), rt(), Q()) {
                    var i1 = et(), a3 = i1.box, s1 = i1.content;
                    W.props.animation && (y([
                        a3,
                        s1
                    ], r2), w([
                        a3,
                        s1
                    ], "hidden"));
                }
                ot(), at(), W.props.animation ? Q() && (function(t2, e5) {
                    dt(t2, function() {
                        !W.state.isVisible && Y.parentNode && Y.parentNode.contains(Y) && e5();
                    });
                })(r2, W.unmount) : W.unmount();
            },
            hideWithInteractivity: function(t1) {
                tt().addEventListener("mousemove", _), f1(H, _), _(t1);
            },
            enable: function() {
                W.state.isEnabled = !0;
            },
            disable: function() {
                W.hide(), W.state.isEnabled = !1;
            },
            unmount: function() {
                W.state.isVisible && W.hide();
                if (!W.state.isMounted) return;
                Ot(), Ct().forEach(function(t1) {
                    t1._tippy.unmount();
                }), Y.parentNode && Y.parentNode.removeChild(Y);
                N = N.filter(function(t1) {
                    return t1 !== W;
                }), W.state.isMounted = !1, it("onHidden", [
                    W
                ]);
            },
            destroy: function() {
                if (W.state.isDestroyed) return;
                W.clearDelayTimeouts(), W.unmount(), gt(), delete e2._tippy, W.state.isDestroyed = !0, it("onDestroy", [
                    W
                ]);
            }
        };
        if (!k1.render) return W;
        var X = k1.render(W), Y = X.popper, q = X.onUpdate;
        Y.setAttribute("data-tippy-root", ""), Y.id = "tippy-" + W.id, W.popper = Y, e2._tippy = W, Y._tippy = W;
        var $ = F.map(function(t1) {
            return t1.fn(W);
        }), J = e2.hasAttribute("aria-expanded");
        function G() {
            var t1 = W.props.touch;
            return Array.isArray(t1) ? t1 : [
                t1,
                0
            ];
        }
        function K() {
            return "hold" === G()[0];
        }
        function Q() {
            var t1;
            return !!(null == (t1 = W.props.render) ? void 0 : t1.$$tippy);
        }
        function Z() {
            return A1 || e2;
        }
        function tt() {
            var t1 = Z().parentNode;
            return t1 ? x(t1) : document;
        }
        function et() {
            return I(Y);
        }
        function nt(t1) {
            return W.state.isMounted && !W.state.isVisible || O.isTouch || b1 && "focus" === b1.type ? 0 : o(W.props.delay, t1 ? 0 : 1, D.delay);
        }
        function rt() {
            Y.style.pointerEvents = W.props.interactive && W.state.isVisible ? "" : "none", Y.style.zIndex = "" + W.props.zIndex;
        }
        function it(t1, e3, n2) {
            var r2;
            ((void 0) === n2 && (n2 = !0), $.forEach(function(n4) {
                n4[t1] && n4[t1].apply(void 0, e3);
            }), n2) && (r2 = W.props)[t1].apply(r2, e3);
        }
        function ot() {
            var t1 = W.props.aria;
            if (t1.content) {
                var n2 = "aria-" + t1.content, r2 = Y.id;
                c(W.props.triggerTarget || e2).forEach(function(t2) {
                    var e3 = t2.getAttribute(n2);
                    if (W.state.isVisible) t2.setAttribute(n2, e3 ? e3 + " " + r2 : r2);
                    else {
                        var i2 = e3 && e3.replace(r2, "").trim();
                        i2 ? t2.setAttribute(n2, i2) : t2.removeAttribute(n2);
                    }
                });
            }
        }
        function at() {
            !J && W.props.aria.expanded && c(W.props.triggerTarget || e2).forEach(function(t1) {
                W.props.interactive ? t1.setAttribute("aria-expanded", W.state.isVisible && t1 === Z() ? "true" : "false") : t1.removeAttribute("aria-expanded");
            });
        }
        function st() {
            tt().removeEventListener("mousemove", _), H = H.filter(function(t1) {
                return t1 !== _;
            });
        }
        function pt(t1) {
            if (!(O.isTouch && (V1 || "mousedown" === t1.type) || W.props.interactive && Y.contains(t1.target))) {
                if (Z().contains(t1.target)) {
                    if (O.isTouch) return;
                    if (W.state.isVisible && W.props.trigger.indexOf("click") >= 0) return;
                } else it("onClickOutside", [
                    W,
                    t1
                ]);
                !0 === W.props.hideOnClick && (W.clearDelayTimeouts(), W.hide(), P1 = !0, setTimeout(function() {
                    P1 = !1;
                }), W.state.isMounted || lt());
            }
        }
        function ut() {
            V1 = !0;
        }
        function ct() {
            V1 = !1;
        }
        function ft() {
            var t1 = tt();
            t1.addEventListener("mousedown", pt, !0), t1.addEventListener("touchend", pt, i), t1.addEventListener("touchstart", ct, i), t1.addEventListener("touchmove", ut, i);
        }
        function lt() {
            var t1 = tt();
            t1.removeEventListener("mousedown", pt, !0), t1.removeEventListener("touchend", pt, i), t1.removeEventListener("touchstart", ct, i), t1.removeEventListener("touchmove", ut, i);
        }
        function dt(t1, e3) {
            var n4 = et().box;
            function r4(t2) {
                t2.target === n4 && (E(n4, "remove", r4), e3());
            }
            if (0 === t1) return e3();
            E(n4, "remove", C1), E(n4, "add", r4), C1 = r4;
        }
        function vt(t1, n4, r4) {
            (void 0) === r4 && (r4 = !1), c(W.props.triggerTarget || e2).forEach(function(e3) {
                e3.addEventListener(t1, n4, r4), U1.push({
                    node: e3,
                    eventType: t1,
                    handler: n4,
                    options: r4
                });
            });
        }
        function mt() {
            var t1;
            K() && (vt("touchstart", ht, {
                passive: !0
            }), vt("touchend", yt, {
                passive: !0
            })), (t1 = W.props.trigger, t1.split(/\s+/).filter(Boolean)).forEach(function(t2) {
                if ("manual" !== t2) switch(vt(t2, ht), t2){
                    case "mouseenter":
                        vt("mouseleave", yt);
                        break;
                    case "focus":
                        vt(r ? "focusout" : "blur", wt);
                        break;
                    case "focusin":
                        vt("focusout", wt);
                }
            });
        }
        function gt() {
            U1.forEach(function(t1) {
                var e3 = t1.node, n4 = t1.eventType, r4 = t1.handler, i3 = t1.options;
                e3.removeEventListener(n4, r4, i3);
            }), U1 = [];
        }
        function ht(t1) {
            var e3, n4 = !1;
            if (W.state.isEnabled && !xt(t1) && !P1) {
                var r4 = "focus" === (null == (e3 = b1) ? void 0 : e3.type);
                b1 = t1, A1 = t1.currentTarget, at(), !W.state.isVisible && g(t1) && H.forEach(function(e5) {
                    return e5(t1);
                }), "click" === t1.type && (W.props.trigger.indexOf("mouseenter") < 0 || M1) && !1 !== W.props.hideOnClick && W.state.isVisible ? n4 = !0 : Tt(t1), "click" === t1.type && (M1 = !n4), n4 && !r4 && At(t1);
            }
        }
        function bt(t1) {
            var e3 = t1.target, n4 = Z().contains(e3) || Y.contains(e3);
            "mousemove" === t1.type && n4 || (function(t2, e5) {
                var n5 = e5.clientX, r5 = e5.clientY;
                return t2.every(function(t3) {
                    var e6 = t3.popperRect, i3 = t3.popperState, o1 = t3.props.interactiveBorder, a4 = l(i3.placement), s2 = i3.modifiersData.offset;
                    if (!s2) return !0;
                    var p2 = "bottom" === a4 ? s2.top.y : 0, u3 = "top" === a4 ? s2.bottom.y : 0, c1 = "right" === a4 ? s2.left.x : 0, f1 = "left" === a4 ? s2.right.x : 0, d1 = e6.top - r5 + p2 > o1, v1 = r5 - e6.bottom - u3 > o1, m2 = e6.left - n5 + c1 > o1, g1 = n5 - e6.right - f1 > o1;
                    return d1 || v1 || m2 || g1;
                });
            })(Ct().concat(Y).map(function(t2) {
                var e5, n5 = null == (e5 = t2._tippy.popperInstance) ? void 0 : e5.state;
                return n5 ? {
                    popperRect: t2.getBoundingClientRect(),
                    popperState: n5,
                    props: k1
                } : null;
            }).filter(Boolean), t1) && (st(), At(t1));
        }
        function yt(t1) {
            xt(t1) || W.props.trigger.indexOf("click") >= 0 && M1 || (W.props.interactive ? W.hideWithInteractivity(t1) : At(t1));
        }
        function wt(t1) {
            W.props.trigger.indexOf("focusin") < 0 && t1.target !== Z() || W.props.interactive && t1.relatedTarget && Y.contains(t1.relatedTarget) || At(t1);
        }
        function xt(t1) {
            return !!O.isTouch && K() !== t1.type.indexOf("touch") >= 0;
        }
        function Et() {
            Ot();
            var n4 = W.props, r5 = n4.popperOptions, i3 = n4.placement, o1 = n4.offset, a4 = n4.getReferenceClientRect, s2 = n4.moveTransition, p2 = Q() ? I(Y).arrow : null, u3 = a4 ? {
                getBoundingClientRect: a4,
                contextElement: a4.contextElement || Z()
            } : e2, c1 = [
                {
                    name: "offset",
                    options: {
                        offset: o1
                    }
                },
                {
                    name: "preventOverflow",
                    options: {
                        padding: {
                            top: 2,
                            bottom: 2,
                            left: 5,
                            right: 5
                        }
                    }
                },
                {
                    name: "flip",
                    options: {
                        padding: 5
                    }
                },
                {
                    name: "computeStyles",
                    options: {
                        adaptive: !s2
                    }
                },
                {
                    name: "$$tippy",
                    enabled: !0,
                    phase: "beforeWrite",
                    requires: [
                        "computeStyles"
                    ],
                    fn: function(t1) {
                        var e3 = t1.state;
                        if (Q()) {
                            var n5 = et().box;
                            [
                                "placement",
                                "reference-hidden",
                                "escaped"
                            ].forEach(function(t2) {
                                "placement" === t2 ? n5.setAttribute("data-placement", e3.placement) : e3.attributes.popper["data-popper-" + t2] ? n5.setAttribute("data-" + t2, "") : n5.removeAttribute("data-" + t2);
                            }), e3.attributes.popper = {
                            };
                        }
                    }
                }
            ];
            Q() && p2 && c1.push({
                name: "arrow",
                options: {
                    element: p2,
                    padding: 3
                }
            }), c1.push.apply(c1, (null == r5 ? void 0 : r5.modifiers) || []), W.popperInstance = t.createPopper(u3, Y, Object.assign({
            }, r5, {
                placement: i3,
                onFirstUpdate: T1,
                modifiers: c1
            }));
        }
        function Ot() {
            W.popperInstance && (W.popperInstance.destroy(), W.popperInstance = null);
        }
        function Ct() {
            return d(Y.querySelectorAll("[data-tippy-root]"));
        }
        function Tt(t1) {
            W.clearDelayTimeouts(), t1 && it("onTrigger", [
                W,
                t1
            ]), ft();
            var e3 = nt(!0), n4 = G(), r5 = n4[0], i3 = n4[1];
            O.isTouch && "hold" === r5 && i3 && (e3 = i3), e3 ? u1 = setTimeout(function() {
                W.show();
            }, e3) : W.show();
        }
        function At(t1) {
            if (W.clearDelayTimeouts(), it("onUntrigger", [
                W,
                t1
            ]), W.state.isVisible) {
                if (!(W.props.trigger.indexOf("mouseenter") >= 0 && W.props.trigger.indexOf("click") >= 0 && [
                    "mouseleave",
                    "mousemove"
                ].indexOf(t1.type) >= 0 && M1)) {
                    var e3 = nt(!1);
                    e3 ? m1 = setTimeout(function() {
                        W.state.isVisible && W.hide();
                    }, e3) : h1 = requestAnimationFrame(function() {
                        W.hide();
                    });
                }
            } else lt();
        }
        return mt(), at(), rt(), it("onCreate", [
            W
        ]), k1.showOnCreate && Tt(), Y.addEventListener("mouseenter", function() {
            W.props.interactive && W.state.isVisible && W.clearDelayTimeouts();
        }), Y.addEventListener("mouseleave", function(t1) {
            W.props.interactive && W.props.trigger.indexOf("mouseenter") >= 0 && (tt().addEventListener("mousemove", _), _(t1));
        }), W;
    }
    function _(t1, e2) {
        (void 0) === e2 && (e2 = {
        });
        var n1 = D.plugins.concat(e2.plugins || []);
        document.addEventListener("touchstart", T, i), window.addEventListener("blur", L);
        var r5 = Object.assign({
        }, e2, {
            plugins: n1
        }), o1 = b(t1).reduce(function(t2, e5) {
            var n4 = e5 && U(e5, r5);
            return n4 && t2.push(n4), t2;
        }, []);
        return m(t1) ? o1[0] : o1;
    }
    _.defaultProps = D, _.setDefaultProps = function(t1) {
        Object.keys(t1).forEach(function(e2) {
            D[e2] = t1[e2];
        });
    }, _.currentInput = O;
    var z = Object.assign({
    }, t.applyStyles, {
        effect: function(t1) {
            var e2 = t1.state, n1 = {
                popper: {
                    position: e2.options.strategy,
                    left: "0",
                    top: "0",
                    margin: "0"
                },
                arrow: {
                    position: "absolute"
                },
                reference: {
                }
            };
            Object.assign(e2.elements.popper.style, n1.popper), e2.styles = n1, e2.elements.arrow && Object.assign(e2.elements.arrow.style, n1.arrow);
        }
    }), F = {
        mouseover: "mouseenter",
        focusin: "focus",
        click: "click"
    };
    var W = {
        name: "animateFill",
        defaultValue: !1,
        fn: function(t1) {
            var e2;
            if (!(null == (e2 = t1.props.render) ? void 0 : e2.$$tippy)) return {
            };
            var n1 = I(t1.popper), r5 = n1.box, i3 = n1.content, o1 = t1.props.animateFill ? function() {
                var t2 = v();
                return t2.className = "tippy-backdrop", w([
                    t2
                ], "hidden"), t2;
            }() : null;
            return {
                onCreate: function() {
                    o1 && (r5.insertBefore(o1, r5.firstElementChild), r5.setAttribute("data-animatefill", ""), r5.style.overflow = "hidden", t1.setProps({
                        arrow: !1,
                        animation: "shift-away"
                    }));
                },
                onMount: function() {
                    if (o1) {
                        var t2 = r5.style.transitionDuration, e5 = Number(t2.replace("ms", ""));
                        i3.style.transitionDelay = Math.round(e5 / 10) + "ms", o1.style.transitionDuration = t2, w([
                            o1
                        ], "visible");
                    }
                },
                onShow: function() {
                    o1 && (o1.style.transitionDuration = "0ms");
                },
                onHide: function() {
                    o1 && w([
                        o1
                    ], "hidden");
                }
            };
        }
    };
    var X = {
        clientX: 0,
        clientY: 0
    }, Y = [];
    function q(t1) {
        var e2 = t1.clientX, n1 = t1.clientY;
        X = {
            clientX: e2,
            clientY: n1
        };
    }
    var $ = {
        name: "followCursor",
        defaultValue: !1,
        fn: function(t1) {
            var e2 = t1.reference, n1 = x(t1.props.triggerTarget || e2), r5 = !1, i3 = !1, o1 = !0, a1 = t1.props;
            function s2() {
                return "initial" === t1.props.followCursor && t1.state.isVisible;
            }
            function p2() {
                n1.addEventListener("mousemove", f2);
            }
            function u1() {
                n1.removeEventListener("mousemove", f2);
            }
            function c1() {
                r5 = !0, t1.setProps({
                    getReferenceClientRect: null
                }), r5 = !1;
            }
            function f2(n4) {
                var r6 = !n4.target || e2.contains(n4.target), i4 = t1.props.followCursor, o2 = n4.clientX, a4 = n4.clientY, s3 = e2.getBoundingClientRect(), p3 = o2 - s3.left, u3 = a4 - s3.top;
                !r6 && t1.props.interactive || t1.setProps({
                    getReferenceClientRect: function() {
                        var t3 = e2.getBoundingClientRect(), n6 = o2, r7 = a4;
                        "initial" === i4 && (n6 = t3.left + p3, r7 = t3.top + u3);
                        var s4 = "horizontal" === i4 ? t3.top : r7, c2 = "vertical" === i4 ? t3.right : n6, f3 = "horizontal" === i4 ? t3.bottom : r7, l1 = "vertical" === i4 ? t3.left : n6;
                        return {
                            width: c2 - l1,
                            height: f3 - s4,
                            top: s4,
                            right: c2,
                            bottom: f3,
                            left: l1
                        };
                    }
                });
            }
            function l1() {
                t1.props.followCursor && (Y.push({
                    instance: t1,
                    doc: n1
                }), (function(t3) {
                    t3.addEventListener("mousemove", q);
                })(n1));
            }
            function d1() {
                0 === (Y = Y.filter(function(e6) {
                    return e6.instance !== t1;
                })).filter(function(t3) {
                    return t3.doc === n1;
                }).length && (function(t3) {
                    t3.removeEventListener("mousemove", q);
                })(n1);
            }
            return {
                onCreate: l1,
                onDestroy: d1,
                onBeforeUpdate: function() {
                    a1 = t1.props;
                },
                onAfterUpdate: function(e6, n4) {
                    var o2 = n4.followCursor;
                    r5 || (void 0) !== o2 && a1.followCursor !== o2 && (d1(), o2 ? (l1(), !t1.state.isMounted || i3 || s2() || p2()) : (u1(), c1()));
                },
                onMount: function() {
                    t1.props.followCursor && !i3 && (o1 && (f2(X), o1 = !1), s2() || p2());
                },
                onTrigger: function(t3, e6) {
                    g(e6) && (X = {
                        clientX: e6.clientX,
                        clientY: e6.clientY
                    }), i3 = "focus" === e6.type;
                },
                onHidden: function() {
                    t1.props.followCursor && (c1(), u1(), o1 = !0);
                }
            };
        }
    };
    var J = {
        name: "inlinePositioning",
        defaultValue: !1,
        fn: function(t1) {
            var e2, n1 = t1.reference;
            var r5 = -1, i3 = !1, o1 = {
                name: "tippyInlinePositioning",
                enabled: !0,
                phase: "afterWrite",
                fn: function(i4) {
                    var o2 = i4.state;
                    t1.props.inlinePositioning && (e2 !== o2.placement && t1.setProps({
                        getReferenceClientRect: function() {
                            return (function(t3) {
                                return (function(t4, e6, n4, r6) {
                                    if (n4.length < 2 || null === t4) return e6;
                                    if (2 === n4.length && r6 >= 0 && n4[0].left > n4[1].right) return n4[r6] || e6;
                                    switch(t4){
                                        case "top":
                                        case "bottom":
                                            var i5 = n4[0], o3 = n4[n4.length - 1], a1 = "top" === t4, s2 = i5.top, p2 = o3.bottom, u1 = a1 ? i5.left : o3.left, c1 = a1 ? i5.right : o3.right;
                                            return {
                                                top: s2,
                                                bottom: p2,
                                                left: u1,
                                                right: c1,
                                                width: c1 - u1,
                                                height: p2 - s2
                                            };
                                        case "left":
                                        case "right":
                                            var f2 = Math.min.apply(Math, n4.map(function(t5) {
                                                return t5.left;
                                            })), l1 = Math.max.apply(Math, n4.map(function(t5) {
                                                return t5.right;
                                            })), d1 = n4.filter(function(e7) {
                                                return "left" === t4 ? e7.left === f2 : e7.right === l1;
                                            }), v1 = d1[0].top, m1 = d1[d1.length - 1].bottom;
                                            return {
                                                top: v1,
                                                bottom: m1,
                                                left: f2,
                                                right: l1,
                                                width: l1 - f2,
                                                height: m1 - v1
                                            };
                                        default:
                                            return e6;
                                    }
                                })(l(t3), n1.getBoundingClientRect(), d(n1.getClientRects()), r5);
                            })(o2.placement);
                        }
                    }), e2 = o2.placement);
                }
            };
            function a1() {
                var e6;
                i3 || (e6 = (function(t3, e7) {
                    var n4;
                    return {
                        popperOptions: Object.assign({
                        }, t3.popperOptions, {
                            modifiers: [].concat(((null == (n4 = t3.popperOptions) ? void 0 : n4.modifiers) || []).filter(function(t4) {
                                return t4.name !== e7.name;
                            }), [
                                e7
                            ])
                        })
                    };
                })(t1.props, o1), i3 = !0, t1.setProps(e6), i3 = !1);
            }
            return {
                onCreate: a1,
                onAfterUpdate: a1,
                onTrigger: function(e6, n4) {
                    if (g(n4)) {
                        var i4 = d(t1.reference.getClientRects()), o2 = i4.find(function(t3) {
                            return t3.left - 2 <= n4.clientX && t3.right + 2 >= n4.clientX && t3.top - 2 <= n4.clientY && t3.bottom + 2 >= n4.clientY;
                        });
                        r5 = i4.indexOf(o2);
                    }
                },
                onUntrigger: function() {
                    r5 = -1;
                }
            };
        }
    };
    var G = {
        name: "sticky",
        defaultValue: !1,
        fn: function(t1) {
            var e2 = t1.reference, n1 = t1.popper;
            function r5(e6) {
                return !0 === t1.props.sticky || t1.props.sticky === e6;
            }
            var i3 = null, o1 = null;
            function a1() {
                var s2 = r5("reference") ? (t1.popperInstance ? t1.popperInstance.state.elements.reference : e2).getBoundingClientRect() : null, p2 = r5("popper") ? n1.getBoundingClientRect() : null;
                (s2 && K(i3, s2) || p2 && K(o1, p2)) && t1.popperInstance && t1.popperInstance.update(), i3 = s2, o1 = p2, t1.state.isMounted && requestAnimationFrame(a1);
            }
            return {
                onMount: function() {
                    t1.props.sticky && a1();
                }
            };
        }
    };
    function K(t1, e2) {
        return !t1 || !e2 || t1.top !== e2.top || t1.right !== e2.right || t1.bottom !== e2.bottom || t1.left !== e2.left;
    }
    return e && (function(t1) {
        var e2 = document.createElement("style");
        e2.textContent = t1, e2.setAttribute("data-tippy-stylesheet", "");
        var n1 = document.head, r5 = document.querySelector("head>style,head>link");
        r5 ? n1.insertBefore(e2, r5) : n1.appendChild(e2);
    })('.tippy-box[data-animation=fade][data-state=hidden]{opacity:0}[data-tippy-root]{max-width:calc(100vw - 10px)}.tippy-box{position:relative;background-color:#333;color:#fff;border-radius:4px;font-size:14px;line-height:1.4;outline:0;transition-property:transform,visibility,opacity}.tippy-box[data-placement^=top]>.tippy-arrow{bottom:0}.tippy-box[data-placement^=top]>.tippy-arrow:before{bottom:-7px;left:0;border-width:8px 8px 0;border-top-color:initial;transform-origin:center top}.tippy-box[data-placement^=bottom]>.tippy-arrow{top:0}.tippy-box[data-placement^=bottom]>.tippy-arrow:before{top:-7px;left:0;border-width:0 8px 8px;border-bottom-color:initial;transform-origin:center bottom}.tippy-box[data-placement^=left]>.tippy-arrow{right:0}.tippy-box[data-placement^=left]>.tippy-arrow:before{border-width:8px 0 8px 8px;border-left-color:initial;right:-7px;transform-origin:center left}.tippy-box[data-placement^=right]>.tippy-arrow{left:0}.tippy-box[data-placement^=right]>.tippy-arrow:before{left:-7px;border-width:8px 8px 8px 0;border-right-color:initial;transform-origin:center right}.tippy-box[data-inertia][data-state=visible]{transition-timing-function:cubic-bezier(.54,1.5,.38,1.11)}.tippy-arrow{width:16px;height:16px;color:#333}.tippy-arrow:before{content:"";position:absolute;border-color:transparent;border-style:solid}.tippy-content{position:relative;padding:5px 9px;z-index:1}'), _.setDefaultProps({
        plugins: [
            W,
            $,
            J,
            G
        ],
        render: S
    }), _.createSingleton = function(t1, e2) {
        var n1;
        (void 0) === e2 && (e2 = {
        });
        var r5, i3 = t1, o1 = [], a1 = e2.overrides, s2 = [], p2 = !1;
        function c1() {
            o1 = i3.map(function(t3) {
                return t3.reference;
            });
        }
        function f2(t3) {
            i3.forEach(function(e6) {
                t3 ? e6.enable() : e6.disable();
            });
        }
        function l1(t3) {
            return i3.map(function(e6) {
                var n4 = e6.setProps;
                return e6.setProps = function(i5) {
                    n4(i5), e6.reference === r5 && t3.setProps(i5);
                }, function() {
                    e6.setProps = n4;
                };
            });
        }
        function d1(t3, e6) {
            var n4 = o1.indexOf(e6);
            if (e6 !== r5) {
                r5 = e6;
                var s3 = (a1 || []).concat("content").reduce(function(t4, e7) {
                    return t4[e7] = i3[n4].props[e7], t4;
                }, {
                });
                t3.setProps(Object.assign({
                }, s3, {
                    getReferenceClientRect: "function" == typeof s3.getReferenceClientRect ? s3.getReferenceClientRect : function() {
                        return e6.getBoundingClientRect();
                    }
                }));
            }
        }
        f2(!1), c1();
        var m1 = {
            fn: function() {
                return {
                    onDestroy: function() {
                        f2(!0);
                    },
                    onHidden: function() {
                        r5 = null;
                    },
                    onClickOutside: function(t3) {
                        t3.props.showOnCreate && !p2 && (p2 = !0, r5 = null);
                    },
                    onShow: function(t3) {
                        t3.props.showOnCreate && !p2 && (p2 = !0, d1(t3, o1[0]));
                    },
                    onTrigger: function(t3, e6) {
                        d1(t3, e6.currentTarget);
                    }
                };
            }
        }, g1 = _(v(), Object.assign({
        }, u(e2, [
            "overrides"
        ]), {
            plugins: [
                m1
            ].concat(e2.plugins || []),
            triggerTarget: o1,
            popperOptions: Object.assign({
            }, e2.popperOptions, {
                modifiers: [].concat((null == (n1 = e2.popperOptions) ? void 0 : n1.modifiers) || [], [
                    z
                ])
            })
        })), h1 = g1.show;
        g1.show = function(t3) {
            if (h1(), !r5 && null == t3) return d1(g1, o1[0]);
            if (!r5 || null != t3) {
                if ("number" == typeof t3) return o1[t3] && d1(g1, o1[t3]);
                if (i3.includes(t3)) {
                    var e6 = t3.reference;
                    return d1(g1, e6);
                }
                return o1.includes(t3) ? d1(g1, t3) : void 0;
            }
        }, g1.showNext = function() {
            var t3 = o1[0];
            if (!r5) return g1.show(0);
            var e7 = o1.indexOf(r5);
            g1.show(o1[e7 + 1] || t3);
        }, g1.showPrevious = function() {
            var t3 = o1[o1.length - 1];
            if (!r5) return g1.show(t3);
            var e7 = o1.indexOf(r5), n4 = o1[e7 - 1] || t3;
            g1.show(n4);
        };
        var b1 = g1.setProps;
        return g1.setProps = function(t3) {
            a1 = t3.overrides || a1, b1(t3);
        }, g1.setInstances = function(t3) {
            f2(!0), s2.forEach(function(t4) {
                return t4();
            }), i3 = t3, f2(!1), c1(), l1(g1), g1.setProps({
                triggerTarget: o1
            });
        }, s2 = l1(g1), g1;
    }, _.delegate = function(t1, e2) {
        var n1 = [], r5 = [], o1 = !1, a1 = e2.target, s2 = u(e2, [
            "target"
        ]), p2 = Object.assign({
        }, s2, {
            trigger: "manual",
            touch: !1
        }), f2 = Object.assign({
        }, s2, {
            showOnCreate: !0
        }), l1 = _(t1, p2);
        function d1(t3) {
            if (t3.target && !o1) {
                var n4 = t3.target.closest(a1);
                if (n4) {
                    var i3 = n4.getAttribute("data-tippy-trigger") || e2.trigger || D.trigger;
                    if (!n4._tippy && !("touchstart" === t3.type && "boolean" == typeof f2.touch || "touchstart" !== t3.type && i3.indexOf(F[t3.type]) < 0)) {
                        var s4 = _(n4, f2);
                        s4 && (r5 = r5.concat(s4));
                    }
                }
            }
        }
        function v1(t3, e7, r6, i5) {
            (void 0) === i5 && (i5 = !1), t3.addEventListener(e7, r6, i5), n1.push({
                node: t3,
                eventType: e7,
                handler: r6,
                options: i5
            });
        }
        return c(l1).forEach(function(t3) {
            var e7 = t3.destroy, a4 = t3.enable, s5 = t3.disable;
            t3.destroy = function(t4) {
                (void 0) === t4 && (t4 = !0), t4 && r5.forEach(function(t5) {
                    t5.destroy();
                }), r5 = [], n1.forEach(function(t5) {
                    var e8 = t5.node, n6 = t5.eventType, r6 = t5.handler, i5 = t5.options;
                    e8.removeEventListener(n6, r6, i5);
                }), n1 = [], e7();
            }, t3.enable = function() {
                a4(), r5.forEach(function(t4) {
                    return t4.enable();
                }), o1 = !1;
            }, t3.disable = function() {
                s5(), r5.forEach(function(t4) {
                    return t4.disable();
                }), o1 = !0;
            }, (function(t4) {
                var e8 = t4.reference;
                v1(e8, "touchstart", d1, i), v1(e8, "mouseover", d1), v1(e8, "focusin", d1), v1(e8, "click", d1);
            })(t3);
        }), l1;
    }, _.hideAll = function(t1) {
        var e2 = (void 0) === t1 ? {
        } : t1, n1 = e2.exclude, r5 = e2.duration;
        N.forEach(function(t3) {
            var e7 = !1;
            if (n1 && (e7 = h(n1) ? t3.reference === n1 : t3.popper === n1.popper), !e7) {
                var i5 = t3.props.duration;
                t3.setProps({
                    duration: r5
                }), t3.hide(), t3.state.isDestroyed || t3.setProps({
                    duration: i5
                });
            }
        });
    }, _.roundArrow = '<svg width="16" height="6" xmlns="http://www.w3.org/2000/svg"><path d="M0 6s1.796-.013 4.67-3.615C5.851.9 6.93.006 8 0c1.07-.006 2.148.887 3.343 2.385C14.233 6.005 16 6 16 6H0z"></svg>', _;
}); //# sourceMappingURL=tippy-bundle.umd.min.js.map

},{"./popper.js":"kIjkw"}],"kIjkw":[function(require,module,exports) {
/**
 * @popperjs/core v2.10.1 - MIT License
 */ "use strict";
!function(e, t) {
    "object" == typeof exports && "undefined" != typeof module ? t(exports) : "function" == typeof define && define.amd ? define([
        "exports"
    ], t) : t((e = "undefined" != typeof globalThis ? globalThis : e || self).Popper = {
    });
}(this, function(e) {
    function t(e1) {
        return null == e1 ? window : "[object Window]" !== e1.toString() ? (e1 = e1.ownerDocument) && e1.defaultView || window : e1;
    }
    function n1(e1) {
        return e1 instanceof t(e1).Element || e1 instanceof Element;
    }
    function o1(e1) {
        return e1 instanceof t(e1).HTMLElement || e1 instanceof HTMLElement;
    }
    function r1(e1) {
        return "undefined" != typeof ShadowRoot && (e1 instanceof t(e1).ShadowRoot || e1 instanceof ShadowRoot);
    }
    function i(e1, t1) {
        (void 0) === t1 && (t1 = !1);
        var n1 = e1.getBoundingClientRect(), r1 = 1, i1 = 1;
        return o1(e1) && t1 && (t1 = e1.offsetHeight, 0 < (e1 = e1.offsetWidth) && (r1 = n1.width / e1 || 1), 0 < t1 && (i1 = n1.height / t1 || 1)), {
            width: N(n1.width / r1),
            height: N(n1.height / i1),
            top: N(n1.top / i1),
            right: N(n1.right / r1),
            bottom: N(n1.bottom / i1),
            left: N(n1.left / r1),
            x: N(n1.left / r1),
            y: N(n1.top / i1)
        };
    }
    function a(e1) {
        return {
            scrollLeft: (e1 = t(e1)).pageXOffset,
            scrollTop: e1.pageYOffset
        };
    }
    function s(e1) {
        return e1 ? (e1.nodeName || "").toLowerCase() : null;
    }
    function f1(e1) {
        return ((n1(e1) ? e1.ownerDocument : e1.document) || window.document).documentElement;
    }
    function p(e1) {
        return i(f1(e1)).left + a(e1).scrollLeft;
    }
    function c(e1) {
        return t(e1).getComputedStyle(e1);
    }
    function l(e1) {
        return e1 = c(e1), /auto|scroll|overlay|hidden/.test(e1.overflow + e1.overflowY + e1.overflowX);
    }
    function u(e1, n1, r1) {
        (void 0) === r1 && (r1 = !1);
        var c1, u1 = o1(n1);
        if (c1 = o1(n1)) {
            var d = (c1 = n1.getBoundingClientRect()).height / n1.offsetHeight || 1;
            c1 = 1 !== (c1.width / n1.offsetWidth || 1) || 1 !== d;
        }
        d = c1, c1 = f1(n1), e1 = i(e1, d), d = {
            scrollLeft: 0,
            scrollTop: 0
        };
        var h = {
            x: 0,
            y: 0
        };
        return (u1 || !u1 && !r1) && (("body" !== s(n1) || l(c1)) && (d = n1 !== t(n1) && o1(n1) ? {
            scrollLeft: n1.scrollLeft,
            scrollTop: n1.scrollTop
        } : a(n1)), o1(n1) ? ((h = i(n1, !0)).x += n1.clientLeft, h.y += n1.clientTop) : c1 && (h.x = p(c1))), {
            x: e1.left + d.scrollLeft - h.x,
            y: e1.top + d.scrollTop - h.y,
            width: e1.width,
            height: e1.height
        };
    }
    function d(e1) {
        var t1 = i(e1), n1 = e1.offsetWidth, o1 = e1.offsetHeight;
        return 1 >= Math.abs(t1.width - n1) && (n1 = t1.width), 1 >= Math.abs(t1.height - o1) && (o1 = t1.height), {
            x: e1.offsetLeft,
            y: e1.offsetTop,
            width: n1,
            height: o1
        };
    }
    function h(e1) {
        return "html" === s(e1) ? e1 : e1.assignedSlot || e1.parentNode || (r1(e1) ? e1.host : null) || f1(e1);
    }
    function m(e1) {
        return 0 <= [
            "html",
            "body",
            "#document"
        ].indexOf(s(e1)) ? e1.ownerDocument.body : o1(e1) && l(e1) ? e1 : m(h(e1));
    }
    function v(e1, n1) {
        var o1;
        (void 0) === n1 && (n1 = []);
        var r1 = m(e1);
        return e1 = r1 === (null == (o1 = e1.ownerDocument) ? void 0 : o1.body), o1 = t(r1), r1 = e1 ? [
            o1
        ].concat(o1.visualViewport || [], l(r1) ? r1 : []) : r1, n1 = n1.concat(r1), e1 ? n1 : n1.concat(v(h(r1)));
    }
    function g(e1) {
        return o1(e1) && "fixed" !== c(e1).position ? e1.offsetParent : null;
    }
    function b(e1) {
        for(var n1 = t(e1), r1 = g(e1); r1 && 0 <= [
            "table",
            "td",
            "th"
        ].indexOf(s(r1)) && "static" === c(r1).position;)r1 = g(r1);
        if (r1 && ("html" === s(r1) || "body" === s(r1) && "static" === c(r1).position)) return n1;
        if (!r1) e: {
            if (r1 = -1 !== navigator.userAgent.toLowerCase().indexOf("firefox"), -1 === navigator.userAgent.indexOf("Trident") || !o1(e1) || "fixed" !== c(e1).position) for(e1 = h(e1); o1(e1) && 0 > [
                "html",
                "body"
            ].indexOf(s(e1));){
                var i1 = c(e1);
                if ("none" !== i1.transform || "none" !== i1.perspective || "paint" === i1.contain || -1 !== [
                    "transform",
                    "perspective"
                ].indexOf(i1.willChange) || r1 && "filter" === i1.willChange || r1 && i1.filter && "none" !== i1.filter) {
                    r1 = e1;
                    break e;
                }
                e1 = e1.parentNode;
            }
            r1 = null;
        }
        return r1 || n1;
    }
    function y(e1) {
        function t1(e2) {
            o2.add(e2.name), [].concat(e2.requires || [], e2.requiresIfExists || []).forEach(function(e3) {
                o2.has(e3) || (e3 = n2.get(e3)) && t1(e3);
            }), r2.push(e2);
        }
        var n2 = new Map, o2 = new Set, r2 = [];
        return e1.forEach(function(e2) {
            n2.set(e2.name, e2);
        }), e1.forEach(function(e2) {
            o2.has(e2.name) || t1(e2);
        }), r2;
    }
    function w(e1) {
        var t1;
        return function() {
            return t1 || (t1 = new Promise(function(n2) {
                Promise.resolve().then(function() {
                    t1 = void 0, n2(e1());
                });
            })), t1;
        };
    }
    function x(e1) {
        return e1.split("-")[0];
    }
    function O(e1, t1) {
        var n2 = t1.getRootNode && t1.getRootNode();
        if (e1.contains(t1)) return !0;
        if (n2 && r1(n2)) do {
            if (t1 && e1.isSameNode(t1)) return !0;
            t1 = t1.parentNode || t1.host;
        }while (t1)
        return !1;
    }
    function j(e1) {
        return Object.assign({
        }, e1, {
            left: e1.x,
            top: e1.y,
            right: e1.x + e1.width,
            bottom: e1.y + e1.height
        });
    }
    function E(e1, n2) {
        if ("viewport" === n2) {
            n2 = t(e1);
            var r2 = f1(e1);
            n2 = n2.visualViewport;
            var s1 = r2.clientWidth;
            r2 = r2.clientHeight;
            var l1 = 0, u1 = 0;
            n2 && (s1 = n2.width, r2 = n2.height, /^((?!chrome|android).)*safari/i.test(navigator.userAgent) || (l1 = n2.offsetLeft, u1 = n2.offsetTop)), e1 = j(e1 = {
                width: s1,
                height: r2,
                x: l1 + p(e1),
                y: u1
            });
        } else o1(n2) ? ((e1 = i(n2)).top += n2.clientTop, e1.left += n2.clientLeft, e1.bottom = e1.top + n2.clientHeight, e1.right = e1.left + n2.clientWidth, e1.width = n2.clientWidth, e1.height = n2.clientHeight, e1.x = e1.left, e1.y = e1.top) : (u1 = f1(e1), e1 = f1(u1), s1 = a(u1), n2 = null == (r2 = u1.ownerDocument) ? void 0 : r2.body, r2 = z(e1.scrollWidth, e1.clientWidth, n2 ? n2.scrollWidth : 0, n2 ? n2.clientWidth : 0), l1 = z(e1.scrollHeight, e1.clientHeight, n2 ? n2.scrollHeight : 0, n2 ? n2.clientHeight : 0), u1 = -s1.scrollLeft + p(u1), s1 = -s1.scrollTop, "rtl" === c(n2 || e1).direction && (u1 += z(e1.clientWidth, n2 ? n2.clientWidth : 0) - r2), e1 = j({
            width: r2,
            height: l1,
            x: u1,
            y: s1
        }));
        return e1;
    }
    function D(e1, t1, r3) {
        return t1 = "clippingParents" === t1 ? (function(e2) {
            var t2 = v(h(e2)), r4 = 0 <= [
                "absolute",
                "fixed"
            ].indexOf(c(e2).position) && o1(e2) ? b(e2) : e2;
            return n1(r4) ? t2.filter(function(e3) {
                return n1(e3) && O(e3, r4) && "body" !== s(e3);
            }) : [];
        })(e1) : [].concat(t1), (r3 = (r3 = [].concat(t1, [
            r3
        ])).reduce(function(t2, n2) {
            return n2 = E(e1, n2), t2.top = z(n2.top, t2.top), t2.right = F(n2.right, t2.right), t2.bottom = F(n2.bottom, t2.bottom), t2.left = z(n2.left, t2.left), t2;
        }, E(e1, r3[0]))).width = r3.right - r3.left, r3.height = r3.bottom - r3.top, r3.x = r3.left, r3.y = r3.top, r3;
    }
    function L(e1) {
        return e1.split("-")[1];
    }
    function M(e1) {
        return 0 <= [
            "top",
            "bottom"
        ].indexOf(e1) ? "x" : "y";
    }
    function P(e1) {
        var t1 = e1.reference, n2 = e1.element, o2 = (e1 = e1.placement) ? x(e1) : null;
        e1 = e1 ? L(e1) : null;
        var r3 = t1.x + t1.width / 2 - n2.width / 2, i2 = t1.y + t1.height / 2 - n2.height / 2;
        switch(o2){
            case "top":
                r3 = {
                    x: r3,
                    y: t1.y - n2.height
                };
                break;
            case "bottom":
                r3 = {
                    x: r3,
                    y: t1.y + t1.height
                };
                break;
            case "right":
                r3 = {
                    x: t1.x + t1.width,
                    y: i2
                };
                break;
            case "left":
                r3 = {
                    x: t1.x - n2.width,
                    y: i2
                };
                break;
            default:
                r3 = {
                    x: t1.x,
                    y: t1.y
                };
        }
        if (null != (o2 = o2 ? M(o2) : null)) switch(i2 = "y" === o2 ? "height" : "width", e1){
            case "start":
                r3[o2] -= t1[i2] / 2 - n2[i2] / 2;
                break;
            case "end":
                r3[o2] += t1[i2] / 2 - n2[i2] / 2;
        }
        return r3;
    }
    function k(e1) {
        return Object.assign({
        }, {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0
        }, e1);
    }
    function W(e1, t1) {
        return t1.reduce(function(t2, n2) {
            return t2[n2] = e1, t2;
        }, {
        });
    }
    function A(e1, t1) {
        (void 0) === t1 && (t1 = {
        });
        var o2 = t1;
        t1 = (void 0) === (t1 = o2.placement) ? e1.placement : t1;
        var r3 = o2.boundary, a1 = (void 0) === r3 ? "clippingParents" : r3, s2 = (void 0) === (r3 = o2.rootBoundary) ? "viewport" : r3;
        r3 = (void 0) === (r3 = o2.elementContext) ? "popper" : r3;
        var p1 = o2.altBoundary, c1 = (void 0) !== p1 && p1;
        o2 = k("number" != typeof (o2 = (void 0) === (o2 = o2.padding) ? 0 : o2) ? o2 : W(o2, V)), p1 = e1.rects.popper, a1 = D(n1(c1 = e1.elements[c1 ? "popper" === r3 ? "reference" : "popper" : r3]) ? c1 : c1.contextElement || f1(e1.elements.popper), a1, s2), c1 = P({
            reference: s2 = i(e1.elements.reference),
            element: p1,
            strategy: "absolute",
            placement: t1
        }), p1 = j(Object.assign({
        }, p1, c1)), s2 = "popper" === r3 ? p1 : s2;
        var l2 = {
            top: a1.top - s2.top + o2.top,
            bottom: s2.bottom - a1.bottom + o2.bottom,
            left: a1.left - s2.left + o2.left,
            right: s2.right - a1.right + o2.right
        };
        if (e1 = e1.modifiersData.offset, "popper" === r3 && e1) {
            var u2 = e1[t1];
            Object.keys(l2).forEach(function(e2) {
                var t2 = 0 <= [
                    "right",
                    "bottom"
                ].indexOf(e2) ? 1 : -1, n2 = 0 <= [
                    "top",
                    "bottom"
                ].indexOf(e2) ? "y" : "x";
                l2[e2] += u2[n2] * t2;
            });
        }
        return l2;
    }
    function B() {
        for(var e1 = arguments.length, t1 = Array(e1), n2 = 0; n2 < e1; n2++)t1[n2] = arguments[n2];
        return !t1.some(function(e2) {
            return !(e2 && "function" == typeof e2.getBoundingClientRect);
        });
    }
    function H(e1) {
        (void 0) === e1 && (e1 = {
        });
        var t1 = e1.defaultModifiers, o2 = (void 0) === t1 ? [] : t1, r3 = (void 0) === (e1 = e1.defaultOptions) ? Y : e1;
        return function(e2, t2, i2) {
            function a1() {
                f2.forEach(function(e3) {
                    return e3();
                }), f2 = [];
            }
            (void 0) === i2 && (i2 = r3);
            var s2 = {
                placement: "bottom",
                orderedModifiers: [],
                options: Object.assign({
                }, Y, r3),
                modifiersData: {
                },
                elements: {
                    reference: e2,
                    popper: t2
                },
                attributes: {
                },
                styles: {
                }
            }, f2 = [], p1 = !1, c1 = {
                state: s2,
                setOptions: function(i3) {
                    return i3 = "function" == typeof i3 ? i3(s2.options) : i3, a1(), s2.options = Object.assign({
                    }, r3, s2.options, i3), s2.scrollParents = {
                        reference: n1(e2) ? v(e2) : e2.contextElement ? v(e2.contextElement) : [],
                        popper: v(t2)
                    }, i3 = (function(e3) {
                        var t3 = y(e3);
                        return U.reduce(function(e4, n2) {
                            return e4.concat(t3.filter(function(e5) {
                                return e5.phase === n2;
                            }));
                        }, []);
                    })(function(e3) {
                        var t3 = e3.reduce(function(e4, t4) {
                            var n2 = e4[t4.name];
                            return e4[t4.name] = n2 ? Object.assign({
                            }, n2, t4, {
                                options: Object.assign({
                                }, n2.options, t4.options),
                                data: Object.assign({
                                }, n2.data, t4.data)
                            }) : t4, e4;
                        }, {
                        });
                        return Object.keys(t3).map(function(e4) {
                            return t3[e4];
                        });
                    }([].concat(o2, s2.options.modifiers))), s2.orderedModifiers = i3.filter(function(e3) {
                        return e3.enabled;
                    }), s2.orderedModifiers.forEach(function(e3) {
                        var t3 = e3.name, n2 = e3.options;
                        n2 = (void 0) === n2 ? {
                        } : n2, "function" == typeof (e3 = e3.effect) && (t3 = e3({
                            state: s2,
                            name: t3,
                            instance: c1,
                            options: n2
                        }), f2.push(t3 || function() {
                        }));
                    }), c1.update();
                },
                forceUpdate: function() {
                    if (!p1) {
                        var e3 = s2.elements, t3 = e3.reference;
                        if (B(t3, e3 = e3.popper)) for(s2.rects = {
                            reference: u(t3, b(e3), "fixed" === s2.options.strategy),
                            popper: d(e3)
                        }, s2.reset = !1, s2.placement = s2.options.placement, s2.orderedModifiers.forEach(function(e4) {
                            return s2.modifiersData[e4.name] = Object.assign({
                            }, e4.data);
                        }), t3 = 0; t3 < s2.orderedModifiers.length; t3++)if (!0 === s2.reset) s2.reset = !1, t3 = -1;
                        else {
                            var n2 = s2.orderedModifiers[t3];
                            e3 = n2.fn;
                            var o3 = n2.options;
                            o3 = (void 0) === o3 ? {
                            } : o3, n2 = n2.name, "function" == typeof e3 && (s2 = e3({
                                state: s2,
                                options: o3,
                                name: n2,
                                instance: c1
                            }) || s2);
                        }
                    }
                },
                update: w(function() {
                    return new Promise(function(e4) {
                        c1.forceUpdate(), e4(s2);
                    });
                }),
                destroy: function() {
                    a1(), p1 = !0;
                }
            };
            return B(e2, t2) ? (c1.setOptions(i2).then(function(e4) {
                !p1 && i2.onFirstUpdate && i2.onFirstUpdate(e4);
            }), c1) : c1;
        };
    }
    function T(e1) {
        var n3, o2 = e1.popper, r3 = e1.popperRect, i2 = e1.placement, a1 = e1.variation, s2 = e1.offsets, p1 = e1.position, l2 = e1.gpuAcceleration, u3 = e1.adaptive;
        if (!0 === (e1 = e1.roundOffsets)) {
            e1 = s2.y;
            var d1 = window.devicePixelRatio || 1;
            e1 = {
                x: X(X(s2.x * d1) / d1) || 0,
                y: X(X(e1 * d1) / d1) || 0
            };
        } else e1 = "function" == typeof e1 ? e1(s2) : s2;
        e1 = (void 0) === (e1 = (d1 = e1).x) ? 0 : e1, d1 = (void 0) === (d1 = d1.y) ? 0 : d1;
        var h1 = s2.hasOwnProperty("x");
        s2 = s2.hasOwnProperty("y");
        var m1, v1 = "left", g1 = "top", y1 = window;
        if (u3) {
            var w1 = b(o2), x1 = "clientHeight", O1 = "clientWidth";
            w1 === t(o2) && "static" !== c(w1 = f1(o2)).position && "absolute" === p1 && (x1 = "scrollHeight", O1 = "scrollWidth"), "top" !== i2 && ("left" !== i2 && "right" !== i2 || "end" !== a1) || (g1 = "bottom", d1 -= w1[x1] - r3.height, d1 *= l2 ? 1 : -1), "left" !== i2 && ("top" !== i2 && "bottom" !== i2 || "end" !== a1) || (v1 = "right", e1 -= w1[O1] - r3.width, e1 *= l2 ? 1 : -1);
        }
        return o2 = Object.assign({
            position: p1
        }, u3 && Q), l2 ? Object.assign({
        }, o2, ((m1 = {
        })[g1] = s2 ? "0" : "", m1[v1] = h1 ? "0" : "", m1.transform = 1 >= (y1.devicePixelRatio || 1) ? "translate(" + e1 + "px, " + d1 + "px)" : "translate3d(" + e1 + "px, " + d1 + "px, 0)", m1)) : Object.assign({
        }, o2, ((n3 = {
        })[g1] = s2 ? d1 + "px" : "", n3[v1] = h1 ? e1 + "px" : "", n3.transform = "", n3));
    }
    function R(e1) {
        return e1.replace(/left|right|bottom|top/g, function(e2) {
            return te[e2];
        });
    }
    function S(e1) {
        return e1.replace(/start|end/g, function(e2) {
            return ne[e2];
        });
    }
    function C(e1, t1, n3) {
        return (void 0) === n3 && (n3 = {
            x: 0,
            y: 0
        }), {
            top: e1.top - t1.height - n3.y,
            right: e1.right - t1.width + n3.x,
            bottom: e1.bottom - t1.height + n3.y,
            left: e1.left - t1.width - n3.x
        };
    }
    function q(e1) {
        return [
            "top",
            "right",
            "bottom",
            "left"
        ].some(function(t1) {
            return 0 <= e1[t1];
        });
    }
    var N = Math.round, V = [
        "top",
        "bottom",
        "right",
        "left"
    ], I = V.reduce(function(e1, t1) {
        return e1.concat([
            t1 + "-start",
            t1 + "-end"
        ]);
    }, []), _ = [].concat(V, [
        "auto"
    ]).reduce(function(e1, t1) {
        return e1.concat([
            t1,
            t1 + "-start",
            t1 + "-end"
        ]);
    }, []), U = "beforeRead read afterRead beforeMain main afterMain beforeWrite write afterWrite".split(" "), z = Math.max, F = Math.min, X = Math.round, Y = {
        placement: "bottom",
        modifiers: [],
        strategy: "absolute"
    }, G = {
        passive: !0
    }, J = {
        name: "eventListeners",
        enabled: !0,
        phase: "write",
        fn: function() {
        },
        effect: function(e1) {
            var n3 = e1.state, o2 = e1.instance, r3 = (e1 = e1.options).scroll, i2 = (void 0) === r3 || r3, a1 = (void 0) === (e1 = e1.resize) || e1, s2 = t(n3.elements.popper), f2 = [].concat(n3.scrollParents.reference, n3.scrollParents.popper);
            return i2 && f2.forEach(function(e2) {
                e2.addEventListener("scroll", o2.update, G);
            }), a1 && s2.addEventListener("resize", o2.update, G), function() {
                i2 && f2.forEach(function(e2) {
                    e2.removeEventListener("scroll", o2.update, G);
                }), a1 && s2.removeEventListener("resize", o2.update, G);
            };
        },
        data: {
        }
    }, K = {
        name: "popperOffsets",
        enabled: !0,
        phase: "read",
        fn: function(e1) {
            var t1 = e1.state;
            t1.modifiersData[e1.name] = P({
                reference: t1.rects.reference,
                element: t1.rects.popper,
                strategy: "absolute",
                placement: t1.placement
            });
        },
        data: {
        }
    }, Q = {
        top: "auto",
        right: "auto",
        bottom: "auto",
        left: "auto"
    }, Z = {
        name: "computeStyles",
        enabled: !0,
        phase: "beforeWrite",
        fn: function(e1) {
            var t1 = e1.state, n3 = e1.options;
            e1 = (void 0) === (e1 = n3.gpuAcceleration) || e1;
            var o2 = n3.adaptive;
            o2 = (void 0) === o2 || o2, n3 = (void 0) === (n3 = n3.roundOffsets) || n3, e1 = {
                placement: x(t1.placement),
                variation: L(t1.placement),
                popper: t1.elements.popper,
                popperRect: t1.rects.popper,
                gpuAcceleration: e1
            }, null != t1.modifiersData.popperOffsets && (t1.styles.popper = Object.assign({
            }, t1.styles.popper, T(Object.assign({
            }, e1, {
                offsets: t1.modifiersData.popperOffsets,
                position: t1.options.strategy,
                adaptive: o2,
                roundOffsets: n3
            })))), null != t1.modifiersData.arrow && (t1.styles.arrow = Object.assign({
            }, t1.styles.arrow, T(Object.assign({
            }, e1, {
                offsets: t1.modifiersData.arrow,
                position: "absolute",
                adaptive: !1,
                roundOffsets: n3
            })))), t1.attributes.popper = Object.assign({
            }, t1.attributes.popper, {
                "data-popper-placement": t1.placement
            });
        },
        data: {
        }
    }, $ = {
        name: "applyStyles",
        enabled: !0,
        phase: "write",
        fn: function(e1) {
            var t1 = e1.state;
            Object.keys(t1.elements).forEach(function(e2) {
                var n3 = t1.styles[e2] || {
                }, r3 = t1.attributes[e2] || {
                }, i2 = t1.elements[e2];
                o1(i2) && s(i2) && (Object.assign(i2.style, n3), Object.keys(r3).forEach(function(e4) {
                    var t2 = r3[e4];
                    !1 === t2 ? i2.removeAttribute(e4) : i2.setAttribute(e4, !0 === t2 ? "" : t2);
                }));
            });
        },
        effect: function(e1) {
            var t1 = e1.state, n3 = {
                popper: {
                    position: t1.options.strategy,
                    left: "0",
                    top: "0",
                    margin: "0"
                },
                arrow: {
                    position: "absolute"
                },
                reference: {
                }
            };
            return Object.assign(t1.elements.popper.style, n3.popper), t1.styles = n3, t1.elements.arrow && Object.assign(t1.elements.arrow.style, n3.arrow), function() {
                Object.keys(t1.elements).forEach(function(e2) {
                    var r3 = t1.elements[e2], i2 = t1.attributes[e2] || {
                    };
                    e2 = Object.keys(t1.styles.hasOwnProperty(e2) ? t1.styles[e2] : n3[e2]).reduce(function(e4, t2) {
                        return e4[t2] = "", e4;
                    }, {
                    }), o1(r3) && s(r3) && (Object.assign(r3.style, e2), Object.keys(i2).forEach(function(e4) {
                        r3.removeAttribute(e4);
                    }));
                });
            };
        },
        requires: [
            "computeStyles"
        ]
    }, ee = {
        name: "offset",
        enabled: !0,
        phase: "main",
        requires: [
            "popperOffsets"
        ],
        fn: function(e1) {
            var t1 = e1.state, n3 = e1.name, o2 = (void 0) === (e1 = e1.options.offset) ? [
                0,
                0
            ] : e1, r3 = (e1 = _.reduce(function(e2, n4) {
                var r4 = t1.rects, i2 = x(n4), a1 = 0 <= [
                    "left",
                    "top"
                ].indexOf(i2) ? -1 : 1, s2 = "function" == typeof o2 ? o2(Object.assign({
                }, r4, {
                    placement: n4
                })) : o2;
                return r4 = (r4 = s2[0]) || 0, s2 = ((s2 = s2[1]) || 0) * a1, i2 = 0 <= [
                    "left",
                    "right"
                ].indexOf(i2) ? {
                    x: s2,
                    y: r4
                } : {
                    x: r4,
                    y: s2
                }, e2[n4] = i2, e2;
            }, {
            }))[t1.placement], i2 = r3.x;
            r3 = r3.y, null != t1.modifiersData.popperOffsets && (t1.modifiersData.popperOffsets.x += i2, t1.modifiersData.popperOffsets.y += r3), t1.modifiersData[n3] = e1;
        }
    }, te = {
        left: "right",
        right: "left",
        bottom: "top",
        top: "bottom"
    }, ne = {
        start: "end",
        end: "start"
    }, oe = {
        name: "flip",
        enabled: !0,
        phase: "main",
        fn: function(e1) {
            var t1 = e1.state, n3 = e1.options;
            if (e1 = e1.name, !t1.modifiersData[e1]._skip) {
                var o2 = n3.mainAxis;
                o2 = (void 0) === o2 || o2;
                var r3 = n3.altAxis;
                r3 = (void 0) === r3 || r3;
                var i2 = n3.fallbackPlacements, a1 = n3.padding, s2 = n3.boundary, f2 = n3.rootBoundary, p1 = n3.altBoundary, c1 = n3.flipVariations, l2 = (void 0) === c1 || c1, u3 = n3.allowedAutoPlacements;
                c1 = x(n3 = t1.options.placement), i2 = i2 || (c1 !== n3 && l2 ? (function(e2) {
                    if ("auto" === x(e2)) return [];
                    var t2 = R(e2);
                    return [
                        S(e2),
                        t2,
                        S(t2)
                    ];
                })(n3) : [
                    R(n3)
                ]);
                var d2 = [
                    n3
                ].concat(i2).reduce(function(e2, n4) {
                    return e2.concat("auto" === x(n4) ? function(e4, t2) {
                        (void 0) === t2 && (t2 = {
                        });
                        var n5 = t2.boundary, o4 = t2.rootBoundary, r4 = t2.padding, i3 = t2.flipVariations, a2 = t2.allowedAutoPlacements, s3 = (void 0) === a2 ? _ : a2, f3 = L(t2.placement);
                        0 === (i3 = (t2 = f3 ? i3 ? I : I.filter(function(e5) {
                            return L(e5) === f3;
                        }) : V).filter(function(e5) {
                            return 0 <= s3.indexOf(e5);
                        })).length && (i3 = t2);
                        var p2 = i3.reduce(function(t4, i4) {
                            return t4[i4] = A(e4, {
                                placement: i4,
                                boundary: n5,
                                rootBoundary: o4,
                                padding: r4
                            })[x(i4)], t4;
                        }, {
                        });
                        return Object.keys(p2).sort(function(e5, t4) {
                            return p2[e5] - p2[t4];
                        });
                    }(t1, {
                        placement: n4,
                        boundary: s2,
                        rootBoundary: f2,
                        padding: a1,
                        flipVariations: l2,
                        allowedAutoPlacements: u3
                    }) : n4);
                }, []);
                n3 = t1.rects.reference, i2 = t1.rects.popper;
                var h1 = new Map;
                c1 = !0;
                for(var m1 = d2[0], v1 = 0; v1 < d2.length; v1++){
                    var g1 = d2[v1], b1 = x(g1), y1 = "start" === L(g1), w2 = 0 <= [
                        "top",
                        "bottom"
                    ].indexOf(b1), O2 = w2 ? "width" : "height", j1 = A(t1, {
                        placement: g1,
                        boundary: s2,
                        rootBoundary: f2,
                        altBoundary: p1,
                        padding: a1
                    });
                    if (y1 = w2 ? y1 ? "right" : "left" : y1 ? "bottom" : "top", n3[O2] > i2[O2] && (y1 = R(y1)), O2 = R(y1), w2 = [], o2 && w2.push(0 >= j1[b1]), r3 && w2.push(0 >= j1[y1], 0 >= j1[O2]), w2.every(function(e2) {
                        return e2;
                    })) {
                        m1 = g1, c1 = !1;
                        break;
                    }
                    h1.set(g1, w2);
                }
                if (c1) for(o2 = function(e2) {
                    var t2 = d2.find(function(t4) {
                        if (t4 = h1.get(t4)) return t4.slice(0, e2).every(function(e4) {
                            return e4;
                        });
                    });
                    if (t2) return m1 = t2, "break";
                }, r3 = l2 ? 3 : 1; 0 < r3 && "break" !== o2(r3); r3--);
                t1.placement !== m1 && (t1.modifiersData[e1]._skip = !0, t1.placement = m1, t1.reset = !0);
            }
        },
        requiresIfExists: [
            "offset"
        ],
        data: {
            _skip: !1
        }
    }, re = {
        name: "preventOverflow",
        enabled: !0,
        phase: "main",
        fn: function(e1) {
            var t1 = e1.state, n3 = e1.options;
            e1 = e1.name;
            var o4 = n3.mainAxis, r4 = (void 0) === o4 || o4, i3 = (void 0) !== (o4 = n3.altAxis) && o4;
            o4 = (void 0) === (o4 = n3.tether) || o4;
            var a2 = n3.tetherOffset, s3 = (void 0) === a2 ? 0 : a2, f3 = A(t1, {
                boundary: n3.boundary,
                rootBoundary: n3.rootBoundary,
                padding: n3.padding,
                altBoundary: n3.altBoundary
            });
            n3 = x(t1.placement);
            var p2 = L(t1.placement), c2 = !p2, l3 = M(n3);
            n3 = "x" === l3 ? "y" : "x", a2 = t1.modifiersData.popperOffsets;
            var u4 = t1.rects.reference, h2 = t1.rects.popper, m2 = "function" == typeof s3 ? s3(Object.assign({
            }, t1.rects, {
                placement: t1.placement
            })) : s3;
            if (s3 = {
                x: 0,
                y: 0
            }, a2) {
                if (r4 || i3) {
                    var v2 = "y" === l3 ? "top" : "left", g2 = "y" === l3 ? "bottom" : "right", y2 = "y" === l3 ? "height" : "width", w3 = a2[l3], O3 = a2[l3] + f3[v2], j2 = a2[l3] - f3[g2], E1 = o4 ? -h2[y2] / 2 : 0, D1 = "start" === p2 ? u4[y2] : h2[y2];
                    p2 = "start" === p2 ? -h2[y2] : -u4[y2], h2 = t1.elements.arrow, h2 = o4 && h2 ? d(h2) : {
                        width: 0,
                        height: 0
                    };
                    var P1 = t1.modifiersData["arrow#persistent"] ? t1.modifiersData["arrow#persistent"].padding : {
                        top: 0,
                        right: 0,
                        bottom: 0,
                        left: 0
                    };
                    v2 = P1[v2], g2 = P1[g2], h2 = z(0, F(u4[y2], h2[y2])), D1 = c2 ? u4[y2] / 2 - E1 - h2 - v2 - m2 : D1 - h2 - v2 - m2, u4 = c2 ? -u4[y2] / 2 + E1 + h2 + g2 + m2 : p2 + h2 + g2 + m2, c2 = t1.elements.arrow && b(t1.elements.arrow), m2 = t1.modifiersData.offset ? t1.modifiersData.offset[t1.placement][l3] : 0, c2 = a2[l3] + D1 - m2 - (c2 ? "y" === l3 ? c2.clientTop || 0 : c2.clientLeft || 0 : 0), u4 = a2[l3] + u4 - m2, r4 && (r4 = o4 ? F(O3, c2) : O3, j2 = o4 ? z(j2, u4) : j2, r4 = z(r4, F(w3, j2)), a2[l3] = r4, s3[l3] = r4 - w3), i3 && (r4 = (i3 = a2[n3]) + f3["x" === l3 ? "top" : "left"], f3 = i3 - f3["x" === l3 ? "bottom" : "right"], r4 = o4 ? F(r4, c2) : r4, o4 = o4 ? z(f3, u4) : f3, o4 = z(r4, F(i3, o4)), a2[n3] = o4, s3[n3] = o4 - i3);
                }
                t1.modifiersData[e1] = s3;
            }
        },
        requiresIfExists: [
            "offset"
        ]
    }, ie = {
        name: "arrow",
        enabled: !0,
        phase: "main",
        fn: function(e1) {
            var t1, n3 = e1.state, o4 = e1.name, r4 = e1.options, i3 = n3.elements.arrow, a2 = n3.modifiersData.popperOffsets, s3 = x(n3.placement);
            if (e1 = M(s3), s3 = 0 <= [
                "left",
                "right"
            ].indexOf(s3) ? "height" : "width", i3 && a2) {
                r4 = k("number" != typeof (r4 = "function" == typeof (r4 = r4.padding) ? r4(Object.assign({
                }, n3.rects, {
                    placement: n3.placement
                })) : r4) ? r4 : W(r4, V));
                var f3 = d(i3), p2 = "y" === e1 ? "top" : "left", c2 = "y" === e1 ? "bottom" : "right", l3 = n3.rects.reference[s3] + n3.rects.reference[e1] - a2[e1] - n3.rects.popper[s3];
                a2 = a2[e1] - n3.rects.reference[e1], a2 = (i3 = (i3 = b(i3)) ? "y" === e1 ? i3.clientHeight || 0 : i3.clientWidth || 0 : 0) / 2 - f3[s3] / 2 + (l3 / 2 - a2 / 2), s3 = z(r4[p2], F(a2, i3 - f3[s3] - r4[c2])), n3.modifiersData[o4] = ((t1 = {
                })[e1] = s3, t1.centerOffset = s3 - a2, t1);
            }
        },
        effect: function(e1) {
            var t1 = e1.state;
            if (null != (e1 = (void 0) === (e1 = e1.options.element) ? "[data-popper-arrow]" : e1)) {
                if ("string" == typeof e1 && !(e1 = t1.elements.popper.querySelector(e1))) return;
                O(t1.elements.popper, e1) && (t1.elements.arrow = e1);
            }
        },
        requires: [
            "popperOffsets"
        ],
        requiresIfExists: [
            "preventOverflow"
        ]
    }, ae = {
        name: "hide",
        enabled: !0,
        phase: "main",
        requiresIfExists: [
            "preventOverflow"
        ],
        fn: function(e1) {
            var t1 = e1.state;
            e1 = e1.name;
            var n3 = t1.rects.reference, o4 = t1.rects.popper, r4 = t1.modifiersData.preventOverflow, i3 = A(t1, {
                elementContext: "reference"
            }), a2 = A(t1, {
                altBoundary: !0
            });
            n3 = C(i3, n3), o4 = C(a2, o4, r4), r4 = q(n3), a2 = q(o4), t1.modifiersData[e1] = {
                referenceClippingOffsets: n3,
                popperEscapeOffsets: o4,
                isReferenceHidden: r4,
                hasPopperEscaped: a2
            }, t1.attributes.popper = Object.assign({
            }, t1.attributes.popper, {
                "data-popper-reference-hidden": r4,
                "data-popper-escaped": a2
            });
        }
    }, se = H({
        defaultModifiers: [
            J,
            K,
            Z,
            $
        ]
    }), fe = [
        J,
        K,
        Z,
        $,
        ee,
        oe,
        re,
        ie,
        ae
    ], pe = H({
        defaultModifiers: fe
    });
    e.applyStyles = $, e.arrow = ie, e.computeStyles = Z, e.createPopper = pe, e.createPopperLite = se, e.defaultModifiers = fe, e.detectOverflow = A, e.eventListeners = J, e.flip = oe, e.hide = ae, e.offset = ee, e.popperGenerator = H, e.popperOffsets = K, e.preventOverflow = re, Object.defineProperty(e, "__esModule", {
        value: !0
    });
}); //# sourceMappingURL=popper.min.js.map

},{}],"i79fM":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _checkElementsJs = require("../helpers/check-elements.js");
var _getElementsFromPointJs = require("../helpers/get-elements-from-point.js");
var _getElementsFromPointJsDefault = parcelHelpers.interopDefault(_getElementsFromPointJs);
var _getTargetJs = require("../helpers/get-target.js");
const mouseMove = (e)=>{
    const hoveredElements = _getElementsFromPointJsDefault.default(e.clientX, e.clientY);
    const hoveredElement = hoveredElements[hoveredElements.length - 2];
    const targetEl = _getTargetJs.getTarget(hoveredElement);
    if (_checkElementsJs.checkElements(targetEl)) {
        _checkElementsJs.checkHighlightedElement();
        return;
    }
    _checkElementsJs.checkHighlightedElement();
    targetEl.classList.add("gthr-highlight");
};
exports.default = mouseMove;

},{"../helpers/check-elements.js":"67C1n","../helpers/get-elements-from-point.js":"1HdO4","../helpers/get-target.js":"lORvI","@parcel/transformer-js/src/esmodule-helpers.js":"4N8i7"}],"1HdO4":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
const getAllElementsFromPoint = (x, y)=>{
    let element, elements = [];
    let old_visibility = [];
    while(true){
        element = document.elementFromPoint(x, y);
        if (!element || element === document.documentElement) break;
        elements.push(element);
        old_visibility.push(element.style.visibility);
        element.style.visibility = 'hidden'; // Temporarily hide the element (without changing the layout)
    }
    for(let k = 0; k < elements.length; k++)elements[k].style.visibility = old_visibility[k];
    elements.reverse();
    return elements;
};
exports.default = getAllElementsFromPoint;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"4N8i7"}],"lORvI":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getTarget", ()=>getTarget
);
parcelHelpers.export(exports, "getTargetFromEvent", ()=>getTargetFromEvent
);
const getTarget = (target)=>{
    let targetEl = target;
    if (targetEl.tagName === "IMG" || targetEl.tagName === "svg" || targetEl.tagName === "path") targetEl = targetEl.closest("div, span, section, main, body, aside, header, footer, nav, a");
    return targetEl;
};
const getTargetFromEvent = (e)=>{
    let targetEl = e.target;
    if (targetEl.tagName === "IMG" || targetEl.tagName === "svg" || targetEl.tagName === "path") targetEl = targetEl.closest("div, span, section, main, body, aside, header, footer, nav, a");
    return targetEl;
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"4N8i7"}],"3p916":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _checkElementsJs = require("../helpers/check-elements.js");
var _getElementsFromPointJs = require("../helpers/get-elements-from-point.js");
var _getElementsFromPointJsDefault = parcelHelpers.interopDefault(_getElementsFromPointJs);
var _getTargetJs = require("../helpers/get-target.js");
const click = (e, cb)=>{
    e.preventDefault();
    const hoveredElements = _getElementsFromPointJsDefault.default(e.clientX, e.clientY);
    const hoveredElement = hoveredElements[hoveredElements.length - 2];
    const targetEl = _getTargetJs.getTarget(hoveredElement);
    if (_checkElementsJs.checkElements(targetEl)) return;
    cb(targetEl);
};
exports.default = click;

},{"../helpers/check-elements.js":"67C1n","../helpers/get-elements-from-point.js":"1HdO4","../helpers/get-target.js":"lORvI","@parcel/transformer-js/src/esmodule-helpers.js":"4N8i7"}]},["dTQGj","c2sAv","2xVEC"], "2xVEC", "parcelRequirec0b5")

