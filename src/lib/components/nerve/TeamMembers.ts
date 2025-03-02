// TeamMember.ts
export interface TeamMember {
	name: string;
	role: string;
	quirk: string;
}

export const teamMembers: TeamMember[] = [
	{
		name: 'Alex Rivera',
		role: 'Design Lead',
		quirk: 'Never seen without a mechanical pencil'
	},
	{
		name: 'Jamie Chen',
		role: 'UX Researcher',
		quirk: 'Collects vintage UI patterns'
	},
	{
		name: 'Sam Taylor',
		role: 'Frontend Developer',
		quirk: 'Codes exclusively while standing'
	},
	{
		name: 'Morgan Lee',
		role: 'UI Designer',
		quirk: 'Names all prototypes after pasta shapes'
	}
];
