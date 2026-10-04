import {useState} from "react";


const POWER_LIST = [
  {
    Name: "Action Plan",
    Type: "Control",
    Examples:
      "Genius tactics, hypercognitive improvisation, contingency planning, extreme preparation",
    Base: "As a full action, you may roll for REASON to come up with a brilliant plan of action. Choose Attack, Defend, or Misdirect. If you succeed, all other heroes on your team who can hear you (even via comms or powers) gain +1 die per rolled to all attribute rolls covered by the plan until your next turn - attack rolls if you chose Attack, dodging and blocking if you chose Defend, or all other rolls if you chose Misdirect.",
    Major: "",
    Massive: "",
    Monstrous: "",
    Boost_1: "",
    Boost_2: "",
    Boost_3: "",
    Boost_4: "",
    Limit_1: "",
    Limit_2: "",
  },
  {
    Name: "Adaptation",
    Type: "Defense",
    Examples:
      "Hyper-evolution, advanced bio-agent, anatomic synchronization, synthetic reformatting",
    Base: "By taking 1 point of stress and using a full action, you can adapt your body to be physically suited for an environment that would ordinarily be hostile to you. The effect lasts up to a few hours.\nThis power can produce a variety of effects, from the way your body looks to increasing your lung capacity to providing protection from natural sources of harm. You could see in complete darkness, become immune to a local disease, breathe in a non-oxygen atmosphere, grow gills while underwater, or gain other adaptations that would allow you to survive as if the environment is natural to you.\nYou adapt to environments, not situations - you can't gain protection from being blasted with flames, but you can gain protection from fire if you're in the underground realm of the Magmanites.",
    Major: "",
    Massive: "",
    Monstrous: "",
    Boost_1: "",
    Boost_2: "",
    Boost_3: "",
    Boost_4: "",
    Limit_1: "",
    Limit_2: "",
  },
  {
    Name: "Adhesion",
    Type: "Modification",
    Examples:
      "Arachnid setae, suction suit, molecular field attachment, gloves of climbing",
    Base: "You can cling to and move on surfaces that you normally would not be able to, like walls and ceilings. The surface must be able to support you (so it's not possible to walk up a waterfall or other unnatural surfaces). This power allows you to move to an elevated position in any zone adjacent to a building, or to the rooftop of a building without entering it.",
    Major: "",
    Massive: "",
    Monstrous: "",
    Boost_1: "",
    Boost_2: "",
    Boost_3: "",
    Boost_4: "",
    Limit_1: "",
    Limit_2: "",
  },
  {
    Name: "Affliction",
    Type: "Attack",
    Examples: "Blinding light, corrupting grasp, fear gas, venomous bite",
    Base: "You can impose adverse effects on a nearby opponent. This is a shooting attack with Damage 3 and Range 0/1 but the attack does not inflict any actual damage - instead, if it penetrates any armor, the target suffers -3 dice to all attribute rolls and movement becomes a full action until a PRESENCE roll (with the penalty) is made to shake off the effect. The PRESENCE roll is no action, but only one attempt can be made per round and only on the victim's own turn. No stunts can be chosen when using this power except Double Damage (to determine if the attack penetrates armor).",
    Major: "",
    Massive: "",
    Monstrous: "",
    Boost_1:
      "Mental Affliction. When using your AFFLICTION, you can roll for any mental attribute instead of AGILITY. Also, armor has no effect.",
    Boost_2:
      "Potent Affliction. Your target suffers -4 dice to all attribute rolls instead of -3.",
    Boost_3: "",
    Boost_4: "",
    Limit_1:
      "Requires Touch. When using your AFFLICTION, you must perform a slugfest attack instead of a shooting attack.",
    Limit_2: "",
  },
  {
    Name: "Animal Control",
    Type: "Control",
    Examples: "Beastspeaking, primal possession, faunapathy, master taming",
    Base: "As a full action, you can control the actions of an animal within your zone or an adjacent zone. The animal is friendly to you and will undertake actions it might normally do, such as a wolf defending its territory. To command the animal to do something out of the ordinary, you must make a PRESENCE roll (quick action). The animal acts on your turn in the initiative order, even on the same turn when you take control.. If there is more than one animal in the target zone, you can control them all as minions (page 100). This power cannot be used on huge creatures. You can find a list of stats for animals on page 152.",
    Major: "",
    Massive: "",
    Monstrous: "",
    Boost_1:
      "Animal Mindlink. You can communicate with an animal within your zone. An animal's thoughts are instinctual and basic, but it can convey simple information about what it has seen or heard.",
    Boost_2: "",
    Boost_3: "",
    Boost_4: "",
    Limit_1:
      "Specific Animal Only. When you use your ANIMAL CONTROL, you can only affect one type of animal, such as birds, reptiles, mammals, or aquatic creatures.",
    Limit_2: "",
  },
  {
    Name: "Barrier",
    Type: "Defense",
    Examples:
      "Force field, nanomesh networking, telekinetic wall, abjuration magic",
    Base: "As a quick action, on your turn or as an interrupt action, you can create a protective shield for yourself or a target in your zone. The barrier has Armor 3, can move with you (or the target) and lasts for a few minutes, until it is breached once, or until you dismiss it. You can have up to three barriers active at the same time.",
    Major:
      "Your barriers have Armor 4 and you can keep up to four simultaneous barriers.",
    Massive: "Armor 5 and up to five barriers.",
    Monstrous: "Armor 6 and six barriers.",
    Boost_1: "",
    Boost_2: "",
    Boost_3: "",
    Boost_4: "",
    Limit_1: "",
    Limit_2: "",
  },
  {
    Name: "Blast",
    Type: "Attack",
    Examples: "Energy beams, firearms, lightning bolts, trick arrows",
    Base: "You can project, shoot, throw, or release a damaging assault against an opponent at a distance. This is a shooting attack with Damage 3, Range 0/3.",
    Major: "Your BLAST has Damage 4, Range 0/4.",
    Massive: "Damage 5, Range 0/5.",
    Monstrous: "Damage 6, Range 0/6.",
    Boost_1:
      "Burst Effect. When using BLAST, you can take 1 point of stress to give the attack area effect (page 48).",
    Boost_2:
      "Quick Blast. If targeted by a shooting attack, you can take 1 point of stress to immediately make a shooting attack as a quick interrupt action, before the attack against you is resolved. Your attack still counts toward your actions for the round.",
    Boost_3:
      "Deadly Blast. The damage from your BLAST counts as sharp (page 96), meaning you can spend an extra to trigger the Deadly Hit stunt.",
    Boost_4: "",
    Limit_1:
      "Exhausting Blast. Any use of the BLAST power inflicts 1 point of stress, in addition to any stress inflicted for pushing.",
    Limit_2:
      "Reduced Range. Your BLAST has a range of 0/1, regardless of its level.",
  },
  {
    Name: "Burrowing",
    Type: "Movement",
    Examples:
      "Digging claws, earth alteration, mole machine, disintegrating touch",
    Base: "As a single (quick or full) action, you can burrow underground up to 2 zones. If you take 1 point of stress, you can burrow up to 4 zones in a single action. Burrowing works like ground movement but ignores all walls and doors. You can choose to wreck (page 90) any zone you burrow under, leveling any building there.",
    Major: "",
    Massive: "",
    Monstrous: "",
    Boost_1:
      "Tunneling. When BURROWING, you make tunnels with enough structural integrity for others to be able to follow you on your path for a few minutes.",
    Boost_2: "",
    Boost_3: "",
    Boost_4: "",
    Limit_1: "",
    Limit_2: "",
  },
  {
    Name: "Camouflage",
    Type: "Modification",
    Examples:
      "Chameleon skin, holo-blending device, camo fatigues, concealment magic",
    Base: "You automatically blend into your surroundings, making you difficult to detect. All INTUITION rolls to spot you (including a surprise attack) get -3 dice. If you didn't move or attack on your previous turn, enemies who declare an attack against you must make a passive INTUITION roll (with -3 dice), forfeiting their action if they fail.",
    Major: "",
    Massive: "",
    Monstrous: "",
    Boost_1:
      "Shared Camouflage. As a quick action, you can share the benefits of your CAMOUFLAGE with up to three allies within your zone by taking an equal amount of stress. The effect lasts for a few minutes.",
    Boost_2: "",
    Boost_3: "",
    Boost_4: "",
    Limit_1: "",
    Limit_2: "",
  },
  {
    Name: "Clairvoyance",
    Type: "Sensory",
    Examples:
      "Psychic third eye, dream travel, scrying magic, hacked satellites",
    Base: "As a full action, you can let your inner eye wander across vast distances to see what is happening at another location within a few zones for a few minutes. This power does not help you find a place - you must know where it is to be able to see it.\nYour remote vision extends from the zone you specify when you use the power into adjacent zones. The GM decides exactly what you can see. Examining an area to find useful information or to spot something or someone from a distance through your remote vision still requires an INTUITION roll unless you have another power such as DETECTION.",
    Major: "The range of your CLAIRVOYANCE extends to several miles.",
    Massive: "Your range extends to anywhere on the planet.",
    Monstrous: "You can view any location in the universe.",
    Boost_1:
      "Specific Location. When you use your CLAIRVOYANCE, you always remotely view the same place - a destination you choose when you select this limit.",
    Boost_2: "",
    Boost_3: "",
    Boost_4: "",
    Limit_1: "",
    Limit_2: "",
  },
  {
    Name: "Cold Control",
    Type: "Control",
    Examples: "Cryokinesis, freeze gun, ice singing, frost wand",
    Base: "You can reduce temperatures to freeze your environment and manipulate ice. As a full action, you can reduce the temperature within your zone or an adjacent zone to below the freezing point to create frost and ice, if there is a water source in your zone or an adjacent zone. You can use this to make a shooting attack with Damage 2, Range 0/1. If you like, you can use this attack to immobilize the target instead of causing damage, preventing it from performing any actions that require physical movement until it has broken free. Doing so requires a STRENGTH roll (full action). As a quick action, on your turn or as an interrupt action, you can create an ice barrier with Armor 3 for yourself or a target in your zone. The barrier lasts until you or the target moves out of the zone, until it is breached once, or until you dismiss it. You can have up to three barriers active at the same time.",
    Major:
      "You can create frost and ice in two adjacent zones, of which one needs to be your zone or an adjacent zone. Your attacks have Damage 3, Range 0/2.",
    Massive: "Three zones, Damage 4, Range 0/3.",
    Monstrous: "Four zones, Damage 5, Range 0/4.",
    Boost_1:
      "Ice Armor. As a quick or interrupt action, you can use your COLD CONTROL to encase yourself in ice to gain Armor 2 for the duration of an action scene (a few minutes).",
    Boost_2:
      "Ice Slide. You can use your COLD CONTROL to move up to 2 zones in a single (quick or full) action. If you take 1 point of stress, you can move up to 4 zones in a single action.",
    Boost_3: "",
    Boost_4: "",
    Limit_1: "",
    Limit_2: "",
  },
  {
    Name: "Danger Sense",
    Type: "Sensory",
    Examples: "Acute scent, arachnid sense, motion tracker, symbiotic warning",
    Base: "You have the useful ability to detect hidden threats. The effects of this are determined by the adventure or the GM. In combat, you cannot be the target of a surprise attack (page 85) - your INTUITION roll is always successful.",
    Major: "",
    Massive: "",
    Monstrous: "",
    Boost_1: "",
    Boost_2: "",
    Boost_3: "",
    Boost_4: "",
    Limit_1: "",
    Limit_2: "",
  },
  {
    Name: "Darkness Control",
    Type: "Control",
    Examples:
      "Shadow animation, void magic, umbrakinesis, light suppression device",
    Base: "You can summon and manipulate darkness and shadows. As a full action, you can generate total darkness within your zone or an adjacent zone. Creatures attempting to move out of this darkness must make an AGILITY roll (no action), and they suffer -2 dice on all slugfest or shooting attacks against targets in the same zone. Affected creatures cannot attack targets in adjacent or further zones. You are never affected by your own darkness. The darkness lasts for a few minutes or until you are broken by damage or leave the scene.",
    Major:
      "You can generate darkness in two adjacent zones, of which one needs to be your zone or an adjacent zone.",
    Massive: "Generate darkness in three adjacent zones.",
    Monstrous: "Generate darkness in four adjacent zones.",
    Boost_1:
      "Dreadful Darkness. Anyone caught in your darkness suffers 2 points of stress on each turn, but may make an INTUITION roll (no action) to resist the effect - each rolled eliminates 1 point of stress.",
    Boost_2: "",
    Boost_3: "",
    Boost_4: "",
    Limit_1: "",
    Limit_2: "",
  },
  {
    Name: "Defiance",
    Type: "Defense",
    Examples:
      "Iron will, psy-shielding helmet, neural fortification device, psychic walls",
    Base: "You have a form of defense against effects that would afflict your mind. This acts as Armor rating 3 against attacks that inflict stress, and gives you +3 dice to resist powers such as STUN, MIND CONTROL, and TELEPATHY. This power has no effect against stress you gain from using a power or pushing an attribute roll (page 82).",
    Major:
      "Your DEFIANCE gives you Armor 4 against stress attacks and +4 dice to resist mind-altering powers.",
    Massive: "Armor 5 against stress, +5 dice to resist powers.",
    Monstrous: "Armor 6 against stress, +6 dice to resist powers.",
    Boost_1: "",
    Boost_2: "",
    Boost_3: "",
    Boost_4: "",
    Limit_1:
      "Requires Activation. Your DEFIANCE is not always active. You can activate it as a quick action on your turn or as an interrupt action, granting you the stress reduction for a few minutes.",
    Limit_2: "",
  },
  {
    Name: "Detection",
    Type: "Sensory",
    Examples:
      "Astral projection, Geiger multi-counter, detection spells, portable scanner",
    Base: "You automatically sense the presence of invisible energies in your zone. Examples include magnetic fields, radiation, psionics, shadowforce, astral energies, and magic. As a quick action, roll INTUITION to sense the presence of such energies within 3 zones.",
    Major: "",
    Massive: "",
    Monstrous: "",
    Boost_1: "",
    Boost_2: "",
    Boost_3: "",
    Boost_4: "",
    Limit_1: "",
    Limit_2: "",
  },
  {
    Name: "Dimensional Travel",
    Type: "Control",
    Examples:
      "Alternate reality shifting, Shadowverse jaunt, Other Realms pendant, wormhole sliding device",
    Base: "You can travel instantly from this dimension to another in a single quick action. If your destination is a parallel dimension, you arrive in the new dimension in the same relative location as your origin point. If it is another kind of dimension, you arrive in a random location. The details of the other dimension are up to the adventure or the GM.",
    Major: "",
    Massive: "",
    Monstrous: "",
    Boost_1:
      "Additional Travelers. You can carry one (and only one) willing target with you to the target dimension. For each point of stress taken, up to 3 points, the number of additional travelers can be increased by 1. The additional travelers must be in the same zone.",
    Boost_2:
      "Quick Travel. By taking 1 point of stress, you can dimensionally travel (even with an ally) as a quick interrupt action, breaking the turn order. If you travel to another dimension in response to an attack, it misses automatically.",
    Boost_3:
      "Create Portals. As a full action, you can open a two-way portal that others can travel through that lasts a few minutes.",
    Boost_4: "",
    Limit_1:
      "Parallel Dimensions Only. You can only travel to parallel dimensions - alternate realities that exist alongside the primary material plane.",
    Limit_2:
      "Specific Dimension. You always teleport to the same dimension - a destination you choose when you select this limit, such as the Shadowverse (page 120), the Flaxan dimension (page 120), or the Other Realms (page 121).",
  },
  {
    Name: "Distress",
    Type: "Attack",
    Examples: "Battle cry, psychic scream, neurotoxin darts, scathing insults",
    Base: "You can assault the mind or willpower of an opponent. This is a shooting attack with Damage 3, Range 0/3. If the attack pierces any armor, the (remaining) damage is converted to stress. You cannot choose any stunts for this attack except Double Damage (which becomes extra stress if the attack penetrates).",
    Major: "Your DISTRESS has Damage 4, Range 0/4.",
    Massive: "Damage 5, Range 0/5.",
    Monstrous: "Damage 6, Range 0/6.",
    Boost_1:
      "Burst Effect. When using your DISTRESS, you can take 1 point of stress to give the attack area effect.",
    Boost_2:
      "Mental Distress. When using your DISTRESS, you can roll for any mental attribute (REASON, INTUITION, or PRESENCE) instead of AGILITY. Also, armor has no effect.",
    Boost_3: "",
    Boost_4: "",
    Limit_1:
      "Exhausting Distress. Any use of the DISTRESS power inflicts 1 point of stress, in addition to any stress inflicted for pushing.",
    Limit_2:
      "Reduced Range. Your DISTRESS has a range of 0/1, regardless of its level.",
  },
  {
    Name: "Duplication",
    Type: "Modification",
    Examples:
      "Amorphous splitting, witch's curse, parallel dimensional selves, robotic bodies",
    Base: "As a full action costing 1 point of stress, you can produce a number of copies of yourself. The exact number is not important, instead your duplicates are represented by a copy bonus of +3.\nYou and your copies move together and must stay in the same zone. When attacking, whether in slugfest or shooting, add your copy bonus to the attack roll. The bonus also applies to any other roll where your copies can help (page 83). The range of your slugfest attacks is increased to 0/1.\nBy taking 1 point of stress, you may, on your turn, perform an additional attack or other full action (not a quick action) instead of gaining the copy bonus.\nWhen you suffer damage, the damage is first applied to your copy bonus. Once it is reduced to zero, all of your copies are knocked out or killed. Any armor level you have is only applied once for each attack. Duplicates last for a few minutes, or until you take a full action to reabsorb them. You can make more copies while you still have copies active, but you cannot exceed your copy bonus.",
    Major: "Your copy bonus is +5.",
    Massive: "Copy bonus +7.",
    Monstrous: "Copy bonus +9.",
    Boost_1:
      "Restorative Duplication. You can reabsorb the duplicates from your DUPLICATION power to heal yourself. As a full action, you can take 1 point of stress to reabsorb your copies to regain a number of points to your Health equal to your current copy bonus.",
    Boost_2:
      "Sequestered Original. You always stay in a safe location and live primarily through one of your duplicates. If you are broken by damage, this primary copy is killed and cannot be rallied. Don't roll for a critical injury. You can then produce a new primary copy and return to action in a few hours. In the meantime, you may talk if you can be heard via comms or powers.",
    Boost_3: "",
    Boost_4: "",
    Limit_1:
      "Traumatic Duplication. Each time your copy bonus is reduced by 1 or more points of damage, you take 1 point of stress.",
    Limit_2: "",
  },
  {
    Name: "Earthquake",
    Type: "Control",
    Examples:
      "Tectonic hammer, ground pound, seismic gauntlets, curse of Perses",
    Base: "You can trigger a localized earthquake within your zone. This counts as a shooting attack with Damage 2, +2 dice, and area effect, (page 48) You are immune to damage from your own EARTHQUAKE, which automatically wrecks the target zone (page 90). If the zone is already wrecked, the attack cannot be made, and the power cannot be used in zones that cannot be wrecked, like open air.",
    Major:
      "Your EARTHQUAKE has base Damage 3 and can cover two adjacent zones, of which one needs to be your own zone or adjacent zone.",
    Massive: "Base Damage 4 in three adjacent zones.",
    Monstrous: "Base Damage 5 in four adjacent zones.",
    Boost_1:
      "Shockwave. You can direct your EARTHQUAKE to damage one specific target instead of a whole zone. The base Damage is increased 1 step. The shockwave doesn't wreck any zone, but all of the zones between you and your target need to be wreckable.",
    Boost_2:
      "Earth Drift. You can use the power to move up to 2 zones in a single (quick or full) action. If you take 1 point of stress, you can move up to 4 zones in a single action.",
    Boost_3: "",
    Boost_4: "",
    Limit_1: "",
    Limit_2: "",
  },
  {
    Name: "Electricity Control",
    Type: "Control",
    Examples:
      "Shock suit, electrokinesis, charged proto-particles, surge shield",
    Base: "As a full action, you can move and control any electrical currents within your zone or an adjacent zone, such as moving current from one machine to another or stopping the flow of electricity altogether to shut down electrical devices. You can use this to make a shooting attack with Damage 3, Range 0/1, as long as there is electrical energy in your zone or an adjacent zone. Any Armor is halved (rounding up) against such an attack, which gets +2 dice against an opponent that is made of conductive materials (such as metal). An electrical attack can also be used to stun an opponent instead of causing damage - instead, if it penetrates any Armor, the target must make an immediate PRESENCE roll (no action) or miss their next turn. They also cannot perform interrupt actions until then.",
    Major:
      "You can control electricity in two adjacent zones, of which one needs to be your zone or an adjacent zone. Your attacks have Damage 4, Range 0/2.",
    Massive: "Three zones, Damage 5, Range 0/3.",
    Monstrous: "Four zones, Damage 6, Range 0/4.",
    Boost_1:
      "Discharge. When you hit with an electric attack, you can take up to 10 points of stress to increase the inflicted damage by the same amount (applied after the Double Damage stunt).",
    Boost_2:
      "Body Battery. If there is electricity in your zone, you can recharge Resolve points. Roll for any mental attribute (REASON, INTUITION, or PRESENCE) - you gain 3 points of Resolve for each rolled (full action). You can even go above your maximum Resolve, but any excess Resolve will dissipate after a few minutes. You can only recharge Resolve in this way once per action scene in the same zone.",
    Boost_3: "",
    Boost_4: "",
    Limit_1: "",
    Limit_2: "",
  },
  {
    Name: "Elongation",
    Type: "Modification",
    Examples: "Plasticity, telescoping arms, excess skin, unstable molecules",
    Base: "You can stretch your body to extend your reach to incredible lengths. This means that you can reach items, and make slugfest attacks against enemies, in any adjacent zone without moving into it.",
    Major: "",
    Massive: "",
    Monstrous: "",
    Boost_1:
      "Plasticity. Your body is so malleable and stretchy that it works as Armor 3 against kinetic attacks, i.e. fists and bullets but not fire or electricity.",
    Boost_2:
      "Stretch Grapple. You can use your stretchy body to grapple an opponent effectively, gaining +3 to the grapple attack and to resist the target breaking free.",
    Boost_3:
      "Elongated Stride. You can use your ELONGATION power to move up to 2 zones in a single (quick or full) action, including vertically along walls. If you take 1 point of stress, you can move up to 4 zones in a single action.",
    Boost_4: "",
    Limit_1: "",
    Limit_2: "",
  },
  {
    Name: "Emanation",
    Type: "Attack",
    Examples: "Flaming aura, acidic skin, guardian spirits",
    Base: "You can surround yourself with a damaging aura. You can activate this power with a quick action (even as an interrupt). Once activated, your Slugfest Damage is increased by +2. The effect cannot be combined with any bonus from STRIKE or SIZE ALTERATION. In addition, anyone who touches you (including a slugfest attack) suffers 3 points of damage (on each turn, in the case of continuous contact). The effect lasts until your next turn.",
    Major: "",
    Massive: "",
    Monstrous: "",
    Boost_1:
      "Potent Emanation. Your EMANATION increases your slugfest damage by +3 and anyone who touches you suffers 4 points of damage.",
    Boost_2: "",
    Boost_3: "",
    Boost_4: "",
    Limit_1:
      "Continual Emanation. Your EMANATION is always active and cannot be turned off, meaning that unprotected creatures and objects take damage when you touch them.",
    Limit_2: "",
  },
  {
    Name: "Empathy",
    Type: "Sensory",
    Examples:
      "Extrasensory perception, mood organ, hyper-intuitive reading, enchantment magic",
    Base: "As a full action, you can sense the emotional state of a target within your zone. You get +3 dice to INTUITION rolls to determine if an NPC is lying. As a full action, you can also make a PRESENCE roll to implant an emotion in a target in your zone. For each rolled, you can take away 1 point of Resolve from the target, or restore 3 points of lost Resolve for an ally.",
    Major: "",
    Massive: "",
    Monstrous: "",
    Boost_1:
      "Mass Empathy. You may spend 1 point of stress to affect everyone in your zone (except yourself) with your EMPATHY. Roll once for PRESENCE and apply the result to all targets.",
    Boost_2: "",
    Boost_3: "",
    Boost_4: "",
    Limit_1: "",
    Limit_2: "",
  },
  {
    Name: "Enhanced Senses",
    Type: "Sensory",
    Examples:
      "Telescopic sight, scent tracking, vibration perception, radar sense",
    Base: "Your normal senses allow you to acutely detect faraway details as if you stood right next to the object in question. You can sense through darkness, through smoke and fog, and automatically sense through any kind of disguise or shapeshift. An INTUITION roll could still be required to interpret what is sensed using this power - the GM has final say on the limits for its use.",
    Major: "",
    Massive: "",
    Monstrous: "",
    Boost_1:
      "Detect Lies. You can automatically tell when someone in your zone is lying.",
    Boost_2:
      "Penetrating Sense. Your ENHANCED SENSES are unaffected by barriers, such as doors and walls.",
    Boost_3: "",
    Boost_4: "",
    Limit_1:
      "Specific Sense. Only one of your senses is enhanced (sight, hearing, smell, taste, or touch), meaning you can only sense faraway details applicable to the chosen sense.",
    Limit_2:
      "Reduced Sense. Your sight or hearing is dramatically reduced, meaning you can't use this sense for this power, and INTUITION rolls relying on it automatically fail.",
  },
  {
    Name: "Extra Limb(s)",
    Type: "Modification",
    Examples:
      "Prehensile tail, mechanical octo-arms, alien containment harness, symbiotic tentacles",
    Base: "You have one or more additional arms, tentacles, or other appendages capable of grasping. When you make a grapple attack in slugfest, you get +2 dice to your attack roll. As opposed to a normal grapple, you can perform other actions while the grapple is held, and you get +2 dice to your STRENGTH roll to resist your target breaking free. You can still only grapple one target at a time.",
    Major: "You get +3 dice to grapple and to resist the target breaking free.",
    Massive: "+4 dice.",
    Monstrous: "+5 dice.",
    Boost_1:
      "Multiple Limbs. You can grapple (and hold) up to three opponents with a single action. Make a single attack roll, but any blocks are rolled separately.",
    Boost_2: "",
    Boost_3: "",
    Boost_4: "",
    Limit_1: "",
    Limit_2: "",
  },
  {
    Name: "Fire Control",
    Type: "Control",
    Examples: "Pyrokinesis, demonic heritage, pyromancy, inferno staff",
    Base: "You can manipulate flames and heat. As a full action, you can extinguish a fire within your zone or an adjacent zone, increase the Intensity (page 104) of a fire by up to 3 points, or spread a fire to an adjacent zone. You can use this power to make a shooting attack with Damage 3, Range 0/1 as long as there is fire in your zone or an adjacent zone. If the target takes damage from the attack, they catch fire with Intensity (page 104) equal to the base Damage of your attack. By taking 1 point of stress, you can also choose to set the target's zone ablaze with Intensity 6. You are completely immune to fire damage yourself.",
    Major:
      "You can control fire in two adjacent zones, of which one needs to be your zone or an adjacent zone. You can increase Intensity up to 4 points and your attacks have Damage 4, Range 0/2.",
    Massive: "Three zones, Intensity +5, Damage 5, Range 0/3.",
    Monstrous: "Four zones, Intensity +6, Damage 6, Range 0/4.",
    Boost_1:
      "Conflagration. When using your FIRE CONTROL to perform a shooting attack, you can take 1 point of stress to give the attack area effect (page 48).",
    Boost_2:
      "Firestarter. You can generate your own fire to make a shooting attack or trigger an Intensity 6 blaze in your own zone or an adjacent zone.",
    Boost_3: "",
    Boost_4: "",
    Limit_1:
      "Destructive Flames. When using your FIRE CONTROL, you can't extinguish fire, only increase its Intensity.",
    Limit_2: "",
  },
  {
    Name: "Flight",
    Type: "Movement",
    Examples: "Wings, jet pack, specialized cape, magic carpet",
    Base: "You can fly up to 2 zones in a single (quick or full) action. If you take 1 point of stress, you can fly up to 4 zones in a single action. Read more about vertical movement on page 86.",
    Major:
      "You can fly 4 zones in a single action, and 8 zones if you take 1 point of stress.",
    Massive: "You can fly 8/16 zones.",
    Monstrous: "You can fly 16/32 zones.",
    Boost_1:
      "Interstellar Flight. Outside of combat, you can use your FLIGHT to cross space at faster-than-light speed, allowing you to travel to other planets or even galaxies. This boost can't be used while in a planet's atmosphere or in combat. You don't gain any means to survive in space from this boost - that requires LIFE SUPPORT.",
    Boost_2: "",
    Boost_3: "",
    Boost_4: "",
    Limit_1:
      "Gliding. You can only glide with your FLIGHT power, meaning you cannot enter zones at a higher altitude than where you started. You also cannot stop mid-air, needing to use at least one quick action per turn on movement until you land.",
    Limit_2: "",
  },
  {
    Name: "Gravity Control",
    Type: "Control",
    Examples:
      "Nano-tractor gun, gyrokinesis, floortilting, personal grav-repulsors",
    Base: "As a full action, you can reduce or increase the effects of gravity within your zone or an adjacent zone, affecting both the ground zone and the elevated zone above it (page 84). If you reduce gravity, all characters and loose objects immediately move to elevated altitude, floating in the air. Getting down to the ground requires an AGILITY roll or use of the FLIGHT or SWINGING powers (quick action), but any further actions taken inside the affected zone require an AGILITY roll first (no action) or the action is forfeit. If you increase gravity, all objects in the zone are treated as having a weight rating 3 higher than normal. All characters at elevated altitude immediately crash to the ground, taking falling damage (page 87). Also, no aerial movement in the zone is possible, and ground movement becomes a full action requiring a STRENGTH roll.",
    Major: "",
    Massive: "",
    Monstrous: "",
    Boost_1:
      "Precise Control. You can choose which objects or targets are affected in a zone when you reduce or increase gravity.",
    Boost_2: "",
    Boost_3: "",
    Boost_4: "",
    Limit_1: "",
    Limit_2: "",
  },
  {
    Name: "Guidance",
    Type: "Control",
    Examples:
      "Natural leadership, spiritual assistance, ancestral evocation, compelling charisma",
    Base: "As a full action, you may make a PRESENCE roll, and for each rolled, you can inspire one other hero that you can communicate with to immediately take a bonus action (full or quick) of your choice on your turn, without affecting their own turn. The target can refuse the action but cannot take another bonus action instead. Also, as a quick interrupt action, you may make a PRESENCE roll to allow another hero to block or dodge an attack without spending any action of their own.",
    Major: "",
    Massive: "",
    Monstrous: "",
    Boost_1: "",
    Boost_2: "",
    Boost_3: "",
    Boost_4: "",
    Limit_1: "",
    Limit_2: "",
  },
  {
    Name: "Healing",
    Type: "Modification",
    Examples:
      "Divine touch, radiant energy, restoration magic, staff of health",
    Base: "As a full action, you can make a PRESENCE roll to heal yourself or a target you touch. If you succeed, the target recovers 3 points of lost Health for each rolled. This power does not heal critical injuries unless you have the Miraculous Recovery boost (below).",
    Major: "",
    Massive: "",
    Monstrous: "",
    Boost_1:
      "Distant Healing. You can use your HEALING on a target within your zone or an adjacent zone.",
    Boost_2:
      "Mass Healing. You can heal one additional target in your zone for each point of stress you take. Roll once for PRESENCE and apply the result to all targets.",
    Boost_3:
      "Cleansing Healing. When you use your HEALING, you remove all effects of a disease, contagion, or poison from your target instead of healing lost Health.",
    Boost_4:
      "Miraculous Recovery. You can heal any critical injury on your target by rolling at least one in your PRESENCE roll, instead of healing lost Health.",
    Limit_1:
      "Life Leech. You can only heal yourself with this power, and the target loses the same amount of Health as you heal. Armor has no effect. You must make a FIGHTING roll to touch an unwilling target (combined in the same action as your PRESENCE roll).",
    Limit_2: "",
  },
  {
    Name: "Illusion",
    Type: "Control",
    Examples:
      "Ethereal projections, holograms, psychic phantasms, deception magic",
    Base: "As a full action, you can make a target see or hear something that isn't there, or hide something that otherwise would be seen within your zone or an adjacent zone. The illusion can be up to human-sized and only one target is affected. The target can reveal the illusion with a passive INTUITION roll (no action, cannot be pushed). If the roll fails, the target must act as if the illusion is real. The illusion lasts for a few minutes, but any attack that hits it will reveal its false nature and remove its effects. This power has no effect on huge creatures (page 92).",
    Major:
      "The illusion can be up to the size of a car and the target gets -1 die to the INTUITION roll.",
    Massive: "Up to the size of a bus, -2 dice to INTUITION roll.",
    Monstrous: "Building-sized, -3 dice to INTUITION roll.",
    Boost_1:
      "Area Projection. If you take 1 point of stress, your ILLUSION will affect any number of targets within your zone or an adjacent zone.",
    Boost_2:
      "Terrifying Illusions. The target of your illusion suffers 3 points of stress, minus 1 for each rolled in the INTUITION roll. If no are rolled, the target also loses their next turn and cannot perform interrupt actions before then.",
    Boost_3:
      "Remote Projection. If you take 1 point of stress, you can project your ILLUSION to any target that you can perceive (even via comms), regardless of distance.",
    Boost_4:
      "Dream Projection. You can use your ILLUSION power to project illusory images into the mind of a sleeping target. The target will vividly remember these projections.",
    Limit_1: "",
    Limit_2: "",
  },
  {
    Name: "Immortality",
    Type: "Defense",
    Examples:
      "Divine livelihood, everlasting life, android body, boon of vitality",
    Base: "You don't age and can't die by normal means. If you die, you return to life within a few weeks, as long as you do not suffer any additional damage while your body repairs itself. This power heals all critical injuries (page 96), and regenerates lost body parts, and restores all lost Health and Resolve - but only if you actually died.\nYou must define circumstances where you could stay dead when you select this power - such as being beheaded, someone destroying a magical portrait, or getting staked through the heart. The GM has final say.",
    Major: "You return to life after a few days.",
    Massive: "You return to life after a few hours.",
    Monstrous: "You return to life after a few minutes",
    Boost_1: "",
    Boost_2: "",
    Boost_3: "",
    Boost_4: "",
    Limit_1: "",
    Limit_2: "",
  },
  {
    Name: "Immunity",
    Type: "Defense",
    Examples:
      "Adrenaline boosters, mythic blessing, fireproof skin, inoculating serum",
    Base: "You are immune to all damage from one non-kinetic source such as fire, disease, electricity, radiation, toxins, and similar - but not fists or bullets. You need to specify your IMMUNITY with the approval of the GM, who also has final say on whether your IMMUNITY applies to a particular effect.",
    Major: "",
    Massive: "",
    Monstrous: "",
    Boost_1:
      "Full Immunity. You are immune to damage from all non-kinetic sources.",
    Boost_2: "",
    Boost_3: "",
    Boost_4: "",
    Limit_1: "",
    Limit_2: "",
  },
  {
    Name: "Intangibility",
    Type: "Modification",
    Examples:
      "Density reduction, extradimensional sliding, ectoplasmic shifting, empty body discipline",
    Base: "You can phase and become temporarily intangible (no action), allowing you to move through a wall or other barri­er. After the move, you solidify again. When attacked in slug­fest or shooting, you can take 1 point of stress to phase as a quick interrupt action, making the attack miss automatically.",
    Major: "",
    Massive: "",
    Monstrous: "",
    Boost_1:
      "Prolonged Phasing. You can become intangible with a quick action and stay intangible for a few minutes. While intangible, you are immune to physical damage and can pass through solid objects, but you are unable to physically affect the world around you. You can still use, and be affected by, mental powers and effects.",
    Boost_2:
      "Controlled Phasing. Requires Prolonged Phasing (above). While intangible, you can take 1 point of stress to rapidly solidify and re-phase a part of your body, allowing you to affect the physical world for a single action (quick or full), including an attack.",
    Boost_3:
      "Shared Intangibility. When you use INTANGIBILITY, you can share the effect with up to four other (up to human-sized) objects or creatures in your zone by taking an equal amount of stress. You need to be in physical contact with them all.",
    Boost_4:
      "Environment Phasing. You can briefly phase the ground under an opponent in your zone and re-solidify it to trap the target's feet. A STRENGTH roll with -2 dice (quick action) is required to break free, and until then the target cannot move or perform slugfest attacks.",
    Limit_1: "",
    Limit_2: "",
  },
  {
    Name: "Invisibility",
    Type: "Sensory",
    Examples:
      "Light bending, psychic displacement, deception magic, color blind water suit",
    Base: "As a quick action, you can turn invisible for a few minutes. Spotting you, even in the same zone, requires an INTUITION roll with -3 dice (no action). In combat, you cannot be attacked by an enemy who fails this roll, and their attack action is forfeit. If you (alone) make a surprise attack while invisible, your opponent(s) gets -3 dice to their INTUITION roll. The effects end if you make an attack or are broken.",
    Major: "",
    Massive: "",
    Monstrous: "",
    Boost_1: "",
    Boost_2: "",
    Boost_3: "",
    Boost_4: "",
    Limit_1: "",
    Limit_2: "",
  },
  {
    Name: "Leaping",
    Type: "Movement",
    Examples:
      "Powerful legs, jump boots, gravity fluctuation, rocket thrusters",
    Base: "You can leap up to 2 zones in a single (quick or full) action. If you take 1 point of stress, you can leap up to 4 zones in a single action. You can leap over buildings and through other elevated zones, but you must end your movement on the ground or a rooftop. If you use this power to charge a target (page 92), you gain +2 dice. You can even charge a target at elevated altitude.",
    Major:
      "You can leap 4 zones in a single action, and 8 zones if you take 1 point of stress.",
    Massive: "You can leap 8/16 zones.",
    Monstrous: "You can leap 16/32 zones.",
    Boost_1: "",
    Boost_2: "",
    Boost_3: "",
    Boost_4: "",
    Limit_1: "",
    Limit_2: "",
  },
  {
    Name: "Life Support",
    Type: "Modification",
    Examples:
      "Lifeforce stabilization, breath suspension, celestial sustenance, suspended vitals apparatus",
    Base: "By taking 1 point of stress, you can ignore essential physical needs like breathing, eating, or sleeping while in a hazardous environment - such as the vacuum of space - for a few days.",
    Major: "",
    Massive: "",
    Monstrous: "",
    Boost_1:
      "Effective Support. By taking 1 point of stress, you can ignore essential needs for a few weeks instead of a few days.",
    Boost_2: "",
    Boost_3: "",
    Boost_4: "",
    Limit_1:
      "Breathing Only. You can ignore the need to breathe with your LIFE SUPPORT power, but you still require food and sleep.",
    Limit_2: "",
  },
  {
    Name: "Light Control",
    Type: "Control",
    Examples:
      "Photokinesis, chromatic scaling, ultraviolet amplification, prismatic mask",
    Base: "You can manipulate the visible light spectrum. As a full action, you can generate and control light energy within your zone or an adjacent zone, intensifying its brightness or dimming it completely. You can focus light into concentrated light beams to temporarily blind and disable an opponent. This works as a shooting attack with Range 0/1. The attack does not inflict any damage - instead, on a hit, the target must make an immediate PRESENCE roll (no action) or miss their next turn. They also cannot perform interrupt actions until then. Armor has no effect. The effect doesn't work against huge creatures, nor against characters who don't depend on vision.",
    Major: "",
    Massive: "",
    Monstrous: "",
    Boost_1:
      "Burst Effect. You can take 1 point of stress to give your blinding attack area effect (page 48).",
    Boost_2: "",
    Boost_3: "",
    Boost_4: "",
    Limit_1: "",
    Limit_2: "",
  },
  {
    Name: "Luck Control",
    Type: "Control",
    Examples:
      "Dark blessing, guardian angel, fate spells, probability matrix device",
    Base: "You can alter the results of random chance within your zone or an adjacent zone. As a quick interrupt action, you can take 1 point of stress to give a target -1 or +1 die on the roll for an action they are about to perform. Also as a quick interrupt action, you can take 1 point of stress to force a re-roll for a critical injury (page 96) on yourself or another character, choosing the result you prefer.",
    Major:
      "You can give the target -2 or +2 dice, still taking 1 point of stress.",
    Massive: "You can give -3/+3 dice.",
    Monstrous: "You can give -4/+4 dice.",
    Boost_1: "",
    Boost_2: "",
    Boost_3: "",
    Boost_4: "",
    Limit_1:
      "Good Luck Only. You can only add dice to the affected roll. When re-rolling a critical injury, you must choose the lower roll.",
    Limit_2:
      "Bad Luck Only. You can only remove dice from the roll. When re-rolling a critical injury, you must choose the higher roll.",
  },
  {
    Name: "Magnetism Control",
    Type: "Control",
    Examples:
      "Magical lodestone, magnetic field generator, electromagnetic flux, runic cane sword",
    Base: "You can manipulate magnetic fields to control metal. As a full action, you can move and control any magnetic metal (such as iron and steel) within your zone or an adjacent zone up to weight rating 4 (400 lb.). This can be increased up to 2 steps by taking an equal amount of stress.\nYou can use this to make a shooting attack with Damage 3, Range 0/2 as long as there are magnetic metal objects in your zone or an adjacent zone. If you like, you can use this attack to immobilize the target instead of causing damage, preventing it from performing any actions that require physical movement until it has broken free. Doing so requires a STRENGTH roll (full action).\nAgainst an opponent that is made of metal (fully or partially), these attacks can be used even if there is no other metal around. You can also use this power to block any attack using metal (even a shooting attack, your counterattacks have Damage 3).",
    Major:
      "You can control metal up to weight rating 6 (1 ton) and your attacks have Damage 4, Range 0/3.",
    Massive: "Weight limit 8 (10 tons), Damage 5, Range 0/4.",
    Monstrous: "Weight limit 10 (100 tons), Damage 6, Range 0/5.",
    Boost_1: "",
    Boost_2: "",
    Boost_3: "",
    Boost_4: "",
    Limit_1: "",
    Limit_2: "",
  },
  {
    Name: "Matter Control",
    Type: "Control",
    Examples:
      "Subatomic command, celestial spirit, mass fluctuation device, primal magic",
    Base: "You can manipulate the fundamental substance of the universe. As a full action, you can control any non-living physical matter within your zone or an adjacent zone up to weight rating 4 (400 lb.), moving it within the zone or into an adjacent zone. The weight limit can be increased up to 2 steps by taking an equal amount of stress.\nYou can use this to make a shooting attack with Damage 3, Range 0/1, using matter in your zone or an adjacent zone. You can take 1 point of stress to give the attack an area effect (page 48). You can also wreck (page 90) the zone you take the matter from to gain bonus dice to the attack if the weight rating you can control matches or exceeds the minimum STRENGTH required to wreck the zone type (page 90). An already wrecked zone cannot be used for such an attack.\nThis power is very versatile - the GM has final say on the limits for its use.",
    Major:
      "You can control matter up to weight rating 6 (1 ton) and your attacks have Damage 4.",
    Massive: "Weight limit 8 (10 tons), Damage 5.",
    Monstrous: "Weight limit 10 (100 tons), Damage 6.",
    Boost_1: "",
    Boost_2: "",
    Boost_3: "",
    Boost_4: "",
    Limit_1:
      "Specific Matter. You can only manipulate a specific type of matter that needs to be specified when you create your hero, such as stone, wood, or sand.",
    Limit_2: "",
  },
  {
    Name: "Mimicry",
    Type: "Control",
    Examples:
      "Alien wristwatch, vampiric gift, magical amulet, touch assimilation",
    Base: "As a full action, you can copy one attribute or power from a target in your zone. You can use the copied attribute or power (including any boosts and limits) as if you had it for a few minutes. You can only copy one attribute or power at a time. You only gain the benefit of a copied attribute up to a score of 6 and a power at its basic level (page 48).",
    Major:
      "You can mimic an attribute rating up to 8 and a power level up to Major.",
    Massive: "Attribute limit 10, power level limit Massive.",
    Monstrous: "Attribute limit 12, power level limit Monstrous.",
    Boost_1:
      "Multiple Mimicry. You can copy any combination of up to 3 attributes or powers at a time.",
    Boost_2:
      "Power Leech. You need to touch your target (successful slugfest attack, no damage) to copy their attribute or power, but if you do, they lose their power or their attribute rating is halved (round up) while the effect lasts.",
    Boost_3: "",
    Boost_4: "",
    Limit_1: "",
    Limit_2: "",
  },
  {
    Name: "Mind Control",
    Type: "Control",
    Examples:
      "Psychic intrusion, demonic domination, brain parasites, staff of suggestion",
    Base: "As a full action, you can attempt to take control of a sentient creature within your zone or an adjacent zone. Make an opposed PRESENCE roll against the target (no action for the target). If you win, the target immediately takes a full turn (even if they have already had their turn in the round) with a full and a quick action (or two quick actions), on your command. The target then loses their next ordinary turn, and cannot perform interrupt actions before then.\nOutside of combat, you can control a target's actions for a few minutes. During this time, the target may make a straight PRESENCE roll to break your control any time you force them to take an action that they wouldn't ordinarily perform. This power cannot be used against huge creatures.",
    Major: "",
    Massive: "",
    Monstrous: "",
    Boost_1:
      "Area Control. You can attempt to take control of multiple targets in your zone or an adjacent zone by taking 1 point of stress for each target beyond the first. You roll once for PRESENCE while each target rolls separately to resist.",
    Boost_2: "",
    Boost_3: "",
    Boost_4: "",
    Limit_1:
      "Hypnosis. You need to go through the process of hypnosis to control someone's mind, so you can only use your MIND CONTROL power outside of combat.",
    Limit_2:
      "Requires Touch. You can only use your MIND CONTROL power while touching the target, requiring you to perform a successful slugfest attack (that causes no damage) as part of the power's use.",
  },
  {
    Name: "Nullification",
    Type: "Control",
    Examples: "Counterspells, micro radiation, negation gun, power leeching",
    Base: "You can negate powers to prevent or end their effects.\nAs a quick action on your turn or as an interrupt action, you can make a PRESENCE roll to end an ongoing power effect in your zone or an adjacent zone, or negate a target's power as the target is about to use it - in this case, an opposed PRESENCE roll is required (no action for the target). Only basic power levels are affected, and you must decide to use NULLIFICATION before the target rolls any dice for using their power. The target's action is forfeit if their power is negated when about to use it. If used against a passive power, its effects are negated until your next turn.",
    Major: "You can negate basic and Major powers.",
    Massive: "Negate Massive (and lower) powers.",
    Monstrous: "Negate Monstrous (and lower) powers.",
    Boost_1: "",
    Boost_2: "",
    Boost_3: "",
    Boost_4: "",
    Limit_1: "",
    Limit_2: "",
  },
  {
    Name: "Plant Control",
    Type: "Control",
    Examples:
      "Photosynthetic surge, chlorokinesis, pheromone sensitivity, hood of the woodlands",
    Base: "As a full action, you can control and animate any plants within your zone or an adjacent zone. You can stimulate the plants to rapidly grow, creating lush greenery in a single round.\nYou can use this power to make a slugfest attack with Damage 3 at a target in the affected zone, as long as there are plants there. The attack can be blocked (page 89), but it cannot trigger a counterattack against you. If you use the attack to grapple the target and succeed, you don't need to keep the hold. Instead, the target is immobilized and cannot perform any actions that require physical movement (including slugfest and shooting attacks) until it has broken free. Doing so requires a STRENGTH roll (full action).",
    Major:
      "Your PLANT CONTROL can cover two adjacent zones, of which one needs to be your own zone or an adjacent zone. Your plant attacks have base Damage 4.",
    Massive: "Three adjacent zones, base Damage 5.",
    Monstrous: "Four adjacent zones, base Damage 6.",
    Boost_1:
      "Massive Growth. When using your PLANT CONTROL to perform a slugfest attack, you can take 1 point of stress to give the attack area effect.",
    Boost_2:
      "Lifeseed. By taking 1 point of stress, you can bring plants to life within your zone as a quick action, as long as the area can support plant life, as determined by the GM.",
    Boost_3: "",
    Boost_4: "",
    Limit_1: "",
    Limit_2: "",
  },
  {
    Name: "Postcognition",
    Type: "Sensory",
    Examples:
      "Mental flashback, divination magic, psychometry, temporal recall",
    Base: "You can see events that have transpired in the past at the location where you are, or near an object that you touch, even if those events are no longer remembered by any living being. Your visions are typically quite brief - from a single round up to a few minutes - and are often fragmented and cryptic. The GM or an adventure text decides exactly what you can see.",
    Major: "",
    Massive: "",
    Monstrous: "",
    Boost_1: "",
    Boost_2: "",
    Boost_3: "",
    Boost_4: "",
    Limit_1: "",
    Limit_2: "",
  },
  {
    Name: "Precognition",
    Type: "Sensory",
    Examples:
      "Psychic foresight, divination magic, tachyon retrieval, prophetic premonitions",
    Base: "As a full action and by taking 1 point of stress, you can ask a short `yes` or `no` question about anything in the world. The GM must answer `yes,` `no,` or `maybe.` They cannot lie. The GM can choose `maybe` even if they know the answer, but believes that the true answer may disrupt the game. Note that true or false is not an objective fact, but is defined by who is asking the question.\nIf you take 3 points of stress and concentrate for a few minutes, you can see visions of the future. You ask the GM questions about yourself or someone else present. The GM answers as best they can. The answer must be brief, and is often ambiguous and cryptic. The answer can also come in the form of a sign of happiness, or a foreboding sign of ill fortune. Remember, this power provides insight into possible futures that might not come to pass if the underlying circumstances change.",
    Major: "",
    Massive: "",
    Monstrous: "",
    Boost_1: "",
    Boost_2: "",
    Boost_3: "",
    Boost_4: "",
    Limit_1: "",
    Limit_2: "",
  },
  {
    Name: "Protection",
    Type: "Defense",
    Examples:
      "Exoskeleton, stone skin, powered armor, personal psychokinetic field",
    Base: "You have a form of defense that reduces physical damage you take, giving you Armor 2 against all attacks.",
    Major: "Armor 3",
    Massive: "Armor 4",
    Monstrous: "Armor 5",
    Boost_1:
      "Energy Absorption. Each damage point absorbed by your PROTECTION gives you a bonus die that can be used for any FIGHTING, STRENGTH or AGILITY rolls you make on your next turn (or interrupt actions before then). If you are attacked multiple times, the bonus stacks. Once a die is used, it is spent and removed. Any dice not used on your next turn are lost as the energy dissipates.",
    Boost_2:
      "Impervious. Your body is built differently and able to function despite grevious injuries. Critical injuries have no effect on you unless instantly fatal (12+ on the table on page 96). You are also immune to the Deadly Hit stunt (page 89 and 93).",
    Boost_3:
      "Redirecting Blast. When you absorb damage with your PROTECTION, you can use a quick interrupt action to immediately perform a shooting attack with Damage equal to the damage points absorbed, Range 0/3.",
    Boost_4: "",
    Limit_1:
      "Requires Activation. Your PROTECTION must be activated (quick action) on your turn or as an interrupt action, granting you the armor for a few minutes.",
    Limit_2: "",
  },
  {
    Name: "Quickness",
    Type: "Modification",
    Examples:
      "Feline grace, hyper-celerity, time warping, motor-assisted movement suit",
    Base: "You have lighting-fast reflexes, heightened decisiveness, or enhanced reaction time. Once per round, you can gain an extra action (quick or full) by taking 1 point of stress, on your turn or as an interrupt action.",
    Major: "",
    Massive: "",
    Monstrous: "",
    Boost_1: "",
    Boost_2: "",
    Boost_3: "",
    Boost_4: "",
    Limit_1: "",
    Limit_2: "",
  },
  {
    Name: "Regeneration",
    Type: "Defense",
    Examples:
      "Healing factor, synthetic body mesh, werewolf curse, advanced stimulants",
    Base: "You heal more rapidly than normal. On each turn in an action scene, you automatically heal 1 point of lost Health. After the action scene is over, you heal any remaining damage in a few minutes. Also, your healing time for critical injuries is reduced by two time categories (page 9).",
    Major: "",
    Massive: "",
    Monstrous: "",
    Boost_1: "",
    Boost_2: "",
    Boost_3: "",
    Boost_4: "",
    Limit_1: "",
    Limit_2: "",
  },
  {
    Name: "Shapeshifting",
    Type: "Modification",
    Examples:
      "Martian morphing, mask of many faces, nanite reconfiguration, polymorph magic",
    Base: "As a full action, you can alter your shape to assume the form of other creatures or objects, taking on their appearance and physical traits for a few hours or until you are broken. You can grow wings, allowing you to fly up to 2 zones in a single (quick or full) action. You can use this to impersonate another character, although people who know the original well get to make an INTUITION roll to notice that something is off. A character with ENHANCED SENSES automatically sees through your disguise.",
    Major: "",
    Massive: "",
    Monstrous: "",
    Boost_1:
      "Potent Form. While shapeshifted, your STRENGTH or AGILITY increases by 2.",
    Boost_2: "",
    Boost_3: "",
    Boost_4: "",
    Limit_1:
      "Specific Form. You can only transform into one form that needs to be specified when you create your hero.",
    Limit_2: "",
  },
  {
    Name: "Signature Item",
    Type: "Modification",
    Examples:
      "Rare metal alloy shield, magical cloak, forever blade, hex crystal hammer",
    Base: "You have a special item that enhances your capabilities and serves as a focus for your powers. Choose one attribute - when using your signature item, you get +2 dice to all rolls for that attribute.\nOn the flipside, if your signature item is lost, taken, neutralized, destroyed, or otherwise rendered non-operational, you lose the dice bonus as well as access to all powers with the same power source as the item until you regain access to it.",
    Major: "The bonus for using your signature item is increased to +3.",
    Massive: "The bonus is increased to +4.",
    Monstrous: "Bonus +5.",
    Boost_1:
      "Blocking Item. You can use your signature item to block even shooting attacks.",
    Boost_2:
      "Throwable Item. You can throw your signature item, using it for a shooting attack with a Damage and maximum Range equal to half your STRENGTH (rounded up), minimum Range 0. Your item always returns to your hand.",
    Boost_3: "",
    Boost_4: "",
    Limit_1:
      "Item Dependent. If you lose access to the item, your highest three attribute scores (choose in case of a tie) are all halved (rounding fractions up). Note down the reduced scores in parentheses, along with any reduced maximum Health, maximum Resolve, and Slugfest Damage ratings. If your current Health or Resolve is lower than your reduced maximum score when you lose the item, you keep your current score.",
    Limit_2: "",
  },
  {
    Name: "Size Alteration",
    Type: "Modification",
    Examples:
      "Nano-particles, herbal enchantment, variable nanotech, height-altering crystals",
    Base: "As a full action, you can dramatically increase or decrease your size for a few minutes. Choose either to grow or shrink each time you use this power. Your clothes or equipment do not change size with you unless they are made of flexible molecules or special materials.\nWhen you grow, your STRENGTH is increased by 2 (to a maximum of 12), increasing your Slugfest Damage (cannot be combined with any bonus from STRIKE or EMANATION), while your AGILITY is reduced by 2 (to a minimum of 1). You can move up to 2 zones in a single (quick or full) action. In slugfest, you can attack elevated targets, and you are immune to grappling and the Knockback and Slam stunts (page 88 and 92).\nWhen you shrink, your AGILITY is increased by 2, while your STRENGTH is reduced by 2 (to a minimum of 1), reducing your Slugfest Damage. You can navigate very small spaces and all physical attacks against you get -2 dice.",
    Major:
      "Your STRENGTH and AGILITY are modified by +3/-3, also affect­ing your Slugfest Damage. Attacks against you when shrunk get -3 dice.",
    Massive:
      "STRENGTH and AGILITY are modified by +4/-4. Attacks against you when shrunk get -4 dice.",
    Monstrous:
      "STRENGTH and AGILITY are modified by +5/-5. Attacks against you when shrunk get -5 dice.",
    Boost_1: "",
    Boost_2: "",
    Boost_3: "",
    Boost_4: "",
    Limit_1:
      "Grow Only. You can only use your SIZE ALTERATION to grow, or you are always huge (your choice).",
    Limit_2:
      "Shrink Only. You can only use your SIZE ALTERATION to shrink, or you are always tiny.",
  },
  {
    Name: "Snare",
    Type: "Attack",
    Examples: "Bolas, psychic restraints, plasma net, webbing",
    Base: "You can bind and restrict an opponent's movement. This is a shooting attack with Range 0/1. If it hits, the target is immobilized and cannot perform any actions that require physical movement (including slugfest and shooting attacks) until it has broken free. Doing so requires a STRENGTH roll with -2 dice (full action). SNARE doesn't work against huge creatures. No shooting stunts (page 93) can be chosen when using this power.",
    Major: "The target gets -3 dice to break free.",
    Massive: "-4 dice to break free.",
    Monstrous: "-5 dice to break free.",
    Boost_1:
      "Multiple Snares. When using SNARE, you can attack up to 3 opponents at a time, with a single action. Make a single attack roll, but attempts to dodge are rolled individually.",
    Boost_2: "",
    Boost_3: "",
    Boost_4: "",
    Limit_1:
      "Immobilize Only. When using your SNARE, grappled opponents can perform actions normally, but they still cannot move until they break free.",
    Limit_2: "",
  },
  {
    Name: "Sorcery",
    Type: "Control",
    Examples:
      "Harnessing occult entities, mystic arts, supernatural overflow, arcane artifact",
    Base: "You can cast spells to create a variety of effects by tapping into a powerful source. As a full action, roll for PRESENCE to prepare a spell that duplicates the effects of any other power of your choosing. If the roll succeeds, you can take 1 point of stress to use the power for a few minutes or until you become broken. You can only duplicate the effects of one power at a time. The duplicated power is always the basic version if the power has levels. If the PRESENCE roll fails, you cannot attempt to duplicate the same power again for a few hours.",
    Major: "",
    Massive: "",
    Monstrous: "",
    Boost_1:
      "Signature Spell. Choose a power. When you use SORCERY to duplicate the effects of the chosen power, its power level is Major. You can select this boost again to use the duplicated power at the Massive level, and again to use it at the Monstrous level.",
    Boost_2: "",
    Boost_3: "",
    Boost_4: "",
    Limit_1:
      "Ritual Casting. When you use SORCERY to duplicate the effects of a power, the preparation takes a few minutes instead of an action.",
    Limit_2: "",
  },
  {
    Name: "Sound Control",
    Type: "Control",
    Examples:
      "Sonokinesis, vibrations attunement, hyper-ventriloquism, sound wave stimulation",
    Base: "As a full action, you can generate and control sonic energy within your zone or an adjacent zone, changing its pitch or tone, amplifying its intensity, or dampening it completely. To imitate a particular sound convincingly, you need to make a PRESENCE roll.\nYou can focus sound into a concentrated burst to temporarily deafen and disable an opponent. This works as a shooting attack with Range 0/1. The attack does not inflict any damage - instead, on a hit, the target must make an immediate PRESENCE roll (no action) or miss their next turn. They also cannot perform interrupt actions until then. Armor has no effect. The effect doesn't work against huge creatures, nor against characters who don't depend on hearing.",
    Major: "",
    Massive: "",
    Monstrous: "",
    Boost_1:
      "Sonic Boom. You can take 1 point of stress to give your sonic burst attack an area effect (page 48).",
    Boost_2:
      "Sonar. You can use your SOUND CONTROL to sense your surroundings using sonic waves, allowing you to perceive things normally even in complete darkness.",
    Boost_3: "",
    Boost_4: "",
    Limit_1: "",
    Limit_2: "",
  },
  {
    Name: "Strike",
    Type: "Attack",
    Examples: "Sword, retractable claws, shock gauntlets",
    Base: "You can bash, slash, or thrust more effectively against an opponent close to you. Your Slugfest Damage is increased by +1. The effect cannot be combined with any bonus from EMANATION or SIZE ALTERATION. In addition, you can take 1 point of stress to reduce the effect of armor by half for one attack (rounding up).",
    Major: "Slugfest Damage +2.",
    Massive: "Slugfest Damage +3.",
    Monstrous: "Slugfest Damage +4.",
    Boost_1:
      "Piercing Strike. When you hit with a slugfest attack, you can take 1 point of stress to completely ignore the effects of any armor. This effect does not apply to damage from the Knockback stunt.",
    Boost_2:
      "Sudden Strike. If attacked in slugfest, you can take 1 point of stress to immediately make a slugfest attack against a target within reach as a quick interrupt action, before the attack against you is resolved. Your attack still counts toward your actions for the round.",
    Boost_3:
      "Deadly Strike. The damage from your slugfest attacks counts as sharp, meaning you can spend an extra to trigger the Deadly Hit stunt.",
    Boost_4:
      "Toxic Strike. If your slugfest attack inflicts damage, the target must make a STRENGTH roll (no action) on each turn or suffer 1 additional point of damage (ignoring armor). The effect ends as soon as a STRENGTH roll is successful or the target is broken.",
    Limit_1:
      "Windup Strike. You must spend a quick action right before making a slugfest attack (on the same turn) to gain the effects from your STRIKE.",
    Limit_2: "",
  },
  {
    Name: "Stun",
    Type: "Attack",
    Examples: "Lethargic ray, chemical spray, brainwave disruptor, nano-taser",
    Base: "You can temporarily disable or befuddle an opponent. This works as a shooting attack with Damage 3, Range 0/3. The attack does not inflict any actual damage - instead, if it penetrates any armor, the target must make an immediate PRESENCE roll (no action) or miss their next turn. They also cannot perform interrupt actions until then. STUN doesn't work against huge creatures. No stunts can be chosen when using this power except Double Damage (to determine if the attack penetrates Armor).",
    Major: "",
    Massive: "",
    Monstrous: "",
    Boost_1:
      "Mental Stun. When using your STUN, you can roll for any mental attribute instead of AGILITY. Also, armor has no effect.",
    Boost_2:
      "Potent Stun. The target gets -2 dice to the PRESENCE roll to resist your STUN.",
    Boost_3: "",
    Boost_4: "",
    Limit_1:
      "Requires Touch. When using your STUN, you must attack in slugfest instead of shooting.",
    Limit_2: "",
  },
  {
    Name: "Summoning",
    Type: "Control",
    Examples:
      "Call of the wild, hard light constructs, conjuration magic, autonomous drones",
    Base: "As a full action, you can summon three allies to aid you that immediately arrive within your zone or an adjacent zone. Your allies always act on your turn in the initiative order, and can act even on the turn they appear. As a default, your allies have a rating of 4 in all attributes and Resolve 6. They are treated as minions (page 100) in combat. Each time you activate this power, you may choose one of the below features for your allies:\nVersatile allies. Increase two (separate) attribute ratings of your choice by 2 steps. Remember to increase Resolve if any attributes are increased.\nPowered allies. By taking 1 point of stress, you may choose one Attack, Defense, or Movement power for your allies at the basic level, or one talent.\nMore allies. You summon two additional allies.\nSummoned allies last for a few minutes, until they become broken, until you become broken, or until you take a full action to dismiss them. You cannot summon additional allies while you still have summoned allies active. Your summoned allies are capable of independent actions and can help with rolls (page 83) and are intrinsically linked to you - everything they experience you can perceive and vice versa.",
    Major:
      "You may choose two features for your allies instead of only one. You may choose the same feature multiple times (with cumulative attribute and power level increases).",
    Massive: "You may choose three features for your allies.",
    Monstrous: "You may choose four features.",
    Boost_1: "",
    Boost_2: "",
    Boost_3: "",
    Boost_4: "",
    Limit_1:
      "Delayed Summoning. When you call allies with your SUMMONING, they arrive at the start of your next turn.",
    Limit_2: "",
  },
  {
    Name: "Super-Speed",
    Type: "Movement",
    Examples:
      "Meta mobility, boots of speed, temporal deceleration, riding the lightning",
    Base: "You can run up to 2 zones in a single (quick or full) action. If you take 1 point of stress, you can run up to 4 zones in a single action. You can pass over buildings and through other elevated zones (page 84) and even water, but you must end your movement on the ground or a rooftop.",
    Major:
      "You can run 4 zones in a single action, and 8 zones if you take 1 point of stress.",
    Massive: "You can run 8/16 zones.",
    Monstrous: "You can run 16/32 zones.",
    Boost_1:
      "Fast Tasks. You can use your SUPER-SPEED to perform tasks that take at least a few minutes to complete - like reading a book, disassembling a device, or doing the dishes - in a single round.",
    Boost_2:
      "Untouchable Speed. By taking 1 point of stress, you can use your SUPER-SPEED to move as a quick interrupt action, breaking the turn order. If you move out of range of an attack, it misses automatically.",
    Boost_3: "",
    Boost_4: "",
    Limit_1: "",
    Limit_2: "",
  },
  {
    Name: "Swimming",
    Type: "Movement",
    Examples:
      "Atlantean fins and gills, elixir of the ocean, powered scuba suit, webbed appendages",
    Base: "You can swim in or under water up to 2 zones in a single (quick or full) action. If you take 1 point of stress, you can swim up to 4 zones in a single action. You also have the ability to stay underwater for several hours.",
    Major: "",
    Massive: "",
    Monstrous: "",
    Boost_1:
      "Fast Swimmer. You can swim 4 zones in a single action, and 8 zones if you take 1 point of stress.",
    Boost_2: "",
    Boost_3: "",
    Boost_4: "",
    Limit_1:
      "Surface Breather. You can only stay underwater for a few minutes before returning to the surface for air.",
    Limit_2: "",
  },
  {
    Name: "Swinging",
    Type: "Movement",
    Examples: "Grappling gun, webbing, acrobatics, magical lasso",
    Base: "Using a line, cable, chain, or tentacle, you can swing up to 2 zones in a single (quick or full) action. If you take 1 point of stress, you can swing up to 4 zones in a single action.\nYou can only move into elevated zones (such as rooftops), zones with tall features like trees or construction cranes, or zones adjacent to an elevated zone. You can end your movement in an elevated zone, in an elevated position in a zone adjacent to an elevated position (hanging onto your line), or on the ground.\nYou can also use this power to latch onto a target in an adjacent zone and pull it into your own zone (full action). Against an unwilling target, this works like a shooting attack (without causing damage). The target's weight rating cannot exceed your STRENGTH.",
    Major: "",
    Massive: "",
    Monstrous: "",
    Boost_1:
      "Fast Swinging. You can swing 4 zones in a single action, and 8 zones if you take 1 point of stress.",
    Boost_2: "",
    Boost_3: "",
    Boost_4: "",
    Limit_1:
      "Brachiation. You can't generate your own swing lines, so you can only use SWINGING to move into elevated zones or zones with tall features such as trees, construction cranes, power lines or billboards - not zones adjacent to elevated zones. You also cannot pull targets into your zone.",
    Limit_2: "",
  },
  {
    Name: "Technology Control",
    Type: "",
    Examples:
      "Computer hacking, cybermancy, technokinesis, cybernetic remote interfacing",
    Base: "As a full action, you can interface with and activate, shut down, assemble, or operate any technology or machinery within your zone or an adjacent zone. You can perform any action that you could with the technology or machinery as if you were operating it normally. To access restricted operations or use the technology in an unusual manner, make a REASON roll. If you take control of a weapon, you can fire it in the same action, using AGILITY. Your control lasts for a few minutes or until you are broken.",
    Major: "",
    Massive: "",
    Monstrous: "",
    Boost_1: "",
    Boost_2: "",
    Boost_3: "",
    Boost_4: "",
    Limit_1: "",
    Limit_2: "",
  },
  {
    Name: "Telekinesis",
    Type: "Control",
    Examples:
      "Psychic movement, power ring support fields, mythic force, enlisted spirits",
    Base: "You can lift and move things and people without touching them, purely with the power of your mind. As a full action, you can move and control any physical object or character within your zone or an adjacent zone up to weight rating 4 (400 lb.), and move it up to 2 zones (including elevated altitude). The maximum weight can be increased up to 2 steps by taking an equal amount of stress.\nUsed against an unwilling character, this requires an AGILITY roll (which can be dodged like a shooting attack) but if successful allows you to throw the target into - and through - barriers just like the Knockback stunt for slugfest (page 88) causing 3 points of damage (minus Armor) on each impact.\nYou can also use TELEKINESIS to make a shooting attack with Damage 3, Range 0/2, assuming there are objects to hurl within your zone or an adjacent zone.\nTELEKINESIS also allows precise manipulation of objects with your telekinetic hold as if you were using your hands, such as opening a car door, using a hammer to drive a nail, or retrieving an item from a container. Especially difficult maneuvers require an AGILITY roll, just as if you were using your hands.",
    Major:
      "You can move characters and objects up to weight rating 6 (1 ton) 3 zones and your attack has Damage 4 (also when slamming targets into barriers), Range 0/3.",
    Massive: "Weight limit 8 (10 tons), 4 zones, Damage 5, Range 0/4.",
    Monstrous: "Weight limit 10 (100 tons), 5 zones, Damage 6, Range 0/5.",
    Boost_1:
      "Multiple Targets. You can move several objects or characters at the same time, taking 1 point of stress for each target beyond the first. They must be moved together, from the same starting zone and to the same end zone, and the total weight cannot exceed your weight limit.",
    Boost_2: "",
    Boost_3: "",
    Boost_4: "",
    Limit_1: "",
    Limit_2: "",
  },
  {
    Name: "Telepathy",
    Type: "Sensory",
    Examples:
      "Psychic screening, spiritual enlightenment, enchantment magic, thought projection",
    Base: "You can read minds and project thoughts to others. As a quick action, you can read the surface thoughts of a sentient, living creature within your zone or an adjacent zone, or project a brief telepathic message to them. You don't need to speak the same language.\nAs a full action requiring an INTUITION roll, you can probe further to read deeper thoughts, reasoning, or memories. If your opponent is actively trying to resist you, it's an opposed roll against their PRESENCE.\nYou automatically sense the presence of sentient lifeforms in your zone. As a quick action, roll INTUITION to sense the presence of lifeforms within 3 zones.",
    Major: "",
    Massive: "",
    Monstrous: "",
    Boost_1:
      "Distant Telepathy. If you take 1 point of stress, you can use your TELEPATHY on a target anywhere in the universe, if you know their location or if you can see them.",
    Boost_2:
      "Telepathic Link. As a full action, you can take 1 point of stress to establish a telepathic link to up to five known, allied characters simultaneously, no matter where they are, allowing two-way communication for a few minutes.",
    Boost_3:
      "Memory Alteration. When you use a full action to probe further and read deeper using your TELEPATHY, you can take 1 point of stress to alter the target's memories. The GM has the final say on the scope of the alterations during your current mental probe.",
    Boost_4: "",
    Limit_1:
      "Read Only. You can only use TELEPATHY to read thoughts and sense lifeforms - you cannot mentally project telepathic messages.",
    Limit_2: "",
  },
  {
    Name: "Teleportation",
    Type: "Movement",
    Examples:
      "Personal transporter, dimensional shortcut, matter folding, planar magic",
    Base: "You can travel instantly from one place to another without moving through the space in between. You can teleport up to 2 zones in a single quick action. If you take 1 point of stress, you can teleport up to 4 zones in a single action.",
    Major:
      "You can teleport 4 zones in a single action, and 8 zones if you take 1 point of stress.",
    Massive: "You can teleport 8/16 zones.",
    Monstrous: "You can teleport 16/32 zones.",
    Boost_1:
      "Teleport Allies. You can teleport one willing person in your zone along with you. You can bring up to three additional persons with you by taking an equal amount of stress.",
    Boost_2:
      "Quick Teleport. By taking 1 point of stress, you can teleport as a quick interrupt action, breaking the turn order. If you teleport out of range of an attack, it misses automatically.",
    Boost_3:
      "Portal. As a full action, you can open a two-way portal that human-sized characters can travel through for a few minutes.",
    Boost_4:
      "Distant Travel. Outside of combat, you can teleport across vast distances, even through space. You can teleport to any location with which you are familiar or for which you have the coordinates. You can travel instantly or establish a two-way portal.",
    Limit_1:
      "Specific Location. You always teleport to the same destination, choosen when you select this limit.",
    Limit_2: "",
  },
  {
    Name: "Transformation",
    Type: "Modification",
    Examples:
      "Alchemical formulas, transmogrifier device, molecular rearrangement, transmutation magic",
    Base: "As a full action, you can permanently transform non-living physical matter in your zone up to weight rating 4 (400 lb.) and turn it into a different non-living physical matter. The weight limit can be increased up to 2 steps by taking an equal amount of stress. The power can be used to remove barriers and even as a weapon against non-living opponents like robots and drones - in this case, it counts as a shooting attack with Damage 3 and Range 0, ignoring all Armor on the target.\nThis power is very versatile - the GM has final say on the limits for its use.",
    Major:
      "You can transform matter up to weight rating 6 (1 ton) and your attacks against non-living targets has Damage 4.",
    Massive: "Weight limit 8 (10 tons), Damage 5.",
    Monstrous: "Weight limit 10 (100 tons), Damage 6.",
    Boost_1: "",
    Boost_2: "",
    Boost_3: "",
    Boost_4: "",
    Limit_1:
      "Temporary Transformation. When you use TRANSFORMATION, the matter reverts to its original form after a few minutes.",
    Limit_2: "",
  },
  {
    Name: "Water Control",
    Type: "Control",
    Examples:
      "Hydrokinesis, Atlantean cold forging, trident of the depths, Poseidon's touch",
    Base: "As a full action, you can move and control any liquid with­in your zone or an adjacent zone. You can flood a zone with water or remove all the water from a zone. You can use the power to make a shooting attack with Damage 1, Range 0/1. You can take 1 point of stress to give the attack area effect. If you like, you can have such an attack move the target (except huge creatures) into any adjacent zone of your choice instead of causing damage. Your attack can also use the Knockback stunt.",
    Major:
      "Your WATER CONTROL can cover two zones, of which one needs to be your own zone or an adjacent zone. Also your water attack has base Damage 3.",
    Massive: "Three zones, base Damage 4.",
    Monstrous: "Four zones, base Damage 5.",
    Boost_1:
      "Wellspring. By taking 1 point of stress, you can create your own water in order to control it or make a shooting attack.",
    Boost_2: "",
    Boost_3: "",
    Boost_4: "",
    Limit_1:
      "Submersion. You can only use your WATER CONTROL when you are fully submerged in water.",
    Limit_2: "",
  },
  {
    Name: "Weather Control",
    Type: "Control",
    Examples: "Druidic magic, storm hammer, atmokinesis, magical weathervane",
    Base: "As a full action, you can control the local weather to start or stop precipitation, modify the temperature, or raise or lower wind speed. The new weather, which lasts for a few minutes, still needs to stay within what is possible for the location and season.\nUsed in a single zone, your own or adjacent, you can create a storm so powerful that all movement becomes a full action requiring a STRENGTH roll and all shooting attacks in the zone get -3 dice. You are unaffected by your own storm, which lasts for a few minutes or until you are broken. You can also use WEATHER CONTROL to call lightning, strong winds, or hail to make a shooting attack with Damage 3, Range 0/1.",
    Major:
      "Your local storm can cover two zones (of which one needs to be your zone or an adjacent zone) and your weather attacks have Damage 4, Range 0/2",
    Massive: "Three zones, Damage 5, Range 0/3",
    Monstrous: "Four zones, Damage 6, Range 0/4",
    Boost_1:
      "Hurricane. When using your WEATHER CONTROL to perform a shooting attack, you can take 1 point of stress to give the attack area effect (page 48).",
    Boost_2:
      "Cyclone. When you create a storm in a zone (or zones), the zone is wrecked and all characters in the zone must roll for STRENGTH or be thrown out of the zone (into adjacent zones of your choice).",
    Boost_3: "",
    Boost_4: "",
    Limit_1:
      "Air Control Only. You can only use your WEATHER CONTROL to create local storms and make attacks, not change the weather generally.",
    Limit_2: "",
  },
];

const TYPES = [
    "Attack",
    "Control",
    "Defense",
    "Modification",
    "Movement",
    "Sensory",
];

export const Powers = () => {
    let [visibleTypes, setVisibleTypes] = useState(TYPES);

    const handleChange = (event) => {
        let newVisibleTypes = [];
        event.currentTarget.querySelectorAll(":checked").forEach((checked) => {
            newVisibleTypes.push(checked.value);
        });
        setVisibleTypes(newVisibleTypes);
    };

    return (
        <section className={"bg-white px-2 py-2"}>
            <div className={"d-flex flex-row justify-content-between justify-content-lg-start gap-lg-5 align-items-top align-items-lg-center"}>
                <div>
                    <h1>Powers</h1>
                </div>
                <div>
                    <details className={"px-2 py-1 mb-2 border rounded"}>
                        <summary>Filters</summary>
                        <form
                            className={"d-flex flex-column flex-lg-row"}
                            onChange={handleChange}
                        >
                            {TYPES.map((type) => {
                                return (
                                    <label
                                        className={"me-3"}
                                        htmlFor={type}
                                        key={type}
                                    >
                                        <input 
                                            className={"me-1"}
                                            defaultChecked={visibleTypes.includes(type)}
                                            defaultValue={type}
                                            id={type}
                                            name={"filter-checkbox"}
                                            type={"checkbox"}
                                        />
                                        {type}
                                    </label>
                                )
                            })}
                        </form>
                    </details>
                </div>
            </div>
                        
            {POWER_LIST
                .filter((power) => visibleTypes.includes(power.Type))
                .map((power) => (
                    <details 
                        className={"px-2 py-1 mb-2 border rounded"}
                        key={power.Name.replaceAll(" ", "-")}
                    >
                        <summary>{power.Name} ({power.Type})</summary>
                        <p><strong>Examples:</strong> {power.Examples}</p>
                        <hr />
                        <p>{power.Base}</p>
                        {power.Major?.length ? <p><strong>Major:</strong> {power.Major}</p> : null}
                        {power.Massive?.length ? <p><strong>Massive:</strong> {power.Massive}</p> : null}
                        {power.Monstrous?.length ? <p><strong>Monstrous:</strong> {power.Monstrous}</p> : null}
                        {power.Boost_1?.length ? <p><strong>Boost:</strong> {power.Boost_1}</p> : null}
                        {power.Boost_2?.length ? <p><strong>Boost:</strong> {power.Boost_2}</p> : null}
                        {power.Boost_3?.length ? <p><strong>Boost:</strong> {power.Boost_3}</p> : null}
                        {power.Boost_4?.length ? <p><strong>Boost:</strong> {power.Boost_4}</p> : null}
                        {power.Limit_1?.length ? <p><strong>Limit:</strong> {power.Limit_1}</p> : null}
                        {power.Limit_2?.length ? <p><strong>Limit:</strong> {power.Limit_2}</p> : null}          
                    </details>
                ))
            }
        </section>
    );
};