import { Form, Link } from "react-router-dom"
import { FormInput, SubmitBtn } from "../components"

function Login() {
  return (
    <div className='h-screen grid place-content-center'>
      <Form method="post" className="card w-96 p-8 bg-base-100 shadow-lg flex flex-col gap-y-4">
        <h4 className="text-center font-bold text-3xl">Login</h4>
        <FormInput type="email" label="Email" name="email" defaultvalue="yourgmail@gmail.com"/>
        <FormInput type="password" label="Password" name="password" defaultvalue="00000000"/>
        <div className="mt-4">
          <SubmitBtn text="Login"/>
        </div>
        <button type="button" className="btn btn-secondary btn-block">Guest User</button>
        <p className="text-center">Not a member yet ?
        <Link to="/register" className="capitalize link">Registration</Link>
        </p>
      </Form>
    </div>
  )
}

export default Login