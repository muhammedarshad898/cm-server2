const jsonserver=require('json-server')
const cmserver=jsonserver.create()
const middleware=jsonserver.defaults()
const routes=jsonserver.router('db.json')
cmserver.use(middleware)
cmserver.use(routes)
const PORT=4000 || process.env.port
cmserver.listen(PORT,()=>{
    console.log("server is running at...." +PORT)
})