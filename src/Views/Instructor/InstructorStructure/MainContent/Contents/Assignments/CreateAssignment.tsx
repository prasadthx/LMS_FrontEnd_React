import React from "react";
import './CreateAssignment.css'
import { Form, Field } from 'react-final-form'


export class CreateAssignment extends React.Component<any, any>{
    private handleSubmit: any;
    constructor(props:any) {
        super(props);
        this.state = {
            element:<div>
                Prasad
            </div>
        }
    }

    createQuestion(){
        console.log("In Create question")
        let p=document.createElement('p')
        p.innerText='Hello';
        return(
           this.state.element
        )
    }

    render() {
        return (
            <div className="CreateAssignment mx-auto">
                <Form
                    onSubmit={()=>{console.log("Hello!")}}
                    render={({ handleSubmit }) => (
                        <form onSubmit={handleSubmit}>
                            <h2>Simple Default Input</h2>
                            <div>
                                <label>First Name</label>
                                <Field name="firstName" component="input" placeholder="First Name" />
                            </div>

                            <h2>An Arbitrary Reusable Input Component</h2>
                            <div>
                                <label>Interests</label>
                                <Field name="interests" component='input' />
                            </div>


                            <h2>Render Function</h2>
                            <Field
                                name="bio"
                                render={({ input, meta }) => (
                                    <div>
                                        <label>Bio</label>
                                        <textarea {...input} />
                                        {meta.touched && meta.error && <span>{meta.error}</span>}
                                    </div>
                                )}
                            />

                            <button type="submit">Submit</button>
                        </form>
                    )}
                />
            </div>
        );
    }
};
