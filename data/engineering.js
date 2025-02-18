const sidebar = [
  {
    title: '打包篇',
    children: [
      {
        title: '第一章: Bundle 基础设施建设',
        children: [
          {
            title: '模块化方案',
            number: 475,
            b: 'BV1hU4y1T7yn'
          },
          {
            title: 'AST 及其应用',
            number: 756,
            b: 'BV1gb4y1B7Jk'
          },
          {
            title: '原理与运行时分析',
            number: 729,
            code: 'https://github.com/shfshanyue/node-examples/blob/master/engineering/webpack/cjs/example/main.js',
            b: 'BV1o44y1Y7Zs'
          },
          {
            title: '运行时 Chunk 加载分析',
            number: 733,
            code: 'https://github.com/shfshanyue/node-examples/blob/master/engineering/webpack/code-spliting/build.js',
            b: 'BV1k44y1h7DW'
          },
          {
            title: '加载非JS资源: JSON与图片',
            number: 736,
            code: 'https://github.com/shfshanyue/mini-code/tree/master/code/json-loader',
            b: 'BV1FS4y1971G'
          },
          {
            title: '加载非JS资源: Style',
            number: 737,
            code: 'https://github.com/shfshanyue/node-examples/tree/master/engineering/webpack/style',
            b: 'bv1Wr4y1X7mY'
          },
          {
            title: '将脚本注入 HTML 的处理',
            number: 735,
            code: 'https://github.com/shfshanyue/mini-code/tree/master/code/html-webpack-plugin',
            b: 'BV1rY411p7vc'
          },
          {
            title: 'Hot Module Reload',
            number: 79,
            code: 'https://github.com/shfshanyue/node-examples/tree/master/engineering/webpack/hmr',
            b: 'BV1R341147T3'
          },
          {
            title: '构建性能优化',
            number: 738,
          }
        ]
      },
      {
        title: '第二章: 打包体积优化',
        children: [
          {
            title: '打包体积分析',
            number: 755
          },
          {
            title: 'Javascript 压缩',
            number: 138,
          },
          {
            title: 'Tree Shaking',
            number: 87
          },
          {
            title: 'Polyfill: corejs',
            number: 734
          },
          {
            title: 'browserslist 垫片体积控制',
            number: 757
          }
        ]
      },
      {
        title: '第三章: Bundless 基础设施建设',
        children: [
          {
            title: '原理与浏览器中的 ESM',
            number: 752,
          },
          {
            title: 'CommonJS To ESM',
            number: 753
          },
          {
            title: 'Bundless 与生产环境',
            number: 758
          }
        ]
      }
    ]
  },
  {
    title: '开发篇',
    children: [
      {
        title: '第四章: npm package 开发',
        children: [
          {
            title: 'semver 与版本管理',
            number: 534,
          },
          {
            title: 'main/module/export 入口',
            number: 535,
          },
          {
            title: 'dep/devDep 的区别',
            number: 521
          },
          {
            title: 'engines 宿主环境控制',
            number: 533
          },
          {
            title: 'script hooks 及其风险',
            number: 740
          },
          {
            title: 'npm publish 发布第一个包',
            number: 754
          },
          {
            title: 'lockfile 及其影响',
            number: 196,
          },
          {
            title: 'package 中的 lockfile',
            number: 747
          }
        ]
      },
      {
        title: '第五章: 包管理工具',
        children: [
          {
            title: 'npm cache',
            number: 759
          },
          {
            title: 'node_modules 拓扑结构',
            number: 746
          },
          {
            title: 'pnpm 的优势',
            number: 751,
            b: 'BV1Sb4y1t7Qr'
          }
        ]
      },
    ]
  },
  {
    title: '运维篇',
    children: [
      {
        title: '第五章: 前端质量保障',
        children: [
          {
            title: 'CICD',
            number: 748
          },
          {
            title: 'Git Hooks',
            number: 741
          },
          {
            title: 'Audit',
            number: 742
          },
          {
            title: 'Upgrade',
            number: 745
          },
          {
            title: 'ESLint',
            number: 744
          },
          {
            title: 'Package Patch',
            number: 760
          }
        ]
      },
      {
        title: '第六章: 前端服务部署',
        children: [
          {
            title: 'Long Term Cache',
            number: 81
          },
          {
            title: 'Chunk Spliting 与缓存优化',
            number: 761
          },
          {
            title: 'Docker 部署',
            number: 749
          },
          {
            title: 'Docker Preview 部署',
            number: 762
          }
        ]
      },
    ]
  }
]

function getItems () {
  return sidebar.map(x => x.children.map(x => x.children)).flat(10)
}

function generateSidebar () {
  const items = getItems()
  let i = 1
  for (const item of items) {
    item.path = item.number.toString()
    item.title = `${i++}. ${item.title}`
  }
  return {
    '/engineering/': sidebar
  }
}

module.exports = {
  getItems,
  generateSidebar
}