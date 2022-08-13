import { FC } from "react"
import styled from "styled-components"
import { Project } from "."
import ProjectDetail from "./components/detail"
import ProjectHeader from "./components/header"

const ProjectContent: FC<OwnProps> = ({
  project,
  current,
  total,
  onNext,
  onPrevious,
}) => {
  return (
    <Container>
      <ProjectHeader
        current={current}
        total={total}
        onNext={onNext}
        onPrevious={onPrevious}
      />
      <ProjectDetail project={project} />
    </Container>
  )
}

type OwnProps = {
  project: Project
  current: number
  total: number
  onNext(): void
  onPrevious(): void
}

const Container = styled.div`
  width: 100%;
`

export default ProjectContent
