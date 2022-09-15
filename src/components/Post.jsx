import { format, formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import { useState } from 'react'
import { Avatar } from './Avatar'
import { Comment } from './Comment'

import styles from './Post.module.css'

export function Post ({ author, content, publishedAt }) {
  const [comments, setComments] = useState([
    'Post muito bacana, hein?'
  ]);
  const [newCommentText, setNewCommentText] = useState('');

  const isNewCommentEmpty = newCommentText.length === 0;

  const publishedDateFormatted = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {
    locale: ptBR,
  })

  const publishedDaterelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true,
  })

  function handleCreateNewComment () {
    event.preventDefault()

    setComments([...comments, newCommentText])
    setNewCommentText('')
  }

  function handleNewCommentChange () {
    event.target.setCustomValidity('')
    setNewCommentText(event.target.value);
  }

  function handleNewCommentInvalid () {
    event.target.setCustomValidity('Esse campo é obrigatório!')
  }

  function deleteComment (commentToDelete) {
    const commentWithDeletedOne = comments.filter(comment => {
      return comment !== commentToDelete
    })

    setComments(commentWithDeletedOne)
  }

  return (
    <>
      <article className={styles.post}>
        <header>
          <div className={styles.author}>
            <Avatar src={author.avatarUrl} />
            <div className={styles.authorInfo}>
              <strong>{author.name}</strong>
              <span>{author.role}</span>
            </div>
          </div>

          <time title={publishedDateFormatted} dateTime={publishedAt.toISOString()}>{publishedDaterelativeToNow}</time>
        </header>
        <div className={styles.content}>
          {content.map(item => {
            if (item.type === 'paragraph') {
              return <p key={item.content}>{item.content}</p>;
            } else if (item.type === 'link') {
              return <p key={item.content}>👉 <a href='#'>{item.content}</a></p>
            }
          })}

          <p>
            <a href='#'>#novoprojeto </a>
            <a href='#'>#nlw </a>
            <a href='#'>#rocketseat</a>
          </p>
        </div>
        <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
          <strong>Deixe seu feedback</strong>
          <textarea
            name='comment'
            placeholder='Deixe um comentário'
            value={newCommentText}
            onChange={handleNewCommentChange}
            onInvalid={handleNewCommentInvalid}
            required
          />
          <footer>
            <button type='submit' disabled={isNewCommentEmpty}>
              Publicar
            </button>
          </footer>
        </form>

        <div className={styles.commentList}>
          {comments.map(comment => {
            return (
              <Comment
                key={comment}
                content={comment}
                onDeleteComment={deleteComment}
              />
            )
          }
          )}
        </div>
      </article>
    </>
  )
}