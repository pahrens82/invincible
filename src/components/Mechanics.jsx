export const Mechanics = () => {
    return (
        <section className={"bg-white px-3 pb-2"}>
            <h1>Mechanics</h1>
            <details className={"p-2 py-1 mb-2 border rounded"}>
                <summary className={"h3"}>Not Combat</summary>
                <p className={"mb-0"}><strong>Regular Stunts:</strong> If you roll more than one success on an attribute roll, you can achieve bonus effects called stunts. Some examples are listed below.</p>
                <ul>
                    <li><strong>You show off:</strong> Everyone around you is impressed by your prowess.</li>
                    <li><strong>You do it quickly:</strong> Your action takes one time category lower than normal.</li>
                    <li><strong>You do it quietly:</strong> Your action doesn't attract attention.</li>
                    <li><strong>You learn something new:</strong> You learn something connected to the task at hand. The GM determines what you learn, if anything.</li>
                    <li><strong>You help a friend in need:</strong> giving them one of your successes. This only applied in situations where several heroes are rolling for the same action simultaneously.</li>
                </ul>
                <p className={"mb-1"}><strong>Pushing Your Roll:</strong> If you fail a roll, or want to try for more successes, you can push the roll. Reroll all dice that do not show a 1 or a 6. For each 1 rolled after pushing you take 1 point of stress. You cannot push passive rolls (IE, you can't push INTUITION to spot a surprise attack). If you have lost all Resolve, you cannot push rolls. You can normally only push a roll once, although certain talents might allow you to push twice.</p>
            </details>
            <details className={"px-2 py-1 mb-2 border rounded"}>
                <summary className={"h3"}>Combat</summary>
                <ul>
                    <li><strong>Surprise Attacks:</strong> If combat starts with an attack that the GM deems to be surprising, the defender(s) must roll for INTUITION. It's a passive roll that cannot be pushed. All defenders who fail the roll automatically get the highest (worst) initiative card(s) in the first round of combat. Distribute these randomly before letting the other combatants draw initiative.</li>
                    <li><strong>Initiative:</strong> Each player in the fight draws a random initiative card at the beginning of each round, and the GM draws cards for NPCs. Low cards act first. Some powers allow characters to take more than one turn per round, drawing an initiative card for each.</li>
                    <li><strong>Holding Off:</strong> On your turn in the round, you can swap initiative cards with a character whose turn comes after yours. They cannot refuse the trade. You cannot swap with someone who has already had their turn, nor someone who themselves whose to hold off earlier in the round.</li>
                    <li><strong>Help From Others:</strong> Up to three other allies can help you with a dice roll. Each ally helping you gives you +1 die, but they need to be in a position to actually support your action in a concrete way - just speaking to you is not enough. The GM has final say. In addition, helping an ally in an action scene consumes your full action for the turn.</li>
                    
                    <li><strong>Actions:</strong> Each round, you can perform one full action and one quick action, or two quick actions. Actions can be performed in any order you like. On your turn, quick actions can 
                    be saved for use later in the round.
                        <div className={"d-flex flex-column flex-lg-row gap-lg-4"}>
                            <div>
                                <strong>Full Actions</strong>
                                <ul>
                                    <li>Slugfest Attack (FIGHTING)</li>
                                    <li>Charge Attack (STRENGTH)</li>
                                    <li>Shooting Attack (AGILITY)</li>
                                    <li>Use A Power (Varies)</li>
                                    <li>Break Or Lift Something (STRENGTH)</li>
                                    <li>Interact With Technology (REASON)</li>
                                    <li>Stabilize A Dying Character (REASON)</li>
                                    <li>Give Orders (PRESENCE)</li>
                                    <li>Rally A Broken Character (PRESENCE)</li>
                                    <li>Recover Resolve (PRESENCE)</li>
                                    <li>Persuade Someone (PRESENCE)</li>
                                    <li>Save Bystanders (Varies)</li>
                                    <li>Fly Sky High or Into Orbit (-)</li>
                                </ul>
                            </div>
                            <div>
                                <strong>Quick Actions</strong>
                                <ul>
                                    <li>Move Into An Adjacent Zone (-)</li>
                                    <li>Block A Slugfest Attack (FIGHTING)</li>
                                    <li>Dodge A Shooting Attack (AGILITY)</li>
                                    <li>Pick Up An Item (-)</li>
                                    <li>Scan An Area For Details (INTUITION)</li>
                                    <li>Action Banter (PRESENCE)</li>
                                    <li>Start A Vehicle (-)</li>
                                    <li>Enter/Exit A Vehicle (-)</li>
                                    <li>Handle A Vehicle (AGILITY)</li>
                                    <li>Use Item (Varies)</li>
                                </ul>
                            </div>
                        </div>
                    </li>
                    <li><strong>Slugfest</strong>
                        <ul>
                            <li>Pounding your opponent with your fists, or a melee weapon, is called slugfest.</li>
                            <li>A slugfest attack can only be made a targets in the same zone, unless a power or special rule allows otherwise.</li>
                            <li>Slugfest is a full action using the FIGHTING attribute, except for the Charge special attack, which uses STRENGTH instead.</li>
                            <li>A success on a Slugfest roll inflicts your Slugfest damage on the target. The damage may be reduced by Armor.</li>
                            <li>If you wish, you can choose to inflict less than your full Slugfest damage.</li>
                            <li>If you use a weapon, you inflict its damage rating instead of your Slugfest damage.</li>
                            <li>If your opponent is unaware or restrainted, they cannot block your attack and you get +2 dice.</li>
                            <li><strong>Blocking:</strong> A character aware of an incoming Slugfest attack can attempt to block it. This is a quick action and requires a FIGHTING roll. You must choose to block before the attacker rolls. Each success on the FIGHTING roll eliminates one success rolled by the attacker. Blocking rolls cannot be pushed. If you roll more successes than the attacker, you can counterattack. This counts as a normal Slugfest attack which hits automatically with the successes beyond what you needed to eliminate all of the attacker's successes. Extra successes can be used for stunts normally. It's not possible to block a counterattack.</li>
                        </ul>
                    </li>
                    <li><strong>Shooting</strong>
                        <ul>
                            <li>When shooting someone at a distance, roll for AGILITY.</li>
                            <li>All shooting powers and weapons have a minimum and maximum range. Range 0 means inside the same zone. Attacks closer than the minimum range get -3 dice. A weapon cannot be used beyond its maximum range.</li>
                            <li>If your AGILITY roll succeeds, you inflict damage per the power or weapon you are using. This damage may be reduced by armor.</li>
                            <li><strong>Dodging:</strong> A character being shot at, and is aware of the attack, can try to dodge the attack. This requires a quick action, and they roll for AGILITY. Dodging must be declared before the attacker rolls. Each success on the AGILITY roll eliminates one success from the attacker's roll. Dodge rolls cannot be pushed. If you roll more successes than the attacker, you can move one zone for each success beyond what the attacker rolled.</li>
                        </ul>
                    </li>
                    <li><strong>Movement:</strong> To move horizontally on the ground, you simply need to spend a Quick Action to go from a zone to an adjacent zone. Moving inside a zone requires no action at all, but can only be done on your turn. Aerial movement via power or vehicle lets you move from the ground to elevated zones.
                        <ul>
                            <li><strong>Elevated:</strong> Moving between the ground an Elevated altitude is a quick action, and can even be done as part of a horizontal movement without requiring a separate action.</li>
                            <li><strong>Sky High:</strong> Moving between Sky High altitude and any other altitude requires one full action.</li>
                            <li><strong>In Orbit:</strong> Moving between Orbit and any other altitude requires one full action.</li>
                            <li><strong>Falling:</strong> A fall from Elevated inflicts 1d6 damage. An AGILITY roll while falling eliminates 1 point of damage per success, or all damage if there is something to grab onto. You cannot fall from orbit.</li>
                            <li><strong>Carrying Others:</strong> If you can fly, you can carry one other character, who starts and ends their move in the same zone as you. This cannot be combined with a charge attack. If you remain airborne after such a move, none of you can attack, block, or dodge until you have landed.</li>
                            <li><strong>Buildings:</strong> Moving into buildings is typically a normal quick action unless the doors are locked. Each floor (and the roof) of a building counts as a zone. Locked doors can be breached by a STRENGTH roll (quick action), but only if half your STRENGTH (rounded up) exceeds the Armor Rating of the barrier. Electronically sealed doors can be opened with a REASON roll (full action).</li>
                            <li><strong>Crashing Through Walls:</strong> If you're in a hurry, you can crash through a door or wall as part of a movement action. In a single quick action, you can move and make a STRENGTH roll as per above to breach the barrier. If you can move more than a single zone in a quick action and have movement left after breaching the barrier, you can continue to move normally. If your STRENGTH roll fails, you stop at the barrier and take damage equal to the Armor Rating of the barrier.</li>
                        </ul>
                    </li>
                    <li><strong>Miscellaneous:</strong>
                        <ul>
                            <li><strong>Giving Orders:</strong> As a full action, you can give orders to another character. The target must be able to hear you. Roll for PRESENCE. For every 6 you roll, the target gets +1 die to one roll later in the same round, but only for carrying out the order you gave.</li>
                            <li><strong>Charge:</strong> A special type of slugfest attack is the charge, barreling right into your opponent with full force. A charge must be combined with movement, consuming both a full and a quick action, and cannot start in the same zone as the target. The movement must stop at the point of attack unless you slam the target (below). A charge is rolled as a normal slugfest attack but with some key differences:
                                <ul>
                                    <li>Roll for the attack using STRENGTH instead of FIGHTING.</li>
                                    <li>A charge cannot be blocked, but it can be dodged as a shooting attack.</li>
                                    <li>When charging, the only allowed stunts are Double Damage and Slam.</li>
                                </ul>
                            </li>
                            <li><strong>Grapple:</strong> Another special type of slugfest attack is the grapple. Roll for FIGHTING normally, and the attack can be blocked as usual. No weapon can be used. If successful, your opponent cannot move or perform any actions requiring body movement (including slugfest and shooting attacks) except trying to break free. This is an opposed STRENGTH vs STRENGTH roll against you (quick action for the opponent breaking free, no action for you). While you are grappling an opponent, the only actions you can perform (until you choose to release your opponent) are movement (pulling your opponent with you) and a grapple attack. This works as a normal slugfest attack but it cannot be blocked, and the only stunt allowed is Double Damage. Huge creatures cannot be grappled.</li>
                            <li><strong>Huge Creatures:</strong> Certain beings in the game are designated as huge creatures. These follow normal rules, but with a few exceptions:
                                <ul>
                                    <li>They can attack Elevated characters in Slugfest.</li>
                                    <li>The stunts Knockback, Stun, Slam, Suppressed, and Deadly Hit cannot be used against them.</li>
                                    <li>They cannot be grappled.</li>
                                    <li>They are immune to Action Banter.</li>
                                </ul>
                            </li>
                        </ul>                        
                    </li>
                    <li><strong>Combat Stunts</strong>
                        <ul>
                            <li><strong>Melee Stunts</strong>
                                <ul>
                                    <li><strong>Double Damage:</strong> The damage from your attack is doubled before any reduction for Armor.</li>
                                    <li><strong>Knockback:</strong> Your target is knocked back a number of zones equal to half your STRENGTH rating (rounded up). If the target hits a barrier, the target suffers additional damage equal to the Knockback distance (reduced for Armor). If the barrier's Armor is lower than the damage, the target continues through the barrier, potentially hitting more barriers. The damage done is reduced by -1 at each barrier after the first until the movement stops. On a city map, each building is typically considered one zone bordered by exterior walls (Armor 3). Huge creatures are immune to Knockback unless stated otherwise. You cannot combine Knockback with Deadly Hit.</li>
                                    <li><strong>Stun:</strong> If your target takes any damage from the attack, they must make an immediate PRESENCE roll (no action) or miss their next turn. They also cannot perform interrupt actions until then. Huge creatures are immune to Stun unless stated otherwise.</li>
                                    <li><strong>Bang Heads:</strong> You slam your target into an additional opponent in the same zone. You may choose this stunt multiple times. Each additional target damage equal to half your STRENGTH rating (rounded up) and any further stunts are applied to each target separately. You cannot combine Bang Heads with Deadly Hit.</li>
                                    <li><strong>Trap:</strong> You immobilize your opponent under debris or inside some enclosure, depending on the zone you're in. Getting out requires an AGILITY or STRENGTH roll (quick action) and until then, the target cannot move or make slugfest attacks. You cannot choose this stunt in a completely empty zone.</li>
                                    <li><strong>Disarm:</strong> You wrestle an item from your opponent's grasp. You can keep the item or throw it into an adjacent zone as part of the stunt.</li>
                                    <li><strong>Deadly Hit:</strong> If your attack causes damage, you inflict a critical injury even if the target is not broken. Roll a D6 and add the amount of damage inflicted by the attack, up to a maximum of +6, to determine the injury on the table on page 96. This stunt requires a weapon or power with sharp damage (page 96) and it cannot be used against huge creatures. You cannot combine Deadly Hit with Knockback or Bang Heads.</li>
                                    <li><strong>Slam:</strong> If you charge an opponent and get more successes than you need to hit and you have remaining movement left after the point of attack, you can spend one extra success to push your opponent before you and keep moving in the same direction until your move ends. If you hit a barrier along the way, your opponent suffers additional damage equal to half your STRENGTH rating (rounded up), reduced by armor. If the barrier's Armor is lower than this damage, you can continue the movement through the barrier, potentially hitting more barriers, until the movement stops. Huge creatures cannot be slammed unless stated otherwise.</li>
                                    <li><strong>Your Own:</strong> If you have a cool idea for a stunt, you're free to propose it to the GM, who has final say on whether or not to allow it.</li>
                                </ul>
                            </li>
                            <li><strong>Ranged Stunts</strong>
                                <ul>
                                    <li><strong>Double Damage:</strong> The damage from your attack is doubled before any reduction for Armor.</li>
                                    <li><strong>Suppressed:</strong> If your target takes any damage from the attack,  they must make an immediate PRESENCE roll (no action) or miss their next turn. They also cannot perform interrupt actions until then. This stunt cannot be used against huge creatures.</li>
                                    <li><strong>Trick Shot:</strong> Your attack continues to hit an additional opponent in the same zone. You may choose this stunt multiple times. Each target suffers the base Damage, and any further stunts are applied to each target separately.</li>
                                    <li><strong>Disarm:</strong> You shoot an item from your opponent's grasp. It falls to the ground in the same zone.</li>
                                    <li><strong>Deadly Hit:</strong> If your attack causes damage, you inflict a critical injury even if the target is not broken. Roll a D6 and add the amount of damage inflicted by the attack, up to a maximum of +6, to determine the injury on the table on page 96. This stunt requires a weapon or power with sharp damage (page 96) and it cannot be used against huge creatures.</li>
                                    <li><strong>Your Own:</strong> If you have a cool idea for a stunt, you're free to propose it to the GM, who has final say on whether or not to allow it.</li>
                                </ul>
                            </li>
                            
                        </ul>
                    </li>
                </ul>
            </details>
            <details className={"px-2 py-1 mb-2 border rounded"}>
                <summary className={"h3"}>Hazards</summary>
                <h4>Disease</h4>
                <p>When exposed to a dangerous contagion, poison, or infection, you need to roll for STRENGTH to avoid falling sick. This is a passive roll, and cannot be pushed. The GM may even roll for you in secret.
                <br/><strong>Virulence:</strong> Diseases and poisons have a virulence rating, which is a negative modifier to your STRENGTH roll. If the virulence is not listed, it is zero.
                <br/><strong>Effects:</strong> Diseases can have a wide range of effects, as noted in their description. A common effect is to inflict 1 point of damage and trigger further STRENGTH rolls modified for virulence at regular intervals (typically once every few hours). Each failed roll inflicts 1 point of damage, and while sick, you cannot recover damage normally (page 98). If you are broken by such damage, don't roll for a critical injury. Instead, you die if you fail another STRENGTH roll to resist the disease. Once you succeed, your immune system has beaten the disease, and you can start to recover.
                <br/><strong>Medical Aid:</strong> If someone cares for you while you are sick, they can roll for REASON to fight off the disease, replacing your STRENGTH rolls. Medical gear and medicine can give bonuses to this.</p>
                <h3>Explosions</h3>
                <p>Some powers or weapons (page 95) have an explosive effect. You use these with a normal shooting attack, but if you hit, everyone in the target zone takes base Damage. Any stunts must be distributed separately among your targets. Each target dodges individually, and must declare this before your roll. If you fail your attack, no one is hurt. 
                <br/><strong>Placed Explosives:</strong> Detonations caused by anything that's not a shooting attack have a Blast rating and a base Damage. The Damage is equal to half the Blast rating (rounding up). When the explosion occurs, roll a number of dice equal to the Blast. If one or more 6s are rolled, everyone in the zone suffers the base Damage. The blast roll cannot be pushed. The attack can be dodged normally and damage from an explosion may be reduced by Armor.
                <br/>If additional 6s are rolled beyond the first, they are distributed randomly among the potential targets, and never more than one 6 for the same target. For each target who gets an extra 6, the damage is doubled (before applying Armor).</p>
                <h3>Fire</h3>
                <p>A fire usually covers one zone and is measured by its Intensity. A typical fire has Intensity 6-9. When entering a burning zone, or starting a round in one, roll a number of dice equal to the Intensity. For every 6 rolled, you suffer 2 points of damage. Armor has its normal effect.
                <br/><strong>Catching Fire:</strong> If you take damage from a fire attack, you catch fire and continue to burn, suffering another fire attack at the start of each new round even if you leave the burning zone. As soon as a fire attack outside the burning zone inflicts no damage, you're no longer on fire. You, or an ally in the same zone, can stop you from burning with a successful AGILITY roll (full ction).
                <br/><strong>Fire Spreading:</strong> For a typical fire, roll a D6 at the start of each round. On 1-2, the fire goes out and the zone is no longer considered burning. On a 5-6, the fire spreads to a random adjacent zone (with the same Intensity), assuming the zone border is not blocked and there is something in the adjacent zone that can burn. Extinguishing a fire is typically a challenge (page 101).</p>
                <h3>Vacuum</h3>
                <p>If you get caught in space without the protection of a space suit, hull of a ship, or protective superpowers such as ADAPTATION and LIFE SUPPORT, you won't last long. You must make a STRENGTH roll (no action) on each turn without protection in a vacuum. The roll is unmodified in the first round, but you get -1 die in the second round, -2 dice in the third round and so on. A failed roll means you drop directly to zero Health and are broken and die on your next turn, unless you are brought to a pressurized area before then. You don't suffer a critical injury.</p>
            </details>
        </section>
    );
};
