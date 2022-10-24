import { FC } from "react";
import { UserInfo } from "../../types";
import Heading from "../Heading";

type UserInfoProps = {
  user: UserInfo;
}

const UserInfo: FC<UserInfoProps> = ({ user }) => {
  const { name, email, adress } = user || {}
  const { street, suite, city, zipcode } = adress || {};

  return (
    !user ? (
      <Heading tag="h3" text="Empty contact" />
    ) : (
      <>
        <Heading tag="h3" text={name} />
        <div>
          <p><strong>Email: </strong>{email}</p>
          <p><strong>Adress: </strong>{`${street}, ${suite}, ${city}, ${zipcode}`}</p>
        </div>
      </>
    )
  )
};

export default UserInfo;