import * as zhConfig from './zh'
import * as enConfig from './en'


export const themeConfig = {
    locales: {
        '/': {
            selectLanguageText: 'Languages',
            selectLanguageName: 'English',
            ...enConfig,
        },
        '/zh/': {
            selectLanguageText: '选择语言',
            selectLanguageName: '简体中文',
            ...zhConfig,
        },
    },
    style: "@vuepress-reco/style-default",
    logo: "/img/logo.png",
    author: "zhiyiYo",
    docsRepo: "https://github.com/zhiyiYo/QMaterialWidgets-Docs",
    docsBranch: "main",
    docsDir: "/docs/docs",
}
