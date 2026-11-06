export const CharacterAdvancement = () => {
    return (
        <section className={"bg-white px-3 pb-2"}>
            <h1>Character Advancement</h1>
            <strong>Karma</strong>
            <p>If there is one thing you can be sure of as a superhero in an uncertain world, it's that your actions will have consequences - for the world around you, but also for yourself. In the game, this is represented by karma. You receive karma points after the end of each game session. Talk it through and let the whole group discuss what has happened. For each of the ten questions below that you can reply “yes” to, you get 1 karma point:</p>
            <ul>
                <li>Did you participate in an action scene?</li>
                <li>Did you participate in a social scene?</li>
                <li>Did you act according to your personality?</li>
                <li>Did you act according to your drive?</li>
                <li>Did you act according to your flaw?</li>
                <li>Did you risk your life for a team member or key relationship?</li>
                <li>Did you save the lives of innocent bystanders?</li>
                <li>Did you carry out the responsibilities of your occupation?</li>
                <li>Did you overcome a challenge caused by one of your drawbacks?</li>
                <li>Did you perform an extraordinary action of some kind, that made the whole group cheer?</li>
            </ul>
            <strong>Bad Karma</strong>
            <p>With great power comes great responsibility. Sometimes you might need to use your powers in questionable ways, but that always comes with a cost. You are a hero after all. For each of the questions below that you can reply “yes” to after each game session, you lose 1 karma point:</p>
            <ul>
                <li>Did you fail to come to the aid of a team member or key relationship?</li>
                <li>Did you fail to come to the aid of innocent bystanders?</li>
                <li>Did you fail the responsibilities of your occupation?</li>
                <li>Did you wreck one or more zones?</li>
                <li>Did you kill anyone?</li>
                <li>Did you perform any other immoral deed, as determined by the adventure or the GM?</li>
            </ul>
            <strong>Using Karma</strong>
            <p>You can use your karma to improve your attributes and powers, pick up new talents, and to improve your team base. You can only spend karma points between sessions and if you are in a safe location, such as your team base.</p>
            <ul>
                <li><strong>Attributes:</strong> To increase an attribute by 1 step costs 10 karma points, up to the attribute maximum for your rank. Beyond that, each step costs 20 karma points, up to a maximum of 12. Remember to recalculate your Health or Resolve after increasing an attribute.</li>
                <li><strong>Powers:</strong> Increasing the level of a power (up to the maximal Monstrous level) or adding a new boost to your power costs 20 karma points. Gaining an entirely new power also costs 20 karma, but needs to be explained by something that happened in the game - the GM has final say. New powers don't come from nowhere.</li>
                <li><strong>Talents:</strong> Learning a new talent costs 10 karma points. Some talents (like Windfall) also require an in-game explanation, and can be used for social scenes.</li>
                <li><strong>Drawbacks:</strong> You cannot “learn” new drawbacks, but you can remove an existing drawback for 10 karma points. You need to explain how your hero overcame their drawback.</li>
                <li><strong>Base Upgrades:</strong> A new base upgrade costs 10 karma points. You can pool your points in the team to improve your base. Note that some upgrades have specific prerequisites that must be met.</li>
                <li><strong>Training Facilities:</strong> If your team base has the Training Facilities or Training Simulator upgrade and you spend your time there between sessions, the karma costs for improving your heroes (but not for base upgrades) are reduced. The effects of Training Facilities and the Training Simulator are cumulative. Each upgrade reduces the costs of Attribute, Power, and Talent improvements by 10%.</li>
            </ul>
        </section>
    );
};
