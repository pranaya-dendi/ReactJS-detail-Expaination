import { CORE_CONCEPTS } from "../data";
import CoreConcepts from "../components/CoreConcepts";
import Section from "./Section";

export default function CoreConcept(){
    return(
       
    
<Section id="core-concepts">
<h2>Core-Concepts</h2>
<ul>
  {CORE_CONCEPTS.map((item)=><CoreConcepts key={item.title} {...item} />)}
{/* <CoreConcept
image={CORE_CONCEPTS[0].image}
title={CORE_CONCEPTS[0].title}
description={CORE_CONCEPTS[0].description}

/>
<CoreConcept {...CORE_CONCEPTS[1]}/>
<CoreConcept {...CORE_CONCEPTS[2]}/>
<CoreConcept {...CORE_CONCEPTS[3]}/> */}
</ul>
</Section>

    );

} 