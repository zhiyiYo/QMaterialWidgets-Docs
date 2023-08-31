---
title: Install
date: 2023-08-17 15:37:01
permalink: /pages/install/
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


::: warning
Do not install PyQt-Material-Widgets, PyQt6-Material-Widgets, PySide2-Material-Widgets, and PySide6-Material-Widgets in the same environment, because they all have the package name `qmaterialwidgets`.
:::

## Run examples
After installing the QMaterialWidgets package and downloading the code from the corresponding branch of repo, you can run any example program in the examples directory. For example:
```shell
cd examples/gallery
python demo.py
```

If you encounter `ImportError: cannot import name 'XXX' from 'qmaterialwidgets'`, it indicates that the installed package version is too low. You can replace the pypi source with https://pypi.org/simple and reinstall the latest version of the package.