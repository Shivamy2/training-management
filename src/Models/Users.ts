import { Entity } from "./Entity";

export interface Users {
  data: UserDataStream[];
}

export interface UserDataStream extends Entity {
  __type: DatumType;
  guid: null;
  first_name: string;
  middle_name: null;
  last_name: string;
  role: Role;
  status: Status;
  profile_pic_url: string;
  email: string;
  bio: Bio;
  legal_name: null;
  nick_name: null;
  job_type: null;
  phone_number: string;
  alternate_phone_number: null;
  gender: null;
  birth_year: null;
  birth_month: null;
  birth_date: null;
  death_year: null;
  death_month: null;
  death_date: null;
  urls: any[];
  last_invited_to_platform_at: null;
  education: null | string;
  hometown: null | string;
  state_code: null;
  home_state_code: null;
  meta: Meta;
  is_2fa_enabled: boolean;
  default_2fa_type: null | string;
  created_at: Date;
  updated_at: Date;
  recentOccupation: RecentOccupation | null;
  recentEducation: RecentEducation | null;
  person: Person;
  isMyContact: boolean;
}

export enum DatumType {
  ListAll = "listAll",
}

export enum Bio {
  THisIsMyBio = "THis is my bio",
}

export interface Meta {
  "2fa"?: The2Fa;
  onboarding_feed?: boolean;
  onboarding_events?: boolean;
  onboarding_groups?: boolean;
  caucuses_status?: boolean;
}

export interface The2Fa {
  totp_code: boolean;
  email_code: boolean;
  phone_code: boolean;
  backup_code: boolean;
  is_number_verified?: boolean;
}

export interface Person extends Entity {
  party: string;
  job_type: null;
  chamber: null;
  created_at: Date;
  updated_at: Date;
  committees: PersonCommittees;
  issues: Issue[];
  legMember: LegMember | null;
  legOffice: LegOffice | null;
}

export interface PersonCommittees {
  caucuses: Caucus[];
  committees: CommitteesCommittees;
}

export interface Caucus extends Entity {
  parent_id: null;
  chamber_id: number;
  role: string;
  state_code: string;
  category: null | string;
  display_name: string;
  urls: Urls;
  created_at: Date;
  updated_at: Date;
  __type: string;
  memberRole: string;
}

export interface Urls {}

export interface CommitteesCommittees {
  parentCommittees: ParentCommittees;
  subCommittees: any[];
}

export interface ParentCommittees {
  money_committees: YCommittees;
  national_policy_committees: YCommittees;
  economic_policy_committees: Urls;
  special_purpose_committees: Urls;
  selects_and_commissions: Urls;
  operation_committees: Urls;
  uncategorised: { [key: string]: Caucus[] };
}

export interface YCommittees {
  "3"?: Caucus[];
}

export interface Issue extends Entity {
  code: string;
  title_one_word: string;
  title_short: string;
  title: string;
  summary: null | string;
  created_at: Date;
  updated_at: Date;
}

export interface LegMember extends Entity {
  person_id: number;
  chamber_id: number;
  state_code: string;
  role: string;
  seat_status: string;
  district_code: string;
  district_title: string;
  created_at: Date;
  updated_at: Date;
}

export interface LegOffice extends Entity {
  person_id: number;
  chamber_id: number;
  state_code: string;
  role: string;
  office_name: string;
  created_at: Date;
  updated_at: Date;
}

export interface RecentEducation extends Entity {
  __type: RecentEducationType;
  user_id: number;
  course_name_short: string;
  course_name: string;
  school_name: string;
  majors: null;
  minors: null;
  start_year: string;
  end_year: string;
  source: null | string;
  created_at: Date;
  updated_at: Date;
}

export enum RecentEducationType {
  Full = "full",
}

export interface RecentOccupation extends Entity {
  user_id: number;
  title: string;
  company: string;
  start_year: string;
  end_year: string;
  source: null;
  source_id: null;
  source_updated_at: null;
  created_at: Date;
  updated_at: Date;
  committee: null;
  legMember: null;
  legOffice: null;
}

export enum Role {
  Staff = "staff",
}

export enum Status {
  Claimed = "claimed",
}
