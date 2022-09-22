import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

export const Form = (props) =>
{
    const { register, handleSubmit, formState: { errors } } = useForm();
    
    const saveData = (data) =>
    {
        let num = -1;

        while(num == -1)
        {
            num = Math.random()
            props.skills.map((item) => {
                if(num != -1 && item.id == num)
                {
                    num = -1
                }
            });
        }

        const newSkill = props.skills.concat({id: num, name: data.skill})
        props.setSkills(newSkill);
    }

    const submitForm = () =>
    {
        // Get the first form with the name
        // Hopefully there is only one, but there are more, select the correct index
        var frm = document.getElementsByName('contact-form')[0];
        frm.submit(); // Submit
        frm.reset();  // Reset
        return false; // Prevent page refresh
     }
  
  return(
    <div className="container">
        <form className="form-control mt-3 p-3" onSubmit={handleSubmit(saveData)} >
            <div className="row">
                <div className="col">
                    <input className="form-control" type="text" {...register("skill", {required: true})} placeholder="Enter skill"/>
                    {errors.skill && <span className="text-danger">This is required</span>}

                    <input type="submit" value="Submit" id="btnsubmit" onclick="submitForm()"/>
                </div>
            </div>
        </form>
    </div>

  );
}

export default Form;