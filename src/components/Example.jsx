import TabButton from "./TabButton";
import { useState } from "react";
import { EXAMPLES } from "../data";
import Tabs from "./Tabs";

export default function Example(){

    const [selectButton, setSelectButton] = useState('');

  function HandleClick(selected){
    setSelectButton(selected);
  }

  let tabContent = <p>Please select the Tab.</p>

  if(selectButton){
    tabContent=(<div id="tab-content">
        <h3> {EXAMPLES[selectButton].title} </h3>
        <p>{EXAMPLES[selectButton].description}</p>
        <pre>{EXAMPLES[selectButton].code}</pre>
      </div>);
  }

    return(
        <>
        <section id="examples">
        <h2>Examples</h2>
      
        <Tabs
        //  ButtonContainer="menu"
        button={<>
          <TabButton onSelected={selectButton === 'components'} onClick={()=>HandleClick('components')}>Component</TabButton>
                <TabButton onSelected={selectButton === 'jsx'} onClick={()=>HandleClick('jsx')}>JSX</TabButton>
                <TabButton onSelected={selectButton === 'props'} onClick={()=>HandleClick('props')}>Props</TabButton>
                <TabButton onSelected={selectButton === 'state'} onClick={()=>HandleClick('state')}>State</TabButton>
          </>}>
          {tabContent}
          </Tabs>
                
                
              </section>
             
              </>
    );
}