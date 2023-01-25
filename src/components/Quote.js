import styled from "styled-components"

const QuoteBox = styled.figure`
    text-align: center;
    width: 25em;
`

const QuoteText = styled.blockquote`
    text-align: center;
    font-style: italic;
    background-color: lightgray;
    padding: 2em;
    /* width: 20%; */
    border: solid red;
    border-radius: 20px;
`

const Caption = styled.figcaption`
    text-align: center;
    color: rebeccapurple;
    /* width: 20%; */

`

const Quote = ({by, source, children}) => {
    return (
    <QuoteBox>
    <QuoteText cite={source}>"{children}"</QuoteText>
    <Caption>{by}</Caption>
    </QuoteBox>
)}

export default Quote


