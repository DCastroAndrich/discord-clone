import { Server, Member, Profile } from "@prisma/client";

export type ServerWithMembersWithprofiles = Server & {
  members: (Member & { profile: Profile })[];
};
