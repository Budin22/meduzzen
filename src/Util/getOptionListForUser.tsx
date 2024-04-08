import { UserCompanies } from "../Components/User/UserCompanies";
import { UserInvites } from "../Components/User/UserInvites";
import { UserRequest } from "../Components/User/UserRequest";

export const getOptionListForUser = (userId: number) => {
  const options = new Map<string, JSX.Element>();
  options.set("companies", <UserCompanies userId={userId} />);
  options.set("invite", <UserInvites userId={userId} />);
  options.set("request", <UserRequest userId={userId} />);

  return options;
};
