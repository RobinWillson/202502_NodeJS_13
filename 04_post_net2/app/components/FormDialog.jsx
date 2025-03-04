import { Button, Dialog, Paper, TextField, Typography } from "@mui/material";

const FormDialog = ({ onClose, open, formik }) => {
  return (
    <Dialog
      onClose={ onClose }
      open={ open }
    >
      <Paper sx={ {
        p: 2,
        width: "400px",
        display: "flex",
        flexDirection: "column",
        gap: 1,
      } }>
        <Typography variant="h6"
          sx={ { textAlign: "center", mb: 1 } }>
          Create a New Post
        </Typography>
        <TextField
          label="Title"
          value={ formik.values.title }
          onChange={ formik.handleChange("title") }
          onBlur={ formik.handleBlur("title") }
          error={ formik.touched.title && formik.errors.title }
          helperText={ formik.touched.title && formik.errors.title }
          //onBlur 會產生一個 touched 的屬性，用來判斷是否有觸碰過這個欄位
          //有點入表單欄位, 再離開, touched 就會變成 true
          //如果沒有設定 onBlur, 當你輸入一個欄位, 全部欄位的錯誤都會出現
          fullWidth />
        <TextField
          label="Body"
          value={ formik.values.body }
          onChange={ formik.handleChange("body") }
          onBlur={ formik.handleBlur("body") }
          error={ formik.touched.body && formik.errors.body }
          //error only shows error on log
          helperText={ formik.touched.body && formik.errors.body }
          //helperText will shew error on form page
          fullWidth />
        <Button
          variant="contained"
          sx={ { mt: 1 } }
          disabled={
            //我們希望按鍵是是在表單有變更且表單是有效的時候才能按
            !formik.isValid ||
            //表單驗証有效, 按鍵才能按
            formik.isSubmitting ||
            //按一次送出時, 按鍵會被 disabled, 避免重複送出
            (!formik.dirty && formik.isValid)
            //我們發現表單第一次載入時, 按鍵是可以送出的
            //dirty 代表表單是否有變更, 當表單第一次載入時, dirty 會是 false
            //這裡的意思是當表單變更後, 且表單是有效的時候, 按鍵才能按  
          }
          fullWidth>
          Create</Button>
      </Paper>
    </Dialog>
  );
};

export default FormDialog;