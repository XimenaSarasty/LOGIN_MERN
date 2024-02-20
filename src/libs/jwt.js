import { Jwt } from "jsonwebtoken";
import { TOKEN_SECRET } from "../config"; 

export function createTokenAccess(payload){
    return new Promise((resolve, reject) => {
        jwt.sign(
            payload, 
            TOKEN_SECRET,
            {
                expiresIn: "Id"
            },
            (err, token) => {
                if(err) reject(err);
                resolve(token)
            }
        )
    });
}
