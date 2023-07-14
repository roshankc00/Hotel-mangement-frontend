import React from 'react'
import { Formik,Field,ErrorMessage,Form } from 'formik'
import { object,string,number, mixed } from 'yup'
import { Typography } from '@mui/material'
const AddFood = () => {
    const initialValue={
        name:"",
        price:"",
        discountPer:"",
        category:"",
        image:null


    }

    const foodValidation=object().shape({
        name:string().required("name is requred"),
        price:number().required("Price is requred"),
        discountPer:number().required("Discount Percentage is requred"),
        category:string().required("category is requred"),
        image:mixed().required("image is required")
    })

    const handlesubmit=(values:any,{setSubmitting}:any)=>{
        console.log(values)

    }

  return (
    <div className="max-w-md mx-auto mb-2">
    <Typography variant="h4" component='h2'>Add Food</Typography>

      <Formik
        initialValues={initialValue}
        validationSchema={foodValidation}
        onSubmit={handlesubmit}
      >
        {({ isSubmitting, setFieldValue }) => {
          return (
            <Form>
              <div className="mb-4">
                <label htmlFor="name">Name:</label>
                <Field
                  type="text"
                  name="name"
                  className="mb-2 p-2 w-full border"
                ></Field>
                <ErrorMessage
                  component="div"
                  name="name"
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
  )
}

export default AddFood