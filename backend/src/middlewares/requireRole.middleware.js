export const requireRole = (role) => {
    return (req,res,next) => {
        if(!req.user){
            return res.status(401).json({message:"Unauthorized: No user info"});
        }

        if(req.user.role !== role){
            return res.status(403).json({ message: `Forbidden: ${role} role required` });
        }

        next();
    }
}