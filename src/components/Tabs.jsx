export default function Tabs({children, button, 
    // ButtonContainer
    ButtonContainer ="menu"  }){
    return(
        <>
        <ButtonContainer>
            {button}
        </ButtonContainer>
        {children}
        </>
    );
}