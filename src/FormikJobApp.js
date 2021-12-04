import { Formik } from "formik";

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
      {({
        values,
        touched,
        errors,
        handleBlur,
        handleChange,
        handleSubmit,
      }) => {
        return (
          <form onSubmit={handleSubmit}>
            <h2>Job Application</h2>
            <div>
              {/*Candidate Name*/}
              <label>Candidate Name: </label>
              <input
                type="text"
                name="candName"
                placeholder="Enter candidate's name"
                value={values.candName}
                onChange={handleChange}
                onBlur={handleBlur}
                // required
              />
              {touched.candName ? (
                <span className="error">{errors.candName}</span>
              ) : (
                <></>
              )}
            </div>

            <br />
            <div>
              {/*Candidate E-mail*/}
              <label>Candidate E-mail: </label>
              <input
                type="email"
                name="candEmail"
                placeholder="Enter candidate's e-mail"
                value={values.candEmail}
                onChange={handleChange}
                onBlur={handleBlur}
                // required
              />
              {touched.candEmail ? (
                <span className="error">{errors.candEmail}</span>
              ) : (
                <></>
              )}
            </div>

            <br />
            <div>
              {" "}
              {/*Candidate Age*/}
              <label>Candidate Age: </label>
              <input
                type="number"
                name="candAge"
                placeholder="Enter candidate's age"
                value={values.candAge}
                onChange={handleChange}
                onBlur={handleBlur}
                // required
              />
            </div>
            {touched.candAge ? (
              <span className="error">{errors.candAge}</span>
            ) : (
              <></>
            )}
            <br />
            <div>
              <button type="submit">Submit</button>
            </div>
          </form>
        );
      }}
    </Formik>
  );
}

export default FormikJobApp;
