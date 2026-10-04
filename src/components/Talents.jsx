const TALENT_LIST = [
    {
        name: `Analysis`,
        description: `You can roll for REASON to gain insight into objects or subjects that you study for at least a few minutes. For every 6 you roll, you may ask the GM one question regarding the object or subject.`,
    },
    {
        name: `Bigger They Are`,
        description: `You gain +2 dice to slugfest attacks when you fight a huge creature (page 92).`,
    },
    {
        name: `Charger`,
        description: `You get +2 dice to STRENGTH rolls to perform a charge attack (page 92).`,
    },
    {
        name: `Combat Veteran`,
        description: `In an action scene, you may take 1 point of stress to keep your initiative card from the previous round instead of drawing a new one.`,
    },
    {
        name: `Commander`,
        description: `You can roll PRESENCE to give orders in combat (page 86) as a quick action instead of a full action.`,
    },
    {
        name: `Compelling`,
        description: `You can push any PRESENCE roll twice. After the second re-roll, each die showing a 1 inflicts 1 point of stress.`,
    },
    {
        name: `Coordinated`,
        description: `You can push any AGILITY roll twice. After the second re-roll, each die showing a 1 inflicts 1 point of stress.`,
    },
    {
        name: `Cunning`,
        description: `You can push any REASON roll twice. After the second re-roll, each die showing a 1 inflicts 1 point of stress.`,
    },
    {
        name: `Defensive`,
        description: `When attacked, you can take 1 point of stress to block or dodge without consuming an action to do so. You can do this several times in a round, as long as you have enough Resolve.`,
    },
    {
        name: `Deflection`,
        description: `You can block shooting attacks (not only slugfest attacks), allowing you to counterattack if rolling more successes than needed to block (page 89).`,
    },
    {
        name: `Determined`,
        description: `Your maximum Resolve score is increased by 2. You can take this talent up to five times.`,
    },
    {
        name: `Discretion`,
        description: `If you are attacked and an ally is in the same zone, you can make a PRESENCE roll (no action) to make the ally be targeted by the attack instead of you. Each use inflicts 1 point of stress.`,
    },
    {
        name: `Duck & Weave`,
        description: `You can dodge (page 94) slugfest attacks in addition to shooting attacks.`,
    },
    {
        name: `Durable`,
        description: `Your maximum Health score is increased by 2. You can take this talent up to five times.`,
    },
    {
        name: `Evasive`,
        description: `You get +2 dice to AGILITY rolls to dodge (page 94) an attack.`,
    },
    {
        name: `Fast Reflexes`,
        description: `When drawing initiative (page 84), draw two cards instead of one. Choose the one you want to use and shuffle the other back into the deck. If several characters have this talent, carry out this process one at a time in any order you prefer. Heroes draw before NPCs.`,
    },
    {
        name: `Find Weakness`,
        description: `As a stunt in a slugfest attack, you can spend one success to find a weak spot in your opponent's protection, halving any Armor rating (rounding up).`,
    },
    {
        name: `Formidable`,
        description: `You can push any FIGHTING roll twice. After the second re-roll, each die showing a 1 inflicts 1 point of stress.`,
    },
    {
        name: `Guardian`,
        description: `If another character in your zone is attacked, you can dive in to take the hit as a quick interrupt action. Roll for FIGHTING if it's a slugfest attack or for AGILITY if shooting. If you succeed, you take the hit instead of the intended target.`,
    },
    {
        name: `Hard Hitter`,
        description: `You get +2 dice to a slugfest attack if you sacrifice your quick action in the round.`,
    },
    {
        name: `Indomitable`,
        description: `Once per game session, you may ignore all  1s when pushing a roll.`,
    },
    {
        name: `Insightful`,
        description: `You can push any INTUITION roll twice. After the second re-roll, each die showing a 1 inflicts 1 point of stress.`,
    },
    {
        name: `Inspiration`,
        description: `As a quick action, you can take up to 5 points of stress to restore the same amount of lost Resolve to an ally that you can communicate with.`,
    },
    {
        name: `Investigator`,
        description: `When you spend a few minutes in an area, roll once for INTUITION. For each 6 rolled, you may ask the GM one of the following questions&colon; What happened here? Is there anything hidden here, and if so, where? Are there any details here that are out of place? The GM must answer truthfully, but she is allowed to give vague or incomplete information.`,
    },
    {
        name: `Killer`,
        description: `When you inflict a critical injury, roll twice and choose the result you want.`,
    },
    {
        name: `Knowledgeable`,
        description: `You get +3 dice to REASON rolls to recall, find, or understand information related to a specific subject. Roll or choose a subject from the adjacent table, or come up with one of your own with the help of the GM.`,
    },
    {
        name: `Leader`,
        description: `Giving a rousing speech to your team, you can take 1 point of stress to attempt to recover lost Resolve (page 99) for all team members you can communicate with (except yourself) simultaneously. Make a  PRESENCE roll (full action) - each hero regains a number of Resolve points equal to the number of 6s rolled.`,
    },
    {
        name: `Loner`,
        description: `You can restore lost Resolve between action scenes without taking part in a social scene (page 139). A rest of a few minutes will still let you recover a number of Resolve points equal to your PRESENCE rating, while a few hours' rest will recover all lost Resolve. You should still describe your "unsocial scene" to the other players.`,
    },
    {
        name: `Lucky Break`,
        description: `When you suffer a critical injury, you may re-roll the result once. Choose the result you prefer.`,
    },
    {
        name: `Manipulator`,
        description: `You get +2 dice to PRESENCE rolls when attempting to coerce, cheat, or deceive someone.`,
    },
    {
        name: `Martial Arts`,
        description: `You can make an unarmed slugfest attack (page 88) as a quick action instead of a full action, but with -2 dice.`,
    },
    {
        name: `Medic`,
        description: `You get +2 dice to REASON rolls to stabilize a critical injury, and you can rally someone who is broken using REASON instead of PRESENCE as long as you are in the same zone.`,
    },
    {
        name: `Menacing`,
        description: `When threatening someone to do what you want, roll for STRENGTH instead of PRESENCE and gain +2 dice.`,
    },
    {
        name: `Merciless`,
        description: `You regain 1 point of Resolve each time you cause an enemy to be broken.`,
    },
    {
        name: `Mighty`,
        description: `You can push any STRENGTH roll twice. After the second re-roll, each die showing a inflicts 1 point of stress.`,
    },
    {
        name: `Motivator`,
        description: `You can rally another broken character (but not yourself) as a quick action, and with +2 dice to the roll.`,
    },
    {
        name: `Pilot`,
        description: `You get +2 dice to all AGILITY rolls for piloting or driving any kind of vehicle.`,
    },
    {
        name: `Rapid Fire`,
        description: `You can make a shooting attack as a quick action instead of a full action, but with -2 dice.`,
    },
    {
        name: `Renowned`,
        description: `Your Reputation score is increased by 3.`,
    },
    {
        name: `Resilience`,
        description: `Whenever you would take damage to your Health, you can turn it into stress. Every point of stress taken eliminates 1 point of damage. You cannot use this talent when you have no Resolve left.`,
    },
    {
        name: `Second Wind`,
        description: `When you are broken, roll for STRENGTH instead of PRESENCE to rally yourself, and you get +2 dice to the roll.`,
    },
    {
        name: `Sharp-Tongued`,
        description: `You get +2 dice to PRESENCE rolls when using action banter (page 99).`,
    },
    {
        name: `Sniper`,
        description: `If you spend a quick action aiming right before making a shooting attack (on the same turn), you get +2 dice to the attack roll.`,
    },
    {
        name: `Stealthy`,
        description: `When you sneak up on enemies to perform a surprise attack (page 85) your opponents get -2 to the INTUITION roll to spot the attack. Note that you need to attack alone (or with others who are also Stealthy) for the effect to apply.`,
    },
    {
        name: `Streetwise`,
        description: `You get +2 dice to PRESENCE rolls when trying to find information about the activities in the shadier parts of town, and +2 to INTUITION rolls to spot a surprise attack (page 85).`,
    },
    {
        name: `Subdue`,
        description: `When attempting to grapple an opponent in slugfest (page 92), you get +2 dice. The bonus also applies to resisting your opponent's attempts to break free.`,
    },
    {
        name: `Supportive`,
        description: `When you can help someone, they get +2 dice (instead of +1).`,
    },
    {
        name: `Tactical Support`,
        description: `As a stunt (when rolling extra ) for any roll in an action scene, you may provide tactical support to an ally in the same or an adjacent zone. For each 6 you spend, the ally gets +2 dice to their next attribute roll. If you rolled several extra 6s, you can distribute them across several allies.`,
    },
    {
        name: `Unconventional Wisdom`,
        description: `Roll INTUITION when you first spot or encounter an opponent, organization, or hazard (requiring no action). If you succeed, the GM must tell you something useful about the encounter's composition, status, or  objectives for each you roll.`,
    },
    {
        name: `Warning Call`,
        description: `As a quick interrupt action, you can shout a warning to another character within hearing range when they are attacked. The target can block or dodge the attack without using their own action, and get +2 dice to the roll.`,
    },
    {
        name: `Windfall`,
        description: `Increase your Resources by 2. You can choose this talent several times.`,
    },
];

const DRAWBACKS = [
    {
        name: "Alternate Form",
        description: `One of your power sources (choose one if you have several) requires you to transform into another form. Transforming into your alternate form is a full action and causes 1 point of stress. You can only remain in your alternate form for a few hours. In your normal form, you have no powers from that power source and your highest three attribute scores (choose in case of a tie) are are all halved (rounding fractions up). Note down
        the reduced scores in parentheses, along with any reduced maximum Health, maximum Resolve, and Slugfest Damage ratings. If your current Health or Resolve is lower than your reduced maximum score when you transform, you  keep your current score after the transformation.`,
    },
    {
        name: "Bloodlust",
        description: `You lose control in the heat of battle, putting your allies at risk. During combat, you must keep fighting until you are broken or until all enemies have fled or are broken, refusing to accept surrender. Another character in your zone can attempt to calm you down and end your frenzy with a PRESENCE roll (full action). If the roll fails, you must use your next action to attack this character.`,
    },
    {
        name: "Cursed",
        description: `You are doomed by magic, a dark destiny, or just plain bad luck, defined with the help of the
        GM when you select this drawback. While the details of the curse can vary widely, typical effects include
        increasing the stress taken while using a power or getting -3 dice on attribute rolls under specific
        circumstances. Examples include making a pact with a vengeful spirit to save a loved one or getting
        younger each time you revert back to normal after a monstrous transformation.`,
    },
    {
        name: "Frightful",
        description: `Your appearance or demeanor scares people you encounter. You get -3 dice on PRESENCE
        rolls used against people who don't know you - unless you are trying to intimidate them. When
        interacting with someone for the first time, they start with a negative attitude toward you and may
        try to avoid you, flee, or even attack.`,
    },
    {
        name: "Gear Dependent",
        description: `One of your power sources (choose one if you have several) is specialized gadgetry. If the gear is lost, neutralized, or destroyed, you lose access to all of its powers. Your attributes are not affected.`,
    },
    {
        name: "Hard Times",
        description: `Decrease your Resources by 2, to a minimum of 1. You can choose this drawback several times.`,
    },
    {
        name: "Obsessed",
        description: `You are consumed by something that you fiercely pursue, defined when you select this drawback. When presented with the object of your obsession, you strive for it exclusively, suffering -3 dice to INTUITION rolls to notice anything else and -1 die to all other rolls that don't involve your obsession, as determined by the GM. Examples include wealth, vengeance, or fame.`,
    },
    {
        name: "Overconfident",
        description: `You believe you're unbeatable - until things take a turn for the worse. You cannot push rolls if you have more than half of your total Health remaining (rounded up).`,
    },
    {
        name: "Phobic",
        description: `You have a fear of something or a specific situation, defined when you select this drawback.
        While exposed to your phobia, you must make a PRESENCE roll (no action) at the start of each turn. If the roll fails, you lose this turn and cannot perform interrupt actions before your next turn.`,
    },
    {
        name: "Power Loss",
        description: `You lose access to one of your power sources (choose one if you have several) under specific circumstances, defined when you select this drawback. While these conditions are in effect (as determined by the GM), you cannot use any power belonging to that power source. Examples include exposure to a unique type of radiation, extremely cold temperatures, or being in the same zone as rocks from your destroyed home planet.`,
    },
    {
        name: "Reliant",
        description: `You have a dependency, defined when you select this drawback. If you don't satisfy your reliance for a few hours, you must make a PRESENCE roll. If you fail, you take 1 point of stress, cannot recover Resolve,
        and suffer -1 die to all attribute rolls. When another few hours have passed, you must roll again, with the same effect if you fail. The attribute modifier is cumulative. The effect ends when you satisfy your need or as
        soon as you succeed on the PRESENCE roll. Examples include alcohol, blood, or immersion in the ocean.`,
    },
    {
        name: "Stranger",
        description: `You are from a distant land or another world altogether, or you have suffered memory loss. Whatever the reason, you are unfamiliar with local customs and habits and suffer -3 to all PRESENCE rolls when dealing with people who don't know you.`,
    },
    {
        name: "Super Suit",
        description: `One of your power sources (choose one if you have several) is a highly advanced suit. Donning it is a full action and you can only stay in it for a few hours. Without the suit, you have no powers from that power source and your physical attribute scores (FIGHTING, AGILITY, and STRENGTH) are all halved (rounding  fractions up). Note down the reduced scores in parentheses, along with reduced maximum Health and Slugfest Damage ratings. If your current Health is lower than the reduced maximum Health, you keep your current Health when leaving the suit. Also, if you are broken by damage, roll a die - on a 1, the suit is damaged and needs to be repaired (REASON roll, full action) before it can be used again.`,
    },
    {
        name: "Targeted",
        description: `You are an object of interest for a dangerous opponent or organization, defined when you select this drawback. You might even be a convict running from the law. Your opponent should be a significant presence in the game, and the GM should use them to actively cause trouble for you at least once per adventure or every third session in campaign play.`,
    },
    {
        name: "Vulnerable",
        description: `You have a specific weakness to something that harms you, defined when you select this drawback. When you are subjected to this source, the damage inflicted is doubled and any Armor rating has no effect.`,
    },
];


export const Talents = () => {
    return (
        <section className={"bg-white px-3 pb-2"}>
            <h1>Talents and Drawbacks</h1>
            <div className={"d-flex flex-column flex-lg-row gap-lg-3"}>
                <div>
                    <h3>Talents</h3>
                {TALENT_LIST.map((talent) => {
                    return (
                        <details
                            className={"px-2 py-1 mb-2 border rounded"}
                            key={talent.name.replaceAll(" ", "-")}
                        >
                            <summary>{talent.name}</summary>
                            <p>{talent.description}</p>
                        </details>
                    )
                })}
                </div>
                <div>
                <h3>Drawbacks</h3>
                {DRAWBACKS.map((drawback) => {
                    return (
                        <details
                            className={"px-2 py-1 mb-2 border rounded"}
                            key={drawback.name.replaceAll(" ", "-")}
                        >
                            <summary>{drawback.name}</summary>
                            <p>{drawback.description}</p>
                        </details>
                    )
                })}
                </div>
            </div>
        </section>
    );
};
