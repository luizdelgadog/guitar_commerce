import styled from 'styled-components';

export const ButtonContainer = styled.button`
text-transform: capitalize
font-size:  1.4rem;
background: transparent;
border: 0.1rem solid var(--lightRed);
border-color: ${props => props.cart ? "var(--mainYellow)" : "var(--lightRed)"};
color: ${prop => prop.cart ? "var(--mainYellow)" : "var(--lightRed)"};
border-radius:  0.5rem;
cursor: pointer;
margin: 0.2rem 0.5rem 0.2rem 0;
transition: all 0.2s ease-in-out;
&:hover{
    background: ${prop => prop.cart ? "var(--mainYellow)" : "var(--lightRed)"};
    color: var(--mainDark);
}
&:focus{
    outline:none;
}
`;