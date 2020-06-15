module.exports = {
  title: '不才的博客',
  description: '我对自己的要求很低：我活在世上，无非想要明白些道理，遇见些有趣的事。倘能如我所愿，我的一生就算成功。',
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
    /*  sidebar: {
        '/first/': [
          ['','我是首页'],
          ['one','我是第一个'],
          ['two','我是第二个']
        ],
      
        '/menus/second/': [
          ['','我是首页'],
          ['three','我是第三个'],
        ],
        
        '/menus/third/': [
          ['','我是首页'],
          ['one','我是第四个'],
        ]
      }*/
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