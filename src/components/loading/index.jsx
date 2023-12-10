import styled from 'styled-components'
import loading from '../../assets/loading.gif'

const Loading = () => {
    return (
        <Div>
            <Img src={loading} alt="Loading Gif" />
            <h1>Loading...</h1>
        </Div>
    )
}

const Div = styled.div`
    background-color: hsla(0, 1%, 57%, 0.8);
    padding: 25px;
    text-align: center;
    border-radius: 25px;
    margin-top: 50px;
`

const Img = styled.img`
    margin-bottom: 20px;
`

export { Loading }