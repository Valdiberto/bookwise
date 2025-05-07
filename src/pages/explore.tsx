import { Binoculars, MagnifyingGlass } from '@phosphor-icons/react'
import { Category } from '@prisma/client'
import { useQuery } from '@tanstack/react-query'
import { useState } from 'react'

import { BookCard, BookWithAvgRating } from '@/components/BookCard'
import { Input } from '@/components/ui/form/Input'
import { PageTitle } from '@/components/ui/PageTitle'
import { Tag } from '@/components/ui/Tag'
import { DefaultLayout } from '@/layouts/DefaultLayout'
import { api } from '@/lib/axios'
import {
  BooksContainer,
  ExploreContainer,
  TagsContainer,
} from '@/styles/pages/explore'

import { NextPageWithLayout } from './_app'

const Explore: NextPageWithLayout = () => {
  const [search, setSearch] = useState('')
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  const { data: categories } = useQuery<Category[]>({
    queryKey: ['categories'],
    queryFn: async () => {
      const { data } = await api.get('/books/categories')
      return data?.categories ?? []
    },
  })

  const { data: books } = useQuery<BookWithAvgRating[]>({
    queryKey: ['books', selectedCategory],
    queryFn: async () => {
      const { data } = await api.get('/books', {
        params: {
          category: selectedCategory,
        },
      })
      return data?.books ?? []
    },
  })

  const filteredBooks = books?.filter((book) => {
    return (
      book.name.toLowerCase().includes(search.toLowerCase()) ||
      book.author.toLowerCase().includes(search.toLowerCase())
    )
  })

  return (
    <ExploreContainer>
      <header>
        <PageTitle title="Explorar" icon={<Binoculars size={32} />} />
        <Input
          placeholder="Buscar livro ou autor"
          css={{ maxWidth: '433px' }}
          icon={<MagnifyingGlass size={20} />}
          value={search}
          onChange={({ target }) => setSearch(target.value)}
        />
      </header>
      <TagsContainer>
        <Tag
          active={selectedCategory === null}
          onClick={() => setSelectedCategory(null)}
        >
          Tudo
        </Tag>
        {categories?.map((category, i) => (
          <Tag
            key={category?.id}
            active={selectedCategory === category.id}
            onClick={() => setSelectedCategory(category.id)}
          >
            {category.name}
          </Tag>
        ))}
      </TagsContainer>
      <BooksContainer>
        {filteredBooks?.map((book) => (
          <BookCard key={book.id} book={book} size="lg" />
        ))}
      </BooksContainer>
    </ExploreContainer>
  )
}

Explore.getLayout = (page) => {
  return <DefaultLayout title="Explorar">{page}</DefaultLayout>
}

export default Explore
