//Import the database connection
 import con from "../database/dbConfig.js";


export const adminSignin = (request, response) => {
    response.render("admin_sign.ejs"); 
};


export const adminAction = (request, response) => {
    const { email, password } = request.body;

    console.log("Email => " + email + ", Password => " + password);


    con.getConnection((err, conn) => {
        if (err) {
            console.error("Database connection error: ", err.message);
            //response.render("signin", { error: "Unable to connect to the database." });
        } else {
 
            const myQuery = "SELECT * FROM admin  WHERE username = ? AND password = ?";

            
            conn.query(myQuery, [email, password], (err, result) => {
                conn.release(); 

                if (err) {
                    console.error("Query error: ", err.message);
                    //response.render("signin", { error: "Database query error." });
                } else {
                    if (result.length === 0) {
                        console.log("No user found with the provided credentials.");
                      //  response.render("signin", { error: "Invalid email or password." });
                    } else {
                        console.log("Login successful for user: ", email);
                        response.redirect("/admin/adminDashboard"); // Ensure this route is properly defined
                    }
                }
            });
        }
    });
};

// Render the admin dashboard
export const adminDashboard = (request, response) => {
    response.render("adminDashboard.ejs"); 
};



















