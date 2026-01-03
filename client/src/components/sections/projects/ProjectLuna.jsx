import Card from "../../common/Card";
import VideoPlayer from "../../common/VideoPlayer";

function ProjectLuna() {
  return (
    <section id="project-luna" className="skills-section">
      <div>
        <h2>Project Luna</h2>
        <p className="project-intro">
          Project Luna is a solo Unreal Engine 5 project designed to push my
          understanding of the engine. The project primarily used C++
          programming and selective use of blueprints for specific
          functionalities. The setting is inspired by Yukon area and British
          Columbia, Canada.
        </p>

        <h4>Story:</h4>
        <p>
          You are a private military contractor sent to retrieve an object from
          the [X] company observatory. Upon your arrival you get shown your base
          of operations which is a bunker in the mountain. You will have limited
          resources at your disposal and you will have to scavenge, hunt and
          survive on your own. The locals are bandits that have driven away the
          villagers. Your encounter with them won't be avoidable.
        </p>

        <h4>Day night cycle with weather:</h4>
        <VideoPlayer
          src="/videos/projectluna_daynight.mp4"
          poster="/images/luna/preview.png"
          controls
          muted
        />
        <h3>Tech used:</h3>
        <ul>
          <li>Unreal Engine 5</li>
          <li>C++</li>
          <li>Ultra Dynamic Sky plugin</li>
        </ul>
      </div>

      <div className="cards-grid">
        <Card title="Inventory system" image="/images/luna/inventory3.png">
          <ul>
            <li>Single slot grid based</li>
            <li>Vicinity</li>
            <li>Customizable grid size</li>
            <li>Stackable items</li>
            <li>Consumable items</li>
            <li>Percentage based items</li>
            <li>Easy to add new items and variations of items</li>
            <li>Storage containers</li>
            <li>Replace</li>
          </ul>
        </Card>
        <Card title="Interact system" image="/images/luna/interact3.png">
          <ul>
            <li>Ability to interact with items on ground</li>
            <li>Ability to interact with storage, crafting benches, etc.</li>
            <li>
              Highly customizable - e.g. different interact types and multiple
              choice interact depending on a state
            </li>
          </ul>
        </Card>
        <Card title="Crafting system" image="/images/luna/crafting2.png">
          <ul>
            <li>
              Customizable DataTable list of recipes for each crafting bench
            </li>
            <li>
              Interactive UI to allow the player to automatically set the max
              amount available to craft
            </li>
            <li>Progress bar to show the remaining time to craft one item</li>
          </ul>
        </Card>
        <Card title="Loot spawning system" image="/images/luna/lootsystem.PNG">
          <ul>
            <li>Ability to search containers for loot with randomized loot</li>
            <li>Customizable categories of loot for each container</li>
            <li>
              Containers loot spawn is tied to the config nominal so we don't
              overflow the world
            </li>
            <li>
              Ground loot spawning system with respawner that checks the config
              for nominal loot
            </li>
          </ul>
        </Card>
        <Card title="Mission system" image="/images/luna/questsystem1.png">
          <ul>
            <li>Main story missions that are automatically accepted</li>
            <li>Side missions acceptable from a board</li>
            <li>
              Daily missions acceptable from a board - these missions are
              randomized from a list and added to board at midnight
            </li>
            <li>Customizable missions, tasks and rewards</li>
            <li>Ability to set prerequisite missions or tasks</li>
            <li>Hud shows pinned missions</li>
          </ul>
        </Card>
        <Card
          title="Hideout upgrade system"
          image="/images/luna/construction_all.png"
        >
          <ul>
            <li>
              The upgrades are customizable with item and currency requirements
            </li>
            <li>Time is customizable for each upgrade</li>
            <li>
              Blueprint-like meshes option for the upgrading bench which gets
              changed to the detailed bench after construction is finished
            </li>
          </ul>
        </Card>
      </div>
    </section>
  );
}

export default ProjectLuna;
