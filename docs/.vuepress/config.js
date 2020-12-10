module.exports = {
  title: '不才的博客',
  description: '我对自己的要求很低：我活在世上，无非想要明白些道理，遇见些有趣的事。倘能如我所愿，我的一生就算成功。',
  dest:'./dist',
  themeConfig: {
    nav: [{ text: "主页", link: "/" },
    { text: "目录一", link: "/first/" },
    {
      text: "多级目录",
      items: [
        { text: "目录二", link: "/menus/second/" },
        { text: "目录三", link: "/menus/third/" },
      ]
    },

    ],
    // 假定 GitHub。也可以是一个完整的 GitLab 网址
    repo: 'https://github.com/forbread/blog.git',
    // 如果你的文档不在仓库的根部
    docsDir: '',
    // 可选，默认为 master
    docsBranch: 'master',
    // 默认为 true，设置为 false 来禁用
    editLinks: true,
    sidebar: {
      '/first/': [
        {
          title: 'First',
          collapsable: false,
          children: [
            '',
            ['one', '我是第一个'],
            ['two', '我是第二个']
          ]
        },
      ],
      '/menus/second/': [
        {
          title: '目录二',
          children: [
            ['', '我是首页'],
            ['three', '我是第三个']
          ]
        },
      ],
      '/menus/third/': [
        {
          title: '目录三',
          children: [
            ['', '我是首页'],
            ['four', '我是第四个']
          ]
        },
      ],

    },
    sidebarDepth: 2


  },

  plugins: [

  ]

}