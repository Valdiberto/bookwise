import { Check, X } from '@phosphor-icons/react'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useSession } from 'next-auth/react'
import { FormEvent, useState } from 'react'

import { api } from '@/lib/axios'

import { RatingStars } from '../RatingStars'
import { Heading } from '../Typography'
import { ActionIcon } from '../ui/ActionIcon'
import { Avatar } from '../ui/Avatar'
import { TextArea } from '../ui/form/TextArea'
import {
  ActionsContainer,
  Container,
  FormContainer,
  UserDetails,
} from './styles'

type RatingFormProps = {
  onCancel: () => void
  bookId: string
}

export const ReviewForm = ({ onCancel, bookId }: RatingFormProps) => {
  const { data: session } = useSession()

  const user = session?.user

  const [description, setDescription] = useState('')
  const [currentRate, setCurrentRate] = useState(0)

  const submitDisabled = !description.trim() || !currentRate

  const queryClient = useQueryClient()

  const { mutateAsync: handleRate } = useMutation({
    mutationFn: async () => {
      await api.post(`/books/${bookId}/rate`, {
        description,
        rate: currentRate,
      })
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['book', bookId] })
      queryClient.invalidateQueries({ queryKey: ['books'] })
      onCancel()
    },
  })

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault()

    if (submitDisabled) return
    await handleRate()
  }

  return (
    <Container>
      {user && (
        <UserDetails>
          <section>
            <Avatar size="md" src={user.avatar_url || ''} alt={user.name} />
            <Heading size="xs">{user.name}</Heading>
          </section>
          <RatingStars
            size="lg"
            rating={currentRate}
            setRating={setCurrentRate}
          />
        </UserDetails>
      )}

      <FormContainer onSubmit={handleSubmit}>
        <TextArea
          placeholder="Escreva sua avaliação"
          maxLength={450}
          value={description}
          onChange={({ target }) => setDescription(target.value)}
        />
        <ActionsContainer>
          <ActionIcon
            type="button"
            onClick={onCancel}
            iconColor="purple100"
            icon={<X />}
          />
          <ActionIcon
            iconColor="green100"
            icon={<Check />}
            disabled={submitDisabled}
          />
        </ActionsContainer>
      </FormContainer>
    </Container>
  )
}
