import rateLimit from "express-rate-limit";

const  rateLimiter = rateLimit({
    windowMs: 60*1000,
    limit:100,
    message:"Too Many requests,please try again later",
    standardHeaders:true,
    legacyHeaders:false
})
export default rateLimiter;