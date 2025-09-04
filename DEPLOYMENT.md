# Portfolio Website Deployment Guide

## 免费部署方案

### 方案1: Vercel (推荐)
**优点**: 完全免费、自动部署、性能优秀、支持自定义域名

#### 步骤:
1. **准备代码**
   ```bash
   npm install
   npm run build
   ```

2. **创建GitHub仓库**
   - 在GitHub创建新仓库
   - 上传你的代码

3. **部署到Vercel**
   - 访问 [vercel.com](https://vercel.com)
   - 用GitHub账号登录
   - 点击"New Project"
   - 选择你的GitHub仓库
   - 自动部署完成

4. **自定义域名**
   - 在Vercel项目设置中添加自定义域名
   - 更新DNS设置

### 方案2: Netlify
**优点**: 免费、功能丰富、支持表单处理

#### 步骤:
1. **准备代码**
   ```bash
   npm install
   npm run build
   ```

2. **部署到Netlify**
   - 访问 [netlify.com](https://netlify.com)
   - 注册账号
   - 拖拽`out`文件夹到部署区域
   - 或连接GitHub仓库

### 方案3: GitHub Pages
**优点**: 完全免费、与GitHub集成

#### 步骤:
1. **修改package.json**
   ```json
   {
     "scripts": {
       "export": "next export"
     }
   }
   ```

2. **构建和导出**
   ```bash
   npm run build
   npm run export
   ```

3. **部署到GitHub Pages**
   - 在GitHub仓库设置中启用Pages
   - 选择`out`文件夹作为源

## 域名购买建议

### 推荐域名注册商:
1. **Namecheap** - 价格便宜、服务好
2. **GoDaddy** - 知名度高、功能全面
3. **Google Domains** - 简洁、可靠

### 域名选择建议:
- 使用你的名字: `yourname.com`
- 或描述性: `yourname.dev`, `yourname.tech`
- 价格: 约$10-15/年

## 完整部署流程

### 1. 本地开发
```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 访问 http://localhost:3000
```

### 2. 自定义内容
- 更新个人信息
- 添加你的项目
- 修改联系方式
- 上传个人照片

### 3. 部署上线
- 选择Vercel部署
- 连接GitHub仓库
- 自动部署完成

### 4. 绑定域名
- 购买域名
- 在Vercel中添加域名
- 更新DNS设置

## 维护和更新

### 定期更新:
- 添加新项目
- 更新技能列表
- 刷新工作经验
- 优化性能

### SEO优化:
- 添加meta标签
- 优化图片
- 提高加载速度
- 添加sitemap

## 常见问题

### Q: 如何添加新项目?
A: 编辑 `app/components/Projects.tsx` 文件

### Q: 如何修改颜色主题?
A: 编辑 `tailwind.config.js` 中的颜色配置

### Q: 如何添加更多页面?
A: 在 `app` 文件夹中创建新的页面文件

### Q: 部署后网站无法访问?
A: 检查DNS设置和Vercel配置
