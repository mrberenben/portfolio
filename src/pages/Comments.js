import { Fragment, useRef, useState } from 'react';
import css from './Comments.module.css';

// components
import Banner from '../components/global/Banner';
import Comment from '../components/Comments/Comment';

// layout
import Section from '../layout/Section';
import Container from '../layout/Container';

// utils
import { createUUID } from '../utils';

const COMMENTS = [
  { id: createUUID(), writer: 'Jesse Pinkman', createdAt: new Date("2021-11-10T17:46:53.677"), comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed venenatis cursus libero.' },
  { id: createUUID(), writer: 'Jules Winnfield', createdAt: new Date("2021-11-04T12:10:53.677"), comment: 'Proin at risus eget urna ultrices posuere eget eget odio. Nunc quis turpis non lacus vehicula scelerisque nec nec turpis. Pellentesque vel massa mauris.' },
  { id: createUUID(), writer: 'Robin Scherbatsky', createdAt: new Date("2021-11-02T19:30:53.677"), comment: 'Nullam pharetra lobortis arcu eget elementum. Aenean risus felis, luctus eu placerat at, mollis ut ligula. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nam posuere mauris non sem aliquam, ut tempus dolor mattis. Integer id ultricies odio.' },
]

export default function Comments() {
  const [comments, setComments] = useState(COMMENTS);
  const writerNameRef = useRef(null);
  const writerMessageRef = useRef(null);

  const addComment = () => {
    if(writerNameRef.current && writerMessageRef.current) {
      if(writerNameRef.current.value.length && writerMessageRef.current.value.length) {
        const comment = { 
          id: createUUID(), 
          writer: writerNameRef.current.value,
          comment: writerMessageRef.current.value,
          createdAt: new Date()
        }
  
        setComments([...comments, comment]);

        writerNameRef.current.value = '';
        writerMessageRef.current.value = '';
      }
    }
  }

  const deleteComment = id => {
    const commentsAfterDeleting = comments.filter(comment => comment.id !== id);
    setComments(commentsAfterDeleting);
  }

  return (
    <Fragment>
      <Banner title="Comments" />

      <Container>
        <Section title="Comments">
          <p>Here are comments written about me. You can write or delete a comment about me.</p>

          { comments.length 
            ? (<div className={css.comments}>
                { comments.sort((a, b) => b.createdAt - a.createdAt).map(comment => <Comment key={comment.id} data={comment} deleteComment={deleteComment} />) }
              </div>)  
            : <div className={css.noComments}>No comments yet.</div>
          }
          
        </Section>

        <Section title="Create comment">
          <div className={css.createComment}>
            <div className={css.formRow}>
              <label htmlFor="writerName" className={css.formLabel}>Full Name</label>
              <input ref={writerNameRef} id="writerName" type="text" className={css.formInput} minLength={3} required />
            </div>
            <div className={css.formRow}>
              <label htmlFor="writerMessage" className={css.formLabel}>Your Message</label>
              <textarea ref={writerMessageRef} id="writerMessage" className={css.formTextArea} required></textarea>
            </div>

            <button 
              type="button"
              className="button button-primary"
              onClick={() => addComment()}  
            >Send</button>
          </div>
        </Section>
      </Container>
    </Fragment>
  )
}
