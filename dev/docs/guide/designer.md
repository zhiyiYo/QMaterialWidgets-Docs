---
title: Designer
date: 2023-08-17 16:25:01
permalink: /pages/designer/
---

Right click on a widget, select the `Promote to ...` of context menu.

Promoting a widget indicates that it should be replaced with the specified subclass, in our case the `qmaterialwidgets.OutlinedPushButton`.

![context menu](/img/designer/promote_context.jpg)

You will be presented with a dialog to specify the custom widget class the placeholder widget will become.

The header file is the name of the Python module used to import the class, which is `qmaterialwidgets`. Specify `OutlinedPushButton` as the class name of the widget to replace it with.

![promote dialog](/img/designer/promote_dialog.jpg)

Well, the widget is now promoted to fluent push button. But you won’t be able to see any changes within Qt Designer. Save the window as `mainwindow.ui` and compile it to python code, you will see that the `OutlinedPushButton` is imported from `qmaterialwidgets` package.

<div style="position: relative; padding: 30% 45%;">
    <iframe style="position: absolute; width: 100%; height: 100%; left: 0; top: 0;" src="https://player.bilibili.com/player.html?cid=1107159421&aid=655415814&page=1&as_wide=1&high_quality=1&danmaku=0&autoplay=0" frameborder="no" scrolling="no" allowfullscreen="true"></iframe>
</div>



