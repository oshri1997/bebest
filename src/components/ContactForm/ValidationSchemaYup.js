import * as yup from "yup";
const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
const validationSchema = yup.object({
  fullName: yup
    .string()
    .required("Required")
    .min(2, "Your Name might be atleast 2 charecters"),
  email: yup.string().required("Required").email("Invalid email"),
  phoneNumber: yup
    .string()
    .required("Required")
    .matches(phoneRegExp, "Phone number is not valid")
    .min(10, "to short")
    .max(10, "to long"),
});
export default validationSchema;
