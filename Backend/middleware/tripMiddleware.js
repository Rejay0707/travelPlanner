import Joi from "joi";

const tripInformation = (req, res, next) => {
    const activitySchema = Joi.object({
        title: Joi.string().required(),
        description: Joi.string().required(),
    });

    const schema = Joi.object({
        destination: Joi.string().required(),
        startDate: Joi.date().required(),
        endDate: Joi.date().required(),
        activities: Joi.array().items(activitySchema).required(),
    });

    const { error } = schema.validate(req.body);
    if (error) {
        return res.status(400).json({
            message: error.message
        });
    } else {
        next();
    }
};


export {tripInformation}