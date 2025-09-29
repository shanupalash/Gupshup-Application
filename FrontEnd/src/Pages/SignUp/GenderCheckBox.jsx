function GenderCheckBox({ onCheckBoxChange, selected }) {
  return (
    <div className="flex">
      <div className="form-control">
        <label htmlFor="" className=" cursor-pointer label gap-2">
          <input
            type="checkbox"
            className="checkbox border-slate-900"
            checked={selected == "male"}
            onChange={() => onCheckBoxChange("male")}
          />
          <span className="label-text">Male</span>
        </label>
      </div>
      <div className="form-control">
        <label htmlFor="" className=" cursor-pointer label gap-2">
          <input
            type="checkbox"
            className="checkbox border-slate-900"
            checked={selected == "female"}
            onChange={() => onCheckBoxChange("female")}
          />
          <span className="label-text">Female</span>
        </label>
      </div>
    </div>
  );
}

export default GenderCheckBox;
