import _sfc_main$1 from './ContentDoc-gxK3uqWs.mjs';
import _sfc_main$2 from './ContentRenderer-Pcx6nL-T.mjs';
import _sfc_main$3 from './toc-links-qRNZQDDo.mjs';
import { ref, mergeProps, withCtx, createVNode, unref, openBlock, createBlock, createCommentVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderClass } from 'vue/server-renderer';
import '../server.mjs';
import '../../nitro/node-server.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';
import 'shikiji';
import 'shikiji-transformers';
import 'unified';
import 'mdast-util-to-string';
import 'micromark';
import 'unist-util-stringify-position';
import 'micromark-util-character';
import 'micromark-util-chunked';
import 'micromark-util-resolve-all';
import 'micromark-util-sanitize-uri';
import 'slugify';
import 'remark-parse';
import 'remark-rehype';
import 'remark-mdc';
import 'hast-util-to-string';
import 'github-slugger';
import 'detab';
import 'remark-emoji';
import 'remark-gfm';
import 'rehype-external-links';
import 'rehype-sort-attribute-values';
import 'rehype-sort-attributes';
import 'rehype-raw';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import './ContentQuery-7kUVGjOA.mjs';
import './query-HWEU_oLI.mjs';
import './preview-CpIoKLn9.mjs';
import './ContentRendererMarkdown-MeMrvQNk.mjs';
import 'property-information';
import './nuxt-link-1NTK_bBn.mjs';

const _sfc_main = {
  __name: "[...slug]",
  __ssrInlineRender: true,
  setup(__props) {
    const activeId = ref(null);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ContentDoc = _sfc_main$1;
      const _component_ContentRenderer = _sfc_main$2;
      const _component_TocLinks = _sfc_main$3;
      _push(`<article${ssrRenderAttrs(mergeProps({ class: "prose dark:prose-invert max-w-none prose-pre:bg-white dark:prose-pre:bg-gray-800 prose-pre:text-gray-700 dark:prose-pre:text-gray-300" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_ContentDoc, null, {
        "not-found": withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<h1${_scopeId}>Document not found (404)</h1><p${_scopeId}>This post could not be found.</p>`);
          } else {
            return [
              createVNode("h1", null, "Document not found (404)"),
              createVNode("p", null, "This post could not be found.")
            ];
          }
        }),
        default: withCtx(({ doc }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="grid grid-cols-6 gap-16"${_scopeId}><div class="${ssrRenderClass({ "col-span-6 md:col-span-4": doc.toc, "col-span-6": !doc.toc })}"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_ContentRenderer, { value: doc }, null, _parent2, _scopeId));
            _push2(`</div>`);
            if (doc.toc) {
              _push2(`<div class="hidden md:col-span-2 md:block not-prose"${_scopeId}><aside class="sticky top-8"${_scopeId}><div class="font-semibold mb-2"${_scopeId}> Table of Contents </div><nav${_scopeId}>`);
              _push2(ssrRenderComponent(_component_TocLinks, {
                links: doc.body.toc.links,
                "active-id": unref(activeId)
              }, null, _parent2, _scopeId));
              _push2(`</nav></aside></div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "grid grid-cols-6 gap-16" }, [
                createVNode("div", {
                  class: { "col-span-6 md:col-span-4": doc.toc, "col-span-6": !doc.toc }
                }, [
                  createVNode(_component_ContentRenderer, { value: doc }, null, 8, ["value"])
                ], 2),
                doc.toc ? (openBlock(), createBlock("div", {
                  key: 0,
                  class: "hidden md:col-span-2 md:block not-prose"
                }, [
                  createVNode("aside", { class: "sticky top-8" }, [
                    createVNode("div", { class: "font-semibold mb-2" }, " Table of Contents "),
                    createVNode("nav", null, [
                      createVNode(_component_TocLinks, {
                        links: doc.body.toc.links,
                        "active-id": unref(activeId)
                      }, null, 8, ["links", "active-id"])
                    ])
                  ])
                ])) : createCommentVNode("", true)
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</article>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/posts/[...slug].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=_...slug_-EMBT4iTI.mjs.map
