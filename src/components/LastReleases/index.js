import styled from 'styled-components'
import { books } from './data'
import { Title } from '../Title'
import RecommendationCard from '../RecommendationCard'
import AngularBook from '../../images/livro2.png'

const ReleasesContainer = styled.section`
  background: white;
`
const BooksContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-gap: 40px;
  flex-wrap: wrap;
  background-color: #eee;
  padding-top: 40px;
  padding-bottom: 40px;
`

const Book = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const BookName = styled.span`
  color: #333;
`

function LastReleases() {
  return (
    <ReleasesContainer>
      <Title
        color="#EB9B00"
        fontSize="36px"
        textAlign="center"
      >Últimos Lançamentos</Title>
      <BooksContainer>
        {books.map((book) => (
          <Book>
            <img src={book.src} alt={book.name} key={book.id} />
            <BookName>{book.name}</BookName>
          </Book>
        ))}
      </BooksContainer>
      <RecommendationCard
        title="Talvez você se interesse por..."
        subtitle="Angular - Starter Kit"
        description="Aprenda Angular de forma rápida e prática!"
        image={AngularBook}
      />
    </ReleasesContainer>
  )
}

export default LastReleases