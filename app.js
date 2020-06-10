const express= require('express')
const app= express()
const PORT =Number(process.env.PORT || 4200)

app.use(express.static(__dirname+'/public'))


app.get('/',(req,res)=>{
    res.sendFile(__dirname+'/mypage.html')
})


app.listen(PORT,()=>{
    console.log(`Server is up and running at PORT ${PORT}`)
})