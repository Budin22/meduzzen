import { UserCompanies } from "../Components/User/UserCompanies";
import { UserInvites } from "../Components/User/UserInvites";
import { UserRequest } from "../Components/User/UserRequest";

export const getOptionListForUser = (userId: number, token: string) => {
  const options = new Map<string, JSX.Element>();
  options.set("companies", <UserCompanies userId={userId} token={token} />);
  options.set("invite", <UserInvites userId={userId} token={token} />);
  options.set("request", <UserRequest userId={userId} token={token} />);

  return options;
};
