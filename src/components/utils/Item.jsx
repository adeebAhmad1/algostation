import React, { useState } from "react";

const Item = ({question,answer}) => {
  const [open,setOpen] = useState(true)
  return (
    <div className="faq_item" >
      <div className="question" onClick={()=>setOpen(o=>!o)}>
        {question}
      </div>
      {open? <div className="answer text-white bg-dark">
        {answer}
      </div>: ""}
    </div>
  );
};

export default Item;
