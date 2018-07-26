import React from 'react';
import styled from 'styled-components';

const StyledSkillsBar = styled.div`
  align-content: center;
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  font-size: 2em;
  justify-content: center;
  letter-spacing: .3em;
  margin: 0 auto 1em;
  text-align: center;
  text-indent: .3em;
`;

const StyledSkillsBarLink = styled.a`
  color: #ddd;
  margin: .2em 0;
  text-decoration: none;

  &:hover {
    color: #FFB04C;
  }
`;

function SkillsBar() {
  return (
    <StyledSkillsBar>
      <StyledSkillsBarLink href="https://aws.amazon.com/" rel="Amazon Web Services">
        <i className="devicon-amazonwebservices-plain"></i>
      </StyledSkillsBarLink>

      <StyledSkillsBarLink href="https://www.linuxfoundation.org/">
        <i className="devicon-linux-plain"></i>
      </StyledSkillsBarLink>

      <StyledSkillsBarLink href="https://www.redhat.com/en/technologies/linux-platforms/enterprise-linux">
        <i className="devicon-redhat-plain"></i>
      </StyledSkillsBarLink>

      <StyledSkillsBarLink href="https://www.docker.com/">
        <i className="devicon-docker-plain-wordmark"></i>
      </StyledSkillsBarLink>

      <StyledSkillsBarLink href="https://www.python.org/">
        <i className="devicon-python-plain"></i>
      </StyledSkillsBarLink>

      <StyledSkillsBarLink href="https://git-scm.com/">
        <i className="devicon-git-plain"></i>
      </StyledSkillsBarLink>

      <StyledSkillsBarLink href="https://github.com/">
        <i className="devicon-github-plain"></i>
      </StyledSkillsBarLink>

      <StyledSkillsBarLink href="https://www.w3.org/html/">
        <i className="devicon-html5-plain"></i>
      </StyledSkillsBarLink>

      <StyledSkillsBarLink href="https://www.w3.org/Style/CSS/">
        <i className="devicon-css3-plain"></i>
      </StyledSkillsBarLink>

      <StyledSkillsBarLink href="https://nodejs.org/en/">
        <i className="devicon-nodejs-plain"></i>
      </StyledSkillsBarLink>

      <StyledSkillsBarLink href="https://reactjs.org/">
        <i className="devicon-react-original"></i>
      </StyledSkillsBarLink>

      <StyledSkillsBarLink href="https://webpack.js.org/">
        <i className="devicon-webpack-plain"></i>
      </StyledSkillsBarLink>
    </StyledSkillsBar>
  );
}

export default SkillsBar;
