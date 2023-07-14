import { Typography } from "@mui/material";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { object, string, number, mixed } from "yup";

const initialValue = {
  title: "",
  description: "",
  price: "",
  discountPer: "",
  category: "",
  image: null,
};

const roomValidation = object().shape({
  title: string().required("title is required"),
  description: string().required("description is required"),
  discountPer: number().required("Discount Percentage is required"),
  category: string().required("category is required"),
  price: number().required("price is required"),
  image: mixed().required("iamge is required"),
});
const handlesubmit = (values: any, { setSubmitting }: any) => {
  console.log(values);
  setSubmitting(false)
};

const AddRoom = () => {
  return (
    <div className="max-w-md mx-auto mb-2">
    <Typography variant="h4" component='h2' className="my-4">Add Room</Typography>

      <Formik
        initialValues={initialValue}
        validationSchema={roomValidation}
        onSubmit={handlesubmit}
      >
        {({ isSubmitting, setFieldValue }) => {
          return (
            <Form>
              <div className="mb-4">
                <label htmlFor="title">Title:</label>
                <Field
                  type="text"
                  name="title"
                  className="mb-2 p-2 w-full border"
                ></Field>
                <ErrorMessage
                  component="div"
                  name="title"
                  className="text-red-500"
                ></ErrorMessage>
              </div>

              <div className="mb-4">
                <label htmlFor="description">Description:</label>
                <Field
                  type="text"
                  name="description"
                  className="mb-2 p-2 w-full border"
                ></Field>
                <ErrorMessage
                  component="div"
                  name="description"
                  className="text-red-500"
                ></ErrorMessage>
              </div>

              <div className="mb-4">
                <label htmlFor="price">Price:</label>
                <Field
                  type="text"
                  name="price"
                  className="mb-2 p-2 w-full border"
                ></Field>
                <ErrorMessage
                  component="div"
                  name="price"
                  className="text-red-500"
                ></ErrorMessage>
              </div>

              <div className="mb-4">
                <label htmlFor="discountPer">DiscountPer:</label>
                <Field
                  type="text"
                  name="discountPer"
                  className="mb-2 p-2 w-full border"
                ></Field>
                <ErrorMessage
                  component="div"
                  name="discountPer"
                  className="text-red-500"
                ></ErrorMessage>
              </div>

              <div className="mb-4">
                <label htmlFor="category">Category:</label>
                <Field
                  type="text"
                  name="category"
                  className="mb-2 p-2 w-full border"
                ></Field>
                <ErrorMessage
                  component="div"
                  name="category"
                  className="text-red-500"
                ></ErrorMessage>
              </div>

              <div className="mb-4">
                <label htmlFor="image">Image:</label>
                <input
                  type="file"
                  name="image"
                  className="mb-2 p-2 w-full border"
                  onChange={(e:any)=>{
                    e.preventDefault()
                    setFieldValue("image",e.currentTarget.files[0])
                  }}
                ></input>
                <ErrorMessage
                  component="div"
                  name="image"
                  className="text-red-500"
                ></ErrorMessage>
              </div>
              <div className="mb-4">

              <button type="submit" className="bg-blue-500 text-white rounded-md p-2">

                {
                    isSubmitting?"creating..":"submit"
                }
              </button>
                </div>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

export default AddRoom;
