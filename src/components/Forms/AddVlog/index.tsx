import { Typography } from "@mui/material";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { object, string, number, mixed } from "yup";
const AddBlog = () => {
  // initial values
  const intialValue = {
    tag: "",
    title: "",
    description: "",
    image: null,
  };

  // validation
  const vlogValidation = object().shape({
    tag: string().required("tag is required"),
    title: string().required("title is required"),
    description: string().required("description is required"),
    image: mixed().required("image is required"),
  });

  const handleSubmit = (values: any, { setSubmitting }: any) => {
    console.log(values);
    setSubmitting(false);
  };

  return (
    <div className="max-w-md mx-auto">
    <Typography variant="h4" component='h2'>Add Blog</Typography>

      <Formik
        initialValues={intialValue}
        validationSchema={vlogValidation}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting, setFieldValue }) => {
          return (
            <Form>
              <div className="mb-4">
                <label htmlFor="tag" className="block mb-2">
                  Tag
                </label>
                <Field
                  type="text"
                  id="tag"
                  name="tag"
                  className="border w-full p-2 mb-3 "
                ></Field>
                <ErrorMessage
                  name="tag"
                  component="div"
                  className="text-red-500"
                ></ErrorMessage>
              </div>

              <div className="mb-4">
                <label htmlFor="title" className="block mb-2">
                  Title
                </label>
                <Field
                  type="text"
                  name="title"
                  className=" border w-full m-auto mb-2 p-2"
                  id="title"
                ></Field>
                <ErrorMessage
                  name="title"
                  component="div"
                  className="text-red-500"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="description" className="block mb-2">
                  description
                </label>
                <Field
                  type="text"
                  name="description"
                  className=" border w-full m-auto mb-2 p-2 id='description"
                ></Field>
                <ErrorMessage
                  name="description"
                  component="div"
                  className="text-red-500"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="image" className="block mb-2">
                  Image
                </label>
                <input
                  type="file"
                  name="image"
                  className=" border w-full m-auto mb-2 p-2 id='image"
                  onChange={(e:any)=>{
                    e.preventDefault()
                    setFieldValue("image",e.currentTarget.files[0])
                  }}
                ></input>
                <ErrorMessage
                  name="image"
                  component="div"
                  className="text-red-500"
                />
              </div>
              <div className="mb-4">
                <button type="submit" className="bg-blue-500 rounded-md p-2">
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

export default AddBlog;
