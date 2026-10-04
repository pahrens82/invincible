
const TYPES = {
    weapon: "Weapon",
    armor: "Armor",
    misc: "Miscellaneous",
};

const WEAPONS = [
    {
        type: TYPES.weapon,
        name: "Blunt melee weapon (nightstick, baseball bat, etc.",
        bonus: "+1",
        damage: "2",
        range: "-",
        cost: "1",
        features: "",
    },
    {
        type: TYPES.weapon,
        name: "Sharp melee weapon (knife, machete, katana, etc.",
        bonus: "+1",
        damage: "2",
        range: "-",
        cost: "1",
        features: "Sharp damage",
    },
    {
        type: TYPES.weapon,
        name: "Pepper Spray",
        bonus: "+2",
        damage: "1",
        range: "0/0",
        cost: "1",
        features: "STUN effect (page 88)",
    },
    {
        type: TYPES.weapon,
        name: "Taser",
        bonus: "+1",
        damage: "2",
        range: "0/0",
        cost: "2",
        features: "STUN effect (page 88)",
    },
    {
        type: TYPES.weapon,
        name: "Handgun",
        bonus: "+1",
        damage: "2",
        range: "0/1",
        cost: "2",
        features: "Sharp damage",
    },
    {
        type: TYPES.weapon,
        name: "Shotgun",
        bonus: "+2",
        damage: "2",
        range: "0/1",
        cost: "3",
        features: "",
    },
    {
        type: TYPES.weapon,
        name: "Submachine Gun",
        bonus: "+1",
        damage: "2",
        range: "0/2",
        cost: "3R",
        features: "Full auto, sharp damage",
    },
    {
        type: TYPES.weapon,
        name: "Hunting Rifle",
        bonus: "+1",
        damage: "3",
        range: "1/8",
        cost: "3",
        features: "Sharp damage",
    },
    {
        type: TYPES.weapon,
        name: "Assault Rifle",
        bonus: "+1",
        damage: "3",
        range: "0/4",
        cost: "4R",
        features: "Full auto, sharp damage",
    },
    {
        type: TYPES.weapon,
        name: "Sniper Rifle",
        bonus: "+2",
        damage: "3",
        range: "1/10",
        cost: "4R",
        features: "Sharp damage, no movement",
    },
    {
        type: TYPES.weapon,
        name: "Plasma Rifle",
        bonus: "2",
        damage: "3",
        range: "0/3",
        cost: "6R",
        features: "Full auto",
    },
    {
        type: TYPES.weapon,
        name: "Hand Grenade",
        bonus: "-",
        damage: "3",
        range: "0/1",
        cost: "2R",
        features: "Single use, area effect",
    },
    {
        type: TYPES.weapon,
        name: "Smoke Grenade",
        bonus: "-",
        damage: "-",
        range: "0/1",
        cost: "2",
        features: "Blocks vision in target zone, single use",
    },
    {
        type: TYPES.weapon,
        name: "Machinegun",
        bonus: "+2",
        damage: "3",
        range: "1/6",
        cost: "5R",
        features: "Full auto, sharp damage, no movement",
    },
    {
        type: TYPES.weapon,
        name: "Rocket Launcher",
        bonus: "-",
        damage: "5",
        range: "1/4",
        cost: "4R",
        features: "Single use, area effect",
    },
    {
        type: TYPES.weapon,
        name: "Cruise Missile",
        bonus: "-",
        damage: "9",
        range: "600 miles",
        cost: "7R",
        features: "Area effect, mounted, single use",
    },
    {
        type: TYPES.weapon,
        name: "Nuclear Missile",
        bonus: "-",
        damage: "12",
        range: "6,000 miles",
        cost: "8R",
        features: "Area effect (1 mile), mounted, single use",
    },
];

const ARMOR = [
    {
        name: "Kevlar Vest",
        rating: "1",
        comment: "Standard law enforcement agency gear.",
        cost: "2",
    },
    {
        name: "Riot Gear",
        rating: "2",
        comment: "Heavy duty street defense gear, -2 on Intuition rolls.",
        cost: "3R",
    },
    {
        name: "Archaic Armor",
        rating: "2",
        comment: "Historical chainmail or plate, -2 on Agility and Intuition rolls.",
        cost: "3",
    },
];

const OTHER = [
    {
        name: "Tools, General",
        bonus: "+1",
        comment: "Can be used for any type of repairs",
        cost: "1",
    },
    {
        name: "Tools, Armor",
        bonus: "+2",
        comment: "Can be used to repair costumes and armor",
        cost: "2",
    },
    {
        name: "Tools, Weapons",
        bonus: "+2",
        comment: "Can be used to repair weapons",
        cost: "2",
    },
    {
        name: "Tools, Ground Vehicle",
        bonus: "+2",
        comment: "Can be used to repair ground vehicles",
        cost: "2",
    },
    {
        name: "Tools, Aerial Vehicles",
        bonus: "+2",
        comment: "Can be used to repair aerial vehicles",
        cost: "3",
    },
    {
        name: "First Aid Kit",
        bonus: "+1",
        comment: "Used to stabilize a dying character",
        cost: "2",
    },
    {
        name: "Medical Instruments",
        bonus: "+2",
        comment: "Used to stabilize a dying character. Requires the Medic talent.",
        cost: "3",
    },
    {
        name: "Laboratory Instruments",
        bonus: "+2",
        comment: "Used to perform scientific experiments or other precision lab work (REASON roll)",
        cost: "4",
    },
    {
        name: "Comic Book Collection",
        bonus: "-",
        comment: "Once per day, you can spend a few minutes reading it to recover 1 point of Resolve",
        cost: "1",
    },
    {
        name: "Handcuffs",
        bonus: "-",
        comment: "Breaking out requires a STRENGTH or AGILITY roll with -2 dice",
        cost: "1",
    },
    {
        name: "Electronic Restraints",
        bonus: "-",
        comment: "Breaking out requires a STRENGTH or AGILITY roll with -3 dice",
        cost: "2",
    },
    {
        name: "Nano Tracer",
        bonus: "-",
        comment: "Tracks a target unless detected and removed (INTUITION roll with -3 dice)",
        cost: "3",
    },
    {
        name: "Drone, Personal",
        bonus: "+2",
        comment: "Remotely-operated drone capable of observation (INTUITION roll)",
        cost: "3",
    },
    {
        name: "Computer",
        bonus: "-",
        comment: "A standard computer - allows access to the internet and stored data",
        cost: "3",
    },
    {
        name: "Supercomputer",
        bonus: "+2",
        comment: "A powerful workstation that can't be carried with you",
        cost: "5",
    },
    {
        name: "Compact Mechanical Gills (C.M.G.)",
        bonus: "-",
        comment: "Allows you to breathe normally while underwear",
        cost: "4",
    },
    {
        name: "Binoculars",
        bonus: "+2",
        comment: "Used for INTUITION rolls to spot something at a distance",
        cost: "2",
    },
];

const MISC = [
    "Decent meal, knife",
    "Fine meal, mobile phone, handgun, Kevlar vest, hand grenade",
    "Motorcycle, shotgun, hunting rifle",
    "Car, motorboat, sniper rifle (R), assault rifle (R)",
    "Truck, van, SUV, machinegun (R)",
    "Helicopter, light airplane, plasma rifle",
    "Luxury yacht, battle tank (R), private jet, fighter jet (R)",
    "Major corporation, spaceship, space station, nuclear missile (R)",
];


export const Gear = () => {
    return (
        <section className={"bg-white px-3 pb-2"}>
            <h1>Gear</h1>
            <details className={"border rounded px-2 py-1 mb-2"}>
                <summary className={"h3"}>Weapons</summary>
                <table className={"table table-sm table-striped flex-item flex-grow-2"}>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Bonus</th>
                            <th>Damage</th>
                            <th>Range</th>
                            <th>Cost</th>
                            <th>Features</th>                            
                        </tr>
                    </thead>
                    <tbody>
                        {WEAPONS.map((item, index) => {
                            return <tr key={item.name}><td>{item.name}</td><td>{item.bonus}</td><td>{item.damage}</td><td>{item.range}</td><td>{item.cost}</td><td>{item.features}</td></tr>
                        })}
                    </tbody>
                </table>
                <ul>
                    <li><strong>Single Use</strong>: The weapon can only be used once, and is then discarded.</li>
                    <li><strong>Area Effect</strong>: If you hit, everyone in the target zone (or a larger area, if so indicated) takes base Damage. Any stunts must be distributed separately among your targets. Each target dodges individually, and must declare this before your roll. If you fail your attack, no one is hurt.</li>
                    <li><strong>Full Auto</strong>: Choose a number of targets to shoot at in the same zone. For each target beyond the first, you -1 die. If you hit, apply the effects on your targets as for Area Effect above.</li>
                    <li><strong>Sharp Damage</strong>: The weapon inflicts Sharp Damage, which lets the attacker use extra successes to trigger the Deadly Hit stunt (Page 96).</li>
                    <li><strong>No Movement</strong>: The shooter cannot move in the same round as firing the weapon.</li>
                    <li><strong>Mounted</strong>: The weapon is mounted on a vehicle or building and cannot be carried.</li>
                </ul>
            </details>
            <details className={"border rounded px-2 py-1 mb-2"}>
                <summary className={"h3"}>Armor</summary>
                <table className={"table table-sm table-striped"}>
                    <thead>
                        <tr>
                            <th>Item</th>
                            <th>Features</th>
                            <th>Cost</th>
                        </tr>
                    </thead>
                    <tbody>
                        {ARMOR.map((item, index) => {
                            return <tr key={item.name}><td>{item.name}</td><td>{item.comment}</td><td>{item.cost}</td></tr>
                        })}
                    </tbody>
                </table>
            </details>
            <details className={"border rounded px-2 py-1 mb-2"}>
                <summary className={"h3"}>Other</summary>
                <table className={"table table-sm table-striped"}>
                    <thead>
                        <tr>
                            <th>Item</th>
                            <th>Bonus</th>
                            <th>Features</th>
                            <th>Cost</th>
                        </tr>
                    </thead>
                    <tbody>
                        {OTHER.map((item, index) => {
                            return <tr key={item.name}><td>{item.name}</td><td>{item.bonus}</td><td>{item.cost}</td><td>{item.comment}</td></tr>
                        })}
                    </tbody>
                </table>
            </details>
            <details className={"border rounded px-2 py-1 mb-2"}>
                <summary className={"h3"}>Misc</summary>
                <table className={"table table-sm table-striped"}>
                    <thead>
                        <tr>
                            <th>Cost</th>
                            <th>Items</th>
                        </tr>
                    </thead>
                    <tbody>
                        {MISC.map((item, index) => {
                            return <tr key={item}><td>{index + 1}</td><td>{item}</td></tr>
                        })}
                    </tbody>
                </table>
            </details>
        </section>
    );
};
