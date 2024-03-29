export const navbar = [
  {
    text: '指南',
    icon: 'Compass',
    children: [
      {
        text: '快速入门',
        children: [
          {
            text: '简介',
            link: '/zh/pages/about'
          },
          {
            text: '设计师',
            link: '/zh/pages/designer'
          },
        ]
      },
      {
        text: '高级定制',
        children: [
          {
            text: '主题',
            link: '/zh/pages/theme'
          },
          {
            text: '图标',
            link: '/zh/pages/icon'
          },
          {
            text: '导航',
            link: '/zh/pages/navigation'
          },
          {
            text: '设置',
            link: '/zh/pages/setting'
          },
          {
            text: '翻译',
            link: '/zh/pages/i18n'
          },
        ]
      },
      {
        text: 'API 文档',
        link: 'https://pyqt-fluent-widgets.readthedocs.io/zh_CN/latest/autoapi/index.html'
      },
    ],
  },
  {
    text: '演示',
    icon: 'Download',
    children: [
      {
        text: '视频',
        link: 'https://www.bilibili.com/video/BV1k14y1z74o'
      },
      {
        text: '体验包',
        link: 'https://github.com/zhiyiYo/PyQt-Fluent-Widgets/releases/download/v1.4.1/QMaterialWidgets-Gallery.zip'
      },
    ]
  },
  { text: '案例', link: '/zh/showcase/', icon: 'Code' },
  { text: '价格', link: '/zh/price', icon: 'ShoppingCart' },
  { text: '视频教程', link: 'https://www.bilibili.com/video/BV12c411L73q', icon: 'Playlist' },
];