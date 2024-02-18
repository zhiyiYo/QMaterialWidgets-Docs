---
title: 设计师
date: 2023-08-17 16:25:01
permalink: /zh/pages/designer/
---

右击一个小部件，选择右击菜单上的 `提升为…`。

`提升为` 的作用是把原生部件替换成自定义小部件，在这个例子中是 `qmaterialwidgets.OutlinedPushButton`。

![context menu](/img/designer/promote_context.jpg)

弹出的对话框上需要填写自定义的组件名。头文件是组件库的包名 `qmaterialwidgets`，提升的类名称为 `OutlinedPushButton`。

![promote dialog](/img/designer/promote_dialog.jpg)

完成提升后不会在设计师中看到任何变化，保存 ui 文件后编译为 py 代码，可以发现 `import` 的是 `OutlinedPushButton`。

<div style="position: relative; padding: 30% 45%;">
    <iframe style="position: absolute; width: 100%; height: 100%; left: 0; top: 0;" src="https://player.bilibili.com/player.html?cid=1107159421&aid=655415814&page=1&as_wide=1&high_quality=1&danmaku=0&autoplay=0" frameborder="no" scrolling="no" allowfullscreen="true"></iframe>
</div>

