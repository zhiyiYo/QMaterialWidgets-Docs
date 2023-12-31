---
title: 图标
date: 2023-08-17 17:35:27
permalink: /zh/pages/icon/
---

## 内置图标
QMaterialWidgets 中的组件一般支持以下三种图标参数类型：
* `str`: 图标路径
* `QIcon`：Qt 图标
* `MaterialIconbase`: 图标抽象类

QMaterialWidgets 提供的 `FluentIcon` 枚举类继承自 `MaterialIconbase`, 包含数百个矢量图标，可以在 [gallery](https://github.com/zhiyiYo/PyQt-Fluent-Widgets/releases/download/v1.1.9/PyQt-Fluent-Widgets-Gallery_v1.1.9_lite_window_x64.zip) 示例的图标界面查看和搜索图标。
![IconInterface](/img/designer/IconInterface.jpg)


## 自定义图标
### 更改颜色
图标基类提供了 `MaterialIconbase.icon()` 方法:
```python
def icon(self, theme=Theme.AUTO, color: QColor = None) -> QIcon:
```
可以根据传入的主题或者颜色返回一个 `QIcon` 图标，只有在图标类型为 svg 图标时，`color` 参数才会起作用。下面给出一个示例：

```python
# 使用浅色主题图标
button = FilledToolButton(FluentIcon.ADD.icon(Theme.LIGHT))

# 使用深色主题图标
button = FilledToolButton(FluentIcon.ADD.icon(Theme.DARK))

# 使用颜色名称
button = FilledToolButton(FluentIcon.ADD.icon(color='red'))

# 使用十六进制字符串
button = FilledToolButton(FluentIcon.ADD.icon(color='#ff0000'))

# 使用 Qt.GlobalColor
button = FilledToolButton(FluentIcon.ADD.icon(color=Qt.red))

# 使用 QColor
button = FilledToolButton(FluentIcon.ADD.icon(color=QColor(255, 0, 0)))
```


### 添加图标

如果想在切换主题时自动更换图标，可以继承 `MaterialIconbase` 类并重写 `path()` 函数来给出不同主题下图标的路径。下面是一个示例：

```python
from enum import Enum

from qmaterialwidgets import getIconColor, Theme, MaterialIconbase


class MyMaterialIcon(MaterialIconbase, Enum):
    """ Custom icons """

    ADD = "Add"
    CUT = "Cut"
    COPY = "Copy"

    def path(self, theme=Theme.AUTO):
        # getIconColor() 根据主题返回字符串 "white" 或者 "black"
        return f':/icons/{self.value}_{getIconColor(theme)}.svg'
```

之后就可以将 `MyMaterialIcon` 的枚举成员直接作为参数传给需要图标的组件，比如：
```python
from qmaterialwidgets import FilledToolButton, toggleTheme

# 创建工具按钮
button = FilledToolButton(MyMaterialIcon.ADD)

# 更换图标
button.setIcon(MyMaterialIcon.CUT)

# 切换主题时图标也会跟着改变
button.clicked.connect(toggleTheme)
```