import { Formik, Field, ErrorMessage, Form } from "formik";
import { string, number, mixed, object } from "yup";
const AddTestinomial = () => {
  const initialValue = {
    name: "",
    description: "",
    image: null,
  };
  const testinomialValidation = object().shape({
    name: string().required("Name is required"),
    description: string().required("description is required"),
    image: string().required("image is required"),
  });
  const handleSubmit = (values: any, { setSubmitting }: any) => {
    console.log(values);
    setSubmitting(false)
  };
  return (
    <div className="max-w-md mx-auto">
      <Formik
        initialValues={initialValue}
        validationSchema={testinomialValidation}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting, setFieldValue }) => {
          return (
            <Form>
              <div className="mb-4">
                <label htmlFor="name" className="block mb-2">
                  Name:
                </label>
                <Field
                  type="text"
                  id="name"
                  name="name"
                  className=" w-full mb-4 mx-auto border p-2 "
                ></Field>
                <ErrorMessage
                  component="div"
                  name="name"
                  className="text-red-500"
                ></ErrorMessage>
              </div>
              <div className="mb-4">
                <label htmlFor="description" className="block mb-2">
                  Description:
                </label>
                <Field
                  type="text"
                  id="description"
                  name="description"
                  className=" w-full mb-4 mx-auto border p-2 "
                ></Field>
                <ErrorMessage
                  component="div"
                  name="description"
                  className="text-red-500"
                ></ErrorMessage>
              </div>
              <div className="mb-4">
                <label htmlFor="description" className="block mb-2">
                  image:
                </label>
                <input
                  type="file"
                  id="image"
                  name="image"
                  className=" w-full mb-4 mx-auto border p-2 "
                  onChange={(e:any)=>{
                    e.preventDefault()
                    setFieldValue('image',e.currentTarget.files[0])
                  }}
                ></input>
                <ErrorMessage
                  component="div"
                  name="image"
                  className="text-red-500"
                ></ErrorMessage>
              </div>
              <div className="mb-4">
                <button type="submit" className="bg-blue-500 text-white p-2 rounded-md">
                    {
                        isSubmitting?"Creating..":"submit"
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

export default AddTestinomial;
