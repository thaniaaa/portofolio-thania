import Badge from './Badge'
import usePointerSpotlight from '../../hooks/usePointerSpotlight'

function SkillsPanel({ groups }) {
  const spotlightProps = usePointerSpotlight()

  return (
    <aside
      className="skills-panel spotlight-surface"
      aria-labelledby="skills-title"
      {...spotlightProps}
    >
      <span className="cursor-spotlight" aria-hidden="true" />
      <div className="skills-panel__title">
        <span aria-hidden="true">✿</span>
        <h3 id="skills-title">Core Skills</h3>
      </div>

      <div className="skills-panel__groups">
        {groups.map((group) => (
          <div className="skills-panel__group" key={group.id}>
            <p>{group.label}</p>
            <div className="skills-panel__badges">
              {group.items.map((skill) => (
                <Badge tone={group.tone} interactive key={skill}>
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        ))}
      </div>
    </aside>
  )
}

export default SkillsPanel
