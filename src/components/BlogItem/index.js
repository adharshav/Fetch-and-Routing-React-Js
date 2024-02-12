import {Link} from 'react-router-dom'
import './index.css'

const BlogItem = props => {
  const {blogData} = props
  const {id, topic, imageUrl, avatarUrl, title, author} = blogData

  return (
    <ul className="blog-item">
      <Link to={`/blogs/${id}`} className="item-link">
        <div className="item-container">
          <img className="item-image" src={imageUrl} alt={`item${id}`} />
          <div className="item-info">
            <p className="item-topic">{topic}</p>
            <h1 className="item-title">{title}</h1>
            <div className="author-info">
              <img src={avatarUrl} alt={`avatar${id}`} className="avatar" />
              <p className="author-name">{author}</p>
            </div>
          </div>
        </div>
      </Link>
    </ul>
  )
}

export default BlogItem
