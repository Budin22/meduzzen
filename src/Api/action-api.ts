import { SuccessfulRes } from "../Type/share-types";
import { axiosInstanceWithToken } from "./axios-instance-with-token";
import { Action } from "../Type/actions-types";
import { generateUrlForActionWithId } from "../Util/generateUrlForActionWithId";

export const createActionFromUser = async (
  companyId: number,
): Promise<SuccessfulRes<Action>> => {
  const url = "/action/create_from_user/company/" + companyId + "/";
  return axiosInstanceWithToken.get(url).then((res) => res.data);
};

export const createActionFromCompany = async (
  companyId: number,
  userId: number,
): Promise<SuccessfulRes<Action>> => {
  const url =
    "/action/create_from_company/" + companyId + "/user/" + userId + "/";
  return axiosInstanceWithToken.get(url).then((res) => res.data);
};

export const acceptActionInvite = async (
  actionId: number,
): Promise<SuccessfulRes<Action>> => {
  const url = generateUrlForActionWithId(actionId) + "accept_invite/";
  return axiosInstanceWithToken.get(url).then((res) => res.data);
};

export const acceptActionRequest = async (
  actionId: number,
): Promise<SuccessfulRes<Action>> => {
  const url = generateUrlForActionWithId(actionId) + "accept_request/";
  return axiosInstanceWithToken.get(url).then((res) => res.data);
};

export const declineAction = async (
  actionId: number,
): Promise<SuccessfulRes<string>> => {
  const url = generateUrlForActionWithId(actionId) + "decline_action/";
  return axiosInstanceWithToken.get(url).then((res) => res.data);
};

export const addMemberToAdmin = async (
  actionId: number,
): Promise<SuccessfulRes<Action>> => {
  const url = generateUrlForActionWithId(actionId) + "add_to_admin/";
  return axiosInstanceWithToken.get(url).then((res) => res.data);
};

export const removeMemberFromAdmin = async (
  actionId: number,
): Promise<SuccessfulRes<Action>> => {
  const url = generateUrlForActionWithId(actionId) + "remove_from_admin/";
  return axiosInstanceWithToken.get(url).then((res) => res.data);
};

export const addMemberToBlock = async (
  actionId: number,
): Promise<SuccessfulRes<Action>> => {
  const url = generateUrlForActionWithId(actionId) + "add_to_block/";
  return axiosInstanceWithToken.get(url).then((res) => res.data);
};

export const removeMemberFromBlock = async (
  actionId: number,
): Promise<SuccessfulRes<Action>> => {
  const url = generateUrlForActionWithId(actionId) + "remove_from_block/";
  return axiosInstanceWithToken.get(url).then((res) => res.data);
};

export const leaveMemberFromCompany = async (
  actionId: number,
): Promise<SuccessfulRes<string>> => {
  const url = generateUrlForActionWithId(actionId) + "leave_company/";
  return axiosInstanceWithToken.get(url).then((res) => res.data);
};
