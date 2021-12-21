import * as yup from 'yup';

const signUpSchema = yup.object().shape({
  username: yup.string().required().min(5),
  password: yup.string().required().min(5),
  phone: yup.string().required(),
});

export default signUpSchema;
