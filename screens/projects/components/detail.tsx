import { FC } from "react"
import styled from "styled-components"
import { device } from "helpers/media-query"
import { Project } from "screens/projects"

const ProjectDetail: FC<{ project: Project }> = ({ project }) => {
  return (
    <Container>
      <h1>{project.title}</h1>
      <ProjectHeader>
        <LogoContainer>
          <Logo src={project.logo} className="next-image"></Logo>
        </LogoContainer>
        <RoleContainer>
          <RoleLabel>Role: {project.role}</RoleLabel>
          <DevelopedLabel>Developed at {project.company}</DevelopedLabel>
          <TagContainer>
            {project.tags.map((tag, index) => (
              <TagLabel key={`tag-${index}`}>{tag}</TagLabel>
            ))}
          </TagContainer>
        </RoleContainer>
      </ProjectHeader>
      <ProjectBody>
        <PlatformContainer>
          {project.platforms.map((platform, index) => {
            return (
              <PlatformItem key={`platform-${index}`}>
                <PlatformIcon className="next-image" src={platform.icon} />
                <PlatformName>{platform.name}</PlatformName>
              </PlatformItem>
            )
          })}
        </PlatformContainer>
        <p>{project.description}</p>
      </ProjectBody>
      <ProjectFooter>
        <p>
          Involvement: {project.involvement} <br />
          Date: {project.date}
        </p>
        <TechList>
          <TagContainer>
            {project.tech.map((tech, index) => (
              <TagLabel key={`tech-${index}`}>{tech}</TagLabel>
            ))}
          </TagContainer>
        </TechList>
      </ProjectFooter>
    </Container>
  )
}

const Container = styled.div`
  width: 100%;
`

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

const Logo = styled.img`
  width: 80px;
  max-width: 80px;
  margin: 0 !important;
`

const ProjectHeader = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-bottom: 1em;
`

const RoleContainer = styled.div`
  margin-left: 0.8em;
  display: flex;
  flex-direction: column;
`

const RoleLabel = styled.h3`
  color: #4e5f69;
  margin: 0 !important;
  @media ${device.lowerThanLaptop} {
    font-size: 1.2em !important;
  }
  @media ${device.lowerThanMobileM} {
    font-size: 1em !important;
  }
`

const DevelopedLabel = styled.span`
  color: #575757;
  font-size: 1em;
  @media ${device.lowerThanLaptop} {
    font-size: 1em;
  }
  @media ${device.lowerThanMobileM} {
    font-size: 1em;
  }
`

const TagContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  flex-direction: row;
  flex-wrap: wrap;
`

const TagLabel = styled.span`
  background: #000;
  color: #fff;
  border-radius: 1em;
  padding-left: 1em;
  padding-right: 1em;
  font-size: 0.7em;
  margin-right: 0.5em;
  margin-bottom: 0.5em;
`

const ProjectBody = styled.div`
  width: 100%
  margin-bottom: 2em;
`

const PlatformContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
`

const PlatformItem = styled.div`
  margin: 0.5em;
  display: flex;
  justify-content: flex-start;
`

const PlatformIcon = styled.img`
  height: 1.5em;
  margin: 0 0.25em 0 0 !important;
`

const PlatformName = styled.span`
  margin-left: 0.25em;
  font-size: 0.8em;
  @media ${device.lowerThanTablet} {
    display: none;
  }
`

const ProjectFooter = styled.div`
  width: 100%;
  margin-top: 1em;
  color: #575757;
  font-size: 1em;
`

const TechList = styled.div`
  word-wrap: anywhere;
`

export default ProjectDetail
