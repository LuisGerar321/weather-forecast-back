import Joi from "joi";

export const PlacesLocationSchema = Joi.object({
  city_name: Joi.string().required().not().allow(""),
  state: Joi.string().required().not().allow(""),
  country: Joi.string().required().not().allow(""),
});
