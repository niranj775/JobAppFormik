import { Formik, Form, Field, ErrorMessage } from "formik";

function FormikJobApp() {
  return (
    <Formik
      initialValues={{
        candName: "",
        candEmail: "",
        candAge: "",
      }}
      validate={({ candName, candEmail, candAge }) => {
        const errors = {};

        if (!candName) errors.candName = "Please enter the name";
        else if (!candEmail) errors.candEmail = "Please enter the e-mail";
        else if (!candAge) errors.candAge = "Please enter the age";
        else if (candAge < 18) errors.candAge = "Age must be greater than 18";

        return errors;
      }}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      {({ touched }) => {
        return (
          <Form>
            <h2>Job Application</h2>
            <div>
              {/*Candidate Name*/}
              <label>Candidate Name: </label>
              <Field
                type="text"
                name="candName"
                placeholder="Enter candidate's name"
              />
              {touched.candName ? <ErrorMessage name="candName" /> : <></>}
            </div>
            <br />
            <div>
              {/*Candidate E-mail*/}
              <label>Candidate E-mail: </label>
              <Field
                type="email"
                name="candEmail"
                placeholder="Enter candidate's e-mail"
              />
              {touched.candEmail ? <ErrorMessage name="candEmail" /> : <></>}
            </div>

            <br />
            <div>
              {" "}
              {/*Candidate Age*/}
              <label>Candidate Age: </label>
              <Field
                type="number"
                name="candAge"
                placeholder="Enter candidate's age"
              />
            </div>
            {touched.candAge ? <ErrorMessage name="candAge" /> : <></>}
            <br />
            <div>
              <button type="submit">Submit</button>
            </div>
          </Form>
        );
      }}
    </Formik>
  );
}

export default FormikJobApp;
