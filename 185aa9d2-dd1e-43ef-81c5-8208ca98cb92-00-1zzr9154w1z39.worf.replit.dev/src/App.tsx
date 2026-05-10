import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/App.tsx");import.meta.env = {"BASE_URL": "/", "DEV": true, "MODE": "development", "PROD": false, "SSR": false};"use strict";
import __vite__cjsImport0_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=59c858e9"; const jsxDEV = __vite__cjsImport0_react_jsxDevRuntime["jsxDEV"];
import { Switch, Route, Router as WouterRouter } from "/node_modules/.vite/deps/wouter.js?v=59c858e9";
import { QueryClient, QueryClientProvider } from "/node_modules/.vite/deps/@tanstack_react-query.js?v=59c858e9";
import { Toaster } from "/src/components/ui/toaster.tsx";
import { TooltipProvider } from "/src/components/ui/tooltip.tsx";
import LandingPage from "/src/pages/LandingPage.tsx?t=1778396295885";
import NotFound from "/src/pages/not-found.tsx";
const queryClient = new QueryClient();
function Router() {
  return /* @__PURE__ */ jsxDEV(Switch, { "data-replit-metadata": "artifacts/landing-page/src/App.tsx:12:4", "data-component-name": "Switch", children: [
    /* @__PURE__ */ jsxDEV(Route, { "data-replit-metadata": "artifacts/landing-page/src/App.tsx:13:6", "data-component-name": "Route", path: "/", component: LandingPage }, void 0, false, {
      fileName: "/home/runner/workspace/artifacts/landing-page/src/App.tsx",
      lineNumber: 13,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV(Route, { "data-replit-metadata": "artifacts/landing-page/src/App.tsx:14:6", "data-component-name": "Route", component: NotFound }, void 0, false, {
      fileName: "/home/runner/workspace/artifacts/landing-page/src/App.tsx",
      lineNumber: 14,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "/home/runner/workspace/artifacts/landing-page/src/App.tsx",
    lineNumber: 12,
    columnNumber: 5
  }, this);
}
_c = Router;
function App() {
  return /* @__PURE__ */ jsxDEV(QueryClientProvider, { "data-replit-metadata": "artifacts/landing-page/src/App.tsx:21:4", "data-component-name": "QueryClientProvider", client: queryClient, children: /* @__PURE__ */ jsxDEV(TooltipProvider, { "data-replit-metadata": "artifacts/landing-page/src/App.tsx:22:6", "data-component-name": "TooltipProvider", children: [
    /* @__PURE__ */ jsxDEV(WouterRouter, { "data-replit-metadata": "artifacts/landing-page/src/App.tsx:23:8", "data-component-name": "WouterRouter", base: import.meta.env.BASE_URL.replace(/\/$/, ""), children: /* @__PURE__ */ jsxDEV(Router, { "data-replit-metadata": "artifacts/landing-page/src/App.tsx:24:10", "data-component-name": "Router" }, void 0, false, {
      fileName: "/home/runner/workspace/artifacts/landing-page/src/App.tsx",
      lineNumber: 24,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "/home/runner/workspace/artifacts/landing-page/src/App.tsx",
      lineNumber: 23,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV(Toaster, { "data-replit-metadata": "artifacts/landing-page/src/App.tsx:26:8", "data-component-name": "Toaster" }, void 0, false, {
      fileName: "/home/runner/workspace/artifacts/landing-page/src/App.tsx",
      lineNumber: 26,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "/home/runner/workspace/artifacts/landing-page/src/App.tsx",
    lineNumber: 22,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "/home/runner/workspace/artifacts/landing-page/src/App.tsx",
    lineNumber: 21,
    columnNumber: 5
  }, this);
}
_c2 = App;
export default App;
var _c, _c2;
$RefreshReg$(_c, "Router");
$RefreshReg$(_c2, "App");
import * as RefreshRuntime from "/@react-refresh";
const inWebWorker = typeof WorkerGlobalScope !== "undefined" && self instanceof WorkerGlobalScope;
if (import.meta.hot && !inWebWorker) {
  if (!window.$RefreshReg$) {
    throw new Error(
      "@vitejs/plugin-react can't detect preamble. Something is wrong."
    );
  }
  RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
    RefreshRuntime.registerExportsForReactRefresh("/home/runner/workspace/artifacts/landing-page/src/App.tsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("/home/runner/workspace/artifacts/landing-page/src/App.tsx", currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}
function $RefreshReg$(type, id) {
  return RefreshRuntime.register(type, "/home/runner/workspace/artifacts/landing-page/src/App.tsx " + id);
}
function $RefreshSig$() {
  return RefreshRuntime.createSignatureFunctionForTransform();
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6IjtBQVlNO0FBWk4sU0FBU0EsUUFBUUMsT0FBT0MsVUFBVUMsb0JBQW9CO0FBQ3RELFNBQVNDLGFBQWFDLDJCQUEyQjtBQUNqRCxTQUFTQyxlQUFlO0FBQ3hCLFNBQVNDLHVCQUF1QjtBQUNoQyxPQUFPQyxpQkFBaUI7QUFDeEIsT0FBT0MsY0FBYztBQUVyQixNQUFNQyxjQUFjLElBQUlOLFlBQVk7QUFFcEMsU0FBU0YsU0FBUztBQUNoQixTQUNFLHVCQUFDLFVBQUssb0dBQ0o7QUFBQSwyQkFBQyxTQUFJLG1HQUFFLE1BQUssS0FBSSxXQUFXTSxlQUEzQjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQXVDO0FBQUEsSUFDdkMsdUJBQUMsU0FBSSxtR0FBRSxXQUFXQyxZQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQTJCO0FBQUEsT0FGN0I7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUdBO0FBRUo7QUFBQUUsS0FQU1Q7QUFTVCxTQUFTVSxNQUFNO0FBQ2IsU0FDRSx1QkFBQyx1QkFBa0IsaUhBQUUsUUFBUUYsYUFDM0IsaUNBQUMsbUJBQWMsNkdBQ2I7QUFBQSwyQkFBQyxnQkFBVywwR0FBRSxNQUFNRyxZQUFZQyxJQUFJQyxTQUFTQyxRQUFRLE9BQU8sRUFBRSxHQUM1RCxpQ0FBQyxVQUFLLHVHQUFOO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FBTyxLQURUO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FFQTtBQUFBLElBQ0EsdUJBQUMsV0FBTSx1R0FBUDtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQVE7QUFBQSxPQUpWO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FLQSxLQU5GO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FPQTtBQUVKO0FBQUFDLE1BWFNMO0FBYVQsZUFBZUE7QUFBRyxJQUFBRCxJQUFBTTtBQUFBLGFBQUFOLElBQUE7QUFBQSxhQUFBTSxLQUFBIiwibmFtZXMiOlsiU3dpdGNoIiwiUm91dGUiLCJSb3V0ZXIiLCJXb3V0ZXJSb3V0ZXIiLCJRdWVyeUNsaWVudCIsIlF1ZXJ5Q2xpZW50UHJvdmlkZXIiLCJUb2FzdGVyIiwiVG9vbHRpcFByb3ZpZGVyIiwiTGFuZGluZ1BhZ2UiLCJOb3RGb3VuZCIsInF1ZXJ5Q2xpZW50IiwiX2MiLCJBcHAiLCJpbXBvcnQiLCJlbnYiLCJCQVNFX1VSTCIsInJlcGxhY2UiLCJfYzIiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZXMiOlsiQXBwLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTd2l0Y2gsIFJvdXRlLCBSb3V0ZXIgYXMgV291dGVyUm91dGVyIH0gZnJvbSBcIndvdXRlclwiO1xuaW1wb3J0IHsgUXVlcnlDbGllbnQsIFF1ZXJ5Q2xpZW50UHJvdmlkZXIgfSBmcm9tIFwiQHRhbnN0YWNrL3JlYWN0LXF1ZXJ5XCI7XG5pbXBvcnQgeyBUb2FzdGVyIH0gZnJvbSBcIkAvY29tcG9uZW50cy91aS90b2FzdGVyXCI7XG5pbXBvcnQgeyBUb29sdGlwUHJvdmlkZXIgfSBmcm9tIFwiQC9jb21wb25lbnRzL3VpL3Rvb2x0aXBcIjtcbmltcG9ydCBMYW5kaW5nUGFnZSBmcm9tIFwiQC9wYWdlcy9MYW5kaW5nUGFnZVwiO1xuaW1wb3J0IE5vdEZvdW5kIGZyb20gXCJAL3BhZ2VzL25vdC1mb3VuZFwiO1xuXG5jb25zdCBxdWVyeUNsaWVudCA9IG5ldyBRdWVyeUNsaWVudCgpO1xuXG5mdW5jdGlvbiBSb3V0ZXIoKSB7XG4gIHJldHVybiAoXG4gICAgPFN3aXRjaD5cbiAgICAgIDxSb3V0ZSBwYXRoPVwiL1wiIGNvbXBvbmVudD17TGFuZGluZ1BhZ2V9IC8+XG4gICAgICA8Um91dGUgY29tcG9uZW50PXtOb3RGb3VuZH0gLz5cbiAgICA8L1N3aXRjaD5cbiAgKTtcbn1cblxuZnVuY3Rpb24gQXBwKCkge1xuICByZXR1cm4gKFxuICAgIDxRdWVyeUNsaWVudFByb3ZpZGVyIGNsaWVudD17cXVlcnlDbGllbnR9PlxuICAgICAgPFRvb2x0aXBQcm92aWRlcj5cbiAgICAgICAgPFdvdXRlclJvdXRlciBiYXNlPXtpbXBvcnQubWV0YS5lbnYuQkFTRV9VUkwucmVwbGFjZSgvXFwvJC8sIFwiXCIpfT5cbiAgICAgICAgICA8Um91dGVyIC8+XG4gICAgICAgIDwvV291dGVyUm91dGVyPlxuICAgICAgICA8VG9hc3RlciAvPlxuICAgICAgPC9Ub29sdGlwUHJvdmlkZXI+XG4gICAgPC9RdWVyeUNsaWVudFByb3ZpZGVyPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBBcHA7XG4iXSwiZmlsZSI6Ii9ob21lL3J1bm5lci93b3Jrc3BhY2UvYXJ0aWZhY3RzL2xhbmRpbmctcGFnZS9zcmMvQXBwLnRzeCJ9