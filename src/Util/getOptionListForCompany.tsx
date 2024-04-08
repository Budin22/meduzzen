import { UserRequest } from "../Components/User/UserRequest";
import { CompanyMembers } from "../Components/Company/CompanyMembers";
import { CompanyInvites } from "../Components/Company/CompanyInvites";
import { CompanyRequests } from "../Components/Company/CompanyRequests";

export const getOptionListForCompany = (companyId: number, token: string) => {
  const options = new Map<string, JSX.Element>();
  options.set(
    "members",
    <CompanyMembers companyId={companyId} token={token} />,
  );
  options.set(
    "invites",
    <CompanyInvites companyId={companyId} token={token} />,
  );
  options.set(
    "requests",
    <CompanyRequests companyId={companyId} token={token} />,
  );
  options.set("blocked", <UserRequest userId={companyId} token={token} />);
  options.set("quizzes", <UserRequest userId={companyId} token={token} />);
  options.set("last_answers", <UserRequest userId={companyId} token={token} />);
  return options;
};
