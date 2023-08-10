import React from "react";
import { useForm } from "react-hook-form";
import Button from "./Button";

function SignUp() {
	const {
		register,
		handleSubmit,
		// watch,
		formState: { errors },
	} = useForm();

	const onSubmit = (data) => {
		console.log(data);
	};

	return (
		<form
			onSubmit={handleSubmit(onSubmit)}
			className="rounded-lg border p-4 bg-white"
		>
			<InputField
				type="text"
				label={"Username"}
				register={register}
				errors={errors}
			/>
			<InputField
				type="text"
				label={"Email"}
				register={register}
				errors={errors}
			/>
			<InputField
				label={"Password"}
				type={"password"}
				register={register}
				errors={errors}
				className={"mb-4"}
				// pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$"
			/>

			<Button primary className={"rounded bg-[hsl(287.1, 38%, 48%)]"}>
				Submit
			</Button>
		</form>
	);

	function InputField({ label, register, errors, className,...rest }) {
		return (
			<div className={`mb-1 ${className}`}>
				<label className="block mb-2" htmlFor={label}>
					{label}
				</label>
				<input
          {...register(label, { required: true })}
          {...rest}
					className="rounded border bg-slate-50 font-medium p-1 px-2"
				/>
				{errors.exampleRequired && <span>{label}is required</span>}
			</div>
		);
	}
}
export default SignUp;
