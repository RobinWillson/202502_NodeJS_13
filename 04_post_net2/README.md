### Reference
* https://www.youtube.com/watch?v=oGQBp0xbRFw
* Full Stack Development - Part 2 - NextJS and MUI Frontend

### Goal
* 基於 NextJS@15 & MUI@6
* 試作以上 Post Net 的網站
* 測試 Mui for NextJS
  https://mui.com/material-ui/integrations/nextjs/

### 25:00
* 這裡展示 NavBar 
* 不同於以往 html 一個個 item 去寫,
  我們可以先建一個 Menu Array, 然後用 loop 去完成我們的選單
  ```
  Const MenuItem =[
    {title:"Home",link:"/"},
    {title:"about",link:"/about"},
  ]
  <list>
    {MenuItem.map((item)=>{
      <ListItemButton key={item.title} href={item.link}>
        {item.title}
      </ListItemButton>
    })}
  </list>
  ```
* 上面的概念和傳統的 react 寫法一樣, 
  你會發現點擊連接之後,會有半秒鐘左右的讀取時間
  這沒有發揮到 NextJS app route 的優勢
* 改寫成 app route , 我們加上 <Link> 
  點擊連結沒有延遲 :
  ```
  <list>
    {MenuItem.map((item)=>{
      <Link key={item.title} href={item.link}>
        <ListItemButton >
          {item.title}
        </ListItemButton>
      </Link>
    })}
  </list>
  ```


### 36:30
* 以下兩種寫法都可以, 
  import NavBar from "../components/NavBar.tsx"
  import NavBar from "@/components/NavBar.tsx"
* 在 NextJS, @表示 root, 第二種寫法在架構變動時不易出錯, 較佳

### 37:50
* 當你想用 flex div 時, 要優先想到 MUI 的 BOX,

### 43:00
* ToolBar 是 MUI 在 NavBar 預設的模版

### 45:30
* 在 MUI 裡, 搜尋 default theme. 可以知道它設定了什麼..
* 其中 theme.palette 是最常用的


### 50:00
* [important]實作客制化一直失敗, 儘量不要去客制化 MUI
* https://m2.material.io/inline-tools/color/
* 客制化Theme的寫法請參考這裡code
  https://mui.com/material-ui/customization/palette/#provide-tokens-manually

  ```
  import { createTheme, alpha, getContrastRatio } from '@mui/material/styles';
  const salmonBase = '#c5040d';
  const theme = createTheme({
    palette: {
      // 修改預設顏色
      primary: {
        main: '#ff8fab',
      },
      // 自行客製化的顏色
      ochre: {
        main: '#E3D026',
        light: '#E9DB5D',
        dark: '#A29415',
        contrastText: '#242105',
      },
      // 設定一個主色調
      salmon: {
        main: alpha(salmonBase, 0.7),
        light: alpha(salmonBase, 0.5),
        dark: alpha(salmonBase, 0.9),
        contrastText: getContrastRatio(salmonBase, '#fff') > 4.5 ? '#fff' : '#111'
      },
    },
  });
  ``` 
* 使用客制化模版時, 在 layout.jsx 需用 ThemeProvider 包起來
  ```
    return (
      <ThemeProvider theme={ theme }>
          ....
      </ThemeProvider>
    );
  ```

### 58:00
* 簡單的客制化寫法
  `sx={{border:'1px solid red'}}`
* 以下寫法是在 lg 或 lg 以上, 會執行客制化
  `sx={{border:{lg:'1px solid red'}}}`
* 客制化也可以用上參數, 這樣要讓它變為 function的表達式
  ```
  sx={(theme)=>({
      minHeight : '100vh',
      backgroundColor : theme.palette.grey
    })
  }  
  ```
* 在 NextJS@16, 必須用 use Client 才能用

### 1:00:30
* Container 和 BOX 很相似
  BOX 預設是 width=100
  而 Container 在左右都有 margin 留白

### 1:01:30
以下是兩個 column 的寫法
在中視窗(md)以下是滿版,以上是兩個欄位
```
<container maxWidth="lg">
  <Grid container>
    <Grid item xs={12} md={4}>
      <Box sx={{height:'100px',border:'1px solid red',width:'100%}}>
    </Grid>
    <Grid item xs={12} md={8}>
      <Box sx={{height:'100px',border:'1px solid red',width:'100%}}>
    </Grid>
  </Grid>
</container>
```

### 1:10:00
* `<container maxWidth="lg" sx={{py:1}}>`
  * 在這裡 py=padding-Y
  * "1" 表示 theme.space=1, 1是8px,2是16px
* `<container maxWidth="lg" spacing={2}>`
  * 這裡的 spacing 是指 flex 裡每個元件的間距
* `<paper></paper>`
  * 這有些像是 Bootstrap 的 Card, 能產生一些有設計感的方塊
  * elevation : 類似 Z-index, 值愈大, 則愈上層, 最大16,

### 1:25:00
* Dialog : 彈出式 info 視窗
* TextField : 文字輸入框

### 1:27:00
Create PostList Components
```
// @ Components > PostList
const PostList = ({ posts }) => { ...}
// @ page
<PostList posts={POST}>
```
* 其中小寫的 posts 是 argument name
* 大寫的 POST 是輸入值

### 1:28:00
Create PostCard Components
```
//@ Components > PostCard
const PostCard = ({ post }) => {
  <Box key={ post.id }...>
  ...
  </Box>
}
//@ Components > PostList
{ posts.map((POST) => (
  <PostCard key={ POST.id } post={ POST } />
)) }
```
* 注意這裡我們有用到 loop/map, 
* 雖然子元件有寫了post.id, 但在外面也要給它一個 id, 
* 這裡有點多此一舉, 但主要是練習參數的用法

### 1:29:00
建立 Dialog 作為 Form 的輸入頁
* `<TextField value={ "Title" } fullWidth />`
* `const [toggleDialog, setToggleDialog] = useState(false)`
* `<Dialog onClose={ () => setToggleDialog(false) } open={ toggleDialog } >`

### 1:37:00
將 Dialog 建立成 components
```
@ components > FormDialog.jsx
const FormDialog = ({onClose, open}) => {
  return (
    <Dialog
      onClose={ onClose }
      open={ open }
    >
    ...
  )}
```
```
@ page.jsx
<FormDialog
  onClose={ () => setToggleDialog(false) }
  open={ toggleDialog }
/>
```

### 1:40:00
- 用Formik & Yup 來處理表單
- 用react要寫很多state,
  Formik 用來簡化 state 語法
  Yup 用來做資料驗証
- npm i formik
- npm i yup
```
@ Homepage
const validationSchema = yup.object({
  title: yup.string().required("Title is required"),
  body: yup.string().required("Body is required")
});
const formik = useFormik({
  initialValues: {
    title: "",
    body: "",
  },
  validationSchema,
  onSubmit: (values) => {
    console.log(values);
  }
});
<FormDialog
  onClose={ () => setToggleDialog(false) }
  open={ toggleDialog }
  formik={ formik }
/>
```
- [more detail refer to FormDialog.jsx](./app/components/FormDialog.jsx)


### 2:00:00
 * For NextJS, we get data from Server Side 
 * // export async function getServerSideProps() { }
 * // export async function getStaticProps() { }
 * // export async function getStaticPaths() { }
 * //--------------------------
 * getServerSideProps(): Fetch data on each request, but not render to client side
 * getStaticProps(): Fetch data at build time, create cached data, and render to client side
 * getStaticPaths(): Generate dynamic routes, used with getStaticProps()
 * 在這個範例裡, 我們只示範 getServerSideProps(), 我們需要每次都有新資料
 * //--------------------------
```
export async function getServerSideProps() {
  const posts = [
    {
      id: 1, title: "Title 1",
      body: "Content 1",
      createAt: "2021-10-01"
    },
    {
      id: 2, title: "Title 2",
      body: "Content 2",
      createAt: "2021-10-01"
    },
  ];
  return {
    props: {
      posts: posts
    }
  };
}
```
 * 實際執行時, 上方的表逹式己經過時, 無法用於 NextJS@16

### Server Side Fetching
* 這裡展示簡單的資料展示
* https://youtu.be/YQMSietiFm0?si=wW1geB57wP-mvrrU&t=571
```
@outside the HomePage
async function getServerSideProps(){
  const res=await fetch("https://....")
  //const repo=await res.json
  //return (props:{repo})
  return res.json
}
@under the HomePage
const repo = await getServerSideProps()
<h1>{repo.name}{/h1}
```
* 但如果在 client site 有許多互動存在
* https://youtu.be/YQMSietiFm0?si=BS5iBa5ybKIdQbRW&t=686
* 這裡的作法和我們的 01_ticket-app 一樣
* 我們要把 use client 的部分給分開來, 整個架構會大變動
* 這裡的目標是去抓 database 的資料, 開始要自由發揮了

### 
