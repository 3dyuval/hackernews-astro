import type { Comment as CommentType } from 'src/generated/graphql'

export default function CommentsSection({
  comments,
}: {
  comments: Array<CommentType>
}) {
  function buildCommentTree(
    commentArray: CommentType[],
  ): Array<Comment & { children: Array<CommentType> }> {
    const commentMap: any = {}
    const commentTree: any[] = []

    commentArray
      .sort((a, b) => {
        if (a.parent.__typename === 'Link') {
          // Comments always go after links
          // If the parent is a link,
          // it should be available in the map
          return -1
        }
        return 1
      })
      .forEach((node) => {
        const { id, body, parent } = node

        const commentNode = {
          id: String(id),
          body,
          children: [],
        }
        commentMap[commentNode.id] = commentNode

        if (parent.__typename === 'Link') {
          commentTree.push(commentNode)
        } else if (parent.__typename === 'Comment') {
          commentMap[String(parent.id)].children.push(commentNode)
        }
      })

    return commentTree
  }

  const sortedComments = buildCommentTree(comments)

  return (
    <div>
      {sortedComments.map((comment) => (
        <div key={comment.id}>
          <Comment comment={comment} />
        </div>
      ))}
    </div>
  )
}

function Comment({ comment }: { comment: Comment & { children: Comment[] } }) {
  const { body } = comment
  return (
    <div>
      <p>{body}</p>
      {comment.children && (
        <div style={{ ['margin-left']: '20px' }}>
          {/* Render child comments recursively */}
          {comment.children.map((child) => (
            <Comment key={child.id} comment={child} />
          ))}
        </div>
      )}
    </div>
  )
}
