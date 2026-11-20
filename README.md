# jazz-album-review

爵士专辑评论专题站：英文乐评原文照录 + 中文对照，配专辑档案、曲目表、译者注解与资料来源。

## 站点结构

```
index.html                              专题首页：特别专题 + 艺人索引 + 体例说明
├── coltrane.html                       艺人页 · John Coltrane
│   ├── coltrane-centennial-bilingual.html   特别专题：百年纪念注解集（排在年表之前）
│   ├── coltrane-love-supreme-full.html      1965
│   ├── coltrane-sound-full.html             1964
│   ├── coltrane-crescent-full.html          1964
│   ├── coltrane-ballads-full.html           1963
│   ├── coltrane-hartman-full.html           1963
│   ├── coltrane-jazz-full.html              1961
│   ├── coltrane-giant-steps-full.html       1960
│   └── coltrane-blue-train-full.html        1958
├── miles-davis.html                    艺人页 · Miles Davis
│   └── miles-milestones-full.html          1958
└── monk.html                           艺人页 · Thelonious Monk
    └── monk-coltrane-full.html             1961
assets/site.css                         站点共用样式（与专辑页同一套设计令牌）
assets/site.js                          主题切换脚本
```

直接双击 `index.html` 即可浏览，无需服务器。

## 发布

线上地址：**https://anserzhang.github.io/jazz-album-review/**

GitHub Pages 设置为「Deploy from a branch」= `main` / `/ (root)`，**每次 push 自动重新构建**，无需手动操作。改完内容后：

```bash
git add -A && git commit -m "..." && git push origin main
```

约 30–60 秒后线上自动更新。公网路径与仓库内结构一一对应，例如
`https://anserzhang.github.io/jazz-album-review/coltrane.html`。

## 约定

- **排序**：专辑页按**发行**年份从新到旧，同年按发行日先后。录音日期另列，方便对照。
- **特别专题**：周年、纪念、跨代合作等不进年表，单开一块，排在专辑年表之前。
- **归类**：按**领奏者**算。领奏是蒙克、柯特兰客席，则归蒙克页，不进柯特兰年表。
- **专辑页骨架**固定六段：目录 → 专辑档案 → 曲目 → 对照正文 → 译注 → 资料来源。
- **主题**：全站统一用 `mavis-theme` 键（百年纪念页兼容旧的 `coltrane-theme`），偏好存浏览器本地。

## 新增一篇专辑评论

1. 照 `coltrane-*-full.html` 做一份 `xxx-full.html`，保持六段骨架。
2. 在对应艺人页的 `<ol class="albums">` 里按年份插到正确位置。
3. 在 `index.html` 该艺人的 `<ul class="a-list">` 里加一行。
4. 换新艺人：复制 `miles-davis.html` 改名，再去 `index.html` 加一张艺人卡片。
