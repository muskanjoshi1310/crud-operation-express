//Import the database connection
import con from "../database/dbConfig.js";


export const viewallcategory = (request, response) => {
//     response.render("viewallcategory.ejs"); 
    const query="select * from categories ";
    con.query(query,(err,result)=>{
        if(err){
            console.log("error in viewallcategory"+err)
            response.send(err.message);
            return;
        }
        response.render("viewallcategory",{products:result});
    })

};
