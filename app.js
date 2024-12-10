import bodyParser from "body-parser"; //middleware+parse incoming request bodies before handle 
import express from "express"; // import lib
import adminRouter from "./route/admin.route.js";
import categoryRouter from "./route/category.route.js";
import productRouter from "./route/product.route.js";
//find route ====> middleware(admin ,adminrouter)===>import ===>file admin route,...

const app = express();         
const port = 12;     
app.use(bodyParser.json());//json ====>js obj  
app.use(bodyParser.urlencoded({ extended: true }));//post(form )ka data ko encode object 
app.set("view engine", "ejs");//use ejs as the templateing engine (view html page==>ejs)
// app.use("/home",(request,response)=>{
//     response.write("welcome!!!!");
//  response.end();})

//app.use("/products",productRouter);
app.use("/categories",categoryRouter);    
//Define a simple routes
app.get('/', (req, res) => {
    res.send('Hello, World!');
});

//localhost/admin/signin
app.use("/admin",adminRouter);//contain tasks+manage

// Start the server
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
   
});
