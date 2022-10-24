import { FC } from "react";
import { PostInfo } from "../../types";
import Heading from "../Heading";

type PostInfoProps = {
  post: PostInfo;
}

const PostInfo: FC<PostInfoProps> = ({ post }) => {
  const { title, body } = post || {};

  return (
    !post ? (
      <Heading tag="h3" text="Empty post" />
    ) : (
      <>
        <Heading tag="h3" text={title} />
        <div>
          <p>{body}</p>
        </div>
      </>
    )
  )
};

export default PostInfo;