import React from "react";
import './CreateTest.css'
import {Field, Form} from "react-final-form";
import arrayMutators from "final-form-arrays";
import {AiFillDelete, AiOutlinePlus, AiTwotoneSave} from "react-icons/ai";
import {FieldArray} from "react-final-form-arrays";
import {GrPowerReset} from "react-icons/gr";


class Condition extends React.Component<{ when: any, is: any, or: any, children: any }> {
    render() {
        let {when, is, or, children} = this.props;
        return (
            <Field name={when} subscription={{value: true}}>
                {({input: {value}}) => ((value === is || value===or) ? children : null)}
                {/*{({input: {value}}) => (value === or ? children : null)}*/}
            </Field>
        );
    }
}

export class CreateTest extends React.Component<any,any>{

    render() {
        
        return (
            <div className="CreateTest mx-auto">
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
                            // @ts-ignore
                            return (
                                <form onSubmit={handleSubmit}>
                                    <div className="AssignmentHeader">
                                        <div>
                                            <div className='my-2 py-2'>
                                                <label className='text-3xl'>Test Name: </label>
                                            </div>
                                            <div className='text-black text-2xl'>
                                                <Field name="assignmentName" component="input" className='text-center width-3/5' />
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
                                    <div className='Questionnaire mt-5 my-8'>
                                        <FieldArray name="questions">
                                            {({ fields }) =>
                                                fields.map((name, index) => (
                                                    <div key={name} className='Field my-7'>
                                                        <div className='flex justify-between align-middle'>
                                                            <label className='text-center'>Question #{index + 1}</label>
                                                            <span
                                                                onClick={() => fields.remove(index)}
                                                                style={{ cursor: 'pointer' }}
                                                            >
                                                             ❌
                                                             </span>
                                                        </div>
                                                        <div className="text-black">
                                                            <Field
                                                                name={`${name}.questionText`}
                                                                component="input"
                                                                placeholder="Enter the Question"
                                                                className='w-full'
                                                            />
                                                        </div>
                                                        <div className='my-2'>
                                                            <label>Question Type</label>
                                                            <Field name={`${name}.questionType`} component="select" className='text-black' defaultValue="1">
                                                                <option value="1">Subjective</option>
                                                                <option value="2">Fill In the Blanks</option>
                                                                <option value="3">Single Correct Multiple Choice</option>
                                                                <option value="4">Multiple Correct Multiple Choice</option>
                                                            </Field>
                                                        </div>
                                                        <div className='my-3 text-white'>
                                                            <Condition when={`${name}.questionType`} is={'2'} or='2'>
                                                                <label>Correct Answer</label>
                                                                <Field name={`${name}.correctAnswer`} component="input" className='text-black' required/>
                                                            </Condition>
                                                            <Condition when={`${name}.questionType`} is={'3'} or='4'>
                                                                <div className="buttons mt-3">
                                                                    <button
                                                                        type="button"
                                                                        onClick={() => push(`${name}.options`, undefined)}
                                                                        className="bg-blue-600 rounded my-2 px-2 py-1 inline-flex align-middle items-center transition duration-300 hover:bg-blue-900"
                                                                    >
                                                                        <svg className="w-4 h-4 mr-1 mt-1" xmlns="http://www.w3.org/2000/svg"
                                                                             viewBox="0 0 20 20">
                                                                            <AiOutlinePlus/>
                                                                        </svg>
                                                                        <span>
                                                                            Add Option
                                                                        </span>
                                                                    </button>
                                                                    <button
                                                                        type="button"
                                                                        onClick={() => pop(`${name}.options`)}
                                                                        className='bg-red-700 rounded my-2 px-2 py-1 inline-flex align-middle items-center transition duration-300 hover:bg-red-900'
                                                                    >
                                                                        <svg className="w-4 h-4 mr-1 mt-1" xmlns="http://www.w3.org/2000/svg"
                                                                             viewBox="0 0 20 20">
                                                                            <AiFillDelete/>
                                                                        </svg>
                                                                        Remove Option
                                                                    </button>
                                                                </div>
                                                                <div>
                                                                    <FieldArray name={`${name}.options`}>
                                                                        {({fields}) =>
                                                                            fields.map((name, index) => (
                                                                                <div>
                                                                                    <div key={name} className='Field my-7'>
                                                                                        <div className='flex justify-between align-middle'>
                                                                                            <label className='text-center'>Option #{index + 1}</label>
                                                                                            <span
                                                                                                onClick={() => fields.remove(index)}
                                                                                                style={{ cursor: 'pointer' }}
                                                                                            >
                                                                                        ❌
                                                                                        </span>
                                                                                        </div>
                                                                                        <div className="text-black">
                                                                                            <Field
                                                                                                name={`${name}.optionText`}
                                                                                                component="input"
                                                                                                placeholder="Enter the Option"
                                                                                                className='w-full'
                                                                                            />
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            ))
                                                                        }
                                                                    </FieldArray>
                                                                </div>
                                                                <label>Correct Answer</label>
                                                                <Field name={`${name}.correctAnswer`} component="input" className='text-black' required/>
                                                            </Condition>
                                                        </div>
                                                    </div>
                                                ))
                                            }
                                        </FieldArray>
                                    </div>

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
                                            Save Test
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