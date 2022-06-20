import React, { useState } from "react";
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons//Add';
const CreateNote = (props) =>
{
    const [expand,setExpand] = useState(false);
    const [note,setNote] = useState({
        title:'',
        content:'',
    });

    const InputEvent = (event) =>{

        // const value = event.target.value;
        // const name = even t.target.name;

        const {name,value} = event.target;

        setNote((prevData)=>{
            return {
                ...prevData,
                [name] : value,
            }
        });
    };

    const addEvent = () => {
        props.passNote(note);
        setNote({
            title:'',
            content:'',
        });
    };

    const expandIt = () =>{
        setExpand(true);
    }

    const btNormal = () =>{
        setExpand(false);
    }

    return(
        <>
            <div className="main_note">
               <form>

              { expand?
                <input 
                name="title"
                type='text' 
                value= {note.title}
                onChange={InputEvent} 
                placeholder='Title' 
                autoComplete='off' /> : null}

                <textarea 
                rows="4" 
                column="" 
                name="content"
                value= {note.content}
                onChange= {InputEvent}
                placeholder='Write your note here...' 
                onClick={expandIt}
                onDoubleClick = {btNormal}
                />
                {expand?
                <Button onClick={addEvent}>
                    <AddIcon className='plus_sign'></AddIcon>
                </Button> : null}
               </form> 
            </div>
        </>
    )
}

export default CreateNote;