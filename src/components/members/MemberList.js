import MemberItem from './MemberItem';
import classes from './MemberList.module.css';

function MemberList(props) {
  return (
    <ul className={classes.list}>
      {props.members.map((member) => (
        <MemberItem
          key={member.id}
          id={member.id}
          image={member.image}
          fullname={member.fullname}
          address={member.address}
          description={member.description}
        />
      ))}
    </ul>
  );
}

export default MemberList;