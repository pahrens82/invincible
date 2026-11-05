const UPGRADES = [
    {
        name: "Comm System",
        prerequisite: "Resources 5 or Technician",
        description: "The base can receive and transmit on a wide range of frequencies and channels, ensuring secure communication between the heroes. The system allows team members to communicate anywhere within the planet's orbit, as long as it remains operational within the base. Any attribute rolls to eavesdrop, access, or interfere with team communications from an unauthorized source get -3 dice.",
        acquired: false,
    },
    {
        name: "Computer Mainframe",
        prerequisite: "Resources 5 or Technician",
        description: "The base features a state-of-the-art supercomputer that handles core operations. If a hero uses a quick action to connect to the mainframe, they get +2 dice to attribute rolls for programming, repairing, fecrypting, or manipulating any type of technology.",
        acquired: false,
    },
    {
        name: "Concealment",
        prerequisite: "-",
        description: "The base is somehow concealed from the public, whether it's hidden underground, behind an illusory mountain projection, or shielded with stealth-enhanced plating. Attribute rolls to locate the base get -2 dice. This upgrade can be selected twice, with cumulative effects.",
        acquired: false,
    },
    {
        name: "Defense System",
        prerequisite: "Resources 5 plus Law Enforcer, Secret Agent, Soldier, or Technician",
        description: "The base is equipped with security measures intended to repel intruders. Any unauthorized visitor gets -2 dice on all attribute rolls to gain entry to the base, and heroes in the base can leverage their familiarity with the defenses to get +1 dice to all attribute rolls against unauthorized visitors. This upgrade can be selected twice, with cumulative effects.",
        acquired: false,
    },
    {
        name: "Holding Cells",
        prerequisite: "-",
        description: "The base includes holding cells for temporarily detaining prisoners until they can be transferred elsewhere. The cells can hold up to four average-sized individuals comfortably, or up to ten uncomfortably. The cells are secure but not equipped to negate superpowers (for that, see the Power Effect upgrade below). Any roll to escape or break out of the cells gets -3 dice.",
        acquired: false,
    },
    {
        name: "Laboratory",
        prerequisite: "Resources 6 plus Expert, Medic, Scientist, or Technician",
        description: "The base features a lab with equipment for scientific research and experiments. Any roll to conduct research or perform experiments in the lab gets +2 dice.",
        acquired: false,
    },
    {
        name: "Medical Facilities",
        prerequisite: "Resources 6 or Medic",
        description: "The base is equipped with all the necessary medical equipment for proper treatment. Any roll to stabilize a dying character gets +2 dice. For anyone receiving medical treatment at the facility, recovery time for critical injuries is halved.",
        acquired: false,
    },
    {
        name: "Power Effect",
        prerequisite: "Resources 7",
        description: "The base has an effect based on a power, such as rocket engines that grant FLIGHT, sophisticated sensors that grant DETECTION, or potent force-fields through BARRIER. Powers unlocked with this upgrade are at the basic power level. Alternatively, the upgrade can be applied to a team vehicle (page 191) if the team has that upgrade unlocked, instead of the base. This upgrade can be selected several times, once for each individual power, or up to four times for the same power - cumulatively increasing its power level (from basic to Major, Massive, and Monstrous). It can also be selected to unlock a power boost for the power, such as Interstellar Flight to allow the base or vehicle to fly at faster-than-light speed. The GM has final say on whether a power or boost makes sense for the base or vehicle.",
        acquired: false,
    },
    {
        name: "Team Vehicle",
        prerequisite: "-",
        description: "The team possesses a shared mode of transportation that is appropriate to their rank - the Team Vehicle by Rank table (below) has sample transportation to provide guidance, and the GM has final say on whether a type of vehicle makes sense for the team.",
        acquired: true,
    },
    {
        name: "Training Facilities",
        prerequisite: "Resources 5 or Technician",
        description: "The base has a space to optimize training potential. If a hero spends a few hours utilizing these facilities, any karma costs for personal improvement (page 34) - not other base upgrades - are reduced by one tenth. For example, a 10-point improvement will cost 9 points instead or a 20-point improvement will cost 18 points.",
        acquired: true,
    },
    {
        name: "Training Simulator",
        prerequisite: "Training Facilities",
        description: "The base features an advanced augmented reality matrix, holographic projectors, cutting-edge  automatons, or danger room to make the team's training more effective. If a hero spends a few hours utilizing the simulator, any karma costs for personal improvement - not other base upgrades - are reduced by two tenths. For example, a 10-point improvement will cost 8 points instead or a 20-point improvement will cost 16 points. This effect replaces the effect of the basic Training Facilities.",
        acquired: false,
    },
    {
        name: "Vehicle Defense",
        prerequisite: "Team Vehicle",
        description: "The vehicle has been reinforced to be sturdier. Increase the vehicle's Durability by 2 and its Armor by 1. This upgrade can be selected twice, with cumulative effects.",
        acquired: false,
    },
    {
        name: "Vehicle Mobility",
        prerequisite: "Team Vechicle",
        description: "The vehicle has been enhanced for precision and velocity. Increase the vehicle's Maneuverability by +1 and its Speed by 1. This upgrade can be selected twice, with cumulative effects.",
        acquired: false,
    },
    {
        name: "Vehicle Room",
        prerequisite: "Team Vehicle",
        description: "The vehicle has more legroom than normal, doubling the team vehicle's maximum number of passengers.",
        acquired: false,
    },
    {
        name: "Vehicle Targeting",
        prerequisite: "Vehicle Weaponry",
        description: "The vehicle has an enhanced targeting system. Any roll to attack with one of the vehicle’s weapons gets +2 dice.",
        acquired: false,
    },
    {
        name: "Vehicle Weaponry",
        prerequisite: "Team Vehicle",
        description: "The vehicle has integrated weapons or attachments. You can add an appropriate vehicle weapon (page 107) to the vehicle. The GM has final say on the type of weapons that would be appropriate for the mode of transportation. This upgrade can be selected multiple times if the GM allows it based on the overall makeup of the vehicle.",
        acquired: false,
    },
    {
        name: "Workshop",
        prerequisite: "Resources 4 or Blue Collar",
        description: "The base has a workshop for crafting and maintaining equipment. If a hero attempts to repair an item, material, or their team vehicle (page 191) in the workshop, they get +2 dice.",
        acquired: false,
    },
];

export const BaseUpgrades = () => {
    return (
        <section className={"bg-white px-3 pb-2"}>
            <h1>Base Upgrades</h1>
            <div className={"d-flex flex-column gap-lg-2"}>
                {UPGRADES.map((upgrade) => {
                    return (
                        <details
                            className={"border rounded px-2 py-1"}
                            key={upgrade.name.toLowerCase().replaceAll(" ", "-")}
                        >
                            <summary className={"h5 mb-1"}>
                                {upgrade.name} {upgrade.acquired ? "(acquired)" : null}
                            </summary>
                            <p className={"mb-0"}>Prerequisite: {upgrade.prerequisite}</p>
                            <p>{upgrade.description}</p>
                        </details>
                    )
                })}
            </div>
        </section>
    );
};
