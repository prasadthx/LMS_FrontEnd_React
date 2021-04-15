import React from "react";
import './AdminLogin.css'
import { Form, Field } from 'react-final-form'

export class AdminLogin extends React.Component<any,any>{
    private required = (value: string) => (value ? undefined : 'Required');
    render() {
        return (
            <div className="AdminRegister bg-purple-500 w-full h-full flex flex-col justify-center items-center">
                <div className="loginForm px-4 py-4 text-white">
                    <div className="text-2xl text-center mb-4">
                        Login
                    </div>
                    <Form
                        onSubmit={()=>console.log('scam')}
                        render={({
                            handleSubmit,
                            form,
                            submitting,
                            pristine,
                            values
                        }) => (
                            <form onSubmit={handleSubmit} className='w-full h-full'>
                                <Field name="email" validate={this.required}>
                                    {({ input, meta }) => (
                                        <div className="py-2">
                                            <label className='pl-3'>Email</label>
                                            <input {...input} type="text" placeholder="Enter your Email" className='w-full rounded-3xl px-3 text-black focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent'/>
                                            {meta.error && meta.touched &&
                                            <span className='text-red-400 text-sm pl-3'>{meta.error}</span>}
                                        </div>
                                    )}
                                </Field>
                                <Field name="password" validate={this.required}>
                                    {({ input, meta }) => (
                                        <div className="py-2">
                                            <label className='pl-3'>Password</label>
                                            <input {...input} type="password" placeholder="Enter your password" className='w-full rounded-3xl px-3 text-black focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent'/>
                                            {meta.error && meta.touched &&
                                            <span className='text-red-400 text-sm pl-3'>{meta.error}</span>}
                                        </div>
                                    )}
                                </Field>
                                <div className="buttons flex justify-evenly mt-3">
                                    <button type="submit" disabled={submitting} className="bg-blue-700 px-6 py-1 rounded-2xl">
                                        Login
                                    </button>
                                    <button
                                        type="button"
                                        onClick={form.reset}
                                        disabled={submitting || pristine}
                                        className="bg-white px-6 py-1 rounded-2xl text-black"
                                    >
                                        Reset
                                    </button>
                                </div>
                                {/*@ts-ignore*/}
                                <pre>{JSON.stringify(values, 0, 2)}</pre>
                            </form>
                        )}
                    />
                </div>
            </div>
        );
    }
}