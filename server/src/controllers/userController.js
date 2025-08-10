import userService from "../services/userService.js"

const signUp = async (req , res) => {

    try{
        const user = await userService.signUp(req.body)

        res.status(200).json({
            success: true,
            user: {id: user.id}
        })

        console.log("Success sign up")
    }catch(error){
        if(error.message.includes("User with this email already exists")){
            res.status(409).json({success: false , message: error.message})
        }else{
            res.status(500).json({success: false})
        }
    }

}
export {
    signUp
}