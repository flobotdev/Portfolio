import ModCarousel from "../steammods/ModsSection";
import { dayzMods, dayzCollabMods } from "../../../data/steammods";
import Card from "../../common/Card";

function DayZMods() {
  return (
    <section id="dayz-mods" className="skills-section">
      <div>
        <h2>DayZ Mods</h2>
        <p className="project-intro">
          I spent several years modding DayZ, using Enforce Script — a
          class-based, object-oriented language — to create gameplay systems and
          custom features.
        </p>
        <ModCarousel title="Published Mods" initialMods={dayzMods} />
        <ModCarousel title="Collaborations" initialMods={dayzCollabMods} />
        <h2>Willow Glade Project</h2>
        <p className="project-intro">
          This project was developed to make DayZ a hardcore PVE only experience
          with unique features which help PVE players have a progression feeling
        </p>

        <img
          src="/images/mods/together.jpg"
          alt="Willow Glade server New Year's eve"
          style={{
            width: "100%",
            maxWidth: "800px",
            borderRadius: "8px",
            margin: "1.5rem auto",
            display: "block",
          }}
        />
      </div>
      <div className="cards-grid">
        <Card title="PVE Mode" image="/images/mods/trader.jpg">
          <p>
            Willow Glade is a PVE server. There were some challenges in
            achieving a full PVE mode but through several iterations I managed
            to disable any player damage towards another player. Using
            territories I have changed so only players part of the territories
            can dismantle items, open doors, interact with certain items that
            could cause griefing. This helped players feel the safest in the
            server.
          </p>
        </Card>
        <Card title="Custom infected AI" image="/images/mods/customzombie.png">
          <p>
            Custom infected AI were used to protect rare loot areas like the
            toxic zones. But also several mini bosses were set in the open world
            that would reward the players with better ammunition and special
            items. The Wendigo found in the woods was the favourite AI as it
            kept players on the edge.
          </p>
        </Card>
        <Card title="Instanced storage" image="/images/mods/traderstorage.png">
          <p>
            At the trading areas players could find containers where they could
            rent weekly a storage which was instanced to their character. DayZ
            container inventory is normally visible to anyone in vicinity but I
            coded the instanced storage to be visible only to the player owning
            by checking the player ID.
          </p>
        </Card>
        <Card title="Searchable containers" image="/images/mods/searching.png">
          <p>
            Looting in DayZ consists just of finding items on the ground. I have
            created a system to be able to search containers that spawn random
            loot, defined in a json file. These containers can have custom life
            time in the world and the positions. The system was made generic
            controlled by the json files server side so it can be extended to
            any kind of container, loot and locations.
          </p>
        </Card>
        <Card title="Inventory crafting" image="/images/mods/crafting.png">
          <p>
            The inventory crafting was created by making the custom UI where
            player can find a list of recipes. The player can select which item
            to use and it is indicating if item is available in inventory. The
            list of recipes and ingredients is controlled by a json file on
            server side.
          </p>
        </Card>
        <Card title="Halloween Event" video="/videos/willowglade_event.mp4">
          <p>
            The Halloween event was set in a custom made cemetery. Majority of
            assets were custom added for this event. Event was allowing maximum
            of 5 players and it was split in several waves, getting harder and
            harder. Players would not be able to advance if not all AI were
            defeated. After defeating final boss each player was rewarded with a
            lot of rare items.
          </p>
        </Card>
      </div>
    </section>
  );
}

export default DayZMods;
