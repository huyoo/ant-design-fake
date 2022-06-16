module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true
  },
  "parser": "@typescript-eslint/parser",
  "globals": {
    "document": true,
    "navigator": true,
    "window": true,
    "node": true
  },
  plugins: ["@typescript-eslint", "react"],
  rules: {
    'array-callback-return': ['warn'],
    'consistent-return': ['off'],
    camelcase: ['error', {properties: 'always'}],
    curly: ['error', 'all'],
    'default-case': ['error'],
    'eol-last': ['error'],
    'global-require': ['off'],
    'guard-for-in': ['error'], // 此规则旨在防止使用for in循环而不过滤循环中的结果时可能出现的意外行为。
    'for-direction': ['error'],
    'func-call-spacing': ['error'],
    indent: [
      'warn',
      2,
      {
        SwitchCase: 1,
        flatTernaryExpressions: false,
      },
    ],
    "semi": ['error', "always"],
    // 'line-comment-position': ['warn', {position: 'above'}], // 此规则强制行注释的一致性。
    'lines-around-comment': ['error'], // 此规则在评论之前和/或之后需要空行。
    'jsx-quotes': ['error'], // 对于 JSX 属性值总是使用双引号("), 其他均使用单引号(')
    'keyword-spacing': ['error'], // 此规则强制执行围绕关键字和关键字标记的一致空格
    'max-params': ['warn', 6], // 此规则强制实现函数定义中允许的最大数量的参数。
    'no-param-reassign': ['warn'],
    'no-unused-vars': 'off',
    'no-unused-expressions': 'off',
    'no-shadow': ['warn'],
    'no-restricted-syntax': ['off', 'FunctionExpression', 'WithStatement', "BinaryExpression[operator='in']"],
    'no-use-before-define': 'off',
    'no-template-curly-in-string': ['off'],
    'no-plusplus': ['off'],
    'no-nested-ternary': ['off'],
    'no-multi-assign': ['off'],
    'no-multi-spaces': ['error'],
    'no-cond-assign': ['warn'], // 这条规则不允许在试验条件不明确赋值运算符
    'no-confusing-arrow': ['error'],
    'no-underscore-dangle': ['error'], // 此规则不允许在标识符中使用悬空下划线。
    'no-inner-declarations': ['error'], // 这条规则要求函数声明和可选的变量声明位于程序的根节点或函数的主体中。
    'no-extra-semi': ['error'], // 此规则禁止使用不必要的分号。
    'no-dupe-args': ['error'], // 此规则不允许在函数声明或表达式中使用重复的参数名称。
    'no-constant-condition': ['error'], // 此规则在下列测试条件中不允许使用常量表达式：
    'new-cap': ['error'], // 此规则要求构造函数名以大写字母开头。
    'no-duplicate-imports': ['error'], // 此规则要求从单个模块进行的所有导入都以单一import语句存在。
    'object-shorthand': ['warn'], // 此规则强制使用简写语法。
    'prefer-destructuring': ['warn'], // 此规则强制使用解构。
    'prefer-rest-params': ['warn'], // 该规则旨在标记arguments变量的使用。
    'quote-props': ['error', 'consistent'], // 此规则需要引用对象字面值属性名称。
    radix: ['warn'], // 此规则旨在防止意外地将字符串转换为与预期不同的基数，或者如果仅锁定现代环境，则会阻止冗余10基数。
    'require-jsdoc': ['warn'], // 此规则需要指定节点的 JSDoc 注释。
    'react/no-unescaped-entities': ['warn'],
    'react/no-multi-comp': ['warn'], // 原则上每个文件只写一个组件, 多个无状态组件可以放在单个文件中
    'react/jsx-pascal-case': ['error'], // React组件名使用帕斯卡命名, 实例使用骆驼式命名
    'react/jsx-closing-bracket-location': ['error'], //  JSX 语法缩进/格式
    'react/no-string-refs': ['error'], // 总是使用回调函数方式定义 ref.
    'react/jsx-tag-spacing': ['error'], // 总是在自动关闭的标签前加一个空格, 正常情况下不需要换行.
    'react/jsx-boolean-value': ['error'], // 如果属性值为 true, 可以直接省略.
    'react/jsx-wrap-multilines': ['error'], // 将多行 JSX 标签写在 ()里.
    'react/self-closing-comp': ['error'], // 对于没有子元素的标签, 总是自关闭标签.
    'react/require-render-return': ['error'], // 在 render 方法中总是确保 return 返回值.
    'react/sort-comp': ['error'], // 组件生命周期书写顺序
    '@typescript-eslint/no-unused-vars': ['warn'],
    '@typescript-eslint/no-use-before-define': ['off'],
    'valid-jsdoc': ['error'],
    'valid-typeof': ['error'], // 此规则强制将typeof表达式与有效的字符串文字进行比较。
  }
}
