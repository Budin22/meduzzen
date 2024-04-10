import { UserRequest } from "../Components/User/UserRequest";
import { CompanyMembers } from "../Components/Company/CompanyMembers";
import { CompanyInvites } from "../Components/Company/CompanyInvites";
import { CompanyRequests } from "../Components/Company/CompanyRequests";
import { CompanyAdmin } from "../Components/Company/CompanyAdmin";
import { CompanyQuiz } from "../Components/Company/CompanyQuiz";

export const getOptionListForCompany = (companyId: number) => {
  const options = new Map<string, JSX.Element>();
  options.set("members", <CompanyMembers companyId={companyId} />);
  options.set("invites", <CompanyInvites companyId={companyId} />);
  options.set("admin", <CompanyAdmin companyId={companyId} />);
  options.set("requests", <CompanyRequests companyId={companyId} />);
  options.set("blocked", <UserRequest userId={companyId} />);
  options.set("quizzes", <CompanyQuiz companyId={companyId} />);
  options.set("last_answers", <UserRequest userId={companyId} />);
  return options;
};
