import styled from 'styled-components'
import { books } from './data'

const ReleasesContainer = styled.section`
  background: white;
`

const Title = styled.h2`
  color: orange;
  font-size: 36px;
  text-align: center;
  width: 100%;
  text-transform: uppercase;
  margin: 0;
  padding: 30px 0;
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
      <Title>Últimos Lançamentos</Title>
      <BooksContainer>
        {books.map((book) => (
          <Book>
            <img src={book.src} alt={book.name} key={book.id} />
            <BookName>{book.name}</BookName>
          </Book>
        ))}
      </BooksContainer>
    </ReleasesContainer>
  )
}

export default LastReleases