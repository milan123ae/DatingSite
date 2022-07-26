import { useRef } from 'react';

import Card from '../ui/Card';
import classes from './NewMemberForm.module.css';

function NewMemberForm(props) {
  const fullnameInputRef = useRef();
  const imageInputRef = useRef();
  const addressInputRef = useRef();
  const descriptionInputRef = useRef();

  function submitHandler(event) {
    event.preventDefault();

    const enteredFullname = fullnameInputRef.current.value;
    const enteredImage = imageInputRef.current.value;
    const enteredAddress = addressInputRef.current.value;
    const enteredDescription = descriptionInputRef.current.value;

    const memberData = {
      fullname: enteredFullname,
      image: enteredImage,
      address: enteredAddress,
      description: enteredDescription,

    };

    props.onAddMember(memberData);
  }

  return (
    <Card>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor='fullname'>Member fullname</label>
          <input type='text' required id='fullname' ref={fullnameInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor='image'>Member Image</label>
          <input type='url' required id='image' ref={imageInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor='address'>Address</label>
          <input type='text' required id='address' ref={addressInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor='description'>Description</label>
          <textarea id='description' required rows='5' ref={descriptionInputRef}></textarea>
        </div>
        <div className={classes.actions}>
          <button>Add Member</button>
        </div>
      </form>
    </Card>
  );
}

export default NewMemberForm;