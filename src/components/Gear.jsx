
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
        features: "-",
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
        features: "-",
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
        bonus: "+2",
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
                <summary className={"h5 mb-1"}>
                    Purchasing Gear
                </summary>
                <p>Beyond reflecting your general standard of living, your Resources score (page 31) can be used to make purchases of specific items that you need, using personal savings, wealthy patronage, or powerful connections. Don't use these rules for everyday purchases - those are included in your standard of living.</p>
                <p><strong>Item Cost:</strong> Items have a Cost rating. The lists for weapons, armor, vehicles and general gear in this chapter indicate their Cost, and you can find a price list for common items below. For items not included in the lists, the GM can make a judgment call.</p>
                <p><strong>Making A Purchase:</strong> When you need to buy a specific item, compare your Resources rating to the Cost rating of the item.</p>
                <ul>
                    <li>If your Resources rating is higher than the Cost, no roll is needed - you can easily purchase the item, and your Resources rating is not affected.</li>
                    <li>If your Resources score is lower than the Cost, there is no way you can afford the item unless you get a loan (below).</li>
                    <li>If your Resources are equal to the Cost, roll a number of dice equal to your Resources. You need to roll at least one 6 to afford the item. This roll cannot be pushed (page 82).</li>
                    <li>If you succeed, you can purchase the item.</li>
                    <li>If you fail, you can make a PRESENCE roll to barter with the seller if the GM finds this  feasible. If this roll is successful, you complete the purchase as per above.</li>
                    <li>If both rolls fail, you cannot complete the purchase, and you cannot try to purchase the same item again until a few days have passed.</li>
                    <li>Note that even if buying an item is fairly easy and straightforward in terms of the rules, it will typically take some time - at the very least a few minutes, and often a few hours or even days. This can generally only be done between action scenes and can even be used as a basis for a social scene.</li>
                </ul>
                <p><strong>Pooling Your Resources:</strong> When you make a Resources roll to complete a purchase, other heroes can chip in, adding a number of dice equal to their Resources score to the roll.</p>
                <p><strong>Getting A Loan:</strong> If you get a loan, your Resources score can count as 1 or even 2 points higher than normal for one specific purchase. After the purchase (even if no roll was needed), your Resources score will be reduced 1 step for a few weeks (for a 1-point loan) or for a few months (for a 2-point loan). Typically, heroes with Resources 2 or 3 need the Streetwise talent to get a loan, and heroes with Resources 1 cannot get loans at all.</p>
                <p><strong>Restricted Items:</strong> Some items cannot be legally purchased for various reasons. In the gear lists, the cost of such items are marked with an R. No matter what your Resources rating is, you cannot purchase restricted items unless you have the Streetwise talent.</p>
                <p><strong>Multiple Items:</strong> Typically, each purchase of an item is managed separately, but if a hero wants to purchase several items of the same type, it should be considered a combined purchase at a higher Cost (GM's discretion).</p>
                <p><strong>Losing Items:</strong> After you have used a purchased item for the purpose you needed it for, it is considered sold, given away, or otherwise lost. Remove it from your inventory. If you need a similar item again, you will need to make a new purchase.</p>
            </details>
            <details className={"border rounded px-2 py-1 mb-2"}>
                <summary className={"h5 mb-1"}>
                    Repairing Gear
                </summary>
                <p>To repair damage to a piece of gear, you need a few hours of work, and a REASON roll. Tools can give you bonuses to the roll. Each success rolled removes 1 point of damage from the item.</p>
            </details>
            <details className={"border rounded px-2 py-1 mb-2"}>
                <summary className={"h5 mb-1"}>Weapons</summary>
                <ul>
                    <li><strong>Bonus:</strong> A dice bonus to your FIGHTING or AGILITY roll when using the weapon.</li>
                    <li><strong>Damage:</strong> The base damage when using the weapon. In slugfest, this is used instead of your base slugfest damage.</li>
                    <li><strong>Range:</strong> The range, in zones unless otherwise stated, at which the weapon can be used. A dash (-) means that the weapon can only be used in slugfest. For ranged weapons that allow shooting attacks, the minimum and maximum range are separated by a slash. 0 means the zone you are in.</li>
                    <li><strong>Cost:</strong> Indicates how difficult the weapon is to obtain when using your RESOURCES rating. Weapons marked with an R are restricted and cannot typically be purchased without the STREETWISE talent.</li>
                </ul>
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
                <summary className={"h5 mb-1"}>Armor</summary>
                <table className={"table table-sm table-striped"}>
                    <thead>
                        <tr>
                            <th>Item</th>
                            <th>Rating</th>
                            <th>Features</th>
                            <th>Cost</th>
                        </tr>
                    </thead>
                    <tbody>
                        {ARMOR.map((item, index) => {
                            return <tr key={item.name}><td>{item.name}</td><td>{item.rating}</td><td>{item.comment}</td><td>{item.cost}</td></tr>
                        })}
                    </tbody>
                </table>
            </details>
            <details className={"border rounded px-2 py-1 mb-2"}>
                <summary className={"h5 mb-1"}>Other</summary>
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
                <summary className={"h5 mb-1"}>Misc</summary>
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
