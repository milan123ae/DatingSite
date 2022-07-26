import MemberList from '../components/members/MemberList';
import { useState, useEffect } from 'react';

function AllMembers() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedMembers, setLoadedMembers] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    fetch('https://react-getting-started-b109f-default-rtdb.firebaseio.com/members.json'
    ).then(response => {
      return response.json();
    }).then(data => {
      const members = [];

      for (const key in data) {
        const member = {
          id: key,
          ...data[key]
        };

        members.push(member);
      }
        setIsLoading(false);
        setLoadedMembers(members);
    });
  }, []);


  if (isLoading) {
    return(
      <section>
        <p>Loading...</p>
      </section>
    );
  }

    return (
        <section>
            <h1>All Members</h1>
            <MemberList members={loadedMembers}/>
        </section>
    );
}

export default AllMembers;