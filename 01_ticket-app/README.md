### Next.js, Tailwind CSS, and MongoDB Project Tutorial – Ticketing App

- https://www.youtube.com/watch?v=H0vhkoXljq0
- by freeCodeCamp.org
- 這個教程示範一個 tick List
- 使用 NextJS 13.4.13
- 使用 mongoose Atlas ?
- 沒有用太多的外掛, 值得作為初步的學習

### /app/TicketPage/[id]/page.jsx

- 對應到 `https://localhost:3000/TicketPage/123456`
- 或是 `https://localhost:3000/TicketPage/`
- `const TicketPage = async ({ params }) => `
  - 這裡的 params 表示 
    `https://localhost:3000/TicketPage/{params}`
  - 因為我們的 folder 是用 [id] 來命名, 可以看到
    `params = {id : "123456"}`
- `<TicketForm ticket={ updateTicketData } />`
  - 這裡呼叫 TicketForm 時, 給入一些資料
  - 在 TicketForm.jsx 裡寫
    `const TicketForm = ({ ticket }) =>` 
  - (ticket 改成 data 或許更好理解)

### /app/{components}/Components.jsx

- 在 folder 上加上刮號, 則在瀏覽器上無法通過網址訪問
- `https://localhost:3000/{components}/component.jsx`
  - 會回傳 404 Error

### /app/{model}/Models.jsx

- 定義 Schema

### /api/Tickets/[id]/route.js
- route 處理, GET/POST/PUT/DELETE 等 RESTful function
- 如有用到 database, 則必須要.
- /api/Ticket/ 
  - GET : 獲取全部的 Ticket
  - POST : Create New Ticket
- /api/Ticket/[id]
  - GET : 獲取 Ticket-ID 的資料
  - DELETE : 移除此 Ticket-ID
  - PUT : update Ticket-ID data
- 基本語法
  - export async function GET(req, { params },res) 
  - export async function GET(req, res) 
  - res 在 NextJS 裡被 NextResponse 替代

### useRouter()
- 如要存取 database, 則需要 useRouter
- import {useRouter},
  - 預設是 from next/Router, 
  - 要手動改成 from next/navigation
- router.refresh();
  - 在讀取其他資料後,更新頁面
  - 如果沒有這一句,資料只在背景更新,使用者會困惑到底有沒有執行

### handleChange()
- 這種寫法背起來!
```
  const [formData, setFormData] = useState(startingTicketData);
  const handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    setFormData((preState) => ({
      ...preState,
      [name]: value,
    }));
  };
```

---------
# Reference
---------

### 09:00

- .js 可以自己修改為 .jsx
- modify home page as `DashBoard`
- create `/TicketPage/page.jsx`

### 10:00

- create folder structure : `/TicketPage/[id]/page.jsx`
- 在 TicketPage 我們可以加上 params
  ```
  const TicketPage = ({params}) => {
    return (
      <div>TicketPage {params.id}</div>
    );
  };
  ```
-

### 12:00

- 如果我們要建一個 folder, 但沒有 router 功能,
  可以建成 `{components}`
- create `{components}\Nav.jsx`

### 15:00

- install icons (just example)
- `npm i --save @fortawesome/fontawesome-svg-core`
- `npm i --save @fortawesome/free-solid-svg-icons`
- `npm i --save @fortawesome/react-fontawesome@latest`


### 1:06:00


- 