export const BonusValues:Bonus[] = [
    {name: "60%", value: 60, year: 0},
    { name: "70% 1. år", value: 70, year: 1 },
    { name: "70% 2. år", value: 70, year: 2 },
    { name: "70% 3. år", value: 70, year: 3 },
    { name: "75% 1. år", value: 75, year: 1 },
    { name: "75% 2. år", value: 75, year: 2 },
    { name: "75% 3. år", value: 75, year: 3 },
    { name: "75% uten bonustap", value: 75, year: 0}
];

export interface Bonus {
    name: string,
    value: number,
    year: number
}
