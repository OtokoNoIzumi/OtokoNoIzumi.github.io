# Izumi.屈源 - 个人主页

一个现代化的响应式个人主页，展示项目作品、个人简介和近期文章。

## 🌟 主要特性

- **响应式设计** - 完美适配桌面和移动设备
- **深色模式** - 支持亮色/暗色主题切换
- **动态文章系统** - 通过JSON配置文件管理文章内容
- **来源追踪** - 支持URL参数追踪访问来源
- **现代化UI** - 使用Tailwind CSS构建的美观界面

## 🚀 在线访问

- **主站**: https://otokonoizumi.github.io/
- **带来源追踪**: https://otokonoizumi.github.io/?source=github

## 📁 项目结构

```
├── index.html              # 主页面文件
├── blog-posts.json         # 文章配置文件
├── start_server.bat        # 本地服务器启动脚本
├── README.md              # 项目说明文档
└── 静态资源/
    ├── head.png           # 头像
    ├── adskip.png         # 项目图标
    ├── appreciate.jpg     # 赞赏码
    └── qrcode_ai_izumi.jpg # 二维码
```

## 🛠️ 本地开发

### 方法一：直接打开（推荐用于快速预览）

1. 双击 `index.html` 文件
2. 在浏览器中直接查看效果
3. 此模式使用嵌入的测试数据

### 方法二：本地HTTP服务器（推荐用于完整测试）

#### 使用提供的批处理脚本（Windows）
```bash
# 在项目根目录下双击运行
start_server.bat
```

#### 手动启动Python服务器
```bash
# 进入项目目录
cd /path/to/OtokoNoIzumi.github.io

# 启动服务器
python -m http.server 8000

# 浏览器访问
http://localhost:8000
```

#### 使用VS Code Live Server
1. 安装 "Live Server" 插件
2. 右键点击 `index.html`
3. 选择 "Open with Live Server"

## 📝 文章管理

### 添加新文章

编辑 `blog-posts.json` 文件：

```json
{
  "posts": [
    {
      "title": "文章标题",
      "date": "2025-01-20",
      "summary": "文章摘要描述",
      "url": "相对路径或绝对URL",
      "tags": ["标签1", "标签2"],
      "featured": true  // 可选，设为true显示为精选文章
    }
  ]
}
```

### URL类型支持

- **相对路径**: `"url": "blog/my-post"`
- **绝对路径**: `"url": "https://example.com/post"`

### 精选文章

添加 `"featured": true` 可将文章标记为精选，会有特殊的视觉效果：
- 左侧蓝色边框
- 微妙的渐变背景
- 标题旁的金色星标

## 🔗 来源追踪

支持通过URL参数追踪访问来源：

```
https://otokonoizumi.github.io/?source=weibo
https://otokonoizumi.github.io/?source=github
```

**支持的来源列表**:
- weibo, zhihu, github, bilibili, wechat, qq
- douyin, xiaohongshu, juejin, csdn, v2ex
- twitter, facebook, linkedin, homepage

来源信息会自动添加到Chrome插件下载链接的 `utm_source` 参数中。

## 🎨 自定义配置

### 修改个人信息

编辑 `index.html` 中的相关内容：
- 个人介绍文本
- 社交媒体链接
- 项目展示内容

### 主题色彩

项目使用 Tailwind CSS 的 primary 色彩系统，主色调为蓝色系。如需修改，可在 `tailwind.config` 中调整 `primary` 颜色值。

## 📱 移动端适配

- 自动检测移动设备
- 为移动用户提供Chrome插件安装指引
- 响应式卡片布局
- 触摸友好的交互设计

## 🚀 部署到GitHub Pages

1. Fork 或 Clone 本仓库
2. 修改个人信息和配置
3. 推送到 GitHub
4. 在仓库设置中启用 GitHub Pages
5. 选择主分支作为发布源

## 🔧 技术栈

- **HTML5** - 语义化标记
- **CSS3** - 现代样式特性
- **JavaScript (ES6+)** - 动态功能实现
- **Tailwind CSS** - 实用优先的CSS框架
- **Font Awesome** - 图标字体库

## 🤝 贡献

欢迎提交 Issue 和 Pull Request！

## 📄 许可证

MIT License - 详见 LICENSE 文件

## 👨‍💻 作者

**Izumi.屈源**
- GitHub: [查看我的代码](https://github.com/OtokoNoIzumi)
- Bilibili: [关注我的频道](https://space.bilibili.com/82205)

---

如果这个项目对您有帮助，请考虑给个 ⭐ Star！