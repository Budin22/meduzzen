import { SuccessfulRes } from "../Type/share-types";
import { axiosInstance } from "./axios-instance";
import { Action } from "../Type/actions-types";
import { generateUrlForActionWithId } from "../Util/generateUrlForActionWithId";

export const createActionFromUser = async (
  token: string,
  companyId: number,
): Promise<SuccessfulRes<Action>> => {
  const url = "/action/create_from_user/company/" + companyId + "/";
  return axiosInstance
    .get(url, { headers: { Authorization: "Bearer " + token } })
    .then((res) => res.data);
};

export const createActionFromCompany = async (
  token: string,
  companyId: number,
  userId: number,
): Promise<SuccessfulRes<Action>> => {
  const url =
    "/action/create_from_company/" + companyId + "/user/" + userId + "/";
  return axiosInstance
    .get(url, { headers: { Authorization: "Bearer " + token } })
    .then((res) => res.data);
};

export const acceptActionInvite = async (
  token: string,
  actionId: number,
): Promise<SuccessfulRes<Action>> => {
  const url = generateUrlForActionWithId(actionId) + "accept_invite/";
  return axiosInstance
    .get(url, { headers: { Authorization: "Bearer " + token } })
    .then((res) => res.data);
};

export const acceptActionRequest = async (
  token: string,
  actionId: number,
): Promise<SuccessfulRes<Action>> => {
  const url = generateUrlForActionWithId(actionId) + "accept_request/";
  return axiosInstance
    .get(url, { headers: { Authorization: "Bearer " + token } })
    .then((res) => res.data);
};

export const declineAction = async (
  token: string,
  actionId: number,
): Promise<SuccessfulRes<string>> => {
  const url = generateUrlForActionWithId(actionId) + "decline_action/";
  return axiosInstance
    .get(url, { headers: { Authorization: "Bearer " + token } })
    .then((res) => res.data);
};

export const addMemberToAdmin = async (
  token: string,
  actionId: number,
): Promise<SuccessfulRes<Action>> => {
  const url = generateUrlForActionWithId(actionId) + "add_to_admin/";
  return axiosInstance
    .get(url, { headers: { Authorization: "Bearer " + token } })
    .then((res) => res.data);
};

export const removeMemberFromAdmin = async (
  token: string,
  actionId: number,
): Promise<SuccessfulRes<Action>> => {
  const url = generateUrlForActionWithId(actionId) + "remove_from_admin/";
  return axiosInstance
    .get(url, { headers: { Authorization: "Bearer " + token } })
    .then((res) => res.data);
};

export const addMemberToBlock = async (
  token: string,
  actionId: number,
): Promise<SuccessfulRes<Action>> => {
  const url = generateUrlForActionWithId(actionId) + "add_to_block/";
  return axiosInstance
    .get(url, { headers: { Authorization: "Bearer " + token } })
    .then((res) => res.data);
};

export const removeMemberFromBlock = async (
  token: string,
  actionId: number,
): Promise<SuccessfulRes<Action>> => {
  const url = generateUrlForActionWithId(actionId) + "remove_from_block/";
  return axiosInstance
    .get(url, { headers: { Authorization: "Bearer " + token } })
    .then((res) => res.data);
};

export const leaveMemberFromCompany = async (
  token: string,
  actionId: number,
): Promise<SuccessfulRes<string>> => {
  const url = generateUrlForActionWithId(actionId) + "leave_company/";
  return axiosInstance
    .get(url, { headers: { Authorization: "Bearer " + token } })
    .then((res) => res.data);
};
