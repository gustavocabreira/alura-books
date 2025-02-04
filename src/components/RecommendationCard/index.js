import styled from "styled-components"
import { Title } from "../Title"

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #FFF;
  border-radius: 10px;
  margin: 0 auto;
  max-width: 600px;
  padding: 25px 20px;
  justify-content: space-around;
  width: 100%;  
`

const Subtitle = styled.h4`
  color: #002F52;
  font-size: 18px;
  font-weight: bold;
  margin: 15px 0;
  text-align: center;
`

const Description = styled.p`
  max-width: 300px;
  text-align: center;
`

const Image = styled.img`
  width: 150px;
  margin: 0 auto;
`

const Button = styled.button`
  background-color: #EB9B00;
  color: #FFF;
  padding: 10px 0px;
  font-size: 16px;
  border: none;
  font-weight: 900;
  display: block;
  text-align: center;
  width: 150px;
  &:hover {
      cursor: pointer;
  }
`

const BookContainer = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const BookHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`

function RecommendationCard({ title, subtitle, description, image }) {
  return (
    <CardContainer>
      <Title
        color="#EB9B00"
        fontSize="36px"
        textAlign="center">{title}</Title>
      <BookContainer>
        <BookHeader>
          <Image src={image} />
          <div>
            <Subtitle>{subtitle}</Subtitle>
            <Description>{description}</Description>
          </div>
        </BookHeader>
        <div>
          <Button>Saiba mais</Button>
        </div>
      </BookContainer>
    </CardContainer>
  )
}

export default RecommendationCard