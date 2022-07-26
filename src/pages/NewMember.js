import NewMemberForm from "../components/members/NewMemberForm";
import { useNavigate } from 'react-router-dom';

function NewMember() {
    const navigate = useNavigate();
   
    function addMemberHandler(memberData) {
        fetch('https://react-getting-started-b109f-default-rtdb.firebaseio.com/members.json' ,
        {
            method: 'POST',
            body: JSON.stringify(memberData),
            headers: {
                'Content-Type': 'application/json'
            }
        }
        ).then(() => {
            navigate('/', {replace: true });
        });
    }

    return <section>
        <h1>All New Member page</h1>
        <NewMemberForm onAddMember={addMemberHandler} />
        </section>;
}

export default NewMember;