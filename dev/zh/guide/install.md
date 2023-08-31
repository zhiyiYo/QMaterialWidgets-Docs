---
title: 安装
date: 2023-08-17 15:37:01
permalink: /zh/pages/install/
---
:::: code-group
::: code-group-item PyQt5
```shell
pip install PyQt-Material-Widgets -i https://pypi.org/simple/
```
:::
::: code-group-item PyQt6
```shell
pip install PyQt6-Material-Widgets -i https://pypi.org/simple/
```
:::
::: code-group-item PySide2
```shell
pip install PySide2-Material-Widgets -i https://pypi.org/simple/
```
:::
::: code-group-item PySide6
```shell
pip install PySide6-Material-Widgets -i https://pypi.org/simple/
```
:::
::::


::: warning 警告
请勿同时安装 PyQt-Material-Widgets、PyQt6-Material-Widgets、PySide2-Material-Widgets 和 PySide6-Material-Widgets，因为他们的包名都是 `qmaterialwidgets`
:::

## 运行示例
使用 pip 安装好 QMaterialWidgets 包并下载好项目仓库**对应分支**的代码之后，就可以运行 examples 目录下的任意示例程序，比如：
```shell
cd examples/gallery
python demo.py
```

如果遇到 `ImportError: cannot import name 'XXX' from 'qmaterialwidgets'`，这表明安装的包版本过低，可以按照上面的安装指令将 pypi 源替换为 https://pypi.org/simple 并重新安装最新版本的包。