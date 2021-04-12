import React from "react";
import './Timetable.css';
import { Form, Field } from 'react-final-form'
import arrayMutators, {pop, push} from "final-form-arrays";
import {AiFillDelete, AiOutlinePlus} from "react-icons/ai";
import {FieldArray} from "react-final-form-arrays";
export class Timetable extends React.Component<any, any>{
    render() {
        return (
            <div className="Timetable w-full h-full bg-blue-700 ">
                <Form
                    onSubmit={()=>console.log("Scam")}
                    mutators={{
                        ...arrayMutators}
                    }
                    render={({handleSubmit,
                            form:{
                                    mutators: {push, pop}
                            },
                            pristine,
                            form,
                            submitting,
                            values}) =>
                    {
                        return (
                            <form onSubmit={handleSubmit} className='w-full'>
                                <div className="AssignmentHeader">
                                    <div>
                                        <div className='my-2 py-2'>
                                            <label className='text-3xl'>TimeTable:</label>
                                        </div>
                                        <div className='text-black text-2xl'>
                                            <Field name="timetableName" component="input" className='text-center width-3/5' />
                                        </div>
                                    </div>
                                    <div className="buttons mt-3">
                                        <button
                                            type="button"
                                            onClick={() => push('days', undefined)}
                                            className="bg-blue-600 rounded my-2 px-2 py-1 inline-flex align-middle items-center transition duration-300 hover:bg-blue-900"
                                        >
                                            <svg className="w-4 h-4 mr-1 mt-1" xmlns="http://www.w3.org/2000/svg"
                                                 viewBox="0 0 20 20">
                                                <AiOutlinePlus/>
                                            </svg>
                                            <span>
                                            Add Day
                                            </span>
                                        </button>
                                        <button
                                            type="button"
                                            onClick={() => pop('days')}
                                            className='bg-red-700 rounded my-2 px-2 py-1 inline-flex align-middle items-center transition duration-300 hover:bg-red-900'
                                        >
                                            <svg className="w-4 h-4 mr-1 mt-1" xmlns="http://www.w3.org/2000/svg"
                                                 viewBox="0 0 20 20">
                                                <AiFillDelete/>
                                            </svg>
                                            Remove Day
                                        </button>
                                    </div>
                                </div>
                                <div className='flex mt-5 my-8'>
                                    <FieldArray name="days">
                                        {({ fields }) =>
                                            fields.map((name, index) => (
                                                <div key={name} className='Field my-7'>
                                                    <div className='flex justify-between align-middle'>
                                                        <label className='text-center'>Day  #{index + 1}</label>
                                                        <span
                                                            onClick={() => fields.remove(index)}
                                                            style={{ cursor: 'pointer' }}
                                                        >
                                                             ❌
                                                             </span>
                                                    </div>
                                                    <div className="text-black">
                                                        <Field
                                                            name={`${name}.dayName`}
                                                            component="input"
                                                            placeholder="Enter the Day"
                                                            className='w-full'
                                                        />
                                                    </div>
                                                    <div>
                                                        <div className="AssignmentHeader">
                                                            <div className="buttons mt-3">
                                                                <button
                                                                    type="button"
                                                                    onClick={() => push(`${name}.subjects`, undefined)}
                                                                    className="bg-blue-600 rounded my-2 px-2 py-1 inline-flex align-middle items-center transition duration-300 hover:bg-blue-900"
                                                                >
                                                                    <svg className="w-4 h-4 mr-1 mt-1" xmlns="http://www.w3.org/2000/svg"
                                                                         viewBox="0 0 20 20">
                                                                        <AiOutlinePlus/>
                                                                    </svg>
                                                                    <span>
                                                                        Add Subject
                                                                    </span>
                                                                </button>
                                                                <button
                                                                    type="button"
                                                                    onClick={() => pop(`${name}.subjects`)}
                                                                    className='bg-red-700 rounded my-2 px-2 py-1 inline-flex align-middle items-center transition duration-300 hover:bg-red-900'
                                                                >
                                                                    <svg className="w-4 h-4 mr-1 mt-1" xmlns="http://www.w3.org/2000/svg"
                                                                         viewBox="0 0 20 20">
                                                                        <AiFillDelete/>
                                                                    </svg>
                                                                    Remove Subject
                                                                </button>
                                                            </div>
                                                        </div>
                                                        <FieldArray name={`${name}.subjects`}>
                                                            {({ fields }) =>
                                                                fields.map((name, index) => (
                                                                    <div key={name} className='Field my-7'>
                                                                        <div className='flex justify-between align-middle'>
                                                                            <label className='text-center'>Subject #{index + 1}</label>
                                                                            <span
                                                                                onClick={() => fields.remove(index)}
                                                                                style={{ cursor: 'pointer' }}
                                                                            >
                                                                            ❌
                                                                            </span>
                                                                        </div>
                                                                        <div className="text-black">
                                                                            <Field
                                                                                name={`${name}.subjectName`}
                                                                                component="input"
                                                                                placeholder="Enter the Subject"
                                                                                className='w-full'
                                                                            />
                                                                        </div>
                                                                    </div>
                                                                    ))}
                                                        </FieldArray>
                                                    </div>
                                                </div>
                                            ))}
                                    </FieldArray>
                                </div>
                                {/*@ts-ignore*/}
                                <pre>{JSON.stringify(values, 0, 2)}</pre>
                            </form>
                        )
                      }
                    }/>
            </div>
        );
    }
}