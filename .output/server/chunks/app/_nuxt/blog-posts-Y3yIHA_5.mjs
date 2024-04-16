import { _ as __nuxt_component_0$1 } from './nuxt-link-1NTK_bBn.mjs';
import { u as useAsyncData, q as queryContent } from './query-HWEU_oLI.mjs';
import { withAsyncContext, computed, unref, withCtx, createVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderSlot, ssrRenderList, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import { _ as _export_sfc } from '../server.mjs';
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
import './preview-CpIoKLn9.mjs';
import 'unhead';
import '@unhead/shared';
import 'vue-router';

const _sfc_main = {
  __name: "blog-posts",
  __ssrInlineRender: true,
  props: {
    limit: {
      type: Number,
      default: null
    }
  },
  async setup(__props) {
    let __temp, __restore;
    const props = __props;
    const { data } = ([__temp, __restore] = withAsyncContext(() => useAsyncData(
      "blog-list",
      () => {
        const query = queryContent("/posts").where({ _path: { $ne: "/posts" } }).only(["_path", "title", "publishedAt", "tags"]).sort({ publishedAt: -1 });
        if (props.limit) {
          query.limit(props.limit);
        }
        return query.find();
      }
    )), __temp = await __temp, __restore(), __temp);
    const posts = computed(() => {
      if (!data.value) {
        return [];
      }
      const result = [];
      for (const post of data.value) {
        post.postDate = new Date(post.publishedAt).toJSON().slice(0, 10);
        result.push(post);
      }
      return result;
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$1;
      ssrRenderSlot(_ctx.$slots, "default", { posts: unref(posts) }, () => {
        _push(`<section class="not-prose font-mono" data-v-ed54f280><ul data-v-ed54f280><!--[-->`);
        ssrRenderList(unref(posts), (post) => {
          _push(`<li data-v-ed54f280>`);
          _push(ssrRenderComponent(_component_NuxtLink, {
            to: post._path,
            class: "column group hover:bg-gray-100 dark:hover:bg-gray-800"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<div class="text-gray-400 dark:text-gray-500" data-v-ed54f280${_scopeId}>${ssrInterpolate(post.postDate)}</div><div data-v-ed54f280${_scopeId}>${ssrInterpolate(post.title)}</div>`);
              } else {
                return [
                  createVNode("div", { class: "text-gray-400 dark:text-gray-500" }, toDisplayString(post.postDate), 1),
                  createVNode("div", null, toDisplayString(post.title), 1)
                ];
              }
            }),
            _: 2
          }, _parent));
          _push(`</li>`);
        });
        _push(`<!--]--></ul></section>`);
      }, _push, _parent);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/content/blog-posts.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-ed54f280"]]);

export { __nuxt_component_0 as default };
//# sourceMappingURL=blog-posts-Y3yIHA_5.mjs.map
