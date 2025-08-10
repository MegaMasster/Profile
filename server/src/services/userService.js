import { pool } from "../databaseConnection/dbConnect.js";
import bcrypt from "bcrypt";

class userService  {


    async isUserExist(email) {
        const { rows } = await pool.query(`SELECT * FROM users WHERE email = $1` , [email])
        return rows.length > 0
    }

    
    async signUp(userData) {
        const {username , email , password} = userData

        if(await this.isUserExist(email)){
            throw new Error("User with this email already exists")
        }

        const hashedPassword = await bcrypt.hash(password , 12)

        try{
            const { rows } = await pool.query(`INSERT INTO users (username , email , hashedPassword)
                VALUES($1 , $2 , $3) 
                RETURNING id` ,
                [username , email , hashedPassword]
            )
            const user = rows[0]
            return user
        }catch(error){
            console.log("Database sign up error" , error)
            throw new Error(error)
        }
    }
    

}
export default userService