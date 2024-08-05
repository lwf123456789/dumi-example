// @ts-nocheck
// This file is generated by Umi automatically
// DO NOT CHANGE IT MANUALLY!
import React from 'react';

export async function getRoutes() {
  const routes = {"404":{"id":"404","path":"*","parentId":"DocLayout"},"dumi-context-layout":{"id":"dumi-context-layout","path":"/","isLayout":true},"DocLayout":{"id":"DocLayout","path":"/","parentId":"dumi-context-layout","isLayout":true},"docs/guide/button":{"path":"guide/button","id":"docs/guide/button","parentId":"DocLayout"},"docs/guide/index":{"path":"guide","id":"docs/guide/index","parentId":"DocLayout"},"docs/index":{"path":"","id":"docs/index","parentId":"DocLayout"},"demo-render":{"id":"demo-render","path":"~demos/:id","parentId":"dumi-context-layout"}} as const;
  return {
    routes,
    routeComponents: {
'404': React.lazy(() => import(/* webpackChunkName: "nm__dumi__dist__client__pages__404" */'F:/Nim UI/my-next-dumi-docs/node_modules/dumi/dist/client/pages/404.js')),
'dumi-context-layout': React.lazy(() => import(/* webpackChunkName: "dumi__tmp__dumi__theme__ContextWrapper" */'F:/Nim UI/my-next-dumi-docs/.dumi/tmp/dumi/theme/ContextWrapper')),
'DocLayout': React.lazy(() => import(/* webpackChunkName: "nm__dumi__theme-default__layouts__DocLayout__index" */'F:/Nim UI/my-next-dumi-docs/node_modules/dumi/theme-default/layouts/DocLayout/index.js')),
'docs/guide/button': React.lazy(() => import(/* webpackChunkName: "docs__guide__button.md" */'F:/Nim UI/my-next-dumi-docs/docs/guide/button.md')),
'docs/guide/index': React.lazy(() => import(/* webpackChunkName: "docs__guide__index.md" */'F:/Nim UI/my-next-dumi-docs/docs/guide/index.md')),
'docs/index': React.lazy(() => import(/* webpackChunkName: "docs__index.md" */'F:/Nim UI/my-next-dumi-docs/docs/index.md')),
'demo-render': React.lazy(() => import(/* webpackChunkName: "nm__dumi__dist__client__pages__Demo__index" */'F:/Nim UI/my-next-dumi-docs/node_modules/dumi/dist/client/pages/Demo/index.js')),
},
  };
}
