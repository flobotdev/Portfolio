//import Card from "../../common/Card";
import LinkButton from "../../common/LinkButton";

function ProjectUnicorn() {
  return (
    <section id="project-unicorn" className="skills-section">
      <div>
        <h2>Project Unicorn</h2>
        <p className="project-intro">
          Project Unicorn is a digital card game developed in Unreal Engine,
          inspired by the popular game Unstable Unicorns. This project was
          created for educational purposes to showcase my skills in:
        </p>
        <ul>
          <li>🎮 Unreal Engine Gameplay Programming</li>
          <li>💻 C++ Development</li>
          <li>🎨 UI/UX Design in Unreal Engine</li>
        </ul>
        <i>
          ⚠️ Disclaimer: This project is a fan-made educational recreation and
          is not intended for distribution or commercial use. All rights to
          Unstable Unicorns belong to their respective owners.
        </i>
        <img
          src="/images/unicorn/game.png"
          alt="Project Unicorn gameplay"
          style={{
            width: "100%",
            maxWidth: "800px",
            borderRadius: "8px",
            margin: "1.5rem auto",
            display: "block",
          }}
        />
        <h4>Game Overview:</h4>
        <p>
          Unstable Unicorns is a competitive card game where players race to be
          the first to get seven unicorns in their stable, using Unicorn, Magic,
          Upgrade, and Downgrade cards to build their own herd while sabotaging
          opponents with actions like destroying or stealing their unicorns.
          Turns involve drawing a card, taking one action (playing a card or
          drawing again), and then discarding down to a hand limit, all while
          navigating unique card effects.
        </p>
        <h3>Current Status </h3>
        <p>
          This project is currently in development. The following features are
          implemented/planned:
          <br />
          ✅ Basic card spawning and handling
          <br />
          ✅ Turn-based mechanics
          <br />
          ✅ Player hand and discard logic
          <br />
          ⬜ Multiplayer support
          <br />
          ⬜ Advanced card effects and animations
          <br />
        </p>
        <label>Check out the game here: </label>
        <br />
        <LinkButton
          href={`https://github.com/flobotdev/ProjectUnicorn`}
          className="link-button-generic"
        >
          View Source
        </LinkButton>
        <div></div>
      </div>
    </section>
  );
}

export default ProjectUnicorn;
