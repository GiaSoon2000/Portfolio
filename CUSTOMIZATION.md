# Portfolio 自定义指南

## 🎯 快速开始

### 1. 启动项目
```bash
# Windows用户可以直接双击 start.bat
# 或者运行:
npm run dev
```

### 2. 访问网站
打开浏览器访问: http://localhost:3000

## 📝 自定义你的Portfolio

### 个人信息修改

#### 1. 更新名字和标题
编辑 `app/layout.tsx`:
```typescript
export const metadata: Metadata = {
  title: '你的名字 - Software Engineer Portfolio',
  description: '你的个人描述...',
  // ...
}
```

#### 2. 更新个人介绍
编辑 `app/components/About.tsx`:
```typescript
// 修改这些内容:
<h1>Hi, I'm <span>你的名字</span></h1>
<h2>你的职位</h2>
<p>你的个人介绍...</p>
```

#### 3. 更新联系方式
编辑 `app/components/Contact.tsx`:
```typescript
// 修改邮箱、电话、地址等
<a href="mailto:你的邮箱">你的邮箱</a>
<a href="tel:你的电话">你的电话</a>
<p>你的地址</p>
```

### 项目展示

#### 添加你的项目
编辑 `app/components/Projects.tsx`:
```typescript
const projects = [
  {
    title: '你的项目名称',
    description: '项目描述...',
    technologies: ['React', 'Node.js', 'MongoDB'],
    github: '你的GitHub链接',
    live: '你的在线演示链接',
    featured: true
  },
  // 添加更多项目...
]
```

### 技能展示

#### 更新你的技能
编辑 `app/components/Skills.tsx`:
```typescript
const skillCategories = [
  {
    title: '编程语言',
    skills: ['JavaScript', 'Python', 'Java'] // 你的技能
  },
  // 添加更多技能分类...
]
```

### 工作经验

#### 更新工作经验
编辑 `app/components/Experience.tsx`:
```typescript
const experiences = [
  {
    title: '你的职位',
    company: '公司名称',
    period: '工作时间',
    description: [
      '工作描述1',
      '工作描述2',
      // ...
    ],
    technologies: ['使用的技术']
  },
  // 添加更多经验...
]
```

## 🎨 样式自定义

### 修改颜色主题
编辑 `tailwind.config.js`:
```javascript
theme: {
  extend: {
    colors: {
      primary: {
        50: '#eff6ff',
        500: '#3b82f6', // 主色调
        600: '#2563eb',
        700: '#1d4ed8',
      },
    },
  },
}
```

### 添加你的照片
1. 将你的照片放在 `public` 文件夹
2. 在 `app/components/About.tsx` 中更新图片路径

## 🚀 部署步骤

### 1. 准备部署
```bash
npm run build
```

### 2. 选择部署平台

#### Vercel (推荐)
1. 访问 [vercel.com](https://vercel.com)
2. 用GitHub账号登录
3. 导入你的GitHub仓库
4. 自动部署完成

#### Netlify
1. 访问 [netlify.com](https://netlify.com)
2. 拖拽 `out` 文件夹到部署区域

### 3. 绑定自定义域名
1. 购买域名 (推荐: Namecheap, GoDaddy)
2. 在部署平台添加域名
3. 更新DNS设置

## 📱 移动端优化

网站已经针对移动端进行了优化，包括:
- 响应式设计
- 触摸友好的按钮
- 移动端导航菜单
- 优化的图片加载

## 🔧 常见问题

### Q: 如何添加新的页面?
A: 在 `app` 文件夹中创建新的 `.tsx` 文件

### Q: 如何修改字体?
A: 在 `tailwind.config.js` 中修改 `fontFamily`

### Q: 如何添加动画效果?
A: 使用 Framer Motion 库，参考现有组件的动画实现

### Q: 如何优化SEO?
A: 在 `app/layout.tsx` 中更新 meta 标签

## 💡 进阶功能

### 添加博客功能
1. 创建 `app/blog` 文件夹
2. 添加博客页面组件
3. 集成 Markdown 支持

### 添加暗色模式
1. 添加主题切换按钮
2. 更新 Tailwind 配置
3. 添加暗色样式

### 添加多语言支持
1. 使用 next-intl 库
2. 创建语言文件
3. 添加语言切换功能

## 📞 技术支持

如果遇到问题:
1. 检查控制台错误信息
2. 确保所有依赖已安装
3. 重启开发服务器
4. 查看 Next.js 官方文档
