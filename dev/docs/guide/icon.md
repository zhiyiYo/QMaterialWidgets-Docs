---
title: Icon
date: 2023-08-17 17:35:27
permalink: /pages/icon/
---

## Built-in icons
Components in QMaterialWidgets generally support the following three types of icon parameters:
* `str`: Icon path
* `QIcon`: Qt icon
* `MaterialIconBase`: Fluent icon abstract class

The enumeration subclass `FluentIcon` contains hundreds of vector icons that are ready to be used, you can check them in the icon interface of [gallery app](https://github.com/zhiyiYo/PyQt-Fluent-Widgets/releases/download/v1.1.9/PyQt-Fluent-Widgets-Gallery_v1.1.9_lite_window_x64.zip).

![IconInterface](/img/designer/IconInterface.jpg)

## Customize icon

### Change color
`MaterialIconBase` provide the `icon()` method:
```python
def icon(self, theme=Theme.AUTO, color: QColor = None) -> QIcon:
```
It will return `QIcon` instance according to the `theme` and `color`, the `color` parameter is available when the icon is svg format.

```python
# use light theme icon
button = PrimaryToolButton(FluentIcon.ADD.icon(Theme.LIGHT))

# use dark theme icon
button = PrimaryToolButton(FluentIcon.ADD.icon(Theme.DARK))

# use color name
button = PrimaryToolButton(FluentIcon.ADD.icon(color='red'))

# use hex color string
button = PrimaryToolButton(FluentIcon.ADD.icon(color='#ff0000'))

# use Qt.GlobalColor
button = PrimaryToolButton(FluentIcon.ADD.icon(color=Qt.red))

# use QColor
button = PrimaryToolButton(FluentIcon.ADD.icon(color=QColor(255, 0, 0)))
```

### Add icon
If you want to automatically change icons when switching themes, you can inherit the `MaterialIconBase` class and override the `path()` function to provide the path of the icons for different themes. Here is an example:

```python
from enum import Enum

from qmaterialwidgets import getIconColor, Theme, MaterialIconBase


class MyMaterialIcon(MaterialIconBase, Enum):
    """ Custom icons """

    ADD = "Add"
    CUT = "Cut"
    COPY = "Copy"

    def path(self, theme=Theme.AUTO):
        # getIconColor() return "white" or "black" according to current theme
        return f':/icons/{self.value}_{getIconColor(theme)}.svg'
```

Then you can pass the member of `MyMaterialIcon` to the component which needs icon：
```python
from qmaterialwidgets import PrimaryToolButton

# create tool button
button = PrimaryToolButton(MyMaterialIcon.ADD)

# change icon
button.setIcon(MyMaterialIcon.CUT)
```