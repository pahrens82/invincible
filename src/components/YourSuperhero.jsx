export const YourSuperhero = () => {
	return (
		<section className={"bg-white px-3 pb-2"}>
			<h1>Creating Your Superhero</h1>
            <ol>
                <li>Choose your role.
                    <ul>
                        <li>The role describes how you operate as a hero within your team. It's usually a good idea to avoid having several players pick the same role, as this would make the group less diverse during play.</li>
                        <li>The role has no mechanical effect, but it can influence how you choose your occupation, attributes, powers, and talents.</li>
                        <li>The suggested roles are as follows:
                            <ul>
                                <li><strong>Blaster:</strong> You excel at dealing devastating attacks from a distance.</li>
                                <li><strong>Brains:</strong> You adapt to any situation by using cunning and strategy to outsmart your opponents.</li>
                                <li><strong>Brawn:</strong> You are a physical force that relishes surviving and delivering damage.</li>
                                <li><strong>Controller:</strong> You are a master of hindering enemies, assisting allies, and managing the battlefield.</li>
                                <li><strong>Defender:</strong> You are a protector that safeguards allies and engages enemies on the front lines.</li>
                                <li><strong>Leader:</strong> You guide and support your allies with coordination, tactics, will, or inspiration.</li>
                                <li><strong>Striker:</strong> You are a relentless force in close combat that balances strength and mobility.</li>
                                <li><strong>Wildcard:</strong> You are adaptable and unpredictable, overcoming challenges with your versatility.</li>
                            </ul>
                        </li>
                    </ul>
                </li>
                <li>Determine your starting attributes
                    <ul>
                        <li>There are six attributes, three physical and three mental:
                        <ul>
                            <li>Fighting: Hand-to-hand combat, technique, and prowess.</li>
                            <li>Agility: Coordination, speed, mobility, and fine motor skills.</li>
                            <li>Strength: Muscle power, physical force, toughness, and stamina.</li>
                            <li>Reason: Intelligence, comprehension, knowledge, and mental stability.</li>
                            <li>Intuition: Instinct, sensory perception, wisdom, and empathy.</li>
                            <li>Presence: Charisma, amiability, and force of personality.</li>
                        </ul>
                        </li>
                        <li>You have 32 points to spend on your attributes.</li>
                        <li>None of your attributes can start greater than 10.</li>
                    </ul>
                </li>
                <li>Calculate your starting Slugfest damage, Health, and Resolve scores:
                    <ul>
                        <li>Slufest Damage = 1/2 Strength, rounded up.</li>
                        <li>Health = (Fighting + Agility + Strength) / 2, rounded up.</li>
                        <li>Resolve = (Reason + Intuition + Presence) / 2, rounded up.</li>
                    </ul>
                </li>
                <li>Determine your starting powers.
                    <ul>
                        <li>Your character begins play with a combination of 4 power levels and/or Boosts.</li>
                        <li>Every power has a base level (this is just what the power does in its description).</li>
                        <li>Some powers also have Major, Massive, and Monstrous levels, each being an improvement on the prior level. During character creation you can only select up to the Major level. Powers can be upgraded to higher levels in the future.</li>
                        <li>Some powers also list one or more Boosts, which alter the utility of a power. Taking a Boost during character creation costs a power level. Boosts can be purchased in the future.</li>
                        <li>Some powers list Limits, which restrict the utility of a power. Choosing a Limit during character creation allows you to increase the power's level by one step (such as Basic to Major) or choose a Boost for the same power. Limits can only be chosen when you initially acquire a power (including during character creation).</li>
                        <li>You can gain additional starting power levels by sacrificing 2 attribute points per power level. Conversely, you gain 2 more attribute points for each power level you sacrifice, down to a minimum of one power level.</li>
                    </ul>
                </li>
                <li>Choose or roll your power source. Optionally, you can have two or even more power sources. If so, you must each of your powers to one source. Each additional power source beyond the first costs 1 attribute point.</li>
                <li>Choose a starting hero talent.</li>
                <li>Choose or roll your occupation. Occupations determine your Resources, a second starting Talent, and a Key Relationship (which will be handled during session 0). Possible occupations are as follows:
                    <ul>
                        <li>Academic: Resources 5, Talents: Analysis, Cunning, or Knowledgeable</li>
                        <li>Adventurer: Resources 3, Talents: Determined, Indomitable, Lucky Break</li>
                        <li>Artist: Resources 3, Talents: Cunning, Knowledgeable, Supportive</li>
                        <li>Athlete: Resources 4, Talents: Coordinated, Motivator, Second Wind</li>
                        <li>Blue Collar: Resources 3, Talents: Durable, Find Weakness, Unconventional Wisdom</li>
                        <li>Celebrity: Resources 6, Talents: Compelling, Renowned, Sharp-Tongued</li>
                        <li>Criminal: Resources 3, Talents: Manipulator, Merciless, Streetwise</li>
                        <li>Devotee: Resources 2, Talents: Determined, Knowledgeable, Resilience</li>
                        <li>Expert: Resources 5, Talents: Discretion, Knowledgeable, Sharp-Tongued</li>
                        <li>First Responder Resources 4, Talents: Medic, Supportive, Warning Call</li>
                        <li>Investigator: Resources 3, Talents: Insightful, Investigator, Streetwise</li>
                        <li>Law Enforcer: Resources 4, Talents: Guardian, Hard Hitter, Subdue</li>
                        <li>Medic: Resources 5, Talents: Knowledgeable, Medic, Supportive</li>
                        <li>Outsider: Resources 2, Talents: Compelling, Lonwer, Unconventional Wisdom</li>
                        <li>Privileged: Resources 6, Talents: Discretion, Renowned, Windfall</li>
                        <li>Public Servant: Resources 3, Talents: Compelling, Cunning, Supportive</li>
                        <li>Scientist: Resources 4, Talents: Analysis, Investigator, Knowledgeable</li>
                        <li>Secret Agent: Resources 5, Talents: Formidable, Manipulator, Stealthy</li>
                        <li>Soldier: Resources 4, Talents: Commander, Formidable, Tactical Support</li>
                        <li>Student: Resources 3, Talents: Determined, Knowledgeable, Resilience</li>
                        <li>Technician: Resources 4, Talents: Analysis, Knowledgeable, Supportive</li>
                        <li>White Collar: Resources 5, Talents: Cunning, Discretion, Windfall</li>
                    </ul>
                </li>
                <li className={"fst-italic"}>Optional: Buy additional talents and take drawbacks.
                    <ul>
                        <li>You begin play with a talent from your occupation, and a talent of your choice (or rolled randomly). You can start the game with additional talents by paying 1 attribute point for each.</li>
                        <li>Drawbacks are optional. You can select up to two drawbacks. You gain 1 attribute point per drawback you select. It is possible for some drawbacks to removed during the course of play.</li>
                    </ul>
                </li>
                <li>Choose or roll your personality. In this game, your personality offers cues for roleplaying your hero. Doing so gives you 1 karma point at the end of a session.</li>
                <li>Choose your drive. The reason why you expose yourself to the dangers and challenges of being a superhero is called your drive. This brief phrase helps you understand what makes your hero tick and goes deeper than your surface personality. Roleplaying according to your drive gives you 1 karma point at the end of the session.</li>
                <li>Choose your character flaw. Even heroes have weaknesses, some kind of flaw that can get them into trouble and that they struggle to overcome. Roleplaying according to your flaw gives you 1 karma point at the end of the session. If circumstances arise where you clearly act against your flaw, you get 2 karma points instead of 1; you have overcome your flaw and remove it. You must play a full session without a flaw, after which you may choose a new one based on something that has occurred in the game.</li>
                <li>Choose your real and superhero names.</li>
                <li>Assemble your team and base, along with a second Key Relationship (to be handled during session 0).</li>
                <li>You don't start the game with any specific gear except for what would be reasonably included in your standard of living based on your Resources (see the Gear tab).</li>
                <li>Superheroes don't often carry much other than any specialized gear they use for their powers, so encumbrance isn't tracked. See Attribute Score Descriptions below for an idea as to how much your character can lift and/or carry, should that become relevant.</li>
            </ol>
			<h3>Attribute Score Descriptions (plus Super-Strength benchmarks)</h3>
			<ol>
				<li>Poor &ndash; 50 lb.</li>
				<li>Typical &ndash; 100 lb.</li>
				<li>Good &ndash; 200 lb.</li>
				<li>Great &ndash; 400 lb.</li>
				<li>Extraordinary &ndash; 800 lb.</li>
				<li>Incredible &ndash; 1 ton</li>
				<li>Amazing &ndash; 3 tons</li>
				<li>Spectacular &ndash; 10 tons</li>
				<li>Phenomenal &ndash; 30 tons</li>
				<li>Astounding &ndash; 100 tons</li>
				<li>Tremendous &ndash; 300 tons</li>
				<li>Invincible &ndash; 1,000 tons</li>
			</ol>
		</section>
	);
};
