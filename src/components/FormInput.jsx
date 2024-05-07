
function FormInput({ name, type, label, defaultvalue, size}) {
  return (
    <div className="form-control">
        <label className=" w-full ">
          <div className="label">
        <span className="label-text capitalize">{label}</span>
          </div>
          <input type={type} name={name} defaultValue={defaultvalue} placeholder="Type here" className={`input input-bordered w-full ${size}`} />
        </label>
    </div>
  )
}

export default FormInput