import React from 'react';

const EditExpensePage = (props) =>{
  return(
    <div>
      Editing expense with the ID of {props.match.params.id}
    </div>
  );
};

export default EditExpensePage;