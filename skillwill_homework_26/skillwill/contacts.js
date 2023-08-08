const NUM_CONTACTS = 100

const firstNames = [
    "Liam", "Olivia", "Noah", "Emma", "Sophia", "Ava", "Isabella", "Mia", "Elijah", "Oliver",
    "James", "William", "Benjamin", "Lucas", "Henry", "Alexander", "Sebastian", "Ethan", "Michael", "Daniel",
    "Matthew", "Logan", "Jackson", "David", "Carter", "Joseph", "Samuel", "Emily", "Charlotte", "Amelia",
    "Harper", "Evelyn", "Abigail", "Elizabeth", "Sofia", "Avery", "Ella", "Scarlett", "Grace", "Victoria",
    "Riley", "Chloe", "Zoey", "Lily", "Lillian", "Nora", "Aria", "Hannah", "Layla", "Ella",
    "John", "Robert", "William", "James", "Charles", "George", "Frank", "Joseph", "Thomas", "Henry",
    "Edward", "Harry", "Paul", "David", "Walter", "Richard", "Jacob", "Noah", "Oscar", "Andrew",
    "Daniel", "Henry", "William", "Alexander", "James", "John", "Robert", "Joseph", "Charles", "Thomas",
    "Michael", "Mary", "Patricia", "Jennifer", "Linda", "Elizabeth", "Barbara", "Susan", "Jessica", "Sarah",
    "Karen", "Nancy", "Margaret", "Lisa", "Betty", "Dorothy", "Sandra", "Ashley", "Kimberly", "Donna"
];

const lastNames = [
    "Smith", "Johnson", "Williams", "Jones", "Brown", "Davis", "Miller", "Wilson", "Moore", "Taylor",
    "Anderson", "Thomas", "Jackson", "White", "Harris", "Martin", "Thompson", "Garcia", "Martinez", "Robinson",
    "Clark", "Rodriguez", "Lewis", "Lee", "Walker", "Hall", "Allen", "Young", "King", "Wright",
    "Hill", "Turner", "Parker", "Collins", "Cook", "Ross", "Green", "Bell", "Adams", "Baker",
    "Edwards", "James", "Scott", "Thomas", "Stewart", "Mitchell", "Cooper", "Cox", "Morgan", "Murphy",
    "Gray", "Rogers", "Peterson", "Bennett", "Jameson", "Reed", "Wood", "Foster", "Diaz", "Hayes"
];

const rand= (max, min = 0) =>
Math.floor(Math.random() * (max - min + 1)) + min;

const generateName = () =>
`${firstNames [rand (firstNames.length - 1)]} ${
lastNames [rand (lastNames.length - 1)]
}`;

const generatePhone= () =>
`+995-${rand (599 - 500)} - ${String (rand (99)).padStart (2, "0")} - ${String(
rand(99)
).padStart(2, "0")}-${String(rand(99)).padStart (2, "0")}`

const createContact = () => ({
name: generateName(),
phone: generatePhone(),
});

export const compareNames = (contact1, contact2) =>
 contact1.name.localeCompare(contact2.name)

 const addKeys = (val, key) => ({key, ...val });

 export default Array.from({ length: NUM_CONTACTS}, createContact).map(addKeys);