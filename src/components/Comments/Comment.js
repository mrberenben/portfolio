import css from './Comment.module.css';

import { FaRegUser, FaTrashAlt } from 'react-icons/fa';

export default function Comment({ data, deleteComment }) {
  return (
    <article className={css.comment}>
      <div className={css.writer}>
        <FaRegUser />
      </div>

      <div className={css.commentInner}>
        <div className={css.writerAndCreation}>
          <span className={css.writerName}>{data.writer}</span>
          <span style={{ margin: '0 .5rem' }}>&#9679;</span>
          <span className={css.creationTime}>{data.createdAt.toLocaleString()}</span>
        </div>
        <p>{data.comment}</p>

        <button 
          type="button"
          className={css.deleteComment}
          onClick={() => deleteComment(data.id)}
        >
          <FaTrashAlt />
          <span style={{ marginLeft: '.5rem' }}>Delete Comment</span>
        </button>
      </div>
    </article>
  )
}
