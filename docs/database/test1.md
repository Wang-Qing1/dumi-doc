---
id: 2
title: 测试-1
toc: content
---

# 测试1

## h2

### h3

#### h4

```typescript
// ./xxx/solts/Toc/index.tsx

const memoToc = React.useMemo(() => {
  let toc = meta.toc;
  if (tabMeta) {
    toc = tabMeta.toc;
  }
  // only render h2 ~ h4 ！！！ markdown渲染 第二级和第三级目录
  return toc.filter(({ depth }) => depth > 1 && depth < 4);
}, [meta, tabMeta]);
```
