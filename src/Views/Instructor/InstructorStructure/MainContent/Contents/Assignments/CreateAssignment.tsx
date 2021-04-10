import React from "react";
import './CreateAssignment.css'
import { Form, Field } from 'react-final-form'
import { FieldArray } from 'react-final-form-arrays'
import arrayMutators from 'final-form-arrays'
import {AiFillDelete, AiOutlinePlus, AiTwotoneSave} from 'react-icons/ai';
import {GrPowerReset} from 'react-icons/gr';

export default class CreateAssignment extends React.Component<any, any>{
    constructor(props:any) {
        super(props);
    }

    render() {
        return (
            <div className="CreateAssignment mx-auto">
                <Form
                    onSubmit={()=>console.log('scam')}
                    mutators={{
                        ...arrayMutators
                    }}
                    render={({
                                 handleSubmit,
                                 form: {
                                     mutators: { push, pop }
                                 }, // injected from final-form-arrays above
                                 pristine,
                                 form,
                                 submitting,
                                 values
                             }) =>
                    {
                        return (
                            <form onSubmit={handleSubmit}>
                                <div className="AssignmentHeader">
                                    <div>
                                        <div className='my-2 py-2'>
                                            <label className='text-3xl'>Assignment Name: </label>
                                        </div>
                                        <div className='text-black text-2xl'>
                                            <Field name="company" component="input" className='text-center width-3/5' />
                                        </div>
                                    </div>
                                    <div className="buttons mt-3">
                                        <button
                                            type="button"
                                            onClick={() => push('questions', undefined)}
                                            className="bg-blue-600 rounded my-2 px-2 py-1 inline-flex align-middle items-center transition duration-300 hover:bg-blue-900"
                                        >
                                            <svg className="w-4 h-4 mr-1 mt-1" xmlns="http://www.w3.org/2000/svg"
                                                 viewBox="0 0 20 20">
                                                <AiOutlinePlus/>
                                            </svg>
                                            <span>
                                            Add Question
                                            </span>
                                        </button>
                                        <button
                                            type="button"
                                            onClick={() => pop('questions')}
                                            className='bg-red-700 rounded my-2 px-2 py-1 inline-flex align-middle items-center transition duration-300 hover:bg-red-900'
                                        >
                                            <svg className="w-4 h-4 mr-1 mt-1" xmlns="http://www.w3.org/2000/svg"
                                                 viewBox="0 0 20 20">
                                                <AiFillDelete/>
                                            </svg>
                                            Remove Question
                                        </button>
                                    </div>
                                </div>
                                <FieldArray name="questions">
                                    {({ fields }) =>
                                        fields.map((name, index) => (
                                            <div key={name}>
                                                <label>Cust. #{index + 1}</label>
                                                <div className="text-black">
                                                <Field
                                                    name={`${name}.Question Text`}
                                                    component="input"
                                                    placeholder="Enter the Question"
                                                />
                                                <span
                                                    onClick={() => fields.remove(index)}
                                                    style={{ cursor: 'pointer' }}
                                                >
                                                    ❌
                                                </span>
                                                </div>
                                            </div>
                                        ))
                                    }
                                </FieldArray>

                                <div className="buttons flex justify-evenly align-middle">
                                    <button
                                        type="submit"
                                        disabled={submitting || pristine}
                                        className="bg-green-600 rounded my-2 px-2 py-1 inline-flex align-middle items-center transition duration-300 hover:bg-green-900"
                                    >
                                        <svg className="w-4 h-4 mr-1 mt-1" xmlns="http://www.w3.org/2000/svg"
                                             viewBox="0 0 20 20">
                                            <AiTwotoneSave/>
                                        </svg>
                                        Save Assignment
                                    </button>
                                    <button
                                        type="button"
                                        onClick={form.reset}
                                        disabled={submitting || pristine}
                                        className="bg-white text-black rounded my-2 px-2 py-1 inline-flex align-middle items-center transition duration-300 hover:bg-gray-400"
                                    >
                                        <svg className="w-4 h-4 mr-1 mt-1" xmlns="http://www.w3.org/2000/svg"
                                             viewBox="0 0 20 20">
                                            <GrPowerReset/>
                                        </svg>
                                        Reset
                                    </button>
                                </div>
                                {/*@ts-ignore*/}
                                <pre>{JSON.stringify(values, 0, 2)}</pre>
                            </form>
                        )
                    }}
                />
            </div>
        );
  }
}
