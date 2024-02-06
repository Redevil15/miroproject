"use client";

import { useOrganizationList } from "@clerk/nextjs";

export const List = () => {
  const { userMemberships } = useOrganizationList({
    userMemberships: {
      infinite: true,
    }
  })

  if (!userMemberships.data?.length) return null

  return (
    <ul className="space-y-4">
      {userMemberships.data?.map((membership) => (
        <p key={membership.organization.id}>
          {membership.organization.name}
        </p>
      ))}
    </ul>
  )
}