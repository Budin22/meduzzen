import { UserCompanies } from "../Components/User/UserCompanies";
import { UserInvites } from "../Components/User/UserInvites";
import { UserRequest } from "../Components/User/UserRequest";
import { UserAnalytic } from "../Components/analitic/UserAnalytic";

export const getOptionListForUser = (userId: number) => {
  const options = new Map<string, JSX.Element>();
  options.set("companies", <UserCompanies userId={userId} />);
  options.set("invite", <UserInvites userId={userId} />);
  options.set("request", <UserRequest userId={userId} />);
  options.set(
    "analytic",
    <UserAnalytic userId={userId} name="user analytic" />,
  );

  return options;
};
