import { FC } from "react"
import styled from "styled-components"
import { device } from "helpers/media-query"

const ProjectHeader: FC<OwnProps> = ({
  current,
  total,
  onNext,
  onPrevious,
}) => {
  return (
    <Header>
      <ProjectCounter>
        {current} of {total} projects
      </ProjectCounter>
      <Navigation>
        <NavigationButton
          className="next-image"
          src={"/images/icons/previous.png"}
          onClick={onPrevious}
        />
        <NavigationButton
          className="next-image"
          src={"/images/icons/next.png"}
          onClick={onNext}
        />
      </Navigation>
    </Header>
  )
}

type OwnProps = {
  current: number
  total: number
  onNext(): void
  onPrevious(): void
}

const Header = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
`

const ProjectCounter = styled.p`
  font-size: 1em;
  @media ${device.lowerThanMobileM} {
    font-size: 0.8em;
  }
`

const Navigation = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-left: 1em;
  margin-right: 1em;
`

const NavigationButton = styled.img`
  cursor: pointer;
  width: 2em;
  margin-top: 1.25em !important;
  margin-bottom: 1.25em !important;

  @media ${device.lowerThanMobileM} {
    font-size: 0.8em;
  }
`

export default ProjectHeader
