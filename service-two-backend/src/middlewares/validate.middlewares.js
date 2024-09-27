const validateSchema = (schema) => (req, res, next) => {
    try {
        schema.parse(req.body);
        next();
    } catch (error) {
        
        return  res.json({
            token: "",
            error: true,
            message: error.errors.map((error) => error.message),
            status: 400,
            data: ""
          });
        
    }   
}

export { validateSchema };