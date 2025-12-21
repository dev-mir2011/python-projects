import Markdown from "react-markdown"
import remarkGfm from "remark-gfm";
import './blog-post.css';
import { Link } from "react-router-dom";

function BlogPost(props) {

    const components = {
        // Headings
        h1: ({ children }) => <h1 className="md-h1 blue">{children}</h1>,
        h2: ({ children }) => <h2 className="md-h2 blue">{children}</h2>,
        h3: ({ children }) => <h3 className="md-h3 blue">{children}</h3>,
        h4: ({ children }) => <h4 className="md-h4 blue">{children}</h4>,
        h5: ({ children }) => <h5 className="md-h5 blue">{children}</h5>,
        h6: ({ children }) => <h6 className="md-h6 blue">{children}</h6>,

        // Text
        p: ({ children }) => <p className="md-p white">{children}</p>,
        strong: ({ children }) => <strong className="md-strong white">{children}</strong>,
        em: ({ children }) => <em className="md-em white">{children}</em>,
        del: ({ children }) => <del className="md-del white">{children}</del>,
        br: () => <br />,

        // Links
        a: ({ href, children }) => (
            <a href={href} className="md-a white">
            {children}
            </a>
        ),

        // Lists
        ul: ({ children }) => <ul className="md-ul white">{children}</ul>,
        ol: ({ children }) => <ol className="md-ol white">{children}</ol>,
        li: ({ children }) => <li className="md-li white">{children}</li>,

        // Code
        pre: ({ children }) => <pre className="md-pre white">{children}</pre>,
        code: ({ inline, className, children }) =>
            inline ? (
            <code className="md-code white">{children}</code>
            ) : (
            <code className={`md-code-block white ${className || ""}`}>
                {children}
            </code>
            ),

        // Blocks
        blockquote: ({ children }) => (
            <blockquote className="md-blockquote white">{children}</blockquote>
        ),
        hr: () => <hr className="md-hr" />,
        // Tables
        table: ({ children }) => (
        <table className="md-table">{children}</table>
        ),
        thead: ({ children }) => (
        <thead className="md-thead">{children}</thead>
        ),
        tbody: ({ children }) => (
        <tbody className="md-tbody">{children}</tbody>
        ),
        tr: ({ children }) => (
        <tr className="md-tr">{children}</tr>
        ),
        th: ({ children }) => (
        <th className="md-th">{children}</th>
        ),
        td: ({ children }) => (
        <td className="md-td">{children}</td>
        ),

    }


  return (
    <section className="blog-post width85">
        <div>
            <h1 className='blue'>{props.blogTitle}</h1>

            <Markdown

            components={components}
            remarkPlugins={[remarkGfm]}

            >{props.blogPostContent}</Markdown>

            <Link to={`/blogger/${props.user_id}`} className="post-authorName"><h3 className="post-authorName">— {props.authorName}</h3></Link>
        </div>
    </section>
  )
}

export default BlogPost